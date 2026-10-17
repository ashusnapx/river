import { card } from "@/og/card";
import { chapters, getChapter, getRiver, rivers, SYSTEMS } from "@/content";
import { plain } from "@/lib/markup";

// Real .png files in the static export, so every host serves them as images (link previews need that).
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { file: "home.png" },
    ...rivers.map((r) => ({ file: `river-${r.id}.png` })),
    ...chapters.map((c) => ({ file: `chapter-${c.id}.png` })),
  ];
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const name = (await params).file.replace(/\.png$/, "");

  if (name.startsWith("river-")) {
    const r = getRiver(name.slice(6))!;
    return card({
      kicker: SYSTEMS.find((s) => s.id === r.system)?.name ?? "River",
      title: r.name,
      hindi: r.hindi,
      line: plain(r.oneLiner),
      rivers: [r.id],
      world: r.system === "world",
    });
  }

  if (name.startsWith("chapter-")) {
    const c = getChapter(name.slice(8))!;
    const focus = c.steps.flatMap((s) => s.blocks.flatMap((b) => (b.type === "map" ? b.focus : []))).slice(0, 6);
    return card({
      kicker: `Chapter ${String(c.number).padStart(2, "0")} · ${c.minutes} min`,
      title: c.title,
      hindi: c.hindiTitle,
      line: c.subtitle,
      rivers: focus,
      world: c.system === "world",
    });
  }

  return card({
    kicker: "UPSC · Prelims + Mains",
    title: "Rivers aren't a list. They're a story with reasons.",
    line: "Step-by-step notebook lessons, a hand-drawn atlas, every river PYQ since 2011 explained, and spaced revision.",
    rivers: ["indus", "ganga", "brahmaputra"],
  });
}
