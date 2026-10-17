"use client";

import { useSyncExternalStore } from "react";

/** Everything is local to this browser: no login, no server. */
export interface Progress {
  /** furthest step index reached per chapter */
  steps: Record<string, number>;
  /** chapters finished */
  done: Record<string, boolean>;
  /** question id → answered correctly on first try */
  answers: Record<string, boolean>;
  /** flashcard id → Leitner box and next due time (ms) */
  cards: Record<string, { box: number; due: number }>;
  /** days with activity, YYYY-MM-DD */
  days: string[];
}

const KEY = "dhara:v1";
const EMPTY: Progress = { steps: {}, done: {}, answers: {}, cards: {}, days: [] };
const listeners = new Set<() => void>();
let cache: Progress | null = null;

function read(): Progress {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(KEY);
    cache = raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY;
  } catch {
    cache = EMPTY;
  }
  return cache!;
}

const today = () => new Date().toISOString().slice(0, 10);

export function update(fn: (p: Progress) => Progress) {
  const next = fn(read());
  const d = today();
  cache = next.days.includes(d) ? next : { ...next, days: [...next.days, d].slice(-400) };
  try {
    localStorage.setItem(KEY, JSON.stringify(cache));
  } catch {
    // private mode or storage full: progress just won't persist
  }
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      l();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(l);
    window.removeEventListener("storage", onStorage);
  };
}

export function useProgress(): Progress {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export function resetProgress() {
  update(() => EMPTY);
}

/** Leitner intervals in days for boxes 1..5. */
const INTERVALS = [0, 1, 3, 7, 16, 35];

export function gradeCard(id: string, knew: boolean) {
  update((p) => {
    const box = knew ? Math.min((p.cards[id]?.box ?? 0) + 1, 5) : 1;
    // a miss comes back in 10 minutes; a hit waits for its box interval
    const due = Date.now() + (knew ? INTERVALS[box] * 864e5 : 10 * 60e3);
    return { ...p, cards: { ...p.cards, [id]: { box, due } } };
  });
}

export function streak(days: string[]): number {
  const set = new Set(days);
  let n = 0;
  const d = new Date();
  if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
  while (set.has(d.toISOString().slice(0, 10))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
