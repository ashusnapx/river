/** Absolute site URL for link previews: set NEXT_PUBLIC_SITE_URL, or Vercel provides its production URL at build. */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const SITE = {
  url: siteUrl,
  name: "Dhara",
  hindi: "धारा",
  tagline: "rivers, reasoned",
  description:
    "Learn every UPSC river topic through reasons, not rote: step-by-step notebook lessons, a hand-drawn atlas, tributary spines, every river PYQ since 2011 explained, and spaced revision. Free, no login.",
  /** shown wherever freshness is mentioned */
  freshness: "updated with the latest papers and current affairs",
  author: {
    name: "Ashutosh Kumar",
    github: "https://github.com/ashusnapx",
    handle: "ashusnapx",
    site: "https://ashusnapx.vercel.app/",
    /** self-hosted copy of the GitHub avatar: no third-party request at runtime */
    photo: "/ashusnapx.jpg",
  },
};

/** The 22 languages of the Eighth Schedule of the Constitution of India, each in its own script. */
export const SCHEDULED_LANGUAGES: { name: string; native: string; lang: string; rtl?: boolean; font?: "ol-chiki" | "meetei" }[] = [
  { name: "Assamese", native: "অসমীয়া", lang: "as" },
  { name: "Bengali", native: "বাংলা", lang: "bn" },
  { name: "Bodo", native: "बर'", lang: "brx" },
  { name: "Dogri", native: "डोगरी", lang: "doi" },
  { name: "Gujarati", native: "ગુજરાતી", lang: "gu" },
  { name: "Hindi", native: "हिन्दी", lang: "hi" },
  { name: "Kannada", native: "ಕನ್ನಡ", lang: "kn" },
  { name: "Kashmiri", native: "کٲشُر", lang: "ks", rtl: true },
  { name: "Konkani", native: "कोंकणी", lang: "gom" },
  { name: "Maithili", native: "मैथिली", lang: "mai" },
  { name: "Malayalam", native: "മലയാളം", lang: "ml" },
  { name: "Manipuri", native: "ꯃꯩꯇꯩꯂꯣꯟ", lang: "mni", font: "meetei" },
  { name: "Marathi", native: "मराठी", lang: "mr" },
  { name: "Nepali", native: "नेपाली", lang: "ne" },
  { name: "Odia", native: "ଓଡ଼ିଆ", lang: "or" },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ", lang: "pa" },
  { name: "Sanskrit", native: "संस्कृतम्", lang: "sa" },
  { name: "Santali", native: "ᱥᱟᱱᱛᱟᱲᱤ", lang: "sat", font: "ol-chiki" },
  { name: "Sindhi", native: "سنڌي", lang: "sd", rtl: true },
  { name: "Tamil", native: "தமிழ்", lang: "ta" },
  { name: "Telugu", native: "తెలుగు", lang: "te" },
  { name: "Urdu", native: "اردو", lang: "ur", rtl: true },
];

export const NAV = [
  { href: "/learn", label: "Learn", hint: "step by step" },
  { href: "/atlas", label: "Atlas", hint: "the map" },
  { href: "/rivers", label: "Rivers", hint: "every river" },
  { href: "/pyq", label: "PYQs", hint: "since 2011" },
  { href: "/confusions", label: "Confusions", hint: "clinic" },
  { href: "/revise", label: "Revise", hint: "flashcards" },
  { href: "/glossary", label: "Glossary", hint: "every word" },
] as const;
