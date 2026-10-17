import { Arrow, Dash, Mark, Pen, Rough, Svg, T, Waves, INK, type Pt } from "./kit";

// Schematic, north up. Upper Kaveri basin in Karnataka (SW monsoon), lower basin in Tamil Nadu (NE monsoon).
const kaveri: Pt[] = [[178, 196], [250, 206], [320, 214], [380, 236], [420, 270], [452, 304], [500, 324], [570, 330], [630, 322], [664, 318]];
const ghats = Array.from({ length: 13 }, (_, i) => 124 + i * 26);

export function MonsoonKaveri() {
  return (
    <Svg label="Schematic of the Kaveri basin. The Kaveri rises at Talakaveri in Kodagu, Karnataka, in the Western Ghats and flows east-south-east through Karnataka into Tamil Nadu and the Bay of Bengal. The south-west monsoon, June to September, rains on the upper basin in Karnataka; the north-east monsoon, October to December, rains on the lower basin in Tamil Nadu. Two monsoons give the Kaveri a steadier flow than other peninsular rivers.">
      <Mark x={300} y={40} w={386} seed="mk-mark" h={24} />
      <T x={300} y={40} s={30} bold>two monsoons → steadier flow</T>
      <T x={300} y={68} f="pencil" s={26} ink="pencil">than other peninsular rivers</T>

      {/* coasts and ghats */}
      <Pen pts={[[110, 92], [104, 180], [112, 270], [106, 360], [110, 452]]} seed="mk-wcoast" size={2} />
      <Pen pts={[[704, 150], [698, 240], [706, 330], [700, 452]]} seed="mk-ecoast" size={2} />
      <Waves x0={20} x1={100} y={150} seed="mk-w1" />
      <Waves x0={34} x1={100} y={444} seed="mk-w2" />
      <Waves x0={716} x1={792} y={300} seed="mk-e1" />
      <T x={14} y={104} s={22} ink="blue">Arabian</T>
      <T x={14} y={126} s={22} ink="blue">Sea</T>
      <T x={716} y={424} s={22} ink="blue">Bay of</T>
      <T x={716} y={446} s={22} ink="blue">Bengal</T>
      {ghats.map((y, i) => (
        <Pen key={i} pts={[[138, y + 8], [148, y - 7], [158, y + 8]]} seed={`mk-ghat${i}`} size={1.8} curve={false} wob={0.4} />
      ))}
      <T x={130} y={100} f="pencil" s={22} ink="pencil">Western Ghats</T>

      {/* state line */}
      <Dash pts={[[330, 104], [400, 260], [470, 450]]} w={1.8} dash="8 6" />
      <T x={196} y={140} f="marker" s={22} ink="pencil">KARNATAKA</T>
      <T x={196} y={164} f="pencil" s={23} ink="pencil">upper basin</T>
      <T x={500} y={448} f="marker" s={22} ink="pencil">TAMIL NADU</T>
      <T x={500} y={420} f="pencil" s={23} ink="pencil">lower basin</T>

      {/* river */}
      <Pen pts={kaveri} seed="mk-kaveri" ink="blue" size={3.8} />
      <Pen pts={[[664, 318], [684, 302], [702, 296]]} seed="mk-d1" ink="blue" size={2.2} />
      <Pen pts={[[664, 318], [686, 318], [702, 318]]} seed="mk-d2" ink="blue" size={2.2} />
      <Pen pts={[[664, 318], [684, 334], [702, 342]]} seed="mk-d3" ink="blue" size={2.2} />
      <Rough shape={{ kind: "ellipse", w: 18, h: 18 }} at={[169, 187]} seed="mk-src" o={{ stroke: INK.blue, strokeWidth: 2.2, fill: INK.blue, fillStyle: "solid" }} />
      <T x={262} y={196} s={28} ink="blue" bold>Kaveri</T>
      <T x={168} y={238} f="pencil" s={24} ink="pencil">source: Kodagu</T>

      {/* SW monsoon → upper basin */}
      {(
        [
          [[22, 252], [80, 224], [134, 196]],
          [[22, 318], [80, 290], [134, 262]],
          [[30, 390], [86, 360], [136, 330]],
        ] as Pt[][]
      ).map((p, i) => (
        <Arrow key={i} pts={p} seed={`mk-sw${i}`} ink="red" size={3.2} head={14} />
      ))}
      <T x={176} y={292} s={28} ink="red" bold>SW monsoon</T>
      <T x={176} y={318} s={24} ink="red">June–Sept</T>

      {/* NE monsoon → lower basin */}
      {(
        [
          [[790, 160], [730, 196], [672, 232]],
          [[790, 238], [730, 272], [664, 302]],
          [[790, 352], [730, 384], [670, 410]],
        ] as Pt[][]
      ).map((p, i) => (
        <Arrow key={i} pts={p} seed={`mk-ne${i}`} ink="red" size={3.2} head={14} />
      ))}
      <T x={500} y={374} s={28} ink="red" bold>NE monsoon</T>
      <T x={500} y={398} s={24} ink="red">Oct–Dec</T>
    </Svg>
  );
}
