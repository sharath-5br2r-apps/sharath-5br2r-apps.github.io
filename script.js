/**
 * ==========================================
 * CONFIGURATION & CUSTOMIZATION
 * Edit these values to update the app catalog behavior, branding, and notices.
 * ==========================================
 */
const CONFIG = {
  // Support for multiple GitHub APK release repositories
  repos: [
    { owner: "sharath-5br2r-apps", repo: "revanced-morphe-xposed-builder" },
    { owner: "sharath-5br2r-apps", repo: "Eden-Workflow" },
    { owner: "sharath-5br2r-apps", repo: "Dolphin-Extra" },
    { owner: "sharath-5br2r-apps", repo: "LeviLaunchroid-Extra" },
  ],
  cacheDuration: 1, // Cache duration in minutes

  // App Categories for the filter buttons
  appCategories: {
    amazon: ["amazon", "alexa", "primevideo", "amazonindia"],
    google: ["google", "gboard"],
    youtube: ["youtube"],
    meta: ["threads", "instagram", "messenger", "facebook", "!plusmessenger"],
    vpn: ["1111warp", "vpnify", "vpn", "protonvpn"],
    emulator: ["dolphin", "emulator"],
    games: ["levilauncher", "levilaunchroid", "game", "games"],
    social: ["twitter", "discord", "threads", "instagram", "messenger", "facebook", "tiktok", "reddit", "x-morphe", "xshim", "comtwitter", "!hbomax", "!vix", "!moviebox", "!terabox", "!netflix"],
    video: ["youtube", "primevideo", "tiktok", "jiohotstar", "hbomax", "vix", "moviebox", "netflix", "!youtubemusic"],
    docs: ["adobeacrobat", "microsoftexcel", "microsoftword", "moonreader", "office"],
    music: ["youtubemusic", "symfonium", "music"],
  },

  // Words ignored in the dynamic app filters (must be lowercase)
  sharedAppWordStoplist: new Set([
    "messenger", "document", "reader", "extra", "builder", "signed", "clone",
    "morphe", "revanced", "xposed", "app", "apps", "free", "pro", "premium",
    "latest", "official", "release", "module", "mode", "tools", "utility",
    "android", "desktop", "patch", "patches", "custom", "version", "v1", "v2"
  ]),

  // Known tokens indicating a patch name starts (must be lowercase)
  knownPatchTokens: new Set([
    "revanced", "morphe", "xposed", "instafel", "lspatch", "npatch", "signed"
  ]),

  // Known tokens indicating a variant (must be lowercase)
  variantKeywords: new Set([
    "anddea",
    "binarymend",
    "hooman",
    "rushiranpise",
    "hoodles",
    "paresh",
    "xtra",
    "icysymmetra",
    "jasonwu1994",
    "piko",
    "inotia00",
    "revenge",
    "exp",
    "nord",
    "mocha",
    "privacy",
    "materialu",
    "foss",
    "gplay",
    "adobo",
    "patcheddit",
    "nightly",
    "androidtv",
    "alt",
    "clone",
    "revanced",
    "rvx",
    "xshim",
    "gfp",
    "stock",
    "windows",
    "linux",
    "android",
    "stylus",
    "dh6k",
    "legacy",
    "optimized",
    "optimised",
    "clang",
    "pgo",
    "gcc",
    "msvc",
    "chromeos",
    "steamdeck",
    "rog-ally",
    "rogally",
    "lto",
    "bolt",
    "standard",
  ]),

  // Known architectures (used for regex parsing)
  knownArchs: [
    "arm64-v8a",
    "arm64",
    "aarch64",
    "armeabi-v7a",
    "arm-v7a",
    "arm32",
    "x86_64",
    "x86",
    "universal",
    "all",
  ],

  // Brand name overrides (keys must be lowercase)
  brandOverrides: {
    adm: "Advanced Download Manager",
    youtube: "YouTube",
    revanced: "ReVanced",
    tiktok: "TikTok",
    soundcloud: "SoundCloud",
    xrecorder: "XRecorder",
    calcnote: "CalcNote",
    imdb: "IMDb",
    trakt: "trakt.TV",
    github: "GitHub",
    vpn: "VPN",
    rvx: "ReVanced Extended",
    anddea: "Anddea",
    exp: "Experimental",
    macrodroid: "MacroDroid",
    ticktick: "TickTick",
    fing: "Fing - Network Tools",
    sdmaid: "SD Maid 2/SE",
    mocha: "Mocha Theme",
    nord: "Nord Theme",
    materialu: "Material You",
    photoshop: "Adobe Photoshop",
    lightroom: "Adobe Lightroom",
    xodo: "Xodo PDF Reader & Editor",
    hellochinese: "HelloChinese: Learn Chinese",
    gplay: "Google Play",
    foss: "FOSS",
    gboard: "Google Keyboard (Gboard)",
    wps: "WPS",
    rar: "RAR",
    adguard: "AdGuard",
    moonplus: "Moon+",
    eyecon: "Eyecon Caller ID & Spam Block",
    camscanner: "CamScanner",
    inshorts: "Inshorts - News in 60 words",
    warp: "1.1.1.1 + WARP",
    acalendar: "aCalendar",
    at4k: "AT4K",
    androidtv: "Android TV",
    disneyplus: "Disney+",
    hbomax: "HBO Max",
    vix: "ViX",
    komoot: "komoot - hike, bike & run",
    vpnify: "VPNify",
    snorelab: "SnoreLab",
    myfitnesspal: "MyFitnessPal",
    terabox: "TeraBox",
    plutotv: "PlutoTV",
    accuweather: "AccuWeather",
    pixiv: "pixiv",
    mxplayer: "MX Player",
    moviebox: "MovieBox",
    kinestop: "KineStop",
    x: "X / Twitter",
    hooman: "hooman",
    rushiranpise: "rushiranpise",
    hoodles: "hoodles",
    binarymend: "binarymend",
    paresh: "Paresh",
    xtra: "Xtra",
    icysymmetra: "icysymmetra",
    jasonwu1994: "jasonwu1994",
    piko: "Piko",
    xshim: "X-Shim",
    jiohotstar: "JioHotstar",
    dolphin: "Dolphin Emulator",
    official: "Official",
    gfp: "Game For Peace Spoof",
    levilaunchroid: "LeviLaunchroid",
    levilaunchroidextra: "LeviLaunchroid Extra",
    stylus: "Stylus",
    dh6k: "dh6k",
    bitwarden: "Bitwarden",
    oxygenupdater: "Oxygen Updater",
    pc: "PC",
    bravebeta: "Brave Browser Beta",
    bravestable: "Brave Browser",
    eden: "Eden Emulator",
    edenemulator: "Eden Emulator",
    edenlegacy: "Eden (Legacy)",
    genshinspoof: "Genshin Spoof",
    optimisedgenshinspoof: "Genshin Impact (Optimised -> Genshin Spoof)",
    yuanshen: "Genshin Impact",
    legacy: "Legacy",
    optimized: "Optimised (Genshin Spoof)",
    optimised: "Optimised (Genshin Spoof)",
    clang: "Clang",
    pgo: "PGO",
    gcc: "GCC",
    msvc: "MSVC",
    chromeos: "ChromeOS",
    steamdeck: "Steam Deck",
    rogally: "ROG Ally (Zen 4)",
    lto: "LTO",
    bolt: "BOLT",
    standard: "Standard",
  },

  // Map app slugs to true Android Package IDs for Obtainium
  appIds: {
    eden: {
      default: "dev.eden.eden_emulator",
      legacy: "dev.legacy.eden_emulator",
      genshin: "com.miHoYo.Yuanshen",
      genshinspoof: "com.miHoYo.Yuanshen",
      optimised: "com.miHoYo.Yuanshen",
      optimized: "com.miHoYo.Yuanshen",
      optimisedgenshinspoof: "com.miHoYo.Yuanshen",
      optimizedgenshinspoof: "com.miHoYo.Yuanshen",
    },
    edenemulator: {
      default: "dev.eden.eden_emulator",
      legacy: "dev.legacy.eden_emulator",
      genshin: "com.miHoYo.Yuanshen",
      genshinspoof: "com.miHoYo.Yuanshen",
      optimised: "com.miHoYo.Yuanshen",
      optimized: "com.miHoYo.Yuanshen",
      optimisedgenshinspoof: "com.miHoYo.Yuanshen",
      optimizedgenshinspoof: "com.miHoYo.Yuanshen",
    },
    edenlegacy: "dev.legacy.eden_emulator",
    edenemulatorlegacy: "dev.legacy.eden_emulator",
    yuanshen: "com.miHoYo.Yuanshen",
    genshinimpact: "com.miHoYo.Yuanshen",
    genshinspoof: "com.miHoYo.Yuanshen",
    "1111warp": "com.cloudflare.onedotonedotonedotone",
    acalendar: "org.withouthat.acalendar",
    adguard: "com.adguard.android",
    advanceddownloadmanager: "com.dv.adm",
    adobeacrobat: "com.adobe.reader",
    adobelightroom: "com.adobe.lrmobile",
    adobephotoshopmix: "com.adobe.photoshopmix",
    bitwarden: "com.x8bit.bitwarden",
    bravebeta: "com.brave.browser_beta",
    bravestable: "com.brave.browser",
    amazonalexa: "com.amazon.dee.app",
    amazonindia: "in.amazon.mShop.android.shopping",
    accuweather: "com.accuweather.android",
    alldocumentreader: "alldocumentsreader.docuemntviewer",
    at4klauncher: "com.overdevs.at4k",
    automate: "com.llamalab.automate",
    autosync: "com.ttxapps.autosync",
    batteryguru: "com.paget96.batteryguru",
    betamaniac: "it.mirko.beta",
    bravebrowser: "com.brave.browser",
    calcnote: "com.appumstudios.calcnote",
    caloriecounter: "com.fatsecret.android",
    camscanner: "com.intsig.camscanner",
    cricbuzz: "com.cricbuzz.android",
    cryptomator: "org.cryptomator",
    documentscanner: "com.cv.docscanner",
    duolingo: "com.duolingo",
    disneyplus: "com.disney.disneyplus",
    dolphinemulator: {
      default: "org.dolphinemu.dolphinemu",
      gfp: "com.tencent.tmgp.pubgmhd",
      gameforpeacespoof: "com.tencent.tmgp.pubgmhd",
    },
    discord: "com.discord",
    eyeconcalleridspamblock: "com.eyecon.global",
    facebook: "com.facebook.katana",
    fingnetworktools: "com.overlook.android.fing",
    github: "com.github.android",
    goodreads: "com.goodreads",
    gboard: {
      default: "com.google.android.inputmethod.latin",
      clone: "dev.jason.com.google.android.inputmethod.latin"
    },
    googlekeyboard: {
      default: "com.google.android.inputmethod.latin",
      clone: "dev.jason.com.google.android.inputmethod.latin"
    },
    googlenews: "com.google.android.apps.magazines",
    googlephotos: {
      revanced: "app.revanced.android.apps.photos",
      morphe: "app.morphe.android.apps.photos",
      default: "com.google.android.apps.photos",
    },
    googlerecorder: "com.google.android.apps.recorder",
    hbomax: "com.wbd.hbomax",
    hermit: "com.chimbori.hermitcrab",
    hellochineselearnchinese: "com.hellochinese",
    holavpn: "org.hola.play",
    iconpacker: "cn.ommiao.iconpacker",
    instagram: {
      default: "com.instagram.android",
      instafel: {
        default: "com.instagram.android",
        clone: "com.instafel.android"
      }
    },
    inshot: "com.camerasideas.instashot",
    inshortsnewsin60words: "com.nis.app",
    imdb: "com.imdb.mobile",
    jiohotstar: "in.startv.hotstar",
    kinestop: "com.urbandroid.kinestop",
    komoothikebikerun: "de.komoot.android",
    levilaunchroid: "org.levimc.launcher",
    levilaunchroidextra: "org.levimc.launcher",
    levilauncher: "org.levimc.launcher",
    levimc: "org.levimc.launcher",
    luminawallpapers: "com.lumina.wallpapers",
    macrodroid: "com.arlosoft.macrodroid",
    medium: "com.medium.reader",
    merriamwebsterdictionary: "com.merriamwebster",
    messenger: "com.facebook.orca",
    microsoftlens: "com.microsoft.office.officelens",
    microsoftedge: "com.microsoft.emmx",
    microsoftword: "com.microsoft.office.word",
    microsoftexcel: "com.microsoft.office.excel",
    oxygenupdater: "com.arjanvlek.oxygenupdater",
    pcremote: "com.monect.portable",
    moonreader: "com.flyersoft.moonreader",
    moonplusreader: "com.flyersoft.moonreader",
    moneymanager: "com.realbyteapps.moneymanagerfree",
    moviebox: {
      default: "com.community.oneroom",
      androidtv: "com.community.mbox.tv"
    },
    mxplayer: "com.mxtech.videoplayer.pro",
    myfitnesspal: "com.myfitnesspal.android",
    netflix: { androidtv: "com.netflix.ninja" },
    niagaralauncher: "bitpit.launcher",
    ninjavpn: "app.ninjavpn.android",
    novalauncher: "com.teslacoilsw.launcher",
    pandora: "com.pandora.android",
    peacock: "com.peacocktv.peacockandroid",
    photomath: "com.microblink.photomath",
    pinterest: "com.pinterest",
    pixiv: "jp.pxv.android",
    plusmessenger: "org.telegram.plus",
    plutotv: { androidtv: "tv.pluto.android" },
    pocketcasts: "au.com.shiftyjelly.pocketcasts",
    podcastaddict: "com.bambuna.podcastaddict",
    poweramp: "com.maxmpz.audioplayer",
    primevideo: {
      default: "com.amazon.avod.thirdpartyclient",
      androidtv: "com.amazon.amazonvideo.livingroom.mod"
    },
    protonmail: "ch.protonmail.android",
    protonvpn: "ch.protonvpn.android",
    projectivylauncher: "com.spocky.projengmenu",
    sdmaid2se: "eu.darken.sdmse",
    showly: "com.michaldrabik.showly2",
    smartlauncher6: "ginlemon.flowerfree",
    solidexplorer: "pl.solidexplorer2",
    soundcloud: "com.soundcloud.android",
    snorelab: "com.snorelab.app",
    speedtest: "org.zwanoo.android.speedtest",
    strava: "com.strava",
    symfonium: "app.symfonik.music.player",
    telegram: {
      default: "org.telegram.messenger",
      foss: "org.telegram.messenger.web",
    },
    terabox: "com.dubox.drive",
    theweatherchannel: "com.weather.Weather",
    threads: "com.instagram.barcelona",
    ticktick: "com.ticktick.task",
    tiktok: "com.zhiliaoapp.musically",
    todoist: "com.todoist",
    trakttv: "tv.trakt.trakt",
    truecaller: "com.truecaller",
    tubi: "com.tubitv",
    tumblr: "com.tumblr",
    twitch: "tv.twitch.android.app",
    reddit: "com.reddit.frontpage",
    rumble: "com.rumble.battles",
    ventusky: "cz.ackee.ventusky",
    viber: "com.viber.voip",
    vix: "com.univision.prendetv",
    vpnify: "com.vpn.free.hotspot.secure.vpnify",
    rar: "com.rarlab.rar",
    wallcraft: "com.wallpaperscraft.wallpaper",
    waze: "com.waze",
    windscribevpn: "com.windscribe.vpn",
    wpsoffice: "cn.wps.moffice_eng",
    twitter: "com.twitter.android",
    x: "com.twitter.android",
    xodopdfreadereditor: "com.xodo.pdf.reader",
    xrecorder: "videoeditor.videorecorder.screenrecorder",
    youtube: {
      revanced: {
        default: "app.revanced.android.youtube",
        rvx: "app.rvx.android.youtube",
        revancedextended: "app.rvx.android.youtube",
        revancedadvanced: "anddea.youtube",
        anddea: "anddea.youtube",
      },
      morphe: {
        default: "app.morphe.android.youtube",
        anddea: "anddea.youtube",
      }, 
      default: "com.google.android.youtube",
    },
    youtubemusic: {
      revanced: {
        default: "app.revanced.android.apps.youtube.music",
        rvx: "app.rvx.android.apps.youtube.music",
        revancedextended: "app.rvx.android.apps.youtube.music",
        anddea: "anddea.youtube.music",
        revancedadvanced: "anddea.youtube.music",
      },
      morphe: {
        default: "app.morphe.android.apps.youtube.music",
        anddea: "anddea.youtube.music",
      },
      default: "com.google.android.apps.youtube.music",
    },
  },

  // App-specific notices to display on App Cards
  appNotices: [
    {
      triggers: ["youtube", "google"],
      className: "microg-note",
      title: "Login Issue",
      text: "Signing into Google account on APK (not Module) requires MicroG. Please install one from below before trying to sign in.",
      links: [
        { label: "Morphe", url: "https://github.com/MorpheApp/MicroG-RE/releases/latest" },
        { label: "ReVanced", url: "https://github.com/ReVanced/GmsCore/releases/latest" },
      ],
    },
    {
      triggers: ["twitter"],
      className: "twitter-login-note",
      title: "Login Issue",
      text: "Since October 2025, Twitter has started checking whether the app is modified or if phone integrity fails during login.",
      links: [
        { label: "Workarounds", url: "https://t.me/pikopatches/1/59772" },
      ],
    },
    {
      triggers: ["amazon", "primevideo"],
      className: "amazon-signing-note",
      title: "Amazon Shared Permissions Issue",
      text: "Due to disabling of shared permissions patch, All Amazon Apps have to be installed with common signature.",
      links: [
        { label: "Download apps from here", url: "./" },
      ],
    },
    {
      triggers: ["dolphinemulator"],
      className: "dolphin-note",
      title: "Dolphin Extra",
      text: "It is a fork of Dolphin that incorporates aspects from DolphinCS and Better-Wii-Menu-DE.",
      links: [
        { label: "Source Code", url: "https://github.com/sharath-5br2r-apps/Dolphin-Extra" },
      ],
    },
    {
      triggers: ["levilaunchroid", "levilaunchroidextra"],
      className: "levilaunchroid-note",
      title: "LeviLaunchroid Extra",
      text: "Additional modules and builds for LeviLaunchroid.",
      links: [
        { label: "Source Code", url: "https://github.com/sharath-5br2r-apps/LeviLaunchroid-Extra" },
      ],
    },
  ],
};

// Helper to normalize configured repositories list
function getConfigRepos() {
  if (Array.isArray(CONFIG.repos) && CONFIG.repos.length > 0) {
    return CONFIG.repos.map((r) => {
      if (typeof r === "string") {
        const [owner, repo] = r.split("/");
        return { owner, repo };
      }
      return r;
    });
  }
  if (CONFIG.owner && CONFIG.repo) {
    return [{ owner: CONFIG.owner, repo: CONFIG.repo }];
  }
  return [{ owner: "sharath-5br2r-apps", repo: "revanced-morphe-xposed-builder" }];
}

// Explicit Extension Matching (Includes .tar.{ext} like .tar.gz, .tar.xz, .tar.bz2, .tar.zst)
const ALLOWED_EXT_REGEX = /\.(apk|apks|xapk|apkm|exe|msi|appimage|dmg|pkg|deb|rpm|flatpak|snap|zip|7z|rar|tgz|tar(\.[a-z0-9]+)?)$/i;
const EXT_STRIP_REGEX = /\.(apk|apks|xapk|apkm|exe|msi|appimage|dmg|pkg|deb|rpm|flatpak|snap|zip|7z|rar|tgz|tar(\.[a-z0-9]+)?)$/i;

// Cached DOM references
const DOM = {};

function initDOM() {
  DOM.builds = document.getElementById("builds");
  DOM.loading = document.getElementById("loading");
  DOM.error = document.getElementById("error");
  DOM.searchInput = document.getElementById("searchInput");
  DOM.searchWrap = DOM.searchInput?.closest(".search-input-wrap");
  DOM.searchClearBtn = document.getElementById("searchClearBtn");
  DOM.sortSelect = document.getElementById("sortSelect");
  DOM.appFilterButtons = document.getElementById("appFilterButtons");
  DOM.catalogCountText = document.getElementById("catalogCountText");
  DOM.lastUpdateText = document.getElementById("lastUpdateText");
  DOM.themeBtn = document.getElementById("themeBtn");
  DOM.menuBtn = document.getElementById("menuBtn");
  DOM.actionMenu = document.getElementById("actionMenu");
  DOM.patchModal = document.getElementById("patchModal");
  DOM.patchModalTitle = document.getElementById("patchModalTitle");
  DOM.patchModalBody = document.getElementById("patchModalBody");
  DOM.appliedPatchesModal = document.getElementById("appliedPatchesModal");
  DOM.appliedPatchesTitle = document.getElementById("appliedPatchesTitle");
  DOM.appliedPatchesMeta = document.getElementById("appliedPatchesMeta");
  DOM.appliedPatchesBody = document.getElementById("appliedPatchesBody");
  DOM.patchSearchInput = document.getElementById("patchSearchInput");
  DOM.patchCountBadge = document.getElementById("patchCountBadge");
  DOM.obtainiumModal = document.getElementById("obtainiumModal");
  DOM.obtainiumTitle = document.getElementById("obtainiumTitle");
  DOM.obtainiumBody = document.getElementById("obtainiumBody");
  DOM.obtainiumBtn = document.getElementById("obtainiumBtn");
  DOM.toastNotification = document.getElementById("toastNotification");
  DOM.themeColorMeta = document.getElementById("themeColorMeta");

  // Dynamically insert Repository filter snackbar element above categories if missing
  DOM.repoFilterButtons = document.getElementById("repoFilterButtons");
  if (!DOM.repoFilterButtons && DOM.appFilterButtons) {
    DOM.repoFilterButtons = document.createElement("div");
    DOM.repoFilterButtons.id = "repoFilterButtons";
    DOM.repoFilterButtons.className = "filter-buttons-wrap repo-filter-buttons";
    DOM.repoFilterButtons.style.marginBottom = "8px";
    DOM.appFilterButtons.parentNode.insertBefore(DOM.repoFilterButtons, DOM.appFilterButtons);
  }
}

// State
let allReleases = [];
let cachedFullCatalog = [];
let searchTerm = "";
let repoFilter = "all"; // "all" | "owner/repo"
let appCategoryFilter = "all"; // "all" | "google" | "meta" | "vpn" | "word-..."
let sortMode = "recent"; // "recent" | "popular" | "name"
let dynamicAppFilters = [];
let currentAppCatalog = [];
let activeModalAppKey = null;
let activeModalPatchKey = null;
let modalBuildFilter = "all";
let modalVariantFilter = "all";
let themeMode = "system";
let activeAppliedPatchesList = [];

// Progressive Render State
let currentVisibleCount = 0;
const RENDER_CHUNK_SIZE = 40;
const SHARED_APP_WORD_MIN_COUNT = 2;

// Caches for Memoization
const parseCache = new Map();
const tokenCache = new Map();
let masterBuildDataCache = null;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initDOM();
  setupTheme();
  setupEventListeners();

  // Pre-fill state from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const urlQuery = urlParams.get("q");
  if (urlQuery) {
    searchTerm = urlQuery.toLowerCase();
    if (DOM.searchInput) {
      DOM.searchInput.value = urlQuery;
      DOM.searchWrap?.classList.add("has-value");
    }
  }

  const urlSort = urlParams.get("sort");
  if (urlSort && ["recent", "popular", "name"].includes(urlSort)) {
    sortMode = urlSort;
    if (DOM.sortSelect) DOM.sortSelect.value = sortMode;
  }

  const urlRepo = urlParams.get("repo");
  if (urlRepo) {
    repoFilter = urlRepo;
  }

  const urlCat = urlParams.get("cat");
  if (urlCat) {
    appCategoryFilter = urlCat;
  }

  loadReleases();
});

// Theme Management
function setupTheme() {
  const savedTheme = localStorage.getItem("theme");
  themeMode = ["light", "dark", "system"].includes(savedTheme) ? savedTheme : "system";
  applyTheme(themeMode);

  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
  mediaQuery.addEventListener("change", () => {
    if (themeMode === "system") applyTheme("system");
  });
}

function applyTheme(theme) {
  const isLight =
    theme === "light"
      ? true
      : theme === "dark"
        ? false
        : window.matchMedia("(prefers-color-scheme: light)").matches;

  document.body.classList.toggle("light-mode", isLight);
  if (DOM.themeColorMeta) {
    DOM.themeColorMeta.setAttribute("content", isLight ? "#ffffff" : "#000000");
  }

  if (DOM.themeBtn) {
    DOM.themeBtn.textContent = theme === "system" ? "🖥️" : theme === "light" ? "☀️" : "🌙";
    DOM.themeBtn.setAttribute("aria-label", `Theme mode: ${theme}`);
  }
}

// Modal Generic Controller
function showModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("closing");
  modalEl.classList.add("open");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function hideModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("closing");

  // Prevent accessibility warnings by removing focus from modal elements before hiding
  if (document.activeElement && modalEl.contains(document.activeElement)) {
    document.activeElement.blur();
  }

  setTimeout(() => {
    modalEl.classList.remove("open");
    modalEl.classList.remove("closing");
    modalEl.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".modal-overlay.open:not(.closing)")) {
      document.body.classList.remove("modal-open");
    }
  }, 180);
}

// Event Listeners
function setupEventListeners() {
  let searchTimeout;

  // Theme Toggle Button
  if (DOM.themeBtn) {
    DOM.themeBtn.addEventListener("click", () => {
      const nextTheme = themeMode === "system" ? "light" : themeMode === "light" ? "dark" : "system";
      themeMode = nextTheme;
      localStorage.setItem("theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  // Floating Action Menu
  if (DOM.menuBtn && DOM.actionMenu) {
    DOM.menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      DOM.actionMenu.classList.toggle("open");
      DOM.menuBtn.setAttribute("aria-expanded", DOM.actionMenu.classList.contains("open"));
    });

    document.addEventListener("click", (e) => {
      if (DOM.actionMenu.classList.contains("open") && !DOM.actionMenu.contains(e.target)) {
        DOM.actionMenu.classList.remove("open");
        DOM.menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Search Input (Debounced)
  const syncClearBtn = () => {
    if (DOM.searchWrap && DOM.searchInput) {
      DOM.searchWrap.classList.toggle("has-value", DOM.searchInput.value.length > 0);
    }
  };

  if (DOM.searchInput) {
    DOM.searchInput.addEventListener("input", (e) => {
      syncClearBtn();
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchTerm = e.target.value.toLowerCase().trim();
        syncUrlParams();
        filterAndRenderReleases();
      }, 180);
    });

    DOM.searchInput.addEventListener("focus", (e) => {
      if (window.innerWidth <= 768) {
        // Wait for the virtual keyboard to finish animating (usually ~300ms)
        // Otherwise, the programmatic smooth scroll conflicts with the keyboard scroll,
        // permanently breaking hit-testing areas on mobile Chrome/Safari.
        setTimeout(() => {
          const searchBox = e.target.closest(".search-box") || e.target;
          const y = searchBox.getBoundingClientRect().top + window.scrollY - 85;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 300);
      }
    });
  }

  if (DOM.searchClearBtn && DOM.searchInput) {
    const handleClear = (e) => {
      e.preventDefault(); // Prevent input blur, keeping keyboard open and stopping layout shifts
      if (DOM.searchInput.value === "") return;
      DOM.searchInput.value = "";
      searchTerm = "";
      syncClearBtn();
      syncUrlParams();
      filterAndRenderReleases();
    };
    DOM.searchClearBtn.addEventListener("pointerdown", handleClear);
    DOM.searchClearBtn.addEventListener("click", handleClear);
  }

  // Repository Selection Filter Buttons
  if (DOM.repoFilterButtons) {
    DOM.repoFilterButtons.addEventListener("click", (e) => {
      const filterBtn = e.target.closest(".repo-pill-btn") || e.target.closest(".filter-btn");
      if (!filterBtn) return;
      const selectedRepo = filterBtn.dataset.repo || "all";
      if (repoFilter === selectedRepo && selectedRepo !== "all") {
        repoFilter = "all";
      } else {
        repoFilter = selectedRepo;
      }
      syncUrlParams();
      filterAndRenderReleases();
    });
  }

  // Secondary Category Filter Buttons
  if (DOM.appFilterButtons) {
    DOM.appFilterButtons.addEventListener("click", (e) => {
      const filterBtn = e.target.closest(".filter-btn");
      if (!filterBtn) return;
      const selectedFilter = filterBtn.dataset.filter || "all";
      if (appCategoryFilter === selectedFilter && selectedFilter !== "all") {
        appCategoryFilter = "all";
      } else {
        appCategoryFilter = selectedFilter;
      }
      syncUrlParams();
      filterAndRenderReleases();
    });
  }

  // Handle Browser Back/Forward Navigation
  window.addEventListener("popstate", () => {
    const urlParams = new URLSearchParams(window.location.search);
    searchTerm = (urlParams.get("q") || "").toLowerCase();
    if (DOM.searchInput) {
      DOM.searchInput.value = urlParams.get("q") || "";
      DOM.searchWrap?.classList.toggle("has-value", Boolean(searchTerm));
    }
    sortMode = urlParams.get("sort") || "recent";
    if (DOM.sortSelect) DOM.sortSelect.value = sortMode;
    repoFilter = urlParams.get("repo") || "all";
    appCategoryFilter = urlParams.get("cat") || "all";
    filterAndRenderReleases();
  });

  // Sort Selector
  if (DOM.sortSelect) {
    DOM.sortSelect.addEventListener("change", (e) => {
      sortMode = e.target.value;
      syncUrlParams();
      filterAndRenderReleases();
    });
  }

  // App Cards & Modal Delegate Click
  if (DOM.builds) {
    DOM.builds.addEventListener("click", (e) => {
      const trigger = e.target.closest(".channel-box-btn");
      if (trigger) {
        e.stopPropagation();
        openPatchModal(
          trigger.dataset.appKey,
          trigger.dataset.patchKey,
          trigger.dataset.channel || "all",
          trigger.dataset.variant || "all"
        );
        return;
      }

      const card = e.target.closest(".app-card");
      if (card) {
        const isSummaryClick = e.target.closest(".app-card-summary");
        const isOpen = card.classList.contains("open");

        if (isSummaryClick || !isOpen) {
          if (!isOpen) {
            document.querySelectorAll(".app-card.open").forEach(c => {
              if (c !== card) c.classList.remove("open");
            });
            card.classList.add("open");

            setTimeout(() => {
              const rect = card.getBoundingClientRect();
              if (rect.top < 20 || rect.height > window.innerHeight) {
                window.scrollBy({ top: rect.top - 20, behavior: "smooth" });
              } else if (rect.bottom > window.innerHeight) {
                window.scrollBy({ top: rect.bottom - window.innerHeight + 20, behavior: "smooth" });
              }
            }, 360);
          } else {
            card.classList.remove("open");
          }
        }
      }
    });
  }

  // Downloads Modal Filter Delegate
  if (DOM.patchModal) {
    DOM.patchModal.addEventListener("click", (e) => {
      const card = e.target.closest(".modal-build-card");
      if (card) {
        const isHeaderClick = e.target.closest(".modal-build-header");
        const isOpen = card.classList.contains("open");
        const isInteractive = e.target.closest("a, button, .patch-applied-btn");

        if (isHeaderClick || (!isOpen && !isInteractive)) {
          if (!isOpen) {
            const modalBody = card.closest(".modal-body");
            if (modalBody) {
              modalBody.querySelectorAll(".modal-build-card.open").forEach(c => {
                if (c !== card) c.classList.remove("open");
              });
            }
            card.classList.add("open");

            setTimeout(() => {
              const modalBody = card.closest(".modal-body");
              if (modalBody) {
                const containerRect = modalBody.getBoundingClientRect();
                const rect = card.getBoundingClientRect();

                const offsetTop = rect.top - containerRect.top;
                const offsetBottom = rect.bottom - containerRect.bottom;

                if (offsetTop < 0 || rect.height > containerRect.height) {
                  modalBody.scrollBy({ top: offsetTop - 8, behavior: "smooth" });
                } else if (offsetBottom > 0) {
                  modalBody.scrollBy({ top: offsetBottom + 8, behavior: "smooth" });
                }
              }
            }, 360);
          } else if (isHeaderClick) {
            card.classList.remove("open");
          }
          if (isHeaderClick || !isInteractive) return;
        }
      }

      const filterBtn = e.target.closest(".modal-filter-btn");
      if (filterBtn && !filterBtn.disabled) {
        const filterType = filterBtn.dataset.filter;
        if (filterType.startsWith("variant-")) {
          modalVariantFilter = filterType.slice(8);
        } else {
          modalBuildFilter = filterType;
        }
        renderOpenPatchModal();
        return;
      }

      const appliedTrigger = e.target.closest(".patch-applied-btn");
      if (appliedTrigger) {
        e.preventDefault();
        e.stopPropagation();
        openAppliedPatchesModal(
          appliedTrigger.dataset.appKey,
          appliedTrigger.dataset.patchKey,
          appliedTrigger.dataset.buildKey
        );
        return;
      }

      if (e.target.id === "patchModal" || e.target.closest(".modal-close")) {
        closePatchModal();
      }
    });
  }

  // Applied Patches Modal
  if (DOM.appliedPatchesModal) {
    DOM.appliedPatchesModal.addEventListener("click", (e) => {
      if (e.target.id === "appliedPatchesModal" || e.target.closest(".modal-close")) {
        closeAppliedPatchesModal();
      }
    });
  }

  if (DOM.patchSearchInput) {
    DOM.patchSearchInput.addEventListener("input", (e) => {
      filterAppliedPatchesList(e.target.value);
    });
  }

  // Obtainium Modal
  if (DOM.obtainiumBtn) {
    DOM.obtainiumBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openObtainiumModal();
    });
  }

  if (DOM.obtainiumModal) {
    DOM.obtainiumModal.addEventListener("click", (e) => {
      if (e.target.id === "obtainiumModal" || e.target.closest(".modal-close")) {
        closeObtainiumModal();
      }
    });
  }

  // Global ESC key listener
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePatchModal();
      closeAppliedPatchesModal();
      closeObtainiumModal();
    }
  });



  // Infinite Scroll Observer
  const sentinel = document.createElement("div");
  sentinel.id = "scroll-sentinel";
  sentinel.style.height = "1px";
  if (DOM.builds) DOM.builds.after(sentinel);

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        renderNextChunk();
      }
    },
    { rootMargin: "400px" },
  );
  observer.observe(sentinel);
}

function syncUrlParams() {
  const url = new URL(window.location);
  if (searchTerm) url.searchParams.set("q", searchTerm);
  else url.searchParams.delete("q");

  if (sortMode !== "recent") url.searchParams.set("sort", sortMode);
  else url.searchParams.delete("sort");

  if (repoFilter && repoFilter !== "all") url.searchParams.set("repo", repoFilter);
  else url.searchParams.delete("repo");

  if (appCategoryFilter && appCategoryFilter !== "all") url.searchParams.set("cat", appCategoryFilter);
  else url.searchParams.delete("cat");

  history.replaceState(null, "", url);
}

// Releases Loader
async function loadReleases() {
  try {
    setPillState("checking", "Checking for updates...");

    const cached = getCachedReleases();
    if (cached) {
      allReleases = cached;
      if (DOM.loading) DOM.loading.style.display = "none";
      if (DOM.error) DOM.error.style.display = "none";
      rebuildCatalogCache();
      updateLastUpdateTimestamp();
      filterAndRenderReleases();
      return;
    }

    if (DOM.loading) DOM.loading.style.display = "block";
    if (DOM.error) DOM.error.style.display = "none";

    const cacheBuster = Date.now();
    let fetchedData = null;
    let useFallback = true;

    try {
      const response = await fetch(`releases.json?v=${cacheBuster}`);
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          fetchedData = data;
          useFallback = false;
        }
      }
    } catch (e) {
      console.warn("Network error fetching releases.json, using fallback...", e);
    }

    if (useFallback) {
      const repos = getConfigRepos();
      const fetchPromises = repos.map(async (r) => {
        try {
          const response = await fetch(
            `https://api.github.com/repos/${r.owner}/${r.repo}/releases`,
            { headers: { Accept: "application/vnd.github.v3+json" } }
          );
          if (!response.ok) return [];
          const data = await response.json();
          if (Array.isArray(data)) {
            return data.map((release) => ({
              ...release,
              repoOwner: r.owner,
              repoName: r.repo,
              repoUrl: `https://github.com/${r.owner}/${r.repo}`,
            }));
          }
          return [];
        } catch (err) {
          console.warn(`Failed to fetch releases for ${r.owner}/${r.repo}:`, err);
          return [];
        }
      });

      const repoResults = await Promise.all(fetchPromises);
      fetchedData = repoResults.flat();
    }

    allReleases = fetchedData;
    cacheReleases(allReleases);
    rebuildCatalogCache();
    fetchMasterBuildData(); // Prefetch builds.json in background for instant modal opens

    if (DOM.loading) DOM.loading.style.display = "none";
    updateLastUpdateTimestamp();
    filterAndRenderReleases();
  } catch (error) {
    console.error("Error loading releases:", error);
    setPillState("error", "Failed to check updates");
    if (DOM.loading) DOM.loading.style.display = "none";
    if (DOM.error) {
      DOM.error.style.display = "block";
      DOM.error.textContent = `Failed to load releases: ${error.message}`;
    }
  }
}

// LocalStorage Caching
function getCachedReleases() {
  const cached = localStorage.getItem("releases_cache");
  const timestamp = localStorage.getItem("releases_cache_time");
  if (!cached || !timestamp) return null;

  const age = (Date.now() - parseInt(timestamp, 10)) / (1000 * 60);
  if (age > CONFIG.cacheDuration) {
    localStorage.removeItem("releases_cache");
    localStorage.removeItem("releases_cache_time");
    return null;
  }
  return JSON.parse(cached);
}

function cacheReleases(releases) {
  try {
    localStorage.setItem("releases_cache", JSON.stringify(releases));
    localStorage.setItem("releases_cache_time", Date.now().toString());
  } catch (e) {
    console.warn("Could not cache releases to localStorage", e);
  }
}

// Build Catalog Cache
function rebuildCatalogCache() {
  cachedFullCatalog = buildAppCatalog(allReleases.filter((r) => !r.draft));
  dynamicAppFilters = getDynamicAppFilters(cachedFullCatalog);
}

// Multi-Channel Variant Catalog Builder
function buildAppCatalog(releases) {
  const sortedReleases = [...releases].sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at),
  );

  const appMap = new Map();

  sortedReleases.forEach((release) => {
    const isArchive = release.tag_name === "stable" || release.tag_name === "beta";
    let releaseType = release.prerelease ? "beta" : "stable";
    if (release.tag_name === "stable") releaseType = "stable";
    if (release.tag_name === "beta") releaseType = "beta";

    const patchMetaFromRelease = extractPatchInfoFromRelease(release);

    (release.assets || []).forEach((asset) => {
      if (!asset.name || !ALLOWED_EXT_REGEX.test(asset.name)) return;

      const arch = detectArchitecture(asset.name);
      const fileType = getFileType(asset.name);
      const parsed = parseAssetDisplay(asset.name, arch, fileType);

      const appKey = normalizeForSearch(parsed.appName);
      if (!appKey) return;

      if (!appMap.has(appKey)) {
        appMap.set(appKey, {
          appKey,
          appName: parsed.appName,
          latestStable: null,
          latestBeta: null,
          patches: new Map(),
          repos: new Set(),
        });
      }

      const appEntry = appMap.get(appKey);
      setLatestBuildMeta(appEntry, releaseType, release);

      const primaryRepo = getConfigRepos()[0];
      const repoOwner = release.repoOwner || (release.html_url ? release.html_url.split("/")[3] : primaryRepo.owner);
      const repoName = release.repoName || (release.html_url ? release.html_url.split("/")[4] : primaryRepo.repo);
      const repoUrl = release.repoUrl || (release.html_url ? release.html_url.split("/releases/")[0] : `https://github.com/${repoOwner}/${repoName}`);
      const repoSlug = `${repoOwner}/${repoName}`;

      appEntry.repos.add(repoSlug);

      const patchKey = normalizeForSearch(parsed.patchName) || "official";
      if (!appEntry.patches.has(patchKey)) {
        appEntry.patches.set(patchKey, {
          patchKey,
          patchName: parsed.patchName,
          latestVersion: null,
          latestPublishedAt: 0,
          variants: new Map(),
          builds: new Map(),
        });
      }

      const patchEntry = appEntry.patches.get(patchKey);
      const variantKey = parsed.rawVariant || (parsed.variant ? normalizeForSearch(parsed.variant) : "default") || "default";
      const variantName = parsed.variant ? parsed.variant : "Standard";

      if (!patchEntry.variants.has(variantKey)) {
        patchEntry.variants.set(variantKey, {
          variantKey,
          variantName,
          latestStable: null,
          latestBeta: null,
          latestArchiveStable: null,
          latestArchiveBeta: null,
        });
      }

      const variantEntry = patchEntry.variants.get(variantKey);
      const buildLabel = getBuildNumberLabel(release);
      const buildDateString = isArchive
        ? asset.updated_at || asset.created_at || release.published_at
        : release.published_at;
      const buildDateMs = new Date(buildDateString).getTime();

      if (!isArchive) {
        const patchDate = new Date(patchEntry.latestPublishedAt).getTime();
        if (buildDateMs > patchDate) {
          patchEntry.latestVersion = parsed.version;
          patchEntry.latestPublishedAt = buildDateString;
        }

        const channelKey = releaseType === "beta" ? "latestBeta" : "latestStable";
        const currentMeta = variantEntry[channelKey];
        const currentMetaTime = currentMeta ? new Date(currentMeta.publishedAt).getTime() : 0;
        if (!currentMeta || buildDateMs > currentMetaTime) {
          variantEntry[channelKey] = {
            version: parsed.version,
            build: buildLabel,
            publishedAt: buildDateString,
            releaseId: release.id,
            releaseUrl: release.html_url,
          };
        }
      } else {
        const channelKey = releaseType === "beta" ? "latestArchiveBeta" : "latestArchiveStable";
        const currentMeta = variantEntry[channelKey];
        const currentMetaTime = currentMeta ? new Date(currentMeta.publishedAt).getTime() : 0;
        if (!currentMeta || buildDateMs > currentMetaTime) {
          variantEntry[channelKey] = {
            version: parsed.version,
            build: buildLabel,
            publishedAt: buildDateString,
            releaseId: release.id,
            releaseUrl: release.html_url,
            isArchiveFallback: true,
          };
        }
      }

      const buildKey = isArchive
        ? `archive-${repoOwner}-${repoName}-${releaseType}-${parsed.version}-${variantKey}`
        : `${repoOwner}-${repoName}-${release.id}-${variantKey}`;

      if (!patchEntry.builds.has(buildKey)) {
        patchEntry.builds.set(buildKey, {
          buildKey,
          releaseId: release.id,
          build: isArchive ? parsed.version : getBuildNumberLabel(release),
          releaseType,
          isArchive,
          variantKey,
          publishedAt: isArchive
            ? asset.updated_at || asset.created_at || release.published_at
            : release.published_at,
          releaseUrl: release.html_url,
          repoOwner,
          repoName,
          repoUrl,
          repoSlug,
          version: parsed.version,
          patchMeta: {
            ...patchMetaFromRelease,
          },
          appliedPatches: null,
          assets: [],
        });
      }

      const buildEntry = patchEntry.builds.get(buildKey);
      const exists = buildEntry.assets.some((existing) => existing.name === asset.name);
      if (!exists) {
        buildEntry.assets.push({
          ...asset,
          parsed,
          arch,
          fileType,
        });
      }
    });
  });

  return Array.from(appMap.values())
    .map((app) => {
      // Resolve archive fallbacks if no active build exists
      app.patches.forEach((patch) => {
        patch.variants.forEach((variant) => {
          if (!variant.latestStable && variant.latestArchiveStable) {
            variant.latestStable = variant.latestArchiveStable;
          }
          if (!variant.latestBeta && variant.latestArchiveBeta) {
            variant.latestBeta = variant.latestArchiveBeta;
          }
        });
      });

      const patchesArray = Array.from(app.patches.values())
        .sort((a, b) => new Date(b.latestPublishedAt) - new Date(a.latestPublishedAt))
        .map((patch) => {
          const patchDownloads = Array.from(patch.builds.values()).reduce(
            (sum, b) => sum + (b.assets || []).reduce((aSum, a) => aSum + (a.download_count || 0), 0),
            0
          );
          return {
            ...patch,
            totalDownloads: patchDownloads,
            variants: Array.from(patch.variants.values()).sort((a, b) => {
              if (a.variantKey === "default") return -1;
              if (b.variantKey === "default") return 1;
              return a.variantName.localeCompare(b.variantName);
            }),
            builds: Array.from(patch.builds.values()).sort((a, b) => {
              if (a.isArchive && !b.isArchive) return 1;
              if (!a.isArchive && b.isArchive) return -1;
              if (a.isArchive && b.isArchive) {
                const comp = b.version.localeCompare(a.version, undefined, { numeric: true, sensitivity: "base" });
                if (comp !== 0) return comp;
              }
              return new Date(b.publishedAt) - new Date(a.publishedAt);
            }),
          };
        });

      // Pre-compute O(1) metrics on app object for ultra-fast sorting
      const totalAppDownloads = patchesArray.reduce((sum, p) => sum + p.totalDownloads, 0);
      const latestAppTime = patchesArray.reduce(
        (latest, p) => Math.max(latest, new Date(p.latestPublishedAt).getTime() || 0),
        0
      );

      // Pre-build search tokens corpus for fast searching
      const searchTerms = [app.appName, app.appKey];
      patchesArray.forEach((p) => {
        searchTerms.push(p.patchName, p.patchKey);
        p.variants.forEach((v) => {
          searchTerms.push(v.variantName, v.variantKey);
          if (v.latestStable) searchTerms.push(v.latestStable.version);
          if (v.latestBeta) searchTerms.push(v.latestBeta.version);
        });
        p.builds.forEach((b) => {
          (b.assets || []).forEach((a) => {
            if (a.name) searchTerms.push(a.name);
          });
        });
      });
      const searchCorpus = normalizeForSearch(searchTerms.join(" "));
      const appTokens = getSearchTokens(app.appName);

      return {
        ...app,
        totalDownloads: totalAppDownloads,
        latestPublishedAt: latestAppTime,
        searchCorpus,
        appTokens,
        repos: Array.from(app.repos),
        patches: patchesArray,
      };
    })
    .filter((app) => app.patches.length > 0)
    .sort((a, b) => a.appName.localeCompare(b.appName));
}

// Extract patch info helper
function extractPatchInfoFromRelease(release) {
  const body = release.body || "";
  const cliMatch = body.match(/CLI:\s*([^\s\n\r]+)/i);
  const patchMatches = Array.from(body.matchAll(/Patches:\s*([^\s\n\r]+)/gi));
  const changelogMatches = Array.from(body.matchAll(/\[Changelog\]\((https?:\/\/[^\s\)]+)\)/gi));

  return {
    cli: cliMatch ? cliMatch[1] : null,
    patches: patchMatches.map((m) => m[1]),
    changelogs: changelogMatches.map((m) => m[1]),
  };
}

// Render Repository Filter Buttons / Snackbar
function renderRepoFilterButtons() {
  if (!DOM.repoFilterButtons) return;

  const repos = getConfigRepos();
  if (repos.length <= 1) {
    DOM.repoFilterButtons.style.display = "none";
    return;
  }

  DOM.repoFilterButtons.style.display = "flex";
  let html = `<button class="filter-btn repo-pill-btn ${repoFilter === "all" ? "active" : ""}" data-repo="all" type="button" aria-pressed="${repoFilter === "all"}">All Repositories</button>`;

  repos.forEach((r) => {
    const slug = `${r.owner}/${r.repo}`;
    const isActive = repoFilter === slug;
    html += `<button class="filter-btn repo-pill-btn ${isActive ? "active" : ""}" data-repo="${escapeHtml(slug)}" type="button" aria-pressed="${isActive}">📁 ${escapeHtml(r.repo)}</button>`;
  });

  DOM.repoFilterButtons.innerHTML = html;
}

// Filter and Render Catalog
function filterAndRenderReleases() {
  renderRepoFilterButtons();
  renderDynamicAppFilterButtons(dynamicAppFilters);

  if (
    appCategoryFilter.startsWith("word-") &&
    !dynamicAppFilters.some((f) => f.key === appCategoryFilter)
  ) {
    appCategoryFilter = "all";
  }

  // 1. Search Query Filter
  let apps = filterCatalogBySearch(cachedFullCatalog, searchTerm);

  // 1.5 Repository Filter
  if (repoFilter !== "all") {
    apps = apps.filter((app) => (app.repos || []).includes(repoFilter));
  }

  // 2. Category Filter
  apps = applyCategoryFilter(apps);

  // 3. Fast Sort Mode (O(1) lookups)
  apps = applySortMode(apps);

  // 4. Update Status Text
  updateCatalogStatus(apps);

  // 5. Render
  renderAppCards(apps);
  updateAppFilterButtons();
  if (DOM.loading) DOM.loading.style.display = "none";
}

function updateCatalogStatus(apps) {
  if (!DOM.catalogCountText) return;
  const totalApps = apps.length;
  let totalBuilds = 0;
  apps.forEach((a) => {
    a.patches.forEach((p) => {
      totalBuilds += p.builds.length;
    });
  });

  DOM.catalogCountText.textContent = `Showing ${totalApps} app${totalApps === 1 ? "" : "s"} (${totalBuilds} build${totalBuilds === 1 ? "" : "s"})`;
}

function updateAppFilterButtons() {
  document.querySelectorAll("#appFilterButtons .filter-btn").forEach((btn) => {
    const isActive = btn.dataset.filter === appCategoryFilter;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  document.querySelectorAll("#repoFilterButtons .repo-pill-btn, #repoFilterButtons .filter-btn").forEach((btn) => {
    const isActive = btn.dataset.repo === repoFilter;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function applyCategoryFilter(apps) {
  if (CONFIG.appCategories[appCategoryFilter]) {
    return apps.filter((app) => {
      const name = normalizeForSearch(app.appName);
      const keyNorm = normalizeForSearch(app.appKey);
      const keywords = CONFIG.appCategories[appCategoryFilter];
      const includes = keywords.filter((k) => !k.startsWith("!"));
      const excludes = keywords.filter((k) => k.startsWith("!")).map((k) => k.slice(1));
      const isIncluded = includes.some((keyword) => name.includes(keyword) || keyNorm.includes(keyword));
      const isExcluded = excludes.some((keyword) => name.includes(keyword) || keyNorm.includes(keyword));
      return isIncluded && !isExcluded;
    });
  }

  if (appCategoryFilter.startsWith("word-")) {
    const word = appCategoryFilter.slice(5);
    return apps.filter((app) => getAppNameWords(app.appName).includes(word));
  }

  return apps;
}

// O(1) Instant Property Comparisons
function applySortMode(apps) {
  if (sortMode === "popular") {
    return [...apps].sort((a, b) => b.totalDownloads - a.totalDownloads);
  }
  if (sortMode === "name") {
    return [...apps].sort((a, b) => a.appName.localeCompare(b.appName));
  }
  // Default: recent
  return [...apps].sort((a, b) => b.latestPublishedAt - a.latestPublishedAt);
}

function filterCatalogBySearch(catalog, query) {
  if (!query) return catalog;
  return catalog
    .map((app) => ({
      app,
      score: getAppSearchScore(app, query),
    }))
    .filter((item) => item.score !== Infinity)
    .sort((a, b) => a.score - b.score || a.app.appName.localeCompare(b.app.appName))
    .map((item) => item.app);
}

function getAppSearchScore(app, query) {
  const normalizedQuery = normalizeForSearch(query);
  const normalizedAppName = normalizeForSearch(app.appName);
  const normalizedAppKey = normalizeForSearch(app.appKey);
  if (!normalizedQuery) return Infinity;

  if (normalizedAppName === normalizedQuery || normalizedAppKey === normalizedQuery) return 0;
  if (normalizedAppName.startsWith(normalizedQuery) || normalizedAppKey.startsWith(normalizedQuery)) return 1;

  if (app.appTokens && app.appTokens.some((token) => token === normalizedQuery)) return 2;
  if (app.appTokens && app.appTokens.some((token) => token.startsWith(normalizedQuery))) return 3;
  if (normalizedAppName.includes(normalizedQuery) || normalizedAppKey.includes(normalizedQuery)) return 4;
  if (app.searchCorpus && app.searchCorpus.includes(normalizedQuery)) return 5;

  return Infinity;
}

// Progressive Rendering for App Cards
function renderAppCards(apps) {
  if (!DOM.builds) return;
  currentAppCatalog = apps;
  currentVisibleCount = 0;
  DOM.builds.innerHTML = "";

  if (apps.length === 0) {
    DOM.builds.innerHTML = '<div class="no-results">No applications found matching your criteria.</div>';
    return;
  }

  renderNextChunk();
}

function renderNextChunk() {
  if (!DOM.builds) return;

  const nextChunk = currentAppCatalog.slice(
    currentVisibleCount,
    currentVisibleCount + RENDER_CHUNK_SIZE,
  );

  if (nextChunk.length === 0) return;

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = nextChunk.map((app) => createAppCard(app)).join("");

  while (tempDiv.firstChild) {
    DOM.builds.appendChild(tempDiv.firstChild);
  }

  currentVisibleCount += RENDER_CHUNK_SIZE;
}

// Create App Card Markup
function createAppCard(app) {
  const patchesMarkup = app.patches
    .map((patch) => createPatchMarkup(app, patch))
    .join("");

  let noticesMarkup = "";
  CONFIG.appNotices.forEach((notice) => {
    const matches = notice.triggers.some((trigger) =>
      normalizeForSearch(app.appName).includes(trigger),
    );
    if (matches) {
      noticesMarkup += createNoticeMarkup(notice);
    }
  });

  const totalDownloads = app.totalDownloads || 0;
  const dlBadge =
    totalDownloads > 0
      ? `<span class="patch-stat-badge" title="${formatCompactNumber(totalDownloads)} Total Downloads">📥 ${formatCompactNumber(totalDownloads)}</span>`
      : "";

  const repoLinksMarkup = (app.repos && app.repos.length > 0)
    ? app.repos
        .map((slug) => {
          const url = `https://github.com/${slug}`;
          const repoName = slug.split("/")[1] || slug;
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" style="color: var(--accent); text-decoration: underline; font-weight: 600;">${escapeHtml(repoName)}</a>`;
        })
        .join(" • ")
    : "";

  const repoSubheading = repoLinksMarkup
    ? `<div class="app-repo-subheading" style="font-size: 0.78rem; opacity: 0.85; font-weight: 500; margin-top: 2px;">📁 Repo: ${repoLinksMarkup}</div>`
    : "";

  return `
    <div class="build-card app-card">
      <div class="app-card-summary" role="button" tabindex="0">
        <div class="app-title-group">
          <div class="app-name">${escapeHtml(app.appName)}</div>
          ${repoSubheading}
        </div>
        <div class="app-badge-group">
          ${dlBadge}
          <svg class="app-card-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      <div class="app-card-body-wrapper">
        <div class="app-card-body">
          <div class="app-card-body-inner">
            ${noticesMarkup}
            <div class="patches-list">
              ${patchesMarkup}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createNoticeMarkup(notice) {
  const linksMarkup = (notice.links || [])
    .map((link) => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} ↗</a>`)
    .join(" ");

  return `
    <div class="app-notice ${escapeHtml(notice.className)}">
      <div class="app-notice-title">${escapeHtml(notice.title)}</div>
      <div class="app-notice-text">${escapeHtml(notice.text)}</div>
      ${linksMarkup ? `<div class="app-notice-links">${linksMarkup}</div>` : ""}
    </div>
  `;
}

// Create Patch Entry Markup with Multi-Channel Variant Matrix
function createPatchMarkup(app, patch) {
  const buildCount = patch.builds.length;
  const buildIconBadge = `<span class="patch-stat-badge" title="${buildCount} total builds">📦 ${buildCount}</span>`;
  const downloadCount = patch.totalDownloads || 0;
  const downloadIconBadge = `<span class="patch-stat-badge" title="${downloadCount.toLocaleString()} total downloads">📥 ${formatCompactNumber(downloadCount)}</span>`;

  // Render variant rows
  const variantRowsHtml = patch.variants
    .map((variant) => {
      const channelBoxes = [];

      if (variant.latestStable) {
        channelBoxes.push(`
          <button class="channel-box-btn stable" 
                  data-app-key="${app.appKey}" 
                  data-patch-key="${patch.patchKey}" 
                  data-channel="stable" 
                  data-variant="${variant.variantKey}"
                  type="button"
                  title="Open Stable builds for ${escapeHtml(variant.variantName)}">
            <div class="channel-box-top">
              <span class="channel-tag stable">Stable</span>
              <span class="channel-date">${formatDate(variant.latestStable.publishedAt)}</span>
            </div>
            <span class="channel-version">${escapeHtml(variant.latestStable.version)}</span>
            <span class="channel-build-num">${variant.latestStable.isArchiveFallback ? "Archive" : `Build ${escapeHtml(variant.latestStable.build)}`}</span>
          </button>
        `);
      }

      if (variant.latestBeta) {
        channelBoxes.push(`
          <button class="channel-box-btn beta" 
                  data-app-key="${app.appKey}" 
                  data-patch-key="${patch.patchKey}" 
                  data-channel="beta" 
                  data-variant="${variant.variantKey}"
                  type="button"
                  title="Open Beta builds for ${escapeHtml(variant.variantName)}">
            <div class="channel-box-top">
              <span class="channel-tag beta">Beta</span>
              <span class="channel-date">${formatDate(variant.latestBeta.publishedAt)}</span>
            </div>
            <span class="channel-version">${escapeHtml(variant.latestBeta.version)}</span>
            <span class="channel-build-num">${variant.latestBeta.isArchiveFallback ? "Archive" : `Build ${escapeHtml(variant.latestBeta.build)}`}</span>
          </button>
        `);
      }

      if (channelBoxes.length === 0) {
        channelBoxes.push(`
          <button class="channel-box-btn archive" 
                  data-app-key="${app.appKey}" 
                  data-patch-key="${patch.patchKey}" 
                  data-channel="all" 
                  data-variant="${variant.variantKey}"
                  type="button">
            <div class="channel-box-top">
              <span class="channel-tag archive">Builds</span>
            </div>
            <span class="channel-version">View all</span>
          </button>
        `);
      }

      return `
        <div class="variant-row">
          <div class="variant-title-wrap">
            <span class="variant-name-chip">${escapeHtml(variant.variantName)}</span>
          </div>
          <div class="variant-channels-grid">
            ${channelBoxes.join("")}
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="patch-entry">
      <div class="patch-entry-header">
        <div class="patch-chip-group">
          <span class="patch-engine-badge">${escapeHtml(patch.patchName)}</span>
          ${buildIconBadge}
          ${downloadIconBadge}
        </div>
      </div>
      <div class="variant-matrix">
        ${variantRowsHtml}
      </div>
    </div>
  `;
}

// Dynamic Filter Buttons Generator (Alphabetically Sorted)
function getDynamicAppFilters(apps) {
  const wordToAppKeys = new Map();

  apps.forEach((app) => {
    const words = getAppNameWords(app.appName);
    words.forEach((word) => {
      if (!wordToAppKeys.has(word)) wordToAppKeys.set(word, new Set());
      wordToAppKeys.get(word).add(app.appKey);
    });
  });

  const categoryKeywords = new Set([
    ...Object.keys(CONFIG.appCategories),
    ...Object.values(CONFIG.appCategories).flat().map((k) => k.replace(/^!/, ""))
  ]);

  const dynamicFilters = Array.from(wordToAppKeys.entries())
    .filter(([word, appKeys]) => appKeys.size >= SHARED_APP_WORD_MIN_COUNT && !categoryKeywords.has(word))
    .map(([word]) => ({
      key: `word-${word}`,
      label: toFilterLabel(word),
    }));

  const categoryFilters = Object.keys(CONFIG.appCategories).map((key) => ({
    key: key,
    label: toFilterLabel(key),
  }));

  return [...categoryFilters, ...dynamicFilters].sort((a, b) =>
    a.label.localeCompare(b.label, undefined, { sensitivity: "base" })
  );
}

function renderDynamicAppFilterButtons(filters) {
  if (!DOM.appFilterButtons) return;

  DOM.appFilterButtons.querySelectorAll(".dynamic-filter-btn").forEach((btn) => btn.remove());

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.className = "filter-btn dynamic-filter-btn";
    button.dataset.filter = filter.key;
    button.type = "button";
    button.textContent = filter.label;
    DOM.appFilterButtons.appendChild(button);
  });
}

function getAppNameWords(appName) {
  const words = (appName || "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .filter((word) => word.length >= 3)
    .filter((word) => !CONFIG.sharedAppWordStoplist.has(word));

  return Array.from(new Set(words));
}

function toFilterLabel(value) {
  const lower = (value || "").toLowerCase();
  if (CONFIG.brandOverrides[lower]) return CONFIG.brandOverrides[lower];
  return value.replace(/\b[a-z]/g, (char) => char.toUpperCase());
}

// Download Modal Controller
function openPatchModal(appKey, patchKey, preferredChannel = "stable", preferredVariant = "default") {
  activeModalAppKey = appKey;
  activeModalPatchKey = patchKey;

  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const patch = app ? app.patches.find((item) => item.patchKey === activeModalPatchKey) : null;

  modalBuildFilter = preferredChannel === "beta" ? "beta" : "stable";

  if (patch && patch.variants && patch.variants.length > 0) {
    const validVariant = patch.variants.find((v) => v.variantKey === preferredVariant);
    modalVariantFilter = validVariant ? validVariant.variantKey : patch.variants[0].variantKey;
  } else {
    modalVariantFilter = "default";
  }

  renderOpenPatchModal();
  showModal(DOM.patchModal);
}

function patchHasApk(patch, variantKey = "all", buildFilter = "stable") {
  if (!patch || !patch.builds) return false;
  let builds = patch.builds;
  if (buildFilter === "stable") builds = builds.filter((b) => b.releaseType === "stable");
  else if (buildFilter === "beta") builds = builds.filter((b) => b.releaseType === "beta");

  return builds.some((build) =>
    (build.assets || []).some((asset) => {
      if (variantKey && variantKey !== "all" && variantKey !== "default") {
        const vKey = asset.parsed?.rawVariant || (asset.parsed?.variant ? normalizeForSearch(asset.parsed.variant) : "default");
        if (vKey !== variantKey) return false;
      }
      return /\.(apk|apks|xapk|apkm)$/i.test(asset.name || "");
    })
  );
}

function renderOpenPatchModal() {
  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const patch = app ? app.patches.find((item) => item.patchKey === activeModalPatchKey) : null;

  if (!app || !patch) {
    closePatchModal();
    return;
  }

  const selectedVariant = patch.variants.find((v) => v.variantKey === modalVariantFilter);
  const variantText = selectedVariant && selectedVariant.variantName !== "Standard"
    ? ` • ${selectedVariant.variantName}`
    : "";

  if (DOM.patchModalTitle) {
    DOM.patchModalTitle.textContent = `${app.appName} • ${patch.patchName}${variantText}`;
  }

  if (DOM.obtainiumBtn) {
    const hasApk = patchHasApk(patch, modalVariantFilter, modalBuildFilter);
    DOM.obtainiumBtn.style.display = hasApk ? "inline-flex" : "none";
  }

  updateModalFilterButtons(patch);

  if (DOM.patchModalBody) {
    DOM.patchModalBody.innerHTML = createPatchModalContent(app, patch, modalBuildFilter, modalVariantFilter);
  }
}

function updateModalFilterButtons(patch) {
  const filterContainer = document.querySelector(".modal-filter-buttons");
  if (!filterContainer) return;

  filterContainer.innerHTML = "";

  let hasStable = false;
  let hasBeta = false;

  if (patch.builds) {
    for (const b of patch.builds) {
      const matchingAssets = b.assets.filter((a) => {
        const vKey = a.parsed.rawVariant || (a.parsed.variant ? normalizeForSearch(a.parsed.variant) : "default") || "default";
        return vKey === modalVariantFilter || modalVariantFilter === "all";
      });

      if (matchingAssets.length > 0) {
        if (b.releaseType === "stable") hasStable = true;
        if (b.releaseType === "beta") hasBeta = true;
      }
      if (hasStable && hasBeta) break;
    }
  }

  // Auto-switch build filter if the currently selected one has no builds
  if (!hasStable && modalBuildFilter === "stable" && hasBeta) {
    modalBuildFilter = "beta";
  } else if (!hasBeta && modalBuildFilter === "beta" && hasStable) {
    modalBuildFilter = "stable";
  }

  let channelHtml = "";
  if (hasStable) {
    channelHtml += `<button class="modal-filter-btn ${modalBuildFilter === "stable" ? "active" : ""}" data-filter="stable" type="button">Stable</button>\n`;
  }
  if (hasBeta) {
    channelHtml += `<button class="modal-filter-btn ${modalBuildFilter === "beta" ? "active" : ""}" data-filter="beta" type="button">Beta</button>\n`;
  }

  if (channelHtml) {
    const channelGroup = document.createElement("div");
    channelGroup.className = "filter-pill-group";
    channelGroup.innerHTML = channelHtml;
    filterContainer.appendChild(channelGroup);
  }

  // Variant group with divider
  if (patch.variants && patch.variants.length > 0) {
    const divider = document.createElement("span");
    divider.className = "filter-group-divider";
    filterContainer.appendChild(divider);

    const variantGroup = document.createElement("div");
    variantGroup.className = "filter-pill-group";

    patch.variants.forEach((v) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `modal-filter-btn variant-pill-btn ${modalVariantFilter === v.variantKey ? "active" : ""}`;
      btn.dataset.filter = `variant-${v.variantKey}`;
      btn.textContent = v.variantName;
      variantGroup.appendChild(btn);
    });

    filterContainer.appendChild(variantGroup);
  }
}

function createPatchModalContent(app, patch, buildFilter = "stable", variantFilter = "default") {
  let builds = patch.builds || [];

  if (buildFilter === "stable") {
    builds = builds.filter((b) => b.releaseType === "stable");
  } else if (buildFilter === "beta") {
    builds = builds.filter((b) => b.releaseType === "beta");
  }

  if (variantFilter && variantFilter !== "all") {
    builds = builds
      .map((b) => ({
        ...b,
        assets: b.assets.filter((a) => {
          const vKey = a.parsed.rawVariant || (a.parsed.variant ? normalizeForSearch(a.parsed.variant) : "default") || "default";
          return vKey === variantFilter;
        }),
      }))
      .filter((b) => b.assets.length > 0);
  }

  if (builds.length === 0) {
    return '<div class="no-results" style="padding: 40px 20px;">No builds matching these filters.</div>';
  }

  return builds
    .map((build, index) => createModalBuildMarkup(app, patch, build, index === 0))
    .join("");
}

function createModalBuildMarkup(app, patch, build, openByDefault = false) {
  const assetsByArch = groupAssetsByArchitecture(build.assets);
  const titleText = build.isArchive ? escapeHtml(build.build) : `Build ${escapeHtml(build.build)}`;

  let downloadsMarkup = "";

  Object.entries(assetsByArch).forEach(([arch, assets]) => {
    if (assets.length === 0) return;
    downloadsMarkup += `<div class="asset-group"><div class="asset-group-label">${capitalizeArch(arch)}</div>`;

    assets.forEach((asset) => {
      const sizeStr = formatBytes(asset.size);
      const downloads = formatCompactNumber(asset.download_count || 0);
      const variantDisplay = asset.parsed.variant ? ` • <span class="asset-variant-tag">${escapeHtml(asset.parsed.variant)}</span>` : "";

      downloadsMarkup += `
        <div class="download-btn ${arch}">
          <div class="asset-left">
            <span class="asset-title">${escapeHtml(asset.parsed.appName)}</span>
            <span class="asset-subtitle">${escapeHtml(asset.parsed.version)} • ${asset.fileType}${variantDisplay}</span>
          </div>
          <div class="asset-right">
            <span class="btn-text">${sizeStr} • 📥 ${downloads}</span>
            <a href="${asset.browser_download_url}" class="download-action-btn" download title="Download ${asset.name}">Download</a>
          </div>
        </div>
      `;
    });

    downloadsMarkup += `</div>`;
  });

  const patchInfoBanner = `
    <div class="patch-info-actions">
      <button class="patch-applied-btn" data-app-key="${app.appKey}" data-patch-key="${patch.patchKey}" data-build-key="${build.buildKey || build.releaseId}" type="button">View Applied Patches</button>
      <a href="${build.releaseUrl}" target="_blank" rel="noopener noreferrer" class="release-link-button">View Release Source</a>
    </div>
  `;

  return `
    <div class="modal-build-card ${openByDefault ? "open" : ""}">
      <div class="modal-build-header" role="button" tabindex="0">
        <div class="modal-build-header-left">
          <div class="modal-build-title">${titleText}</div>
          <div class="modal-build-date">${formatDate(build.publishedAt)}${build.isArchive ? "" : ` • ${escapeHtml(build.version)}`}</div>
        </div>
        <div class="modal-build-header-right">
          <span class="badge-group">
            ${build.isArchive ? `<span class="release-badge archive">Archive</span>` : ""}
          </span>
        </div>
      </div>
      <div class="app-card-body-wrapper">
        <div class="modal-build-downloads">
          <div class="modal-build-downloads-inner">
            ${downloadsMarkup}
            ${patchInfoBanner}
          </div>
        </div>
      </div>
    </div>
  `;
}

function closePatchModal() {
  hideModal(DOM.patchModal);
}

// Master Build Metadata Store
async function fetchMasterBuildData() {
  if (masterBuildDataCache) return masterBuildDataCache;
  try {
    const cacheBuster = Date.now();
    const resp = await fetch(`builds.json?v=${cacheBuster}`);
    if (resp.ok) {
      masterBuildDataCache = await resp.json();
    } else {
      masterBuildDataCache = {};
    }
  } catch (e) {
    console.warn("Could not load builds.json:", e);
    masterBuildDataCache = {};
  }
  return masterBuildDataCache;
}

// Applied Patches Modal Controller
async function openAppliedPatchesModal(appKey, patchKey, buildKey) {
  const app = currentAppCatalog.find((item) => item.appKey === appKey);
  const patch = app ? app.patches.find((item) => item.patchKey === patchKey) : null;
  if (!app || !patch) return;

  let build = patch.builds.find((b) => b.buildKey === buildKey || String(b.releaseId) === String(buildKey));
  if (!build) {
    build = patch.builds[0];
  }

  const variantObj = patch.variants.find((v) => v.variantKey === (build?.variantKey || modalVariantFilter));
  const variantText = variantObj && variantObj.variantName !== "Standard" ? ` (${variantObj.variantName})` : "";

  if (DOM.appliedPatchesTitle) {
    DOM.appliedPatchesTitle.textContent = `${app.appName} • ${patch.patchName}${variantText}`;
  }

  const isArchiveBuild = build && build.isArchive;

  let pNames = null;
  let clUrl = null;
  let appliedPatches = null;

  // Resolve applied patches from builds.json
  if (!appliedPatches) {
    const masterData = await fetchMasterBuildData();
    const appKeyNorm = normalizeForSearch(app.appKey || app.appName);
    const patchKeyNorm = normalizeForSearch(patch.patchKey || patch.patchName);

    // Get stored variantKey and create hyphenated & normalized versions
    const rawVariantKey = build?.variantKey || "";
    const variantHyphenated = (rawVariantKey && rawVariantKey !== "default")
      ? rawVariantKey.replace(/\+/g, "-").toLowerCase()
      : "";
    const variantNorm = (rawVariantKey && rawVariantKey !== "default")
      ? normalizeForSearch(rawVariantKey)
      : "";

    let rawSlugNorm = appKeyNorm;
    let rawPatchNorm = patchKeyNorm;
    let assetRawPrefix = "";
    let assetRawAppSlug = "";
    let assetRawPatchSlug = "";

    const asset = build?.assets?.[0];
    if (asset?.parsed) {
      assetRawPrefix = asset.parsed.rawPrefix || "";
      assetRawAppSlug = asset.parsed.rawAppSlug || "";
      assetRawPatchSlug = asset.parsed.rawPatchSlug || "";
    }

    if (asset?.name) {
      const parsedAsset = parseAssetDisplay(asset.name);
      if (parsedAsset.rawAppSlug) rawSlugNorm = parsedAsset.rawAppSlug;
      if (parsedAsset.rawPatchToken) rawPatchNorm = parsedAsset.rawPatchToken;
      const baseName = asset.name.replace(EXT_STRIP_REGEX, "");
      const tokens = baseName.split("-").filter(Boolean);
      const patchIdx = tokens.findIndex((t) => CONFIG.knownPatchTokens.has(t.toLowerCase()));
      if (patchIdx > 0) {
        rawSlugNorm = tokens.slice(0, patchIdx).join("-").toLowerCase();
      }
    }

    // Candidate keys to try directly in masterData
    const candidateKeys = [];

    // 1. Asset Raw Prefix (Exact prefix from asset filename e.g. "x-morphe-xshim-piko" or "gboard-morphe-jasonwu1994-adobo")
    if (assetRawPrefix) candidateKeys.push(assetRawPrefix);

    // 2. Hyphenated Variant Keys (e.g. "x-morphe-xshim-piko", "gboard-morphe-jasonwu1994-adobo")
    if (variantHyphenated) {
      candidateKeys.push(`${appKeyNorm}-${patchKeyNorm}-${variantHyphenated}`);
      candidateKeys.push(`${rawSlugNorm}-${patchKeyNorm}-${variantHyphenated}`);
      candidateKeys.push(`${rawSlugNorm}-${rawPatchNorm}-${variantHyphenated}`);
      if (assetRawAppSlug && assetRawPatchSlug) {
        candidateKeys.push(`${assetRawAppSlug}-${assetRawPatchSlug}-${variantHyphenated}`);
      }
    }

    // 3. Plus or Normalized Variant Keys
    if (variantNorm) {
      candidateKeys.push(`${appKeyNorm}-${patchKeyNorm}-${variantNorm}`);
      candidateKeys.push(`${rawSlugNorm}-${patchKeyNorm}-${variantNorm}`);
      candidateKeys.push(`${rawSlugNorm}-${rawPatchNorm}-${variantNorm}`);
    }

    // 4. Base App + Patch Keys (without variants)
    candidateKeys.push(`${appKeyNorm}-${patchKeyNorm}`);
    candidateKeys.push(`${rawSlugNorm}-${patchKeyNorm}`);
    candidateKeys.push(`${rawSlugNorm}-${rawPatchNorm}`);
    if (assetRawAppSlug && assetRawPatchSlug) {
      candidateKeys.push(`${assetRawAppSlug}-${assetRawPatchSlug}`);
    }

    function isPatchEntry(obj) {
      return obj && typeof obj === "object" && (
        Array.isArray(obj.applied_patches) || typeof obj.patches === "string" || typeof obj.changelog === "string"
      );
    }

    // Direct O(1) version & tag dictionary lookup
    function resolveVersionFromDict(dict, rawVer, specificTag, isArchive, preferredReleaseType) {
      if (!dict || typeof dict !== "object") return null;
      if (isPatchEntry(dict)) return dict;

      const cleanVer = (rawVer || "").toLowerCase().replace(/^v(?=[a-z0-9])/i, "").trim();
      if (!cleanVer) return null;

      const candidate = dict[cleanVer] || dict[`v${cleanVer}`] || dict[rawVer];
      if (!candidate) return null;
      if (isPatchEntry(candidate)) return candidate;

      if (typeof candidate === "object") {
        if (specificTag && !isArchive) {
          return isPatchEntry(candidate[specificTag]) ? candidate[specificTag] : null;
        }
        const tagKeys = Object.keys(candidate).sort((a, b) => {
          const na = Number(a), nb = Number(b);
          if (!isNaN(na) && !isNaN(nb)) return nb - na;
          return b.localeCompare(a);
        });

        // If we have a preferred release type (for archives), try to find a matching tag first
        if (preferredReleaseType) {
          for (const tagKey of tagKeys) {
            if (tagToReleaseType[tagKey] === preferredReleaseType && isPatchEntry(candidate[tagKey])) {
              return candidate[tagKey];
            }
          }
          // Strict matching: do not fallback to another channel's patches
          return null;
        }

        // Only fallback to the latest available if no specific type was requested
        for (const tagKey of tagKeys) {
          if (isPatchEntry(candidate[tagKey])) return candidate[tagKey];
        }
      }
      return null;
    }

    const specificTag = isArchiveBuild ? null : (build?.build || null);
    const cleanBuildVer = (build?.version || "").replace(/^v(?=[a-z0-9])/i, "").trim();
    const versionsToTry = cleanBuildVer ? [cleanBuildVer, `v${cleanBuildVer}`] : [];

    // Map build tag to releaseType to prefer the right patches for archive builds
    const tagToReleaseType = {};
    if (patch && patch.builds) {
      for (const b of patch.builds.values()) {
        if (b.build && b.releaseType) {
          tagToReleaseType[b.build] = b.releaseType;
        }
      }
    }

    let resolved = null;

    // First attempt: Try candidate keys directly on masterData
    for (const candKey of candidateKeys) {
      if (!candKey || !masterData[candKey]) continue;
      for (const ver of versionsToTry) {
        resolved = resolveVersionFromDict(masterData[candKey], ver, specificTag, isArchiveBuild, build?.releaseType);
        if (resolved) break;
      }
      if (resolved) break;
    }

    // Second attempt: Fallback normalized map lookup if direct candidate keys didn't match
    if (!resolved) {
      const masterDataNormalized = new Map();
      for (const k of Object.keys(masterData)) {
        masterDataNormalized.set(k.toLowerCase().replace(/[^a-z0-9]/g, ""), masterData[k]);
      }

      for (const candKey of candidateKeys) {
        if (!candKey) continue;
        const normCandKey = candKey.toLowerCase().replace(/[^a-z0-9]/g, "");
        const dict = masterDataNormalized.get(normCandKey);
        if (!dict) continue;

        for (const ver of versionsToTry) {
          resolved = resolveVersionFromDict(dict, ver, specificTag, isArchiveBuild, build?.releaseType);
          if (resolved) break;
        }
        if (resolved) break;
      }
    }

    if (resolved) {
      if (Array.isArray(resolved.applied_patches) && resolved.applied_patches.length > 0) {
        appliedPatches = resolved.applied_patches;
      }
      if (resolved.patches) {
        pNames = resolved.patches;
      }
      if (resolved.changelog) {
        clUrl = resolved.changelog;
      }
    }
  }

  if (DOM.appliedPatchesMeta) {
    const patchNamesList = Array.isArray(pNames)
      ? pNames
      : (typeof pNames === "string" ? pNames.split(/[,\s]+/).filter(Boolean) : []);

    const changelogList = Array.isArray(clUrl)
      ? clUrl
      : (typeof clUrl === "string" ? clUrl.split(/[,\s]+/).filter(Boolean) : (clUrl ? [clUrl] : []));

    const badgesHtml = patchNamesList.map((name, index) => {
      const url = changelogList[index] || (changelogList.length === 1 ? changelogList[0] : null);
      if (url) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="patch-engine-badge patch-engine-link" title="Open changelog for ${escapeHtml(name)}">${escapeHtml(name)}<svg class="patch-link-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>`;
      }
      return `<span class="patch-engine-badge">${escapeHtml(name)}</span>`;
    }).join("");

    DOM.appliedPatchesMeta.innerHTML = badgesHtml;
  }

  activeAppliedPatchesList = appliedPatches;
  activeBuildForModal = build;
  filterAppliedPatchesList("");
  showModal(DOM.appliedPatchesModal);

  if (DOM.patchSearchInput) {
    DOM.patchSearchInput.value = "";
  }
}

let activeBuildForModal = null;

function formatChangelogForBuild(build) {
  const body = build?.patchMeta?.body || build?.patchMeta?.releaseBody || "";
  const repoSlug = build?.repoSlug || "sharath-5br2r-apps/Eden-Workflow";
  const releaseUrl = build?.releaseUrl || "#";
  const buildTag = build?.build || build?.version || "";

  let formattedBody = "";
  if (body) {
    formattedBody = escapeHtml(body)
      .replace(/Pull request build #\[?(\d+)\]?\((https?:\/\/[^\s\)]+)\)/gi, '<div class="pr-badge-header" style="background: var(--accent-glow); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-hover); margin-bottom: 12px; font-weight: 600; color: var(--accent);">Pull Request Build <a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">#$1</a></div>')
      .replace(/Commit:\s*\[`?([a-f0-9]+)`?\]\((https?:\/\/[^\s\)]+)\)/gi, '<strong>Commit:</strong> <a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--accent); font-family: var(--font-mono);">$1</a>')
      .replace(/Merge base:\s*\[`?([a-f0-9]+)`?\]\((https?:\/\/[^\s\)]+)\)/gi, '<strong>Merge Base:</strong> <a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--accent); font-family: var(--font-mono);">$1</a>')
      .replace(/^### (.*$)/gim, '<h4 style="color: var(--accent); margin: 14px 0 6px; font-size: 0.95rem;">$1</h4>')
      .replace(/^## (.*$)/gim, '<h3 style="color: var(--text-primary); margin: 18px 0 8px; font-size: 1.05rem; border-bottom: 1px solid var(--border); padding-bottom: 4px;">$1</h3>')
      .replace(/^# (.*$)/gim, '<h2 style="color: var(--text-primary); margin: 20px 0 10px; font-size: 1.2rem;">$1</h2>')
      .replace(/^\* (.*$)/gim, '<li style="margin-left: 18px; margin-bottom: 4px;">$1</li>')
      .replace(/^- (.*$)/gim, '<li style="margin-left: 18px; margin-bottom: 4px;">$1</li>')
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">$1</a>');
  }

  return `
    <div class="changelog-container" style="text-align: left; padding: 4px 8px; line-height: 1.6; font-size: 0.92rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; background: var(--bg-surface-high); padding: 10px 14px; border-radius: var(--radius-md); border: 1px solid var(--border);">
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <span style="font-weight: 600; color: var(--text-primary);">${escapeHtml(repoSlug)}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Build Tag: ${escapeHtml(buildTag)}</span>
        </div>
        <a href="${escapeHtml(releaseUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.8rem; padding: 4px 12px; text-decoration: none;">
          <span>View on GitHub</span> ↗
        </a>
      </div>
      ${formattedBody ? `<div class="changelog-body-content" style="max-height: 440px; overflow-y: auto; padding-right: 6px;">${formattedBody}</div>` : `
        <div class="no-results" style="padding: 32px 20px; text-align: center; color: var(--text-secondary);">
          <p style="margin-bottom: 14px; font-size: 0.95rem;">Build release notes from <strong>${escapeHtml(repoSlug)}</strong></p>
          <a href="${escapeHtml(releaseUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px; font-weight: 600; text-decoration: none;">
            <span>View Release Details on GitHub</span> ↗
          </a>
        </div>
      `}
    </div>
  `;
}

function filterAppliedPatchesList(query) {
  if (!DOM.appliedPatchesBody) return;

  if (!activeAppliedPatchesList || activeAppliedPatchesList.length === 0) {
    if (DOM.patchCountBadge) {
      DOM.patchCountBadge.textContent = "Release Notes";
    }
    DOM.appliedPatchesBody.innerHTML = formatChangelogForBuild(activeBuildForModal);
    return;
  }

  const normalized = (query || "").toLowerCase().trim();
  const filtered = activeAppliedPatchesList.filter((p) =>
    p.toLowerCase().includes(normalized)
  );

  if (DOM.patchCountBadge) {
    DOM.patchCountBadge.textContent = `${filtered.length} of ${activeAppliedPatchesList.length} patches`;
  }

  if (filtered.length === 0) {
    DOM.appliedPatchesBody.innerHTML = '<div class="no-results" style="padding: 36px 20px; text-align: center; color: var(--text-muted);">No matching patches found.</div>';
    return;
  }

  DOM.appliedPatchesBody.innerHTML = `
    <div class="applied-patches-grid">
      ${filtered.map((patchName) => `
        <div class="applied-patch-item">
          <span class="patch-check-icon">✓</span>
          <span>${escapeHtml(patchName)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function closeAppliedPatchesModal() {
  hideModal(DOM.appliedPatchesModal);
}

// Helper to build Obtainium APK Filter Regex with multi-variant support
function buildObtainiumRegex(app, patch, variantKey) {
  let matchingAsset = null;

  if (patch && patch.builds) {
    for (const build of patch.builds) {
      if (!build.assets) continue;
      for (const asset of build.assets) {
        if (!/\.(apk|apks|xapk|apkm)$/i.test(asset.name || "")) continue;
        if (!variantKey || variantKey === "all" || variantKey === "default") {
          matchingAsset = asset;
          break;
        }
        const vKey = asset.parsed?.rawVariant || (asset.parsed?.variant ? normalizeForSearch(asset.parsed.variant) : "default");
        if (vKey === variantKey) {
          matchingAsset = asset;
          break;
        }
      }
      if (matchingAsset) break;
    }
  }

  if (matchingAsset && matchingAsset.parsed && matchingAsset.parsed.rawPrefix) {
    const safePrefix = matchingAsset.parsed.rawPrefix.replace(/[\^$*+?.()|[\]{}]/g, "\\$&");
    return `${safePrefix}.*\\.apk$`;
  }

  const appSlug = normalizeForSearch(app?.appName || "app");
  const patchSlug = normalizeForSearch(patch?.patchName || "official");

  if (!variantKey || variantKey === "default" || variantKey === "all") {
    return `${appSlug}-${patchSlug}.*\\.apk$`;
  }

  const variantPattern = variantKey
    .split(/[^a-z0-9]+/i)
    .filter(Boolean)
    .map((tok) => normalizeForSearch(tok))
    .join("-");

  return `${appSlug}-${patchSlug}-${variantPattern}.*\\.apk$`;
}

// Obtainium Modal Controller
function openObtainiumModal() {
  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const patch = app ? app.patches.find((item) => item.patchKey === activeModalPatchKey) : null;
  if (!app || !patch) return;

  if (!patchHasApk(patch, modalVariantFilter, modalBuildFilter)) {
    showToast("Obtainium integration is only available for Android APK builds.");
    return;
  }

  const selectedVariant = patch.variants.find((v) => v.variantKey === modalVariantFilter);
  const variantText = selectedVariant && selectedVariant.variantName !== "Standard"
    ? ` (${selectedVariant.variantName})`
    : "";

  if (DOM.obtainiumTitle) {
    DOM.obtainiumTitle.textContent = `Install ${app.appName}${variantText} with Obtainium`;
  }

  if (DOM.obtainiumBody) {
    DOM.obtainiumBody.innerHTML = createObtainiumInstructions(app, patch);
  }

  showModal(DOM.obtainiumModal);
}

function createObtainiumInstructions(app, patch) {
  const sampleBuild = patch?.builds?.find((b) => b.assets && b.assets.length > 0) || patch?.builds?.[0];
  const primaryRepo = getConfigRepos()[0];
  const repoOwner = sampleBuild?.repoOwner || primaryRepo.owner;
  const repoName = sampleBuild?.repoName || primaryRepo.repo;
  const repoUrl = sampleBuild?.repoUrl || `https://github.com/${repoOwner}/${repoName}`;
  const obtainiumLatestUrl = "https://github.com/ImranR98/Obtainium/releases/latest";

  const apkVariants = (patch?.variants || []).filter((v) =>
    patchHasApk(patch, v.variantKey, modalBuildFilter)
  );

  let step4Content = "";

  if (apkVariants.length > 1) {
    const examples = apkVariants.map((v, index) => {
      const vRegex = buildObtainiumRegex(app, patch, v.variantKey);
      const vLabel = `${app.appName} (${patch.patchName} - ${v.variantName})`;
      const vPackageId = getAppPackageId(app, patch, v.variantKey);
      const vSafeId = vPackageId || `${repoOwner}_${app.appKey}_${patch.patchKey}_${v.variantKey}_${index}`.replace(/[^a-zA-Z0-9_]/g, "_");

      const vAdditionalSettings = { apkFilterRegEx: vRegex };
      if (modalBuildFilter === "beta") {
        vAdditionalSettings.includePrereleases = true;
      }

      const vConfig = {
        id: vSafeId,
        name: vLabel,
        author: repoOwner,
        url: repoUrl,
        additionalSettings: JSON.stringify(vAdditionalSettings),
      };

      const encodedVConfig = encodeURIComponent(JSON.stringify(vConfig));
      const vDirectUrl = `obtainium://app/${encodedVConfig}`;
      const vFallbackUrl = `https://apps.obtainium.imranr.dev/redirect?r=${encodeURIComponent(`obtainium://app/${JSON.stringify(vConfig)}`)}`;

      return `
        <div style="margin-top: 8px;">
          <div style="font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px; display: flex; flex-direction: column;">
            <span>${escapeHtml(vLabel)}</span>
            ${vPackageId ? `<span style="font-family: monospace; opacity: 0.8; font-weight: normal; margin-top: 2px; cursor: pointer; width: fit-content; word-break: break-all;" onclick="copyToClipboard('${escapeHtml(vPackageId)}', 'Package ID copied!')" title="Click to copy Package ID">${escapeHtml(vPackageId)}</span>` : ''}
          </div>
          <div class="instruction-code">
            <code>${escapeHtml(vRegex)}</code>
            <a href="${vDirectUrl}" class="obtainium-add-btn" target="_blank" rel="noopener noreferrer">Add to Obtainium</a>
            <a href="${vFallbackUrl}" class="obtainium-add-btn fallback-btn" target="_blank" rel="noopener noreferrer">Add to Obtainium (Fallback)</a>
            <button class="copy-btn" onclick="copyToClipboard('${escapeJsString(vRegex)}', 'Regex copied!')" type="button">Copy</button>
          </div>
        </div>
      `;
    }).join("");

    step4Content = `
      <div style="margin-top: 4px;">
        ${examples}
      </div>
    `;
  } else {
    const activeVariantKey = apkVariants.length === 1 ? apkVariants[0].variantKey : modalVariantFilter;
    const regexPattern = buildObtainiumRegex(app, patch, activeVariantKey);

    const mainPackageId = getAppPackageId(app, patch, activeVariantKey || "default");
    const mainSafeId = mainPackageId || `${repoOwner}_${app?.appKey || "app"}_${patch?.patchKey || "patch"}`.replace(/[^a-zA-Z0-9_]/g, "_");
    const mainLabel = `${app?.appName || "App"} (${patch?.patchName || "Patch"})`;
    const mainAdditionalSettings = { apkFilterRegEx: regexPattern };
    if (modalBuildFilter === "beta") {
      mainAdditionalSettings.includePrereleases = true;
    }

    const mainConfig = {
      id: mainSafeId,
      name: mainLabel,
      author: repoOwner,
      url: repoUrl,
      additionalSettings: JSON.stringify(mainAdditionalSettings),
    };

    const encodedMainConfig = encodeURIComponent(JSON.stringify(mainConfig));
    const mainDirectUrl = `obtainium://app/${encodedMainConfig}`;
    const mainFallbackUrl = `https://apps.obtainium.imranr.dev/redirect?r=${encodeURIComponent(`obtainium://app/${JSON.stringify(mainConfig)}`)}`;

    step4Content = `
      <div style="margin-top: 6px;">
        ${mainPackageId ? `
        <div style="font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px; display: flex; flex-direction: column;">
          <span style="font-family: monospace; opacity: 0.8; font-weight: normal; cursor: pointer; width: fit-content; word-break: break-all;" onclick="copyToClipboard('${escapeJsString(mainPackageId)}', 'Package ID copied!')" title="Click to copy Package ID">${escapeHtml(mainPackageId)}</span>
        </div>
        ` : ''}
        <div class="instruction-code">
          <code>${escapeHtml(regexPattern)}</code>
          <a href="${mainDirectUrl}" class="obtainium-add-btn" target="_blank" rel="noopener noreferrer">Add to Obtainium</a>
          <a href="${mainFallbackUrl}" class="obtainium-add-btn fallback-btn" target="_blank" rel="noopener noreferrer">Add to Obtainium (Fallback)</a>
          <button class="copy-btn" onclick="copyToClipboard('${escapeJsString(regexPattern)}', 'Regex copied!')" type="button">Copy</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="obtainium-instructions">
      <div style="margin-bottom: 12px;">
        Make sure you have <strong>Obtainium</strong> installed, if not install from <a href="${obtainiumLatestUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>. Press the <strong>Add to Obtainium</strong> button to add the app(s) automatically or you can follow the instructions below to add them manually:
      </div>
      <ol>
        <li>Open Obtainium on your device.</li>
        <li>Tap <strong>Add App</strong>.</li>
        <li>In the <strong>App Source URL</strong> box, enter:
          <div class="instruction-code code-with-copy">
            <code>${repoUrl}</code>
            <button class="copy-btn" onclick="copyToClipboard('${escapeJsString(repoUrl)}', 'Repository URL copied!')" type="button">Copy</button>
          </div>
        </li>
        <li>Scroll down to <strong>Filter APKs by regular expression</strong> and enter:
          ${step4Content}
        </li>
        <li>To get beta updates, enable the <strong>Include Pre-releases</strong> toggle.</li>
        <li>Tap <strong>Add</strong> to begin downloading.</li>
      </ol>
      <div style="margin-top: 12px">
        In the future, Obtainium will automatically fetch updates when new releases are published.
      </div>
    </div>
  `;
}

function getAppPackageId(app, patch, variantKey) {
  if (!app) return "";

  const sampleAsset = patch?.builds?.[0]?.assets?.[0] || app?.patches?.[0]?.builds?.[0]?.assets?.[0];
  let rawSlug = "";
  let rawPatch = "";

  if (sampleAsset?.name) {
    const parsedAsset = parseAssetDisplay(sampleAsset.name);
    rawSlug = parsedAsset.rawAppSlug || "";
    rawPatch = parsedAsset.rawPatchToken || "";
  }

  const appKeyNorm = normalizeForSearch(app.appKey || app.appName || "");
  const appNameNorm = normalizeForSearch(app.appName || "");

  const candidates = [rawSlug, app.appKey, appKeyNorm, appNameNorm];
  if (sampleAsset?.name) {
    const baseName = sampleAsset.name.replace(EXT_STRIP_REGEX, "");
    const tokens = baseName.split("-").filter(Boolean);
    const patchIdx = tokens.findIndex((t) => CONFIG.knownPatchTokens.has(t.toLowerCase()));
    if (patchIdx > 0) {
      const rawSlugTok = tokens.slice(0, patchIdx).join("").toLowerCase();
      candidates.push(rawSlugTok);
    }
    if (tokens.length > 0) {
      candidates.push(tokens[0].toLowerCase());
    }
  }
  let mapping = null;
  for (const cand of candidates) {
    if (!cand) continue;
    if (CONFIG.appIds[cand]) {
      mapping = CONFIG.appIds[cand];
      break;
    }
    const candNorm = normalizeForSearch(cand);
    if (CONFIG.appIds[candNorm]) {
      mapping = CONFIG.appIds[candNorm];
      break;
    }
  }

  // Fuzzy matching against CONFIG.appIds
  if (!mapping) {
    for (const [key, val] of Object.entries(CONFIG.appIds)) {
      const normKey = normalizeForSearch(key);
      if (normKey === appNameNorm || appNameNorm.includes(normKey) || normKey.includes(appNameNorm) ||
        normKey === appKeyNorm || appKeyNorm.includes(normKey) || normKey.includes(appKeyNorm)) {
        mapping = val;
        break;
      }
    }
  }

  if (!mapping) return "";
  if (typeof mapping === "string") return mapping;

  if (typeof mapping === "object") {
    const patchCandidates = [
      rawPatch,
      patch?.patchKey,
      normalizeForSearch(patch?.patchName || ""),
    ];
    if (sampleAsset?.name) {
      const baseName = sampleAsset.name.replace(EXT_STRIP_REGEX, "");
      const tokens = baseName.split("-").filter(Boolean);
      const patchIdx = tokens.findIndex((t) => CONFIG.knownPatchTokens.has(t.toLowerCase()));
      if (patchIdx >= 0) {
        patchCandidates.push(tokens[patchIdx].toLowerCase());
      }
    }

    const normVariant = normalizeForSearch(variantKey || "");
    const variantTokens = (variantKey || "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);

    // Check if there is an engine/patch-specific sub-mapping (e.g. instagram.instafel)
    let activeMapping = mapping;
    for (const pCand of patchCandidates) {
      if (!pCand) continue;
      const sub = mapping[pCand] ||
        (pCand === "revancedextended" ? mapping["rvx"] : null) ||
        (pCand === "revancedadvanced" ? mapping["anddea"] : null) ||
        (pCand === "rvx" ? mapping["revancedextended"] : null) ||
        (pCand === "anddea" ? mapping["revancedadvanced"] : null);

      if (sub) {
        if (typeof sub === "string") return sub;
        if (typeof sub === "object") {
          activeMapping = sub;
          break;
        }
      }
    }

    // 1. Check variant overrides in activeMapping (e.g. clone, androidtv, foss)
    if (normVariant && normVariant !== "default" && normVariant !== "all") {
      if (typeof activeMapping[normVariant] === "string") return activeMapping[normVariant];
      if (typeof mapping[normVariant] === "string") return mapping[normVariant];

      for (const tok of variantTokens) {
        if (typeof activeMapping[tok] === "string") return activeMapping[tok];
        if (tok.includes("tv") && typeof activeMapping["androidtv"] === "string") return activeMapping["androidtv"];
        if (tok.includes("clone") && typeof activeMapping["clone"] === "string") return activeMapping["clone"];
        if (tok.includes("foss") && typeof activeMapping["foss"] === "string") return activeMapping["foss"];
        if (typeof mapping[tok] === "string") return mapping[tok];
      }
    }

    // 2. Default fallback on activeMapping or top-level mapping
    if (typeof activeMapping.default === "string") return activeMapping.default;
    if (typeof mapping.default === "string") return mapping.default;

    // 3. First string value fallback
    const firstVal = Object.values(activeMapping).find((v) => typeof v === "string") ||
      Object.values(mapping).find((v) => typeof v === "string");
    if (firstVal) return firstVal;
  }

  return "";
}

function closeObtainiumModal() {
  hideModal(DOM.obtainiumModal);
}

// Clipboard & Toast Utilities
function escapeJsString(str) {
  return String(str || "")
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"');
}

function copyToClipboard(text, successMessage = "Copied to clipboard!") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => {
      fallbackCopyToClipboard(text, successMessage);
    });
  } else {
    fallbackCopyToClipboard(text, successMessage);
  }
}

function fallbackCopyToClipboard(text, successMessage) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    showToast(successMessage);
  } catch (err) {
    console.error("Fallback copy failed", err);
  }
  document.body.removeChild(textarea);
}

let toastTimer;
function showToast(message) {
  if (!DOM.toastNotification) return;
  DOM.toastNotification.textContent = message;
  DOM.toastNotification.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    DOM.toastNotification?.classList.remove("show");
  }, 2500);
}

// Architecture & Asset Helpers (ISOLATED x86_64 vs x86)
function groupAssetsByArchitecture(assets) {
  const groups = { arm64: [], arm32: [], universal: [], x86_64: [], x86: [], other: [] };
  assets.forEach((asset) => {
    const detectedArch = detectArchitecture(asset.name);
    if (!groups[detectedArch]) groups[detectedArch] = [];
    groups[detectedArch].push(asset);
  });

  const filtered = {};
  ["arm64", "arm32", "universal", "x86_64", "x86", "other"].forEach((arch) => {
    if (groups[arch] && groups[arch].length > 0) {
      groups[arch].sort((a, b) => {
        const aIsApk = /\.(apk|apks|xapk|apkm)$/i.test(a.name) ? 0 : 1;
        const bIsApk = /\.(apk|apks|xapk|apkm)$/i.test(b.name) ? 0 : 1;
        return aIsApk - bIsApk;
      });
      filtered[arch] = groups[arch];
    }
  });
  return filtered;
}

function getFileType(filename) {
  const lower = (filename || "").toLowerCase();

  if (/\.(apk|apks|xapk|apkm)$/i.test(lower)) return "APK";
  if (lower.endsWith(".exe")) return "EXE";
  if (lower.endsWith(".msi")) return "MSI";
  if (lower.endsWith(".appimage")) return "AppImage";
  if (lower.endsWith(".dmg")) return "DMG";
  if (lower.endsWith(".pkg")) return "PKG";
  if (lower.endsWith(".deb")) return "DEB";
  if (lower.endsWith(".rpm")) return "RPM";
  if (lower.endsWith(".flatpak")) return "Flatpak";
  if (lower.endsWith(".snap")) return "Snap";

  if (lower.endsWith(".zip")) {
    if (lower.includes("module") || lower.includes("magisk") || lower.includes("ksu") || lower.includes("apksu")) {
      return "Module";
    }
    if (lower.includes("win") || lower.includes("windows") || lower.includes("x86") || lower.includes("x64")) {
      return "Windows Zip";
    }
    return "Zip Archive";
  }

  if (/\.(tar(\.[a-z0-9]+)?|tgz|7z|rar)$/i.test(lower)) {
    return "Archive";
  }

  return "File";
}

function detectArchitecture(filename) {
  const name = (filename || "").toLowerCase();
  if (name.includes("arm64") || name.includes("aarch64") || name.includes("arm64-v8a")) return "arm64";
  if ((name.includes("arm") && !name.includes("arm64")) || name.includes("arm-v7a") || name.includes("armeabi")) return "arm32";
  if (name.includes("x86_64") || name.includes("x86-64") || name.includes("x64") || name.includes("win64")) return "x86_64";
  if (name.includes("x86") || name.includes("win32") || name.includes("i386") || name.includes("i686")) return "x86";
  if (name.includes("universal") || name.includes("-all.") || /^(?!.*arm|x86|x64|i386)[^-]*\.(apk|apks|xapk|apkm|exe|msi|zip)$/i.test(name)) return "universal";
  return "other";
}

function capitalizeArch(arch) {
  const map = {
    arm64: "ARM64 (v8a)",
    arm32: "ARM32 (v7a)",
    universal: "Universal",
    x86_64: "x86_64 (64-bit)",
    x86: "x86 (32-bit)",
    other: "Other"
  };
  return map[arch] || arch.toUpperCase();
}

function formatBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

function formatCompactNumber(n) {
  if (!n) return "0";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

function formatDate(value) {
  if (!value) return "N/A";
  return new Date(value).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function normalizeForSearch(value) {
  return (value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getSearchTokens(value) {
  if (tokenCache.has(value)) return tokenCache.get(value);
  const tokens = (value || "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  tokenCache.set(value, tokens);
  return tokens;
}

function parseAssetDisplay(filename, arch, fileType) {
  if (parseCache.has(filename)) return parseCache.get(filename);

  const baseName = filename.replace(EXT_STRIP_REGEX, "");
  const tokens = baseName.split("-").filter(Boolean);
  const archSubTokens = new Set(CONFIG.knownArchs.flatMap((a) => a.split("-")));
  const versionIndex = tokens.findIndex(
    (token) => /^(v\w*\d|vbuild)/i.test(token) && !archSubTokens.has(token.toLowerCase())
  );
  const moduleIndex = tokens.findIndex((token) => token.toLowerCase() === "module");
  const stopIndexCandidates = [versionIndex, moduleIndex].filter((i) => i >= 0);
  const stopIndex = stopIndexCandidates.length > 0 ? Math.min(...stopIndexCandidates) : tokens.length;
  const preMetaTokens = tokens.slice(0, stopIndex);

  let patchStartIndex = preMetaTokens.findIndex((token) => CONFIG.knownPatchTokens.has(token.toLowerCase()));

  let appTokens = [];
  let patchTokens = [];
  let variantTokens = [];

  if (patchStartIndex >= 0) {
    appTokens = preMetaTokens.slice(0, patchStartIndex);
    patchTokens = preMetaTokens.slice(patchStartIndex);

    while (patchTokens.length > 1 && CONFIG.variantKeywords.has(patchTokens[patchTokens.length - 1].toLowerCase())) {
      variantTokens.unshift(patchTokens[patchTokens.length - 1]);
      patchTokens = patchTokens.slice(0, -1);
    }
  } else {
    appTokens = preMetaTokens;
    patchTokens = [];

    while (appTokens.length > 1 && CONFIG.variantKeywords.has(appTokens[appTokens.length - 1].toLowerCase())) {
      variantTokens.unshift(appTokens[appTokens.length - 1]);
      appTokens = appTokens.slice(0, -1);
    }
  }

  let version = "Version unknown";
  if (versionIndex >= 0) {
    const versionParts = [tokens[versionIndex].replace(/^v(?=[a-z0-9])/i, "")];
    for (let i = versionIndex + 1; i < tokens.length; i++) {
      const t = tokens[i].toLowerCase();
      const isArchToken = CONFIG.knownArchs.some((a) => a.split("-").includes(t));
      if (t === "module" || t === "universal" || isArchToken) break;
      versionParts.push(tokens[i]);
    }
    version = versionParts.join("-");
  }

  const variantDisplayName = variantTokens.length > 0
    ? variantTokens.map((v) => formatBrandDisplayName(v)).join(" + ")
    : null;

  const rawVariant = variantTokens.length > 0
    ? variantTokens.map((v) => v.toLowerCase()).join("+")
    : null;

  const appNameRaw = appTokens.length > 0 ? appTokens.join(" ") : (preMetaTokens.join(" ") || baseName);
  const patchNameRaw = patchTokens.length > 0 ? patchTokens.join(" ") : "Official";

  const rawPrefix = preMetaTokens.join("-").toLowerCase();
  const rawAppSlug = appTokens.length > 0 ? appTokens.join("-").toLowerCase() : (preMetaTokens.join("-").toLowerCase() || baseName.toLowerCase());
  const rawPatchToken = patchTokens.length > 0 ? patchTokens[0].toLowerCase() : "";

  const result = {
    appName: formatBrandDisplayName(appNameRaw),
    patchName: formatBrandDisplayName(patchNameRaw),
    variant: variantDisplayName,
    rawVariant: rawVariant,
    rawPrefix: rawPrefix,
    rawAppSlug: appTokens.join("-").toLowerCase() || preMetaTokens.join("-").toLowerCase(),
    rawPatchSlug: patchTokens.join("-").toLowerCase() || "official",
    version,
    fileType,
    rawAppSlug,
    rawPatchToken,
  };

  parseCache.set(filename, result);
  return result;
}

function formatBrandDisplayName(value) {
  return (value || "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((token) => {
      const lower = token.toLowerCase();
      if (CONFIG.brandOverrides[lower]) return CONFIG.brandOverrides[lower];
      return token.charAt(0).toUpperCase() + token.slice(1);
    })
    .join(" ");
}

function setLatestBuildMeta(appEntry, releaseType, release) {
  const key = releaseType === "beta" ? "latestBeta" : "latestStable";
  const current = appEntry[key];
  const currentDate = current ? new Date(current.publishedAt).getTime() : 0;
  const releaseDate = new Date(release.published_at).getTime();

  if (!current || releaseDate > currentDate) {
    appEntry[key] = {
      build: getBuildNumberLabel(release),
      publishedAt: release.published_at,
      releaseUrl: release.html_url,
    };
  }
}

function getBuildNumberLabel(release) {
  return String(release.tag_name || release.name || "N/A");
}

function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function updateLastUpdateTimestamp() {
  if (!allReleases || allReleases.length === 0) {
    setPillState("success", "No releases found");
    return;
  }

  const latestTime = allReleases.reduce((max, release) => {
    const t = new Date(release.published_at).getTime();
    return t > max ? t : max;
  }, 0);

  if (latestTime === 0) return;

  const dateStr = new Date(latestTime).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  setPillState("success", dateStr);
}

function setPillState(state, text) {
  if (!DOM.lastUpdateText) return;
  const pill = DOM.lastUpdateText.closest(".update-pill");
  if (!pill) return;

  pill.classList.remove("checking", "error", "success");
  pill.classList.add(state);
  DOM.lastUpdateText.textContent = text;

  const svgContainer = pill.querySelector("svg");
  if (!svgContainer) return;

  if (state === "checking") {
    svgContainer.innerHTML = '<path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/>';
    svgContainer.classList.add("spin");
  } else if (state === "error") {
    svgContainer.innerHTML = '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>';
    svgContainer.classList.remove("spin");
  } else if (state === "success") {
    svgContainer.innerHTML = '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>';
    svgContainer.classList.remove("spin");
  }
}
