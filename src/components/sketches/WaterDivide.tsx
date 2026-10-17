import { Arrow, Dash, Hatch, Pen, Rough, Svg, T, Waves, landD, INK, PAPER, type Pt } from "./kit";

const ridge: Pt[] = [
  [100, 402], [120, 350], [150, 270], [185, 190], [215, 150], [240, 132], [275, 140], [340, 175], [420, 222],
  [500, 268], [580, 318], [650, 360], [700, 392], [720, 402],
];
const CREST = 240;

export function WaterDivide() {
  const rain = [180, 194, 208, 222, 258, 272, 286, 300, 314];
  return (
    <Svg label="A ridge with rain falling on both sides. Water on the steep west side runs as short, swift rivers into the Arabian Sea; water on the long east side runs as long rivers to the Bay of Bengal. The ridge crest is the water divide, as with the Western Ghats. In the north, the Delhi ridge divides the Indus and Ganga basins.">
      <T x={14} y={44} s={28} bold>one ridge,</T>
      <T x={14} y={72} s={28} bold>two basins</T>

      {/* cloud and rain */}
      {(
        [
          [168, 40, 74, 42],
          [214, 24, 84, 54],
          [266, 36, 78, 44],
        ] as [number, number, number, number][]
      ).map(([x, y, w, h], i) => (
        <Rough key={i} shape={{ kind: "ellipse", w, h }} at={[x, y]} seed={`wd-cloud${i}`} o={{ stroke: INK.pencil, strokeWidth: 2, fill: PAPER, fillStyle: "solid" }} />
      ))}
      {rain.map((x, i) => (
        <Pen key={i} pts={[[x, 88], [x - 5, 106]]} seed={`wd-rain${i}`} ink="blue" size={2} wob={0.3} />
      ))}

      {/* land */}
      <Hatch d={landD(ridge, 430)} seed="wd-hatch" gap={7} />
      <Pen pts={ridge} seed="wd-ridge" size={3.4} curve={false} wob={0.6} />
      <Waves x0={14} x1={96} y={412} seed="wd-waves-w" />
      <Waves x0={724} x1={792} y={412} seed="wd-waves-e" />
      <T x={14} y={450} s={24} ink="blue">Arabian Sea</T>
      <T x={790} y={450} s={24} ink="blue" a="end">Bay of Bengal</T>

      {/* the divide */}
      <Dash pts={[[CREST, 96], [CREST, 128]]} ink="red" w={2.4} dash="5 4" />
      <T x={344} y={110} s={30} ink="red" bold>water divide</T>
      <Arrow pts={[[340, 104], [296, 112], [252, 126]]} seed="wd-divide" ink="red" size={2.2} head={10} />

      {/* run-off */}
      <Arrow pts={[[198, 154], [166, 198], [132, 270], [102, 348], [86, 386]]} seed="wd-west" ink="blue" size={3} head={13} />
      <Arrow pts={[[274, 128], [340, 153], [420, 198], [500, 244], [580, 294], [650, 336], [712, 372]]} seed="wd-east" ink="blue" size={3.4} head={15} />
      <T x={14} y={222} f="pencil" s={26} ink="pencil">short, swift</T>
      <T x={14} y={248} f="pencil" s={26} ink="pencil">→ west</T>
      <T x={432} y={172} s={26} ink="blue" bold>long rivers</T>
      <T x={432} y={198} s={24} ink="blue">→ east, to the Bay</T>

      <T x={250} y={330} s={28} bold halo>Western Ghats</T>
      <T x={250} y={356} f="pencil" s={24} ink="pencil" halo>(Sahyadri)</T>

      {/* the northern example */}
      <Rough shape={{ kind: "rect", w: 252, h: 100 }} at={[534, 18]} seed="wd-note" o={{ stroke: INK.pencil, strokeWidth: 1.4, roughness: 1.2 }} />
      <T x={548} y={50} f="pencil" s={24} ink="pencil">same idea up north:</T>
      <T x={548} y={78} s={24}>Delhi ridge divides the</T>
      <T x={548} y={104} s={24}>Indus and Ganga basins</T>
    </Svg>
  );
}
