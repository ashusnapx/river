/**
 * Contact sheets of the glossary doodles and Boondi, for a visual check.
 *   npx tsx scripts/preview-doodles.tsx
 * One sheet per group at 2×, one sheet of everything at real size (1×), one of Boondi's moods.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "/private/tmp/claude-501/-Users-ashutoshkumar-river/be39295a-8e39-4d39-8b1c-7d75b1fb065c/scratchpad/doodle-previews";
const FONT_DIR = join(OUT, "..", "fonts");
// fontconfig reads this lazily on first text render, so set it before sharp draws anything
if (existsSync(join(FONT_DIR, "fonts.conf"))) process.env.FONTCONFIG_FILE = join(FONT_DIR, "fonts.conf");

async function main() {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const sharp = (await import("sharp")).default;
  const { Doodle } = await import("../src/components/doodles");
  const { Boondi, Drop } = await import("../src/components/doodles/Boondi");
  const groups: Record<string, object> = {
    parts: (await import("../src/components/doodles/parts")).PARTS,
    behaviour: (await import("../src/components/doodles/behaviour")).BEHAVIOUR,
    shapes: (await import("../src/components/doodles/shapes")).SHAPES,
    land: (await import("../src/components/doodles/land")).LAND,
    patterns: (await import("../src/components/doodles/patterns")).PATTERNS,
    people: (await import("../src/components/doodles/people")).PEOPLE,
  };

  const css = readFileSync(join(__dirname, "../src/app/globals.css"), "utf8");
  const colors: Record<string, string> = Object.fromEntries([...css.matchAll(/--color-([a-z-]+):\s*(#[0-9a-f]{3,8})/gi)].map((m) => [m[1], m[2]]));
  const fonts = [
    `.font-pen{font-family:Caveat,Noteworthy,cursive}`,
    `.font-hand{font-family:Kalam,'Chalkboard SE',cursive}`,
    `.font-pencil{font-family:'Reenie Beanie','Bradley Hand',cursive}`,
    `.font-marker{font-family:'Permanent Marker','Marker Felt',cursive}`,
  ].join("");
  const hex = (svg: string) => {
    const missing = [...svg.matchAll(/var\(--color-([a-z-]+)\)/g)].map((m) => m[1]).filter((k) => !colors[k]);
    if (missing.length) throw new Error(`unknown colour token(s) ${[...new Set(missing)].join(", ")}`);
    return svg.replace(/var\(--color-([a-z-]+)\)/g, (_, k: string) => colors[k]);
  };
  const inner = (el: ReturnType<typeof createElement>) => renderToStaticMarkup(el).replace(/^<svg[^>]*>|<\/svg>$/g, "");

  async function sheet(name: string, cells: { label: string; body: string; vb: string }[], cw: number, ch: number, cols: number, density = 72) {
    const pad = 14;
    const lh = 22;
    const W = cols * (cw + pad) + pad;
    const H = Math.ceil(cells.length / cols) * (ch + lh + pad) + pad;
    const parts = cells.map((c, i) => {
      const x = pad + (i % cols) * (cw + pad);
      const y = pad + Math.floor(i / cols) * (ch + lh + pad);
      return `<rect x="${x}" y="${y}" width="${cw}" height="${ch}" fill="none" stroke="#e4d9bb"/><svg x="${x}" y="${y}" width="${cw}" height="${ch}" viewBox="${c.vb}">${c.body}</svg><text x="${x + cw / 2}" y="${y + ch + 16}" font-family="Helvetica" font-size="13" text-anchor="middle" fill="#666">${c.label}</text>`;
    });
    const svg = hex(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><style>${fonts}</style><rect width="${W}" height="${H}" fill="var(--color-paper)"/>${parts.join("")}</svg>`);
    writeFileSync(join(OUT, `${name}.svg`), svg);
    await sharp(Buffer.from(svg), { density }).png().toFile(join(OUT, `${name}.png`));
    console.log(`${name}.png`);
  }

  mkdirSync(OUT, { recursive: true });
  const only = process.argv.slice(2);
  const all: { label: string; body: string; vb: string }[] = [];
  for (const [g, map] of Object.entries(groups)) {
    const cells = Object.keys(map).map((id) => ({ label: id, vb: "0 0 160 100", body: inner(createElement(Doodle, { id: id as never })) }));
    all.push(...cells);
    if (!only.length || only.includes(g)) await sheet(g, cells, 320, 200, 4);
  }
  // real size on a 2× (retina) screen
  if (!only.length || only.includes("all")) await sheet("all-1x", all, 160, 100, 8, 144);
  if (!only.length || only.includes("boondi")) {
    const moods = ["happy", "wink", "wow", "think"] as const;
    const cells = [28, 56, 120].flatMap((size) =>
      moods.map((mood) => ({ label: `${mood} ${size}px`, vb: "0 0 140 168", body: renderToStaticMarkup(createElement(Boondi, { size, mood })) })),
    );
    cells.push({ label: "sleep (doodles only)", vb: "0 0 40 48", body: inner(createElement("svg", {}, createElement(Drop, { x: 20, y: 31, r: 15.5, mood: "sleep" }))) });
    await sheet("boondi", cells, 140, 168, 4, 144);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
