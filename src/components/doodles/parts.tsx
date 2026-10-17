import { Arrow, Dash, Hatch, Pen, River, T, Water, landD, smooth, toD, type Pt } from "@/components/sketches/kit";
import { Drop } from "./Boondi";
import { Cloud, HlArea, Oval, Waves, type Doodles } from "./bits";

/** The parts of a river. */

const peak: Pt[] = [[2, 94], [22, 50], [36, 20], [52, 44], [80, 94]];
const ridge: Pt[] = [[0, 92], [40, 60], [80, 24], [120, 60], [160, 92]];
const stem: Pt[] = [[6, 28], [40, 36], [80, 48], [118, 56], [152, 76]];
const basinRim: Pt[] = [[22, 44], [38, 16], [80, 8], [124, 14], [146, 38], [134, 64], [104, 74], [82, 78], [54, 72], [28, 62], [22, 44]];

export const PARTS = {
  source: () => (
    <>
      <Hatch d={landD(peak, 94)} seed="so-h" gap={5} opacity={0.45} />
      <Pen pts={peak} seed="so-m" ink="pencil" size={1.5} curve={false} wob={0.5} />
      <River c={[[44, 40], [60, 54], [86, 64], [118, 70], [158, 80]]} w={(t) => 2 + t * 11} seed="so-r" />
      <Drop x={48} y={26} r={6.5} mood="wow" />
      <T x={64} y={24} f="pencil" s={15} ink="red">starts here!</T>
    </>
  ),
  mouth: () => (
    <>
      <Water d="M120,0C112,30 126,64 116,100L160,100L160,0Z" opacity={0.3} />
      <Pen pts={[[120, 0], [116, 30], [124, 64], [116, 100]]} seed="mo-c" ink="blue" size={1.4} />
      <Waves at={[[132, 18], [140, 44], [132, 78]]} seed="mo-w" />
      <River c={[[2, 26], [30, 38], [62, 34], [94, 50], [122, 50]]} w={(t) => 4 + t * 10} seed="mo-r" />
      <Oval c={[118, 50]} rx={14} ry={13} seed="mo-o" ink="red" w={1.6} />
      <Drop x={96} y={80} r={6} mood="wink" />
      <Arrow pts={[[104, 74], [110, 66]]} seed="mo-a" ink="red" size={1.2} head={4} />
    </>
  ),
  headwaters: () => (
    <>
      <HlArea d="M6,40C20,18 60,4 100,10C130,12 156,24 156,40C150,58 110,62 80,64C46,62 10,56 6,40Z" />
      <Pen pts={[[0, 40], [20, 14], [40, 34], [60, 8], [82, 30], [104, 10], [124, 32], [144, 14], [160, 34]]} seed="hw-m" ink="pencil" size={1.4} curve={false} wob={0.4} />
      {([[[22, 24], [44, 46], [76, 62]], [[60, 18], [68, 40], [78, 60]], [[104, 20], [94, 42], [82, 60]], [[142, 26], [118, 46], [84, 62]]] as Pt[][]).map((p, i) => (
        <Pen key={i} pts={p} seed={`hw-s${i}`} ink="blue" size={1.2} />
      ))}
      <River c={[[80, 60], [78, 80], [82, 100]]} w={8} seed="hw-r" />
      <Drop x={34} y={46} r={4.5} />
      <Drop x={126} y={48} r={4.5} mood="wink" />
    </>
  ),
  "upstream-downstream": () => (
    <>
      <Hatch d={landD([[0, 50], [14, 26], [30, 50]], 50)} seed="ud-h" gap={4} opacity={0.4} />
      <Pen pts={[[0, 50], [14, 26], [30, 50]]} seed="ud-m" ink="pencil" size={1.3} curve={false} />
      <River c={[[14, 50], [46, 54], [82, 50], [118, 56], [158, 52]]} w={(t) => 4 + t * 9} seed="ud-r" />
      <Arrow pts={[[54, 54], [80, 52], [106, 55]]} seed="ud-a" ink="blue" size={1.4} head={5} />
      <T x={6} y={80} f="pencil" s={16} ink="red">upstream</T>
      <T x={156} y={96} f="pencil" s={16} ink="red" a="end">downstream</T>
      <Drop x={124} y={30} r={6} />
    </>
  ),
  "main-stem": () => (
    <>
      <path d={toD(smooth(stem))} stroke="var(--color-hl)" strokeWidth={13} strokeLinecap="round" fill="none" opacity={0.6} />
      <Pen pts={stem} seed="ms-t" ink="blue" size={3.4} wob={0.4} />
      <Arrow pts={[[150, 82], [156, 86]]} seed="ms-a" ink="blue" size={2.4} head={6} />
      {([[[12, 4], [28, 20], [40, 36]], [[60, 6], [72, 28], [80, 47]], [[108, 12], [114, 34], [118, 56]], [[30, 84], [58, 62], [80, 48]], [[80, 98], [104, 76], [118, 57]]] as Pt[][]).map((p, i) => (
        <Pen key={i} pts={p} seed={`ms-b${i}`} ink="blue" size={1.1} wob={0.5} />
      ))}
    </>
  ),
  tributary: () => (
    <>
      <River c={[[2, 72], [50, 68], [100, 74], [158, 70]]} w={14} seed="tr-m" />
      <River c={[[34, 2], [52, 26], [70, 48], [90, 66]]} w={6} seed="tr-t" />
      <Arrow pts={[[60, 14], [74, 32], [86, 48]]} seed="tr-a" ink="red" size={1.4} head={5} />
      <Arrow pts={[[100, 92], [130, 91]]} seed="tr-f" ink="blue" size={1.2} head={4} />
      <Drop x={40} y={34} r={6} />
    </>
  ),
  distributary: () => (
    <>
      <Pen pts={[[2, 50], [26, 48], [52, 50]]} seed="di-m" ink="blue" size={3.6} />
      {([[[52, 50], [90, 30], [140, 14]], [[52, 50], [96, 52], [142, 52]], [[52, 50], [90, 72], [140, 88]]] as Pt[][]).map((p, i) => (
        <Arrow key={i} pts={p} seed={`di-b${i}`} ink="blue" size={1.8} head={6} />
      ))}
      <Oval c={[52, 50]} rx={7} seed="di-o" ink="red" w={1.4} />
    </>
  ),
  confluence: () => (
    <>
      <River c={[[6, 4], [40, 28], [80, 56]]} w={8} seed="co-a" />
      <River c={[[154, 4], [120, 28], [80, 56]]} w={8} seed="co-b" />
      <River c={[[80, 54], [80, 78], [84, 100]]} w={13} seed="co-m" />
      <Drop x={80} y={34} r={7} />
    </>
  ),
  prayag: () => (
    <>
      <River c={[[4, 14], [40, 36], [80, 62]]} w={8} seed="pr-a" />
      <River c={[[156, 14], [120, 36], [80, 62]]} w={8} seed="pr-b" />
      <River c={[[80, 60], [80, 80], [84, 100]]} w={13} seed="pr-m" />
      <Hatch d="M68,50L68,38L80,22L92,38L92,50Z" seed="pr-th" ink="red" gap={3} opacity={0.35} />
      <Pen pts={[[68, 50], [68, 38], [80, 22], [92, 38], [92, 50], [68, 50]]} seed="pr-t" size={1.4} curve={false} wob={0.3} />
      <Pen pts={[[76, 50], [76, 43], [84, 43], [84, 50]]} seed="pr-d" size={1.1} curve={false} wob={0.2} />
      <Pen pts={[[80, 22], [80, 10]]} seed="pr-p" size={1.1} wob={0} />
      <path d="M80,10L91,13L80,17Z" fill="var(--color-red-ink)" />
    </>
  ),
  "left-right-bank": () => (
    <>
      <River c={[[80, 100], [77, 62], [83, 26], [80, 0]]} w={40} seed="lr-r" />
      <Arrow pts={[[80, 84], [79, 56], [81, 28]]} seed="lr-a" ink="blue" size={1.6} head={6} />
      <T x={40} y={62} f="marker" s={20} ink="red" a="middle">L</T>
      <T x={122} y={62} f="marker" s={20} ink="red" a="middle">R</T>
      <T x={80} y={96} f="pencil" s={14} ink="ink" a="middle" halo>facing downstream</T>
    </>
  ),
  basin: () => (
    <>
      <path d={toD(smooth(basinRim), true)} fill="var(--color-green-ink)" fillOpacity={0.08} />
      <Dash pts={basinRim} ink="pencil" w={1.4} dash="4 4" />
      <Pen pts={[[80, 16], [78, 44], [82, 78], [84, 100]]} seed="ba-m" ink="blue" size={2.4} />
      {([[[34, 32], [58, 46], [79, 56]], [[132, 30], [108, 44], [80, 60]], [[44, 64], [64, 66], [81, 70]], [[128, 56], [104, 66], [82, 72]]] as Pt[][]).map((p, i) => (
        <Pen key={i} pts={p} seed={`ba-s${i}`} ink="blue" size={1.1} />
      ))}
      <Drop x={14} y={22} r={5} mood="wow" />
      <Arrow pts={[[20, 30], [30, 38]]} seed="ba-a1" ink="pencil" size={1} head={4} />
      <Drop x={150} y={16} r={5} />
      <Arrow pts={[[146, 24], [138, 32]]} seed="ba-a2" ink="pencil" size={1} head={4} />
    </>
  ),
  catchment: () => (
    <>
      <HlArea d="M20,46C28,30 54,26 80,26C108,26 136,32 140,46C136,60 104,66 80,70C56,66 24,60 20,46Z" />
      <Dash pts={[[20, 46], [28, 32], [80, 26], [132, 32], [140, 46], [104, 64], [80, 70], [56, 64], [20, 46]]} ink="pencil" w={1.2} dash="4 4" />
      {([[[32, 42], [58, 54], [80, 68]], [[128, 42], [102, 54], [80, 68]], [[80, 32], [79, 50], [80, 68]]] as Pt[][]).map((p, i) => (
        <Pen key={i} pts={p} seed={`ca-s${i}`} ink="blue" size={1.3} />
      ))}
      <Pen pts={[[66, 72], [94, 72]]} seed="ca-d" size={3.2} wob={0.3} />
      <Pen pts={[[80, 74], [82, 100]]} seed="ca-r" ink="blue" size={1.6} />
      <Cloud c={[54, 12]} seed="ca-c1" rain={4} />
      <Cloud c={[110, 10]} seed="ca-c2" rain={4} />
      <T x={100} y={88} f="pencil" s={14} ink="pencil">dam</T>
    </>
  ),
  "water-divide": () => (
    <>
      <Hatch d={landD(ridge, 100)} seed="wd-h" gap={5} opacity={0.4} />
      <Pen pts={ridge} seed="wd-m" ink="pencil" size={1.6} curve={false} wob={0.4} />
      <Dash pts={[[80, 26], [80, 96]]} ink="red" w={1.3} dash="4 4" />
      <Drop x={80} y={14} r={6.5} mood="wow" />
      <Arrow pts={[[70, 32], [52, 50], [34, 66]]} seed="wd-l" ink="blue" size={1.6} head={6} />
      <Arrow pts={[[90, 32], [108, 50], [126, 66]]} seed="wd-r" ink="blue" size={1.6} head={6} />
      <Water d="M2,92C8,86 24,86 30,92Z" opacity={0.5} />
      <Water d="M130,92C136,86 152,86 158,92Z" opacity={0.5} />
    </>
  ),
  "inland-drainage": () => (
    <>
      <Hatch d="M0,48C40,44 80,50 120,46C140,46 150,50 160,48L160,100L0,100Z" seed="id-s" style="dots" gap={6} ink="pencil" opacity={0.5} />
      <River c={[[4, 6], [26, 22], [42, 42], [64, 62]]} w={(t) => 7 - t * 3} seed="id-r" />
      <Oval c={[84, 68]} rx={22} ry={8} seed="id-l" ink="blue" fill="var(--color-water)" fo={0.3} />
      <Dash pts={[[108, 70], [128, 76], [146, 80]]} ink="pencil" w={1.2} dash="3 4" />
      <Pen pts={[[121, 70], [131, 82]]} seed="id-x1" ink="red" size={1.8} wob={0.3} />
      <Pen pts={[[131, 70], [121, 82]]} seed="id-x2" ink="red" size={1.8} wob={0.3} />
      <T x={154} y={98} f="pencil" s={14} ink="red" a="end">no sea</T>
    </>
  ),
} satisfies Doodles;
