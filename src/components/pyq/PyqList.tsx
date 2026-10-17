"use client";

import { useMemo, useState } from "react";
import { FunnelIcon, HourglassHighIcon, QuestionIcon, SealCheckIcon, WarningDiamondIcon } from "@phosphor-icons/react/ssr";
import { ink } from "@/components/ink/icons";
import type { Pyq } from "@/content/types";
import { REGISTRY } from "@/content/registry";
import { Markup } from "@/lib/markup";
import { Check } from "@/components/lesson/Check";

const STATUS: Record<NonNullable<Pyq["keyStatus"]>, { label: string; cls: string; Icon: typeof SealCheckIcon }> = {
  official: { label: "UPSC final key", cls: "text-green-ink border-green-ink", Icon: SealCheckIcon },
  provisional: { label: "provisional key", cls: "text-blue-ink border-blue-ink", Icon: HourglassHighIcon },
  disputed: { label: "disputed key", cls: "text-red-ink border-red-ink", Icon: WarningDiamondIcon },
  unverified: { label: "key unverified", cls: "text-pencil border-pencil", Icon: QuestionIcon },
};

/** Every river PYQ: filter, attempt, then read the reasoning. */
export function PyqList({ pyqs }: { pyqs: Pyq[] }) {
  const [exam, setExam] = useState<Pyq["exam"]>("prelims");
  const [skill, setSkill] = useState("all");
  const [q, setQ] = useState("");

  const ofExam = useMemo(() => pyqs.filter((p) => p.exam === exam), [pyqs, exam]);
  const skills = useMemo(() => [...new Set(ofExam.map((p) => p.skill))].sort(), [ofExam]);
  const shown = ofExam.filter(
    (p) => (skill === "all" || p.skill === skill) && (!q.trim() || (p.text + " " + p.riverIds.map((id) => REGISTRY[id]?.name).join(" ")).toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div>
      <div className="sticky top-[4.6rem] z-20 -mx-4 mb-6 flex flex-wrap items-end gap-x-5 gap-y-2 border-b border-ink/10 bg-paper/95 px-4 py-3">
        <div className="flex gap-2" role="radiogroup" aria-label="Exam">
          {(["prelims", "mains", "optional"] as const).map((e) => {
            const n = pyqs.filter((p) => p.exam === e).length;
            if (!n) return null;
            return (
              <button
                key={e}
                type="button"
                role="radio"
                aria-checked={exam === e}
                onClick={() => { setExam(e); setSkill("all"); }}
                className={`rounded-full border-2 px-3.5 font-pen text-xl leading-8 ${exam === e ? "border-blue-ink bg-blue-ink text-paper" : "border-ink/30 hover:border-ink"}`}
              >
                {e === "optional" ? "Geography optional" : e[0].toUpperCase() + e.slice(1)} · {n}
              </button>
            );
          })}
        </div>
        <label className="inline-flex items-center gap-1 font-pen text-lg text-pencil">
          <FunnelIcon {...ink} />pattern{" "}
          <select value={skill} onChange={(e) => setSkill(e.target.value)} className="ml-1 border-b-2 border-ink/30 bg-transparent font-hand text-base text-ink">
            <option value="all">all patterns</option>
            {skills.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="search a river or word"
          aria-label="Search questions"
          className="min-w-0 flex-1 border-0 border-b-2 border-ink/30 bg-transparent px-1 font-hand text-lg outline-none placeholder:text-pencil/60 focus:border-blue-ink"
        />
      </div>

      <p className="mb-4 font-pencil text-2xl text-pencil">{shown.length} questions{exam === "prelims" ? " · attempt first, then read how to reason it out" : ""}</p>

      <ol className="space-y-10">
        {shown.map((p) => (
          <li key={p.id} id={p.id} className="scroll-mt-40">
            <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-marker text-xl text-red-ink">
                {p.exam === "prelims" ? "Prelims" : p.exam === "mains" ? `Mains ${p.paper ?? ""}` : `Optional ${p.paper ?? ""}`} {p.year}
              </span>
              {p.marks && <span className="font-pen text-lg text-pencil">{p.marks} marks</span>}
              {p.keyStatus && (() => { const st = STATUS[p.keyStatus]; return <span className={`inline-flex items-center gap-1 rounded-sm border px-1.5 font-hand text-xs uppercase tracking-wider ${st.cls}`}><st.Icon {...ink} />{st.label}</span>; })()}
              <span className="font-pen text-lg text-blue-soft">#{p.skill}</span>
            </div>
            {p.exam === "prelims" && p.options && p.answer !== undefined ? (
              <Check
                id={p.id}
                prompt={<Markup text={p.text} />}
                options={p.options.map((o, i) => <Markup key={i} text={o} terms={false} />)}
                answer={p.answer}
                explain={<Markup text={p.explain} />}
              />
            ) : (
              <MainsCard p={p} />
            )}
            {p.riverIds.length > 0 && (
              <p className="font-pen text-lg text-pencil">
                rivers:{" "}
                {p.riverIds.map((id, i) => (
                  <span key={id}>
                    {i > 0 && ", "}
                    <a href={`/rivers/${id}`} className="river-link">{REGISTRY[id]?.name ?? id}</a>
                  </span>
                ))}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function MainsCard({ p }: { p: Pyq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative rotate-[0.3deg] bg-[#fffdf6] px-4 pb-3 pt-4 sticky-shadow">
      <span aria-hidden className="tape -top-3 right-8 rotate-[5deg]" />
      <p className="whitespace-pre-line text-[1.08rem] leading-8"><Markup text={p.text} /></p>
      {!open ? (
        <button type="button" onClick={() => setOpen(true)} className="mt-2 font-pencil text-2xl text-pencil underline decoration-dotted underline-offset-4 hover:text-green-ink">
          plan your answer in your head, then tap for the skeleton
        </button>
      ) : (
        <div className="mt-3 space-y-2 border-t border-dashed border-pencil/40 pt-2">
          <p className="leading-8"><Markup text={p.explain} /></p>
          {p.approach && (
            <ol className="list-decimal space-y-1 pl-6 marker:font-pen marker:text-red-ink">
              {p.approach.map((a, i) => (
                <li key={i} className="leading-7"><Markup text={a} /></li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}
