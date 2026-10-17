import { Arrow, Dash, Hatch, INK, Pen, River, Rough, T, Water, landD, type Pt } from "@/components/sketches/kit";
import { Drop } from "./Boondi";
import { Cloud, Oval, Sun, Tuft, Watch, Waves, type Doodles } from "./bits";

/** How rivers behave: flow, water and sediment. */

const snowPeak: Pt[] = [[0, 76], [26, 22], [54, 76]];
const months = [8, 6, 6, 7, 12, 32, 56, 64, 48, 26, 14, 10]; // a monsoon river: peak in Jul–Aug
const glPeaks: Pt[] = [[0, 50], [22, 14], [40, 26], [62, 4], [80, 12], [100, 2], [120, 24], [138, 10], [160, 44]];
const sand: Pt[] = [[34, 46], [52, 58], [64, 44], [82, 62], [96, 50], [108, 64], [48, 68], [74, 54], [118, 56], [88, 70], [40, 58], [102, 42]];

/** A bar of the flow chart: pale water fill, rough blue outline. */
const Blk = ({ d, seed }: { d: string; seed: string }) => (
  <g>
    <path d={d} fill="var(--color-water)" fillOpacity={0.45} />
    <Rough shape={{ kind: "path", d }} seed={seed} o={{ stroke: INK.blue, strokeWidth: 1, roughness: 0.5, bowing: 0.3 }} />
  </g>
);

/** A wavy horizontal line, for rock and soil layers. */
const layer = (y: number, x0 = 0, x1 = 160, amp = 1.5): Pt[] => Array.from({ length: 6 }, (_, i) => [x0 + ((x1 - x0) * i) / 5, y + (i % 2 ? amp : -amp)]);

export const BEHAVIOUR = {
  perennial: () => (
    <>
      <Hatch d={landD(snowPeak, 76)} seed="pe-h" gap={5} opacity={0.4} />
      <path d="M15,46L26,22L37,46L32,41L27,48L21,41Z" fill="#fff" />
      <Pen pts={snowPeak} seed="pe-m" ink="pencil" size={1.4} curve={false} wob={0.3} />
      <River c={[[40, 66], [76, 72], [112, 62], [158, 68]]} w={(t) => 4 + t * 9} seed="pe-r" />
      <Sun c={[126, 22]} seed="pe-s" />
      <T x={152} y={96} f="pencil" s={14} ink="blue" a="end">flows all year</T>
    </>
  ),
  "seasonal-river": () => (
    <>
      <Dash pts={[[80, 4], [80, 96]]} w={1} dash="3 5" />
      <Cloud c={[40, 16]} seed="sr-c" rain={4} />
      <River c={[[2, 64], [40, 58], [76, 64]]} w={14} seed="sr-r" />
      <Sun c={[120, 20]} seed="sr-s" />
      <Pen pts={[[84, 57], [120, 51], [158, 57]]} seed="sr-b1" ink="pencil" size={1.4} />
      <Pen pts={[[84, 71], [120, 65], [158, 71]]} seed="sr-b2" ink="pencil" size={1.4} />
      {[96, 120, 142].map((x, i) => (
        <Pen key={i} pts={[[x, 58], [x + 3, 62], [x - 1, 65], [x + 2, 68]]} seed={`sr-k${i}`} ink="pencil" size={0.9} curve={false} wob={0.2} />
      ))}
      <T x={40} y={94} f="pencil" s={15} ink="blue" a="middle">rains</T>
      <T x={120} y={94} f="pencil" s={15} ink="red" a="middle">dry season</T>
    </>
  ),
  regime: () => (
    <>
      <Pen pts={[[14, 6], [14, 84], [156, 84]]} seed="re-ax" ink="pencil" size={1.2} curve={false} wob={0.3} />
      {months.map((h, i) => (
        <Blk key={i} d={`M${18 + i * 11.4},84V${84 - h}h8V84Z`} seed={`re-b${i}`} />
      ))}
      <Cloud c={[100, 10]} seed="re-c" />
      <T x={22} y={97} f="pencil" s={13} ink="pencil" a="middle">Jan</T>
      <T x={147} y={97} f="pencil" s={13} ink="pencil" a="middle">Dec</T>
    </>
  ),
  discharge: () => (
    <>
      <River c={[[0, 56], [160, 56]]} w={40} seed="dc-r" />
      <Dash pts={[[100, 34], [100, 78]]} ink="red" w={1.4} dash="3 3" />
      {[46, 56, 66].map((y, i) => (
        <Arrow key={i} pts={[[i === 1 ? 46 : 56, y], [i === 1 ? 128 : 118, y]]} seed={`dc-a${i}`} ink="blue" size={1.4} head={5} />
      ))}
      <Watch c={[100, 18]} seed="dc-w" />
    </>
  ),
  cusec: () => (
    <>
      <path d="M56,38L84,38L84,66L56,66Z" fill="var(--color-water)" fillOpacity={0.3} />
      <path d="M56,38L66,30L94,30L84,38Z" fill="var(--color-water)" fillOpacity={0.15} />
      <path d="M84,38L94,30L94,58L84,66Z" fill="var(--color-water)" fillOpacity={0.45} />
      <Pen pts={[[56, 38], [84, 38], [84, 66], [56, 66], [56, 38]]} seed="cu-f" size={1.2} curve={false} wob={0.3} />
      <Pen pts={[[56, 38], [66, 30], [94, 30], [84, 38]]} seed="cu-t" size={1.2} curve={false} wob={0.3} />
      <Pen pts={[[94, 30], [94, 58], [84, 66]]} seed="cu-s" size={1.2} curve={false} wob={0.3} />
      {([[[20, 42], [46, 42]], [[12, 52], [48, 52]], [[22, 62], [46, 62]]] as Pt[][]).map((p, i) => (
        <Pen key={i} pts={p} seed={`cu-m${i}`} ink="pencil" size={1} />
      ))}
      <T x={70} y={80} f="pencil" s={14} a="middle">1 foot</T>
      <Arrow pts={[[100, 50], [124, 50]]} seed="cu-a" ink="blue" size={1.4} head={5} />
      <Watch c={[142, 48]} seed="cu-w" />
      <T x={142} y={74} f="pencil" s={14} ink="red" a="middle">1 sec</T>
    </>
  ),
  tmc: () => (
    <>
      <path d="M10,36L58,36L58,84L10,84Z" fill="var(--color-water)" fillOpacity={0.3} />
      <path d="M10,36L22,24L70,24L58,36Z" fill="var(--color-water)" fillOpacity={0.15} />
      <path d="M58,36L70,24L70,72L58,84Z" fill="var(--color-water)" fillOpacity={0.45} />
      <Pen pts={[[10, 36], [58, 36], [58, 84], [10, 84], [10, 36]]} seed="tm-f" size={1.4} curve={false} wob={0.4} />
      <Pen pts={[[10, 36], [22, 24], [70, 24], [58, 36]]} seed="tm-t" size={1.4} curve={false} wob={0.4} />
      <Pen pts={[[70, 24], [70, 72], [58, 84]]} seed="tm-s" size={1.4} curve={false} wob={0.4} />
      <Waves at={[[18, 52], [34, 66]]} seed="tm-w" w={10} />
      <T x={80} y={36} f="pencil" s={15} ink="blue">1000</T>
      <T x={80} y={52} f="pencil" s={15} ink="blue">million</T>
      <T x={80} y={68} f="pencil" s={15} ink="blue">cubic feet</T>
      <Drop x={76} y={86} r={4.5} mood="wow" />
    </>
  ),
  monsoon: () => (
    <>
      <Water d="M0,62C30,58 60,64 86,60L86,100L0,100Z" opacity={0.3} />
      <Waves at={[[8, 74], [40, 84], [14, 92], [58, 94]]} seed="mn-w" />
      <Hatch d={landD([[86, 100], [86, 62], [102, 50], [120, 36], [136, 46], [160, 52]], 100)} seed="mn-h" gap={5} opacity={0.4} />
      <Pen pts={[[86, 100], [86, 62], [102, 50], [120, 36], [136, 46], [160, 52]]} seed="mn-l" ink="pencil" size={1.4} wob={0.4} />
      <Cloud c={[118, 14]} seed="mn-c" rain={5} />
      <Arrow pts={[[6, 52], [40, 40], [86, 22]]} seed="mn-a" ink="red" size={1.6} head={6} />
      <Drop x={40} y={28} r={5} />
    </>
  ),
  glacier: () => (
    <>
      <Hatch d={landD(glPeaks, 70)} seed="gl-h" gap={5} opacity={0.35} />
      <Pen pts={glPeaks} seed="gl-m" ink="pencil" size={1.3} curve={false} wob={0.3} />
      <path d="M44,16C56,26 62,42 68,62C74,68 88,68 94,62C100,42 106,26 118,16C104,10 90,14 80,12C70,14 58,10 44,16Z" fill="#fff" />
      <Water d="M44,16C56,26 62,42 68,62C74,68 88,68 94,62C100,42 106,26 118,16C104,10 90,14 80,12C70,14 58,10 44,16Z" opacity={0.14} />
      <Pen pts={[[44, 16], [56, 26], [62, 42], [68, 62], [80, 67], [94, 62], [100, 42], [106, 26], [118, 16]]} seed="gl-o" ink="blue" size={1.2} wob={0.4} />
      <T x={120} y={88} f="pencil" s={14} ink="blue">ice</T>
      {([[[62, 24], [80, 29], [100, 24]], [[66, 40], [80, 45], [96, 40]], [[71, 54], [80, 57], [90, 54]]] as Pt[][]).map((p, i) => (
        <Pen key={i} pts={p} seed={`gl-c${i}`} ink="pencil" size={0.9} />
      ))}
      <River c={[[80, 66], [77, 82], [84, 100]]} w={(t) => 3 + t * 5} seed="gl-r" />
      <Drop x={104} y={80} r={6} />
    </>
  ),
  erosion: () => (
    <>
      <Water d="M0,36L100,36C102,50 98,58 106,70C112,82 112,92 112,100L0,100Z" opacity={0.25} />
      <Hatch d="M100,26L160,26L160,100L112,100C112,90 112,80 106,70C98,58 102,46 100,26Z" seed="er-h" gap={4} opacity={0.5} />
      <Pen pts={[[100, 26], [102, 44], [100, 56], [106, 70], [112, 84], [112, 100]]} seed="er-b" size={1.6} wob={0.4} />
      <Pen pts={[[100, 26], [160, 26]]} seed="er-t" ink="pencil" size={1.2} />
      <Tuft c={[130, 26]} seed="er-g" />
      <Pen pts={[[0, 36], [98, 36]]} seed="er-s" ink="blue" size={1.1} />
      <Arrow pts={[[12, 52], [56, 56], [94, 50]]} seed="er-a1" ink="blue" size={1.6} head={6} />
      <Arrow pts={[[18, 78], [64, 82], [102, 74]]} seed="er-a2" ink="blue" size={1.6} head={6} />
      {([[86, 64, 2.6], [90, 88, 2.2], [78, 74, 1.8]] as number[][]).map(([x, y, r], i) => (
        <Oval key={i} c={[x, y]} rx={r} seed={`er-p${i}`} fill="var(--color-pencil)" fo={0.6} w={1} />
      ))}
      <Pen pts={[[104, 46], [111, 43]]} seed="er-x1" ink="red" size={1.6} wob={0} />
      <Pen pts={[[108, 62], [115, 59]]} seed="er-x2" ink="red" size={1.6} wob={0} />
    </>
  ),
  deposition: () => (
    <>
      <Water d="M0,22L160,22L160,80L0,80Z" opacity={0.2} />
      <Pen pts={[[0, 22], [160, 22]]} seed="dp-s" ink="blue" size={1.1} />
      <Pen pts={[[0, 80], [160, 80]]} seed="dp-b" ink="pencil" size={1.2} />
      <Arrow pts={[[6, 34], [56, 34]]} seed="dp-a1" ink="blue" size={1.8} head={6} />
      <Arrow pts={[[66, 34], [92, 34]]} seed="dp-a2" ink="blue" size={1.4} head={5} />
      <Arrow pts={[[102, 34], [113, 34]]} seed="dp-a3" ink="blue" size={1.1} head={4} />
      <T x={118} y={38} f="pencil" s={14} ink="blue">slow</T>
      {([[96, 48], [114, 52], [130, 46], [146, 54]] as Pt[]).map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={1.6} fill="var(--color-ink)" />
          <Pen pts={[[x, y + 4], [x, y + 9]]} seed={`dp-f${i}`} ink="pencil" size={0.8} wob={0} />
        </g>
      ))}
      <Hatch d="M84,80C100,66 136,62 160,66L160,80Z" seed="dp-m" style="dots" gap={3.5} ink="ink" opacity={0.6} />
      <Pen pts={[[84, 80], [100, 68], [136, 63], [160, 66]]} seed="dp-mo" ink="pencil" size={1} />
    </>
  ),
  "sediment-load": () => (
    <>
      <Water d="M0,20L160,20L160,82L0,82Z" opacity={0.2} />
      <Pen pts={[[0, 20], [160, 20]]} seed="sl-s" ink="blue" size={1.1} />
      <Pen pts={[[0, 84], [160, 84]]} seed="sl-b" ink="pencil" size={1.2} />
      <Arrow pts={[[8, 30], [60, 30]]} seed="sl-a" ink="blue" size={1.6} head={6} />
      {sand.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.1} fill="var(--color-pencil)" />
      ))}
      {([[28, 78, 5, 3.5], [66, 79, 4, 3], [104, 78, 6, 4]] as number[][]).map(([x, y, rx, ry], i) => (
        <Oval key={i} c={[x, y]} rx={rx} ry={ry} seed={`sl-p${i}`} fill="var(--color-pencil)" fo={0.45} w={1.1} />
      ))}
      <Drop x={138} y={56} r={7} mood="wink" />
      <Oval c={[138, 40]} rx={6} ry={4} seed="sl-bp" fill="var(--color-pencil)" fo={0.45} w={1.1} />
    </>
  ),
  alluvium: () => (
    <>
      <Water d="M0,40L34,40C30,60 34,80 30,100L0,100Z" opacity={0.3} />
      <Pen pts={[[34, 40], [30, 60], [34, 80], [30, 100]]} seed="al-bk" ink="blue" size={1.3} />
      <Waves at={[[6, 56], [10, 80]]} seed="al-w" w={10} />
      <Hatch d="M34,40L160,40L160,54L34,54Z" seed="al-d1" style="dots" gap={3.5} ink="ink" opacity={0.45} />
      <Hatch d="M34,68L160,68L160,82L34,82Z" seed="al-d2" style="dots" gap={3.5} ink="ink" opacity={0.45} />
      <Pen pts={[[34, 40], [160, 40]]} seed="al-top" size={1.4} wob={0.4} />
      {[54, 68, 82, 96].map((y, i) => (
        <Pen key={i} pts={layer(y, 34)} seed={`al-l${i}`} ink="pencil" size={1} />
      ))}
      {[66, 100, 134].map((x, i) => (
        <g key={i}>
          <Pen pts={[[x, 40], [x, 26]]} seed={`al-st${i}`} ink="green" size={1.2} wob={0.3} />
          <Pen pts={[[x, 33], [x - 4, 29], [x - 8, 30]]} seed={`al-lf${i}`} ink="green" size={1.4} wob={0.2} />
          <Pen pts={[[x, 30], [x + 4, 25], [x + 8, 26]]} seed={`al-rf${i}`} ink="green" size={1.4} wob={0.2} />
        </g>
      ))}
    </>
  ),
} satisfies Doodles;
