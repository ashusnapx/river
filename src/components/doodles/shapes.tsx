import { Arrow, Hatch, INK, Pen, River, Rough, T, Water, landD, offset, smooth, toD, type Pt } from "@/components/sketches/kit";
import { Drop } from "./Boondi";
import { HlArea, Oval, Tuft, Waves, type Doodles } from "./bits";

/** Shapes rivers make, from the hills to the sea. */

const vee: Pt[] = [[0, 12], [40, 36], [72, 84], [88, 84], [120, 36], [160, 12]];
const canyon: Pt[] = [[0, 14], [34, 14], [36, 30], [48, 30], [50, 48], [60, 48], [62, 68], [70, 68], [72, 90]];
const mirror = (p: Pt[]): Pt[] => p.map(([x, y]) => [160 - x, y]);
const flood: Pt[] = [[0, 24], [16, 56], [56, 60], [66, 60], [68, 74], [92, 74], [94, 60], [104, 60], [144, 56], [160, 24]];
const levee: Pt[] = [[0, 66], [34, 66], [48, 52], [58, 54], [64, 76], [96, 76], [102, 54], [112, 52], [126, 66], [160, 66]];
// the cut-off loop: a horseshoe whose ends almost touch the river, sealed by silt
const bowArc = smooth(Array.from({ length: 11 }, (_, i): Pt => {
  const a = ((150 + i * 24) * Math.PI) / 180;
  return [80 + 32 * Math.cos(a), 54 + 30 * Math.sin(a)];
}));
const lens = (cx: number, cy: number, w: number, h: number) => `M${cx - w / 2},${cy}Q${cx},${cy - h} ${cx + w / 2},${cy}Q${cx},${cy + h} ${cx - w / 2},${cy}Z`;
const bars = [[34, 40, 38, 8], [64, 64, 42, 9], [100, 34, 40, 8], [120, 62, 36, 9], [148, 44, 22, 7], [16, 66, 22, 6]];

/** Rough outline for a closed path. */
const Line = ({ d, seed, ink = "pencil" as const, w = 1.1 }: { d: string; seed: string; ink?: "pencil" | "ink" | "blue" | "green"; w?: number }) => (
  <Rough shape={{ kind: "path", d }} seed={seed} o={{ stroke: INK[ink], strokeWidth: w, roughness: 0.6, bowing: 0.5 }} />
);

export const SHAPES = {
  "v-shaped-valley": () => (
    <>
      <Hatch d={landD(vee, 100)} seed="vv-h" gap={5} opacity={0.45} />
      <Pen pts={vee} seed="vv-p" size={1.7} curve={false} wob={0.4} />
      <Water d="M74,78L86,78L88,84L72,84Z" opacity={0.7} />
      <Arrow pts={[[80, 26], [80, 66]]} seed="vv-a" ink="red" size={1.6} head={6} />
    </>
  ),
  gorge: () => (
    <>
      <Hatch d="M0,22L64,22L66,50L63,90L65,100L0,100Z" seed="go-h1" gap={4} opacity={0.5} />
      <Hatch d="M160,22L96,22L94,50L97,90L95,100L160,100Z" seed="go-h2" gap={4} opacity={0.5} />
      <Pen pts={[[0, 22], [64, 22], [66, 50], [63, 90], [65, 100]]} seed="go-l" size={1.7} curve={false} wob={0.4} />
      <Pen pts={[[160, 22], [96, 22], [94, 50], [97, 90], [95, 100]]} seed="go-r" size={1.7} curve={false} wob={0.4} />
      <Water d="M64,90L96,90L95,100L65,100Z" opacity={0.55} />
      <Drop x={80} y={76} r={6.5} mood="wow" />
    </>
  ),
  canyon: () => (
    <>
      <Hatch d={landD([...canyon, [72, 100]], 100)} seed="cn-h1" ink="red" gap={4} opacity={0.35} />
      <Hatch d={landD([[88, 100], ...mirror(canyon).reverse()], 100)} seed="cn-h2" ink="red" gap={4} opacity={0.35} />
      <Pen pts={canyon} seed="cn-l" size={1.5} curve={false} wob={0.3} />
      <Pen pts={mirror(canyon)} seed="cn-r" size={1.5} curve={false} wob={0.3} />
      {[[22, 35], [39, 49], [58, 61], [78, 71]].map(([y, x], i) => (
        <g key={i}>
          <Pen pts={[[2, y], [x, y]]} seed={`cn-s${i}`} ink="pencil" size={0.9} />
          <Pen pts={[[160 - x, y], [158, y]]} seed={`cn-t${i}`} ink="pencil" size={0.9} />
        </g>
      ))}
      <Water d="M72,90L88,90L90,100L70,100Z" opacity={0.6} />
    </>
  ),
  waterfall: () => (
    <>
      <Hatch d="M0,30L66,30L68,60L64,100L0,100Z" seed="wf-h" gap={4} opacity={0.5} />
      <Pen pts={[[0, 30], [66, 30], [68, 60], [64, 100]]} seed="wf-c" size={1.6} curve={false} wob={0.4} />
      <Water d="M0,22L66,22L66,30L0,30Z" opacity={0.45} />
      {([[[66, 23], [78, 30], [84, 52], [86, 84]], [[66, 26], [74, 33], [78, 54], [79, 84]], [[66, 29], [70, 36], [72, 56], [72, 84]]] as Pt[][]).map((p, i) => (
        <Pen key={i} pts={p} seed={`wf-f${i}`} ink="blue" size={1.4} />
      ))}
      <Oval c={[98, 88]} rx={32} ry={6} seed="wf-p" ink="blue" fill="var(--color-water)" fo={0.35} />
      {([[[70, 80], [64, 72]], [[88, 80], [94, 72]], [[80, 78], [80, 70]]] as Pt[][]).map((p, i) => (
        <Pen key={i} pts={p} seed={`wf-s${i}`} ink="blue" size={1} wob={0.2} />
      ))}
      <Drop x={124} y={78} r={7} mood="wow" />
    </>
  ),
  rapids: () => (
    <>
      <River c={[[0, 20], [50, 38], [106, 58], [160, 80]]} w={38} seed="ra-r" />
      {([[42, 34, 6, 4], [76, 50, 5, 4], [100, 44, 4, 3], [122, 66, 6, 4], [60, 30, 3, 2.5]] as number[][]).map(([x, y, rx, ry], i) => (
        <Oval key={i} c={[x, y]} rx={rx} ry={ry} seed={`ra-k${i}`} fill="var(--color-pencil)" fo={0.6} w={1.1} />
      ))}
      <Waves at={[[50, 40], [84, 58], [108, 50], [132, 74], [24, 24]]} seed="ra-w" w={9} />
      <Drop x={90} y={28} r={6} mood="wow" />
    </>
  ),
  meander: () => (
    <>
      <River c={[[0, 30], [24, 20], [44, 34], [40, 62], [58, 84], [86, 80], [96, 52], [110, 26], [136, 20], [152, 40], [156, 66]]} w={10} seed="me-r" />
      <Arrow pts={[[4, 12], [24, 8]]} seed="me-a" ink="blue" size={1.2} head={4} />
    </>
  ),
  "oxbow-lake": () => (
    <>
      <River c={[[0, 86], [50, 84], [110, 85], [160, 80]]} w={10} seed="ox-r" />
      <Water d={toD([...offset(bowArc, 5), ...offset(bowArc, -5).reverse()], true)} opacity={0.32} />
      <Pen pts={offset(bowArc, 5)} seed="ox-a" ink="blue" size={1.2} wob={0.3} />
      <Pen pts={offset(bowArc, -5)} seed="ox-b" ink="blue" size={1.2} wob={0.3} />
      {[52, 108].map((x, i) => (
        <Hatch key={i} d={`M${x - 7},70L${x + 7},70L${x + 7},79L${x - 7},79Z`} seed={`ox-s${i}`} style="dots" gap={2.5} ink="ink" opacity={0.6} />
      ))}
      <Drop x={80} y={26} r={6.5} mood="sleep" />
      <T x={92} y={14} f="pencil" s={14} ink="pencil">z</T>
      <T x={99} y={7} f="pencil" s={17} ink="pencil">z</T>
    </>
  ),
  "braided-channel": () => (
    <>
      <Water d="M0,16C40,12 120,12 160,18L160,82C120,88 40,88 0,84Z" opacity={0.2} />
      <Pen pts={[[0, 16], [80, 12], [160, 18]]} seed="br-t" ink="blue" size={1.4} />
      <Pen pts={[[0, 84], [80, 88], [160, 82]]} seed="br-b" ink="blue" size={1.4} />
      {bars.map(([x, y, w, h], i) => (
        <g key={i}>
          <path d={lens(x, y, w, h)} fill="var(--color-paper-deep)" />
          <Line d={lens(x, y, w, h)} seed={`br-s${i}`} />
        </g>
      ))}
      <Arrow pts={[[60, 50], [84, 50]]} seed="br-a" ink="blue" size={1.2} head={4} />
    </>
  ),
  "river-island": () => (
    <>
      <River c={[[0, 50], [160, 50]]} w={66} seed="ri-r" />
      <path d={lens(80, 52, 100, 22)} fill="var(--color-paper)" />
      <Hatch d={lens(80, 52, 100, 22)} seed="ri-h" style="dots" gap={4} ink="green" opacity={0.4} />
      <Line d={lens(80, 52, 100, 22)} seed="ri-o" ink="green" w={1.3} />
      <Pen pts={[[64, 54], [64, 44]]} seed="ri-tt" size={1.2} wob={0} />
      <Oval c={[64, 39]} rx={6} ry={5} seed="ri-tc" ink="green" fill="var(--color-green-ink)" fo={0.3} />
      <path d="M86,56L86,48L98,48L98,56Z" fill="var(--color-paper-deep)" />
      <Pen pts={[[86, 56], [86, 48], [98, 48], [98, 56]]} seed="ri-hb" size={1.1} curve={false} wob={0.2} />
      <Pen pts={[[83, 49], [92, 41], [101, 49]]} seed="ri-hr" ink="red" size={1.3} curve={false} wob={0.2} />
      <Arrow pts={[[16, 28], [40, 28]]} seed="ri-a" ink="blue" size={1.2} head={4} />
    </>
  ),
  floodplain: () => (
    <>
      <Water d="M14,50L146,50L143,57L104,60L94,60L94,66L66,66L66,60L56,60L17,57Z" opacity={0.2} />
      <Water d="M67,66L93,66L92,74L68,74Z" opacity={0.5} />
      <Hatch d={landD(flood, 100)} seed="fp-h" gap={5} opacity={0.45} />
      <Pen pts={flood} seed="fp-p" size={1.6} curve={false} wob={0.3} />
      <Pen pts={[[14, 50], [146, 50]]} seed="fp-l" ink="blue" size={1} wob={0.3} />
      <Arrow pts={[[70, 42], [32, 42]]} seed="fp-a1" ink="blue" size={1.3} head={5} />
      <Arrow pts={[[90, 42], [128, 42]]} seed="fp-a2" ink="blue" size={1.3} head={5} />
    </>
  ),
  levee: () => (
    <>
      <HlArea d="M30,68L48,50L58,52L64,68Z" o={0.7} />
      <HlArea d="M96,68L102,52L112,50L130,68Z" o={0.7} />
      <Water d="M60,58L100,58L96,76L64,76Z" opacity={0.45} />
      <Pen pts={[[60, 58], [100, 58]]} seed="lv-w" ink="blue" size={1} wob={0.3} />
      <Hatch d={landD(levee, 100)} seed="lv-h" gap={5} opacity={0.45} />
      <Pen pts={levee} seed="lv-p" size={1.6} curve={false} wob={0.3} />
    </>
  ),
  delta: () => (
    <>
      <path d="M80,30L22,78Q80,98 138,78Z" fill="var(--color-green-ink)" fillOpacity={0.1} />
      <Water d="M0,72L22,78Q80,100 138,78L160,72L160,100L0,100Z" opacity={0.28} />
      <Pen pts={[[4, 72], [22, 78], [50, 87], [80, 90], [110, 87], [138, 78], [156, 72]]} seed="de-c" ink="blue" size={1.1} />
      <Waves at={[[6, 88], [138, 90]]} seed="de-w" w={10} />
      <Pen pts={[[80, 0], [78, 18], [80, 32]]} seed="de-r" ink="blue" size={3.2} />
      {([[[80, 32], [58, 52], [28, 79]], [[80, 32], [68, 58], [54, 87]], [[80, 32], [81, 60], [82, 90]], [[80, 32], [94, 58], [108, 87]], [[80, 32], [104, 52], [134, 79]], [[62, 50], [46, 62], [42, 83]]] as Pt[][]).map((p, i) => (
        <Pen key={i} pts={p} seed={`de-b${i}`} ink="blue" size={1.3} />
      ))}
    </>
  ),
  estuary: () => {
    const top: Pt[] = [[0, 44], [50, 43], [96, 34], [130, 16], [150, 2]];
    const bot: Pt[] = [[0, 56], [50, 57], [96, 66], [130, 84], [150, 98]];
    return (
      <>
        <Water d={toD([...smooth(top), [160, 0], [160, 100], ...smooth(bot).reverse()], true)} opacity={0.28} />
        <Pen pts={top} seed="es-t" ink="blue" size={1.4} />
        <Pen pts={bot} seed="es-b" ink="blue" size={1.4} />
        <Arrow pts={[[8, 50], [32, 50]]} seed="es-f" ink="blue" size={1.2} head={4} />
        <Arrow pts={[[90, 46], [134, 44]]} seed="es-o" ink="red" size={1.4} head={5} />
        <Arrow pts={[[134, 58], [90, 56]]} seed="es-i" ink="red" size={1.4} head={5} />
        <T x={104} y={40} f="pencil" s={14} ink="red">tide</T>
        <Waves at={[[144, 30], [144, 74]]} seed="es-w" w={10} />
      </>
    );
  },
  lagoon: () => (
    <>
      <Water d="M8,60C12,36 54,28 80,28C110,28 146,34 152,60Z" opacity={0.3} />
      <Pen pts={[[8, 60], [14, 40], [50, 30], [80, 28], [110, 29], [146, 40], [152, 60]]} seed="la-s" ink="blue" size={1.2} />
      <Water d="M0,64L160,64L160,100L0,100Z" opacity={0.32} />
      <Waves at={[[14, 80], [54, 90], [96, 80], [134, 90]]} seed="la-w" />
      {["M2,62C30,54 90,54 122,62C90,70 30,70 2,62Z", "M134,62C140,57 152,57 160,60L160,66C152,68 140,67 134,62Z"].map((d, i) => (
        <g key={i}>
          <path d={d} fill="var(--color-paper-deep)" />
          <Hatch d={d} seed={`la-b${i}`} style="dots" gap={3} ink="ink" opacity={0.5} />
          <Line d={d} seed={`la-o${i}`} />
        </g>
      ))}
      <Drop x={64} y={44} r={6} />
    </>
  ),
  backwaters: () => (
    <>
      <Water d="M0,0L30,0C26,30 34,64 28,100L0,100Z" opacity={0.32} />
      <Pen pts={[[30, 0], [28, 30], [33, 64], [28, 100]]} seed="bw-c" ink="blue" size={1.1} />
      <Waves at={[[4, 30], [6, 70]]} seed="bw-w" w={10} />
      <River c={[[56, 0], [52, 36], [60, 64], [54, 100]]} w={14} seed="bw-l" />
      <River c={[[58, 52], [90, 58], [118, 54]]} w={8} seed="bw-k" />
      <path d="M78,56L82,62L100,62L104,56Z" fill="var(--color-paper-deep)" />
      <Pen pts={[[78, 56], [82, 62], [100, 62], [104, 56]]} seed="bw-h" size={1.2} curve={false} wob={0.2} />
      <Line d="M82,56Q91,44 100,56" seed="bw-r" ink="ink" />
      <Pen pts={[[136, 96], [134, 70], [128, 44]]} seed="bw-tr" size={1.6} wob={0.3} />
      {([[[128, 44], [116, 42], [108, 50]], [[128, 44], [122, 34], [112, 32]], [[128, 44], [136, 34], [148, 34]], [[128, 44], [142, 44], [150, 52]]] as Pt[][]).map((p, i) => (
        <Pen key={i} pts={p} seed={`bw-f${i}`} ink="green" size={1.6} wob={0.3} />
      ))}
    </>
  ),
  wetland: () => (
    <>
      <Oval c={[44, 76]} rx={32} ry={7} seed="wl-a" ink="blue" fill="var(--color-water)" fo={0.3} w={1.1} />
      <Oval c={[118, 82]} rx={34} ry={7} seed="wl-b" ink="blue" fill="var(--color-water)" fo={0.3} w={1.1} />
      {([[14, 76, 12], [70, 76, 15], [92, 82, 12], [150, 84, 13], [36, 74, 9]] as number[][]).map(([x, y, h], i) => (
        <Tuft key={i} c={[x, y]} h={h} seed={`wl-t${i}`} />
      ))}
      <Pen pts={[[80, 80], [80, 50]]} seed="wl-cs" ink="green" size={1} wob={0.2} />
      <Oval c={[80, 52]} rx={2} ry={5} seed="wl-ch" fill="var(--color-ink)" fo={0.7} w={0.8} />
      <Pen pts={[[38, 20], [43, 24], [48, 20]]} seed="wl-b1" ink="pencil" size={1.1} />
      <Pen pts={[[56, 30], [60, 33], [64, 30]]} seed="wl-b2" ink="pencil" size={1.1} />
      <Drop x={116} y={66} r={6} />
    </>
  ),
  "ramsar-site": () => (
    <>
      <Oval c={[56, 80]} rx={50} ry={9} seed="rs-w" ink="blue" fill="var(--color-water)" fo={0.3} w={1.1} />
      {([[14, 82, 12], [42, 76, 14], [90, 78, 12], [106, 84, 10]] as number[][]).map(([x, y, h], i) => (
        <Tuft key={i} c={[x, y]} h={h} seed={`rs-t${i}`} />
      ))}
      <Pen pts={[[28, 30], [33, 34], [38, 30]]} seed="rs-b1" ink="pencil" size={1.1} />
      <Pen pts={[[46, 40], [50, 43], [54, 40]]} seed="rs-b2" ink="pencil" size={1.1} />
      <Pen pts={[[118, 44], [110, 64]]} seed="rs-r1" ink="red" size={2.4} wob={0.2} />
      <Pen pts={[[130, 44], [138, 64]]} seed="rs-r2" ink="red" size={2.4} wob={0.2} />
      <Oval c={[124, 30]} rx={16} seed="rs-o" ink="red" w={1.6} fill="var(--color-hl)" />
      <path d="M124,19L127,27L135,27L129,32L131,40L124,35L117,40L119,32L113,27L121,27Z" fill="var(--color-red-ink)" />
    </>
  ),
} satisfies Doodles;
