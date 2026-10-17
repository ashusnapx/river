# Content guide: the river notebook

The product promise: **an aspirant never mugs up a river fact. Every fact arrives with its reason.**
Write like a topper's notebook explained by a patient senior: short sentences, Indian English, second person, zero fluff, no emojis.

Schema: `src/content/types.ts`. River ids: `src/content/registry.ts` (only these ids, plus any you add to your own system in the registry).

## 1. Reason first, always

Every `Fact.because`, `personality` line, `journey.why` and `Question.explain` must give a **real cause**:
geology (rift, tilt, antecedence, hard rock), slope and relief, climate (glacier melt, SW/NE monsoon), sediment load, history, or etymology.

- Good: "Narmada forms an estuary, not a delta, ++because it runs fast through a hard-rock rift trough and carries little silt; tides sweep the mouth clean++."
- Bad: "Narmada forms an estuary because it is a west-flowing river." (restates, explains nothing)
- When no physical reason exists (a name, an administrative fact), give a **logic hook**: spatial order, a story, the word's meaning. Say plainly that it is a hook.
- Mnemonics are allowed only with their logic attached (`remember.logic`). Prefer hooks that follow geography (west → east, upstream → downstream) over random acronyms.

## 2. Accuracy rules (UPSC punishes one wrong word)

- Verify every fact with at least one reliable source: NCERT Class 11 *India: Physical Environment* (ch. 3 Drainage System) and Class 9 *Contemporary India I* (ch. 3 Drainage) first; then CWC / India-WRIS basin reports, NMCG, PIB, state government sites, Britannica.
- Where NCERT and newer research disagree (e.g. Brahmaputra source, Ganga considered from Devprayag), write the NCERT/exam answer in the main field and the nuance in `source.examNote` or a `trap`.
- Lengths: use NCERT figures where NCERT gives them; otherwise CWC/India-WRIS; put the source in `lengthKm.note`. If sources disagree and you cannot settle it, omit the length.
- **Banks are named facing downstream on the parent river.** Left hand = left bank.
- `order` counts along the parent from its source (1 = joins nearest the parent's source).
- Never invent numbers, dates, dam heights or quotes. If unsure, leave it out.
- Current affairs: date every item; current date is October 2026. Verify with a news or government source.
- Hindi names in Devanagari only when you are sure of the spelling.

## 3. Pen marks (inline markup)

`**heavy pen**`, `==highlighter==`, `__red underline__`, `!!red pen!!`, `++green pen (reason)++`, `[[river-id]]`, `[[river-id|label]]`.
No nesting. At most two marks per sentence; a page full of highlighter teaches nothing.
Use `++…++` for the *because* part of sentences; this trains the eye to look for reasons.

## 4. Chapters: step by step

- 8–14 steps per chapter. A step is one idea, readable in about one minute.
- A good step rhythm: **notice** (`say`) → **ask why** (`why`) → **the rule** (`law`) → **lock it** (`remember`) → **test it** (`check`). Not every step needs all five.
- Each river-system chapter needs at least one `map` block (`focus` = river ids, `trace: true` animates source → mouth) and one `spine` block (draws the tributary spine of a river from the data).
- `sketch` blocks may use only the `SketchId` values in `types.ts`.
- `check` questions follow UPSC style: statement sets, pairs ("how many of the above pairs are correctly matched"), single-fact, arrange-in-order. Write `explain` as a reasoning walk-through, and `trap` for the tempting wrong option.
- Chapter `number`s (reading order): 1 foundations · 2 Indus · 3–4 Ganga · 5 Brahmaputra & NE · 6–7 peninsular east-flowing · 8 peninsular west-flowing · 9 rivers & the nation (issues) · 10 world rivers.

## 5. Volume

- Rank 1 rivers: 6–12 journey legs, 6–15 facts, all key places, traps, hooks, news.
- Rank 2: 3–6 legs, 3–8 facts. Rank 3: 2–3 legs, 2–4 facts.
- Fill `personality` with 2–4 cause → effect chains for every river.

## 6. Self-check before you finish

```
npx tsx scripts/validate.ts <your files>
```
It checks ids, references, markup balance, answer indices and sketch ids. Fix every error.
