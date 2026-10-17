import { Arrow, Dash, Hatch, Mark, Pen, Svg, T, Water, landD, toD, type Pt } from "./kit";

const BASE = 410;
const OLD = 340; // the old land surface the river first flowed on

const p1: Pt[] = [[15, OLD], [116, OLD], [124, 354], [152, 354], [160, OLD], [255, OLD]];
const p2: Pt[] = [[280, OLD], [310, 330], [340, 306], [370, 286], [390, 280], [395, 352], [405, 352], [410, 280], [430, 285], [460, 306], [490, 330], [520, OLD]];
const p3: Pt[] = [
  [545, OLD], [568, 282], [588, 212], [610, 140], [627, 166], [642, 150], [653, 172], [661, 354], [669, 354],
  [677, 172], [690, 150], [704, 168], [720, 128], [744, 206], [764, 280], [785, OLD],
];

function Panel({ surf, id }: { surf: Pt[]; id: string }) {
  return (
    <g>
      <Hatch d={landD(surf, BASE)} seed={`ante-${id}-hatch`} gap={7} />
      <Pen pts={surf} seed={`ante-${id}-surf`} size={3.2} curve={false} wob={0.7} />
      <Pen pts={[[surf[0][0], BASE], [surf[surf.length - 1][0], BASE]]} seed={`ante-${id}-base`} size={1.6} ink="pencil" />
    </g>
  );
}

export function Antecedent() {
  return (
    <Svg label="Three stages of an antecedent river, seen looking along the river. First, the river flows on flat land. Second, the land slowly rises with the Himalayan uplift while the river cuts its bed down. Third, the mountains stand high and the river, still near its old level, flows in a deep gorge. The river is older than the mountain. Examples: Indus, Sutlej, Brahmaputra.">
      <T x={135} y={40} s={25} bold a="middle">1. river flows</T>
      <T x={135} y={66} s={25} bold a="middle">on flat land</T>
      <T x={400} y={40} s={25} bold a="middle">2. land slowly rises</T>
      <T x={400} y={66} f="pencil" s={25} ink="pencil" a="middle">(Himalayan uplift)</T>
      <T x={665} y={40} s={25} bold a="middle">3. river keeps cutting:</T>
      <T x={665} y={66} s={25} bold a="middle">a deep gorge</T>

      <Panel surf={p1} id="p1" />
      <Panel surf={p2} id="p2" />
      <Panel surf={p3} id="p3" />

      <Water d={toD([[121, 346], [155, 346], [152, 354], [124, 354]], true)} opacity={0.6} />
      <Water d={toD([[394, 342], [406, 342], [405, 352], [395, 352]], true)} opacity={0.6} />
      <Water d={toD([[660, 342], [670, 342], [669, 354], [661, 354]], true)} opacity={0.6} />

      <T x={182} y={302} s={24} ink="blue">river</T>
      <Arrow pts={[[184, 308], [164, 322], [148, 338]]} seed="ante-river-ptr" ink="pencil" size={1.8} head={9} />

      {/* old level stays marked: the river never left it */}
      <Dash pts={[[280, OLD], [520, OLD]]} ink="ink" w={1.6} dash="6 6" />
      <Dash pts={[[545, OLD], [785, OLD]]} ink="ink" w={1.6} dash="6 6" />
      <T x={400} y={384} f="pencil" s={23} ink="pencil" a="middle" halo>old land level</T>

      {/* uplift */}
      <Arrow pts={[[302, 404], [302, 362]]} seed="ante-up1" size={2.6} head={11} />
      <Arrow pts={[[498, 404], [498, 362]]} seed="ante-up2" size={2.6} head={11} />
      <Arrow pts={[[592, 404], [592, 356]]} seed="ante-up3" size={2.6} head={11} />
      <Arrow pts={[[740, 404], [740, 356]]} seed="ante-up4" size={2.6} head={11} />

      {/* down-cutting */}
      <Arrow pts={[[400, 222], [400, 270]]} seed="ante-cut2" ink="red" size={2.8} head={12} />
      <Arrow pts={[[665, 96], [665, 160]]} seed="ante-cut3" ink="red" size={3} head={13} />
      <T x={676} y={112} s={22} ink="red">cuts down</T>

      <Mark x={20} y={446} w={300} seed="ante-mark" />
      <T x={20} y={446} s={26} bold>river older than the mountain</T>
      <T x={785} y={446} s={24} ink="blue" a="end">e.g. Indus · Sutlej · Brahmaputra</T>
    </Svg>
  );
}
