import { Arrow, Hatch, Pen, Rough, Svg, T, Water, toD, INK, PAPER, type Pt } from "./kit";
import { wobblyLine } from "@/lib/draw";

const TOP = 140;
const BOT = 360;

// sand bars: centre x, centre y, length, half-thickness — staggered rows so the gaps weave
const BARS: [number, number, number, number][] = [
  [92, 172, 110, 9], [262, 170, 130, 10], [452, 172, 120, 9], [640, 170, 140, 10], [752, 174, 56, 6],
  [168, 210, 120, 10], [322, 202, 96, 8], [548, 210, 130, 10], [720, 212, 100, 9],
  [80, 252, 92, 9], [656, 252, 110, 10],
  [162, 292, 130, 10], [566, 296, 120, 10], [742, 292, 80, 8],
  [80, 332, 100, 8], [262, 330, 140, 10], [446, 334, 120, 9], [626, 332, 130, 9],
];
// little current marks in the gaps, all heading west
const FLOW: [number, number][] = [[200, 191], [600, 191], [470, 226], [130, 232], [250, 268], [690, 274], [380, 304], [520, 314], [160, 352]];
const lens = (cx: number, cy: number, len: number, h: number) =>
  `M${cx - len / 2},${cy} Q${cx},${cy - h * 2} ${cx + len / 2},${cy} Q${cx},${cy + h * 2} ${cx - len / 2},${cy}Z`;

function Bar({ d, seed }: { d: string; seed: string }) {
  return (
    <g>
      <path d={d} fill={PAPER} />
      <Hatch d={d} seed={seed + "-dots"} style="dots" gap={6} ink="ink" opacity={0.5} />
      <Rough shape={{ kind: "path", d }} seed={seed} o={{ stroke: INK.pencil, strokeWidth: 1.5, roughness: 0.9 }} />
    </g>
  );
}

export function Braided() {
  const top = wobblyLine(20, 780, TOP, "br-top", 3, 40) as Pt[];
  const bot = wobblyLine(20, 780, BOT, "br-bot", 3, 40) as Pt[];
  return (
    <Svg label="A braided river seen from above: the Brahmaputra in Assam, flowing west in a very wide channel that splits into many channels around sand bars and rejoins. Majuli is a large river island in it. Heavy silt on a gentle slope makes the river drop sand bars, so the channels braid.">
      <T x={20} y={42} s={32} ink="blue" bold>Brahmaputra in Assam</T>
      <T x={20} y={74} f="pencil" s={26} ink="pencil">very wide, very silty, very flat</T>
      <Arrow pts={[[772, 66], [772, 30]]} seed="br-north" size={2} head={9} />
      <T x={752} y={52} f="marker" s={20} a="end">N</T>
      <Arrow pts={[[740, 110], [660, 108], [580, 111]]} seed="br-flow" ink="blue" size={3.4} head={15} />
      <T x={600} y={98} s={24} ink="blue" a="end">flows west</T>

      <Water d={toD([...top, ...bot.slice().reverse()], true)} opacity={0.2} />
      {FLOW.map(([x, y], i) => (
        <Arrow key={i} pts={[[x + 22, y], [x, y - 2], [x - 22, y]]} seed={`br-flow${i}`} ink="blue" size={1.4} head={7} />
      ))}
      {BARS.map(([x, y, l, h], i) => (
        <Bar key={i} d={lens(x, y, l, h)} seed={`br-bar${i}`} />
      ))}
      <Bar d={lens(400, 252, 250, 26)} seed="br-majuli" />
      <T x={400} y={252} s={30} bold a="middle" halo>Majuli</T>
      <T x={400} y={274} f="pencil" s={22} ink="pencil" a="middle" halo>river island</T>
      <Pen pts={top} seed="br-bank-top" size={2.8} />
      <Pen pts={bot} seed="br-bank-bot" size={2.8} />
      {[60, 180, 300, 420, 540, 660].map((x, i) => (
        <g key={i}>
          <Pen pts={[[x, TOP - 6], [x - 8, TOP - 16]]} seed={`br-gt${i}`} size={1.3} ink="pencil" />
          <Pen pts={[[x + 40, BOT + 6], [x + 32, BOT + 16]]} seed={`br-gb${i}`} size={1.3} ink="pencil" />
        </g>
      ))}

      <T x={20} y={408} s={25}>too much silt for a gentle slope → the river drops sand bars</T>
      <T x={20} y={438} s={25}>→ channels split and rejoin around them: a <tspan fill={INK.red} fontWeight={700}>braided</tspan> river</T>
    </Svg>
  );
}
