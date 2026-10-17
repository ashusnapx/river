import { Arrow, Dash, Hatch, Pen, River, T, Water, landD, type Pt } from "@/components/sketches/kit";
import { ellD, Hl, HlArea, Oval, Tuft, type Doodles } from "./bits";

/** Land and geology. */

const plateau: Pt[] = [[0, 82], [28, 82], [38, 42], [44, 38], [118, 36], [124, 40], [134, 82], [160, 82]];
const fx = (y: number) => 66 + (y - 8) * 0.311; // the fault line, as x at height y
const hills: Pt[] = [[0, 6], [18, 12], [34, 34], [46, 52], [60, 60], [90, 64], [160, 66]];
const pebbles = [[50, 54, 3.5], [58, 59, 3], [66, 60, 4], [75, 62, 3], [84, 63, 3.5], [56, 66, 2.5], [70, 68, 2.5], [80, 69, 2.2]];
const steps: Pt[] = [[0, 30], [44, 30], [52, 56], [96, 58], [100, 70], [132, 70], [136, 56], [160, 56]];

/** Foothills seen side-on: pebbly bhabar where the stream sinks, marshy terai where it comes back up. */
function Foothills({ hl }: { hl: "bhabar" | "terai" }) {
  return (
    <>
      <HlArea d={hl === "bhabar" ? ellD(68, 62, 28, 13) : ellD(126, 66, 32, 12)} o={0.6} />
      <Hatch d={landD(hills, 100)} seed="fh-h" gap={5} opacity={0.35} />
      <Pen pts={hills} seed="fh-s" ink="pencil" size={1.3} wob={0.3} />
      <Pen pts={[[12, 6], [24, 20], [36, 38], [46, 50]]} seed="fh-r" ink="blue" size={1.6} />
      <Dash pts={[[48, 56], [62, 72], [86, 76], [98, 70]]} ink="blue" w={1.4} dash="3 3" />
      <Arrow pts={[[96, 72], [103, 65]]} seed="fh-a" ink="blue" size={1.2} head={4} />
      {pebbles.map(([x, y, r], i) => (
        <Oval key={i} c={[x, y]} rx={r} ry={r * 0.8} seed={`fh-p${i}`} ink="pencil" fill="var(--color-paper)" w={1} />
      ))}
      <Oval c={[112, 66]} rx={10} ry={2.5} seed="fh-m1" ink="blue" fill="var(--color-water)" fo={0.4} w={0.9} />
      <Oval c={[140, 67]} rx={10} ry={2.5} seed="fh-m2" ink="blue" fill="var(--color-water)" fo={0.4} w={0.9} />
      {[[100, 12], [126, 15], [152, 12]].map(([x, h], i) => (
        <Tuft key={i} c={[x, 66]} h={h} seed={`fh-t${i}`} />
      ))}
      <T x={50} y={94} f="pencil" s={14} ink={hl === "bhabar" ? "red" : "pencil"} halo>sinks</T>
      <T x={156} y={94} f="pencil" s={14} ink={hl === "terai" ? "red" : "pencil"} a="end" halo>comes up</T>
    </>
  );
}

/** Valley cross-section: high old bhangar terrace, low new khadar floodplain by the river. */
function Terraces({ hl }: { hl: "khadar" | "bhangar" }) {
  return (
    <>
      {hl === "bhangar" ? <Hl pts={[[2, 26], [42, 26]]} w={8} /> : (
        <>
          <Hl pts={[[54, 52], [94, 54]]} w={8} />
          <Hl pts={[[138, 52], [158, 52]]} w={8} />
        </>
      )}
      <Water d="M98,62L134,62L132,70L100,70Z" opacity={0.55} />
      <Hatch d={landD(steps, 100)} seed="te-h" gap={5} opacity={0.4} />
      <Hatch d="M52,56L96,58L97,64L54,62Z" seed="te-d" style="dots" gap={2.5} ink="ink" opacity={0.6} />
      <Pen pts={steps} seed="te-p" size={1.6} curve={false} wob={0.3} />
      <Dash pts={[[52, 48], [158, 48]]} ink="blue" w={1.2} dash="3 4" />
      {[[10, 44], [26, 50], [36, 40], [18, 62], [34, 70]].map(([x, y], i) => (
        <Oval key={i} c={[x, y]} rx={2.2} seed={`te-k${i}`} ink="pencil" fill="var(--color-paper)" w={0.9} />
      ))}
      <T x={4} y={20} f="pencil" s={15} ink={hl === "bhangar" ? "red" : "pencil"}>old, high</T>
      <T x={58} y={42} f="pencil" s={15} ink={hl === "khadar" ? "red" : "pencil"}>new, floods</T>
    </>
  );
}

export const LAND = {
  plateau: () => (
    <>
      <Hl pts={[[46, 32], [116, 30]]} w={7} />
      <Hatch d={landD(plateau, 100)} seed="pl-h" gap={5} opacity={0.45} />
      <Pen pts={plateau} seed="pl-p" size={1.7} curve={false} wob={0.3} />
      {[64, 98].map((x, i) => (
        <g key={i}>
          <Pen pts={[[x, 37], [x, 28]]} seed={`pl-t${i}`} size={1.1} wob={0} />
          <Oval c={[x, 24]} rx={5} ry={4.5} seed={`pl-c${i}`} ink="green" fill="var(--color-green-ink)" fo={0.3} w={1.1} />
        </g>
      ))}
      <T x={80} y={12} f="pencil" s={15} ink="red" a="middle">high & flat</T>
    </>
  ),
  fault: () => (
    <>
      <Hatch d={`M6,22L${fx(22)},22L${fx(38)},38L6,38Z`} seed="fa-1" gap={4} opacity={0.4} />
      <Hatch d={`M6,54L${fx(54)},54L${fx(70)},70L6,70Z`} seed="fa-2" gap={4} opacity={0.4} />
      <Hatch d={`M${fx(36)},36L154,36L154,52L${fx(52)},52Z`} seed="fa-3" gap={4} opacity={0.4} />
      <Hatch d={`M${fx(68)},68L154,68L154,84L${fx(84)},84Z`} seed="fa-4" gap={4} opacity={0.4} />
      <Pen pts={[[fx(22), 22], [6, 22], [6, 98], [fx(98), 98]]} seed="fa-o1" size={1.4} curve={false} wob={0.3} />
      <Pen pts={[[fx(36), 36], [154, 36], [154, 98], [fx(98), 98]]} seed="fa-o2" size={1.4} curve={false} wob={0.3} />
      {[38, 54, 70, 86].map((y, i) => (
        <g key={i}>
          <Pen pts={[[6, y], [fx(y), y]]} seed={`fa-l${i}`} ink="pencil" size={0.9} wob={0.3} />
          <Pen pts={[[fx(y + 14), y + 14], [154, y + 14]]} seed={`fa-r${i}`} ink="pencil" size={0.9} wob={0.3} />
        </g>
      ))}
      <Pen pts={[[66, 6], [96, 100]]} seed="fa-f" ink="red" size={2} wob={0.3} />
      <Arrow pts={[[60, 74], [54, 54]]} seed="fa-u" size={1.4} head={5} />
      <Arrow pts={[[96, 46], [102, 66]]} seed="fa-d" size={1.4} head={5} />
    </>
  ),
  "rift-valley": () => (
    <>
      <Hatch d="M0,32L52,30L62,98L0,98Z" seed="rv-1" gap={5} opacity={0.4} />
      <Hatch d="M108,30L160,32L160,98L98,98Z" seed="rv-2" gap={5} opacity={0.4} />
      <Hatch d="M57,62L103,62L98,98L62,98Z" seed="rv-3" gap={4} angle={40} opacity={0.4} />
      <Pen pts={[[0, 32], [52, 30]]} seed="rv-t1" size={1.6} wob={0.3} />
      <Pen pts={[[108, 30], [160, 32]]} seed="rv-t2" size={1.6} wob={0.3} />
      <Pen pts={[[57, 62], [103, 62]]} seed="rv-t3" size={1.6} wob={0.3} />
      <Pen pts={[[52, 28], [62, 100]]} seed="rv-f1" ink="red" size={1.8} wob={0.2} />
      <Pen pts={[[108, 28], [98, 100]]} seed="rv-f2" ink="red" size={1.8} wob={0.2} />
      <Arrow pts={[[80, 30], [80, 50]]} seed="rv-a" size={1.6} head={6} />
      <Oval c={[80, 61]} rx={13} ry={3} seed="rv-w" ink="blue" fill="var(--color-water)" fo={0.6} w={1} />
      <T x={80} y={12} f="pencil" s={14} ink="red" a="middle">sinks between faults</T>
    </>
  ),
  doab: () => (
    <>
      <HlArea d="M22,0L138,0C132,30 116,56 80,84C46,58 28,32 22,0Z" />
      <River c={[[10, 0], [24, 36], [52, 70], [80, 90]]} w={8} seed="db-l" />
      <River c={[[150, 0], [136, 36], [108, 70], [80, 90]]} w={8} seed="db-r" />
      <River c={[[80, 88], [82, 100]]} w={12} seed="db-m" />
      {[[56, 26], [104, 26], [80, 46], [66, 60], [96, 60]].map(([x, y], i) => (
        <Tuft key={i} c={[x, y]} h={8} seed={`db-t${i}`} />
      ))}
      <T x={80} y={18} f="pencil" s={15} ink="red" a="middle">land between</T>
    </>
  ),
  bhabar: () => <Foothills hl="bhabar" />,
  terai: () => <Foothills hl="terai" />,
  khadar: () => <Terraces hl="khadar" />,
  bhangar: () => <Terraces hl="bhangar" />,
} satisfies Doodles;
