import { Arrow, Dash, Mark, Pen, Rough, Svg, T, Water, toD, INK, type Pt } from "./kit";

// river in perspective: near edge at the bottom, flowing away from us (downstream = up the page)
const LB: Pt[] = [[96, 452], [130, 340], [166, 230], [196, 150]];
const RB: Pt[] = [[344, 452], [308, 340], [272, 230], [244, 150]];

export function BankRule() {
  return (
    <Svg label="A person stands in a river, seen from behind, facing downstream. The left hand points to the left bank, the right hand to the right bank. Examples: the Ganga flows east, so Himalayan tributaries from the north, such as the Ghaghara, Gandak and Kosi, join its left bank and the Son from the south joins its right bank. The Brahmaputra flows west in Assam, so north-side tributaries such as the Subansiri and Manas join its right bank and the Dhansiri from the south joins its left bank.">
      {/* the rule */}
      <T x={20} y={40} s={28} bold>Face downstream.</T>
      <Mark x={20} y={72} w={198} seed="bank-mark" />
      <T x={20} y={72} s={26}>left hand = left bank</T>

      {/* river */}
      <Water d={toD([...LB, ...RB.slice().reverse()], true)} opacity={0.18} />
      <Pen pts={LB} seed="bank-lb" size={2.6} />
      <Pen pts={RB} seed="bank-rb" size={2.6} />
      {[0, 1, 2, 3, 4].map((i) => (
        <Pen key={`gl${i}`} pts={[[100 + i * 18 - 14, 430 - i * 56], [100 + i * 18 - 24, 424 - i * 56]]} seed={`bank-gl${i}`} size={1.4} ink="pencil" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <Pen key={`gr${i}`} pts={[[340 - i * 18 + 14, 430 - i * 56], [340 - i * 18 + 24, 424 - i * 56]]} seed={`bank-gr${i}`} size={1.4} ink="pencil" />
      ))}
      <Arrow pts={[[220, 262], [221, 210], [220, 166]]} seed="bank-flow" ink="blue" size={3.4} head={15} />
      <T x={220} y={140} s={22} ink="blue" a="middle">flow (downstream)</T>

      {/* you, from behind */}
      <Rough shape={{ kind: "ellipse", w: 40, h: 42 }} at={[200, 278]} seed="bank-head" o={{ stroke: INK.ink, strokeWidth: 2.4, roughness: 0.9 }} />
      <Pen pts={[[220, 316], [220, 386]]} seed="bank-body" size={3.4} />
      <Pen pts={[[220, 386], [204, 432]]} seed="bank-leg-l" size={3.2} />
      <Pen pts={[[220, 386], [236, 432]]} seed="bank-leg-r" size={3.2} />
      <Pen pts={[[220, 334], [184, 336], [150, 330]]} seed="bank-arm-l" size={3.2} />
      <Pen pts={[[220, 334], [256, 336], [290, 330]]} seed="bank-arm-r" size={3.2} />
      <Pen pts={[[150, 330], [138, 326]]} seed="bank-finger-l" size={2.4} />
      <Pen pts={[[290, 330], [302, 326]]} seed="bank-finger-r" size={2.4} />
      <Dash pts={[[188, 434], [252, 434]]} ink="blue" w={1.4} dash="4 5" />
      <T x={220} y={456} f="pencil" s={22} ink="pencil" a="middle" halo>you (from behind)</T>

      <T x={18} y={318} f="marker" s={22} ink="red">LEFT</T>
      <T x={18} y={344} f="marker" s={22} ink="red">BANK</T>
      <T x={326} y={318} f="marker" s={22} ink="red">RIGHT</T>
      <T x={326} y={344} f="marker" s={22} ink="red">BANK</T>

      <Dash pts={[[440, 24], [440, 450]]} w={1.2} dash="3 8" />

      {/* compass */}
      <Arrow pts={[[772, 86], [772, 50]]} seed="bank-north" size={2} head={9} />
      <T x={772} y={40} f="marker" s={20} a="middle">N</T>

      {/* Ganga flows east */}
      <T x={462} y={42} s={26} bold>Ganga flows east</T>
      <T x={512} y={84} s={21} ink="pencil" a="middle">Ghaghara</T>
      <T x={598} y={84} s={21} ink="pencil" a="middle">Gandak</T>
      <T x={680} y={84} s={21} ink="pencil" a="middle">Kosi</T>
      <Pen pts={[[506, 92], [520, 120], [544, 148]]} seed="bank-gh" ink="blue" size={2.2} />
      <Pen pts={[[592, 92], [606, 120], [630, 148]]} seed="bank-gd" ink="blue" size={2.2} />
      <Pen pts={[[674, 92], [688, 120], [712, 148]]} seed="bank-ko" ink="blue" size={2.2} />
      <Arrow pts={[[466, 152], [560, 150], [660, 153], [770, 150]]} seed="bank-ganga" ink="blue" size={3.6} head={15} />
      <Pen pts={[[506, 206], [520, 180], [548, 156]]} seed="bank-son" ink="blue" size={2.2} />
      <T x={476} y={224} s={21} ink="pencil">Son</T>
      <T x={572} y={194} s={22} ink="red" bold>north side = LEFT bank</T>
      <T x={572} y={220} s={21} ink="pencil">Son (south) = right bank</T>

      {/* Brahmaputra flows west in Assam */}
      <T x={462} y={268} s={26} bold>Brahmaputra flows west</T>
      <T x={462} y={296} f="pencil" s={24} ink="pencil">in Assam</T>
      <T x={736} y={310} s={21} ink="pencil" a="middle">Subansiri</T>
      <T x={612} y={310} s={21} ink="pencil" a="middle">Manas</T>
      <Pen pts={[[742, 318], [728, 346], [706, 374]]} seed="bank-sub" ink="blue" size={2.2} />
      <Pen pts={[[618, 318], [604, 346], [582, 374]]} seed="bank-man" ink="blue" size={2.2} />
      <Arrow pts={[[772, 378], [680, 376], [570, 380], [466, 378]]} seed="bank-brahma" ink="blue" size={3.6} head={15} />
      <Pen pts={[[744, 432], [730, 406], [706, 384]]} seed="bank-dhan" ink="blue" size={2.2} />
      <T x={752} y={452} s={21} ink="pencil" a="middle">Dhansiri</T>
      <T x={462} y={420} s={22} ink="red" bold>north side = RIGHT bank</T>
      <T x={462} y={446} s={21} ink="pencil">Dhansiri (south) = left bank</T>
    </Svg>
  );
}
