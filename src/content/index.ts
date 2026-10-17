import type { Chapter, Confusion, Pyq, River, SystemId } from "./types";
import { REGISTRY } from "./registry";
import { indusRivers } from "./rivers/indus";
import { gangaRivers } from "./rivers/ganga";
import { brahmaputraRivers } from "./rivers/brahmaputra";
import { peninsularEastRivers } from "./rivers/peninsular-east";
import { peninsularWestRivers } from "./rivers/peninsular-west";
import { worldRivers } from "./rivers/world";
import { foundationsChapters } from "./chapters/foundations";
import { indusChapters } from "./chapters/indus";
import { gangaChapters } from "./chapters/ganga";
import { brahmaputraChapters } from "./chapters/brahmaputra";
import { peninsularEastChapters } from "./chapters/peninsular-east";
import { peninsularWestChapters } from "./chapters/peninsular-west";
import { issuesChapters } from "./chapters/issues";
import { worldChapters } from "./chapters/world";
import { pyqs as allPyqs } from "./pyqs";
import { confusions as allConfusions } from "./confusions";

export const rivers: River[] = [
  ...indusRivers,
  ...gangaRivers,
  ...brahmaputraRivers,
  ...peninsularEastRivers,
  ...peninsularWestRivers,
  ...worldRivers,
];

export const chapters: Chapter[] = [
  ...foundationsChapters,
  ...indusChapters,
  ...gangaChapters,
  ...brahmaputraChapters,
  ...peninsularEastChapters,
  ...peninsularWestChapters,
  ...issuesChapters,
  ...worldChapters,
].sort((a, b) => a.number - b.number);

export const pyqs: Pyq[] = [...allPyqs].sort((a, b) => b.year - a.year);
export const confusions: Confusion[] = allConfusions;

const byId = new Map(rivers.map((r) => [r.id, r]));

export const getRiver = (id: string) => byId.get(id);
export const getChapter = (id: string) => chapters.find((c) => c.id === id);
export const riverName = (id: string) => byId.get(id)?.name ?? REGISTRY[id]?.name ?? id;

/** Direct tributaries in downstream order (order 1 = nearest the parent's source). */
export function tributaries(id: string): River[] {
  return rivers
    .filter((r) => r.parent === id)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

/** Chain from a river up to the sea: e.g. pranhita → godavari. */
export function lineage(id: string): River[] {
  const out: River[] = [];
  let r = byId.get(id);
  const seen = new Set<string>();
  while (r?.parent && !seen.has(r.parent)) {
    seen.add(r.parent);
    r = byId.get(r.parent);
    if (r) out.push(r);
  }
  return out;
}

export const pyqsForRiver = (id: string) => pyqs.filter((p) => p.riverIds.includes(id));
export const confusionsForRiver = (id: string) => confusions.filter((c) => c.riverIds.includes(id));
export const chaptersForRiver = (id: string) =>
  chapters.filter((c) =>
    c.steps.some((s) =>
      s.blocks.some((b) => (b.type === "map" && b.focus.includes(id)) || (b.type === "spine" && b.river === id)),
    ),
  );

export const SYSTEMS: { id: SystemId; name: string; hindi: string; blurb: string; ink: string }[] = [
  { id: "indus", name: "Indus system", hindi: "सिंधु तंत्र", blurb: "Five rivers of Punjab, one treaty", ink: "var(--color-blue-ink)" },
  { id: "ganga", name: "Ganga system", hindi: "गंगा तंत्र", blurb: "The river that collects a subcontinent", ink: "var(--color-water)" },
  { id: "brahmaputra", name: "Brahmaputra & North-East", hindi: "ब्रह्मपुत्र तंत्र", blurb: "The U-turn river and its braided plains", ink: "var(--color-green-ink)" },
  { id: "peninsular-east", name: "Peninsular, east-flowing", hindi: "पूर्ववाहिनी नदियाँ", blurb: "Following the Deccan's tilt to the Bay", ink: "var(--color-red-ink)" },
  { id: "peninsular-west", name: "Peninsular, west-flowing", hindi: "पश्चिमवाहिनी नदियाँ", blurb: "Rifts, estuaries and the Western Ghats", ink: "var(--color-ink)" },
  { id: "world", name: "World rivers", hindi: "विश्व की नदियाँ", blurb: "The same laws on a bigger stage", ink: "var(--color-pencil)" },
];

export const stats = () => ({
  rivers: rivers.length,
  facts: rivers.reduce((n, r) => n + r.facts.length, 0),
  chapters: chapters.length,
  steps: chapters.reduce((n, c) => n + c.steps.length, 0),
  pyqs: pyqs.length,
  confusions: confusions.length,
});
