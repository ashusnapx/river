import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Caveat, Kalam, Noto_Sans_Meetei_Mayek, Noto_Sans_Ol_Chiki, Permanent_Marker, Reenie_Beanie } from "next/font/google";
import { NavTabs } from "@/components/chrome/NavTabs";
import { LogoMark } from "@/components/chrome/LogoMark";
import { SCHEDULED_LANGUAGES, SITE } from "@/lib/site";
import { indiaMap } from "@/data/map";
import { GithubLogoIcon, GlobeHemisphereEastIcon, TranslateIcon } from "@phosphor-icons/react/ssr";
import { ink } from "@/components/ink/icons";
import "./globals.css";

const kalam = Kalam({ variable: "--font-kalam", weight: ["300", "400", "700"], subsets: ["latin", "devanagari"] });
const caveat = Caveat({ variable: "--font-caveat", weight: "variable", subsets: ["latin"] });
const marker = Permanent_Marker({ variable: "--font-marker-face", weight: "400", subsets: ["latin"] });
const reenie = Reenie_Beanie({ variable: "--font-reenie", weight: "400", subsets: ["latin"] });
// scripts many phones lack: self-hosted so Santali and Manipuri never render as empty boxes
const olChiki = Noto_Sans_Ol_Chiki({ weight: "400", subsets: ["ol-chiki"], preload: false });
const meetei = Noto_Sans_Meetei_Mayek({ weight: "400", subsets: ["meetei-mayek"], preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline} · UPSC rivers without rote`, template: `%s · ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author.name, url: SITE.author.site }],
  creator: SITE.author.name,
  keywords: ["UPSC", "rivers", "Indian geography", "drainage system", "PYQ", "Prelims", "Mains", "NCERT", "tributaries", "maps"],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    title: `${SITE.name} — UPSC rivers, every fact with its reason`,
    description: SITE.description,
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: `${SITE.name}: UPSC rivers, every fact with its reason` }],
  },
  twitter: { card: "summary_large_image", title: `${SITE.name} — UPSC rivers, every fact with its reason`, description: SITE.description, images: ["/og/home.png"] },
};

export const viewport: Viewport = { themeColor: "#fbf6e8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${kalam.variable} ${caveat.variable} ${marker.variable} ${reenie.variable}`}>
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:bg-paper focus:px-3">
          Skip to content
        </a>
        <header className="sticky top-0 z-30 border-b border-ink/25 bg-paper/95 backdrop-blur-[2px]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-x-6 gap-y-1 px-4 pt-2">
            <Link href="/" className="group flex items-center gap-2 pb-1.5" aria-label={`${SITE.name} home`}>
              <LogoMark size={36} className="shrink-0 transition-transform group-hover:animate-wiggle" />
              <span className="font-marker text-[1.9rem] leading-none text-blue-ink transition-transform group-hover:-rotate-2">{SITE.name}</span>
              <span className="font-hand text-lg text-red-ink">{SITE.hindi}</span>
              <span className="hidden font-pencil text-2xl text-pencil xl:inline">{SITE.tagline}</span>
            </Link>
            <NavTabs />
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="mt-24 border-t border-ink/15 bg-paper-deep/50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            {/* brand · author */}
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <LogoMark size={40} />
                <div>
                  <p className="font-marker text-2xl leading-7 text-blue-ink">
                    {SITE.name} <span className="font-hand text-lg text-red-ink">{SITE.hindi}</span>
                  </p>
                  <p className="font-hand text-[0.95rem] leading-6 text-ink/70">Every river fact with its reason. Free, no login.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href={SITE.author.site} target="_blank" rel="noopener noreferrer" aria-label={`${SITE.author.name}'s portfolio (opens in a new tab)`} className="relative block shrink-0 -rotate-3 bg-white p-1.5 pb-6 shadow-[0_8px_18px_-8px_rgb(60_40_0/0.5)] transition-transform hover:rotate-0">
                  <span aria-hidden className="tape -top-3 left-1/2 w-14 -translate-x-1/2 rotate-[4deg]" />
                  {/* eslint-disable-next-line @next/next/no-img-element -- static export, tiny local file */}
                  <img src={SITE.author.photo} alt={`Photo of ${SITE.author.name}`} width={96} height={96} className="h-24 w-24 object-cover" />
                  <span aria-hidden className="absolute inset-x-0 bottom-0.5 text-center font-pencil text-lg leading-5 text-pencil">that&apos;s me</span>
                </a>
                <div className="leading-6">
                  <p className="font-pencil text-xl text-pencil">made by</p>
                  <p className="flex items-center gap-3">
                    <a href={SITE.author.site} target="_blank" rel="noopener noreferrer" className="font-pen text-2xl font-bold text-blue-ink hover:underline">
                      {SITE.author.name}
                    </a>
                    <a href={SITE.author.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="text-ink/60 hover:text-ink">
                      <GithubLogoIcon {...ink} size="1.3em" />
                    </a>
                    <a href={SITE.author.site} target="_blank" rel="noopener noreferrer" aria-label="Portfolio (opens in a new tab)" className="text-ink/60 hover:text-ink">
                      <GlobeHemisphereEastIcon {...ink} size="1.3em" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* languages */}
            <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-dashed border-ink/15 pt-5">
              <span className="flex items-center gap-1.5 font-pen text-lg text-blue-ink">
                <TranslateIcon {...ink} />
                coming soon in all {SCHEDULED_LANGUAGES.length} scheduled languages
              </span>
              <ul className="flex flex-wrap gap-x-3 text-[0.95rem] leading-6 text-ink/55" aria-label="The 22 scheduled languages">
                {SCHEDULED_LANGUAGES.map((l) => (
                  <li
                    key={l.lang}
                    lang={l.lang}
                    dir={l.rtl ? "rtl" : "ltr"}
                    title={l.name}
                    className={l.font === "ol-chiki" ? olChiki.className : l.font === "meetei" ? meetei.className : undefined}
                  >
                    {l.native}
                  </li>
                ))}
              </ul>
            </div>

            {/* fine print */}
            <p className="mt-5 text-[0.8rem] leading-5 text-ink/50">
              Sources: NCERT (Classes 6–12), UPSC papers, Jal Shakti, CWC, NWDA, NMCG, India-WRIS, PIB, MEA; {SITE.freshness}. Maps are schematic and for learning only;
              India&apos;s external boundaries follow India&apos;s official position. {indiaMap.credits}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
