import { Arrow, Dash, Svg, T, type Pt } from "./kit";

const RIVERS: { name: string; x: number; west: boolean }[] = [
  { name: "Indus", x: 95, west: true },
  { name: "Jhelum", x: 205, west: true },
  { name: "Chenab", x: 315, west: true },
  { name: "Ravi", x: 485, west: false },
  { name: "Beas", x: 595, west: false },
  { name: "Sutlej", x: 705, west: false },
];

// each river drawn from the hills (top right) down towards the plains (bottom left), as they run NE → SW
const course = (x: number): Pt[] => [[x + 26, 122], [x + 10, 178], [x + 14, 236], [x - 6, 292], [x - 20, 346]];

export function IndusTreaty() {
  return (
    <Svg label="The six rivers of the Indus system from west to east: Indus, Jhelum and Chenab, the western rivers, whose waters Pakistan gets most use of; and Ravi, Beas and Sutlej, the eastern rivers, which India may use fully, under the Indus Waters Treaty of 1960. India may make limited use of the western rivers, such as run-of-river hydropower. India has held the treaty in abeyance since 23 April 2025.">
      <T x={400} y={38} s={32} bold a="middle">Indus Waters Treaty, 1960</T>
      <T x={400} y={66} f="pencil" s={24} ink="pencil" a="middle">held in abeyance by India since 23 Apr 2025</T>
      <T x={20} y={240} f="marker" s={22} ink="pencil">W</T>
      <T x={780} y={240} f="marker" s={22} ink="pencil" a="end">E</T>

      {RIVERS.map(({ name, x, west }) => (
        <g key={name}>
          <T x={x + 26} y={110} s={28} bold a="middle" ink={west ? "blue" : "green"}>{name}</T>
          <Arrow pts={course(x)} seed={`iwt-${name}`} ink={west ? "blue" : "green"} size={4.2} head={15} />
        </g>
      ))}

      <Dash pts={[[400, 86], [400, 446]]} ink="ink" w={2} dash="10 8" />

      <T x={205} y={390} s={28} bold a="middle" ink="blue">Western rivers</T>
      <T x={205} y={416} s={24} a="middle" ink="blue">Pakistan gets most use</T>
      <T x={205} y={442} f="pencil" s={21} a="middle" ink="pencil">India: limited use (run-of-river hydro)</T>
      <T x={595} y={390} s={28} bold a="middle" ink="green">Eastern rivers</T>
      <T x={595} y={416} s={24} a="middle" ink="green">India: full use</T>
    </Svg>
  );
}
