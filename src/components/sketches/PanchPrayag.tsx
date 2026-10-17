import { Arrow, Mark, Pen, Rough, Svg, T, INK, type Pt } from "./kit";

// Schematic, not to scale. Alaknanda drawn left → right (downstream), so facing downstream the top of the page is
// the left bank: Dhauliganga, Nandakini, Pindar come in from the east/south-east (left); Mandakini, Bhagirathi from the north (right).
const Y = 232;
const NODES: { x: number; prayag: string; trib: string; side: -1 | 1 }[] = [
  { x: 198, prayag: "Vishnuprayag", trib: "Dhauliganga", side: -1 },
  { x: 326, prayag: "Nandprayag", trib: "Nandakini", side: -1 },
  { x: 452, prayag: "Karnaprayag", trib: "Pindar", side: -1 },
  { x: 560, prayag: "Rudraprayag", trib: "Mandakini", side: 1 },
  { x: 680, prayag: "Devprayag", trib: "Bhagirathi", side: 1 },
];
const wav = (x: number) => Y + Math.sin(x / 47) * 5;

export function PanchPrayag() {
  const alak: Pt[] = [...Array.from({ length: 21 }, (_, i) => [134 + i * 26, wav(134 + i * 26)] as Pt), [680, wav(680)]];
  const ganga: Pt[] = [[680, wav(680)], [720, wav(720)], [752, wav(752)], [788, wav(788)]];
  return (
    <Svg label="Schematic of the Panch Prayag, the five confluences on the Alaknanda in order downstream: Vishnuprayag, where the Dhauliganga joins; Nandprayag, the Nandakini; Karnaprayag, the Pindar; Rudraprayag, the Mandakini; and Devprayag, where the Bhagirathi joins and the river is called the Ganga from here on. Walk downstream: V, N, K, R, D.">
      <Mark x={20} y={46} w={512} seed="pp-mark" h={24} />
      <T x={20} y={46} s={30} bold>walk downstream: V → N → K → R → D</T>
      <T x={780} y={46} f="pencil" s={23} ink="pencil" a="end">schematic, not to scale</T>

      <T x={10} y={Y + 9} s={26} ink="blue" bold>Alaknanda</T>
      <Pen pts={alak} seed="pp-alak" ink="blue" size={3.4} />
      <Arrow pts={ganga} seed="pp-ganga" ink="blue" size={5} head={18} />

      {NODES.map(({ x, prayag, trib, side }, i) => {
        const tx = x - 42;
        const ty = Y + side * 118;
        const tribPts: Pt[] = [[tx, ty], [tx + 8, (ty + Y) / 2], [x - 12, Y + side * 18], [x, wav(x)]];
        const first = prayag[0];
        return (
          <g key={prayag}>
            <Pen pts={tribPts} seed={`pp-trib${i}`} ink="blue" size={2.2} />
            <T x={tx} y={side < 0 ? ty - 12 : ty + 28} s={23} ink="blue" a="middle">{trib}</T>
            <Rough shape={{ kind: "ellipse", w: 30, h: 30 }} at={[x - 15, wav(x) - 15]} seed={`pp-node${i}`} o={{ stroke: INK.red, strokeWidth: 2.4, roughness: 1 }} />
            <T x={x} y={side < 0 ? Y + 44 : Y - 26} s={24} a="middle">
              <tspan fill={INK.red} fontWeight={700} fontSize={30}>{first}</tspan>
              {prayag.slice(1)}
            </T>
            <T x={x} y={side < 0 ? Y + 68 : Y - 50} f="pencil" s={22} ink="pencil" a="middle">{i + 1}</T>
          </g>
        );
      })}

      <T x={740} y={Y + 42} f="marker" s={24} ink="blue" a="middle">GANGA</T>
      <T x={790} y={Y + 72} s={26} ink="red" bold a="end">begins here</T>

      <T x={20} y={446} f="pencil" s={24} ink="pencil">prayag = confluence; met in this order going down from Badrinath</T>
    </Svg>
  );
}
