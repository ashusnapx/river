/**
 * Builds the static map geometry: src/data/india-map.json and src/data/world-map.json
 * (SVG path strings already projected into a viewBox; no map library at runtime).
 *
 * Usage:
 *   npx tsx scripts/geo/build-map.ts --ne <dir> --hydro <HydroRIVERS_v10_as.shp | clipped .json> [--preview <dir>]
 *
 *   --ne       folder with Natural Earth GeoJSON: ne_10m_admin_0_countries_ind, ne_10m_admin_1_states_provinces,
 *              ne_10m_lakes, ne_10m_rivers_lake_centerlines, ne_50m_admin_0_countries (.geojson)
 *   --hydro    HydroRIVERS v1.0 Asia shapefile (clipped to lon 60–100, lat 4–40 into the OS temp dir on first run,
 *              then reused) or an already clipped GeoJSON
 *   --preview  also write india.png / world.png previews to this folder
 *   --trace-only   stop after printing the per-river trace report;  --debug <id>   log why source candidates were rejected
 *
 * River definitions (sources, confluences, check points): scripts/geo/rivers.config.json.
 * Indian rivers are traced down the HydroRIVERS NEXT_DOWN graph; world rivers are Natural Earth centerlines.
 *
 * Data credits: Natural Earth (public domain; India point-of-view admin-0 boundaries).
 * HydroRIVERS v1.0, Lehner & Grill (2013), www.hydrosheds.org (free incl. commercial use, attribution required).
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";
import { geoArea, geoConicConformal, geoContains, geoNaturalEarth1, geoPath, type GeoPermissibleObjects, type GeoProjection } from "d3-geo";
import type { Feature, FeatureCollection, LineString, Position } from "geojson";
import { REGISTRY } from "../../src/content/registry";

// mapshaper ships no types; loaded untyped so the app's type-check stays clean
const mapshaper = createRequire(__filename)("mapshaper");

type LonLat = [number, number];
type Via = [number, number, number?];
interface RiverCfg { source: LonLat; end: LonLat; via?: Via[]; parent?: string; hop?: [LonLat, LonLat]; refKm: number; snapKm?: number }
interface WorldCfg { ne: string[]; source: LonLat; mouth: LonLat; extend?: LonLat[]; refKm: number }
interface Config { india: Record<string, RiverCfg>; world: Record<string, WorldCfg> }

const arg = (k: string) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : undefined; };
const NE = arg("--ne"), HYDRO = arg("--hydro"), PREVIEW = arg("--preview");
if (!NE || !HYDRO) { console.error("usage: npx tsx scripts/geo/build-map.ts --ne <dir> --hydro <shp|json> [--preview <dir>]"); process.exit(1); }
const ROOT = join(__dirname, "..", "..");
const CFG: Config = JSON.parse(readFileSync(join(__dirname, "rivers.config.json"), "utf8"));
const readJson = (p: string) => JSON.parse(readFileSync(p, "utf8"));
const ne = (name: string): FeatureCollection => readJson(join(NE, `${name}.geojson`));

// ---------- geometry helpers (km on a local equirectangular plane; fine at river scale) ----------
const KX = 111.32, KY = 110.57;
function km(a: Position, b: Position) {
  const c = Math.cos(((a[1] + b[1]) / 2) * Math.PI / 180);
  return Math.hypot((a[0] - b[0]) * KX * c, (a[1] - b[1]) * KY);
}
function pathKm(c: Position[]) { let s = 0; for (let i = 1; i < c.length; i++) s += km(c[i - 1], c[i]); return s; }
/** distance from p to segment ab, km */
function segKm(p: Position, a: Position, b: Position) {
  const c = Math.cos(p[1] * Math.PI / 180);
  const ax = (a[0] - p[0]) * KX * c, ay = (a[1] - p[1]) * KY, bx = (b[0] - p[0]) * KX * c, by = (b[1] - p[1]) * KY;
  const dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy;
  const t = L ? Math.max(0, Math.min(1, -(ax * dx + ay * dy) / L)) : 0;
  return Math.hypot(ax + t * dx, ay + t * dy);
}

// ---------- HydroRIVERS graph ----------
interface Seg { next: number; up: number; c: Position[] }
async function loadHydro() {
  let file = HYDRO!;
  if (file.endsWith(".shp")) {
    const clip = join(tmpdir(), "hydrorivers-india-clip.json");
    if (!existsSync(clip)) {
      console.log("clipping HydroRIVERS (once) ->", clip);
      await mapshaper.runCommands(["-i", file, "-clip", "bbox=60,4,100,40", "-filter-fields", "HYRIV_ID,NEXT_DOWN,UPLAND_SKM,ORD_STRA,LENGTH_KM", "-o", clip, "format=geojson", "precision=0.0001"]);
    }
    file = clip;
  }
  const fc: FeatureCollection = readJson(file);
  const segs = new Map<number, Seg>();
  const grid = new Map<number, number[]>();
  const cell = (lon: number, lat: number) => (Math.floor(lon * 10) + 2000) * 10000 + Math.floor(lat * 10) + 1000;
  for (const f of fc.features) {
    const g = f.geometry;
    if (!g || (g.type !== "LineString" && g.type !== "MultiLineString")) continue;
    const c = g.type === "LineString" ? g.coordinates : g.coordinates.flat();
    const p = f.properties!;
    segs.set(p.HYRIV_ID, { next: p.NEXT_DOWN, up: p.UPLAND_SKM, c });
    let last = -1;
    for (const v of c) {
      const k = cell(v[0], v[1]);
      if (k === last) continue;
      last = k;
      const a = grid.get(k);
      if (!a) grid.set(k, [p.HYRIV_ID]); else if (a[a.length - 1] !== p.HYRIV_ID) a.push(p.HYRIV_ID);
    }
  }
  /** segments within r km of p: [id, distKm, nearestVertexIndex] */
  function near(p: Position, r: number) {
    const dy = Math.ceil(r / 11) + 1, dx = Math.ceil(r / (11 * Math.cos(p[1] * Math.PI / 180))) + 1;
    const ids = new Set<number>();
    for (let i = -dx; i <= dx; i++) for (let j = -dy; j <= dy; j++) for (const id of grid.get(cell(p[0] + i / 10, p[1] + j / 10)) || []) ids.add(id);
    const out: { id: number; d: number; vi: number }[] = [];
    for (const id of ids) {
      const c = segs.get(id)!.c;
      let d = Infinity, vi = 0;
      for (let i = 0; i < c.length; i++) {
        d = Math.min(d, i + 1 < c.length ? segKm(p, c[i], c[i + 1]) : km(p, c[i]));
        if (km(p, c[i]) < km(p, c[vi])) vi = i; // start on a vertex, so a source given at a junction starts exactly there
      }
      if (d <= r) out.push({ id, d, vi });
    }
    return out;
  }
  return { segs, near };
}

// ---------- tracing ----------
interface Trace { coords: Position[]; segIds: Set<number>; km: number; note: string; ok: boolean }

function traceRiver(H: Awaited<ReturnType<typeof loadHydro>>, id: string, cfg: RiverCfg, traces: Record<string, Trace>, owner: Map<number, string>): Trace {
  const snap = cfg.snapKm ?? 15;
  // nearest first; within the same 0.5 km band prefer the larger upstream area (e.g. at a confluence)
  const up = (id: number) => H.segs.get(id)!.up;
  const cands = H.near(cfg.source, snap).sort((a, b) => Math.floor(a.d / 0.5) - Math.floor(b.d / 0.5) || up(b.id) - up(a.id));
  type Step = { s: number; from: number; to?: number };
  const walk = (id: number, from: number) => {
    const out: Step[] = [];
    for (let s = id; s && H.segs.has(s) && out.length < 50000; s = H.segs.get(s)!.next) out.push({ s, from: out.length ? 1 : from });
    return out;
  };
  const expand = (path: Step[]) => {
    const coords: Position[] = [], segAt: number[] = [];
    path.forEach((st, j) => { const c = H.segs.get(st.s)!.c; for (let i = st.from; i <= (st.to ?? c.length - 1); i++) { coords.push(c[i]); segAt.push(j); } });
    return { coords, segAt };
  };
  let why = "no HydroRIVERS segment within " + snap + " km of source";
  for (const cand of cands) {
    if (arg("--debug") === id) console.log(cand, why);
    let path = walk(cand.id, cand.vi);
    let { coords, segAt } = expand(path);
    if (cfg.hop) {
      // the DEM sends the river into a neighbouring channel: leave the trace at hop[0], resume on the channel at hop[1]
      let k = 0;
      coords.forEach((c, i) => { if (km(c, cfg.hop![0]) < km(coords[k], cfg.hop![0])) k = i; });
      const to = H.near(cfg.hop[1], 5).sort((a, b) => a.d - b.d)[0];
      if (km(coords[k], cfg.hop[0]) > 5 || !to) { why = "misses hop"; continue; }
      const last = path[segAt[k]], c = H.segs.get(last.s)!.c;
      path = [...path.slice(0, segAt[k]), { ...last, to: c.findIndex((v) => v === coords[k]) }, ...walk(to.id, to.vi)];
      ({ coords, segAt } = expand(path));
    }
    // via points, in order
    let cur = 0, bad = "";
    for (const v of cfg.via || []) {
      const tol = v[2] ?? 12;
      let k = cur;
      while (k < coords.length && km(coords[k], v) > tol) k++;
      if (k === coords.length) { bad = `misses via [${v[0]},${v[1]}]`; break; }
      cur = k;
    }
    if (bad) { why = bad; continue; }
    if (cfg.parent && owner.get(path[0].s) === cfg.parent) { why = "source snapped onto parent"; continue; }
    // stop where it meets any river already traced (normally the parent), so it never runs on along another river
    const j = path.findIndex((st, i) => i > 0 && owner.has(st.s));
    const joinIdx = j > 0 ? segAt.indexOf(j) - 1 : coords.length - 1;
    let endIdx: number, note: string;
    if (cfg.parent) {
      if (j < 0) { why = `never reaches ${cfg.parent}`; continue; }
      endIdx = joinIdx;
      const d = km(coords[endIdx], cfg.end), into = owner.get(path[j].s);
      if (endIdx < cur || d > 45) { why = `joins ${into} ${d.toFixed(0)} km from given end`; continue; }
      note = `joins ${into}${into === cfg.parent ? "" : ` (NOT ${cfg.parent})`} ${d.toFixed(1)} km from cfg end`;
    } else {
      endIdx = cur;
      for (let k = cur; k <= joinIdx; k++) if (km(coords[k], cfg.end) < km(coords[endIdx], cfg.end)) endIdx = k;
      // a HydroRIVERS outlet near the given mouth wins: the given coordinate is often a little inland or offshore
      const terminal = j < 0 && H.segs.get(path[path.length - 1].s)!.next === 0;
      if (terminal && km(coords[joinIdx], cfg.end) < 35) endIdx = joinIdx;
      const d = km(coords[endIdx], cfg.end);
      if (d > (terminal && endIdx === joinIdx ? 35 : 20)) { why = `closest approach to end ${d.toFixed(0)} km`; continue; }
      note = `end ${d.toFixed(1)} km from cfg end`;
    }
    const out = coords.slice(0, endIdx + 1);
    const segIds = new Set(path.slice(0, segAt[endIdx] + 1).map((st) => st.s));
    return { coords: out, segIds, km: pathKm(out), note: `snap ${cand.d.toFixed(1)} km; ${note}`, ok: true };
  }
  return { coords: [], segIds: new Set(), km: 0, note: "FAILED: " + why + ` (${cands.length} candidates)`, ok: false };
}

function order(ids: string[], parentOf: (id: string) => string | undefined) {
  const done = new Set<string>(), out: string[] = [];
  const visit = (id: string) => { if (done.has(id)) return; done.add(id); const p = parentOf(id); if (p) visit(p); out.push(id); };
  ids.forEach(visit);
  return out;
}

// ---------- Natural Earth world rivers: chain the named parts upstream from the mouth ----------
function chainNE(fc: FeatureCollection, cfg: WorldCfg): Position[] {
  const parts: Position[][] = [];
  for (const f of fc.features) {
    if (!cfg.ne.includes(f.properties?.name)) continue;
    const g = f.geometry;
    if (g.type === "LineString") parts.push(g.coordinates);
    else if (g.type === "MultiLineString") parts.push(...g.coordinates);
  }
  // depth-first over parts that touch end to end (<25 km) starting at the mouth; best chain: head closest to the
  // source, then least gap between parts, then longest (side channels, distributaries and lake/river doubles lose)
  let best: Position[] = [], bestD = Infinity, bestGap = Infinity;
  const grow = (line: Position[], left: Position[][], gap: number) => {
    const d = km(line[0], cfg.source);
    if (d < bestD - 1 || (d <= bestD + 1 && (gap < bestGap - 0.5 || (gap <= bestGap + 0.5 && pathKm(line) > pathKm(best))))) { best = line; bestD = d; bestGap = gap; }
    for (const p of left) {
      const da = km(p[0], line[0]), db = km(p[p.length - 1], line[0]);
      if (Math.min(da, db) > 25) continue;
      grow([...(db <= da ? p : [...p].reverse()), ...line.slice(1)], left.filter((q) => q !== p), gap + Math.min(da, db));
    }
  };
  const toMouth = (p: Position[]) => Math.min(km(p[0], cfg.mouth), km(p[p.length - 1], cfg.mouth));
  const nearest = Math.min(...parts.map(toMouth));
  for (const p of parts.filter((q) => toMouth(q) < nearest + 50)) {
    grow(km(p[p.length - 1], cfg.mouth) <= km(p[0], cfg.mouth) ? [...p] : [...p].reverse(), parts.filter((q) => q !== p && pathKm(q) > 1), 0);
  }
  return [...best, ...(cfg.extend || [])];
}

// ---------- output helpers ----------
const r1 = (v: number) => Math.round(v * 10) / 10;

async function ms(cmd: string, files: Record<string, unknown>): Promise<FeatureCollection> {
  const input: Record<string, string> = {};
  for (const [k, v] of Object.entries(files)) input[k] = JSON.stringify(v);
  const out = await mapshaper.applyCommands(`${cmd} -o out.json format=geojson precision=0.00001`, input);
  const j = JSON.parse(String(out["out.json"]));
  // mapshaper writes a bare GeometryCollection for layers without attributes
  return j.type === "GeometryCollection" ? { type: "FeatureCollection", features: j.geometries.map((geometry: unknown) => ({ type: "Feature", properties: {}, geometry })) } : j;
}

/** d3 wants clockwise exterior rings; flip any polygon whose spherical area says it was read inside out */
function rewind(fc: FeatureCollection) {
  for (const f of fc.features) {
    const g = f.geometry;
    const polys = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
    for (const poly of polys) if (geoArea({ type: "Polygon", coordinates: poly }) > 2 * Math.PI) poly.forEach((ring) => ring.reverse());
  }
  return fc;
}

/** projected, rounded, de-duplicated points of a line */
function projectLine(P: GeoProjection, c: Position[]) {
  const out: [number, number][] = [];
  for (const v of c) {
    const p = P(v as [number, number])!;
    const q: [number, number] = [r1(p[0]), r1(p[1])];
    const last = out[out.length - 1];
    if (!last || last[0] !== q[0] || last[1] !== q[1]) out.push(q);
  }
  return out;
}

function riverGeom(pts: [number, number][]) {
  const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
  const length = seg.reduce((a, b) => a + b, 0);
  // label: middle of the river, angle from a chord spanning ±10% of its length, kept upright
  const at = (t: number) => { let s = 0, i = 0; while (i < seg.length - 1 && s + seg[i] < t) s += seg[i++]; return pts[i]; };
  const mid = at(length / 2), a = at(length * 0.4), b = at(length * 0.6);
  let ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
  if (ang > 90) ang -= 180; else if (ang < -90) ang += 180;
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  return {
    d: "M" + pts.map((p) => `${p[0]},${p[1]}`).join("L"),
    length: r1(length),
    source: pts[0],
    end: pts[pts.length - 1],
    label: [mid[0], mid[1], Math.round(ang)] as [number, number, number],
    bbox: [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)] as [number, number, number, number],
  };
}

const lines = (rows: { id: string; coords: Position[] }[]): FeatureCollection<LineString> => ({
  type: "FeatureCollection",
  features: rows.map((r) => ({ type: "Feature", properties: { id: r.id }, geometry: { type: "LineString", coordinates: r.coords } })),
});

async function main() {
  // ----- trace Indian rivers on HydroRIVERS -----
  const missing = Object.keys(REGISTRY).filter((id) => REGISTRY[id].system !== "world" ? !CFG.india[id] : !CFG.world[id]);
  if (missing.length) console.warn("registry ids without config:", missing.join(", "));
  const H = await loadHydro();
  console.log("HydroRIVERS segments:", H.segs.size);
  const traces: Record<string, Trace> = {};
  const owner = new Map<number, string>();
  for (const id of order(Object.keys(CFG.india), (i) => CFG.india[i].parent)) {
    const cfg = CFG.india[id];
    const t = traceRiver(H, id, cfg, traces, owner);
    traces[id] = t;
    for (const s of t.segIds) if (!owner.has(s)) owner.set(s, id);
    const ll = (p?: Position) => (p ? p.map((v) => v.toFixed(3)).join(",") : "-");
    console.log(`${id.padEnd(14)} ${t.km.toFixed(0).padStart(5)} km / ref ${String(cfg.refKm).padStart(4)} (${(t.km / cfg.refKm).toFixed(2)})  [${ll(t.coords[0])} -> ${ll(t.coords[t.coords.length - 1])}]  ${t.note}`);
  }
  if (process.argv.includes("--trace-only")) return;

  // ----- India map -----
  const frame: GeoPermissibleObjects = { type: "MultiPoint", coordinates: [] };
  for (let t = 0; t <= 1; t += 0.02) (frame as { coordinates: Position[] }).coordinates.push([66 + 32.5 * t, 5.5], [66 + 32.5 * t, 37.5], [66, 5.5 + 32 * t], [98.5, 5.5 + 32 * t]);
  const P = geoConicConformal().parallels([12, 32]).rotate([-82, 0]).precision(0).fitWidth(1000, frame);
  const IH = Math.ceil(geoPath(P).bounds(frame)[1][1]);
  P.clipExtent([[0, 0], [1000, IH]]);
  const path = geoPath(P).digits(1);

  // exploded so keep-shapes holds on to every island (Lakshadweep, Andaman & Nicobar), then regrouped per country
  const parts = rewind(await ms("-i c.json -clip bbox=55,-5,110,45 -explode -simplify visvalingam weighted interval=1500 keep-shapes", { "c.json": ne("ne_10m_admin_0_countries_ind") }));
  const byCountry = new Map<string, Feature>();
  for (const f of parts.features) {
    if (f.geometry.type !== "Polygon") continue;
    const k = f.properties!.ADM0_A3 as string;
    const c = byCountry.get(k) || { type: "Feature", properties: f.properties, geometry: { type: "MultiPolygon", coordinates: [] } };
    (c.geometry as { coordinates: Position[][][] }).coordinates.push(f.geometry.coordinates);
    byCountry.set(k, c);
  }
  const countries = { type: "FeatureCollection", features: [...byCountry.values()] } as FeatureCollection;
  const india = countries.features.find((f) => f.properties!.ADM0_A3 === "IND")!;
  const neighbours = countries.features
    .filter((f) => f !== india)
    .map((f) => ({ name: f.properties!.NAME as string, d: path(f) || "" }))
    .filter((n) => n.d)
    .sort((a, b) => a.name.localeCompare(b.name));

  const statesIn = ne("ne_10m_admin_1_states_provinces");
  statesIn.features = statesIn.features.filter((f) => f.properties!.adm0_a3 === "IND");
  const states = await ms("-i s.json -simplify visvalingam weighted interval=1500 -innerlines -clip i.json", {
    "s.json": statesIn,
    "i.json": { type: "FeatureCollection", features: [india] },
  });

  // Natural Earth lakes in view (Chilika, Loktak, Vembanad etc. are not in Natural Earth 1:10m)
  const LAKES: [string | LonLat, string][] = [
    ["Mapam Yumco", "Mansarovar"], ["Langa Co", "Rakshastal"], ["Banggong Co", "Pangong Tso"], [[74.57, 34.37], "Wular"],
    ["Gobind Sagar Reservoir", "Gobind Sagar"], [[76.05, 32.02], "Pong Reservoir"], ["Tarbela Dam", "Tarbela"], [[73.71, 33.21], "Mangla"],
    ["Gandhi Sagar Dam", "Gandhi Sagar"], [[75.55, 24.8], "Rana Pratap Sagar"], ["Hinakud Dam", "Hirakud"], ["Nagarjuna Sagar Dam", "Nagarjuna Sagar"],
    ["Tungabhadra", "Tungabhadra Reservoir"], ["Krishna Raja Sagar", "Krishna Raja Sagar"], ["Bhadra Reservoir", "Bhadra Reservoir"],
    ["Stanley Reservoir", "Mettur (Stanley) Reservoir"], ["Kaptai Lake", "Kaptai Lake"], ["Yamzho Yumco", "Yamdrok Tso"],
  ];
  const lakesIn = ne("ne_10m_lakes");
  const lakePick = lakesIn.features.flatMap((f) => {
    const hit = LAKES.find(([k]) => typeof k === "string" ? f.properties!.name === k : km(geoPath().centroid(f), k) < 15);
    return hit ? [{ ...f, properties: { name: hit[1] } }] : [];
  });
  const lakes = rewind(await ms("-i l.json -simplify visvalingam weighted interval=800 keep-shapes", { "l.json": { type: "FeatureCollection", features: lakePick } }));

  const riverRows = Object.entries(traces).filter(([, t]) => t.ok).map(([id, t]) => ({ id, coords: t.coords }));
  const riversS = await ms("-i r.json -simplify visvalingam weighted interval=500", { "r.json": lines(riverRows) });
  const rivers: Record<string, ReturnType<typeof riverGeom>> = {};
  for (const f of riversS.features) rivers[f.properties!.id] = riverGeom(projectLine(P, (f.geometry as LineString).coordinates));

  const xy = (name: string, lon: number, lat: number) => { const p = P([lon, lat])!; return { name, x: r1(p[0]), y: r1(p[1]) }; };
  const CITIES: [string, number, number][] = [
    ["Delhi", 77.21, 28.61], ["Mumbai", 72.88, 19.08], ["Kolkata", 88.36, 22.57], ["Chennai", 80.27, 13.08], ["Karachi", 67.01, 24.86],
    ["Dhaka", 90.41, 23.81], ["Lhasa", 91.11, 29.65], ["Srinagar", 74.8, 34.08], ["Leh", 77.58, 34.16], ["Jammu", 74.86, 32.73],
    ["Lahore", 74.35, 31.55], ["Lucknow", 80.95, 26.85], ["Patna", 85.14, 25.6], ["Guwahati", 91.74, 26.14], ["Hyderabad", 78.47, 17.38],
    ["Ahmedabad", 72.58, 23.02], ["Cuttack", 85.88, 20.46], ["Kanpur", 80.33, 26.45], ["Prayagraj", 81.85, 25.44], ["Varanasi", 83.0, 25.32],
    ["Agra", 78.01, 27.18], ["Haridwar", 78.16, 29.95], ["Kota", 75.84, 25.18], ["Jabalpur", 79.95, 23.18], ["Surat", 72.83, 21.17],
    ["Nashik", 73.79, 20.0], ["Vijayawada", 80.65, 16.51], ["Rajahmundry", 81.8, 17.0], ["Tiruchirappalli", 78.69, 10.8], ["Bengaluru", 77.59, 12.97],
    ["Kathmandu", 85.32, 27.71],
  ];
  const indiaMap = {
    viewBox: `0 0 1000 ${IH}`,
    credits: "Boundaries and lakes: Natural Earth (public domain), India point of view. Rivers: HydroRIVERS v1.0, Lehner & Grill (2013).",
    india: path(india),
    neighbours,
    states: states.features.map((f) => path(f)).join(""),
    lakes: lakes.features.map((f) => ({ name: f.properties!.name as string, d: path(f) || "" })).filter((l) => l.d),
    seas: [xy("Arabian Sea", 68.8, 15.5), xy("Bay of Bengal", 88.5, 15.5), xy("Indian Ocean", 80, 6.3)],
    cities: CITIES.map(([n, lon, lat]) => xy(n, lon, lat)),
    rivers,
  };

  // legal check: India's outline must follow the Indian claim (whole of J&K incl. Gilgit-Baltistan and Aksai Chin; Arunachal)
  const TEST: [string, LonLat][] = [["Gilgit", [74.31, 35.92]], ["Muzaffarabad", [73.47, 34.37]], ["Aksai Chin", [79.0, 35.0]], ["Tawang", [91.86, 27.59]], ["Shaksgam", [76.5, 36.0]], ["Itanagar", [93.62, 27.08]]];
  for (const [n, p] of TEST) {
    const inIndia = geoContains(india, p), inOther = countries.features.filter((f) => f !== india && geoContains(f, p)).map((f) => f.properties!.NAME);
    console.log(`boundary check ${n.padEnd(13)} in India: ${inIndia}  in a neighbour: ${inOther.join(",") || "none"}`);
    if (!inIndia || inOther.length) throw new Error(`India outline fails the boundary check at ${n}`);
  }
  writeFileSync(join(ROOT, "src/data/india-map.json"), JSON.stringify(indiaMap));

  // ----- world map -----
  const PW = geoNaturalEarth1().precision(0).fitWidth(1000, { type: "Sphere" });
  const WH = Math.ceil(geoPath(PW).bounds({ type: "Sphere" })[1][1]);
  const wpath = geoPath(PW).digits(1);
  // dissolved land only: no international boundaries on the world map
  const land = rewind(await ms("-i w.json -dissolve -simplify visvalingam weighted interval=12000 keep-shapes -filter-islands min-area=400km2", { "w.json": ne("ne_50m_admin_0_countries") }));
  const bigLakes = { ...lakesIn, features: lakesIn.features.filter((f) => f.properties!.scalerank <= 1 && f.properties!.name) };
  const worldLakes = rewind(await ms("-i l.json -simplify visvalingam weighted interval=12000 keep-shapes", { "l.json": bigLakes }));
  const neRivers = ne("ne_10m_rivers_lake_centerlines");
  const worldRows = Object.entries(CFG.world).map(([id, cfg]) => {
    const coords = chainNE(neRivers, cfg);
    console.log(`${id.padEnd(14)} ${pathKm(coords).toFixed(0).padStart(5)} km / ref ${String(cfg.refKm).padStart(4)} (${(pathKm(coords) / cfg.refKm).toFixed(2)})  source off by ${km(coords[0], cfg.source).toFixed(0)} km`);
    return { id, coords };
  });
  const worldS = await ms("-i r.json -simplify visvalingam weighted interval=6000", { "r.json": lines(worldRows) });
  const worldRivers: Record<string, ReturnType<typeof riverGeom>> = {};
  for (const f of worldS.features) worldRivers[f.properties!.id] = riverGeom(projectLine(PW, (f.geometry as LineString).coordinates));
  const worldMap = {
    viewBox: `0 0 1000 ${WH}`,
    credits: "Land and rivers: Natural Earth (public domain).",
    land: land.features.map((f) => wpath(f)).join(""),
    lakes: worldLakes.features.map((f) => ({ name: f.properties!.name as string, d: wpath(f) || "" })).filter((l) => l.d),
    rivers: worldRivers,
  };
  writeFileSync(join(ROOT, "src/data/world-map.json"), JSON.stringify(worldMap));
  for (const f of ["india-map.json", "world-map.json"]) console.log(f, (readFileSync(join(ROOT, "src/data", f)).length / 1024).toFixed(0), "KB");

  if (PREVIEW) await preview(PREVIEW, indiaMap, worldMap);
}

// ---------- PNG previews (sharp ships with next) ----------
async function preview(dir: string, ...maps: { viewBox: string; india?: string | null; land?: string; neighbours?: { d: string }[]; states?: string; lakes?: { d: string }[]; cities?: { name: string; x: number; y: number }[]; seas?: { name: string; x: number; y: number }[]; rivers: Record<string, { d: string; label: number[] }> }[]) {
  const { default: sharp } = await import("sharp");
  mkdirSync(dir, { recursive: true });
  const sys: Record<string, string> = { indus: "#c0392b", ganga: "#1f6fd1", brahmaputra: "#8e44ad", "peninsular-east": "#16a085", "peninsular-west": "#d35400", world: "#1f6fd1" };
  for (const [i, m] of maps.entries()) {
    const [, , w, h] = m.viewBox.split(" ").map(Number);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${m.viewBox}" width="${w * 3}" height="${h * 3}">
<rect width="${w}" height="${h}" fill="#dbe9f4"/>
${(m.neighbours || []).map((n) => `<path d="${n.d}" fill="#eee" stroke="#999" stroke-width="0.4"/>`).join("")}
${m.land ? `<path d="${m.land}" fill="#f4efe1" stroke="#999" stroke-width="0.3"/>` : ""}
${m.india ? `<path d="${m.india}" fill="#f4efe1" stroke="#333" stroke-width="0.6"/>` : ""}
${m.states ? `<path d="${m.states}" fill="none" stroke="#b9a" stroke-width="0.35"/>` : ""}
${(m.lakes || []).map((l) => `<path d="${l.d}" fill="#7fb3e0"/>`).join("")}
${Object.entries(m.rivers).map(([id, r]) => `<path d="${r.d}" fill="none" stroke="${sys[REGISTRY[id]?.system] || "#000"}" stroke-width="0.7" stroke-linejoin="round"/>`).join("")}
${Object.entries(m.rivers).map(([id, r]) => `<text x="${r.label[0]}" y="${r.label[1]}" transform="rotate(${r.label[2]} ${r.label[0]} ${r.label[1]})" font-size="4" font-family="sans-serif" fill="#123">${id}</text>`).join("")}
${(m.cities || []).map((c) => `<circle cx="${c.x}" cy="${c.y}" r="1.2"/><text x="${c.x + 2}" y="${c.y - 1}" font-size="4.5" font-family="sans-serif">${c.name}</text>`).join("")}
${(m.seas || []).map((s) => `<text x="${s.x}" y="${s.y}" font-size="10" font-style="italic" fill="#456" font-family="serif" text-anchor="middle">${s.name}</text>`).join("")}
</svg>`;
    await sharp(Buffer.from(svg)).png().toFile(join(dir, i === 0 ? "india.png" : "world.png"));
  }
  console.log("previews ->", dir);
}

main();
