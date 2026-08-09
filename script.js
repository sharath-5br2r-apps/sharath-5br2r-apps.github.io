/**
 * ==========================================
 * CONFIGURATION & CUSTOMIZATION
 * Catalog behavior, branding, variants, and notices.
 * ==========================================
 */
const CONFIG = {
  owner: "sharath-5br2r",
  repo: "my-patched-apks",
  cacheDuration: 1, // Cache duration in minutes

  // App Categories for the filter buttons
  appCategories: {
    androidtv: ["primevideo", "plutotv", "moviebox", "disneyplus", "hbomax", "tubi", "vix", "at4klauncher", "projectivylauncher", "peacock"],
    google: ["youtube", "google", "gboard"],
    meta: ["threads", "instagram", "messenger", "facebook", "!plusmessenger"],
    vpn: ["1111warp", "vpnify", "vpn", "protonvpn"]
  },

  // Words ignored in dynamic app filters (must be lowercase)
  sharedAppWordStoplist: new Set(["messenger", "document", "reader"]),

  // Known tokens indicating a patch engine/source name (must be lowercase)
  knownPatchTokens: new Set([
    "revanced", "morphe", "anddea", "rvx", "xposed", "instafel",
    "hooman", "rushiranpise", "hoodles", "binarymend", "paresh",
    "xtra", "icysymmetra", "jasonwu1994", "piko", "revenge"
  ]),

  // Known variant keywords — INCLUDES DEVELOPERS & PATCHERS
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
    "morphe",
    "revanced",
    "rvx"
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
    adm: "ADM",
    adobeacrobat: "Adobe Acrobat",
    amazonalexa: "Amazon Alexa",
    amazonindia: "Amazon India",
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
    twitter: "X / Twitter",
    x: "X / Twitter",
    hooman: "Hooman",
    rushiranpise: "Rushiranpise",
    hoodles: "Hoo-dles",
    binarymend: "Binarymend",
    paresh: "Paresh",
    xtra: "Xtra",
    icysymmetra: "IcySymmetra",
    jasonwu1994: "Jasonwu1994",
    piko: "Piko"
  },

  // Map app slugs to Android Package IDs for Obtainium
  appIds: {
    "1111warp": "com.cloudflare.onedotonedotonedotone",
    acalendar: "org.withouthat.acalendar",
    adguard: "com.adguard.android",
    adm: "com.dv.adm",
    adobeacrobat: "com.adobe.reader",
    adobelightroom: "com.adobe.lrmobile",
    adobephotoshopmix: "com.adobe.photoshopmix",
    amazonalexa: "com.amazon.dee.app",
    amazonindia: "com.amazon.mShop.android.shopping",
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
    kinestop: "com.urbandroid.kinestop",
    komoothikebikerun: "de.komoot.android",
    luminawallpapers: "com.lumina.wallpapers",
    macrodroid: "com.arlosoft.macrodroid",
    medium: "com.medium.reader",
    merriamwebsterdictionary: "com.merriamwebster",
    messenger: "com.facebook.orca",
    microsoftlens: "com.microsoft.office.officelens",
    microsoftedge: "com.microsoft.emmx",
    moonreader: "com.flyersoft.moonreader",
    moonplusreader: "com.flyersoft.moonreader",
    moneymanager: "com.realbyteapps.moneymanagerfree",
    moviebox: {
      default: "com.community.oneroom",
      androidtv: "com.community.mbox.tv"
    },
    mxplayer: "com.mxtech.videoplayer.pro",
    myfitnesspal: "com.myfitnesspal.android",
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
      revanced: "app.revanced.android.youtube",
      rvx: "app.rvx.android.youtube",
      revancedextended: "app.rvx.android.youtube",
      anddea: "anddea.youtube",
      revancedadvanced: "anddea.youtube",
      morphe: "app.morphe.android.youtube",
      default: "com.google.android.youtube",
    },
    youtubemusic: {
      revanced: "app.revanced.android.apps.youtube.music",
      rvx: "app.rvx.android.apps.youtube.music",
      revancedextended: "app.rvx.android.apps.youtube.music",
      anddea: "anddea.youtube.music",
      revancedadvanced: "anddea.youtube.music",
      morphe: "app.morphe.android.apps.youtube.music",
      default: "com.google.android.apps.youtube.music",
    },
  },

  // App Notices / Warning Notes (links are optional)
  appNotices: [
    {
      triggers: ["youtube", "google"],
      className: "microg-note",
      title: "MicroG Required",
      text: "Signing into Google account on APK (non-root) requires MicroG. Install MicroG before logging in.",
      links: [
        { label: "Morphe MicroG", url: "https://github.com/MorpheApp/MicroG-RE/releases/latest" },
        { label: "ReVanced MicroG", url: "https://github.com/ReVanced/GmsCore/releases/latest" },
      ],
    },
    {
      triggers: ["twitter", "x"],
      className: "twitter-login-note",
      title: "Twitter / X Login Warning",
      text: "Twitter checks app integrity on login. If login fails, consider using authorization token workarounds or log in via browser first.",
      // No links required
    },
  ],
};

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
}

// State
let allReleases = [];
let cachedFullCatalog = [];
let searchTerm = "";
let appCategoryFilter = "all";
let sortMode = "recent";
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

// Caches
const parseCache = new Map();
const tokenCache = new Map();
let masterBuildDataCache = null;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initDOM();
  setupTheme();
  setupEventListeners();

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

function showModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("open");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function hideModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("open");
  modalEl.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal-overlay.open")) {
    document.body.classList.remove("modal-open");
  }
}

// Event Listeners
function setupEventListeners() {
  let searchTimeout;

  if (DOM.themeBtn) {
    DOM.themeBtn.addEventListener("click", () => {
      const nextTheme = themeMode === "system" ? "light" : themeMode === "light" ? "dark" : "system";
      themeMode = nextTheme;
      localStorage.setItem("theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

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
        const searchBox = e.target.closest(".search-box") || e.target;
        const y = searchBox.getBoundingClientRect().top + window.scrollY - 15;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  }

  if (DOM.searchClearBtn && DOM.searchInput) {
    DOM.searchClearBtn.addEventListener("click", () => {
      DOM.searchInput.value = "";
      searchTerm = "";
      syncClearBtn();
      syncUrlParams();
      filterAndRenderReleases();
    });
  }

  if (DOM.appFilterButtons) {
    DOM.appFilterButtons.addEventListener("click", (e) => {
      const filterBtn = e.target.closest(".filter-btn");
      if (!filterBtn) return;
      appCategoryFilter = filterBtn.dataset.filter || "all";
      filterAndRenderReleases();
    });
  }

  if (DOM.sortSelect) {
    DOM.sortSelect.addEventListener("change", (e) => {
      sortMode = e.target.value;
      syncUrlParams();
      filterAndRenderReleases();
    });
  }

  if (DOM.builds) {
    DOM.builds.addEventListener("click", (e) => {
      const collapsedCard = e.target.closest(".app-card:not([open])");
      if (collapsedCard && !e.target.closest(".app-card-summary")) {
        collapsedCard.open = true;
        return;
      }

      const trigger = e.target.closest(".channel-box-btn");
      if (trigger) {
        e.stopPropagation();
        openPatchModal(
          trigger.dataset.appKey,
          trigger.dataset.patchKey,
          trigger.dataset.channel || "all",
          trigger.dataset.variant || "all"
        );
      }
    });
  }

  if (DOM.patchModal) {
    DOM.patchModal.addEventListener("click", (e) => {
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

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePatchModal();
      closeAppliedPatchesModal();
      closeObtainiumModal();
    }
  });

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
      const response = await fetch(
        `https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/releases`,
        { headers: { Accept: "application/vnd.github.v3+json" } }
      );
      if (!response.ok) throw new Error(`Failed to fetch data: ${response.status}`);
      fetchedData = await response.json();
    }

    allReleases = fetchedData;
    cacheReleases(allReleases);
    rebuildCatalogCache();
    fetchMasterBuildData();

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
  } catch (e) {}
}

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
      if (!asset.name || !/\.(apk|zip)$/i.test(asset.name)) return;

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
        });
      }

      const appEntry = appMap.get(appKey);
      setLatestBuildMeta(appEntry, releaseType, release);

      const patchKey = normalizeForSearch(parsed.patchName) || "patchedbuild";
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
        ? `archive-${releaseType}-${parsed.version}`
        : String(release.id);

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
          version: parsed.version,
          patchMeta: patchMetaFromRelease,
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

      const totalAppDownloads = patchesArray.reduce((sum, p) => sum + p.totalDownloads, 0);
      const latestAppTime = patchesArray.reduce(
        (latest, p) => Math.max(latest, new Date(p.latestPublishedAt).getTime() || 0),
        0
      );

      const searchTerms = [app.appName, app.appKey];
      patchesArray.forEach((p) => {
        searchTerms.push(p.patchName, p.patchKey);
        p.variants.forEach((v) => {
          searchTerms.push(v.variantName, v.variantKey);
          if (v.latestStable) searchTerms.push(v.latestStable.version);
          if (v.latestBeta) searchTerms.push(v.latestBeta.version);
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
        patches: patchesArray,
      };
    })
    .filter((app) => app.patches.length > 0)
    .sort((a, b) => a.appName.localeCompare(b.appName));
}

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

function filterAndRenderReleases() {
  renderDynamicAppFilterButtons(dynamicAppFilters);

  if (
    appCategoryFilter.startsWith("word-") &&
    !dynamicAppFilters.some((f) => f.key === appCategoryFilter)
  ) {
    appCategoryFilter = "all";
  }

  let apps = filterCatalogBySearch(cachedFullCatalog, searchTerm);
  apps = applyCategoryFilter(apps);
  apps = applySortMode(apps);

  updateCatalogStatus(apps);
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
    btn.classList.toggle("active", btn.dataset.filter === appCategoryFilter);
  });
}

function applyCategoryFilter(apps) {
  if (CONFIG.appCategories[appCategoryFilter]) {
    return apps.filter((app) => {
      const name = normalizeForSearch(app.appName);
      const keywords = CONFIG.appCategories[appCategoryFilter];
      const includes = keywords.filter((k) => !k.startsWith("!"));
      const excludes = keywords.filter((k) => k.startsWith("!")).map((k) => k.slice(1));
      const isIncluded = includes.some((keyword) => name.includes(keyword));
      const isExcluded = excludes.some((keyword) => name.includes(keyword));
      return isIncluded && !isExcluded;
    });
  }

  if (appCategoryFilter.startsWith("word-")) {
    const word = appCategoryFilter.slice(5);
    return apps.filter((app) => getAppNameWords(app.appName).includes(word));
  }

  return apps;
}

function applySortMode(apps) {
  if (sortMode === "popular") {
    return [...apps].sort((a, b) => b.totalDownloads - a.totalDownloads);
  }
  if (sortMode === "name") {
    return [...apps].sort((a, b) => a.appName.localeCompare(b.appName));
  }
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

  return `
    <details class="build-card app-card">
      <summary class="app-card-summary">
        <div class="app-title-group">
          <div class="app-name">${escapeHtml(app.appName)}</div>
        </div>
        <div class="app-badge-group">
          ${dlBadge}
          <svg class="app-card-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </summary>
      <div class="app-card-body">
        ${noticesMarkup}
        <div class="patches-list">
          ${patchesMarkup}
        </div>
      </div>
    </details>
  `;
}

// Notice Markup — Links are completely optional!
function createNoticeMarkup(notice) {
  const linksMarkup = (notice.links && notice.links.length > 0)
    ? notice.links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} ↗</a>`).join(" ")
    : "";

  return `
    <div class="app-notice ${escapeHtml(notice.className)}">
      <div class="app-notice-title">${escapeHtml(notice.title)}</div>
      <div class="app-notice-text">${escapeHtml(notice.text)}</div>
      ${linksMarkup ? `<div class="app-notice-links">${linksMarkup}</div>` : ""}
    </div>
  `;
}

function createPatchMarkup(app, patch) {
  const buildCount = patch.builds.length;
  const buildIconBadge = `<span class="patch-stat-badge" title="${buildCount} total builds">📦 ${buildCount}</span>`;
  const downloadCount = patch.totalDownloads || 0;
  const downloadIconBadge = `<span class="patch-stat-badge" title="${downloadCount.toLocaleString()} total downloads">📥 ${formatCompactNumber(downloadCount)}</span>`;

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
                  type="button">
            <div class="channel-box-top">
              <span class="channel-tag stable">Stable</span>
              <span class="channel-date">${formatDate(variant.latestStable.publishedAt)}</span>
            </div>
            <span class="channel-version">${escapeHtml(variant.latestStable.version)}</span>
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
                  type="button">
            <div class="channel-box-top">
              <span class="channel-tag beta">Beta</span>
              <span class="channel-date">${formatDate(variant.latestBeta.publishedAt)}</span>
            </div>
            <span class="channel-version">${escapeHtml(variant.latestBeta.version)}</span>
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

function getDynamicAppFilters(apps) {
  const wordToAppKeys = new Map();

  apps.forEach((app) => {
    const words = getAppNameWords(app.appName);
    words.forEach((word) => {
      if (!wordToAppKeys.has(word)) wordToAppKeys.set(word, new Set());
      wordToAppKeys.get(word).add(app.appKey);
    });
  });

  const categoryKeys = new Set(Object.keys(CONFIG.appCategories));
  const dynamicFilters = Array.from(wordToAppKeys.entries())
    .filter(([word, appKeys]) => appKeys.size >= SHARED_APP_WORD_MIN_COUNT && !categoryKeys.has(word))
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

function renderOpenPatchModal() {
  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const patch = app ? app.patches.find((item) => item.patchKey === activeModalPatchKey) : null;

  if (!app || !patch) {
    closePatchModal();
    return;
  }

  if (DOM.patchModalTitle) {
    DOM.patchModalTitle.textContent = `${app.appName} • ${patch.patchName}`;
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

  const channelGroup = document.createElement("div");
  channelGroup.className = "filter-pill-group";
  channelGroup.innerHTML = `
    <button class="modal-filter-btn ${modalBuildFilter === "stable" ? "active" : ""}" data-filter="stable" type="button">Stable</button>
    <button class="modal-filter-btn ${modalBuildFilter === "beta" ? "active" : ""}" data-filter="beta" type="button">Beta</button>
  `;
  filterContainer.appendChild(channelGroup);

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
          const vKey = a.parsed.variant ? normalizeForSearch(a.parsed.variant) : "default";
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

      downloadsMarkup += `
        <div class="download-btn ${arch}">
          <div class="asset-left">
            <span class="asset-title">${escapeHtml(asset.parsed.appName)}</span>
            <span class="asset-subtitle">${escapeHtml(asset.parsed.version)} • ${asset.fileType}</span>
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
    <details class="modal-build-card" ${openByDefault ? "open" : ""}>
      <summary class="modal-build-header">
        <div class="modal-build-header-left">
          <div class="modal-build-title">${titleText}</div>
          <div class="modal-build-date">${formatDate(build.publishedAt)}${build.isArchive ? "" : ` • ${escapeHtml(build.version)}`}</div>
        </div>
        <div class="modal-build-header-right">
          <span class="badge-group">
            ${build.isArchive ? `<span class="release-badge archive">Archive</span>` : ""}
          </span>
        </div>
      </summary>
      <div class="modal-build-downloads">
        ${downloadsMarkup}
        ${patchInfoBanner}
      </div>
    </details>
  `;
}

function closePatchModal() {
  hideModal(DOM.patchModal);
}

// Master Build Data Fetching
async function fetchMasterBuildData() {
  if (masterBuildDataCache) return masterBuildDataCache;
  try {
    const resp = await fetch("builds.json");
    if (resp.ok) {
      masterBuildDataCache = await resp.json();
    } else {
      masterBuildDataCache = {};
    }
  } catch (e) {
    masterBuildDataCache = {};
  }
  return masterBuildDataCache;
}

// Applied Patches Modal
async function openAppliedPatchesModal(appKey, patchKey, buildKey) {
  const app = currentAppCatalog.find((item) => item.appKey === appKey);
  const patch = app ? app.patches.find((item) => item.patchKey === patchKey) : null;
  if (!app || !patch) return;

  if (DOM.appliedPatchesTitle) {
    DOM.appliedPatchesTitle.textContent = `${app.appName} (${patch.patchName})`;
  }

  let build = patch.builds.find((b) => b.buildKey === buildKey || String(b.releaseId) === String(buildKey)) || patch.builds[0];
  let appliedPatches = build?.appliedPatches || null;

  if (!appliedPatches) {
    const masterData = await fetchMasterBuildData();
    const targetKey = `${appKey}-${patchKey}`;
    if (masterData && masterData[targetKey]) {
      appliedPatches = masterData[targetKey].applied_patches || null;
    }
  }

  activeAppliedPatchesList = appliedPatches;
  filterAppliedPatchesList("");
  showModal(DOM.appliedPatchesModal);

  if (DOM.patchSearchInput) {
    DOM.patchSearchInput.value = "";
  }
}

function filterAppliedPatchesList(query) {
  if (!DOM.appliedPatchesBody) return;

  if (!activeAppliedPatchesList) {
    if (DOM.patchCountBadge) DOM.patchCountBadge.textContent = "0 patches";
    DOM.appliedPatchesBody.innerHTML = '<div class="no-results">No applied patches data available.</div>';
    return;
  }

  const normalized = (query || "").toLowerCase().trim();
  const filtered = activeAppliedPatchesList.filter((p) => p.toLowerCase().includes(normalized));

  if (DOM.patchCountBadge) {
    DOM.patchCountBadge.textContent = `${filtered.length} of ${activeAppliedPatchesList.length} patches`;
  }

  if (filtered.length === 0) {
    DOM.appliedPatchesBody.innerHTML = '<div class="no-results">No matching patches found.</div>';
    return;
  }

  DOM.appliedPatchesBody.innerHTML = `
    <div class="applied-patches-grid">
      ${filtered.map((p) => `<div class="applied-patch-item"><span class="patch-check-icon">✓</span><span>${escapeHtml(p)}</span></div>`).join("")}
    </div>
  `;
}

function closeAppliedPatchesModal() {
  hideModal(DOM.appliedPatchesModal);
}

// Obtainium Modal with Multi-Action Options
function openObtainiumModal() {
  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const patch = app ? app.patches.find((item) => item.patchKey === activeModalPatchKey) : null;
  if (!app) return;

  if (DOM.obtainiumTitle) DOM.obtainiumTitle.textContent = `Install ${app.appName} via Obtainium`;
  if (DOM.obtainiumBody) DOM.obtainiumBody.innerHTML = createObtainiumInstructions(app, patch);

  showModal(DOM.obtainiumModal);
}

function createObtainiumInstructions(app, patch) {
  const repoUrl = `https://github.com/${CONFIG.owner}/${CONFIG.repo}`;
  const appNameNorm = normalizeForSearch(app?.appName || "app");
  const patchNameNorm = normalizeForSearch(patch?.patchName || "patch");

  const regexPattern = modalVariantFilter && modalVariantFilter !== "all" && modalVariantFilter !== "default"
    ? `^${appNameNorm}-${patchNameNorm}-${modalVariantFilter}.*\\.apk$`
    : `^${appNameNorm}-${patchNameNorm}.*\\.apk$`;

  const pkgId = getAppPackageId(app, patch, modalVariantFilter);
  const safeId = pkgId || `${CONFIG.owner}_${appNameNorm}_${patchNameNorm}`.replace(/[^a-zA-Z0-9_]/g, "_");

  const configObj = {
    id: safeId,
    name: `${app?.appName} (${patch?.patchName || "Patched"})`,
    author: CONFIG.owner,
    url: repoUrl,
    additionalSettings: JSON.stringify({ apkFilterRegEx: regexPattern }),
  };

  const jsonConfig = JSON.stringify(configObj);
  const directUrl = `obtainium://app/${jsonConfig}`;
  const redirectUrl = `https://apps.obtainium.imranr.dev/redirect?r=${encodeURIComponent(directUrl)}`;

  return `
    <div class="obtainium-instructions">
      <p style="margin-bottom: 12px;">Import this configuration directly into <strong>Obtainium</strong>:</p>
      <div class="obtainium-actions">
        <a href="${escapeHtml(directUrl)}" class="obtainium-btn-direct">Open in Obtainium</a>
        <a href="${escapeHtml(redirectUrl)}" class="obtainium-btn-redirect" target="_blank" rel="noopener noreferrer">Open in Obtainium (Redirect)</a>
        <button class="copy-btn" onclick="copyToClipboard('${escapeHtml(regexPattern)}', 'Regex copied to clipboard!')" type="button">Copy Regex</button>
      </div>
      <div style="margin-top: 16px;">
        <p style="font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">Manual Regular Expression Filter:</p>
        <div class="instruction-code">
          <code>${escapeHtml(regexPattern)}</code>
        </div>
      </div>
    </div>
  `;
}

function getAppPackageId(app, patch, variantKey) {
  if (!app) return "";
  const keyNorm = normalizeForSearch(app.appKey || app.appName || "");
  const mapping = CONFIG.appIds[keyNorm] || CONFIG.appIds[app.appKey];

  if (!mapping) return "";
  if (typeof mapping === "string") return mapping;

  if (typeof mapping === "object") {
    const vNorm = normalizeForSearch(variantKey || "");
    if (vNorm && mapping[vNorm]) return mapping[vNorm];
    return mapping.default || Object.values(mapping)[0] || "";
  }
  return "";
}

function closeObtainiumModal() {
  hideModal(DOM.obtainiumModal);
}

// Clipboard & Toast Utilities
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
  } catch (err) {}
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

// Helper Functions
function groupAssetsByArchitecture(assets) {
  const groups = { arm64: [], arm32: [], universal: [], x86: [], other: [] };
  assets.forEach((asset) => {
    const detectedArch = detectArchitecture(asset.name);
    groups[detectedArch].push(asset);
  });

  const filtered = {};
  ["arm64", "arm32", "universal", "x86", "other"].forEach((arch) => {
    if (groups[arch].length > 0) {
      filtered[arch] = groups[arch];
    }
  });
  return filtered;
}

function getFileType(filename) {
  return filename.toLowerCase().endsWith(".zip") ? "Module" : "APK";
}

function detectArchitecture(filename) {
  const name = (filename || "").toLowerCase();
  if (name.includes("arm64") || name.includes("aarch64")) return "arm64";
  if (name.includes("arm") || name.includes("v7a")) return "arm32";
  if (name.includes("universal")) return "universal";
  if (name.includes("x86")) return "x86";
  return "universal";
}

function capitalizeArch(arch) {
  const map = { arm64: "ARM64 (v8a)", arm32: "ARM32 (v7a)", universal: "Universal", x86: "x86 / x64", other: "Other" };
  return map[arch] || arch.toUpperCase();
}

function formatBytes(bytes) {
  if (!bytes) return "0 B";
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

  const baseName = filename.replace(/\.(apk|zip)$/i, "");
  const tokens = baseName.split("-").filter(Boolean);

  let variant = null;
  let cleanTokens = [];

  tokens.forEach((t) => {
    const lower = t.toLowerCase();
    if (CONFIG.variantKeywords.has(lower)) {
      variant = t;
    } else {
      cleanTokens.push(t);
    }
  });

  const appName = cleanTokens.length > 0 ? cleanTokens[0] : baseName;
  const patchName = cleanTokens.length > 1 ? cleanTokens.slice(1).join(" ") : "Patched Build";

  const result = {
    appName: formatBrandDisplayName(appName),
    patchName: formatBrandDisplayName(patchName),
    variant: variant ? formatBrandDisplayName(variant) : null,
    rawVariant: variant ? variant.toLowerCase() : null,
    version: "Latest",
    fileType,
  };

  parseCache.set(filename, result);
  return result;
}

function formatBrandDisplayName(value) {
  const lower = (value || "").toLowerCase();
  if (CONFIG.brandOverrides[lower]) return CONFIG.brandOverrides[lower];
  return value.charAt(0).toUpperCase() + value.slice(1);
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
  if (!allReleases || allReleases.length === 0) return;
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
}
