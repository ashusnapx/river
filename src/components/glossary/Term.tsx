"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { GLOSSARY } from "@/content/glossary-index";
import type { GlossaryId } from "@/content/glossary-ids";
import dynamic from "next/dynamic";

// doodles load on the first hover, not with every page
const Doodle = dynamic(() => import("@/components/doodles").then((m) => m.Doodle), {
  ssr: false,
  loading: () => <div className="mx-auto -mb-1 h-[86px] w-[138px]" />,
});
import { Boondi } from "@/components/doodles/Boondi";
import { Markup } from "@/lib/markup";

const W = 320;

/**
 * A glossary word in running text. Hover, focus or tap to see:
 * the doodle, the exact definition, Boondi's 5-year-old version, and an Indian example.
 */
export function Term({ id, children }: { id: GlossaryId; children: ReactNode }) {
  const t = GLOSSARY[id];
  const tipId = useId();
  const btn = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number; above: boolean } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const place = useCallback(() => {
    const r = btn.current?.getBoundingClientRect();
    if (!r) return;
    const above = r.bottom + 360 > window.innerHeight && r.top > 360;
    const left = Math.min(Math.max(8, r.left + r.width / 2 - W / 2), window.innerWidth - W - 8);
    setPos({ top: above ? r.top - 8 : r.bottom + 8, left, above });
  }, []);

  const show = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), 120);
  };
  const hide = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 160);
  };

  useLayoutEffect(() => {
    if (open) place();
  }, [open, place]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => !btn.current?.contains(e.target as Node) && !(e.target as HTMLElement).closest?.(`[data-tip="${tipId}"]`) && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("scroll", place, { passive: true });
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("scroll", place);
      window.removeEventListener("resize", place);
    };
  }, [open, place, tipId]);

  useEffect(() => () => clearTimeout(timer.current), []);

  if (!t) return <>{children}</>;

  return (
    <>
      <button
        ref={btn}
        type="button"
        className="term"
        aria-expanded={open}
        aria-describedby={open ? tipId : undefined}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        onClick={(e) => {
          e.stopPropagation();
          clearTimeout(timer.current);
          setOpen((o) => !o);
        }}
      >
        {children}
      </button>
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && pos && (
              <motion.div
                id={tipId}
                data-tip={tipId}
                role="tooltip"
                initial={{ opacity: 0, y: pos.above ? 6 : -6, rotate: -0.6 }}
                animate={{ opacity: 1, y: 0, rotate: -0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.16 }}
                onMouseEnter={() => clearTimeout(timer.current)}
                onMouseLeave={hide}
                className="fixed z-[60] bg-[#fffdf6] px-4 pb-3 pt-2 font-hand text-[0.95rem] leading-6 text-ink sticky-shadow"
                style={{ top: pos.top, left: pos.left, width: W, transform: pos.above ? "translateY(-100%)" : undefined }}
              >
                <span aria-hidden className="tape -top-3 left-1/2 w-16 -translate-x-1/2 rotate-[-3deg]" />
                <Doodle id={t.id} className="mx-auto -mb-1 block h-[86px] w-[138px]" />
                <p className="flex items-baseline gap-2 font-pen text-[1.6rem] font-bold leading-8">
                  {t.term}
                  {t.hindi && <span className="font-hand text-base font-normal text-red-ink">{t.hindi}</span>}
                </p>
                <p className="mt-0.5">
                  <span className="font-marker text-[0.68rem] uppercase tracking-[0.18em] text-blue-ink">exactly · </span>
                  <Markup text={t.exact} terms={false} links={false} />
                </p>
                <div className="mt-2 flex gap-2 rounded-sm bg-sticky-blue/60 px-2 py-1.5">
                  <Boondi size={30} mood="happy" decorative className="mt-0.5 shrink-0" />
                  <p>
                    <span className="font-pen text-lg text-blue-ink">like you&apos;re 5: </span>
                    <Markup text={t.kid} terms={false} links={false} />
                  </p>
                </div>
                {t.example && (
                  <p className="mt-1.5 text-[0.9rem] leading-5 text-ink/80">
                    <span className="font-pen text-base text-green-ink">e.g. </span>
                    <Markup text={t.example} terms={false} links={false} />
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
