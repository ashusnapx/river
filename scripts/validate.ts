/**
 * Content validator. Usage:
 *   npx tsx scripts/validate.ts                 # every content file
 *   npx tsx scripts/validate.ts src/content/rivers/ganga.ts src/content/chapters/ganga.ts
 */
import { readdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { REGISTRY } from "../src/content/registry";
import type { Chapter, Confusion, Pyq, River, Question, Block, SketchId } from "../src/content/types";

const SKETCHES: SketchId[] = [
  "slope-of-india", "bank-rule", "rift-valley", "delta-vs-estuary", "antecedent", "regime",
  "meander-oxbow", "braided", "drainage-patterns", "panch-prayag", "indus-treaty", "great-bend",
  "water-divide", "monsoon-kaveri",
];
const MARKS: [string, string][] = [["**", "heavy pen"], ["==", "highlighter"], ["__", "red underline"], ["!!", "red pen"], ["++", "green pen"]];

const errors: string[] = [];
const warn: string[] = [];
const err = (where: string, msg: string) => errors.push(`${where}: ${msg}`);

function checkMarkup(where: string, s: string | undefined) {
  if (!s) return;
  for (const [m, label] of MARKS) {
    const n = s.split(m).length - 1;
    if (n % 2) err(where, `unbalanced ${label} mark "${m}" in: ${s.slice(0, 80)}…`);
  }
  for (const link of s.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    if (!REGISTRY[link[1]]) err(where, `link to unknown river id "${link[1]}"`);
  }
  if ((s.match(/\[\[/g) || []).length !== (s.match(/\]\]/g) || []).length) err(where, "unbalanced [[ ]]");
}

function checkQuestion(where: string, q: Question) {
  if (!q.id) err(where, "question without id");
  if (q.options.length < 2) err(where, "question needs ≥2 options");
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) err(where, `answer index ${q.answer} out of range`);
  [q.prompt, q.explain, q.trap, ...q.options].forEach((s) => checkMarkup(where, s));
}

function checkBlock(where: string, b: Block) {
  switch (b.type) {
    case "say": return checkMarkup(where, b.text);
    case "why": checkMarkup(where, b.q); return checkMarkup(where, b.a);
    case "law": return checkMarkup(where, b.text);
    case "trap": [b.wrong, b.right, b.why].forEach((s) => checkMarkup(where, s)); return;
    case "remember": checkMarkup(where, b.hook); return checkMarkup(where, b.logic);
    case "sketch": if (!SKETCHES.includes(b.id)) err(where, `unknown sketch "${b.id}"`); return;
    case "map": b.focus.forEach((id) => !REGISTRY[id] && err(where, `map focus unknown id "${id}"`)); return;
    case "spine": if (!REGISTRY[b.river]) err(where, `spine unknown id "${b.river}"`); return;
    case "compare":
      b.rows.forEach((r, i) => { if (r.length !== b.columns.length) err(where, `compare row ${i} has ${r.length} cells, expected ${b.columns.length}`); r.forEach((c) => checkMarkup(where, c)); });
      return;
    case "check": return checkQuestion(where, b.q);
    default: err(where, `unknown block type ${(b as { type: string }).type}`);
  }
}

const rivers = new Map<string, River>();
const ids = new Set<string>();
const uniq = (where: string, id: string) => { if (ids.has(id)) err(where, `duplicate id "${id}"`); ids.add(id); };

function checkRiver(file: string, r: River) {
  const w = `${file} › river ${r.id}`;
  if (!REGISTRY[r.id]) err(w, "id not in registry");
  else if (REGISTRY[r.id].system !== r.system) err(w, `system "${r.system}" ≠ registry "${REGISTRY[r.id].system}"`);
  if (rivers.has(r.id)) err(w, "river defined twice");
  rivers.set(r.id, r);
  if (r.parent && !REGISTRY[r.parent]) err(w, `parent "${r.parent}" not in registry`);
  if (r.parent && !r.bank && r.system !== "world") warn.push(`${w}: has parent but no bank`);
  if (r.facts.length === 0) err(w, "no facts");
  if (r.personality.length < 2) err(w, "needs ≥2 personality chains");
  [r.oneLiner, r.source.examNote, ...r.personality].forEach((s) => checkMarkup(w, s));
  r.journey.forEach((j) => { checkMarkup(w, j.text); checkMarkup(w, j.why); });
  r.places.forEach((p) => { checkMarkup(w, p.note); checkMarkup(w, p.why); });
  r.facts.forEach((f) => { uniq(w, `fact:${f.id}`); [f.q, f.a, f.because].forEach((s) => checkMarkup(`${w} › ${f.id}`, s)); if (!f.because || f.because.length < 15) err(`${w} › ${f.id}`, "because is missing or too thin"); });
  r.traps?.forEach((t) => [t.wrong, t.right, t.why].forEach((s) => checkMarkup(w, s)));
  r.remember?.forEach((m) => { checkMarkup(w, m.hook); checkMarkup(w, m.logic); });
  r.news?.forEach((n) => { checkMarkup(w, n.text); checkMarkup(w, n.why); if (n.year > 2026) err(w, `news year ${n.year} is in the future`); });
}

function checkChapter(file: string, c: Chapter) {
  const w = `${file} › chapter ${c.id}`;
  uniq(w, `chapter:${c.id}`);
  if (c.steps.length < 3) err(w, "too few steps");
  c.steps.forEach((s) => { uniq(w, `step:${c.id}/${s.id}`); s.blocks.forEach((b, i) => checkBlock(`${w} › ${s.id}[${i}]`, b)); });
  c.steps.flatMap((s) => s.blocks).forEach((b) => b.type === "check" && uniq(w, `q:${b.q.id}`));
}

function checkPyq(file: string, p: Pyq) {
  const w = `${file} › pyq ${p.id}`;
  uniq(w, `pyq:${p.id}`);
  p.riverIds.forEach((id) => !REGISTRY[id] && err(w, `unknown river id "${id}"`));
  if (p.exam === "prelims") {
    if (!p.options?.length) err(w, "prelims needs options");
    if (p.answer === undefined || p.answer < 0 || p.answer >= (p.options?.length ?? 0)) err(w, "answer index out of range");
  }
  checkMarkup(w, p.explain);
  p.approach?.forEach((s) => checkMarkup(w, s));
}

function checkConfusion(file: string, c: Confusion) {
  const w = `${file} › confusion ${c.id}`;
  uniq(w, `confusion:${c.id}`);
  c.riverIds.forEach((id) => !REGISTRY[id] && err(w, `unknown river id "${id}"`));
  checkMarkup(w, c.tell);
  checkMarkup(w, c.why);
}

const isRiver = (x: unknown): x is River => !!x && typeof x === "object" && "journey" in x && "facts" in x;
const isChapter = (x: unknown): x is Chapter => !!x && typeof x === "object" && "steps" in x;
const isPyq = (x: unknown): x is Pyq => !!x && typeof x === "object" && "exam" in x && "skill" in x;
const isConfusion = (x: unknown): x is Confusion => !!x && typeof x === "object" && "tell" in x && "items" in x;

async function main() {
  const root = resolve(import.meta.dirname, "..");
  let files = process.argv.slice(2).map((f) => resolve(f));
  if (!files.length) {
    const dirs = ["src/content/rivers", "src/content/chapters"].map((d) => join(root, d));
    files = dirs.flatMap((d) => (existsSync(d) ? readdirSync(d).filter((f) => f.endsWith(".ts")).map((f) => join(d, f)) : []));
    for (const f of ["src/content/pyqs.ts", "src/content/confusions.ts"]) if (existsSync(join(root, f))) files.push(join(root, f));
  }
  for (const file of files) {
    const short = file.replace(root + "/", "");
    const mod = await import(pathToFileURL(file).href);
    for (const value of Object.values(mod)) {
      if (!Array.isArray(value)) continue;
      for (const item of value) {
        if (isRiver(item)) checkRiver(short, item);
        else if (isChapter(item)) checkChapter(short, item);
        else if (isPyq(item)) checkPyq(short, item);
        else if (isConfusion(item)) checkConfusion(short, item);
      }
    }
  }
  // parent links must agree with the parent's system when both are loaded
  for (const r of rivers.values()) {
    if (r.order !== undefined && !r.parent) warn.push(`river ${r.id}: order without parent`);
  }
  warn.forEach((w) => console.warn("warn ", w));
  errors.forEach((e) => console.error("ERROR", e));
  console.log(`\n${files.length} files · ${rivers.size} rivers · ${errors.length} errors · ${warn.length} warnings`);
  process.exit(errors.length ? 1 : 0);
}

main();
