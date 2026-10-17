import { Arrow, Dash, Hatch, Pen, River, Svg, T, Water, Waves, smooth, toD, PAPER, type Pt } from "./kit";

const fan: Pt[] = [[205, 198], [150, 244], [90, 290], [108, 318], [205, 350], [302, 318], [320, 290], [260, 244]];
const funnelL: Pt[] = [[584, 198], [566, 236], [540, 266], [512, 290]];
const funnelR: Pt[] = [[608, 198], [626, 236], [652, 266], [680, 290]];

export function DeltaVsEstuary() {
  const fanD = toD(smooth([...fan, fan[0]]), true);
  return (
    <Svg label="Two river mouths compared. Left, a delta: a slow river carrying heavy silt drops it at the mouth, building a fan of land cut by many distributaries, as in the Ganga, Mahanadi and Godavari. Right, an estuary: a fast river with little silt ends in an open funnel that tides flush in and out, as in the Narmada and Tapi.">
      {/* ---------- delta ---------- */}
      <T x={205} y={44} s={36} bold a="middle">Delta</T>
      <Pen pts={[[150, 54], [205, 56], [260, 53]]} seed="dve-u1" size={2.4} ink="ink" />
      <Water d="M20,290L390,290L390,398L20,398Z" opacity={0.13} />
      <path d={fanD} fill={PAPER} />
      <Pen pts={[[20, 290], [92, 290]]} seed="dve-coast-l1" size={2.4} />
      <Pen pts={[[318, 290], [390, 290]]} seed="dve-coast-l2" size={2.4} />
      <Hatch d={fanD} seed="dve-fan-dots" style="dots" gap={7} ink="ink" opacity={0.45} />
      <Pen pts={[...smooth([[92, 290], [108, 318], [205, 350], [302, 318], [318, 290]])]} seed="dve-fan-edge" size={2.4} />
      <River c={[[205, 70], [197, 100], [213, 136], [199, 170], [205, 200]]} w={22} seed="dve-river-d" />
      {(
        [
          [[205, 200], [168, 250], [126, 296], [112, 322]],
          [[205, 200], [182, 262], [160, 314], [154, 338]],
          [[205, 200], [208, 270], [204, 350]],
          [[205, 200], [232, 262], [252, 314], [256, 338]],
          [[205, 200], [244, 250], [284, 296], [298, 322]],
          [[168, 250], [140, 268], [118, 290]],
          [[232, 262], [270, 282], [312, 300]],
        ] as Pt[][]
      ).map((c, i) => (
        <Pen key={i} pts={c} seed={`dve-dist${i}`} ink="blue" size={2.2} />
      ))}
      <Waves x0={40} x1={380} y={380} seed="dve-waves-d" />
      <T x={232} y={108} f="pencil" s={26} ink="pencil">slow river,</T>
      <T x={232} y={134} f="pencil" s={26} ink="pencil">heavy silt</T>
      <T x={205} y={422} s={24} a="middle">silt dropped → a fan of channels</T>
      <T x={205} y={450} s={22} ink="blue" a="middle">e.g. Ganga · Mahanadi · Godavari</T>

      <Dash pts={[[400, 24], [400, 452]]} w={1.2} dash="3 8" />

      {/* ---------- estuary ---------- */}
      <T x={595} y={44} s={36} bold a="middle">Estuary</T>
      <Pen pts={[[528, 54], [595, 56], [662, 53]]} seed="dve-u2" size={2.4} ink="ink" />
      <Water d="M410,290L790,290L790,398L410,398Z" opacity={0.13} />
      <Water d={toD([...smooth(funnelL), [512, 290], [680, 290], ...smooth(funnelR).reverse()], true)} opacity={0.2} />
      <River c={[[596, 70], [599, 110], [593, 158], [596, 200]]} w={24} seed="dve-river-e" />
      <Pen pts={[[410, 290], ...funnelL.slice().reverse()]} seed="dve-coast-r1" size={2.4} />
      <Pen pts={[...funnelR, [790, 290]]} seed="dve-coast-r2" size={2.4} />
      <Arrow pts={[[566, 352], [570, 300], [578, 228]]} seed="dve-tide-in" ink="red" size={2.8} head={13} />
      <Arrow pts={[[616, 228], [622, 300], [626, 352]]} seed="dve-tide-out" ink="red" size={2.8} head={13} />
      <T x={556} y={334} s={22} ink="red" a="end">tide in</T>
      <T x={638} y={334} s={22} ink="red">tide out</T>
      <Waves x0={420} x1={790} y={380} seed="dve-waves-e" />
      <T x={622} y={108} f="pencil" s={26} ink="pencil">fast river,</T>
      <T x={622} y={134} f="pencil" s={26} ink="pencil">little silt</T>
      <T x={595} y={422} s={24} a="middle">tides scour → an open funnel</T>
      <T x={595} y={450} s={22} ink="blue" a="middle">e.g. Narmada · Tapi</T>
    </Svg>
  );
}
