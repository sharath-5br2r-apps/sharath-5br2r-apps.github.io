import json
import urllib.request
import os
import re
import gzip

MASTER_DATA_FILE = "data.json"
GZ_DATA_FILE = "data.json.gz"

REPOS = [
    "sharath-5br2r-apps/revanced-morphe-xposed-builder",
    "sharath-5br2r-apps/Dolphin-Extra",
    "sharath-5br2r-apps/LeviLaunchroid-Extra",
    "sharath-5br2r-apps/Eden-Workflow",
    "sharath-5br2r-apps/ZalithLauncher2-Extra",
]

# Pre-compiled regular expressions for performance
ARCH_SUFFIXES_REGEX = re.compile(
    r"(?:-(arm64-v8a|armeabi-v7a|arm64|aarch64|arm-v7a|arm32|x86_64|amd64|x86|universal|all))+$",
    re.IGNORECASE
)
VERSION_PREFIX_REGEX = re.compile(r"^v(?=[a-z0-9])", re.IGNORECASE)
ASSET_FILENAME_REGEX = re.compile(
    r"^([a-z0-9-]+)-v([a-zA-Z0-9._-]+?)(?:-(?:arm64-v8a|armeabi-v7a|arm64|aarch64|x86_64|amd64|x86|universal|all))?\.(?:apk|zip|exe|msi|appimage|dmg|7z|tar\.gz)$",
    re.IGNORECASE
)

def load_script_js_config(filepath="script.js"):
    """
    Parse patchEngineTokens, patchTokens, and variantTokens directly from script.js
    so script.js remains the single source of truth.
    """
    known_engines = []
    variant_keywords = []

    candidates = [
        filepath,
        os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "script.js")
    ]

    script_path = None
    for cand in candidates:
        if os.path.exists(cand):
            script_path = cand
            break

    if script_path:
        try:
            with open(script_path, "r", encoding="utf-8") as f:
                content = f.read()

            engine_match = re.search(r"patchEngineTokens:\s*new\s+Set\(\s*\[(.*?)\]\s*\)", content, re.DOTALL)
            if engine_match:
                extracted = re.findall(r'["\']([a-zA-Z0-9_-]+)["\']', engine_match.group(1))
                if extracted:
                    known_engines = [t.lower() for t in extracted]

            variant_match = re.search(r"variantTokens:\s*new\s+Set\(\s*\[(.*?)\]\s*\)", content, re.DOTALL)
            if variant_match:
                extracted_v = re.findall(r'["\']([a-zA-Z0-9_-]+)["\']', variant_match.group(1))
                if extracted_v:
                    variant_keywords = [v.lower() for v in extracted_v]
        except Exception as e:
            print(f"Warning: Could not parse script.js config: {e}")

    return known_engines, variant_keywords

KNOWN_ENGINES, VARIANT_KEYWORDS = load_script_js_config()

def load_json(filepath):
    """Load JSON from a local file if it exists."""
    if os.path.exists(filepath):
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"Warning: Could not read {filepath}: {e}")
    return None

def parse_target_key(key):
    """
    Parse a key like 'youtube-morphe', 'gboard-morphe-adobo', 'youtube'
    into (app_key, engine_key).
    """
    tokens = key.lower().strip().split("-")
    engine_idx = -1
    for i, t in enumerate(tokens):
        if t in KNOWN_ENGINES:
            engine_idx = i
            break

    if engine_idx != -1:
        app_key = "-".join(tokens[:engine_idx]) or tokens[0]
        engine = tokens[engine_idx]
        return app_key, engine

    return key.lower().strip(), "default"

def parse_asset_filename(filename):
    """
    Parse filename like 'youtube-morphe-v19.16.39-arm64-v8a.apk' or 'twitch-v14.9.1.apk'
    Returns dict with app_key, engine, version or None.
    """
    match = ASSET_FILENAME_REGEX.match(filename.lower().strip())
    if not match:
        return None
    
    target_part, version = match.groups()
    if target_part.endswith("-module"):
        target_part = target_part[:-7]
        
    app_key, engine = parse_target_key(target_part)
    return {
        "target": target_part,
        "app_key": app_key,
        "engine": engine,
        "version": version
    }

def merge_entry_into_master(master_build, target_key, info, release_tag=None):
    """
    Store the release build.json entry under its release tag and exact artifact filename.
    The release asset already contains the complete metadata record.
    """
    if not isinstance(info, dict):
        return

    target_key = target_key.strip()
    entry = dict(info)
    if "changelog" not in entry and "changlog" in entry:
        entry["changelog"] = entry.pop("changlog")

    if "patches" in entry and isinstance(entry["patches"], str):
        entry["patches"] = [p.strip() for p in re.split(r"[|\s]+", entry["patches"]) if p.strip()]
    if "changelog" in entry and isinstance(entry["changelog"], str):
        entry["changelog"] = [c.strip() for c in re.split(r"[|\s]+", entry["changelog"]) if c.strip()]

    if release_tag:
        entry["release_tag"] = release_tag
    bucket_key = release_tag or "untagged"
    if bucket_key not in master_build or not isinstance(master_build.get(bucket_key), dict):
        master_build[bucket_key] = {}
    master_build[bucket_key][target_key] = entry

    # If entry contains assets[], also index each asset by its filename (name)
    # and map camelCase patch fields (appliedPatches, skippedPatches, failedPatches)
    # so individual artifact queries resolve accurately in builds.json and data.json.
    assets_list = entry.get("assets")
    if isinstance(assets_list, list):
        for asset_item in assets_list:
            if isinstance(asset_item, dict):
                asset_name = asset_item.get("name")
                if asset_name:
                    asset_meta = dict(entry)
                    # Overlay per-asset specific fields
                    for field in [
                        "arch", "ext", "os", "densities", "native_libraries", "min_sdk",
                        "appliedPatches", "skippedPatches", "failedPatches"
                    ]:
                        if field in asset_item:
                            asset_meta[field] = asset_item[field]
                    # Map camelCase to snake_case for backwards compatibility
                    if "appliedPatches" in asset_item:
                        asset_meta["applied_patches"] = asset_item["appliedPatches"]
                    if "skippedPatches" in asset_item:
                        asset_meta["skipped_patches"] = asset_item["skippedPatches"]
                    if "failedPatches" in asset_item:
                        asset_meta["failed_patches"] = asset_item["failedPatches"]
                    master_build[bucket_key][asset_name] = asset_meta

def detect_os(text):
    clean = (text or "").lower()
    if "termux" in clean:
        return "Termux"
    if any(x in clean for x in ["macos", "mac", "darwin", "osx", ".dmg", ".pkg"]):
        return "macOS"
    if any(x in clean for x in ["windows", "win", ".exe", ".msi"]):
        return "Windows"
    if any(x in clean for x in ["linux", "ubuntu", "debian", ".appimage", ".deb", ".rpm"]):
        return "Linux"
    if "android" in clean or any(clean.endswith(ext) for ext in [".apk", ".apks", ".apkm", ".xapk", ".zip"]):
        return "Android"
    return "Android"

def update_data_json_catalog(master_build, data_json_path=MASTER_DATA_FILE):
    """
    Enrich data.json and data.json.gz with per-asset metadata fields:
    os, isVanilla, min_sdk, densities, native_libraries, cli,
    patches, changelog, applied_patches, failed_patches, skipped_patches.
    """
    data = load_json(data_json_path)
    if not isinstance(data, dict) or "apps" not in data:
        print(f"Warning: {data_json_path} does not exist or has no 'apps' key. Skipping data.json generation.")
        return

    # Build filename index of metadata across all buckets
    meta_by_name = {}
    for tag, b_dict in master_build.items():
        if isinstance(b_dict, dict):
            for fname, meta in b_dict.items():
                if fname not in meta_by_name:
                    meta_by_name[fname] = meta

    enriched_asset_count = 0

    for app in data.get("apps", []):
        for brand in app.get("brands", []):
            brand_key = (brand.get("brandKey") or "").lower()
            for b in brand.get("builds", []):
                rel_tag = str(b.get("build") or b.get("releaseId") or "")
                bucket = master_build.get(rel_tag, {}) if isinstance(master_build.get(rel_tag), dict) else {}
                patches_list = b.get("patchSources") or []
                applied_list = b.get("appliedPatches") or []
                changelog_list = b.get("changelogs") or []

                is_vanilla = bool(
                    brand_key in ["official", "vanilla", "stock"] or
                    (not patches_list and not applied_list)
                )

                for a in b.get("assets", []):
                    fname = a.get("name", "")
                    meta = bucket.get(fname) or meta_by_name.get(fname) or {}

                    a_os = meta.get("os") or a.get("os") or detect_os(fname)
                    a["os"] = a_os
                    a["isVanilla"] = is_vanilla

                    fields_to_sync = [
                        "min_sdk", "densities", "native_libraries", "cli",
                        "patches", "changelog", "applied_patches", "failed_patches", "skipped_patches"
                    ]
                    for f in fields_to_sync:
                        val = meta.get(f)
                        if (val is None or val == "" or val == []) and f == "applied_patches":
                            val = applied_list
                        if (val is None or val == "" or val == []) and f == "patches":
                            val = patches_list
                        if (val is None or val == "" or val == []) and f == "changelog":
                            val = changelog_list
                        if val is not None and val != "" and val != []:
                            a[f] = val

                    enriched_asset_count += 1

    # Sort apps alphabetically
    data["apps"].sort(key=lambda a: a["appName"].lower())

    data_json_bytes = json.dumps(data, separators=(",", ":"), ensure_ascii=False).encode("utf-8")
    with open(MASTER_DATA_FILE, "wb") as f:
        f.write(data_json_bytes)
    with gzip.open(GZ_DATA_FILE, "wb", compresslevel=9) as f:
        f.write(data_json_bytes)
    print(f"[OK] Successfully wrote {MASTER_DATA_FILE} & {GZ_DATA_FILE} ({enriched_asset_count} assets updated)")

def fetch_releases_from_repos(repos=REPOS):
    """
    Fetch releases from the 5 configured repositories using GitHub API.
    Handles pagination across multiple pages and supports GITHUB_TOKEN or GH_TOKEN.
    """
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    headers = {"User-Agent": "NullStore-Cache-Updater"}
    if token:
        headers["Authorization"] = f"Bearer {token}"

    all_releases = []
    for repo in repos:
        print(f"Fetching releases for {repo}...")
        owner, name = repo.split("/")
        page = 1
        repo_count = 0
        while True:
            url = f"https://api.github.com/repos/{repo}/releases?per_page=100&page={page}"
            try:
                req = urllib.request.Request(url, headers=headers)
                with urllib.request.urlopen(req, timeout=15) as resp:
                    rels = json.loads(resp.read().decode("utf-8"))
                    if not isinstance(rels, list) or len(rels) == 0:
                        break
                    for rel in rels:
                        rel["repoOwner"] = owner
                        rel["repoName"] = name
                        rel["repoUrl"] = f"https://github.com/{repo}"
                        all_releases.append(rel)
                    repo_count += len(rels)
                    if len(rels) < 100:
                        break
                    page += 1
            except Exception as e:
                print(f"Warning: Failed to fetch page {page} for {repo}: {e}")
                break
        print(f"  [OK] Fetched {repo_count} releases from {repo}")

    return all_releases

def main():
    print("Fetching releases directly from GitHub API for the 5 repos...")
    releases = fetch_releases_from_repos()

    if not isinstance(releases, list) or len(releases) == 0:
        print("Error: Releases list is empty. Aborting cache update.")
        sys.exit(1)

    # Ingest release build metadata files
    master_build = {}
    new_build_data_count = 0
    new_artifact_count = 0

    for rel in releases:
        rel.pop("build_data", None)

        assets = rel.get("assets", [])
        build_json_assets = [
            a for a in assets
            if a.get("name") in ["build.json", "manifest.json"] or (
                a.get("name", "").startswith("build.") and a.get("name", "").endswith(".json")
            )
        ]
        for build_json_asset in build_json_assets:
            if "browser_download_url" in build_json_asset:
                try:
                    url = build_json_asset["browser_download_url"]
                    req = urllib.request.Request(
                        url,
                        headers={"User-Agent": "NullStore-Cache-Updater"}
                    )
                    with urllib.request.urlopen(req, timeout=10) as resp:
                        build_data = json.loads(resp.read().decode("utf-8"))
                        new_build_data_count += 1
                        print(f"[OK] Ingested {build_json_asset.get('name')} for Release {rel.get('tag_name')}")

                        if isinstance(build_data, dict):
                            for target_key, info in build_data.items():
                                merge_entry_into_master(master_build, target_key, info, rel.get('tag_name'))
                                new_artifact_count += 1
                except Exception as e:
                    print(f"Warning: Could not fetch {build_json_asset.get('name')} for {rel.get('tag_name')}: {e}")

    # Remove legacy redundant files if they exist locally
    for legacy_file in ["builds.json", "builds.json.gz", "releases.json", "releases.json.gz"]:
        if os.path.exists(legacy_file):
            try:
                os.remove(legacy_file)
            except OSError:
                pass

    print(f"[OK] Ingested {new_artifact_count} artifacts from {new_build_data_count} build metadata files across {len(master_build)} release tags")

    # Update data.json and data.json.gz with per-asset metadata
    update_data_json_catalog(master_build)

if __name__ == "__main__":
    main()
