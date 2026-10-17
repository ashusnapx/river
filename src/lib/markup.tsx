import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { REGISTRY } from "@/content/registry";
import { PHRASE_TO_ID, TERM_RE } from "@/content/glossary-index";
import { Term } from "@/components/glossary/Term";

/** Inline pen marks used across all content. Grammar lives in src/content/types.ts. */
const TOKEN = /(\*\*[^*]+?\*\*|==[^=]+?==|__[^_]+?__|!![^!]+?!!|\+\+[^+]+?\+\+|\[\[[^\]]+?\]\])/g;

/** Wrap the first occurrence of each glossary term in a tooltip. */
function withTerms(text: string, seen: Set<string>, key: string): ReactNode {
  if (!TERM_RE) return text;
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TERM_RE)) {
    const id = PHRASE_TO_ID.get(m[0].toLowerCase());
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push(text.slice(last, m.index), <Term key={`${key}-${m.index}`} id={id}>{m[0]}</Term>);
    last = m.index! + m[0].length;
  }
  if (!out.length) return text;
  out.push(text.slice(last));
  return out;
}

/**
 * Renders pen marks. `terms` turns glossary words into tooltips (turn it off inside
 * buttons and inside the tooltip itself); `links` turns [[river]] marks into links.
 */
export function Markup({ text, terms = true, links = true }: { text?: string; terms?: boolean; links?: boolean }): ReactNode {
  if (!text) return null;
  const seen = new Set<string>();
  const t = (s: string, key: string) => (terms ? withTerms(s, seen, key) : s);
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;
    const inner = part.slice(2, -2);
    if (part.startsWith("**")) return <strong key={i} className="pen-heavy">{t(inner, `${i}`)}</strong>;
    if (part.startsWith("==")) return <mark key={i} className="pen-hl text-inherit">{t(inner, `${i}`)}</mark>;
    if (part.startsWith("__")) return <span key={i} className="pen-underline">{t(inner, `${i}`)}</span>;
    if (part.startsWith("!!")) return <span key={i} className="pen-red">{t(inner, `${i}`)}</span>;
    if (part.startsWith("++")) return <span key={i} className="pen-green">{t(inner, `${i}`)}</span>;
    if (part.startsWith("[[")) {
      const [id, label] = inner.split("|");
      const known = REGISTRY[id];
      if (!known || !links) return <strong key={i} className="font-bold text-blue-ink">{label ?? known?.name ?? id}</strong>;
      return (
        <Link key={i} href={`/rivers/${id}`} className="river-link">
          {label ?? known.name}
        </Link>
      );
    }
    return <Fragment key={i}>{t(part, `${i}`)}</Fragment>;
  });
}

/** Plain text with marks stripped, for titles, aria labels and search. */
export function plain(text = ""): string {
  return text.replace(TOKEN, (m) => {
    if (m.startsWith("[[")) {
      const [id, label] = m.slice(2, -2).split("|");
      return label ?? REGISTRY[id]?.name ?? id;
    }
    return m.slice(2, -2);
  });
}
