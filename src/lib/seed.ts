/** Deterministic randomness so hand-drawn wobble is identical on server and client. */
export function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function rng(seed: string | number) {
  let a = typeof seed === "number" ? seed : hash(seed);
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A small tilt in degrees, e.g. tilt("ganga", 1.5) → somewhere in [-1.5, 1.5]. */
export function tilt(key: string, max = 1.2): number {
  return Math.round(((hash(key) % 1000) / 1000 - 0.5) * 2 * max * 100) / 100;
}
