import { Arrow, Dash, Hatch, Pen, Svg, T, Waves, landD, type Pt } from "./kit";

// top: north → south profile; bottom: west → east profile across the Deccan
const NS: Pt[] = [
  [40, 182], [56, 150], [72, 96], [88, 122], [104, 60], [120, 98], [136, 52], [152, 92], [168, 74], [186, 128],
  [202, 150], [216, 146], [232, 172], [250, 180], [340, 182], [440, 180], [458, 168], [474, 142], [496, 128],
  [570, 122], [650, 128], [720, 136], [762, 142],
];
const NS_BASE = 205;

const WE: Pt[] = [
  [98, 420], [112, 372], [124, 318], [136, 290], [148, 282], [176, 290], [240, 304], [330, 322], [430, 342],
  [520, 356], [578, 362], [596, 348], [612, 360], [628, 344], [648, 366], [680, 392], [712, 412], [726, 420],
];
const WE_BASE = 432;

export function SlopeOfIndia() {
  return (
    <Svg label="Two side views of India. North to south: the high Himalaya, the low Ganga plain trough, then the Deccan plateau. West to east across the Deccan: the high Western Ghats near the Arabian Sea, then the plateau slopes gently east past the low Eastern Ghats to the Bay of Bengal, so the Godavari, Krishna and Kaveri flow east while only short rivers run west. The Western Ghats are the water divide.">
      {/* ---------- north → south ---------- */}
      <Hatch d={landD(NS, NS_BASE)} seed="slope-ns-hatch" gap={7} />
      <Hatch d={landD([[232, 172], [250, 180], [340, 182], [440, 180], [458, 168]], NS_BASE)} seed="slope-ns-silt" style="dots" gap={6} ink="ink" opacity={0.35} />
      <Pen pts={NS} seed="slope-ns-line" size={3.4} curve={false} />
      <Pen pts={[[40, NS_BASE], [762, NS_BASE]]} seed="slope-ns-base" size={1.6} ink="pencil" />
      <T x={24} y={198} f="marker" s={22}>N</T>
      <T x={772} y={198} f="marker" s={22}>S</T>
      <T x={60} y={36} s={30} bold>Himalaya</T>
      <T x={200} y={66} f="pencil" s={26} ink="pencil">very high, young</T>
      <T x={345} y={168} s={26} bold a="middle">Ganga plain</T>
      <T x={340} y={120} f="pencil" s={24} ink="pencil" a="middle">a low trough, filled with silt</T>
      <T x={615} y={108} s={26} bold a="middle">Deccan plateau</T>
      <T x={615} y={76} f="pencil" s={24} ink="pencil" a="middle">old, hard rock</T>

      <Dash pts={[[20, 226], [780, 226]]} w={1.2} dash="3 8" />

      {/* ---------- west → east across the Deccan ---------- */}
      <Hatch d={landD(WE, WE_BASE)} seed="slope-we-hatch" gap={7} angle={-38} />
      <Pen pts={WE} seed="slope-we-line" size={3.4} curve={false} />
      <Waves x0={14} x1={96} y={424} seed="slope-we-as" />
      <Waves x0={730} x1={792} y={424} seed="slope-we-bob" />
      <T x={10} y={452} s={22} ink="blue">Arabian Sea</T>
      <T x={792} y={452} s={22} ink="blue" a="end">Bay of Bengal</T>
      <T x={24} y={262} f="marker" s={22}>W</T>
      <T x={772} y={262} f="marker" s={22}>E</T>

      {/* long rivers ride the gentle eastward tilt */}
      <Arrow pts={[[180, 276], [260, 290], [360, 311], [460, 328], [540, 336], [600, 332], [632, 330], [670, 352], [704, 384], [724, 410]]} seed="slope-we-east" ink="blue" size={3.2} head={15} />
      <T x={420} y={300} s={26} ink="blue" bold>long rivers flow east</T>
      <T x={250} y={398} s={22} ink="blue" halo>Godavari · Krishna · Kaveri</T>

      {/* short rivers tumble west */}
      <Arrow pts={[[118, 292], [100, 340], [80, 398]]} seed="slope-we-west" ink="blue" size={2.6} head={12} />
      <T x={14} y={330} f="pencil" s={24} ink="pencil">short,</T>
      <T x={14} y={354} f="pencil" s={24} ink="pencil">swift</T>

      <T x={168} y={256} s={26} bold>Western Ghats</T>
      <T x={340} y={256} s={26} ink="red" bold>= water divide</T>
      <Arrow pts={[[204, 262], [176, 268], [154, 278]]} seed="slope-wd-arrow" ink="red" size={2} head={10} />
      <T x={612} y={396} s={22} a="middle" halo>Eastern Ghats</T>
      <T x={612} y={418} f="pencil" s={22} ink="pencil" a="middle" halo>low, broken</T>
    </Svg>
  );
}
