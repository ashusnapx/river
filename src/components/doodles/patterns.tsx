import { Arrow, Dash, Hatch, Pen, River, T, Water, landD, type Pt } from "@/components/sketches/kit";
import { rng } from "@/lib/seed";
import { Drop } from "./Boondi";
import { ellD, Oval, type Doodles } from "./bits";

/** Drainage patterns and river history. */

const mtn: Pt[] = [[10, 96], [40, 52], [58, 30], [66, 38], [74, 64], [86, 64], [94, 38], [102, 28], [122, 52], [150, 96]];
const fold = (y: number): Pt[] => Array.from({ length: 9 }, (_, i) => [i * 20, y + (i % 2 ? 7 : -7)]);

/** Points on a ring around (80,50), x stretched, for radial and centripetal arrows. */
const ring = (a: number, r: number): Pt => [80 + Math.cos(a) * r * 1.55, 50 + Math.sin(a) * r];

function Dendritic() {
  const r = rng("dd-tree");
  const segs: { a: Pt; b: Pt; d: number }[] = [];
  const grow = (p: Pt, ang: number, len: number, d: number) => {
    const q: Pt = [p[0] + Math.cos(ang) * len * 1.3, p[1] + Math.sin(ang) * len];
    segs.push({ a: p, b: q, d });
    if (d === 3) return;
    const spread = 0.45 + r() * 0.2;
    grow(q, ang - spread, len * (0.68 + r() * 0.08), d + 1);
    grow(q, ang + spread, len * (0.68 + r() * 0.08), d + 1);
  };
  grow([80, 92], -Math.PI / 2, 33, 0);
  return (
    <>
      {segs.map(({ a, b, d }, i) => (
        <Pen key={i} pts={[a, [(a[0] + b[0]) / 2 + (r() - 0.5) * 3, (a[1] + b[1]) / 2], b]} seed={`dd-${i}`} ink="blue" size={2.8 - d * 0.55} wob={0.4} />
      ))}
      <Arrow pts={[[80, 90], [80, 99]]} seed="dd-o" ink="blue" size={2.2} head={5} />
    </>
  );
}

export const PATTERNS = {
  antecedent: () => (
    <>
      <Hatch d={landD(mtn, 96)} seed="an-h" gap={5} opacity={0.4} />
      <Pen pts={mtn.slice(0, 5)} seed="an-l" ink="pencil" size={1.4} curve={false} wob={0.3} />
      <Pen pts={mtn.slice(5)} seed="an-r" ink="pencil" size={1.4} curve={false} wob={0.3} />
      <River c={[[80, 62], [80, 80], [80, 100]]} w={(t) => 10 + t * 8} seed="an-v" />
      <Arrow pts={[[80, 8], [80, 52]]} seed="an-c" ink="blue" size={1.6} head={6} />
      <Arrow pts={[[24, 96], [24, 66]]} seed="an-u1" ink="red" size={1.6} head={6} />
      <Arrow pts={[[136, 96], [136, 66]]} seed="an-u2" ink="red" size={1.6} head={6} />
      <T x={136} y={58} f="pencil" s={15} ink="red" a="middle">uplift</T>
      <T x={88} y={14} f="pencil" s={14} ink="blue">cuts down</T>
    </>
  ),
  consequent: () => (
    <>
      <Hatch d={landD([[0, 22], [160, 82]], 100)} seed="cq-h" gap={5} opacity={0.4} />
      <Pen pts={[[0, 22], [160, 82]]} seed="cq-s" size={1.6} wob={0.4} />
      <Arrow pts={[[24, 22], [84, 44], [148, 68]]} seed="cq-r" ink="blue" size={2.2} head={7} />
      <Drop x={24} y={10} r={5.5} />
      <T x={150} y={98} f="pencil" s={15} ink="red" a="end" halo>follows the slope</T>
    </>
  ),
  superimposed: () => (
    <>
      <Dash pts={[[0, 18], [160, 18]]} w={1.2} dash="4 4" />
      <T x={88} y={36} f="pencil" s={14} ink="pencil">old cover</T>
      <Hatch d={landD([[0, 50], [70, 50], [74, 70], [86, 70], [90, 50], [160, 50]], 100)} seed="su-h" gap={6} opacity={0.25} />
      {[64, 78, 92].map((y, i) => (
        <Pen key={i} pts={fold(y)} seed={`su-f${i}`} ink="pencil" size={1.1} wob={0.3} />
      ))}
      <Pen pts={[[0, 50], [70, 50], [74, 70], [86, 70], [90, 50], [160, 50]]} seed="su-s" size={1.6} curve={false} wob={0.3} />
      <Water d="M73,62L87,62L86,70L74,70Z" opacity={0.7} />
      <Arrow pts={[[80, 20], [80, 58]]} seed="su-a" ink="blue" size={1.6} head={6} />
    </>
  ),
  "river-capture": () => (
    <>
      <Pen pts={[[4, 8], [30, 20], [58, 30]]} seed="rc-a" ink="blue" size={2.2} />
      <Pen pts={[[58, 30], [88, 44], [120, 66], [154, 94]]} seed="rc-b" ink="blue" size={2.8} />
      <Dash pts={[[60, 34], [58, 44]]} ink="pencil" w={1.2} dash="2 3" />
      <Pen pts={[[58, 46], [52, 68], [42, 98]]} seed="rc-o" ink="blue" size={0.8} />
      <Oval c={[58, 31]} rx={9} ry={8} seed="rc-e" ink="red" w={1.4} />
      <T x={72} y={22} f="pencil" s={15} ink="red">stolen!</T>
      <Drop x={104} y={42} r={5.5} mood="wow" />
    </>
  ),
  dendritic: () => <Dendritic />,
  trellis: () => (
    <>
      {[35, 61].map((y, i) => (
        <Hatch key={i} d={`M6,${y}L154,${y}L154,${y + 8}L6,${y + 8}Z`} seed={`tl-h${i}`} gap={3} angle={-60} opacity={0.45} />
      ))}
      {[24, 50, 76].map((y, i) => (
        <g key={i}>
          <Pen pts={[[8, y], [80, y]]} seed={`tl-l${i}`} ink="blue" size={1.6} wob={0.4} />
          <Pen pts={[[152, y], [80, y]]} seed={`tl-r${i}`} ink="blue" size={1.6} wob={0.4} />
          {[24, 52, 108, 136].map((x, k) => (
            <Pen key={k} pts={[[x, y + (k % 2 ? 8 : -8)], [x, y]]} seed={`tl-s${i}${k}`} ink="blue" size={0.9} wob={0.2} />
          ))}
        </g>
      ))}
      <Pen pts={[[80, 4], [80, 90]]} seed="tl-m" ink="blue" size={2.6} wob={0.4} />
      <Arrow pts={[[80, 88], [80, 99]]} seed="tl-o" ink="blue" size={2} head={5} />
    </>
  ),
  rectangular: () => (
    <>
      {[36, 72, 108, 144].map((x) => (
        <Dash key={`v${x}`} pts={[[x, 4], [x, 96]]} w={0.8} dash="2 4" />
      ))}
      {[24, 52, 80].map((y) => (
        <Dash key={`h${y}`} pts={[[4, y], [156, y]]} w={0.8} dash="2 4" />
      ))}
      <Pen pts={[[36, 4], [36, 52], [108, 52], [108, 80], [144, 80], [144, 92]]} seed="rt-m" ink="blue" size={2.4} curve={false} wob={0.3} />
      <Pen pts={[[72, 6], [72, 24], [108, 24], [108, 52]]} seed="rt-a" ink="blue" size={1.4} curve={false} wob={0.3} />
      <Pen pts={[[6, 80], [72, 80], [72, 52]]} seed="rt-b" ink="blue" size={1.4} curve={false} wob={0.3} />
      <Pen pts={[[156, 52], [144, 52], [144, 80]]} seed="rt-c" ink="blue" size={1.4} curve={false} wob={0.3} />
      <Arrow pts={[[144, 88], [144, 99]]} seed="rt-o" ink="blue" size={2} head={5} curve={false} />
    </>
  ),
  radial: () => (
    <>
      <Hatch d={ellD(80, 50, 20, 14)} seed="rd-h" gap={4} opacity={0.6} />
      <Oval c={[80, 50]} rx={20} ry={14} seed="rd-o" w={1.5} />
      <Oval c={[80, 50]} rx={9} ry={6} seed="rd-i" w={1.2} fill="var(--color-paper)" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2 + 0.2;
        return <Arrow key={i} pts={[ring(a, 19), ring(a, 30), ring(a, 42)]} seed={`rd-a${i}`} ink="blue" size={1.5} head={5} />;
      })}
    </>
  ),
  centripetal: () => (
    <>
      <Oval c={[80, 50]} rx={20} ry={12} seed="cp-l" ink="blue" w={1.6} fill="var(--color-water)" fo={0.35} />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2 + 0.35;
        return <Arrow key={i} pts={[ring(a, 44), ring(a, 30), ring(a, 17)]} seed={`cp-a${i}`} ink="blue" size={1.5} head={5} />;
      })}
      <Drop x={80} y={52} r={4.5} />
    </>
  ),
} satisfies Doodles;
