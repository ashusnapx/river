"use client";

import { motion } from "motion/react";
import { ArrowRightIcon, EyeIcon, LightbulbIcon } from "@phosphor-icons/react/ssr";
import { ink } from "@/components/ink/icons";
import { useState, type ReactNode } from "react";
import { tilt } from "@/lib/seed";

/** Question on the front; reveal to see the answer and, in green, the reason. */
export function FactCard({ id, q, a, because, tag }: { id: string; q: ReactNode; a: ReactNode; because: ReactNode; tag?: string }) {
  const [open, setOpen] = useState(false);
  return (
    // the card is a div (not a button) so glossary tooltips inside it stay valid, clickable buttons
    <motion.div
      onClick={() => setOpen((v) => !v)}
      className="relative block w-full cursor-pointer rounded-sm bg-[#fffdf6] p-4 text-left sticky-shadow"
      style={{ rotate: tilt(id, 0.9) }}
      whileHover={{ y: -2 }}
    >
      {tag && tag !== "core" && (
        <span className={`absolute right-3 top-2 font-marker text-xs uppercase tracking-widest ${tag === "trap" ? "text-red-ink" : tag === "news" ? "text-green-ink" : "text-blue-ink"}`}>
          {tag}
        </span>
      )}
      <p className="pr-10 font-pen text-[1.55rem] font-bold leading-8 text-blue-ink">{q}</p>
      {open ? (
        <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-2 space-y-1">
          <p className="leading-8">
            <ArrowRightIcon {...ink} className="mr-1 inline align-[-0.15em]" />
            <strong>{a}</strong>
          </p>
          <p className="border-l-[3px] border-green-ink/50 pl-3 text-[1rem] leading-7">
            <span className="font-pen text-lg text-green-ink"><LightbulbIcon {...ink} className="mr-1 inline align-[-0.15em]" />because </span>
            {because}
          </p>
        </motion.div>
      ) : (
        <button
          type="button"
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="mt-1 inline-flex items-center gap-1.5 font-pencil text-xl text-pencil hover:text-ink"
        >
          <EyeIcon {...ink} /> answer in your head, then tap
        </button>
      )}
    </motion.div>
  );
}
