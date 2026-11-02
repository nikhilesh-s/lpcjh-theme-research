import { Masked, RegionFills, W, H, type Region } from "./regions";

const C = {
  indigo: "#28255F",
  iris: "#5751C7",
  lavender: "#8E9DFD",
  coral: "#ED7962",
  ivory: "#F2EDE8",
};

// Two planes cross at the nexus. Above it they overlap (convergence);
// below it they part and leave an ivory gap (separation).
const YB = 900; // planes end; masthead band below
const A_TOP = 660; // plane A right edge, top
const A_BOT = 300; // ... at YB
const B_TOP = 360; // plane B left edge, top
const B_BOT = 600; // ... at YB
const NY = (A_TOP - B_TOP) / ((A_TOP - A_BOT) / YB + (B_BOT - B_TOP) / YB);
const NX = A_TOP - ((A_TOP - A_BOT) / YB) * NY;

export const ibRegions: Region[] = [
  { id: "a", points: `0,0 ${B_TOP},0 ${NX},${NY} ${A_BOT},${YB} 0,${YB}`, fill: C.indigo, ink: C.ivory },
  { id: "b", points: `${A_TOP},0 ${W},0 ${W},${YB} ${B_BOT},${YB} ${NX},${NY}`, fill: C.iris, ink: C.ivory },
  { id: "lens", points: `${B_TOP},0 ${A_TOP},0 ${NX},${NY}`, fill: "url(#ib-lens)", ink: C.indigo },
  { id: "gap", points: `${NX},${NY} ${B_BOT},${YB} ${A_BOT},${YB}`, fill: C.ivory, ink: C.indigo },
  { id: "band", points: `0,${YB} ${W},${YB} ${W},${H} 0,${H}`, fill: C.ivory, ink: C.indigo },
];

export function InBetweenCover() {
  const radii = [166, 210, 258, 310, 366, 426, 490, 558];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="In Between cover: two colour planes cross, overlap and part around a coral point">
      <defs>
        {/* The one gradient: the overlap lightens as it narrows toward the nexus */}
        <linearGradient id="ib-lens" x1="0" y1="0" x2="0" y2={NY} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={C.lavender} />
          <stop offset="1" stopColor="#ACB9FC" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={C.ivory} />
      <RegionFills regions={ibRegions} />

      {/* construction: concentric arcs + crosshair, colour-flipped by region */}
      <Masked uid="ibc-arcs" regions={ibRegions.filter((r) => r.id !== "band")}>
        {(ink) => (
          <g fill="none" stroke={ink} strokeWidth={1}>
            {radii.map((r, i) => (
              <circle key={r} cx={NX} cy={NY} r={r} opacity={0.42 - i * 0.03} />
            ))}
            <line x1={0} y1={NY} x2={W} y2={NY} opacity={0.5} />
            <line x1={NX} y1={0} x2={NX} y2={YB} opacity={0.5} />
          </g>
        )}
      </Masked>
      {/* hairlines parallel to plane B's edge: the overlap's grain */}
      <Masked uid="ibc-grain" regions={ibRegions.filter((r) => r.id === "lens")}>
        {(ink) => (
          <g stroke={ink} strokeWidth={1} opacity={0.3}>
            {Array.from({ length: 12 }, (_, k) => {
              const dx = 24 * (k + 1);
              return <line key={k} x1={B_TOP + dx} y1={0} x2={NX + dx - 24 * 0} y2={NY} />;
            })}
          </g>
        )}
      </Masked>

      {/* nexus */}
      <circle cx={NX} cy={NY} r={112} fill={C.coral} />
      <circle cx={NX} cy={NY} r={112} fill="none" stroke={C.ivory} strokeWidth={1} opacity={0.0} />
      <circle cx={NX} cy={NY} r={4} fill={C.indigo} />

      {/* title, masked by the plane beneath each letter */}
      <Masked uid="ibc-title" regions={ibRegions}>
        {(ink) => (
          <g fill={ink} fontFamily="var(--f-display)" fontWeight={700}>
            <text x={30} y={372} fontSize={372} letterSpacing={-6}>IN</text>
            <text x={44} y={812} fontSize={166} letterSpacing={-2}>BETWEEN</text>
          </g>
        )}
      </Masked>

      {/* metadata on the planes */}
      <Masked uid="ibc-meta" regions={ibRegions}>
        {(ink) => (
          <g fill={ink} fontFamily="var(--f-meta)" fontSize={11} letterSpacing={1.2}>
            <text x={48} y={52}>LPCJH THEME STUDY A</text>
            <text x={W - 48} y={52} textAnchor="end">01 / 02</text>
            <text x={48} y={YB - 20}>x 00</text>
            <text x={W - 48} y={YB - 20} textAnchor="end">y 00</text>
          </g>
        )}
      </Masked>

      {/* masthead */}
      <g fill={C.indigo}>
        <text x={48} y={978} fontFamily="var(--f-text)" fontWeight={300} fontSize={46} letterSpacing={-0.5}>Las Positas College</text>
        <text x={48} y={1014} fontFamily="var(--f-text)" fontWeight={300} fontSize={22}>Journal of Honors <tspan opacity={0.5}>|</tspan> Next issue</text>
        <text x={W - 48} y={978} textAnchor="end" fontFamily="var(--f-meta)" fontSize={11} letterSpacing={1.2}>IN BETWEEN</text>
        <text x={W - 48} y={996} textAnchor="end" fontFamily="var(--f-meta)" fontSize={11} letterSpacing={1.2} opacity={0.7}>The spaces separating ideas</text>
        <text x={W - 48} y={1012} textAnchor="end" fontFamily="var(--f-meta)" fontSize={11} letterSpacing={1.2} opacity={0.7}>are also where ideas meet.</text>
      </g>
    </svg>
  );
}
