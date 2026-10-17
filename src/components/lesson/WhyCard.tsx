"use client";

import { AnimatePresence, motion } from "motion/react";
import { LightbulbIcon, QuestionIcon } from "@phosphor-icons/react/ssr";
import { ink } from "@/components/ink/icons";
import { useState, type ReactNode } from "react";

/** Elaborative interrogation: ask why, let the reader guess, then reveal the reason. */
export function WhyCard({ q, a }: { q: ReactNode; a: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-4 pl-1">
      <div className="flex items-start gap-3">
        <QuestionIcon weight="duotone" size={34} aria-hidden className="shrink-0 text-blue-ink" />
        <div className="flex-1">
          <p className="font-pen text-[1.7rem] leading-8 text-blue-ink">{q}</p>
          <AnimatePresence initial={false} mode="wait">
            {open ? (
              <motion.div
                key="a"
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-1 border-l-[3px] border-green-ink/60 pl-3 leading-8"
              >
                <span className="font-pen text-xl text-green-ink"><LightbulbIcon {...ink} className="mr-1 inline align-[-0.15em]" />because… </span>
                {a}
              </motion.div>
            ) : (
              <motion.button
                key="q"
                type="button"
                onClick={() => setOpen(true)}
                className="mt-1 font-pencil text-2xl text-pencil underline decoration-dotted underline-offset-4 hover:text-green-ink"
                whileHover={{ x: 3 }}
              >
                think for 5 seconds, then tap to see why →
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
