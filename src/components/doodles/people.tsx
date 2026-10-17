import { Arrow, Dash, Hatch, INK, Pen, River, Rough, T, Water, type Pt } from "@/components/sketches/kit";
import { Drop } from "./Boondi";
import { Oval, Tuft, Waves, type Doodles } from "./bits";

/** People and rivers: dams, canals, sharing. */

const wall = (x0: number, x1: number, x2: number, x3: number, top: number): Pt[] => [[x0, top], [x1, top], [x2, 90], [x3, 90], [x0, top]];
const piers = [10, 38, 66, 94, 122, 150];
const lake = "M14,30C24,14 46,20 50,30C60,22 76,14 88,24C100,32 112,40 126,48C132,56 134,66 132,76C116,82 96,74 80,72C60,70 40,68 26,58C14,52 8,40 14,30Z";

/** Filled closed shape with a rough outline. */
const Blob = ({ d, seed, fill, ink = "pencil" }: { d: string; seed: string; fill: string; ink?: "pencil" | "blue" | "ink" }) => (
  <g>
    <path d={d} fill={fill} />
    <Rough shape={{ kind: "path", d }} seed={seed} o={{ stroke: INK[ink], strokeWidth: 1.2, roughness: 0.6, bowing: 0.5 }} />
  </g>
);

export const PEOPLE = {
  dam: () => (
    <>
      <Water d="M0,24L67,24L60,90L0,90Z" opacity={0.32} />
      <Pen pts={[[0, 24], [66, 24]]} seed="dm-s" ink="blue" size={1.1} />
      <Waves at={[[10, 44], [34, 62], [12, 76]]} seed="dm-w" w={10} />
      <Water d="M98,82L160,82L160,90L98,90Z" opacity={0.3} />
      <Hatch d="M66,14L78,14L100,90L60,90Z" seed="dm-h" gap={3} opacity={0.5} />
      <Pen pts={wall(66, 78, 100, 60, 14)} seed="dm-o" size={1.6} curve={false} wob={0.3} />
      <Pen pts={[[92, 68], [102, 72], [108, 82]]} seed="dm-j" ink="blue" size={1.4} />
      <Pen pts={[[0, 90], [160, 90]]} seed="dm-g" ink="pencil" size={1.2} />
      <Drop x={36} y={26} r={6.5} />
      <T x={130} y={40} f="pencil" s={15} ink="red" a="middle">tall wall</T>
    </>
  ),
  barrage: () => (
    <>
      <Water d="M0,70L160,70L160,90L0,90Z" opacity={0.3} />
      {piers.slice(0, -1).map((x, i) => (
        <g key={i}>
          <path d={`M${x + 5},44L${piers[i + 1] - 5},44L${piers[i + 1] - 5},62L${x + 5},62Z`} fill="var(--color-paper-deep)" />
          <Pen pts={[[x + 5, 44], [piers[i + 1] - 5, 44], [piers[i + 1] - 5, 62], [x + 5, 62], [x + 5, 44]]} seed={`bg-g${i}`} size={1} curve={false} wob={0.2} />
          <Pen pts={[[(x + piers[i + 1]) / 2, 34], [(x + piers[i + 1]) / 2, 44]]} seed={`bg-c${i}`} ink="pencil" size={0.8} wob={0} />
          <Waves at={[[x + 8, 78]]} seed={`bg-w${i}`} w={10} />
        </g>
      ))}
      {piers.map((x, i) => (
        <Pen key={i} pts={[[x, 34], [x, 90]]} seed={`bg-p${i}`} size={3.2} curve={false} wob={0.2} />
      ))}
      <Pen pts={[[4, 34], [156, 34]]} seed="bg-d" size={2} wob={0.3} />
      <Pen pts={[[0, 91], [160, 91]]} seed="bg-b" ink="pencil" size={1.2} />
      <T x={80} y={22} f="pencil" s={15} ink="red" a="middle">low, with gates</T>
    </>
  ),
  reservoir: () => (
    <>
      <Pen pts={[[0, 6], [8, 16], [16, 28]]} seed="rs-in" ink="blue" size={1.4} />
      <Blob d={lake} seed="rs-l" fill="var(--color-water)" ink="blue" />
      <path d={lake} fill="var(--color-paper)" opacity={0.7} />
      <Waves at={[[30, 44], [98, 58]]} seed="rs-w" w={10} />
      <Pen pts={[[126, 44], [136, 80]]} seed="rs-d" size={3.6} wob={0.2} />
      <Pen pts={[[136, 66], [148, 76], [160, 92]]} seed="rs-out" ink="blue" size={1.2} />
      <Drop x={68} y={46} r={6.5} />
    </>
  ),
  "run-of-river": () => (
    <>
      <River c={[[0, 16], [50, 30], [100, 58], [160, 90]]} w={12} seed="rr-r" />
      <Pen pts={[[26, 16], [33, 34]]} seed="rr-w" size={2.8} wob={0.2} />
      <Pen pts={[[38, 22], [70, 22], [104, 28]]} seed="rr-p" size={2} wob={0.3} />
      <path d="M104,18L128,18L128,38L104,38Z" fill="var(--color-paper-deep)" />
      <Pen pts={[[104, 38], [104, 18], [128, 18], [128, 38], [104, 38]]} seed="rr-h" size={1.3} curve={false} wob={0.2} />
      <path d="M118,20L110,29L115,29L111,37L121,27L116,27Z" fill="var(--color-hl)" stroke="var(--color-red-ink)" strokeWidth={0.9} strokeLinejoin="round" />
      <Arrow pts={[[120, 40], [122, 60]]} seed="rr-t" ink="blue" size={1.3} head={4} />
      <T x={4} y={94} f="pencil" s={14} ink="red">no big lake</T>
    </>
  ),
  canal: () => (
    <>
      <River c={[[22, 0], [16, 50], [26, 100]]} w={16} seed="cn-r" />
      <path d="M24,36L130,36L130,58L118,58L118,48L24,48Z" fill="var(--color-water)" fillOpacity={0.3} />
      <Pen pts={[[24, 36], [130, 36], [130, 58]]} seed="cn-a" ink="blue" size={1.3} curve={false} wob={0.2} />
      <Pen pts={[[24, 48], [118, 48], [118, 58]]} seed="cn-b" ink="blue" size={1.3} curve={false} wob={0.2} />
      <Arrow pts={[[50, 42], [80, 42]]} seed="cn-f" ink="blue" size={1.2} head={4} />
      <Pen pts={[[90, 58], [156, 58], [156, 94], [90, 94], [90, 58]]} seed="cn-o" ink="pencil" size={1} curve={false} wob={0.3} />
      {[68, 78, 88].map((y) => (
        <Dash key={y} pts={[[96, y], [152, y]]} ink="green" w={2.4} dash="1 5" />
      ))}
      <Drop x={64} y={26} r={5} />
    </>
  ),
  interlinking: () => (
    <>
      <River c={[[30, 0], [26, 50], [32, 100]]} w={24} seed="il-a" opacity={0.35} />
      <River c={[[132, 0], [136, 50], [130, 100]]} w={6} seed="il-b" opacity={0.1} />
      <path d="M38,44L133,44L133,56L38,56Z" fill="var(--color-water)" fillOpacity={0.25} />
      <Pen pts={[[38, 44], [133, 44]]} seed="il-t" ink="blue" size={1.2} curve={false} wob={0.2} />
      <Pen pts={[[38, 56], [133, 56]]} seed="il-u" ink="blue" size={1.2} curve={false} wob={0.2} />
      <Arrow pts={[[60, 34], [112, 34]]} seed="il-r" ink="red" size={1.5} head={5} />
      <Drop x={86} y={52} r={5} />
      <T x={4} y={96} f="pencil" s={14} ink="blue" halo>surplus</T>
      <T x={156} y={96} f="pencil" s={14} ink="red" a="end" halo>short</T>
    </>
  ),
  tribunal: () => (
    <>
      <Blob d="M6,44C4,30 24,26 44,30C60,28 76,34 80,42L80,94C60,96 30,94 12,90C4,76 8,58 6,44Z" seed="tb-a" fill="var(--color-sticky-pink)" />
      <Blob d="M80,42C84,30 104,28 122,32C142,30 156,38 154,52C156,68 152,84 140,92C120,96 96,94 80,94Z" seed="tb-b" fill="var(--color-sticky-blue)" />
      <Dash pts={[[80, 42], [80, 94]]} ink="ink" w={1.2} dash="4 3" />
      <Pen pts={[[6, 72], [40, 68], [80, 74], [120, 68], [154, 74]]} seed="tb-r" ink="blue" size={2.4} />
      <T x={40} y={58} f="marker" s={14} a="middle">A</T>
      <T x={120} y={58} f="marker" s={14} a="middle">B</T>
      <g transform="rotate(-25 86 14)">
        <Pen pts={[[86, 19], [86, 44]]} seed="tb-h" size={2.2} wob={0.2} />
        <path d="M72,8L100,8L100,20L72,20Z" fill="var(--color-paper-deep)" />
        <Pen pts={[[72, 8], [100, 8], [100, 20], [72, 20], [72, 8]]} seed="tb-g" size={1.4} curve={false} wob={0.2} />
        <Pen pts={[[77, 8], [77, 20]]} seed="tb-g1" size={1} wob={0} />
        <Pen pts={[[95, 8], [95, 20]]} seed="tb-g2" size={1} wob={0} />
      </g>
      {([[[58, 16], [50, 14]], [[60, 24], [52, 28]], [[62, 8], [56, 2]]] as Pt[][]).map((p, i) => (
        <Pen key={i} pts={p} seed={`tb-x${i}`} ink="red" size={1.3} wob={0} />
      ))}
    </>
  ),
  "e-flow": () => (
    <>
      <Water d="M0,26L25,26L16,90L0,90Z" opacity={0.32} />
      <Hatch d="M22,20L32,20L46,90L12,90Z" seed="ef-h" gap={3} opacity={0.5} />
      <Pen pts={wall(22, 32, 46, 12, 20)} seed="ef-w" size={1.5} curve={false} wob={0.3} />
      <Water d="M44,66L160,66L160,90L46,90Z" opacity={0.3} />
      <Pen pts={[[44, 66], [160, 66]]} seed="ef-s" ink="blue" size={1} wob={0.4} />
      <Dash pts={[[48, 70], [158, 70]]} ink="red" w={1.4} dash="4 3" />
      <T x={156} y={58} f="pencil" s={15} ink="red" a="end">minimum flow</T>
      <Oval c={[98, 80]} rx={8} ry={4} seed="ef-f" fill="var(--color-hl)" w={1.1} />
      <path d="M90,80L83,75L83,85Z" fill="var(--color-ink)" />
      <circle cx={102} cy={79} r={0.9} fill="var(--color-ink)" />
      <Tuft c={[130, 90]} h={12} seed="ef-t1" />
      <Tuft c={[66, 90]} h={10} seed="ef-t2" />
      <Pen pts={[[0, 91], [160, 91]]} seed="ef-g" ink="pencil" size={1.2} />
    </>
  ),
} satisfies Doodles;
