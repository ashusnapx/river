import { Arrow, Hatch, Pen, Svg, T, toD, type Pt } from "./kit";

// Schematic, north up. Tsangpo east across Tibet → U-turn round Namcha Barwa → Siang/Dihang south through
// Arunachal → joined by Dibang and Lohit → Brahmaputra west through Assam → south into Bangladesh as the Jamuna.
const tsangpo: Pt[] = [
  [36, 122], [160, 110], [280, 124], [400, 110], [520, 116], [590, 104], [640, 74], [690, 52], [736, 56],
  [760, 86], [758, 130], [738, 172], [714, 210], [694, 248], [678, 288], [664, 326],
];
const brahmaputra: Pt[] = [[664, 332], [580, 344], [480, 336], [380, 348], [280, 340], [196, 348], [152, 364], [128, 396], [120, 452]];
const peaks = Array.from({ length: 15 }, (_, i) => 56 + i * 34);

export function GreatBend() {
  return (
    <Svg label="Schematic map of the Brahmaputra. As the Tsangpo it flows east across Tibet, makes a U-turn around Namcha Barwa, and enters Arunachal Pradesh as the Siang or Dihang. Joined by the Dibang and the Lohit, it becomes the Brahmaputra, flows west through Assam, then turns south into Bangladesh as the Jamuna.">
      <T x={36} y={52} f="marker" s={24} ink="pencil">TIBET</T>
      <T x={150} y={92} s={28} ink="blue" bold>Tsangpo flows east</T>

      {/* Himalaya and Namcha Barwa */}
      {peaks.map((x, i) => (
        <Pen key={i} pts={[[x - 13, 228], [x, 206 + (i % 3) * 3], [x + 13, 228]]} seed={`gb-peak${i}`} size={2} curve={false} />
      ))}
      <T x={300} y={262} f="pencil" s={26} ink="pencil" a="middle">Himalaya</T>
      <Hatch d={toD([[620, 176], [652, 116], [684, 176]], true)} seed="gb-nb-hatch" gap={5} />
      <Pen pts={[[614, 178], [652, 114], [690, 178]]} seed="gb-nb" size={3} curve={false} />
      <T x={632} y={204} s={22} a="middle" bold>Namcha Barwa</T>

      <Pen pts={tsangpo} seed="gb-tsangpo" ink="blue" size={3.6} />
      <Pen pts={[[782, 236], [744, 270], [702, 304], [668, 326]]} seed="gb-dibang" ink="blue" size={2.4} />
      <Pen pts={[[792, 352], [740, 346], [700, 338], [670, 333]]} seed="gb-lohit" ink="blue" size={2.4} />
      <Arrow pts={brahmaputra} seed="gb-brahmaputra" ink="blue" size={5} head={18} />

      <T x={640} y={40} s={26} ink="red" bold a="end">U-turn round Namcha Barwa</T>
      <Arrow pts={[[648, 32], [690, 26], [728, 40]]} seed="gb-uturn" ink="red" size={2.2} head={10} />

      <T x={664} y={262} s={26} ink="blue" bold a="end">Siang / Dihang</T>
      <T x={664} y={288} f="pencil" s={24} ink="pencil" a="end">Arunachal Pradesh</T>
      <T x={790} y={226} s={23} ink="blue" a="end">Dibang</T>
      <T x={790} y={378} s={23} ink="blue" a="end">Lohit</T>

      <T x={270} y={326} s={30} ink="blue" bold>Brahmaputra flows west</T>
      <T x={420} y={392} f="marker" s={22} ink="pencil">ASSAM</T>
      <T x={142} y={446} s={26} ink="blue" bold>Jamuna</T>
      <T x={236} y={446} f="pencil" s={24} ink="pencil">(Bangladesh)</T>

      <Arrow pts={[[760, 448], [760, 414]]} seed="gb-north" size={2} head={9} />
      <T x={744} y={436} f="marker" s={18} a="end">N</T>
    </Svg>
  );
}
