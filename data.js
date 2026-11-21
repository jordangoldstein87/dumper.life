// Everything the page says that changes: streaming links (the morning tracker rewrites LINKS),
// merch and shop URLs. Keep the shape; the page reads nothing else.
window.DP = {
  title: "Dump Patrol — The Mixtape",
  tracks: [
    { n: 1, name: "We Back",      file: "audio/1. We Back.m4a",      len: "2:39" },
    { n: 2, name: "Knapp in 15",  file: "audio/2. Knapp in 15.m4a",  len: "2:26" },
    { n: 3, name: "Situate",      file: "audio/3. Situate.m4a",      len: "3:48" },
    { n: 4, name: "Valley",       file: "audio/4. Valley.m4a",       len: "3:49" },
  ],
  // url: null until CD Baby's delivery shows up on that service; the tracker fills these in.
  LINKS: {
    updated: "Nov 20",
    top: [
      { id: "spotify", name: "Spotify",       url: "https://open.spotify.com/album/1MbVuKO2ZLIZJEwAwn8WnH" },
      { id: "apple",   name: "Apple Music",   url: "https://music.apple.com/us/album/the-mixtape-ep/6835745509" },
      { id: "youtube", name: "YouTube", url: "https://www.youtube.com/watch?v=McCyzLlyjUU&list=OLAK5uy_lAMcWaENEACmq8fiU3eZaJttpBScaHyoM" },
      { id: "amazon",  name: "Amazon Music",  url: null },
    ],
    more: [
      { id: "tidal",    name: "TIDAL",         url: null },
      { id: "deezer",   name: "Deezer",        url: "https://www.deezer.com/album/1148752851" },
      { id: "pandora",  name: "Pandora",       url: null },
      { id: "itunes",   name: "iTunes Store",  url: "https://itunes.apple.com/us/album/the-mixtape-ep/6835745509" },
      { id: "iheart",   name: "iHeartRadio",   url: null },
      { id: "tiktok",   name: "TikTok",        url: null, inApp: true },
      { id: "instagram",name: "Instagram / Facebook", url: null, inApp: true },
      { id: "shazam",   name: "Shazam",        url: null },
      { id: "napster",  name: "Napster",       url: null },
      { id: "anghami",  name: "Anghami",       url: null },
      { id: "boomplay", name: "Boomplay",      url: null },
      { id: "kkbox",    name: "KKBOX",         url: null },
      { id: "audiomack",name: "Audiomack",     url: null },
      { id: "hyperfollow", name: "CD Baby HyperFollow", url: null },
    ],
  },
  // Google Form "The Dumpers" (owned by Jordan): every sign-up lands in its Responses tab.
  signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfLNm5oIRVKDzbI__FSvRso3w0UpQZ8PLfPFC_A4H5BRCkg3A/formResponse",
  signupField: "entry.1049822494",
  shop: {
    home: null, // Square Online store URL once it is live (shop.dumper.life)
    price: "$1,000",
    code: "DUMPER96",
  },
  merch: [
    { id: "octagon",                name: "Octagon Tee",       url: "https://square.link/u/c0IYd0hZ" },
    { id: "jgo-flushed-the-beat",   name: "Flushed The Beat Tee",          url: "https://square.link/u/3N7xS4dR" },
    { id: "restarted-our-night",    name: "Restarted Tee",      url: "https://square.link/u/QY9dNAEk" },
    { id: "came-in-late",           name: "Came In Late Tee",                 url: "https://square.link/u/mZRnWiel" },
    { id: "in-my-nose-its-the-80s", name: "80s Nose Tee", url: "https://square.link/u/UYJyC2Sb" },
  ],
};
