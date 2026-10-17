import type { ReactNode } from "react";
import { Arrow, Dash, Hatch, Pen, Rough, Svg, T, Water, INK, type Pt } from "./kit";
import { rng } from "@/lib/seed";

function Cell({ x, y, name, note, ink = "blue", children }: { x: number; y: number; name: string; note: string; ink?: "blue" | "pencil"; children: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <T x={133} y={30} s={28} bold a="middle">{name}</T>
      {children}
      <T x={133} y={214} s={22} ink={ink} a="middle" f={ink === "pencil" ? "pencil" : "pen"}>{note}</T>
    </g>
  );
}

function Dendritic() {
  const r = rng("dp-tree");
  const segs: { a: Pt; b: Pt; d: number }[] = [];
  const grow = (p: Pt, ang: number, len: number, d: number) => {
    const q: Pt = [p[0] + Math.cos(ang) * len, p[1] + Math.sin(ang) * len];
    segs.push({ a: p, b: q, d });
    if (d === 4) return;
    const spread = 0.42 + r() * 0.24;
    grow(q, ang - spread, len * (0.76 + r() * 0.06), d + 1);
    grow(q, ang + spread, len * (0.76 + r() * 0.06), d + 1);
  };
  grow([133, 182], -Math.PI / 2, 36, 0);
  return (
    <g>
      {segs.map(({ a, b, d }, i) => (
        <Pen key={i} pts={[a, [(a[0] + b[0]) / 2 + (r() - 0.5) * 4, (a[1] + b[1]) / 2], b]} seed={`dp-den${i}`} ink="blue" size={3.2 - d * 0.5} />
      ))}
      <Arrow pts={[[133, 180], [133, 196]]} seed="dp-den-out" ink="blue" size={2.6} head={9} />
    </g>
  );
}

function Trellis() {
  const rows = [70, 110, 150];
  return (
    <g>
      {[88, 128].map((y, i) => (
        <Hatch key={i} d={`M36,${y}L230,${y}L230,${y + 12}L36,${y + 12}Z`} seed={`dp-tr-ridge${i}`} gap={4} angle={-60} opacity={0.6} />
      ))}
      {rows.map((y, i) => (
        <g key={i}>
          <Pen pts={[[40, y], [133, y + 1]]} seed={`dp-tr-l${i}`} ink="blue" size={2.2} />
          <Pen pts={[[226, y], [133, y + 1]]} seed={`dp-tr-r${i}`} ink="blue" size={2.2} />
          {[56, 84, 168, 196].map((x, k) => (
            <Pen key={k} pts={[[x, y + (k % 2 ? 14 : -14)], [x, y]]} seed={`dp-tr-s${i}-${k}`} ink="blue" size={1.4} />
          ))}
        </g>
      ))}
      <Pen pts={[[133, 52], [134, 120], [133, 180]]} seed="dp-tr-main" ink="blue" size={3.2} />
      <Arrow pts={[[133, 176], [133, 194]]} seed="dp-tr-out" ink="blue" size={2.6} head={9} />
    </g>
  );
}

function Rectangular() {
  const joints = [70, 110, 150, 190];
  return (
    <g>
      {joints.map((x, i) => (
        <Dash key={`v${i}`} pts={[[x, 48], [x, 182]]} w={1} dash="2 5" />
      ))}
      {[62, 100, 140, 176].map((y, i) => (
        <Dash key={`h${i}`} pts={[[44, y], [222, y]]} w={1} dash="2 5" />
      ))}
      <Pen pts={[[70, 48], [70, 100], [150, 100], [150, 140], [190, 140], [190, 180]]} seed="dp-re-main" ink="blue" size={3} curve={false} />
      <Pen pts={[[110, 50], [110, 62], [150, 62], [150, 100]]} seed="dp-re-t1" ink="blue" size={2} curve={false} />
      <Pen pts={[[44, 140], [110, 140], [110, 100]]} seed="dp-re-t2" ink="blue" size={2} curve={false} />
      <Pen pts={[[222, 100], [190, 100], [190, 140]]} seed="dp-re-t3" ink="blue" size={2} curve={false} />
      <Arrow pts={[[190, 178], [190, 196]]} seed="dp-re-out" ink="blue" size={2.6} head={9} curve={false} />
    </g>
  );
}

function Radial() {
  return (
    <g>
      <Rough shape={{ kind: "ellipse", w: 64, h: 50 }} at={[101, 90]} seed="dp-ra-dome" o={{ stroke: INK.ink, strokeWidth: 2, fill: INK.pencil, fillStyle: "hachure", hachureGap: 5, fillWeight: 1 }} />
      <Rough shape={{ kind: "ellipse", w: 34, h: 26 }} at={[116, 102]} seed="dp-ra-top" o={{ stroke: INK.ink, strokeWidth: 1.6 }} />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2 + 0.2;
        const p = (r: number): Pt => [133 + Math.cos(a) * r * 1.35, 115 + Math.sin(a) * r];
        return <Arrow key={i} pts={[p(30), p(48), p(66)]} seed={`dp-ra${i}`} ink="blue" size={2.4} head={10} />;
      })}
    </g>
  );
}

function Centripetal() {
  const lake = "M98,118 C98,98 168,96 168,118 C168,140 98,140 98,118Z";
  return (
    <g>
      <Water d={lake} opacity={0.35} />
      <Rough shape={{ kind: "path", d: lake }} seed="dp-ce-lake" o={{ stroke: INK.blue, strokeWidth: 2 }} />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2 + 0.35;
        const p = (r: number): Pt => [133 + Math.cos(a) * r * 1.4, 118 + Math.sin(a) * r];
        return <Arrow key={i} pts={[p(68), p(48), p(30)]} seed={`dp-ce${i}`} ink="blue" size={2.4} head={10} />;
      })}
    </g>
  );
}

export function DrainagePatterns() {
  return (
    <Svg label="Five drainage patterns. Dendritic: branches like a tree, as in the rivers of the northern plains. Trellis: parallel main streams with short tributaries at right angles, over parallel bands of hard and soft rock. Rectangular: streams turning at right angles along joints and faults in the rock. Radial: rivers flowing outward in all directions from a central high dome, as from the Amarkantak range. Centripetal: rivers flowing inward from all sides into a lake or basin, as into Loktak lake in Manipur.">
      <Cell x={0} y={0} name="Dendritic" note="e.g. northern plain rivers"><Dendritic /></Cell>
      <Cell x={267} y={0} name="Trellis" note="parallel hard & soft rock" ink="pencil"><Trellis /></Cell>
      <Cell x={534} y={0} name="Rectangular" note="jointed, faulted rock" ink="pencil"><Rectangular /></Cell>
      <Cell x={133} y={232} name="Radial" note="e.g. Amarkantak range"><Radial /></Cell>
      <Cell x={400} y={232} name="Centripetal" note="e.g. Loktak lake, Manipur"><Centripetal /></Cell>
    </Svg>
  );
}
