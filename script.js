/**
 * ==========================================
 * CONFIGURATION & CUSTOMIZATION
 * Edit these values to update the app catalog behavior, branding, and notices.
 * ==========================================
 */
const CONFIG = {
  // Primary repo identity (used for Obtainium instructions and linking)
  "owner": "sharath-5br2r-apps",
  "repo": "revanced-morphe-xposed-builder",
  // Support for multiple GitHub APK release repositories
  repos: [
    { owner: "sharath-5br2r-apps", repo: "revanced-morphe-xposed-builder" },
    { owner: "sharath-5br2r-apps", repo: "Eden-Workflow" },
    { owner: "sharath-5br2r-apps", repo: "Dolphin-Extra" },
    { owner: "sharath-5br2r-apps", repo: "LeviLaunchroid-Extra" },
    { owner: "sharath-5br2r-apps", repo: "ZalithLauncher2-Extra" }
  ],
  cacheDuration: 1, // Cache duration in minutes

  // App Categories for the filter buttons
  appCategories: {
    browser: [
      "brave",
      "bravebeta",
      "bravenightly",
      "browser"
    ],
    communication: [
      "discord",
      "truecaller",
      "messenger",
      "whatsapp",
      "telegram",
      "gboard"
    ],
    documents: [
      "adobeacrobat",
      "microsoftexcel",
      "microsoftword",
      "moonreader",
      "moonplusreader",
      "office",
      "xodo",
      "camscanner",
      "adobe",
      "excel",
      "word",
      "reader"
    ],
    education: [
      "duolingo"
    ],
    emulator: [
      "dolphin",
      "emulator",
      "eden"
    ],
    games: [
      "brawlstars",
      "clashofclans",
      "clashroyale",
      "hillclimbracing",
      "jetpackjoyride",
      "nulls",
      "smashhit",
      "vector",
      "chess",
      "game",
      "games",
      "levilauncher",
      "levilaunchroid",
      "brawl",
      "clash",
      "hill",
      "jetpack",
      "smash",
      "zalithlauncher2"
    ],
    launcher: [
      "nova",
      "smartlauncher",
      "niagara",
      "launcher",
      "!levilauncheroid",
      "!zalithlauncher2"
    ],
    music: [
      "youtubemusic",
      "symfonium",
      "soundcloud",
      "poweramp",
      "music",
      "audioplayer"
    ],
    productivity: [
      "bitwarden",
      "pcremote",
      "monect",
      "adm",
      "sdmaid",
      "oxygenupdater",
      "betamaniac",
      "fing",
      "speedtest",
      "batteryguru",
      "github",
      "solidexplorer",
      "camscanner",
      "xodo",
      "adobe",
      "excel",
      "word"
    ],
    amazon: [
      "amazon",
      "alexa",
      "amazonindia",
      "primevideo",
      "prime"
    ],
    social: [
      "twitter",
      "instagram",
      "tiktok",
      "facebook",
      "threads",
      "reddit",
      "x-morphe",
      "xshim",
      "comtwitter",
      "x",
      "discord",
      "twitch",
      "youtube",
      "!youtubemusic"
    ],
    utilities: [
      "adguard",
      "gboard",
      "sdmaid",
      "speedtest",
      "fing",
      "batteryguru",
      "adm",
      "oxygenupdater",
      "solidexplorer",
      "github",
      "bitwarden",
      "pcremote",
      "1111warp",
      "warp",
      "vpn"
    ],
    video: [
      "youtube",
      "primevideo",
      "tiktok",
      "jiohotstar",
      "hbomax",
      "vix",
      "moviebox",
      "netflix",
      "twitch",
      "xrecorder"
    ],
    vpn: [
      "1111warp",
      "vpnify",
      "windscribevpn",
      "protonvpn",
      "vpn",
      "warp",
      "cloudflare",
      "1111",
      "adguard"
    ],
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
  ]),

  // Known build variant/format tokens that mark the end of app name (must be lowercase)
  // These words indicate a release format/type and stop app name extraction
  buildVariantTokens: new Set([
    "module",
    "portable",
    "standalone",
    "installer",
    "setup",
    "bundle",
    "package",
    "plugin",
    "addon",
    "extension",
    "patch",
  ]),

  // Channel suffixes that may follow a buildVariantToken in a filename (e.g. -module-beta)
  // Used to distinguish stable vs beta/alpha/nightly modules (must be lowercase)
  buildVariantChannels: new Set([
    "beta",
    "alpha",
    "nightly",
    "canary",
    "dev",
    "preview",
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
    byair: "ByAir",
    capcut: "CapCut: Photo & Video Editor",
    chesscom: "Chess.com",
    aliexpress: "AliExpress - Shopping App",
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
    accuweather: "com.accuweather.android",
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
    aliexpressshoppingapp: "com.alibaba.aliexpresshd",
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
    chesscom: "com.chess",
    capcutphotovideoeditor: "com.lemon.lvoverseas",
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
    picsart: "com.picsart.studio",
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
        morpheanddea: "anddea.youtube.music",
      },
      morpheanddea: "anddea.youtube.music",
      default: "com.google.android.apps.youtube.music",
    },
    zalithlauncher2extra: "com.movtery.zalithlauncher.v2"
  },

  // App-specific notices to display on App Cards
  appNotices: [
    {
      triggers: [
        "youtube",
        "google"
      ],
      className: "microg-note",
      title: "Login Issue",
      text: "Signing into Google account on APK (not Module) requires MicroG. Please install one from below before trying to sign in.",
      links: [
        { label: "Morphe", url: "https://github.com/MorpheApp/MicroG-RE/releases/latest" },
        { label: "ReVanced", url: "https://github.com/ReVanced/GmsCore/releases/latest" },
      ],
    },
    {
      triggers: [
        "twitter"
      ],
      className: "twitter-login-note",
      title: "Login Issue",
      text: "Since October 2025, Twitter has started checking whether the app is modified or if phone integrity fails during login.",
      links: [
        { label: "Workarounds", url: "https://t.me/pikopatches/1/59772" },
      ],
    },
    {
      triggers: [
        "amazon",
        "primevideo"
      ],
      className: "amazon-signing-note",
      title: "Amazon Shared Permissions & Signature",
      text: "Due to shared permissions between Amazon apps and Prime Video (shared login), all Amazon apps must be installed with the same signature.",
      links: [
        { label: "Download apps from here", url: "./" },
        { label: "Discussions", url: "https://github.com/orgs/sharath-5br2r-apps/discussions" },
      ],
    },
    {
      triggers: [
        "dolphinemulator"
      ],
      className: "dolphin-note",
      title: "Dolphin Extra",
      text: "It is a fork of Dolphin that incorporates aspects from DolphinCS and Better-Wii-Menu-DE.",
      links: [
        { label: "Source Code", url: "https://github.com/sharath-5br2r-apps/Dolphin-Extra" },
      ],
    },
    {
      triggers: [
        "levilaunchroid",
        "levilaunchroidextra"
      ],
      className: "levilaunchroid-note",
      title: "LeviLaunchroid Extra",
      text: "Additional modules and builds for LeviLaunchroid.",
      links: [
        { label: "Source Code", url: "https://github.com/sharath-5br2r-apps/LeviLaunchroid-Extra" },
      ],
    },
    {
      triggers: [
        "zalithlauncher2",
        "zalithlauncher2extra"
      ],
      className: "zalithlauncher2-note",
      title: "ZalithLauncher2 Extra",
      text: "Additional builds and releases for ZalithLauncher2.",
      links: [
        { label: "Source Code", url: "https://github.com/sharath-5br2r-apps/ZalithLauncher2-Extra" },
      ],
    },
    {
      triggers: [
        "nulls",
        "brawlstars",
        "clashofclans",
        "clashroyale"
      ],
      className: "nulls-note",
      title: "Null's Private Server Notice",
      text: "Null's Games (from nulls.gg) is a private server with proprietary patches. Builds are scraped and hosted here for easy Obtainium tracking.",
      links: [
        { label: "nulls.gg", url: "https://nulls.gg/" },
      ],
    },
  ],
};
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

// Variant & Label Formatting Helpers
function formatVariantLabel(variant, subVariant) {
  const toTitleCase = (str) =>
    str ? str.replace(/\b[a-z]/g, (c) => c.toUpperCase()) : "";
  if (variant && subVariant) return `${variant} • ${toTitleCase(subVariant)}`;
  if (variant) return variant;
  if (subVariant) return toTitleCase(subVariant);
  return "Standard";
}

function getObtainiumAppLabel(appName, brandName, variant, subVariant) {
  const parts = [brandName];
  if (variant) parts.push(variant);
  if (subVariant) {
    const toTitleCase = (str) =>
      str ? str.replace(/\b[a-z]/g, (c) => c.toUpperCase()) : "";
    parts.push(toTitleCase(subVariant));
  }
  return `${appName} (${parts.join(" • ")})`;
}

// State
let cachedFullCatalog = [];
let cachedPatchSets = []; // Shared top-level appliedPatches table (schema v2 dedup)
let cachedChangelogSets = []; // Shared top-level changelogs table (schema v2 dedup)
let cachedPatchSourceSets = []; // Shared top-level patchSources table (schema v2 dedup)
let searchTerm = "";
let appCategoryFilter = "all";
let sortMode = "recent"; // "recent" | "popular" | "name"
let currentAppCatalog = [];
let activeModalAppKey = null;
let activeModalBrandKey = null;
let modalBuildFilter = "all";
let modalSelectedVariant = null;
let modalSelectedSubVariant = null;
let themeMode = "system";
let activeAppliedPatchesList = [];

// Stoplist Threshold


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
    DOM.themeColorMeta.setAttribute("content", isLight ? "#faf8f5" : "#1a1814");
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

  // Secondary Category Filter Buttons
  if (DOM.appFilterButtons) {
    DOM.appFilterButtons.addEventListener("click", (e) => {
      const filterBtn = e.target.closest(".filter-btn");
      if (!filterBtn) return;
      appCategoryFilter = filterBtn.dataset.filter || "all";
      filterAndRenderReleases();
    });
  }

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
          trigger.dataset.brandKey,
          trigger.dataset.channel || "all",
          trigger.dataset.variant || null,
          trigger.dataset.subVariant || null
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
            ensureAppCardBody(card);
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
        if (filterBtn.classList.contains("variant-pill-btn")) {
          modalSelectedVariant = filterBtn.dataset.variant || null;
          const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
          const brand = app ? (app.brands || []).find((item) => item.brandKey === activeModalBrandKey) : null;
          if (brand && brand.variants) {
            const validSubs = brand.variants
              .filter((v) => (v.variant || null) === modalSelectedVariant)
              .map((v) => v.subVariant || null);
            if (!validSubs.includes(modalSelectedSubVariant)) {
              modalSelectedSubVariant = validSubs[0] || null;
            }
          }
        } else if (filterBtn.classList.contains("subvariant-pill-btn")) {
          modalSelectedSubVariant = filterBtn.dataset.subVariant || null;
        } else {
          modalBuildFilter = filterBtn.dataset.filter;
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
          appliedTrigger.dataset.brandKey,
          appliedTrigger.dataset.buildId,
          appliedTrigger.dataset.variant || null,
          appliedTrigger.dataset.subVariant || null,
          appliedTrigger.dataset.build || null,
          appliedTrigger.dataset.releaseId || null
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



}

function syncUrlParams() {
  const url = new URL(window.location);
  if (searchTerm) url.searchParams.set("q", searchTerm);
  else url.searchParams.delete("q");

  if (sortMode !== "recent") url.searchParams.set("sort", sortMode);
  else url.searchParams.delete("sort");

  history.replaceState(null, "", url);
}

// Clean up legacy localStorage catalog caches
try {
  localStorage.removeItem("data_cache");
  localStorage.removeItem("data_cache_time");
  localStorage.removeItem("catalog_cache");
  localStorage.removeItem("catalog_cache_time");
} catch { }

// Data Loader (Pure data.json, zero legacy fallbacks)

// Fetch helper that transparently tries .json.gz (with decompression) before falling back to .json
// Fetch helper that transparently tries .json.gz (with decompression) before falling back to .json
async function fetchJsonWithGzFallback(baseFilename, cacheBuster = Date.now()) {
  const gzUrl = `${baseFilename}.gz?v=${cacheBuster}`;
  const jsonUrl = `${baseFilename}?v=${cacheBuster}`;

  // 1. Try compressed .gz file first
  try {
    const gzResp = await fetch(gzUrl);
    if (gzResp.ok) {
      const contentEncoding = (gzResp.headers.get("content-encoding") || "").toLowerCase();
      // If server or CDN already handled decompression, .json() works directly
      if (!contentEncoding.includes("gzip") && typeof DecompressionStream !== "undefined") {
        try {
          const ds = new DecompressionStream("gzip");
          const decompressedStream = gzResp.body.pipeThrough(ds);
          const text = await new Response(decompressedStream).text();
          return JSON.parse(text);
        } catch (decompErr) {
          console.warn(`Decompression failed for ${gzUrl}, attempting direct json parse:`, decompErr);
        }
      }
      return await gzResp.json();
    }
  } catch (gzErr) {
    console.warn(`Failed to fetch or parse ${gzUrl}:`, gzErr);
  }

  // 2. Fallback to uncompressed .json file
  try {
    const jsonResp = await fetch(jsonUrl);
    if (jsonResp.ok) {
      return await jsonResp.json();
    }
  } catch (jsonErr) {
    console.warn(`Failed to fetch ${jsonUrl}:`, jsonErr);
  }

  return null;
}

async function loadReleases() {
  try {
    setPillState("checking", "Checking for updates...");

    if (DOM.loading) DOM.loading.style.display = "block";
    if (DOM.error) DOM.error.style.display = "none";

    const cacheBuster = Date.now();
    const data = await fetchJsonWithGzFallback("data.json", cacheBuster);
    if (!data) throw new Error("Could not load data.json or data.json.gz");

    cachedFullCatalog = Array.isArray(data.apps) ? data.apps : (Array.isArray(data) ? data : []);
    cachedPatchSets = Array.isArray(data.patchSets) ? data.patchSets : [];
    cachedChangelogSets = Array.isArray(data.changelogSets) ? data.changelogSets : [];
    cachedPatchSourceSets = Array.isArray(data.patchSourceSets) ? data.patchSourceSets : [];
    // Warm the normalized search index once so the first keystroke is instant.
    cachedFullCatalog.forEach(getSI);

    if (DOM.loading) DOM.loading.style.display = "none";
    updateLastUpdateTimestamp(data.updated_at);
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

// Filter and Render Catalog
function filterAndRenderReleases() {
  renderCategoryFilterButtons();

  if (
    appCategoryFilter !== "all" &&
    !CONFIG.appCategories[appCategoryFilter]
  ) {
    appCategoryFilter = "all";
  }

  // 1. Search Query Filter
  let apps = filterCatalogBySearch(cachedFullCatalog, searchTerm);

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
    (a.brands || []).forEach((b) => {
      totalBuilds += (b.builds || []).length;
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
  const keywords = CONFIG.appCategories[appCategoryFilter];
  if (!keywords) return apps;

  const includes = keywords.filter((k) => !k.startsWith("!"));
  const excludes = keywords.filter((k) => k.startsWith("!")).map((k) => k.slice(1));

  return apps.filter((app) => {
    const si = getSI(app);
    const hit = (kw) => si.name.includes(kw) || si.key.includes(kw) || si.namePlus.includes(kw);
    const isIncluded = includes.some(hit);
    const isExcluded = excludes.some(hit);
    return isIncluded && !isExcluded;
  });
}

// O(1) Instant Property Comparisons
function applySortMode(apps) {
  if (sortMode === "popular") {
    return [...apps].sort((a, b) => (b.totalDownloads || 0) - (a.totalDownloads || 0));
  }
  if (sortMode === "name") {
    return [...apps].sort((a, b) => (a.appName || "").localeCompare(b.appName || ""));
  }
  // Default: recent (safely handles epoch timestamps, ISO strings, and null/undefined)
  const toTimestamp = (val) => (typeof val === "number" ? val : Date.parse(val) || 0);
  return [...apps].sort((a, b) => toTimestamp(b.latestPublishedAt) - toTimestamp(a.latestPublishedAt));
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

// ---- Precomputed search index -------------------------------------------
// Normalization (regex strip + word splitting + per-brand/variant tables) is
// computed once per app at load time and cached on the app object as `_si`,
// so live search/typing only performs cheap substring scans instead of
// re-normalizing the entire catalog on every keystroke.
function precomputeAppSearchData(app) {
  return {
    name: normalizeForSearch(app.appName),
    key: normalizeForSearch(app.appKey),
    namePlus: normalizeForSearch((app.appName || "").replace(/\+/g, "plus")),
    words: (app.appName || "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean),
    brands: (app.brands || []).map((b) => ({
      n: normalizeForSearch(b.brandName || b.patchName),
      vs: (b.variants || []).map((v) => ({
        v: v.variant ? normalizeForSearch(v.variant) : null,
        s: v.subVariant ? normalizeForSearch(v.subVariant) : null,
        p: v.packageName ? normalizeForSearch(v.packageName) : null,
      })),
    })),
  };
}

function getSI(app) {
  return app._si || (app._si = precomputeAppSearchData(app));
}

// Category names / include-keywords are static (from CONFIG), so normalize them once.
let categorySearchIndex = null;
function getCategoryIndex() {
  if (categorySearchIndex) return categorySearchIndex;
  categorySearchIndex = Object.entries(CONFIG.appCategories || {}).map(([catName, keywords]) => ({
    nameNorm: normalizeForSearch(catName),
    includes: keywords.filter((k) => !k.startsWith("!")),
  }));
  return categorySearchIndex;
}

function getAppSearchScore(app, query) {
  const q = normalizeForSearch(query);
  if (!q) return Infinity;

  const si = getSI(app);
  const appName = si.name;
  const appKey = si.key;

  // 1. Exact match
  if (appName === q || appKey === q) return 0;

  // 2. Prefix match
  if (appName.startsWith(q) || appKey.startsWith(q)) return 1;

  // 3. Word match on app name
  const appWords = si.words;
  if (appWords.some((w) => w === q)) return 2;
  if (appWords.some((w) => w.startsWith(q))) return 3;

  // 4. Substring match on app name/key
  if (appName.includes(q) || appKey.includes(q)) return 4;

  // 5. Match Brand, Variant, Sub-Variant, or Package Name
  for (const b of si.brands) {
    if (b.n.includes(q)) return 5;
    for (const v of b.vs) {
      if (v.v && v.v.includes(q)) return 6;
      if (v.s && v.s.includes(q)) return 6;
      if (v.p && v.p.includes(q)) return 7;
    }
  }

  // 6. Match Category names or matching category keywords
  for (const cat of getCategoryIndex()) {
    if (cat.nameNorm.includes(q)) {
      if (cat.includes.some((kw) => appName.includes(kw) || appKey.includes(kw) || si.namePlus.includes(kw))) {
        return 5;
      }
    }
  }

  return Infinity;
}

// Render App Cards Directly
function renderAppCards(apps) {
  if (!DOM.builds) return;
  currentAppCatalog = apps;

  if (apps.length === 0) {
    DOM.builds.innerHTML = '<div class="no-results">No applications found matching your criteria.</div>';
    return;
  }

  DOM.builds.innerHTML = apps.map((app, index) => createAppCard(app, index)).join("");
}

// Create App Card shell (summary only). The heavy brand/variant body is built
// lazily on first expand (see ensureAppCardBody) so the initial DOM stays small
// -- 118 collapsed summaries instead of 118 fully-expanded trees.
function createAppCard(app, index) {
  const totalDownloads = app.totalDownloads || 0;
  const dlBadge = `<span class="patch-stat-badge" title="${totalDownloads.toLocaleString()} Total Downloads">📥 ${formatCompactNumber(totalDownloads)}</span>`;

  return `
    <div class="build-card app-card" data-app-index="${index}">
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
          <div class="app-card-body-inner"></div>
        </div>
      </div>
    </div>
  `;
}

// Build the expandable body content (notices + brand/variant matrix) on demand.
function buildAppCardBody(app) {
  const toTimestamp = (val) => (typeof val === "number" ? val : Date.parse(val) || 0);
  let brands = [...(app.brands || [])];
  if (sortMode === "popular") {
    brands.sort((a, b) => (b.totalDownloads || 0) - (a.totalDownloads || 0));
  } else if (sortMode === "name") {
    brands.sort((a, b) => (a.brandName || "").localeCompare(b.brandName || ""));
  } else {
    // Default: recent — newest latestPublishedAt first
    brands.sort((a, b) => toTimestamp(b.latestPublishedAt) - toTimestamp(a.latestPublishedAt));
  }
  const brandsMarkup = brands
    .map((brand) => createBrandMarkup(app, brand))
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

  return `
    ${noticesMarkup}
    <div class="brands-list">
      ${brandsMarkup}
    </div>
  `;
}

// Populate a card's body the first time it is expanded, then mark it loaded.
function ensureAppCardBody(card) {
  if (card.dataset.bodyLoaded === "1") return;
  const app = currentAppCatalog[Number(card.dataset.appIndex)];
  const inner = card.querySelector(".app-card-body-inner");
  if (app && inner) {
    inner.innerHTML = buildAppCardBody(app);
    // Force layout so the collapse->expand transition animates from 0 height.
    void card.offsetHeight;
  }
  card.dataset.bodyLoaded = "1";
}

function getNoticeInlineStyles(notice) {
  const color = (notice.color || "").trim();
  if (!color && !notice.border && !notice.bg) return "";

  const presets = {
    accent: {
      color: "var(--accent)",
      border: "var(--border-hover)",
      bg: "linear-gradient(90deg, var(--accent-glow), transparent)",
    },
    info: {
      color: "var(--accent)",
      border: "var(--border-hover)",
      bg: "linear-gradient(90deg, var(--accent-glow), transparent)",
    },
    warning: {
      color: "var(--accent-warning)",
      border: "var(--accent-warning)",
      bg: "linear-gradient(90deg, rgba(250, 189, 47, 0.12), transparent)",
    },
    danger: {
      color: "var(--accent-danger)",
      border: "var(--accent-danger)",
      bg: "linear-gradient(90deg, rgba(244, 63, 94, 0.12), transparent)",
    },
    error: {
      color: "var(--accent-danger)",
      border: "var(--accent-danger)",
      bg: "linear-gradient(90deg, rgba(244, 63, 94, 0.12), transparent)",
    },
    success: {
      color: "var(--accent-stable)",
      border: "var(--accent-stable)",
      bg: "linear-gradient(90deg, var(--accent-stable-glow), transparent)",
    },
  };

  const pKey = color.toLowerCase();
  let mainColor = presets[pKey]?.color || notice.color;
  let borderColor = notice.border || presets[pKey]?.border || notice.color;
  let bgColor = notice.bg || presets[pKey]?.bg;

  if (!bgColor && mainColor) {
    if (mainColor.startsWith("#")) {
      const hex = mainColor.replace("#", "");
      let r = 0, g = 0, b = 0;
      if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
      }
      bgColor = `linear-gradient(90deg, rgba(${r}, ${g}, ${b}, 0.12), transparent)`;
    } else {
      bgColor = "linear-gradient(90deg, rgba(255, 255, 255, 0.06), transparent)";
    }
  }

  const styles = [];
  if (mainColor) styles.push(`--notice-color: ${mainColor}`);
  if (borderColor) styles.push(`--notice-border: ${borderColor}`);
  if (bgColor) styles.push(`--notice-bg: ${bgColor}`);

  return styles.length > 0 ? `style="${styles.join("; ")};"` : "";
}

function createNoticeMarkup(notice) {
  const linksMarkup = (notice.links || [])
    .map((link) => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} ↗</a>`)
    .join(" ");

  const styleAttr = getNoticeInlineStyles(notice);

  return `
    <div class="app-notice" ${styleAttr}>
      <div class="app-notice-title">${escapeHtml(notice.title)}</div>
      <div class="app-notice-text">${escapeHtml(notice.text)}</div>
      ${linksMarkup ? `<div class="app-notice-links">${linksMarkup}</div>` : ""}
    </div>
  `;
}

// Resolve a variant's channel pointer into display fields. data.json stores
// only the referenced build's id (schema v2, emitted by rebuild_catalog.py),
// which is looked up in brand.builds by (variant, subVariant, releaseType, build).
function resolveChannelPointer(brand, variant, channel) {
  const ptr = variant[channel === "beta" ? "latestBeta" : "latestStable"];
  if (!ptr) return null;
  const ref = String(ptr);
  const found = (brand.builds || []).find(
    (b) =>
      (b.variant || null) === (variant.variant || null) &&
      (b.subVariant || null) === (variant.subVariant || null) &&
      b.releaseType === channel &&
      String(b.build) === ref
  );
  if (!found) return null;
  return {
    version: found.version,
    build: found.build,
    publishedAt: found.publishedAt,
    isArchiveFallback: !!found.isArchive,
  };
}

// Create Brand Entry Markup with Multi-Channel Variant Matrix
function createBrandMarkup(app, brand) {
  const builds = brand.builds || [];
  const buildCount = builds.length;
  const buildIconBadge = `<span class="patch-stat-badge" title="${buildCount} total builds">📦 ${buildCount}</span>`;
  const downloadCount = brand.totalDownloads || 0;
  const downloadIconBadge = `<span class="patch-stat-badge" title="${downloadCount.toLocaleString()} total downloads">📥 ${formatCompactNumber(downloadCount)}</span>`;

  // Pin Standard (null/null) at top, sort the rest alphabetically by variant then subVariant.
  const sortedVariants = [...(brand.variants || [])].sort((a, b) => {
    const aIsStd = a.variant == null && a.subVariant == null;
    const bIsStd = b.variant == null && b.subVariant == null;
    if (aIsStd !== bIsStd) return aIsStd ? -1 : 1;
    const vc = (a.variant || "").localeCompare(b.variant || "");
    if (vc !== 0) return vc;
    return (a.subVariant || "").localeCompare(b.subVariant || "");
  });

  // Render variant rows
  const variantRowsHtml = sortedVariants
    .map((variant) => {
      const channelBoxes = [];
      const vLabel = formatVariantLabel(variant.variant, variant.subVariant);
      const varAttr = escapeHtml(variant.variant || "");
      const subVarAttr = escapeHtml(variant.subVariant || "");
      const brandKey = escapeHtml(brand.brandKey || "");

      const stablePtr = resolveChannelPointer(brand, variant, "stable");
      if (stablePtr) {
        channelBoxes.push(`
          <button class="channel-box-btn stable" 
                  data-app-key="${app.appKey}" 
                  data-brand-key="${brandKey}" 
                  data-channel="stable" 
                  data-variant="${varAttr}"
                  data-sub-variant="${subVarAttr}"
                  type="button"
                  title="Open Stable builds for ${escapeHtml(vLabel)}">
            <div class="channel-box-top">
              <span class="channel-tag stable">Stable</span>
              <span class="channel-date">${formatDate(stablePtr.publishedAt)}</span>
            </div>
            <span class="channel-version">${escapeHtml(stablePtr.version)}</span>
            <span class="channel-build-num">${stablePtr.isArchiveFallback ? "Archive" : `Build ${escapeHtml(stablePtr.build)}`}</span>
          </button>
        `);
      }

      const betaPtr = resolveChannelPointer(brand, variant, "beta");
      if (betaPtr) {
        channelBoxes.push(`
          <button class="channel-box-btn beta" 
                  data-app-key="${app.appKey}" 
                  data-brand-key="${brandKey}" 
                  data-channel="beta" 
                  data-variant="${varAttr}"
                  data-sub-variant="${subVarAttr}"
                  type="button"
                  title="Open Beta builds for ${escapeHtml(vLabel)}">
            <div class="channel-box-top">
              <span class="channel-tag beta">Beta</span>
              <span class="channel-date">${formatDate(betaPtr.publishedAt)}</span>
            </div>
            <span class="channel-version">${escapeHtml(betaPtr.version)}</span>
            <span class="channel-build-num">${betaPtr.isArchiveFallback ? "Archive" : `Build ${escapeHtml(betaPtr.build)}`}</span>
          </button>
        `);
      }

      if (channelBoxes.length === 0) {
        channelBoxes.push(`
          <button class="channel-box-btn archive" 
                  data-app-key="${app.appKey}" 
                  data-brand-key="${brandKey}" 
                  data-channel="all" 
                  data-variant="${varAttr}"
                  data-sub-variant="${subVarAttr}"
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
            <span class="variant-name-chip">${escapeHtml(vLabel)}</span>
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
          <span class="patch-engine-badge">${escapeHtml(brand.brandName)}</span>
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

// Category Filter Buttons Generator (Exclusively from CONFIG.appCategories)
function renderCategoryFilterButtons() {
  if (!DOM.appFilterButtons) return;

  DOM.appFilterButtons.querySelectorAll(".category-filter-btn").forEach((btn) => btn.remove());

  Object.keys(CONFIG.appCategories).forEach((catKey) => {
    const button = document.createElement("button");
    button.className = "filter-btn category-filter-btn";
    button.dataset.filter = catKey;
    button.type = "button";
    button.textContent = catKey;
    DOM.appFilterButtons.appendChild(button);
  });
}

// Download Modal Controller
function openPatchModal(appKey, brandKey, preferredChannel = "stable", preferredVariant = null, preferredSubVariant = null) {
  activeModalAppKey = appKey;
  activeModalBrandKey = brandKey;

  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const brand = app ? (app.brands || []).find((item) => (item.brandKey) === activeModalBrandKey) : null;

  modalBuildFilter = preferredChannel === "beta" ? "beta" : "stable";

  if (brand && brand.variants && brand.variants.length > 0) {
    const validVariant = brand.variants.find((v) =>
      (v.variant || null) === (preferredVariant || null) &&
      (v.subVariant || null) === (preferredSubVariant || null)
    );
    if (validVariant) {
      modalSelectedVariant = validVariant.variant || null;
      modalSelectedSubVariant = validVariant.subVariant || null;
    } else {
      modalSelectedVariant = brand.variants[0].variant || null;
      modalSelectedSubVariant = brand.variants[0].subVariant || null;
    }
  } else {
    modalSelectedVariant = null;
    modalSelectedSubVariant = null;
  }

  renderOpenPatchModal();
  showModal(DOM.patchModal);
}

function renderOpenPatchModal() {
  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const brand = app ? (app.brands || []).find((item) => (item.brandKey) === activeModalBrandKey) : null;

  if (!app || !brand) {
    closePatchModal();
    return;
  }

  if (DOM.patchModalTitle) {
    DOM.patchModalTitle.textContent = `${app.appName} • ${brand.brandName}`;
  }

  updateModalFilterButtons(brand);

  if (DOM.patchModalBody) {
    DOM.patchModalBody.innerHTML = createPatchModalContent(app, brand, modalBuildFilter, modalSelectedVariant, modalSelectedSubVariant);
  }
}

function updateModalFilterButtons(brand) {
  const filterContainer = document.querySelector(".modal-filter-buttons");
  if (!filterContainer) return;

  filterContainer.innerHTML = "";

  let hasStable = false;
  let hasBeta = false;

  if (brand.builds) {
    for (const b of brand.builds) {
      if ((b.variant || null) !== modalSelectedVariant || (b.subVariant || null) !== modalSelectedSubVariant) {
        continue;
      }
      if (b.releaseType === "stable") hasStable = true;
      if (b.releaseType === "beta") hasBeta = true;
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

  if (!brand.variants || brand.variants.length === 0) return;

  // Extract distinct base variants
  const baseVariants = [];
  brand.variants.forEach((v) => {
    const varName = v.variant || null;
    if (!baseVariants.includes(varName)) {
      baseVariants.push(varName);
    }
  });

  // Pin Standard (null) at top, sort the rest alphabetically.
  baseVariants.sort((a, b) => {
    if (a === null) return -1;
    if (b === null) return 1;
    return a.localeCompare(b);
  });

  const shouldRenderVariantGroup = baseVariants.length > 1 || (baseVariants.length === 1 && baseVariants[0] !== null);

  if (shouldRenderVariantGroup) {
    const divider = document.createElement("span");
    divider.className = "filter-group-divider";
    filterContainer.appendChild(divider);

    const variantGroup = document.createElement("div");
    variantGroup.className = "filter-pill-group";

    baseVariants.forEach((varName) => {
      const isSelected = (modalSelectedVariant === varName);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `modal-filter-btn variant-pill-btn ${isSelected ? "active" : ""}`;
      btn.dataset.variant = varName || "";
      btn.textContent = varName || "Standard";
      variantGroup.appendChild(btn);
    });

    filterContainer.appendChild(variantGroup);
  }

  // Extract available sub-variants for current modalSelectedVariant
  const availableSubVariants = [];
  brand.variants.forEach((v) => {
    if ((v.variant || null) === modalSelectedVariant) {
      const sub = v.subVariant || null;
      if (!availableSubVariants.includes(sub)) {
        availableSubVariants.push(sub);
      }
    }
  });

  // Pin Standard (null) at top, sort the rest alphabetically.
  availableSubVariants.sort((a, b) => {
    if (a === null) return -1;
    if (b === null) return 1;
    return a.localeCompare(b);
  });

  const shouldRenderSubVariantGroup = availableSubVariants.length > 1 || (availableSubVariants.length === 1 && availableSubVariants[0] !== null);

  if (shouldRenderSubVariantGroup) {
    const divider = document.createElement("span");
    divider.className = "filter-group-divider";
    filterContainer.appendChild(divider);

    const subVariantGroup = document.createElement("div");
    subVariantGroup.className = "filter-pill-group";

    availableSubVariants.forEach((subName) => {
      const isSelected = (modalSelectedSubVariant === subName);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `modal-filter-btn subvariant-pill-btn ${isSelected ? "active" : ""}`;
      btn.dataset.subVariant = subName || "";
      btn.textContent = subName || "Standard";
      subVariantGroup.appendChild(btn);
    });

    filterContainer.appendChild(subVariantGroup);
  }
}

function createPatchModalContent(app, brand, buildFilter = "stable", selectedVariant = null, selectedSubVariant = null) {
  let builds = brand.builds || [];

  if (buildFilter === "stable") {
    builds = builds.filter((b) => b.releaseType === "stable");
  } else if (buildFilter === "beta") {
    builds = builds.filter((b) => b.releaseType === "beta");
  }

  builds = builds.filter((b) =>
    (b.variant || null) === selectedVariant &&
    (b.subVariant || null) === selectedSubVariant
  );

  if (builds.length === 0) {
    return '<div class="no-results" style="padding: 40px 20px;">No builds matching these filters.</div>';
  }

  builds.sort((a, b) => {
    if (a.isArchive !== b.isArchive) return a.isArchive ? 1 : -1;
    const pa = parseVersion(a.version);
    const pb = parseVersion(b.version);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      const diff = (pb[i] || 0) - (pa[i] || 0);
      if (diff !== 0) return diff;
    }
    const toTs = (v) => (typeof v === "number" ? v : Date.parse(v) || 0);
    return toTs(b.publishedAt) - toTs(a.publishedAt);
  });

  return builds
    .map((build, index) => createModalBuildMarkup(app, brand, build, index === 0))
    .join("");
}

function createModalBuildMarkup(app, brand, build, openByDefault = false) {
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
            <span class="asset-title">${escapeHtml(app.appName)}</span>
            <span class="asset-subtitle">${escapeHtml(build.version || "Latest")} • ${escapeHtml(getFileType(asset.name))}</span>
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

  const varAttr = escapeHtml(build.variant || "");
  const subVarAttr = escapeHtml(build.subVariant || "");
  const buildAttr = escapeHtml(build.build || "");
  const releaseIdAttr = escapeHtml(build.releaseId || build.build || "");
  const patchInfoBanner = `
    <div class="patch-info-actions">
      <button class="patch-applied-btn" 
              data-app-key="${app.appKey}" 
              data-brand-key="${brand.brandKey}" 
              data-build-id="${releaseIdAttr || buildAttr}" 
              data-build="${buildAttr}" 
              data-release-id="${releaseIdAttr}" 
              data-variant="${varAttr}" 
              data-sub-variant="${subVarAttr}" 
              type="button">View Applied Patches</button>
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

// Applied Patches Modal Controller
function openAppliedPatchesModal(appKey, brandKey, buildId, variant = null, subVariant = null, buildNum = null, releaseId = null) {
  const app = currentAppCatalog.find((item) => item.appKey === appKey);
  const brand = app ? (app.brands || []).find((item) => (item.brandKey) === brandKey) : null;
  if (!app || !brand) return;

  const normVariant = variant || null;
  const normSubVariant = subVariant || null;
  const bNum = buildNum ? String(buildNum) : null;
  const rId = releaseId ? String(releaseId) : (buildId ? String(buildId) : null);
  const bId = buildId ? String(buildId) : null;

  // 1. Exact match with variant, subVariant, buildNum, and releaseId
  let build = (brand.builds || []).find((b) => {
    if ((b.variant || null) !== normVariant) return false;
    if ((b.subVariant || null) !== normSubVariant) return false;
    if (bNum && String(b.build || "") !== bNum) return false;
    if (rId && String(b.releaseId || "") !== rId && String(b.build || "") !== rId) return false;
    return true;
  });

  // 2. Match with variant, subVariant, and bId
  if (!build && (normVariant !== null || normSubVariant !== null)) {
    build = (brand.builds || []).find((b) => {
      if ((b.variant || null) !== normVariant) return false;
      if ((b.subVariant || null) !== normSubVariant) return false;
      if (bId && String(b.releaseId || "") !== bId && String(b.build || "") !== bId) return false;
      return true;
    });
  }

  // 3. Match with variant and bId
  if (!build && normVariant !== null) {
    build = (brand.builds || []).find((b) => {
      if ((b.variant || null) !== normVariant) return false;
      if (bId && String(b.releaseId || "") !== bId && String(b.build || "") !== bId) return false;
      return true;
    });
  }

  // 4. Match with bId / bNum only
  if (!build) {
    build = (brand.builds || []).find((b) => {
      const idMatch = bId && (String(b.releaseId || "") === bId || String(b.build || "") === bId);
      const numMatch = bNum && String(b.build || "") === bNum;
      return idMatch || numMatch;
    });
  }

  if (!build) {
    build = brand.builds?.[0];
  }

  if (DOM.appliedPatchesTitle) {
    const variantLabel = formatVariantLabel(build?.variant, build?.subVariant);
    const variantSuffix = variantLabel && variantLabel !== "Standard" ? ` • ${variantLabel}` : "";
    DOM.appliedPatchesTitle.textContent = `${app.appName} (${brand.brandName})${variantSuffix}`;
  }

  let appliedPatches = getBuildAppliedPatches(build);
  const allPatches = getBuildPatchSources(build);
  const allChangelogs = getBuildChangelogs(build);

  const patchNamesList = Array.isArray(allPatches)
    ? allPatches
    : (typeof allPatches === "string" ? allPatches.split(/[,\s]+/).filter(Boolean) : []);

  const changelogList = Array.isArray(allChangelogs)
    ? allChangelogs
    : (typeof allChangelogs === "string" ? allChangelogs.split(/[,\s]+/).filter(Boolean) : (allChangelogs ? [allChangelogs] : []));

  if (DOM.appliedPatchesMeta) {
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
  filterAppliedPatchesList("");
  showModal(DOM.appliedPatchesModal);

  if (DOM.patchSearchInput) {
    DOM.patchSearchInput.value = "";
  }
}

// Resolve a build's applied-patches list from the deduped patchSetRef ->
// top-level patchSets table (schema v2, emitted by rebuild_catalog.py).
function getBuildAppliedPatches(build) {
  if (!build || !Number.isInteger(build.patchSetRef)) return null;
  const set = cachedPatchSets[build.patchSetRef];
  return Array.isArray(set) && set.length > 0 ? set : null;
}

// Resolve a build's changelogs / patchSources from the shared top-level tables
// (schema v2 dedup), falling back to any legacy inline array so the client
// renders correctly both before and after a catalog rebuild.
function _resolveSetRef(ref, table, inline) {
  if (Number.isInteger(ref)) {
    const set = table[ref];
    if (Array.isArray(set)) return set;
  }
  return Array.isArray(inline) ? inline : [];
}

function getBuildChangelogs(build) {
  if (!build) return [];
  return _resolveSetRef(build.changelogRef, cachedChangelogSets, build.changelogs);
}

function getBuildPatchSources(build) {
  if (!build) return [];
  return _resolveSetRef(build.patchSourceRef, cachedPatchSourceSets, build.patchSources);
}

function filterAppliedPatchesList(query) {
  if (!DOM.appliedPatchesBody) return;

  if (!activeAppliedPatchesList) {
    if (DOM.patchCountBadge) {
      DOM.patchCountBadge.textContent = "0 patches";
    }
    DOM.appliedPatchesBody.innerHTML = '<div class="no-results" style="padding: 36px 20px; text-align: center; color: var(--text-muted);">No applied patches data available for this build.</div>';
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
          <span>${escapeHtml(patchName.trim())}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function closeAppliedPatchesModal() {
  hideModal(DOM.appliedPatchesModal);
}

// Obtainium Modal Controller
function openObtainiumModal() {
  const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
  const brand = app ? (app.brands || []).find((item) => (item.brandKey) === activeModalBrandKey) : null;
  if (!app || !brand) return;

  if (DOM.obtainiumTitle) {
    DOM.obtainiumTitle.textContent = `Install ${app.appName} with Obtainium`;
  }

  if (DOM.obtainiumBody) {
    DOM.obtainiumBody.innerHTML = createObtainiumInstructions(app, brand);
  }

  showModal(DOM.obtainiumModal);
}

function createObtainiumInstructions(app, brand) {
  const repoUrl = `https://github.com/${CONFIG.owner}/${CONFIG.repo}`;
  const obtainiumLatestUrl = "https://github.com/ImranR98/Obtainium/releases/latest";

  const rawSlug = app?.appKey || normalizeForSearch(app?.appName || "app");
  const rawBrand = brand?.brandKey || normalizeForSearch(brand?.brandName || "brand");

  const activeVariant = brand?.variants?.find((v) =>
    (v.variant || null) === modalSelectedVariant &&
    (v.subVariant || null) === modalSelectedSubVariant
  ) || brand?.variants?.[0];

  let regexPattern = activeVariant?.apkFilter;
  if (!regexPattern) {
    regexPattern = `^${rawSlug}-${rawBrand}-v.*\\.apk$`;
  }

  const mainPackageId = activeVariant?.packageName || getAppPackageId(app, brand, modalSelectedVariant, modalSelectedSubVariant);
  const mainLabel = getObtainiumAppLabel(app?.appName || "App", brand?.brandName || "Brand", modalSelectedVariant, modalSelectedSubVariant);
  const mainAdditionalSettings = { apkFilterRegEx: regexPattern };
  if (modalBuildFilter === "beta") {
    mainAdditionalSettings.includePrereleases = true;
  }

  const mainConfig = {
    id: mainPackageId,
    name: mainLabel,
    author: CONFIG.owner,
    url: repoUrl,
    additionalSettings: JSON.stringify(mainAdditionalSettings),
  };
  const mainOneClickUrl = mainPackageId ? `https://apps.obtainium.imranr.dev/redirect?r=${encodeURIComponent("obtainium://app/" + JSON.stringify(mainConfig))}` : null;

  let step4Content = "";
  if (brand && brand.variants && brand.variants.length > 1) {
    // Pin Standard (null/null) at top, sort the rest alphabetically — same order as the variant pills.
    const orderedVariants = [...brand.variants].sort((a, b) => {
      const aIsStd = a.variant == null && a.subVariant == null;
      const bIsStd = b.variant == null && b.subVariant == null;
      if (aIsStd !== bIsStd) return aIsStd ? -1 : 1;
      const vc = (a.variant || "").localeCompare(b.variant || "");
      if (vc !== 0) return vc;
      return (a.subVariant || "").localeCompare(b.subVariant || "");
    });
    const examples = orderedVariants.map((v) => {
      const vRegex = v.apkFilter || `^${rawSlug}-${rawBrand}-v.*\\.apk$`;
      const vLabel = getObtainiumAppLabel(app.appName, brand.brandName, v.variant, v.subVariant);
      const vPackageId = v.packageName || getAppPackageId(app, brand, v.variant, v.subVariant);

      const vAdditionalSettings = { apkFilterRegEx: vRegex };
      if (modalBuildFilter === "beta") {
        vAdditionalSettings.includePrereleases = true;
      }

      const vConfig = {
        id: vPackageId,
        name: vLabel,
        author: CONFIG.owner,
        url: repoUrl,
        additionalSettings: JSON.stringify(vAdditionalSettings),
      };
      const vOneClickUrl = vPackageId ? `https://apps.obtainium.imranr.dev/redirect?r=${encodeURIComponent("obtainium://app/" + JSON.stringify(vConfig))}` : null;

      return `
        <div style="margin-top: 8px;">
          <div style="font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px; display: flex; flex-direction: column;">
            <span>${escapeHtml(app.appName)} • ${escapeHtml(brand.brandName)}${v.variant ? ` • ${escapeHtml(v.variant)}` : ''}${v.subVariant ? ` • ${escapeHtml(v.subVariant)}` : (!v.variant ? ' • Standard' : '')}</span>
            ${vPackageId ? `<span style="font-family: monospace; opacity: 0.8; font-weight: normal; margin-top: 2px; cursor: pointer; width: fit-content; word-break: break-all;" onclick="copyToClipboard('${escapeHtml(vPackageId)}', 'Package ID copied!')" title="Click to copy Package ID">${escapeHtml(vPackageId)}</span>` : ''}
          </div>
          <div class="instruction-code">
            <code>${escapeHtml(vRegex)}</code>
            ${vOneClickUrl ? `<a href="${vOneClickUrl}" class="obtainium-add-btn" target="_blank" rel="noopener noreferrer">Add to Obtainium</a>` : ''}
            <button class="copy-btn" onclick="copyToClipboard('${escapeHtml(vRegex)}', 'Regex copied!')" type="button">Copy</button>
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
    step4Content = `
      <div style="margin-top: 6px;">
        ${mainPackageId ? `
        <div style="font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px; display: flex; flex-direction: column;">
          <span style="font-family: monospace; opacity: 0.8; font-weight: normal; cursor: pointer; width: fit-content; word-break: break-all;" onclick="copyToClipboard('${escapeHtml(mainPackageId)}', 'Package ID copied!')" title="Click to copy Package ID">${escapeHtml(mainPackageId)}</span>
        </div>
        ` : ''}
        <div class="instruction-code">
          <code>${escapeHtml(regexPattern)}</code>
          ${mainOneClickUrl ? `<a href="${mainOneClickUrl}" class="obtainium-add-btn" target="_blank" rel="noopener noreferrer">Add to Obtainium</a>` : ''}
          <button class="copy-btn" onclick="copyToClipboard('${escapeHtml(regexPattern)}', 'Regex copied!')" type="button">Copy</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="obtainium-instructions">
    <div style="margin-bottom: 12px;">
      Ensure that you have <strong>Obtainium</strong> installed (available on <a href="${obtainiumLatestUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>). Use the <strong>Add to Obtainium</strong> button for a quick setup if it's available, or follow the steps below to add the app manually:
    </div>
      <ol>
        <li>Open Obtainium on your device.</li>
        <li>Tap <strong>Add App</strong>.</li>
        <li>In the <strong>App Source URL</strong> box, enter:
          <div class="instruction-code code-with-copy">
            <code>${repoUrl}</code>
            <button class="copy-btn" onclick="copyToClipboard('${repoUrl}', 'Repository URL copied!')" type="button">Copy</button>
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

function getAppPackageId(app, brand, variant, subVariant) {
  if (!app) return "";
  const v = brand?.variants?.find((item) => (item.variant || null) === (variant || null) && (item.subVariant || null) === (subVariant || null));
  if (v?.packageName) return v.packageName;
  const b = brand?.builds?.find((item) => (item.variant || null) === (variant || null) && (item.subVariant || null) === (subVariant || null));
  if (b?.packageName) return b.packageName;
  return brand?.variants?.[0]?.packageName || "";
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

// Architecture & Asset Helpers
function groupAssetsByArchitecture(assets) {
  const groups = { arm64: [], arm: [], all: [], x86: [], other: [] };
  assets.forEach((asset) => {
    const arch = asset.arch && groups[asset.arch] ? asset.arch : "other";
    groups[arch].push(asset);
  });

  const filtered = {};
  ["arm64", "arm", "all", "x86", "other"].forEach((arch) => {
    if (groups[arch].length > 0) {
      groups[arch].sort((a, b) => {
        const aIsApk = a.name.toLowerCase().endsWith(".apk") ? 0 : 1;
        const bIsApk = b.name.toLowerCase().endsWith(".apk") ? 0 : 1;
        return aIsApk - bIsApk;
      });
      filtered[arch] = groups[arch];
    }
  });
  return filtered;
}

function getFileType(filename) {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".apk")) return "APK";
  if (lower.endsWith(".zip")) return "Module";
  return "File";
}

function capitalizeArch(arch) {
  const map = {
    arm64: "ARM64 (v8a)",
    arm: "ARM32 (v7a)",
    all: "Universal",
    x86: "x86 / x64",
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

function parseVersion(version) {
  return (version || "0").split(".").map(Number);
}




function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function updateLastUpdateTimestamp(updatedAt) {
  let latestTime = 0;
  if (updatedAt) {
    latestTime = new Date(updatedAt).getTime();
  } else if (cachedFullCatalog && cachedFullCatalog.length > 0) {
    latestTime = cachedFullCatalog.reduce((max, app) => {
      const t = typeof app.latestPublishedAt === "number" ? app.latestPublishedAt : new Date(app.latestPublishedAt).getTime();
      return t > max ? t : max;
    }, 0);
  }

  if (latestTime === 0) {
    setPillState("success", "Up to date");
    return;
  }

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
