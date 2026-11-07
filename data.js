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
    updated: null,
    top: [
      { id: "spotify", name: "Spotify",       url: null },
      { id: "apple",   name: "Apple Music",   url: null },
      { id: "youtube", name: "YouTube Music", url: null },
      { id: "amazon",  name: "Amazon Music",  url: null },
    ],
    more: [
      { id: "tidal",    name: "TIDAL",         url: null },
      { id: "deezer",   name: "Deezer",        url: null },
      { id: "pandora",  name: "Pandora",       url: null },
      { id: "itunes",   name: "iTunes Store",  url: null },
      { id: "iheart",   name: "iHeartRadio",   url: null },
      { id: "tiktok",   name: "TikTok",        url: null },
      { id: "instagram",name: "Instagram / Facebook", url: null },
      { id: "shazam",   name: "Shazam",        url: null },
      { id: "napster",  name: "Napster",       url: null },
      { id: "anghami",  name: "Anghami",       url: null },
      { id: "boomplay", name: "Boomplay",      url: null },
      { id: "kkbox",    name: "KKBOX",         url: null },
      { id: "audiomack",name: "Audiomack",     url: null },
      { id: "hyperfollow", name: "CD Baby HyperFollow", url: null },
    ],
  },
  shop: {
    home: null, // Square Online store URL once it is live (shop.dumper.life)
    price: "$1,000",
    code: "FANCLUB96",
  },
  merch: [
    { id: "rather-be-at-the-party", name: "Rather Be At The Party",       url: null },
    { id: "jgo-flushed-the-beat",   name: "JGO Flushed The Beat",          url: null },
    { id: "restarted-our-night",    name: "Just Restarted Our Night",      url: null },
    { id: "came-in-late",           name: "Came In Late!",                 url: null },
    { id: "in-my-nose-its-the-80s", name: "It's 2026 But In My Nose It's The 80s", url: null },
  ],
};
