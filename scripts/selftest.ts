/** Tiny self-checks for non-trivial helpers. Run: npx tsx scripts/selftest.ts */
import assert from "node:assert/strict";
import { plain } from "../src/lib/markup";
import { streak } from "../src/lib/progress";
import { tilt } from "../src/lib/seed";

// pen marks strip to plain text; river links resolve to registry names
assert.equal(plain("**Narmada** flows ++west++ through a ==rift== to [[tapi|its twin]] and [[ganga]]"), "Narmada flows west through a rift to its twin and Ganga");
assert.equal(plain("!!not!! __this__"), "not this");

// streak counts consecutive days ending today (or yesterday)
const day = (offset: number) => {
  const d = new Date();
  d.setDate(d.getDate() - offset);
  return d.toISOString().slice(0, 10);
};
assert.equal(streak([day(0), day(1), day(2)]), 3);
assert.equal(streak([day(1), day(2)]), 2);
assert.equal(streak([day(0), day(2)]), 1);
assert.equal(streak([]), 0);

// wobble is deterministic and bounded
assert.equal(tilt("ganga"), tilt("ganga"));
assert.ok(Math.abs(tilt("x", 1.5)) <= 1.5);

console.log("selftest ok");
