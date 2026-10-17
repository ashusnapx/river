/**
 * Render every hand-drawn sketch to SVG + PNG for a visual check.
 *   npx tsx scripts/preview-sketches.tsx [sketch-id ...]
 * Colours: var(--color-…) → hex from globals.css. Fonts: the real Google fonts if FONT_DIR holds them
 * (with a fontconfig file), else macOS handwriting fonts as a fallback.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "/private/tmp/claude-501/-Users-ashutoshkumar-river/be39295a-8e39-4d39-8b1c-7d75b1fb065c/scratchpad/sketch-previews";
const FONT_DIR = join(OUT, "..", "fonts");

// fontconfig reads this lazily on first text render, so set it before sharp draws anything
if (existsSync(join(FONT_DIR, "fonts.conf"))) process.env.FONTCONFIG_FILE = join(FONT_DIR, "fonts.conf");

async function main() {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const sharp = (await import("sharp")).default;
  const { Sketch, SKETCH_TITLES } = await import("../src/components/sketches");

  const css = readFileSync(join(__dirname, "../src/app/globals.css"), "utf8");
  const colors: Record<string, string> = Object.fromEntries([...css.matchAll(/--color-([a-z-]+):\s*(#[0-9a-f]{3,8})/gi)].map((m) => [m[1], m[2]]));
  const fonts = [
    `.font-pen{font-family:Caveat,Noteworthy,cursive}`,
    `.font-hand{font-family:Kalam,'Chalkboard SE',cursive}`,
    `.font-pencil{font-family:'Reenie Beanie','Bradley Hand',cursive}`,
    `.font-marker{font-family:'Permanent Marker','Marker Felt',cursive}`,
  ].join("");

  mkdirSync(OUT, { recursive: true });
  const only = process.argv.slice(2);
  const ids = Object.keys(SKETCH_TITLES).filter((id) => !only.length || only.includes(id)) as (keyof typeof SKETCH_TITLES)[];
  for (const id of ids) {
    let svg = renderToStaticMarkup(createElement(Sketch, { id }));
    const missing = [...svg.matchAll(/var\(--color-([a-z-]+)\)/g)].map((m) => m[1]).filter((k) => !colors[k]);
    if (missing.length) throw new Error(`${id}: unknown colour token(s) ${[...new Set(missing)].join(", ")}`);
    svg = svg
      .replace(/var\(--color-([a-z-]+)\)/g, (_, k: string) => colors[k])
      .replace(/^<svg /, `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="920" `)
      .replace(/^(<svg[^>]*>)/, `$1<style>${fonts}</style><rect width="800" height="460" fill="${colors.paper}"/>`);
    writeFileSync(join(OUT, `${id}.svg`), svg);
    await sharp(Buffer.from(svg)).png().toFile(join(OUT, `${id}.png`));
    console.log(`${id}.png`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
