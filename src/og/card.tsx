import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { indiaMap, worldMap } from "@/data/map";
import { SITE } from "@/lib/site";

/** Link-preview cards (WhatsApp, Telegram, X, LinkedIn): a notebook page, rendered at build time. */
export const OG_SIZE = { width: 1200, height: 630 };

const fonts = async () => {
  const dir = join(process.cwd(), "src/og/fonts");
  const [regular, bold, marker] = await Promise.all([
    readFile(join(dir, "Kalam-Regular.ttf")),
    readFile(join(dir, "Kalam-Bold.ttf")),
    readFile(join(dir, "PermanentMarker-Regular.ttf")),
  ]);
  return [
    { name: "Kalam", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Kalam", data: bold, weight: 700 as const, style: "normal" as const },
    { name: "Marker", data: marker, weight: 400 as const, style: "normal" as const },
  ];
};

const C = {
  paper: "#fbf6e8",
  rule: "#cfdcee",
  margin: "#e7a3a0",
  ink: "#24211d",
  blue: "#1e3f94",
  water: "#2c64c8",
  red: "#c4372c",
  green: "#1d7449",
  pencil: "#6e6a64",
  hl: "#ffe14d",
};

/** Map thumbnail: India (or the world) with one or more rivers in heavy ink. */
function MapInset({ rivers, world = false }: { rivers: string[]; world?: boolean }) {
  const geo = world ? worldMap : indiaMap;
  const [x, y, w, h] = geo.viewBox.split(/\s+/).map(Number);
  const boxW = world ? 470 : 400;
  return (
    <div style={{ display: "flex", background: "#fffdf6", padding: 12, boxShadow: "0 10px 24px -12px rgba(60,40,0,0.45)", transform: "rotate(1.5deg)" }}>
      <svg width={boxW} height={Math.round((boxW * h) / w)} viewBox={`${x} ${y} ${w} ${h}`}>
        {geo.neighbours?.map((n) => <path key={n.name} d={n.d} fill="#f3ead2" stroke={C.pencil} strokeWidth={1} />)}
        {geo.land && <path d={geo.land} fill="#fffcf2" stroke={C.pencil} strokeWidth={1.2} />}
        {geo.india && <path d={geo.india} fill="#fffcf2" stroke={C.ink} strokeWidth={2} />}
        {Object.entries(geo.rivers).map(([id, r]) => (
          <path key={id} d={r.d} fill="none" stroke="#4f6fc4" strokeOpacity={rivers.length ? 0.35 : 0.8} strokeWidth={1.2} />
        ))}
        {rivers.filter((id) => geo.rivers[id]).map((id) => (
          <path key={`f-${id}`} d={geo.rivers[id].d} fill="none" stroke={C.blue} strokeWidth={world ? 4 : 5} strokeLinecap="round" strokeLinejoin="round" />
        ))}
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <svg width={52} height={52} viewBox="0 0 64 64">
        <rect width="64" height="64" rx="14" fill={C.paper} stroke={C.ink} strokeOpacity={0.2} />
        <path d="M6 24c8-6 14 6 22 0s14-6 22 0 8 2 8 2" fill="none" stroke={C.blue} strokeWidth={5} strokeLinecap="round" />
        <path d="M6 40c8-6 14 6 22 0s14-6 22 0 8 2 8 2" fill="none" stroke={C.water} strokeWidth={4} strokeLinecap="round" opacity={0.7} />
      </svg>
      <div style={{ display: "flex", fontFamily: "Marker", fontSize: 40, color: C.blue }}>{SITE.name}</div>
      <div style={{ display: "flex", fontFamily: "Kalam", fontSize: 30, color: C.red }}>{SITE.hindi}</div>
      <div style={{ display: "flex", fontFamily: "Kalam", fontSize: 26, color: C.pencil, marginLeft: 6 }}>{SITE.tagline}</div>
    </div>
  );
}

export async function card({
  kicker,
  title,
  hindi,
  line,
  rivers = [],
  world = false,
}: {
  kicker: string;
  title: string;
  hindi?: string;
  line: string;
  rivers?: string[];
  world?: boolean;
}) {
  const long = title.length > 26;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: C.paper, fontFamily: "Kalam", color: C.ink }}>
        {/* ruled lines and the red margin */}
        {Array.from({ length: 19 }, (_, i) => (
          <div key={i} style={{ position: "absolute", left: 0, right: 0, top: 30 + i * 32, height: 1.5, background: C.rule, display: "flex" }} />
        ))}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 70, width: 2.5, background: C.margin, display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "44px 40px 40px 104px", width: world ? 640 : 700 }}>
          <Logo />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignSelf: "flex-start", fontFamily: "Marker", fontSize: 24, color: C.red, border: `3px solid ${C.red}`, borderRadius: 8, padding: "0 12px", transform: "rotate(-2deg)" }}>
              {kicker}
            </div>
            <div style={{ display: "flex", fontWeight: 700, fontSize: long ? 64 : 96, lineHeight: 1.05, color: C.blue, marginTop: 14 }}>{title}</div>
            {hindi && <div style={{ display: "flex", fontSize: 44, color: C.red, marginTop: 2 }}>{hindi}</div>}
            <div style={{ display: "flex", fontSize: 30, lineHeight: 1.35, marginTop: 14, color: C.ink }}>{line.length > 150 ? line.slice(0, 147) + "…" : line}</div>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: C.green }}>Every fact with its reason · free · no login</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, paddingRight: 30 }}>
          <MapInset rivers={rivers} world={world} />
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await fonts() },
  );
}
