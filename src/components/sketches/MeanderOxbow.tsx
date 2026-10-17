import { Arrow, Dash, Hatch, Pen, River, Svg, T, Water, offset, smooth, toD, type Pt } from "./kit";

const W = 24; // channel width
const bend: Pt[] = [[112, 80], [113, 140], [134, 182], [166, 214], [178, 252], [164, 292], [130, 326], [112, 368], [112, 410]];
// keyhole loop: the two limbs run close together (the neck) before flaring round the loop
const ring: Pt[] = [[134, 214], [150, 194], [176, 186], [206, 196], [226, 220], [232, 250], [226, 280], [206, 304], [176, 314], [150, 306], [134, 286]];
const loop: Pt[] = [[60, 80], [60, 150], [66, 196], [84, 222], [112, 228], ...ring, [112, 272], [84, 278], [66, 304], [60, 350], [60, 410]];
const cut: Pt[] = [[60, 80], [60, 150], [66, 196], [82, 236], [82, 264], [66, 304], [60, 350], [60, 410]];


export function MeanderOxbow() {
  // panel 1: outer bank of the bend (right side) and the point bar inside it (left side)
  const mid = smooth(bend);
  const outer = offset(mid, W / 2).slice(Math.round(mid.length * 0.38), Math.round(mid.length * 0.66));
  const ticks = outer.filter((_, i) => i % 3 === 0);
  const bar: Pt[] = [[160, 222], [144, 244], [142, 270], [154, 290], [164, 258]];

  // panel 3: the abandoned loop as a lake
  const lakeMid = smooth([[124, 224], ...ring.slice(1, -1), [124, 276]]);
  const lakeD = toD([...offset(lakeMid, W / 2 - 2), ...offset(lakeMid, -W / 2 + 2).reverse()], true);

  return (
    <Svg label="Three steps of an oxbow lake. One: a river bends; the fast water erodes the outer bank and the slow water deposits sand on the inner bank. Two: the bend grows into a loop and the neck of land between its ends narrows. Three: a flood cuts through the neck, the river takes the short straight course, and the abandoned loop is left as an oxbow lake.">
      {/* ---------- 1 ---------- */}
      <T x={10} y={40} s={25} bold>1. a bend grows</T>
      <River c={bend} w={W} seed="mo-bend" />
      <Arrow pts={[[80, 92], [81, 150]]} seed="mo-flow" ink="blue" size={2.4} head={11} />
      {ticks.map(([x, y], i) => (
        <Pen key={i} pts={[[x + 2, y], [x + 11, y + 3]]} seed={`mo-tick${i}`} ink="red" size={2.2} wob={0.4} />
      ))}
      <Hatch d={toD(smooth([...bar, bar[0]]), true)} seed="mo-bar" style="dots" gap={5} ink="ink" opacity={0.6} />
      <T x={200} y={244} s={24} ink="red" bold>erosion</T>
      <T x={200} y={268} s={21} ink="pencil">outer bank</T>
      <T x={6} y={244} s={24} bold>deposition</T>
      <T x={6} y={268} s={21} ink="pencil">inner bank</T>

      <Dash pts={[[288, 24], [288, 420]]} w={1.2} dash="3 8" />

      {/* ---------- 2 ---------- */}
      <g transform="translate(292 0)">
        <T x={10} y={40} s={25} bold>2. the neck narrows</T>
        <River c={loop} w={W} seed="mo-loop" />
        <T x={150} y={258} s={24} ink="red" bold>neck</T>
        <Arrow pts={[[146, 251], [130, 250], [112, 250]]} seed="mo-neck" ink="red" size={2} head={9} />
      </g>

      <Dash pts={[[544, 24], [544, 420]]} w={1.2} dash="3 8" />

      {/* ---------- 3 ---------- */}
      <g transform="translate(544 0)">
        <T x={8} y={40} s={25} bold>3. cut-off: oxbow lake</T>
        <River c={cut} w={W} seed="mo-cut" />
        <Water d={lakeD} opacity={0.3} />
        <Pen pts={offset(lakeMid, W / 2 - 2)} seed="mo-lake-a" ink="blue" size={1.8} />
        <Pen pts={offset(lakeMid, -W / 2 + 2)} seed="mo-lake-b" ink="blue" size={1.8} />
        <Hatch d={toD([[94, 214], [126, 212], [126, 236], [94, 238]], true)} seed="mo-plug1" style="dots" gap={5} ink="ink" opacity={0.6} />
        <Hatch d={toD([[94, 262], [126, 264], [126, 288], [94, 286]], true)} seed="mo-plug2" style="dots" gap={5} ink="ink" opacity={0.6} />
        <T x={168} y={356} s={26} ink="blue" bold a="middle">oxbow lake</T>
        <T x={168} y={384} f="pencil" s={22} ink="pencil" a="middle">silt seals its ends</T>
      </g>

      <T x={400} y={446} f="pencil" s={24} ink="pencil" a="middle">fast water on the outside cuts; slow water on the inside drops sand</T>
    </Svg>
  );
}
