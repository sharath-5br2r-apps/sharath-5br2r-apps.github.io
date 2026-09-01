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
    browser: ["brave", "bravebeta", "bravenightly", "browser"],
    communication: ["discord", "truecaller", "messenger", "whatsapp", "telegram", "gboard"],
    documents: ["adobeacrobat", "microsoftexcel", "microsoftword", "moonreader", "moonplusreader", "office", "xodo", "camscanner", "adobe", "excel", "word", "reader"],
    education: ["duolingo"],
    emulator: ["dolphin", "emulator", "eden"],
    games: ["brawlstars", "clashofclans", "clashroyale", "hillclimbracing", "jetpackjoyride", "nulls", "smashhit", "vector", "chess", "game", "games", "levilauncher", "levilaunchroid", "brawl", "clash", "hill", "jetpack", "smash"],
    launcher: ["nova", "smartlauncher", "niagara", "launcher", "levilauncher", "levilaunchroid"],
    music: ["youtubemusic", "symfonium", "soundcloud", "poweramp", "music", "audioplayer"],
    productivity: ["bitwarden", "pcremote", "monect", "adm", "sdmaid", "oxygenupdater", "betamaniac", "fing", "speedtest", "batteryguru", "github", "solidexplorer", "camscanner", "xodo", "adobe", "excel", "word"],
    amazon: ["amazon", "alexa", "amazonindia", "primevideo", "prime"],
    social: ["twitter", "instagram", "tiktok", "facebook", "threads", "reddit", "x-morphe", "xshim", "comtwitter", "x", "discord", "twitch", "youtube", "!youtubemusic"],
    utilities: ["adguard", "gboard", "sdmaid", "speedtest", "fing", "batteryguru", "adm", "oxygenupdater", "solidexplorer", "github", "bitwarden", "pcremote", "1111warp", "warp", "vpn"],
    video: ["youtube", "primevideo", "tiktok", "jiohotstar", "hbomax", "vix", "moviebox", "netflix", "twitch", "xrecorder"],
    vpn: ["1111warp", "vpnify", "windscribevpn", "protonvpn", "vpn", "warp", "cloudflare", "1111", "adguard"],
  },


  // Words ignored in the dynamic app filters (must be lowercase)
  sharedAppWordStoplist: new Set([
    "messenger", "document", "reader", "extra", "builder", "signed", "clone",
    "morphe", "revanced", "xposed", "app", "apps", "free", "pro", "premium",
    "latest", "official", "release", "module", "mode", "tools", "utility",
    "android", "desktop", "patch", "patches", "custom", "version", "v1", "v2",
    "video", "music", "launcher", "browser", "theme", "online", "mobile"
  ]),

  // Known tokens indicating a patch engine starts (must be lowercase)
  patchEngineTokens: new Set([
    "revanced", "morphe", "lspatch", "npatch", "sign", "signed"
  ]),

  // Known tokens indicating a patch name/type
  patchTokens: new Set([
    "extended", "custom", "patch", "anddea", "binarymend", "bholeykabhakt", "browzomje",
    "byehi98", "hooman", "rushiranpise", "hoodles", "hoodlesshared", "paresh", "xtra",
    "icysymmetra", "jasonwu1994", "kondratjev", "kveld9", "lain", "nulls", "piko",
    "prathxm", "inotia00", "revenge", "hxreborn", "adobo", "patcheddit", "rvx",
    "dh6k", "stylus"
  ]),

  // Known tokens indicating a variant (must be lowercase)
  variantTokens: new Set([
    "sign",
    "clone",
    "exp",
    "nord",
    "mocha",
    "privacy",
    "materialu",
    "materialyou",
    "amoled",
    "shared",
    "foss",
    "gplay",
    "revanced",
    "rvx",
    "xshim",
    "gfp",
    "stock",
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
    "beta",
    "stable"
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
    "amd64",
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
    fing: "Fing",
    fingnetworktools: "Fing",
    sdmaid: "SD Maid 2/SE",
    sdmaid2se: "SD Maid 2/SE",
    mocha: "Mocha Theme",
    nord: "Nord Theme",
    materialu: "Material You",
    photoshop: "Adobe Photoshop",
    lightroom: "Adobe Lightroom",
    xodo: "Xodo PDF Reader & Editor",
    xodopdfreadereditor: "Xodo PDF Reader & Editor",
    hellochinese: "HelloChinese: Learn Chinese",
    hellochineselearnchinese: "HelloChinese: Learn Chinese",
    gplay: "Google Play",
    foss: "FOSS",
    gboard: "Google Keyboard (Gboard)",
    googlekeyboard: "Google Keyboard (Gboard)",
    wps: "WPS",
    wpsoffice: "WPS Office",
    rar: "RAR",
    adguard: "AdGuard",
    moonplus: "Moon+",
    eyecon: "Eyecon",
    eyeconcalleridspamblock: "Eyecon",
    camscanner: "CamScanner",
    inshorts: "Inshorts",
    inshortsnewsin60words: "Inshorts",
    "1111": "1.1.1.1 +",
    "1111warp": "1.1.1.1 + WARP",
    warp: "WARP",
    acalendar: "aCalendar",
    at4k: "AT4K Launcher",
    at4klauncher: "AT4K Launcher",
    xrecorder: "XRecorder",
    microsoftlens: "Microsoft Lens",
    soundcloud: "SoundCloud",
    batteryguru: "Battery Guru",
    androidtv: "Android TV",
    disneyplus: "Disney+",
    hbomax: "HBO Max",
    vix: "ViX",
    komoot: "komoot - hike, bike & run",
    komoothikebikerun: "komoot - hike, bike & run",
    vpnify: "VPNify",
    snorelab: "SnoreLab",
    myfitnesspal: "MyFitnessPal",
    terabox: "TeraBox",
    plutotv: "PlutoTV",
    accuweather: "AccuWeather",
    pixiv: "pixiv",
    mxplayer: "MX Player Pro",
    mxplayerpro: "MX Player Pro",
    moviebox: "MovieBox",
    kinestop: "KineStop",
    x: "X / Twitter",
    twitter: "X / Twitter",
    docscanner: "Doc Scanner",
    documentscanner: "Doc Scanner",
    droufus: "DROFUS - ISO 2 USB",
    rufus: "DROFUS - ISO 2 USB",
    bluetoothkeyboardmouse: "Bluetooth Keyboard & Mouse",
    bluetoothkeyboardandmouse: "Bluetooth Keyboard & Mouse",
    calm: "Calm - Meditate, Sleep, Relax",
    nuvio: "Nuvio",
    titaniumbrowser: "Titanium Browser",
    sendfilestotv: "Send Files to TV",
    hooman: "Hoomans",
    rushiranpise: "RushiRanpise",
    hoodles: "Hoodles",
    hoodlesshared: "Hoodles Shared",
    binarymend: "BinaryMend",
    paresh: "Paresh",
    xtra: "Xtra",
    icysymmetra: "IcySymmetra",
    kondratjev: "Kondratjev",
    prathxm: "Prathxm",
    byehi98: "byehi98",
    nulls: "Null's",
    jasonwu1994: "jasonwu1994",
    piko: "Piko",
    xshim: "X-Shim",
    jiohotstar: "JioHotstar",
    dolphin: "Dolphin Emulator",
    official: "Official",
    gfp: "Game For Peace Spoof",
    levilaunchroid: "LeviLaunchroid",
    levilaunchroidextra: "LeviLaunchroid Extra",
    stock: "Stock",
    windows: "Windows",
    linux: "Linux",
    android: "Android",
    macos: "macOS",
    mac: "macOS",
    stylus: "Stylus",
    dh6k: "dh6k",
    bitwarden: "Bitwarden",
    oxygenupdater: "Oxygen Updater",
    pc: "PC",
    brave: "Brave Browser",
    bravestable: "Brave Browser",
    bravebeta: "Brave Browser Beta",
    bravenightly: "Brave Browser Nightly",
    bravebrowser: "Brave Browser",
    bravebrowserbeta: "Brave Browser Beta",
    bravebrowsernightly: "Brave Browser Nightly",
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
    bholeykabhakt: "BholeyKaBhakt",
    browzomje: "Browzomje",
    kveld9: "kveld9",
    lain: "lain",
    adobo: "Adobo",
    automate: "Automate",
    autosync: "Autosync",
    backdrops: "Backdrops",
    swiftkey: "SwiftKey",
    microsoftswiftkey: "SwiftKey",
    standard: "Standard",
    byair: "ByAir"
  },

  // Android SDK level to Android version mapping
  sdkToAndroidVersion: {
    "1": "1.0",
    "2": "1.1",
    "3": "1.5",
    "4": "1.6",
    "5": "2.0",
    "6": "2.0.1",
    "7": "2.1",
    "8": "2.2",
    "9": "2.3",
    "10": "2.3.3",
    "11": "3.0",
    "12": "3.1",
    "13": "3.2",
    "14": "4.0",
    "15": "4.0.3",
    "16": "4.1",
    "17": "4.2",
    "18": "4.3",
    "19": "4.4",
    "20": "4.4W",
    "21": "5.0",
    "22": "5.1",
    "23": "6.0",
    "24": "7.0",
    "25": "7.1",
    "26": "8.0",
    "27": "8.1",
    "28": "9.0",
    "29": "10.0",
    "30": "11.0",
    "31": "12.0",
    "32": "12L",
    "33": "13.0",
    "34": "14.0",
    "35": "15.0",
    "36": "16.0"
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
    brave: {
      default: "com.brave.browser",
      stable: "com.brave.browser",
      beta: "com.brave.browser_beta",
      nightly: "com.brave.browser_nightly"
    },
    bravebeta: "com.brave.browser_beta",
    bravestable: "com.brave.browser",
    bravenightly: "com.brave.browser_nightly",
    bravebrowserbeta: "com.brave.browser_beta",
    bravebrowsernightly: "com.brave.browser_nightly",
    bravebrowser: {
      default: "com.brave.browser",
      stable: "com.brave.browser",
      beta: "com.brave.browser_beta",
      nightly: "com.brave.browser_nightly"
    },
    "1111warp": "com.cloudflare.onedotonedotonedotone",
    adm: "com.dv.adm",
    amazonalexa: "com.amazon.dee.app",
    amazonindia: "in.amazon.mShop.android.shopping",
    amazonshopping: "com.amazon.mShop.android.shopping",
    accuweather: "com.accuweather.android",
    alldocumentreader: "alldocumentsreader.docuemntviewer",
    at4klauncher: "com.overdevs.at4k",
    automate: "com.llamalab.automate",
    autosync: "com.ttxapps.autosync",
    backdrops: "com.backdrops.wallpapers",
    batteryguru: "com.paget96.batteryguru",
    betamaniac: "it.mirko.beta",
    brawlstars: "daniillnull.nulls.brawlstars",
    clashofclans: "nullsclash.night.rel",
    clashroyale: "nullsroyale.rel.free",
    byair: "com.byairapp.android",
    calcnote: "com.appumstudios.calcnote",
    caloriecounter: "com.fatsecret.android",
    chess: "com.chess",
    hillclimbracing: "com.fingersoft.hillclimb",
    jetpackjoyride: "com.halfbrick.jetpackjoyride",
    camscanner: "com.intsig.camscanner",
    xrecorder: "videoeditor.videorecorder.screenrecorder",
    microsoftlens: "com.microsoft.office.officelens",
    soundcloud: "com.soundcloud.android",
    windscribe: "com.windscribe.vpn",
    windscribevpn: "com.windscribe.vpn",
    smartlauncher6: "ginlemon.flowerfree",
    novalauncher: "com.teslacoilsw.launcher",
    niagaralauncher: "bitpit.launcher",
    cricbuzz: "com.cricbuzz.android",
    cryptomator: "org.cryptomator",
    docscanner: "com.cv.docscanner",
    documentscanner: "com.cv.docscanner",
    droufus: "com.mixapplications.rufus",
    duolingo: "com.duolingo",
    disneyplus: "com.disney.disneyplus",
    dolphinemulator: {
      default: "org.dolphinemu.dolphinemu",
      gfp: "com.tencent.tmgp.pubgmhd",
      gameforpeacespoof: "com.tencent.tmgp.pubgmhd",
    },
    discord: "com.discord",
    eyecon: "com.eyecon.global",
    eyeconcalleridspamblock: "com.eyecon.global",
    facebook: "com.facebook.katana",
    fing: "com.overlook.android.fing",
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
    googlephone: "com.google.android.dialer",
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
    inshorts: "com.nis.app",
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
    messenger: { default: "com.facebook.orca", morphe: "app.morphe.messenger.orca" },
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
    nuvio: { androidtv: "com.nuvio.tv" },
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
    sdmaid: "eu.darken.sdmse",
    sdmaid2se: "eu.darken.sdmse",
    rufus: "com.mixapplications.rufus",
    bluetoothkeyboardmouse: "io.appground.blek",
    bluetoothkeyboardandmouse: "io.appground.blek",
    swiftkey: "com.touchtype.swiftkey",
    microsoftswiftkey: "com.touchtype.swiftkey",
    showly: "com.michaldrabik.showly2",
    smartlauncher6: "ginlemon.flowerfree",
    solidexplorer: "pl.solidexplorer2",
    smashhit: "com.mediocre.smashhit",
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
    titaniumbrowser: "io.github.jqssun.helium",
    todoist: "com.todoist",
    trakttv: "tv.trakt.trakt",
    truecaller: "com.truecaller",
    tubi: "com.tubitv",
    tumblr: "com.tumblr",
    twitch: "tv.twitch.android.app",
    reddit: "com.reddit.frontpage",
    rumble: "com.rumble.battles",
    ventusky: "cz.ackee.ventusky",
    vector: "com.nekki.vector",
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
    xodo: "com.xodo.pdf.reader",
    xodopdfreadereditor: "com.xodo.pdf.reader",
    mxplayerpro: "com.mxtech.videoplayer.pro",
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
      title: "Amazon Shared Permissions & Signature",
      text: "Due to shared permissions between Amazon apps and Prime Video (shared login), all Amazon apps must be installed with the same signature.",
      links: [
        { label: "Download apps from here", url: "./" },
        { label: "Discussions", url: "https://github.com/orgs/sharath-5br2r-apps/discussions" },
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
    {
      triggers: ["nulls", "brawlstars", "clashofclans", "clashroyale"],
      className: "nulls-note",
      title: "Null's Private Server Notice",
      text: "Null's Games (from nulls.gg) is a private server with proprietary patches. Builds are scraped and hosted here for easy Obtainium tracking.",
      links: [
        { label: "nulls.gg", url: "https://nulls.gg/" },
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
  DOM.repoSelect = document.getElementById("repoSelect");
  DOM.repoSelectWrap = document.getElementById("repoSelectWrap");
  DOM.appFilterButtons = document.getElementById("appFilterButtons");
  DOM.catalogCountText = document.getElementById("catalogCountText");
  DOM.lastUpdateText = document.getElementById("lastUpdateText");
  DOM.settingsBtn = document.getElementById("settingsBtn");
  DOM.settingsModal = document.getElementById("settingsModal");
  DOM.systemFontCheckbox = document.getElementById("systemFontCheckbox");
  DOM.troubleshootBtn = document.getElementById("troubleshootBtn");
  DOM.troubleshootModal = document.getElementById("troubleshootModal");
  DOM.clearCacheBtn = document.getElementById("clearCacheBtn");
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
  DOM.obtainiumDropdownPanel = document.getElementById("obtainiumDropdownPanel");
  DOM.obtainiumDropdownBody = document.getElementById("obtainiumDropdownBody");
  DOM.obtainiumDropdownClose = document.getElementById("obtainiumDropdownClose");
  DOM.creditsBtn = document.getElementById("creditsBtn");
  DOM.creditsModal = document.getElementById("creditsModal");
  DOM.changelogModal = document.getElementById("changelogModal");
  DOM.changelogTitle = document.getElementById("changelogTitle");
  DOM.changelogMeta = document.getElementById("changelogMeta");
  DOM.changelogBody = document.getElementById("changelogBody");
  DOM.toastNotification = document.getElementById("toastNotification");
  DOM.themeColorMeta = document.getElementById("themeColorMeta");
  DOM.filterToolbar = document.getElementById("filterToolbar");
  DOM.filterToggleBtn = document.getElementById("filterToggleBtn");
  DOM.engineSelect = document.getElementById("engineSelect");
  DOM.engineSelectWrap = document.getElementById("engineSelectWrap");
  DOM.patchSelect = document.getElementById("patchSelect");
  DOM.patchSelectWrap = document.getElementById("patchSelectWrap");
  DOM.osSelect = document.getElementById("osSelect");
  DOM.osSelectWrap = document.getElementById("osSelectWrap");

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
let engineFilter = "all"; // "all" | "morphe" | "revanced" | etc.
let patchFilter = "all"; // "all" | patch token / slug
let osFilter = "all"; // "all" | "android" | "windows" | etc.
let appCategoryFilter = "all"; // "all" | "google" | "meta" | "vpn" | "word-..."
let sortMode = "recent"; // "recent" | "popular" | "name"
let dynamicAppFilters = [];
let currentAppCatalog = [];
let activeModalAppKey = null;
let activeModalPatchKey = null;
let modalEngineFilter = "all";
let modalPatchNameFilter = "all";
let modalOsFilter = "all";
let modalBuildFilter = "all";
let modalVariantFilter = "all";
let isObtainiumDropdownOpen = false;
let activeModalOpenBuildKey = null;
let themeMode = "system";
let activeAppliedPatchesList = [];
let activeSkippedPatchesList = [];
let activeFailedPatchesList = [];
let activeBuildMetadata = null;

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

// Theme & Settings Management
let themeStyle = "zen";
let isSystemFont = false;

function setupTheme() {
  const savedTheme = localStorage.getItem("theme");
  themeMode = ["light", "dark", "system"].includes(savedTheme) ? savedTheme : "system";

  const savedStyle = localStorage.getItem("theme_style");
  themeStyle = ["zen", "material"].includes(savedStyle) ? savedStyle : "zen";

  const savedFont = localStorage.getItem("system_font");
  isSystemFont = savedFont === "true";

  applyTheme(themeMode);
  applyThemeStyle(themeStyle);
  applySystemFont(isSystemFont);

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
    DOM.themeColorMeta.setAttribute("content", isLight ? (themeStyle === "material" ? "#ffffff" : "#faf8f5") : (themeStyle === "material" ? "#000000" : "#1a1814"));
  }

  // Sync mode buttons in Settings modal
  const modeButtons = document.querySelectorAll("#modeSelectButtons .modal-filter-btn");
  modeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === theme);
  });
}

function applyThemeStyle(style) {
  themeStyle = style;
  document.body.classList.toggle("theme-material", style === "material");

  const isLight = document.body.classList.contains("light-mode");
  if (DOM.themeColorMeta) {
    DOM.themeColorMeta.setAttribute("content", isLight ? (style === "material" ? "#ffffff" : "#faf8f5") : (style === "material" ? "#000000" : "#1a1814"));
  }

  // Sync style buttons in Settings modal
  const styleButtons = document.querySelectorAll("#styleSelectButtons .modal-filter-btn");
  styleButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.style === style);
  });
}

function applySystemFont(useSystem) {
  isSystemFont = useSystem;
  document.body.classList.toggle("system-font", useSystem);
  if (DOM.systemFontCheckbox) {
    DOM.systemFontCheckbox.checked = useSystem;
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

  // Settings Modal ⚙️
  if (DOM.settingsBtn) {
    DOM.settingsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      applyTheme(themeMode);
      applyThemeStyle(themeStyle);
      applySystemFont(isSystemFont);
      if (DOM.settingsModal) showModal(DOM.settingsModal);
    });
  }

  if (DOM.settingsModal) {
    DOM.settingsModal.addEventListener("click", (e) => {
      const modeBtn = e.target.closest("#modeSelectButtons .modal-filter-btn");
      if (modeBtn) {
        const selectedMode = modeBtn.dataset.mode;
        themeMode = selectedMode;
        localStorage.setItem("theme", selectedMode);
        applyTheme(selectedMode);
        return;
      }

      const styleBtn = e.target.closest("#styleSelectButtons .modal-filter-btn");
      if (styleBtn) {
        const selectedStyle = styleBtn.dataset.style;
        themeStyle = selectedStyle;
        localStorage.setItem("theme_style", selectedStyle);
        applyThemeStyle(selectedStyle);
        return;
      }

      if (e.target.id === "settingsModal" || e.target.closest(".modal-close")) {
        hideModal(DOM.settingsModal);
      }
    });
  }

  if (DOM.systemFontCheckbox) {
    DOM.systemFontCheckbox.addEventListener("change", (e) => {
      const useSystem = e.target.checked;
      localStorage.setItem("system_font", useSystem ? "true" : "false");
      applySystemFont(useSystem);
    });
  }

  // Clear Cache & Refresh Button 🗑️
  document.addEventListener("click", async (e) => {
    const targetBtn = e.target.closest("#clearCacheBtn");
    if (!targetBtn) return;
    
    showToast("Clearing website cache and refreshing...");
    try {
      localStorage.clear();
      sessionStorage.clear();
      parseCache.clear();
      tokenCache.clear();
      masterBuildDataCache = null;

      if ("caches" in window) {
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((key) => caches.delete(key)));
      }

      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((r) => r.unregister()));
      }
    } catch (err) {
      console.warn("Failed to clear some caches:", err);
    }
    setTimeout(() => {
      window.location.reload(true);
    }, 600);
  });

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

  // Collapsible Filter Toolbar Toggle
  if (DOM.filterToggleBtn && DOM.filterToolbar) {
    DOM.filterToggleBtn.addEventListener("click", () => {
      const isCollapsed = DOM.filterToolbar.classList.toggle("collapsed");
      DOM.filterToggleBtn.setAttribute("aria-expanded", !isCollapsed);
    });
  }

  // Repository Dropdown Selection Filter
  if (DOM.repoSelect) {
    DOM.repoSelect.addEventListener("change", (e) => {
      repoFilter = e.target.value || "all";
      syncUrlParams();
      filterAndRenderReleases();
    });
  }

  // Engine Dropdown Selection Filter
  if (DOM.engineSelect) {
    DOM.engineSelect.addEventListener("change", (e) => {
      engineFilter = e.target.value || "all";
      syncUrlParams();
      filterAndRenderReleases();
    });
  }

  // Patch Dropdown Selection Filter
  if (DOM.patchSelect) {
    DOM.patchSelect.addEventListener("change", (e) => {
      patchFilter = e.target.value || "all";
      syncUrlParams();
      filterAndRenderReleases();
    });
  }

  // OS Dropdown Selection Filter
  if (DOM.osSelect) {
    DOM.osSelect.addEventListener("change", (e) => {
      osFilter = e.target.value || "all";
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
      const obtainiumTrigger = e.target.closest("#obtainiumBtn");
      if (obtainiumTrigger) {
        e.preventDefault();
        e.stopPropagation();
        toggleObtainiumDropdown();
        return;
      }

      // Handle per-asset Info buttons before the build-card accordion logic.
      // This prevents the parent card from consuming the click.
      const appliedTrigger = e.target.closest(".patch-applied-btn");
      if (appliedTrigger) {
        e.preventDefault();
        e.stopPropagation();
        openAppliedPatchesModal(
          appliedTrigger.dataset.appKey,
          appliedTrigger.dataset.patchKey,
          appliedTrigger.dataset.buildKey,
          appliedTrigger.dataset.assetName
        );
        return;
      }

      const card = e.target.closest(".modal-build-card");
      if (card) {
        const isHeaderClick = e.target.closest(".modal-build-header");
        const isOpen = card.classList.contains("open");
        const isInteractive = e.target.closest("a, button, .patch-applied-btn, .changelog-btn");

        if (isHeaderClick || (!isOpen && !isInteractive)) {
          if (!isOpen) {
            const modalBody = card.closest(".modal-body");
            if (modalBody) {
              modalBody.querySelectorAll(".modal-build-card.open").forEach(c => {
                if (c !== card) c.classList.remove("open");
              });
            }
            card.classList.add("open");
            activeModalOpenBuildKey = card.dataset.buildKey || null;

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
            if (activeModalOpenBuildKey === card.dataset.buildKey) {
              activeModalOpenBuildKey = null;
            }
          }
          if (isHeaderClick || !isInteractive) return;
        }
      }

      const filterBtn = e.target.closest(".modal-filter-btn");
      if (filterBtn && !filterBtn.disabled) {
        const filterType = filterBtn.dataset.filter;
        if (filterType.startsWith("engine-")) {
          modalEngineFilter = filterType.slice(7);
          const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
          if (app) {
            const firstPatch = modalEngineFilter === "all"
              ? app.patches[0]
              : app.patches.find((p) => (p.engineToken || "none").toLowerCase() === modalEngineFilter);
            if (firstPatch) {
              activeModalPatchKey = firstPatch.patchKey;
            }
          }
        } else if (filterType.startsWith("patchname-")) {
          modalPatchNameFilter = decodeURIComponent(filterType.slice(10));
          const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
          if (app) {
            const targetPatch = modalPatchNameFilter === "all"
              ? (modalEngineFilter === "all" ? app.patches[0] : app.patches.find((p) => (p.engineToken || "none").toLowerCase() === modalEngineFilter) || app.patches[0])
              : app.patches.find((p) => p.patchName === modalPatchNameFilter);

            if (targetPatch) {
              activeModalPatchKey = targetPatch.patchKey;
            }
          }
        } else if (filterType.startsWith("os-")) {
          modalOsFilter = filterType.slice(3);
          const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
          if (app) {
            const targetPatch = modalOsFilter === "all"
              ? app.patches[0]
              : app.patches.find((p) => (p.targetOS || "android").toLowerCase() === modalOsFilter.toLowerCase());

            if (targetPatch) {
              activeModalPatchKey = targetPatch.patchKey;
            }
          }
        } else if (filterType.startsWith("patch-")) {
          const selectedPatchKey = filterType.slice(6);
          const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
          if (app) {
            const targetPatch = app.patches.find((p) => p.patchKey === selectedPatchKey);
            if (targetPatch) {
              activeModalPatchKey = targetPatch.patchKey;
            }
          }
        } else if (filterType.startsWith("variant-")) {
          modalVariantFilter = filterType.slice(8);
        } else {
          modalBuildFilter = filterType;
        }
        renderOpenPatchModal();
        return;
      }

      const changelogTrigger = e.target.closest(".changelog-btn");
      if (changelogTrigger) {
        e.preventDefault();
        e.stopPropagation();
        openChangelogModal(
          changelogTrigger.dataset.appKey,
          changelogTrigger.dataset.patchKey,
          changelogTrigger.dataset.buildKey
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

  // Changelog Modal
  if (DOM.changelogModal) {
    DOM.changelogModal.addEventListener("click", (e) => {
      if (e.target.id === "changelogModal" || e.target.closest(".modal-close")) {
        closeChangelogModal();
      }
    });
  }

  if (DOM.patchSearchInput) {
    DOM.patchSearchInput.addEventListener("input", (e) => {
      filterAppliedPatchesList(e.target.value);
    });
  }

  // Obtainium Dropdown Toggle & Popup Controller
  if (DOM.obtainiumBtn) {
    DOM.obtainiumBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleObtainiumDropdown();
    });
  }

  if (DOM.obtainiumDropdownClose) {
    DOM.obtainiumDropdownClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeObtainiumDropdown();
    });
  }



  if (DOM.obtainiumModal) {
    DOM.obtainiumModal.addEventListener("click", (e) => {
      if (e.target.id === "obtainiumModal" || e.target.closest(".modal-close")) {
        closeObtainiumModal();
      }
    });
  }

  // Troubleshooting Modal 🛠️
  if (DOM.troubleshootBtn) {
    DOM.troubleshootBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      // Re-bind clear cache button inside modal if initialized dynamically
      DOM.clearCacheBtn = document.getElementById("clearCacheBtn");
      if (DOM.troubleshootModal) showModal(DOM.troubleshootModal);
    });
  }

  if (DOM.troubleshootModal) {
    DOM.troubleshootModal.addEventListener("click", (e) => {
      if (e.target.id === "troubleshootModal" || e.target.closest(".modal-close")) {
        hideModal(DOM.troubleshootModal);
      }
    });
  }

  // Credits Modal
  if (DOM.creditsBtn) {
    DOM.creditsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (DOM.creditsModal) showModal(DOM.creditsModal);
    });
  }

  if (DOM.creditsModal) {
    DOM.creditsModal.addEventListener("click", (e) => {
      if (e.target.id === "creditsModal" || e.target.closest(".modal-close")) {
        hideModal(DOM.creditsModal);
      }
    });
  }

  // Global ESC key listener
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePatchModal();
      closeAppliedPatchesModal();
      closeObtainiumModal();
      if (DOM.settingsModal) hideModal(DOM.settingsModal);
      if (DOM.troubleshootModal) hideModal(DOM.troubleshootModal);
      if (DOM.creditsModal) hideModal(DOM.creditsModal);
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
      await fetchMasterBuildData();
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
    await fetchMasterBuildData();
    rebuildCatalogCache();

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

      const targetOS = parsed.osToken ? detectOS(parsed.osToken) : (asset.name.toLowerCase().includes("android") || /\.apk[sm]?$/i.test(asset.name) ? "android" : detectOS(`${parsed.appName} ${parsed.patchName} ${parsed.variant || ""} ${asset.name}`));
      const patchKey = `${normalizeForSearch(parsed.patchName) || "official"}__os_${targetOS}`;
      if (!appEntry.patches.has(patchKey)) {
        appEntry.patches.set(patchKey, {
          patchKey,
          patchName: parsed.patchName,
          patchNameList: parsed.patchNameList,
          engineToken: parsed.engineToken,
          targetOS,
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
        ? `archive-${repoOwner}-${repoName}-${release.tag_name || releaseType}-${parsed.version}-${variantKey}`
        : `${repoOwner}-${repoName}-${release.tag_name || release.id}-${variantKey}`;

      if (!patchEntry.builds.has(buildKey)) {
        patchEntry.builds.set(buildKey, {
          buildKey,
          releaseId: release.id,
          releaseTag: release.tag_name || "",
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
          body: release.body || "",
          releaseBody: release.body || "",
          patchMeta: {
            body: release.body || "",
            releaseBody: release.body || "",
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
    body,
    releaseBody: body,
    cli: cliMatch ? cliMatch[1] : null,
    patches: patchMatches.map((m) => m[1]),
    changelogs: changelogMatches.map((m) => m[1]),
  };
}

// Render Repository Filter Dropdown (next to Sort)
function renderRepoFilterButtons() {
  if (!DOM.repoSelect) return;

  const repos = getConfigRepos();
  if (repos.length <= 1) {
    if (DOM.repoSelectWrap) DOM.repoSelectWrap.style.display = "none";
    return;
  }

  if (DOM.repoSelectWrap) DOM.repoSelectWrap.style.display = "flex";

  let html = `<option value="none"${repoFilter === "none" ? " selected" : ""}>🚫 None</option>`;
  html += `<option value="all"${repoFilter === "all" ? " selected" : ""}>📁 All Repositories</option>`;
  repos.forEach((r) => {
    const slug = `${r.owner}/${r.repo}`;
    const isSelected = repoFilter === slug;
    html += `<option value="${escapeHtml(slug)}"${isSelected ? " selected" : ""}>📁 ${escapeHtml(slug)}</option>`;
  });

  DOM.repoSelect.innerHTML = html;
}

// Render 4-tier Filter Dropdowns (Engine, Patch, OS)
function renderTieredFilterDropdowns() {
  const engines = new Set();
  const patches = new Set();
  const oses = new Set();

  cachedFullCatalog.forEach((app) => {
    app.patches.forEach((p) => {
      if (p.engineToken) engines.add(p.engineToken.toLowerCase());
      if (p.targetOS) oses.add(p.targetOS.toLowerCase());
      if (p.patchName) patches.add(p.patchName);
      if (p.patchNameList) {
        p.patchNameList.forEach((pn) => patches.add(pn.replace(/^🧩\s*/, "")));
      }
    });
  });

  if (DOM.engineSelect && document.activeElement !== DOM.engineSelect) {
    let html = `<option value="none"${engineFilter === "none" ? " selected" : ""}>🚫 None</option>`;
    html += `<option value="all"${engineFilter === "all" ? " selected" : ""}>⚡ All Engines</option>`;
    Array.from(engines).sort().forEach((eng) => {
      const label = formatBrandDisplayName(eng);
      html += `<option value="${escapeHtml(eng)}"${engineFilter === eng ? " selected" : ""}>⚡ ${escapeHtml(label)}</option>`;
    });
    DOM.engineSelect.innerHTML = html;
  }

  if (DOM.patchSelect && document.activeElement !== DOM.patchSelect) {
    let html = `<option value="none"${patchFilter === "none" ? " selected" : ""}>🚫 None</option>`;
    html += `<option value="all"${patchFilter === "all" ? " selected" : ""}>🧩 All Patches</option>`;
    Array.from(patches).sort().forEach((pt) => {
      const slug = normalizeForSearch(pt);
      html += `<option value="${escapeHtml(slug)}"${patchFilter === slug ? " selected" : ""}>🧩 ${escapeHtml(pt)}</option>`;
    });
    DOM.patchSelect.innerHTML = html;
  }

  if (DOM.osSelect && document.activeElement !== DOM.osSelect) {
    let html = `<option value="none"${osFilter === "none" ? " selected" : ""}>🚫 None</option>`;
    html += `<option value="all"${osFilter === "all" ? " selected" : ""}>📱 All OS</option>`;
    Array.from(oses).sort().forEach((osKey) => {
      const label = formatOSBadge(osKey);
      html += `<option value="${escapeHtml(osKey)}"${osFilter === osKey ? " selected" : ""}>${escapeHtml(label)}</option>`;
    });
    DOM.osSelect.innerHTML = html;
  }
}

// Filter and Render Catalog
function filterAndRenderReleases() {
  renderRepoFilterButtons();
  renderTieredFilterDropdowns();
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
  if (repoFilter === "none") {
    apps = [];
  } else {
    if (repoFilter !== "all") {
      apps = apps.filter((app) => (app.repos || []).includes(repoFilter));
    }

    // 1.6 Engine, Patch, OS Filters
    if (engineFilter !== "all" || patchFilter !== "all" || osFilter !== "all") {
      apps = apps.filter((app) => {
        let matches = false;
        app.patches.forEach((patchObj) => {
          if (engineFilter === "none") {
            if (patchObj.engineToken && patchObj.engineToken.trim() !== "") {
              return;
            }
          } else if (engineFilter !== "all" && (patchObj.engineToken || "").toLowerCase() !== engineFilter.toLowerCase()) {
            return;
          }

          if (osFilter === "none") {
            if (patchObj.targetOS && patchObj.targetOS.trim() !== "") {
              return;
            }
          } else if (osFilter !== "all" && (patchObj.targetOS || "").toLowerCase() !== osFilter.toLowerCase()) {
            return;
          }

          if (patchFilter === "none") {
            const patchNameClean = (patchObj.patchName || "").trim().toLowerCase();
            const patchListClean = (patchObj.patchNameList || []).filter((p) => p && p.trim().toLowerCase() !== "official");
            const hasPatchName = patchNameClean !== "" && patchNameClean !== "official";
            const hasPatchList = patchListClean.length > 0;
            if (hasPatchName || hasPatchList) {
              return;
            }
          } else if (patchFilter !== "all") {
            const pKeyNorm = normalizeForSearch(patchObj.patchName || "");
            const pKeyListNorm = (patchObj.patchNameList || []).map((p) => normalizeForSearch(p));
            if (pKeyNorm !== patchFilter && !pKeyListNorm.includes(patchFilter)) {
              return;
            }
          }
          matches = true;
        });
        return matches;
      });
    }
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
  if (DOM.repoSelect) {
    DOM.repoSelect.value = repoFilter;
  }
}

function applyCategoryFilter(apps) {
  if (CONFIG.appCategories[appCategoryFilter]) {
    return apps.filter((app) => {
      const name = normalizeForSearch(app.appName);
      const keyNorm = normalizeForSearch(app.appKey);
      const appTokens = (app.appTokens || []).map((t) => normalizeForSearch(t));
      const keywords = CONFIG.appCategories[appCategoryFilter];
      const includes = keywords.filter((k) => !k.startsWith("!"));
      const excludes = keywords.filter((k) => k.startsWith("!")).map((k) => k.slice(1));

      const matchKeyword = (kw) => {
        if (kw.length <= 2) {
          return keyNorm === kw || appTokens.includes(kw);
        }
        return name.includes(kw) || keyNorm.includes(kw);
      };

      const isIncluded = includes.some(matchKeyword);
      const isExcluded = excludes.some(matchKeyword);
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

  return `
    <div class="build-card app-card">
      <div class="app-card-summary" role="button" tabindex="0">
        <div class="app-title-group">
          <div class="app-name">${escapeHtml(app.appName)}</div>
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

  const engineBadgeHtml = patch.engineToken
    ? `<span class="patch-engine-badge" title="Patch Engine">⚡ ${escapeHtml(formatBrandDisplayName(patch.engineToken))}</span>`
    : "";

  const patchBadgesHtml = (patch.patchNameList || [patch.patchName])
    .map((p) => `<span class="patch-name-badge" title="Applied Patch">${escapeHtml(p.startsWith("🧩") ? p : `🧩 ${p}`)}</span>`)
    .join(" ");

  const osBadgeHtml = `<span class="os-tag-badge" title="Target Operating System">${escapeHtml(formatOSBadge(patch.targetOS || "android"))}</span>`;

  return `
    <div class="patch-entry">
      <div class="patch-entry-header">
        <div class="patch-chip-group">
          ${engineBadgeHtml}
          ${patchBadgesHtml}
          ${osBadgeHtml}
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
  isObtainiumDropdownOpen = false;

  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const patch = app ? app.patches.find((item) => item.patchKey === activeModalPatchKey) : null;

  if (patch) {
    modalEngineFilter = (patch.engineToken || "none").toLowerCase();
    modalPatchNameFilter = patch.patchName;
    modalOsFilter = (patch.targetOS || "android").toLowerCase();
  } else {
    modalEngineFilter = "all";
    modalPatchNameFilter = "all";
    modalOsFilter = "all";
  }

  modalBuildFilter = preferredChannel === "all" ? "all" : (preferredChannel === "beta" ? "beta" : "stable");

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
  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const patchesToCheck = app ? (app.patches || []) : [patch];

  return patchesToCheck.some((p) => {
    if (!p.builds) return false;
    const buildsList = Array.isArray(p.builds) ? p.builds : Array.from(p.builds.values());

    return buildsList.some((build) =>
      (build.assets || []).some((asset) => /\.(apk|apks|xapk|apkm)$/i.test(asset.name || ""))
    );
  });
}

function renderOpenPatchModal() {
  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const patch = app ? app.patches.find((item) => item.patchKey === activeModalPatchKey) : null;

  if (!app || !patch) {
    closePatchModal();
    return;
  }

  if (DOM.patchModalTitle) {
    DOM.patchModalTitle.textContent = app.appName;
  }

  updateModalFilterButtons(app, patch);

  if (DOM.patchModalBody) {
    DOM.patchModalBody.innerHTML = createPatchModalContent(app, patch, modalBuildFilter, modalVariantFilter);
  }

  const panel = document.querySelector("#patchModal #obtainiumDropdownPanel");
  if (panel && panel.style.display !== "none") {
    renderObtainiumDropdownContent(app, patch);
  }
}

function updateModalFilterButtons(app, activePatch) {
  const filterContainer = document.querySelector(".modal-filter-buttons");
  if (!filterContainer) return;

  filterContainer.innerHTML = "";

  const addDivider = () => {
    const divider = document.createElement("span");
    divider.className = "filter-group-divider";
    filterContainer.appendChild(divider);
  };

  let groupAdded = false;

  // 1. Engine Group
  const enginesMap = new Map();
  app.patches.forEach((p) => {
    const token = (p.engineToken || "none").toLowerCase();
    if (!enginesMap.has(token)) {
      enginesMap.set(token, formatBrandDisplayName(token));
    }
  });

  if (enginesMap.size > 0) {
    const engineGroup = document.createElement("div");
    engineGroup.className = "filter-pill-group";

    const allEnginesBtn = document.createElement("button");
    allEnginesBtn.type = "button";
    allEnginesBtn.className = `modal-filter-btn engine-pill-btn ${modalEngineFilter === "all" ? "active" : ""}`;
    allEnginesBtn.dataset.filter = "engine-all";
    allEnginesBtn.textContent = "⚡ All";
    engineGroup.appendChild(allEnginesBtn);

    enginesMap.forEach((displayName, engineToken) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `modal-filter-btn engine-pill-btn ${modalEngineFilter === engineToken ? "active" : ""}`;
      btn.dataset.filter = `engine-${engineToken}`;
      btn.textContent = `⚡ ${displayName}`;
      engineGroup.appendChild(btn);
    });

    filterContainer.appendChild(engineGroup);
    groupAdded = true;
  }

  // 2. Patch Group (Filtered by current active Engine if specified)
  const patchesForEngine = modalEngineFilter === "all"
    ? app.patches
    : app.patches.filter((p) => (p.engineToken || "none").toLowerCase() === modalEngineFilter);

  const rawPatchNameSet = new Set();
  patchesForEngine.forEach((p) => {
    if (p.patchName) {
      rawPatchNameSet.add(p.patchName);
    }
  });

  const uniquePatchNames = Array.from(rawPatchNameSet);
  if (uniquePatchNames.length > 0) {
    if (groupAdded) addDivider();
    const patchGroup = document.createElement("div");
    patchGroup.className = "filter-pill-group";

    const allPatchesBtn = document.createElement("button");
    allPatchesBtn.type = "button";
    allPatchesBtn.className = `modal-filter-btn patch-pill-btn ${modalPatchNameFilter === "all" ? "active" : ""}`;
    allPatchesBtn.dataset.filter = "patchname-all";
    allPatchesBtn.textContent = "🧩 All";
    patchGroup.appendChild(allPatchesBtn);

    uniquePatchNames.forEach((patchName) => {
      const isSelected = modalPatchNameFilter === patchName;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `modal-filter-btn patch-pill-btn ${isSelected ? "active" : ""}`;
      btn.dataset.filter = `patchname-${encodeURIComponent(patchName)}`;
      btn.textContent = `🧩 ${patchName}`;
      patchGroup.appendChild(btn);
    });

    filterContainer.appendChild(patchGroup);
    groupAdded = true;
  }

  // 3. OS Selector Group (Filtered by Engine and Patch Name if specified)
  const patchesForEngineAndName = patchesForEngine.filter((p) => {
    if (modalPatchNameFilter === "all") return true;
    const targetNameNorm = normalizeForSearch(modalPatchNameFilter);
    const patchNameNorm = normalizeForSearch(p.patchName);
    const patchListNorms = (p.patchNameList || []).map((name) => normalizeForSearch(name.replace(/^🧩\s*/, "")));
    return patchNameNorm === targetNameNorm || patchListNorms.includes(targetNameNorm) || p.patchName === modalPatchNameFilter;
  });

  const availableOSes = Array.from(new Set(patchesForEngineAndName.map((p) => (p.targetOS || "android").toLowerCase())));
  if (availableOSes.length > 0) {
    if (groupAdded) addDivider();
    const osGroup = document.createElement("div");
    osGroup.className = "filter-pill-group";

    const allOSBtn = document.createElement("button");
    allOSBtn.type = "button";
    allOSBtn.className = `modal-filter-btn os-pill-btn ${modalOsFilter === "all" ? "active" : ""}`;
    allOSBtn.dataset.filter = "os-all";
    allOSBtn.textContent = "🌐 All";
    osGroup.appendChild(allOSBtn);

    availableOSes.forEach((osKey) => {
      const isSelected = modalOsFilter === osKey.toLowerCase();
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `modal-filter-btn os-pill-btn ${isSelected ? "active" : ""}`;
      btn.dataset.filter = `os-${osKey}`;
      btn.textContent = formatOSBadge(osKey);
      osGroup.appendChild(btn);
    });

    filterContainer.appendChild(osGroup);
    groupAdded = true;
  }

  // 4. Variant Group (Aggregate across all matching patches)
  const variantsMap = new Map();
  patchesForEngineAndName.forEach((p) => {
    if (modalOsFilter !== "all" && (p.targetOS || "android").toLowerCase() !== modalOsFilter.toLowerCase()) {
      return;
    }
    if (p.variants) {
      p.variants.forEach((v) => {
        if (!variantsMap.has(v.variantKey)) {
          variantsMap.set(v.variantKey, v.variantName);
        }
      });
    }
  });

  if (variantsMap.size > 0) {
    if (modalVariantFilter !== "all" && !variantsMap.has(modalVariantFilter)) {
      modalVariantFilter = Array.from(variantsMap.keys())[0] || "default";
    }

    if (groupAdded) addDivider();
    const variantGroup = document.createElement("div");
    variantGroup.className = "filter-pill-group";

    const allBtn = document.createElement("button");
    allBtn.type = "button";
    allBtn.className = `modal-filter-btn variant-pill-btn ${modalVariantFilter === "all" ? "active" : ""}`;
    allBtn.dataset.filter = "variant-all";
    allBtn.textContent = "All";
    variantGroup.appendChild(allBtn);

    variantsMap.forEach((variantName, variantKey) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `modal-filter-btn variant-pill-btn ${modalVariantFilter === variantKey ? "active" : ""}`;
      btn.dataset.filter = `variant-${variantKey}`;
      btn.textContent = variantName;
      variantGroup.appendChild(btn);
    });

    filterContainer.appendChild(variantGroup);
    groupAdded = true;
  }

  // 4. Channel Group (Stable / Beta)
  let hasStable = false;
  let hasBeta = false;

  if (activePatch.builds) {
    for (const b of activePatch.builds) {
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

  if (!hasStable && modalBuildFilter === "stable" && hasBeta) {
    modalBuildFilter = "beta";
  } else if (!hasBeta && modalBuildFilter === "beta" && hasStable) {
    modalBuildFilter = "stable";
  }

  let channelHtml = "";
  if (hasStable && hasBeta) {
    channelHtml += `<button class="modal-filter-btn ${modalBuildFilter === "all" ? "active" : ""}" data-filter="all" type="button">All Channels</button>\n`;
  }
  if (hasStable) {
    channelHtml += `<button class="modal-filter-btn ${modalBuildFilter === "stable" ? "active" : ""}" data-filter="stable" type="button">Stable</button>\n`;
  }
  if (hasBeta) {
    channelHtml += `<button class="modal-filter-btn ${modalBuildFilter === "beta" ? "active" : ""}" data-filter="beta" type="button">Beta</button>\n`;
  }

  if (channelHtml) {
    if (groupAdded) addDivider();
    const channelGroup = document.createElement("div");
    channelGroup.className = "filter-pill-group";
    channelGroup.innerHTML = channelHtml;
    filterContainer.appendChild(channelGroup);
  }
}

function createPatchModalContent(app, patch, buildFilter = "stable", variantFilter = "default") {
  // Aggregate builds across patches matching current modal Engine, Patch Name, and OS filters
  let matchingPatches = (app.patches || []).filter((p) => {
    if (modalEngineFilter !== "all" && (p.engineToken || "none").toLowerCase() !== modalEngineFilter) return false;
    if (modalPatchNameFilter !== "all") {
      const targetNorm = normalizeForSearch(modalPatchNameFilter);
      const patchNameNorm = normalizeForSearch(p.patchName);
      if (patchNameNorm !== targetNorm && p.patchName !== modalPatchNameFilter) {
        const patchSubTokens = p.patchName.split(/\s*\+\s*/).map((s) => normalizeForSearch(s));
        if (!patchSubTokens.includes(targetNorm)) {
          return false;
        }
      }
    }
    if (modalOsFilter !== "all" && (p.targetOS || "android").toLowerCase() !== modalOsFilter.toLowerCase()) return false;
    return true;
  });

  if (matchingPatches.length === 0) {
    matchingPatches = [patch];
  }

  // Combine builds and assets across matching patches
  const rawBuildsMap = new Map();
  matchingPatches.forEach((p) => {
    const patchBuilds = p.builds || [];
    const sourceBuilds = Array.isArray(patchBuilds) ? patchBuilds : Array.from(patchBuilds.values());

    sourceBuilds.forEach((b) => {
      const key = b.buildKey || `${b.releaseId || 'rel'}-${b.build || b.version}`;
      if (!rawBuildsMap.has(key)) {
        rawBuildsMap.set(key, { ...b, assets: [...(b.assets || [])] });
      } else {
        const existing = rawBuildsMap.get(key);
        (b.assets || []).forEach((asset) => {
          if (!existing.assets.some((a) => (a.browser_download_url && a.browser_download_url === asset.browser_download_url) || a.name === asset.name)) {
            existing.assets.push(asset);
          }
        });
      }
    });
  });

  let builds = Array.from(rawBuildsMap.values());

  if (buildFilter === "stable") {
    builds = builds.filter((b) => b.releaseType === "stable");
  } else if (buildFilter === "beta") {
    builds = builds.filter((b) => b.releaseType === "beta");
  }

  if (modalPatchNameFilter && modalPatchNameFilter !== "all") {
    const targetNorm = normalizeForSearch(modalPatchNameFilter);
    builds = builds
      .map((b) => ({
        ...b,
        assets: b.assets.filter((a) => {
          if (!a.parsed) return true;
          const pNameNorm = normalizeForSearch(a.parsed.patchName || "");
          if (pNameNorm === targetNorm) return true;
          const subTokens = (a.parsed.patchName || "").split(/\s*\+\s*/).map((s) => normalizeForSearch(s));
          return subTokens.includes(targetNorm);
        }),
      }))
      .filter((b) => b.assets.length > 0);
  }

  if (variantFilter && variantFilter !== "all") {
    const targetVarNorm = normalizeForSearch(variantFilter);
    let filteredBuilds = builds
      .map((b) => ({
        ...b,
        assets: (b.assets || []).filter((a) => {
          const rawV = (a.parsed?.rawVariant || "default").toLowerCase();
          const dispV = normalizeForSearch(a.parsed?.variant || "") || "default";
          if (rawV === variantFilter || dispV === targetVarNorm) return true;
          if ((variantFilter === "standard" || variantFilter === "default") && (rawV === "standard" || rawV === "default" || dispV === "standard" || dispV === "default")) return true;
          const subTokens = rawV.split("+").concat(dispV.split(/\s*\+\s*/));
          return subTokens.includes(variantFilter) || subTokens.includes(targetVarNorm);
        }),
      }))
      .filter((b) => b.assets.length > 0);

    // If filtering by variantFilter yields no builds, fall back to the first available variant
    if (filteredBuilds.length === 0 && builds.length > 0) {
      const firstAvailableVariantAsset = builds.flatMap((b) => b.assets || [])[0];
      const fallbackVariant = firstAvailableVariantAsset?.parsed?.rawVariant || "default";
      modalVariantFilter = fallbackVariant;
      const fallbackVarNorm = normalizeForSearch(fallbackVariant);

      filteredBuilds = builds
        .map((b) => ({
          ...b,
          assets: (b.assets || []).filter((a) => {
            const rawV = (a.parsed?.rawVariant || "").toLowerCase();
            const dispV = normalizeForSearch(a.parsed?.variant || "");
            if (rawV === fallbackVariant || dispV === fallbackVarNorm) return true;
            const subTokens = rawV.split("+").concat(dispV.split(/\s*\+\s*/));
            return subTokens.includes(fallbackVariant) || subTokens.includes(fallbackVarNorm);
          }),
        }))
        .filter((b) => b.assets.length > 0);
    }

    builds = filteredBuilds;
  }

  // Check if current filtered builds or active patch contain at least one APK asset
  const hasApk = builds.some((b) =>
    (b.assets || []).some((a) => /\.(apk|apks|xapk|apkm)$/i.test(a.name || ""))
  ) || patchHasApk(patch, modalVariantFilter, modalBuildFilter);

  const obtainiumContentHtml = hasApk
    ? createObtainiumInstructions(app, patch)
    : "";

  const obtainiumSectionMarkup = hasApk
    ? `<div class="obtainium-box-container" id="obtainiumBtn" role="button" aria-expanded="${isObtainiumDropdownOpen ? 'true' : 'false'}" tabindex="0">
        <div class="obtainium-box-header">
          <span style="font-weight: 700; color: var(--accent-obtainium); font-size: 0.9rem;">📲 Install with Obtainium</span>
          <span class="obtainium-chevron" style="color: var(--accent-obtainium); transition: transform 0.2s ease; transform: ${isObtainiumDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'}; font-size: 0.85rem;">▼</span>
        </div>
        <div id="obtainiumDropdownPanel" class="obtainium-dropdown-panel" style="display: ${isObtainiumDropdownOpen ? 'block' : 'none'};" onclick="event.stopPropagation();">
          <div id="obtainiumDropdownBody" class="obtainium-dropdown-body">${obtainiumContentHtml}</div>
        </div>
      </div>`
    : "";

  const repoLinksMarkup = (app.repos && app.repos.length > 0)
    ? app.repos
        .map((slug) => {
          const url = `https://github.com/${slug}`;
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); font-weight: 600; text-decoration: underline;">${escapeHtml(slug)}</a>`;
        })
        .join(" • ")
    : "";

  const repoBanner = repoLinksMarkup
    ? `<div class="modal-repo-banner" style="background: var(--bg-tertiary); border: 1px solid var(--border); padding: 10px 14px; border-radius: var(--radius-md); margin-bottom: 16px; font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
        <span style="opacity: 0.85;">📁 Repository:</span>
        <div>${repoLinksMarkup}</div>
      </div>`
    : "";

  if (builds.length === 0) {
    return obtainiumSectionMarkup + repoBanner + '<div class="no-results" style="padding: 40px 20px;">No builds matching these filters.</div>';
  }

  // Group builds sharing the same version and release tag into single combined cards
  const combinedTagMap = new Map();
  builds.forEach((build) => {
    const versionTagKey = `${build.version || 'v'}_tag_${build.releaseTag || build.build || 'default'}`;
    if (!combinedTagMap.has(versionTagKey)) {
      combinedTagMap.set(versionTagKey, {
        ...build,
        assets: [...(build.assets || [])],
      });
    } else {
      const existing = combinedTagMap.get(versionTagKey);
      (build.assets || []).forEach((asset) => {
        if (!existing.assets.some((a) => (a.browser_download_url && a.browser_download_url === asset.browser_download_url) || a.name === asset.name)) {
          existing.assets.push(asset);
        }
      });
    }
  });

  const finalBuildsList = Array.from(combinedTagMap.values());

  return obtainiumSectionMarkup + repoBanner + finalBuildsList
    .map((build, index) => {
      const isCardOpen = activeModalOpenBuildKey
        ? activeModalOpenBuildKey === (build.buildKey || build.releaseId || build.build)
        : index === 0;
      return createModalBuildMarkup(app, patch, build, isCardOpen);
    })
    .join("");
}

function createModalBuildMarkup(app, patch, build, openByDefault = false) {
  const assetsByArch = groupAssetsByArchitecture(build.assets);
  const titleText = build.isArchive ? escapeHtml(build.build) : `Build ${escapeHtml(build.build)}`;
  const bKey = build.buildKey || build.releaseId || build.build;

  let downloadsMarkup = "";

  Object.entries(assetsByArch).forEach(([arch, assets]) => {
    if (assets.length === 0) return;
    downloadsMarkup += `<div class="asset-group"><div class="asset-group-label">${capitalizeArch(arch)}</div>`;

    assets.forEach((asset) => {
      const sizeStr = formatBytes(asset.size);
      const downloads = formatCompactNumber(asset.download_count || 0);
      const variantDisplay = asset.parsed.variant ? ` • <span class="asset-variant-tag">${escapeHtml(asset.parsed.variant)}</span>` : "";
      
      const osName = asset.parsed?.osToken
        ? formatBrandDisplayName(asset.parsed.osToken)
        : (patch?.targetOS ? formatBrandDisplayName(patch.targetOS) : "Android");

      downloadsMarkup += `
        <div class="download-btn ${arch}">
          <div class="asset-left">
            <span class="asset-title">${escapeHtml(asset.parsed.appName)}</span>
            <span class="asset-subtitle">${escapeHtml(asset.parsed.version)} • ${escapeHtml(osName)} • ${asset.fileType}${variantDisplay}</span>
          </div>
          <div class="asset-right">
            <span class="btn-text">${sizeStr} • 📥 ${downloads}</span>
            <div class="asset-action-group" style="display: inline-flex; align-items: center; gap: 6px;">
              ${hasBuildMetadataForAsset(masterBuildDataCache, asset.name, build.releaseTag) ? `<button class="patch-applied-btn asset-info-btn" data-app-key="${app.appKey}" data-patch-key="${patch.patchKey}" data-build-key="${build.buildKey || build.releaseId}" data-asset-name="${escapeHtml(asset.name)}" type="button" title="View build information and applied patches">Info / Applied Patches</button>` : ""}
              <a href="${asset.browser_download_url}" class="download-action-btn" download title="Download ${asset.name}">Download</a>
            </div>
          </div>
        </div>
      `;
    });

    downloadsMarkup += `</div>`;
  });

  const patchInfoBanner = `
    <div class="patch-info-actions">
      <button class="changelog-btn" data-app-key="${app.appKey}" data-patch-key="${patch.patchKey}" data-build-key="${build.buildKey || build.releaseId}" type="button">View Changelog</button>
      <a href="${build.releaseUrl}" target="_blank" rel="noopener noreferrer" class="release-link-button">View Release Source</a>
    </div>
  `;

  return `
    <div class="modal-build-card ${openByDefault ? "open" : ""}" data-build-key="${bKey}">
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
  closeObtainiumDropdown();
  hideModal(DOM.patchModal);
}

// Master Build Metadata Store
async function fetchMasterBuildData() {
  if (masterBuildDataCache) return masterBuildDataCache;
  try {
    const cacheBuster = Date.now();
    // Metadata is generated and committed by the Python cache updater.
    // Never fetch build metadata directly from GitHub in the browser.
    const resp = await fetch(`builds.json?v=${cacheBuster}`);
    if (resp.ok) {
      const data = await resp.json();
      // builds.json may be grouped by release tag or kept in the legacy flat shape.
      // Keep the map as-is so lookups can resolve both layouts.
      masterBuildDataCache = data && typeof data === "object" ? data : {};
    } else {
      masterBuildDataCache = {};
    }
  } catch (e) {
      console.warn("Could not load local builds.json:", e);
    masterBuildDataCache = {};
  }
  return masterBuildDataCache;
}

function getBuildBucket(masterData, releaseTag) {
  if (!masterData || typeof masterData !== "object") return null;
  if (releaseTag && masterData[releaseTag] && typeof masterData[releaseTag] === "object") {
    return masterData[releaseTag];
  }
  return null;
}

function hasBuildMetadataForAsset(masterData, assetName, releaseTag = "") {
  const entry = findBuildDetails(masterData, { name: assetName }, { releaseTag });
  return Boolean(entry);
}

// Resolve metadata from the current asset's filename. builds.json supports:
// { "file.apk": metadata } and { "releaseTag": { "file.apk": metadata } }.
function findBuildDetails(masterData, asset, build) {
  if (!masterData || !asset?.name) return null;

  const releaseTag = String(build?.releaseTag || build?.tag_name || build?.release_tag || "").trim();
  const releaseBucket = getBuildBucket(masterData, releaseTag);
  const lookupRoots = [];

  if (releaseBucket) lookupRoots.push(releaseBucket);
  lookupRoots.push(masterData);

  for (const root of lookupRoots) {
    const directEntry = root[asset.name];
    if (directEntry && typeof directEntry === "object" &&
        (directEntry.version || directEntry.applied_patches || directEntry.min_sdk)) {
      return directEntry;
    }
  }

  const root = releaseBucket || masterData;
  const directEntry = root[asset.name];
  if (directEntry && typeof directEntry === "object" &&
      (directEntry.version || directEntry.applied_patches || directEntry.min_sdk)) {
    return directEntry;
  }

  // Also accept the previous version/build nested format.
  const dictionaries = [directEntry];
  const normalizedName = asset.name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const matchingKey = Object.keys(root).find(
    (key) => key.toLowerCase().replace(/[^a-z0-9]/g, "") === normalizedName
  );
  if (matchingKey && matchingKey !== asset.name) dictionaries.push(root[matchingKey]);

  const version = String(build?.version || "").replace(/^v(?=[a-z0-9])/i, "");
  const buildNumber = String(build?.build || "");
  for (const dictionary of dictionaries) {
    if (!dictionary || typeof dictionary !== "object") continue;
    const versionEntry = dictionary[version] || dictionary[`v${version}`] || dictionary[build?.version];
    if (!versionEntry || typeof versionEntry !== "object") continue;
    if (versionEntry[buildNumber]) return versionEntry[buildNumber];
    const key = Object.keys(versionEntry).find((candidate) => String(candidate) === buildNumber);
    if (key) return versionEntry[key];
  }
  return null;
}

// Applied Patches Modal Controller
async function openAppliedPatchesModal(appKey, patchKey, buildKey, assetName = "") {
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
  let buildMetadata = null;

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

    const asset = build?.assets?.find((candidate) => !assetName || candidate.name === assetName) || build?.assets?.[0];
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
      const patchIdx = tokens.findIndex((t) => CONFIG.patchEngineTokens.has(t.toLowerCase()) || CONFIG.patchTokens.has(t.toLowerCase()));
      if (patchIdx > 0) {
        rawSlugNorm = tokens.slice(0, patchIdx).join("-").toLowerCase();
      }
    }

    // Candidate keys to try directly in masterData. Exact filename is the
    // primary key in the current builds.json format.
    const candidateKeys = asset?.name ? [asset.name] : [];

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
      for (const b of (Array.isArray(patch.builds) ? patch.builds : Array.from(patch.builds.values()))) {
        if (b.build && b.releaseType) {
          tagToReleaseType[b.build] = b.releaseType;
        }
      }
    }

    let resolved = null;

    // Current format: exact asset filename -> version -> build number.
    resolved = findBuildDetails(masterData, asset, build);

    // First attempt: Try candidate keys directly on masterData
    for (const candKey of candidateKeys) {
      if (resolved) break;
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
      buildMetadata = resolved;
      if (Array.isArray(resolved.applied_patches)) {
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
    DOM.appliedPatchesMeta.innerHTML = "";
  }

  activeAppliedPatchesList = appliedPatches;
  activeBuildMetadata = buildMetadata;
  activeSkippedPatchesList = Array.isArray(buildMetadata?.skipped_patches) ? buildMetadata.skipped_patches : [];
  activeFailedPatchesList = Array.isArray(buildMetadata?.failed_patches)
    ? buildMetadata.failed_patches
    : (Array.isArray(buildMetadata?.failed) ? buildMetadata.failed : []);
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

  const appliedPatchesList = Array.isArray(activeAppliedPatchesList) ? activeAppliedPatchesList : [];
  const skippedPatchesList = Array.isArray(activeSkippedPatchesList) ? activeSkippedPatchesList : [];
  const failedPatchesList = Array.isArray(activeFailedPatchesList) ? activeFailedPatchesList : [];

  if (appliedPatchesList.length === 0 && skippedPatchesList.length === 0 && failedPatchesList.length === 0 && !activeBuildMetadata) {
    if (DOM.patchCountBadge) {
      DOM.patchCountBadge.textContent = "0 Patches";
    }
    DOM.appliedPatchesBody.innerHTML = `
      <div class="no-results" style="padding: 40px 20px; text-align: center; color: var(--text-secondary);">
        <div style="font-size: 2.2rem; margin-bottom: 8px;">📦</div>
        <p style="font-weight: 700; margin-bottom: 6px; color: var(--text-primary); font-size: 1.05rem;">No Applied Patches Metadata</p>
        <p style="font-size: 0.88rem; color: var(--text-secondary); max-width: 440px; margin: 0 auto; line-height: 1.45;">No applied patch list was recorded for this build in master build metadata (builds.json).</p>
      </div>
    `;
    return;
  }

  const normalized = (query || "").toLowerCase().trim();
  const filteredApplied = appliedPatchesList.filter((p) => String(p || "").toLowerCase().includes(normalized));
  const filteredSkipped = skippedPatchesList.filter((p) => String(p || "").toLowerCase().includes(normalized));
  const filteredFailed = failedPatchesList.filter((p) => String(p || "").toLowerCase().includes(normalized));

  const totalFiltered = filteredApplied.length + filteredSkipped.length + filteredFailed.length;
  const totalAll = appliedPatchesList.length + skippedPatchesList.length + failedPatchesList.length;

  if (DOM.patchCountBadge) {
    DOM.patchCountBadge.textContent = `${totalFiltered} of ${totalAll} patches`;
  }

  const pNames = activeBuildMetadata?.patches || activeBuildForModal?.patchMeta?.patches || [];
  const clUrl = activeBuildMetadata?.changelog || activeBuildForModal?.patchMeta?.changelogs || [];
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

  const patchVersionBanner = badgesHtml ? `
    <section class="patch-metadata-section patch-version-section" style="margin-bottom: 16px;">
      <h3 style="margin-bottom: 8px; font-size: 0.88rem; color: var(--text-secondary);">⚙️ Patch Versions & Source</h3>
      <div class="patch-chip-group" style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${badgesHtml}
      </div>
    </section>` : "";

  const filterSearchBar = `
    <div class="applied-patches-search-wrap" style="padding: 10px 14px; margin-bottom: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); background: var(--bg-tertiary);">
      <input type="text" id="inlinePatchSearchInput" placeholder="Filter patches..." value="${escapeHtml(query)}" style="flex: 1; padding: 8px 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius-sm); color: var(--text-primary); font-size: 0.84rem;">
      <span class="patch-count-badge" style="font-size: 0.82rem; font-weight: 600; color: var(--text-muted); font-family: var(--font-mono);">${totalFiltered} of ${totalAll} patches</span>
    </div>
  `;

  const meta = activeBuildMetadata || {};
  const assetObj = activeBuildForModal?.assets?.[0];
  const fileExt = meta.ext || (assetObj?.name ? assetObj.name.split(".").pop() : "") || "apk";
  const extLower = String(fileExt).toLowerCase();

  const rawSdk = String(meta.min_sdk || "").trim();
  let minAndroidDisplay = "Unknown";

  if (rawSdk && rawSdk !== "Unknown") {
    const androidVer = CONFIG.sdkToAndroidVersion[rawSdk];
    if (androidVer) {
      minAndroidDisplay = `Android ${androidVer}+ (SDK ${rawSdk})`;
    } else if (/^\d+$/.test(rawSdk)) {
      minAndroidDisplay = `(SDK ${rawSdk})`;
    } else {
      minAndroidDisplay = rawSdk;
    }
  }

  const archVal = meta.arch || (assetObj?.parsed?.arch) || (assetObj?.arch) || "universal";
  const nativeLibsVal = (meta.native_libraries || []).join(", ") || "None";
  const densitiesVal = (meta.densities || []).join(", ") || "All";
  const cliVal = meta.cli || activeBuildMetadata?.cli || activeBuildForModal?.patchMeta?.cli || "";

  const apkInfo = `
    <section class="patch-metadata-section apk-info-section">
      <h3>📦 ${extLower === "zip" ? "Module / Package Information" : "APK Information"}</h3>
      <div class="apk-info-grid">
        <span><strong>Architecture</strong>${escapeHtml(archVal)}</span>
        <span><strong>Minimum Android</strong>${escapeHtml(minAndroidDisplay)}</span>
        <span><strong>Format</strong>${escapeHtml(extLower)}</span>
        ${cliVal ? `<span><strong>Patcher CLI</strong>${escapeHtml(cliVal)}</span>` : ""}
        <span><strong>Native libraries</strong>${escapeHtml(nativeLibsVal)}</span>
        <span><strong>Densities</strong>${escapeHtml(densitiesVal)}</span>
      </div>
    </section>`;

  const appliedSection = filteredApplied.length ? `
    <section class="patch-metadata-section applied-patches-section">
      <h3>✅ Applied Patches <span>${filteredApplied.length}</span></h3>
      <div class="applied-patches-grid">
      ${filteredApplied.map((patchName) => `
        <div class="applied-patch-item">
          <span class="patch-check-icon">✓</span>
          <span>${escapeHtml(patchName)}</span>
        </div>
      `).join("")}
      </div>
    </section>` : (appliedPatchesList.length ? `<section class="patch-metadata-section applied-patches-section"><h3>✅ Applied Patches <span>0</span></h3><div class="no-results" style="padding: 16px 20px; text-align: center; color: var(--text-secondary);">No matching applied patches.</div></section>` : "");

  const renderPatchSection = (title, items, icon, className) => items.length ? `
    <section class="patch-metadata-section ${className}">
      <h3>${icon} ${title} <span>${items.length}</span></h3>
      <div class="applied-patches-grid">
        ${items.map((patchName) => `<div class="applied-patch-item"><span class="patch-check-icon">${icon}</span><span>${escapeHtml(patchName)}</span></div>`).join("")}
      </div>
    </section>` : "";

  DOM.appliedPatchesBody.innerHTML = `
    ${apkInfo}
    ${patchVersionBanner}
    ${filterSearchBar}
    ${appliedSection}
    ${renderPatchSection("Failed Patches", filteredFailed, "⚠️", "failed-patches-section")}
    ${renderPatchSection("Skipped Patches", filteredSkipped, "⏭️", "skipped-patches-section")}
  `;

  const inlineInput = document.getElementById("inlinePatchSearchInput");
  if (inlineInput) {
    inlineInput.focus();
    const len = inlineInput.value.length;
    inlineInput.setSelectionRange(len, len);
    inlineInput.addEventListener("input", (e) => {
      filterAppliedPatchesList(e.target.value);
    });
  }
}

function closeAppliedPatchesModal() {
  hideModal(DOM.appliedPatchesModal);
}

// Helper to build Obtainium APK Filter Regex dynamically matching release asset filenames
function buildObtainiumRegex(app, patch, variantKey) {
  // Extract file extension and raw asset filename metadata from sample build assets across matching patches
  let extension = "apk";
  let sampleAsset = null;

  const patchesToSearch = (app?.patches || [patch]).filter((p) => {
    if (modalEngineFilter !== "all" && (p.engineToken || "none").toLowerCase() !== modalEngineFilter) return false;
    if (modalPatchNameFilter !== "all" && p.patchName !== modalPatchNameFilter) return false;
    if (modalOsFilter !== "all" && (p.targetOS || "android").toLowerCase() !== modalOsFilter.toLowerCase()) return false;
    return true;
  });

  const searchList = patchesToSearch.length > 0 ? patchesToSearch : (app?.patches || [patch]);

  const effectiveVar = variantKey !== undefined ? variantKey : modalVariantFilter;
  for (const p of searchList) {
    if (!p.builds) continue;
    const buildsList = Array.isArray(p.builds) ? p.builds : Array.from(p.builds.values());
    const varBuilds = (effectiveVar && effectiveVar !== "all")
      ? buildsList.filter((b) => (b.variantKey || "default") === effectiveVar || (b.variantName || "").toLowerCase() === effectiveVar.toLowerCase())
      : buildsList;
    const candidates = varBuilds.length > 0 ? varBuilds : buildsList;

    for (const b of candidates) {
      if (!b.assets) continue;
      sampleAsset = b.assets.find((a) => a.name && /\.(apk|apks|xapk|apkm)$/i.test(a.name));
      if (sampleAsset) {
        const match = sampleAsset.name.match(/\.([a-z0-9]+)$/i);
        if (match) {
          extension = match[1];
        }
        break;
      }
    }
    if (sampleAsset) break;
  }

  const parsedAsset = sampleAsset?.parsed;
  const parts = [];

  // 1. App Slug (unbranded raw token from asset filename)
  const rawAppSlug = parsedAsset?.rawAppSlug || (app?.appKey ? app.appKey.toLowerCase().replace(/\s+/g, "-") : "");
  if (rawAppSlug) {
    parts.push(rawAppSlug);
  }

  // 2. Patch Engine (if 'all', replace with wildcard '.*', omit if missing/none/official/default)
  let engineToken = modalEngineFilter === "all"
    ? ".*"
    : (parsedAsset?.engineToken || (modalEngineFilter !== "default" ? modalEngineFilter : ""));

  if (engineToken && engineToken !== "official" && engineToken !== "default" && engineToken !== "none") {
    parts.push(engineToken);
  }

  // 3. Patch Name Slug (if 'all', replace with wildcard '.*', omit if 'official')
  let rawPatchSlug = parsedAsset?.rawPatchSlug;
  if (!rawPatchSlug && patch?.patchName && patch.patchName.toLowerCase() !== "official") {
    rawPatchSlug = patch.patchName.toLowerCase().replace(/\s+/g, "-");
  }

  let patchNameToken = modalPatchNameFilter === "all"
    ? ".*"
    : (rawPatchSlug || "");

  if (patchNameToken && patchNameToken !== "official" && patchNameToken !== "default") {
    parts.push(patchNameToken);
  }

  // 4. OS Name (include OS token if parsed or matching sample filename)
  let osName = parsedAsset?.osToken || (modalOsFilter !== "all" ? modalOsFilter : "android");
  let sampleFilename = sampleAsset?.name ? sampleAsset.name.toLowerCase() : "";

  if (osName && (sampleFilename.includes(osName) || !sampleFilename)) {
    parts.push(osName);
  } else if (sampleFilename && (sampleFilename.includes("android") || sampleFilename.includes("windows") || sampleFilename.includes("linux") || sampleFilename.includes("macos") || sampleFilename.includes("termux"))) {
    parts.push(".*");
  }

  // 5. Variant (unbranded raw variant token)
  const effectiveVariant = variantKey !== undefined ? variantKey : modalVariantFilter;
  const variantToken = (effectiveVariant && effectiveVariant !== "all" && effectiveVariant !== "default" && effectiveVariant !== "standard")
    ? (parsedAsset?.rawVariant || effectiveVariant).replace(/\+/g, "-").toLowerCase()
    : (effectiveVariant === "all" ? ".*" : "");
  if (variantToken) {
    parts.push(variantToken);
  }

  // Construct regex pattern safely with wildcards
  let pattern = "^";
  parts.forEach((token, index) => {
    if (index > 0) {
      pattern += "-";
    }
    pattern += token;
  });

  // Replace wildcard tokens surrounded by hyphens (e.g., "-.*-" -> ".*", "-.*" -> ".*", ".*-" -> ".*")
  pattern = pattern
    .replace(/-?\.\*-?/g, ".*")
    .replace(/(\.\*)+/g, ".*")
    .replace(/^-/, "");

  return `${pattern}-v.*\\.${extension}$`;
}

function toggleObtainiumDropdown() {
  const panel = document.querySelector("#patchModal #obtainiumDropdownPanel");
  if (!panel) return;
  const isVisible = panel.style.display !== "none";
  if (isVisible) {
    closeObtainiumDropdown();
  } else {
    openObtainiumDropdown();
  }
}

function openObtainiumDropdown() {
  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const patch = app ? app.patches.find((item) => item.patchKey === activeModalPatchKey) : null;
  if (!app || !patch) return;

  if (!patchHasApk(patch, modalVariantFilter, modalBuildFilter)) {
    showToast("Obtainium integration is only available for Android APK builds.");
    return;
  }

  isObtainiumDropdownOpen = true;
  renderObtainiumDropdownContent(app, patch);
  const panel = document.querySelector("#patchModal #obtainiumDropdownPanel");
  const btn = document.querySelector("#patchModal #obtainiumBtn");
  const chevron = document.querySelector("#patchModal .obtainium-chevron");
  if (panel) {
    panel.style.display = "block";
  }
  if (btn) {
    btn.setAttribute("aria-expanded", "true");
  }
  if (chevron) {
    chevron.style.transform = "rotate(180deg)";
  }
}

function closeObtainiumDropdown() {
  isObtainiumDropdownOpen = false;
  const panel = document.querySelector("#patchModal #obtainiumDropdownPanel");
  const btn = document.querySelector("#patchModal #obtainiumBtn");
  const chevron = document.querySelector("#patchModal .obtainium-chevron");
  if (panel) {
    panel.style.display = "none";
  }
  if (btn) {
    btn.setAttribute("aria-expanded", "false");
  }
  if (chevron) {
    chevron.style.transform = "rotate(0deg)";
  }
}

function renderObtainiumDropdownContent(app, patch) {
  const body = document.querySelector("#patchModal #obtainiumDropdownBody");
  if (body) {
    body.innerHTML = createObtainiumInstructions(app, patch);
  }
}

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

function createObtainiumInstructions(app, patch, variantKey) {
  let sampleBuild = null;
  const patchesToSearch = (app?.patches || [patch]).filter((p) => {
    if (modalEngineFilter !== "all" && (p.engineToken || "none").toLowerCase() !== modalEngineFilter) return false;
    if (modalPatchNameFilter !== "all" && p.patchName !== modalPatchNameFilter) return false;
    return true;
  });

  const searchList = patchesToSearch.length > 0 ? patchesToSearch : (app?.patches || [patch]);
  const effectiveVar = (typeof variantKey !== "undefined" && variantKey !== "all") ? variantKey : modalVariantFilter;
  for (const p of searchList) {
    if (!p.builds) continue;
    const buildsList = Array.isArray(p.builds) ? p.builds : Array.from(p.builds.values());
    const varBuilds = (effectiveVar && effectiveVar !== "all")
      ? buildsList.filter((b) => (b.variantKey || "default") === effectiveVar || (b.variantName || "").toLowerCase() === effectiveVar.toLowerCase())
      : buildsList;
    const candidates = varBuilds.length > 0 ? varBuilds : buildsList;
    sampleBuild = candidates.find((b) => b.assets && b.assets.some((a) => /\.(apk|apks|xapk|apkm)$/i.test(a.name || ""))) || candidates[0];
    if (sampleBuild) break;
  }

  const primaryRepo = getConfigRepos()[0];
  const repoOwner = sampleBuild?.repoOwner || (app?.repos && app.repos.length > 0 ? app.repos[0].split("/")[0] : primaryRepo.owner);
  const repoName = sampleBuild?.repoName || (app?.repos && app.repos.length > 0 ? app.repos[0].split("/")[1] : primaryRepo.repo);
  const repoUrl = sampleBuild?.repoUrl || `https://github.com/${repoOwner}/${repoName}`;

  const obtainiumLatestUrl = "https://github.com/ImranR98/Obtainium/releases/latest";
  const obtainXLatestUrl = "https://github.com/bikram-agarwal/ObtainX/releases";

  const initialVarKey = (typeof variantKey !== "undefined" && variantKey !== "all")
    ? variantKey
    : (modalVariantFilter !== "all" ? modalVariantFilter : "all");
  const initialRegex = buildObtainiumRegex(app, patch, initialVarKey);
  const patchLabelText = modalPatchNameFilter !== "all" ? patch.patchName : "All Patches";
  const varLabelText = initialVarKey !== "all" && initialVarKey !== "default" && initialVarKey !== "standard" ? ` - ${initialVarKey}` : "";
  const initialLabel = `${app.appName} (${patchLabelText}${varLabelText})`;
  const initialPackageId = getAppPackageId(app, patch, initialVarKey);
  const initialSafeId = initialPackageId || `${repoOwner}_${app.appKey}_${patch.patchKey}_${initialVarKey}_0`.replace(/[^a-zA-Z0-9_]/g, "_");

  const initialAddSettings = { apkFilterRegEx: initialRegex };
  if (modalBuildFilter === "beta") initialAddSettings.includePrereleases = true;

  const initialConfig = {
    id: initialSafeId,
    name: initialLabel,
    author: repoOwner,
    url: repoUrl,
    additionalSettings: JSON.stringify(initialAddSettings),
  };
  const initialDirectUrl = `obtainium://app/${encodeURIComponent(JSON.stringify(initialConfig))}`;
  const initialFallbackUrl = `https://apps.obtainium.imranr.dev/redirect?r=${encodeURIComponent(`obtainium://app/${JSON.stringify(initialConfig)}`)}`;

  let step4Content = `
    <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border);">
      <div style="font-size: 0.84rem; font-weight: 600; color: var(--text-primary); margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px;">
        <span id="obtainiumSelectedLabel">${escapeHtml(initialLabel)}</span>
        <span id="obtainiumSelectedPkg" style="font-family: monospace; font-size: 0.76rem; opacity: 0.85; cursor: pointer; color: var(--text-muted);" onclick="copyToClipboard(this.textContent, 'Package ID copied!')" title="Click to copy Package ID">${escapeHtml(initialPackageId || '')}</span>
      </div>
      <div class="instruction-code" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
        <code id="obtainiumSelectedRegex" style="flex: 1; min-width: 140px; word-break: break-all;">${escapeHtml(initialRegex)}</code>
        <button id="obtainiumCopyRegexBtn" class="copy-btn" onclick="copyToClipboard(document.getElementById('obtainiumSelectedRegex').textContent, 'Regex copied!')" type="button" title="Copy Regex">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        </button>
        <a id="obtainiumDirectBtn" href="${initialDirectUrl}" class="obtainium-add-btn" target="_blank" rel="noopener noreferrer">Add to Obtainium</a>
        <a id="obtainiumFallbackBtn" href="${initialFallbackUrl}" class="obtainium-add-btn fallback-btn" target="_blank" rel="noopener noreferrer">Add (Fallback)</a>
      </div>
    </div>
  `;

  return `
    <div class="obtainium-instructions" style="font-size: 0.85rem; line-height: 1.5;">
      <div style="margin-bottom: 12px;">
        Make sure you have <strong>Obtainium</strong> (<a href="${obtainiumLatestUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">GitHub</a>) or <strong>ObtainX</strong> (<a href="${obtainXLatestUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">Releases</a>) installed.
      </div>
      <ol style="padding-left: 18px; margin: 0 0 10px;">
        <li>Open Obtainium and tap <strong>Add App</strong>.</li>
        <li>In <strong>App Source URL</strong>, enter:
          <div class="instruction-code code-with-copy" style="margin-top: 4px; margin-bottom: 8px;">
            <code>${repoUrl}</code>
            <button class="copy-btn" onclick="copyToClipboard('${escapeJsString(repoUrl)}', 'Repository URL copied!')" type="button" title="Copy Repository URL">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        </li>
        <li>Filter by Regular Expression & Add:
          ${step4Content}
        </li>
      </ol>
    </div>
  `;
}

function getAppPackageId(app, patch, variantKey) {
  if (!app) return "";

  let sampleAsset = null;
  const patchesToCheck = patch ? [patch, ...(app?.patches || [])] : (app?.patches || []);
  for (const p of patchesToCheck) {
    if (!p.builds) continue;
    const buildsList = Array.isArray(p.builds) ? p.builds : Array.from(p.builds.values());
    for (const b of buildsList) {
      if (!b.assets) continue;
      sampleAsset = b.assets.find((a) => /\.(apk|apks|xapk|apkm)$/i.test(a.name || ""));
      if (sampleAsset) break;
    }
    if (sampleAsset) break;
  }

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
    const patchIdx = tokens.findIndex((t) => CONFIG.patchEngineTokens.has(t.toLowerCase()) || CONFIG.patchTokens.has(t.toLowerCase()));
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
      const patchIdx = tokens.findIndex((t) => CONFIG.patchEngineTokens.has(t.toLowerCase()) || CONFIG.patchTokens.has(t.toLowerCase()));
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

    // 1. Check variant overrides in activeMapping (e.g. clone, androidtv, foss, legacy, genshin)
    if (variantKey && variantKey !== "default" && variantKey !== "all") {
      const vKeyNorm = normalizeForSearch(variantKey);
      if (typeof activeMapping[variantKey] === "string") return activeMapping[variantKey];
      if (typeof activeMapping[vKeyNorm] === "string") return activeMapping[vKeyNorm];
      if (typeof mapping[variantKey] === "string") return mapping[variantKey];
      if (typeof mapping[vKeyNorm] === "string") return mapping[vKeyNorm];

      for (const tok of variantTokens) {
        const tokNorm = normalizeForSearch(tok);
        if (typeof activeMapping[tok] === "string") return activeMapping[tok];
        if (typeof activeMapping[tokNorm] === "string") return activeMapping[tokNorm];
        if (tokNorm.includes("tv") && typeof activeMapping["androidtv"] === "string") return activeMapping["androidtv"];
        if (tokNorm.includes("clone") && typeof activeMapping["clone"] === "string") return activeMapping["clone"];
        if (tokNorm.includes("foss") && typeof activeMapping["foss"] === "string") return activeMapping["foss"];
        if (typeof mapping[tok] === "string") return mapping[tok];
        if (typeof mapping[tokNorm] === "string") return mapping[tokNorm];
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

// Format PR & Tag Changelog Banner Header Helper
function formatChangelogHeader(build, rawBody) {
  const repoSlug = build?.repoSlug || "";
  const buildTag = build?.build || build?.version || "";
  const releaseUrl = build?.releaseUrl || "#";

  // Check Dolphin PR pattern
  const dolphinPrMatch = (buildTag + " " + (build?.releaseTitle || "") + " " + rawBody).match(/dolphin-pr-(\d+)|Dolphin PR #?(\d+)/i);
  if (dolphinPrMatch || repoSlug.includes("Dolphin")) {
    const prNum = dolphinPrMatch ? (dolphinPrMatch[1] || dolphinPrMatch[2]) : null;
    const prUrl = prNum ? `https://github.com/dolphin-emu/dolphin/pull/${prNum}` : releaseUrl;
    const prLabel = prNum ? `#${prNum}` : buildTag;

    return `
      <div class="pr-badge-header" style="background: var(--accent-glow); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-hover); margin-bottom: 14px; font-weight: 600; color: var(--accent); display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
        <span>🐬 Dolphin Upstream Pull Request <a href="${escapeHtml(prUrl)}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">${escapeHtml(prLabel)}</a></span>
        <a href="${escapeHtml(prUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.78rem; padding: 3px 10px; text-decoration: none;">View Upstream PR ↗</a>
      </div>
    `;
  }

  // Check Eden PR pattern
  const edenPrMatch = (buildTag + " " + rawBody).match(/Pull request build #\[?(\d+)\]?\((https?:\/\/[^\s\)]+)\)|pr-(\d+)/i);
  if (edenPrMatch) {
    const prNum = edenPrMatch[1] || edenPrMatch[3];
    const prUrl = edenPrMatch[2] || (prNum ? `https://git.eden-emu.dev/eden-emu/eden/pulls/${prNum}` : releaseUrl);
    return `
      <div class="pr-badge-header" style="background: var(--accent-glow); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-hover); margin-bottom: 14px; font-weight: 600; color: var(--accent); display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
        <span>🎮 Forgejo Pull Request <a href="${escapeHtml(prUrl)}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">#${escapeHtml(prNum)}</a></span>
        <a href="${escapeHtml(prUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.78rem; padding: 3px 10px; text-decoration: none;">View PR Details ↗</a>
      </div>
    `;
  }

  // Default Release Tag Header (for LeviLaunchroid and tagged releases)
  return `
    <div class="release-header-banner" style="background: var(--bg-surface-high); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border); margin-bottom: 14px; font-weight: 600; color: var(--text-primary); display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
      <span>🏷️ Tag: <code style="color: var(--accent); font-family: var(--font-mono);">${escapeHtml(buildTag)}</code></span>
      <a href="${escapeHtml(releaseUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.78rem; padding: 3px 10px; text-decoration: none;">View Release ↗</a>
    </div>
  `;
}

// Changelog Modal Controller (uses marked.js for markdown rendering)
function openChangelogModal(appKey, patchKey, buildKey) {
  const app = currentAppCatalog.find((item) => item.appKey === appKey);
  const patch = app ? app.patches.find((item) => item.patchKey === patchKey) : null;
  if (!app || !patch) return;

  const build = patch.builds.find((b) => String(b.buildKey || b.releaseId) === String(buildKey)) || patch.builds[0];
  if (!build) return;

  const variantText = build.variant ? ` (${formatBrandDisplayName(build.variant)})` : "";
  if (DOM.changelogTitle) {
    DOM.changelogTitle.textContent = `${app.appName} • ${patch.patchName}${variantText}`;
  }
  if (DOM.changelogMeta) {
    DOM.changelogMeta.textContent = `Build ${build.build || build.version || ""} • Published ${formatDate(build.publishedAt)}`;
  }

  let rawBody =
    build.body ||
    build.patchMeta?.body ||
    build.patchMeta?.releaseBody ||
    build.releaseBody ||
    "";

  if (!rawBody && Array.isArray(allReleases)) {
    const matchedRelease = allReleases.find((r) =>
      String(r.id) === String(build.releaseId) ||
      String(r.tag_name) === String(build.build) ||
      (r.html_url && build.releaseUrl && r.html_url === build.releaseUrl)
    );
    if (matchedRelease && matchedRelease.body) {
      rawBody = matchedRelease.body;
    }
  }

  const headerBanner = formatChangelogHeader(build, rawBody);
  let parsedContent = "";

  if (rawBody) {
    if (typeof marked !== "undefined" && typeof marked.parse === "function") {
      parsedContent = marked.parse(rawBody);
    } else if (typeof marked === "function") {
      parsedContent = marked(rawBody);
    } else {
      parsedContent = formatChangelogForBuild(build);
    }
  } else {
    parsedContent = `
      <div class="no-results" style="padding: 24px 20px; text-align: center; color: var(--text-secondary);">
        <p style="margin-bottom: 12px; font-size: 0.95rem;">No release notes body attached to this build.</p>
      </div>
    `;
  }

  if (DOM.changelogBody) {
    DOM.changelogBody.innerHTML = `
      <div class="changelog-modal-wrapper">
        ${headerBanner}
        <div class="changelog-markdown-content">${parsedContent}</div>
      </div>
    `;
  }

  showModal(DOM.changelogModal);
}

function closeChangelogModal() {
  hideModal(DOM.changelogModal);
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
  if ((name.includes("arm") && !name.includes("arm64") && !name.includes("aarch64")) || name.includes("arm-v7a") || name.includes("armeabi")) return "arm32";
  if (name.includes("x86_64") || name.includes("x86-64") || name.includes("x64") || name.includes("amd64") || name.includes("win64")) return "x86_64";
  if (name.includes("x86") || name.includes("win32") || name.includes("i386") || name.includes("i686")) return "x86";
  if (name.includes("universal") || name.includes("-all.") || /^(?!.*arm|aarch64|amd64|x86|x64|i386)[^-]*\.(apk|apks|xapk|apkm|exe|msi|zip)$/i.test(name)) return "universal";
  return "other";
}

function detectOS(text) {
  const clean = (text || "").toLowerCase();
  if (clean.includes("termux")) return "termux";
  if (clean.includes("macos") || clean.includes("mac") || clean.includes("darwin") || clean.includes("osx")) return "macos";
  if (clean.includes("windows") || clean.includes("win") || clean.includes(".exe") || clean.includes(".msi")) return "windows";
  if (clean.includes("linux") || clean.includes("ubuntu") || clean.includes("debian") || clean.includes(".appimage") || clean.includes(".deb") || clean.includes(".rpm")) return "linux";
  if (clean.includes("android") || /\.apk[sm]?$/i.test(clean)) return "android";
  return "android";
}

function formatOSBadge(osKey) {
  switch (osKey) {
    case "termux": return "🤖 Termux";
    case "macos": return "🍎 MacOS";
    case "windows": return "🪟 Windows";
    case "linux": return "🐧 Linux";
    case "android": default: return "🤖 Android";
  }
}

function capitalizeArch(arch) {
  const map = {
    arm64: "ARM64 (v8a)",
    arm32: "ARM32 (v7a)",
    universal: "Universal / All",
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
  let osToken = null;
  const osTokenIndex = tokens.findIndex((t) => ["android", "termux", "macos", "mac", "windows", "win", "linux"].includes(t.toLowerCase()));
  if (osTokenIndex >= 0) {
    osToken = tokens[osTokenIndex].toLowerCase();
    tokens.splice(osTokenIndex, 1);
  }

  const versionIndex = tokens.findIndex(
    (token) => /^(v\w*\d|vbuild)/i.test(token) && !archSubTokens.has(token.toLowerCase())
  );
  const moduleIndex = tokens.findIndex((token) => token.toLowerCase() === "module");
  const stopIndexCandidates = [versionIndex, moduleIndex].filter((i) => i >= 0);
  const stopIndex = stopIndexCandidates.length > 0 ? Math.min(...stopIndexCandidates) : tokens.length;
  const preMetaTokens = tokens.slice(0, stopIndex);

  let engineToken = null;
  const engineIdx = preMetaTokens.findIndex((token) => CONFIG.patchEngineTokens.has(token.toLowerCase()));
  if (engineIdx >= 0) {
    engineToken = preMetaTokens[engineIdx].toLowerCase();
    preMetaTokens.splice(engineIdx, 1);
  }

  let patchStartIndex = preMetaTokens.findIndex((token) => CONFIG.patchTokens.has(token.toLowerCase()));

  let appTokens = [];
  let patchTokens = [];
  let variantTokens = [];

  preMetaTokens.forEach((token) => {
    const tLower = token.toLowerCase();
    if (CONFIG.patchTokens.has(tLower)) {
      patchTokens.push(token);
    } else if (CONFIG.variantTokens.has(tLower) || ["stable", "beta", "nightly", "dev", "alpha"].includes(tLower)) {
      variantTokens.push(token);
    } else {
      appTokens.push(token);
    }
  });

  // If appTokens is ['brave', 'beta'] or similar, move channel token to variantTokens
  if (appTokens.length > 1 && ["beta", "nightly", "dev", "alpha", "stable"].includes(appTokens[appTokens.length - 1].toLowerCase())) {
    variantTokens.unshift(appTokens[appTokens.length - 1]);
    appTokens = appTokens.slice(0, -1);
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
    : "Standard";

  const rawVariant = variantTokens.length > 0
    ? variantTokens.map((v) => v.toLowerCase()).join("+")
    : "standard";

  const appNameRaw = appTokens.length > 0 ? appTokens.join(" ") : (preMetaTokens.join(" ") || baseName);
  const patchNameList = patchTokens.length > 0
    ? patchTokens.map((p) => `🧩 ${formatBrandDisplayName(p)}`)
    : [];
  const patchNameRaw = patchTokens.length > 0 ? patchTokens.map((p) => formatBrandDisplayName(p)).join(" + ") : "Official";

  const rawPrefix = preMetaTokens.join("-").toLowerCase();
  const rawAppSlug = appTokens.length > 0 ? appTokens.join("-").toLowerCase() : (preMetaTokens.join("-").toLowerCase() || baseName.toLowerCase());
  const rawPatchToken = patchTokens.length > 0 ? patchTokens[0].toLowerCase() : "";

  const result = {
    appName: formatBrandDisplayName(appNameRaw),
    patchName: formatBrandDisplayName(patchNameRaw),
    patchNameList,
    engineToken,
    variant: variantDisplayName,
    rawVariant: rawVariant,
    rawPrefix: rawPrefix,
    rawAppSlug: appTokens.join("-").toLowerCase() || preMetaTokens.join("-").toLowerCase(),
    rawPatchSlug: patchTokens.join("-").toLowerCase() || "official",
    version,
    fileType,
    osToken,
    rawAppSlug,
    rawPatchToken,
  };

  parseCache.set(filename, result);
  return result;
}

function formatBrandDisplayName(value) {
  const compoundKey = normalizeForSearch(value);
  if (compoundKey && CONFIG.brandOverrides[compoundKey]) {
    return CONFIG.brandOverrides[compoundKey];
  }
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
