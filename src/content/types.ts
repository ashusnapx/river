/**
 * Content schema for the river notebook.
 *
 * Every string field marked "markup" may use these inline pen marks (no nesting):
 *   **text**          heavy black pen (key term)
 *   ==text==          yellow highlighter (must-remember)
 *   __text__          red underline (exam-important)
 *   !!text!!          red pen (warning / trap)
 *   ++text++          green pen (the reason / because)
 *   [[river-id]]      link to a river page, shows its name
 *   [[river-id|label]] link with custom label
 */

export type SystemId =
  | "foundations"
  | "indus"
  | "ganga"
  | "brahmaputra"
  | "peninsular-east"
  | "peninsular-west"
  | "world"
  | "issues";

export type Bank = "left" | "right";

export type PlaceKind =
  | "dam"
  | "barrage"
  | "waterfall"
  | "city"
  | "pilgrimage"
  | "heritage"
  | "national-park"
  | "wetland"
  | "project"
  | "gorge"
  | "confluence"
  | "island"
  | "lake"
  | "delta"
  | "glacier"
  | "valley"
  | "canal"
  | "bridge";

/** Hand-drawn illustrations available to lessons. Use only these ids. */
export type SketchId =
  | "slope-of-india" // Himalaya → plains → Deccan tilting east; why most peninsular rivers flow east
  | "bank-rule" // stand facing downstream: left hand = left bank
  | "rift-valley" // Narmada/Tapi in faulted troughs between block mountains
  | "delta-vs-estuary" // slow, sediment-heavy → delta; fast, hard-rock, tidal → estuary
  | "antecedent" // river older than the mountain cuts a gorge as land rises
  | "regime" // perennial (glacier + monsoon) vs seasonal (monsoon only) hydrograph
  | "meander-oxbow" // meander loop cut off → oxbow lake
  | "braided" // braided channels from heavy sediment on gentle slope
  | "drainage-patterns" // dendritic, trellis, radial, centripetal, rectangular
  | "panch-prayag" // 5 confluences of Alaknanda down to Devprayag
  | "indus-treaty" // 3 eastern rivers to India, 3 western to Pakistan
  | "great-bend" // Tsangpo U-turn around Namcha Barwa into Arunachal as Siang
  | "water-divide" // a ridge splits rain into two basins
  | "monsoon-kaveri"; // Kaveri fed by SW monsoon (Karnataka) and NE monsoon (Tamil Nadu)

export interface Fact {
  /** unique within the file, kebab-case, e.g. "ganga-source-gaumukh" */
  id: string;
  /** flashcard front, a question (markup) */
  q: string;
  /** short exam answer (markup) */
  a: string;
  /** the reason that makes it memorable (markup). Never "because it is so". */
  because: string;
  tag?: "core" | "pyq" | "trap" | "news";
}

export interface River {
  /** kebab-case id from the registry */
  id: string;
  name: string;
  /** Devanagari name */
  hindi?: string;
  /** other names with where they apply, e.g. "Tsangpo (Tibet)" */
  aka?: string[];
  system: SystemId;
  /** 1 = main river of a system, 2 = major tributary, 3 = minor but exam-relevant */
  rank: 1 | 2 | 3;
  /** id of the river it drains into; omit if it reaches a sea, lake or desert */
  parent?: string;
  /** bank of the parent it joins, defined facing downstream on the parent */
  bank?: Bank;
  /** position along the parent from its source: 1 = joins nearest the parent's source */
  order?: number;
  /** where it joins its parent or the sea (place name) */
  confluence?: string;
  source: {
    place: string;
    state?: string;
    elevationM?: number;
    /** when textbooks and newer research disagree: what to write in the exam and why (markup) */
    examNote?: string;
  };
  mouth: {
    place: string;
    kind: "delta" | "estuary" | "joins-river" | "inland-drainage" | "lake";
    note?: string;
  };
  lengthKm?: { value: number; note?: string };
  /** states / UTs / countries in downstream order */
  flowsThrough: string[];
  /** e.g. "West → East", "South → North into the Yamuna" */
  direction: string;
  /** one vivid line that captures its identity and the reason behind it (markup) */
  oneLiner: string;
  /** 2–4 cause → effect chains that explain its behaviour (markup) */
  personality: string[];
  /** the downstream story, leg by leg (markup) */
  journey: { at: string; text: string; why?: string }[];
  places: { name: string; kind: PlaceKind; note: string; why?: string }[];
  /** flashcard-ready facts; 4–15 per main river, 2–6 per tributary */
  facts: Fact[];
  traps?: { wrong: string; right: string; why: string }[];
  /** memory hooks; every hook must carry its logic */
  remember?: { hook: string; logic: string }[];
  /** current affairs, newest first */
  news?: { year: number; text: string; why: string }[];
  /** ids from src/content/pyqs.ts */
  pyqIds?: string[];
}

export interface Question {
  id: string;
  prompt: string; // markup
  options: string[];
  /** index of the correct option */
  answer: number;
  /** why the answer is right, reasoning first (markup) */
  explain: string;
  /** the tempting wrong option and why it tempts (markup) */
  trap?: string;
  /** e.g. "UPSC CSE Prelims 2021" or "Practice" */
  source?: string;
}

export type Block =
  | { type: "say"; text: string }
  | { type: "why"; q: string; a: string }
  | { type: "law"; title: string; text: string }
  | { type: "trap"; wrong: string; right: string; why: string }
  | { type: "remember"; hook: string; logic: string }
  | { type: "sketch"; id: SketchId; caption: string }
  | { type: "map"; focus: string[]; caption: string; trace?: boolean }
  | { type: "spine"; river: string; caption?: string }
  | { type: "compare"; title: string; columns: string[]; rows: string[][] }
  | { type: "check"; q: Question };

export interface Step {
  id: string;
  title: string;
  blocks: Block[];
}

export interface Chapter {
  /** kebab-case, used in the URL */
  id: string;
  /** reading order across the whole notebook; see docs/content-guide.md */
  number: number;
  system: SystemId;
  title: string;
  hindiTitle?: string;
  subtitle: string;
  minutes: number;
  /** "After this chapter you can…" bullets */
  outcomes: string[];
  steps: Step[];
}

export interface Pyq {
  /** e.g. "pre-2021-07" (prelims) or "mains-2017-gs1-12" */
  id: string;
  exam: "prelims" | "mains" | "optional";
  year: number;
  paper?: string;
  marks?: number;
  /** verbatim question text */
  text: string;
  options?: string[];
  /** index into options, prelims only */
  answer?: number;
  keyStatus?: "official" | "provisional" | "disputed" | "unverified";
  /** reasoning walk-through that reaches the answer without rote (markup) */
  explain: string;
  /** what skill / pattern it tests, e.g. "tributary–parent pairing" */
  skill: string;
  riverIds: string[];
  /** for mains: a short answer skeleton (markup) */
  approach?: string[];
}

export interface GlossaryTerm {
  /** id from src/content/glossary-ids.ts; also the doodle id */
  id: import("./glossary-ids").GlossaryId;
  /** display form, e.g. "Drainage basin" */
  term: string;
  /** Hindi term in Devanagari, only when sure */
  hindi?: string;
  /**
   * lowercase phrases that should trigger the tooltip in running text, longest first,
   * e.g. ["drainage basin", "river basin", "basins", "basin"]. Avoid words with common non-geographic meanings.
   */
  match: string[];
  /** the exact, exam-grade definition (NCERT wording where possible, may use markup) */
  exact: string;
  /** the same idea for a 5-year-old, told by Boondi the water drop (markup) */
  kid: string;
  /** one Indian example (markup) */
  example?: string;
  /** related term ids */
  see?: import("./glossary-ids").GlossaryId[];
}

export interface Confusion {
  id: string;
  title: string;
  /** the things that get mixed up */
  items: string[];
  /** how to tell them apart in one glance (markup) */
  tell: string;
  /** the reason behind the difference (markup) */
  why: string;
  riverIds: string[];
}
