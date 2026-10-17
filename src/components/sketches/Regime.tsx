import { Arrow, Mark, Pen, Svg, T, type Pt } from "./kit";

const X0 = 90;
const Y0 = 390; // zero flow
const mx = (i: number) => 120 + i * 55; // Jan … Dec
const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

// relative flow, drawn as pixel heights above zero (shape only, not data)
const himalayan = [58, 56, 70, 120, 168, 186, 250, 280, 236, 150, 92, 66];
const peninsular = [8, 6, 4, 4, 5, 30, 160, 240, 222, 90, 22, 10];
const curve = (h: number[]): Pt[] => h.map((v, i) => [mx(i), Y0 - v]);

export function Regime() {
  return (
    <Svg label="Hydrograph of river flow from January to December. A Himalayan river, fed by glaciers and the monsoon, keeps flowing all year: its flow rises with summer snow-melt from April and peaks with the monsoon in August, and never drops to zero. A Peninsular river, fed by the monsoon only, is almost dry from January to May and has one sharp monsoon peak.">
      {/* axes */}
      <Arrow pts={[[X0, Y0 + 4], [X0, 60]]} seed="reg-y" size={2.6} head={12} curve={false} />
      <Arrow pts={[[X0 - 4, Y0], [790, Y0]]} seed="reg-x" size={2.6} head={12} curve={false} />
      <T x={58} y={250} f="pencil" s={26} ink="pencil" a="middle" r={-90}>water flow</T>
      {MONTHS.map((m, i) => (
        <T key={i} x={mx(i)} y={420} s={22} a="middle">{m}</T>
      ))}
      <T x={mx(5) + 27} y={450} f="pencil" s={22} ink="pencil" a="middle">months</T>

      <Pen pts={curve(peninsular)} seed="reg-pen" ink="red" size={4} wob={0.8} />
      <Pen pts={curve(himalayan)} seed="reg-him" ink="blue" size={4.4} wob={0.8} />

      {/* key */}
      <Pen pts={[[116, 84], [156, 82]]} seed="reg-key-b" ink="blue" size={4.4} />
      <T x={166} y={90} s={26} ink="blue" bold>Himalayan river</T>
      <T x={166} y={116} s={23} ink="blue">glacier + monsoon = perennial</T>
      <Pen pts={[[116, 152], [156, 150]]} seed="reg-key-r" ink="red" size={4} />
      <T x={166} y={158} s={26} ink="red" bold>Peninsular river</T>
      <T x={166} y={184} s={23} ink="red">monsoon only = seasonal</T>

      {/* notes */}
      <T x={300} y={304} f="pencil" s={25} ink="pencil">snow-melt</T>
      <Arrow pts={[[326, 284], [322, 262], [318, 246]]} seed="reg-melt" ink="pencil" size={1.8} head={9} />
      <T x={540} y={84} f="pencil" s={25} ink="pencil">monsoon peak</T>
      <Arrow pts={[[540, 90], [522, 98], [508, 106]]} seed="reg-peak" ink="pencil" size={1.8} head={9} />
      <Mark x={126} y={362} w={94} seed="reg-mark" h={19} />
      <T x={126} y={362} s={22}>never zero</T>
      <T x={278} y={372} s={22} ink="red">almost dry</T>
    </Svg>
  );
}
