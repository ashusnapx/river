import type { ComponentType } from "react";
import type { SketchId } from "@/content/types";
import { Antecedent } from "./Antecedent";
import { BankRule } from "./BankRule";
import { Braided } from "./Braided";
import { DeltaVsEstuary } from "./DeltaVsEstuary";
import { DrainagePatterns } from "./DrainagePatterns";
import { GreatBend } from "./GreatBend";
import { IndusTreaty } from "./IndusTreaty";
import { MeanderOxbow } from "./MeanderOxbow";
import { MonsoonKaveri } from "./MonsoonKaveri";
import { PanchPrayag } from "./PanchPrayag";
import { Regime } from "./Regime";
import { RiftValley } from "./RiftValley";
import { SlopeOfIndia } from "./SlopeOfIndia";
import { WaterDivide } from "./WaterDivide";

const SKETCHES: Record<SketchId, ComponentType> = {
  "slope-of-india": SlopeOfIndia,
  "bank-rule": BankRule,
  "rift-valley": RiftValley,
  "delta-vs-estuary": DeltaVsEstuary,
  antecedent: Antecedent,
  regime: Regime,
  "meander-oxbow": MeanderOxbow,
  braided: Braided,
  "drainage-patterns": DrainagePatterns,
  "panch-prayag": PanchPrayag,
  "indus-treaty": IndusTreaty,
  "great-bend": GreatBend,
  "water-divide": WaterDivide,
  "monsoon-kaveri": MonsoonKaveri,
};

export const SKETCH_TITLES: Record<SketchId, string> = {
  "slope-of-india": "The tilted tray: why most peninsular rivers flow east",
  "bank-rule": "Left bank, right bank: face downstream",
  "rift-valley": "Rift valley: a river in a faulted trough",
  "delta-vs-estuary": "Delta or estuary?",
  antecedent: "Antecedent river: older than the mountain",
  regime: "River regime: perennial vs seasonal",
  "meander-oxbow": "Meander to oxbow lake",
  braided: "Braided channels",
  "drainage-patterns": "Five drainage patterns",
  "panch-prayag": "Panch Prayag on the Alaknanda",
  "indus-treaty": "Indus Waters Treaty: six rivers split",
  "great-bend": "The great bend of the Tsangpo",
  "water-divide": "Water divide",
  "monsoon-kaveri": "Kaveri: one river, two monsoons",
};

export function Sketch({ id }: { id: SketchId }) {
  const Drawing = SKETCHES[id];
  return <Drawing />;
}
