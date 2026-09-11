import json
import urllib.request
import os
import re
import gzip

MASTER_BUILD_FILE = "builds.json"
GZ_BUILD_FILE = "builds.json.gz"
MASTER_RELEASES_FILE = "releases.json"
GZ_RELEASES_FILE = "releases.json.gz"
MASTER_DATA_FILE = "data.json"
GZ_DATA_FILE = "data.json.gz"

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

def prune_stale_metadata(builds, releases):
    """
    Prunes apps and versions from builds that no longer exist
    in ANY active release (across the 100 numbered releases + archive release).
    """
    live_apps = set()
    live_versions_by_app = {}
    live_tags = set()

    for rel in releases:
        tag_name = rel.get("tag_name")
        if tag_name:
            live_tags.add(tag_name)
        for asset in rel.get("assets", []):
            name = asset.get("name", "")
            parsed = parse_asset_filename(name)
            if parsed:
                app_k = parsed["app_key"]
                target_k = parsed["target"]
                ver = VERSION_PREFIX_REGEX.sub("", parsed["version"])

                live_apps.add(app_k)
                live_apps.add(target_k)

                if app_k not in live_versions_by_app:
                    live_versions_by_app[app_k] = set()
                live_versions_by_app[app_k].add(ver)

                if target_k not in live_versions_by_app:
                    live_versions_by_app[target_k] = set()
                live_versions_by_app[target_k].add(ver)

    if not live_apps:
        print("Warning: Live inventory empty, skipping pruning to avoid data loss.")
        return builds

    # Prune stale top-level app keys
    all_stored_keys = list(builds.keys())
    pruned_apps = []
    for k in all_stored_keys:
        clean_k = k.lower().replace("-", "").replace("_", "")
        is_live = any(
            clean_k in live.lower().replace("-", "").replace("_", "") or
            live.lower().replace("-", "").replace("_", "") in clean_k
            for live in live_apps
        )

        if not is_live:
            del builds[k]
            pruned_apps.append(k)
            continue

        # Prune stale versions within the app
        app_data = builds[k]
        if isinstance(app_data, dict):
            allowed_versions = live_versions_by_app.get(k, set())
            clean_allowed = {VERSION_PREFIX_REGEX.sub("", v) for v in allowed_versions}

            # Top two versions for fallback retention
            version_keys = list(app_data.keys())
            top_versions_set = set(sorted(version_keys, reverse=True)[:2])

            for ver_k in list(app_data.keys()):
                clean_ver = VERSION_PREFIX_REGEX.sub("", ver_k)
                keep_version = (clean_ver in clean_allowed) or (ver_k in top_versions_set)
                if not keep_version:
                    del app_data[ver_k]
                    print(f"[-] Pruned purged version: {k} v{ver_k}")
                    continue

                # Prune tags within this version, keeping live tags or the latest tag
                if isinstance(app_data[ver_k], dict):
                    tags = list(app_data[ver_k].keys())
                    live_or_latest = [t for t in tags if t in live_tags]
                    if not live_or_latest and tags:
                        live_or_latest = [max(tags)]
                    for tag_k in tags:
                        if tag_k not in live_or_latest:
                            del app_data[ver_k][tag_k]
                    if not app_data[ver_k]:
                        del app_data[ver_k]

        if isinstance(app_data, dict) and not app_data:
            del builds[k]
            pruned_apps.append(k)

    if pruned_apps:
        print(f"[-] Cleaned up deleted apps from metadata: {', '.join(pruned_apps)}")

    return builds

def detect_os(text):
    clean = (text or "").lower()
    if "termux" in clean:
        return "termux"
    if any(x in clean for x in ["macos", "mac", "darwin", "osx", ".dmg", ".pkg"]):
        return "macos"
    if any(x in clean for x in ["windows", "win", ".exe", ".msi"]):
        return "windows"
    if any(x in clean for x in ["linux", "ubuntu", "debian", ".appimage", ".deb", ".rpm"]):
        return "linux"
    if "android" in clean or any(clean.endswith(ext) for ext in [".apk", ".apks", ".apkm", ".xapk", ".zip"]):
        return "android"
    return "android"

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


def main():
    if not os.path.exists("releases_new.json"):
        print("releases_new.json does not exist.")
        return

    releases = load_json("releases_new.json")
    if not isinstance(releases, list) or len(releases) == 0:
        print("Releases is empty or not a list.")
        return

    # Rebuild from the complete release cache so deleted/replaced artifacts do
    # not leave stale metadata behind in builds.json.
    master_build = {}

    new_build_data_count = 0
    new_artifact_count = 0

    for rel in releases:
        # Strip any legacy embedded build_data so releases.json remains a clean GitHub API dump
        rel.pop("build_data", None)

        # Check for build.json / build.${x}.json / manifest.json asset in release
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

    # Save nested builds.json grouped by release tag.
    builds_json_bytes = json.dumps(master_build, indent=2, ensure_ascii=False).encode("utf-8")
    with open(MASTER_BUILD_FILE, "wb") as f:
        f.write(builds_json_bytes)
    with gzip.open(GZ_BUILD_FILE, "wb", compresslevel=9) as f:
        f.write(builds_json_bytes)
    print(f"[OK] Successfully wrote {MASTER_BUILD_FILE} & {GZ_BUILD_FILE} ({new_artifact_count} artifacts across {len(master_build)} release tags)")

    # Save 100% clean releases.json cache
    releases_json_bytes = json.dumps(releases, separators=(",", ":")).encode("utf-8")
    with open(MASTER_RELEASES_FILE, "wb") as f:
        f.write(releases_json_bytes)
    with gzip.open(GZ_RELEASES_FILE, "wb", compresslevel=9) as f:
        f.write(releases_json_bytes)
    print(f"[OK] Successfully wrote clean {MASTER_RELEASES_FILE} & {GZ_RELEASES_FILE} ({len(releases)} releases, {new_build_data_count} metadata files ingested)")

    # Update data.json and data.json.gz with per-asset metadata
    update_data_json_catalog(master_build)

if __name__ == "__main__":
    main()
