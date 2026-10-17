import { Arrow, Dash, Hatch, Mark, Pen, River, Svg, T, toD, PAPER, type Pt } from "./kit";

// Block diagram. Front face = north (left) → south (right) section; depth runs east (into the page).
// So the Narmada, flowing west, comes towards the viewer.
const front: Pt[] = [[40, 430], [40, 250], [180, 250], [200, 320], [360, 320], [380, 250], [520, 250], [520, 430]];
const vTop: Pt[] = [[40, 250], [180, 250], [250, 100], [110, 100]];
const vFault: Pt[] = [[180, 250], [200, 320], [270, 170], [250, 100]];
const floor: Pt[] = [[200, 320], [360, 320], [430, 170], [270, 170]];
const sTop: Pt[] = [[380, 250], [520, 250], [590, 100], [450, 100]];
const sSide: Pt[] = [[520, 250], [520, 430], [590, 280], [590, 100]];

function Face({ pts, seed, angle, gap = 8, fill = true }: { pts: Pt[]; seed: string; angle: number; gap?: number; fill?: boolean }) {
  const d = toD(pts, true);
  return (
    <g>
      <path d={d} fill={PAPER} />
      {fill && <Hatch d={d} seed={seed} angle={angle} gap={gap} opacity={0.55} />}
      <Pen pts={[...pts, pts[0]]} seed={seed + "-edge"} size={2.6} curve={false} wob={0.6} />
    </g>
  );
}

export function RiftValley() {
  return (
    <Svg label="Block diagram of a rift valley. Two raised blocks, the Vindhya to the north and the Satpura to the south, stand on either side of a block that has sunk between two faults; the rock layers in the sunken block sit lower. The Narmada flows west along this faulted trough, straight and fast, towards the Arabian Sea. The Tapi follows a similar trough south of the Satpura.">
      <Mark x={20} y={38} w={500} seed="rift-mark" />
      <T x={20} y={38} s={27} bold>faulted trough → river flows west, straight, fast</T>

      <Face pts={floor} seed="rift-floor" angle={20} gap={11} fill={false} />
      <River c={[[350, 172], [330, 215], [305, 268], [281, 318]]} w={(t) => 20 + t * 16} seed="rift-narmada" opacity={0.32} size={1.6} />
      <Arrow pts={[[344, 192], [318, 246], [296, 296]]} seed="rift-flow" ink="blue" size={2.6} head={12} />
      <Face pts={vFault} seed="rift-vfault" angle={60} gap={6} />
      <Face pts={vTop} seed="rift-vtop" angle={-20} gap={12} fill={false} />
      <Face pts={sTop} seed="rift-stop" angle={-20} gap={12} fill={false} />
      <Face pts={sSide} seed="rift-sside" angle={70} gap={9} />
      <Face pts={front} seed="rift-front" angle={-45} gap={7} />

      {/* rock layers: same bed, dropped in the middle */}
      <Pen pts={[[40, 292], [192, 292]]} seed="rift-bed-v" size={2.2} ink="ink" />
      <Pen pts={[[367, 292], [520, 292]]} seed="rift-bed-s" size={2.2} ink="ink" />
      <Pen pts={[[213, 362], [347, 362]]} seed="rift-bed-g" size={2.2} ink="ink" />

      {/* faults */}
      <Pen pts={[[180, 250], [200, 320], [231, 430]]} seed="rift-f1" ink="red" size={3.2} curve={false} />
      <Pen pts={[[380, 250], [360, 320], [329, 430]]} seed="rift-f2" ink="red" size={3.2} curve={false} />
      <Arrow pts={[[280, 374], [280, 416]]} seed="rift-sank" ink="red" size={2.6} head={11} />
      <T x={292} y={404} s={22} ink="red" halo>sank</T>
      <T x={231} y={454} s={22} ink="red" a="middle">fault</T>
      <T x={329} y={454} s={22} ink="red" a="middle">fault</T>

      <T x={146} y={182} s={28} bold a="middle" halo>Vindhya</T>
      <T x={146} y={208} f="pencil" s={24} ink="pencil" a="middle" halo>(north)</T>
      <T x={486} y={182} s={28} bold a="middle" halo>Satpura</T>
      <T x={486} y={208} f="pencil" s={24} ink="pencil" a="middle" halo>(south)</T>
      <T x={250} y={314} s={22} ink="blue" r={-65} halo>Narmada</T>

      {/* compass drawn in the same projection */}
      <Arrow pts={[[700, 112], [664, 112]]} seed="rift-cn" size={1.8} head={8} />
      <Arrow pts={[[700, 112], [736, 112]]} seed="rift-cs" size={1.8} head={8} />
      <Arrow pts={[[700, 112], [685, 144]]} seed="rift-cw" size={1.8} head={8} />
      <Arrow pts={[[700, 112], [715, 80]]} seed="rift-ce" size={1.8} head={8} />
      <T x={652} y={119} f="marker" s={18} a="middle">N</T>
      <T x={750} y={119} f="marker" s={18} a="middle">S</T>
      <T x={680} y={166} f="marker" s={18} a="middle">W</T>
      <T x={720} y={72} f="marker" s={18} a="middle">E</T>

      <T x={616} y={222} s={30} ink="blue" bold>Narmada</T>
      <T x={616} y={250} s={24} ink="blue">flows west,</T>
      <T x={616} y={276} s={24} ink="blue">towards you,</T>
      <T x={616} y={302} s={24} ink="blue">to the Arabian Sea</T>
      <Dash pts={[[616, 340], [780, 340]]} w={1} dash="2 6" />
      <T x={616} y={376} f="pencil" s={25} ink="pencil">Tapi: a similar</T>
      <T x={616} y={400} f="pencil" s={25} ink="pencil">trough, south of</T>
      <T x={616} y={424} f="pencil" s={25} ink="pencil">the Satpura</T>
    </Svg>
  );
}
