# Dhara (धारा) — rivers, reasoned

A free, static web app that teaches UPSC Civil Services aspirants every river topic through **reasons instead of rote**. It is built as a topper's hand-drawn notebook: step-by-step lessons, a hand-drawn atlas, tributary "spines", every river PYQ since 2011 solved by reasoning, a confusion clinic and spaced revision.

- **Pure frontend:** `next build` emits a static site in `out/`. There is no server, login, database or runtime API. Progress stays in the browser's `localStorage`, with a backup and restore option on `/revise`.
- **Stack:** Next.js 16 (App Router, static export), React 19, Tailwind CSS 4, `motion` for animation, `roughjs` and `perfect-freehand` for the hand-drawn strokes.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static site in out/
npx tsx scripts/validate.ts   # content checks: ids, links, pen marks, answers
```

## Where things live

| Path | What |
|---|---|
| `src/content/types.ts` | Content schema and the inline "pen mark" grammar |
| `src/content/registry.ts` | Canonical river ids, shared by content, maps and PYQs |
| `src/content/rivers/*.ts` | One file per river system |
| `src/content/chapters/*.ts` | Step-by-step lessons |
| `src/content/pyqs.ts`, `confusions.ts` | PYQ bank and confusion clinic |
| `docs/content-guide.md` | How to write content: reason-first and source-checked |
| `src/data/*.json` | Map geometry, pre-projected to SVG paths at build time |
| `scripts/geo/` | The pipeline that produces the map JSON from public-domain survey data |
| `research_notes/`, `reports/` | Market, PYQ, pedagogy, data and legal research behind the product |

## Content rules (short version)

Every fact carries a `because`. Facts are checked against official sources first: NCERT, UPSC papers, Jal Shakti/CWC/NWDA/NMCG, PIB and MEA. Where NCERT and newer research differ, the exam answer comes first and the nuance goes in an exam note. Time-sensitive facts carry the month and year they were checked, so they can be refreshed.

## Maps

The maps are schematic and for learning only. India's external boundary follows India's official position: Natural Earth's India point-of-view boundary, checked programmatically. The border is drawn exactly; the hand-drawn wobble applies to rivers and labels only. River geometry is derived once from HydroRIVERS (Lehner & Grill 2013) and Natural Earth, then committed as static JSON.
