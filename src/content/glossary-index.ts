import { glossary } from "./glossary";
import type { GlossaryId } from "./glossary-ids";
import type { GlossaryTerm } from "./types";

export const GLOSSARY = Object.fromEntries(glossary.map((t) => [t.id, t])) as Partial<Record<GlossaryId, GlossaryTerm>>;

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const phrases = glossary
  .flatMap((t) => t.match.map((m) => ({ m: m.toLowerCase(), id: t.id })))
  .sort((a, b) => b.m.length - a.m.length);

/** lowercase phrase → term id */
export const PHRASE_TO_ID = new Map(phrases.map((p) => [p.m, p.id]));

/** One regex for every glossary phrase, longest first, whole words only. */
export const TERM_RE = phrases.length ? new RegExp(`\\b(${phrases.map((p) => escape(p.m)).join("|")})\\b`, "gi") : null;
