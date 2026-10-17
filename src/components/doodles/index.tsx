import type { ReactNode } from "react";
import type { GlossaryId } from "@/content/glossary-ids";
import { BEHAVIOUR } from "./behaviour";
import { LAND } from "./land";
import { PARTS } from "./parts";
import { PATTERNS } from "./patterns";
import { PEOPLE } from "./people";
import { SHAPES } from "./shapes";

export { Boondi } from "./Boondi";

// typed as a full Record so a glossary id without a doodle fails the type check
const DOODLES: Record<GlossaryId, () => ReactNode> = { ...PARTS, ...BEHAVIOUR, ...SHAPES, ...LAND, ...PATTERNS, ...PEOPLE };

/** A tiny hand-drawn doodle for a glossary term. Decorative: the tooltip text carries the meaning. */
export function Doodle({ id, className }: { id: GlossaryId; className?: string }) {
  return (
    <svg viewBox="0 0 160 100" aria-hidden className={className}>
      {DOODLES[id]()}
    </svg>
  );
}
