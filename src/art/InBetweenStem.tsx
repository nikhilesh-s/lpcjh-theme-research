import { W, H } from "./regions";

const C = { indigo: "#28255F", iris: "#5751C7", lavender: "#8E9DFD", coral: "#ED7962", ivory: "#F2EDE8" };

const R = 150;
const CY = 400;
const cx = [183, 333, 483, 633];
const letters = ["S", "T", "E", "M"];
const names = ["Science", "Technology", "Engineering", "Mathematics"];
const fills = [C.iris, C.lavender, C.iris, C.lavender];
// lens i sits between circle i and i+1
const lensFill = [C.ivory, C.coral, C.ivory];
const lensInk = [C.indigo, C.indigo, C.indigo];

export function InBetweenStem() {
  const Letters = ({ ink }: { ink: string[] | string }) => (
    <g fontFamily="var(--f-display)" fontWeight={700} fontSize={200} textAnchor="middle">
      {letters.map((l, i) => (
        <text key={l} x={cx[i]} y={CY + 70} fill={typeof ink === "string" ? ink : ink[i]}>{l}</text>
      ))}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="In Between STEM section divider: four overlapping circles carry the letters S, T, E and M">
      <defs>
        {cx.map((x, i) => (
          <clipPath key={i} id={`stem-c${i}`}><circle cx={x} cy={CY} r={R} /></clipPath>
        ))}
        <linearGradient id="stem-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={C.iris} />
          <stop offset="1" stopColor={C.lavender} />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={C.indigo} />

      {/* far arcs echo the cover's nexus */}
      <g fill="none" stroke={C.lavender} strokeWidth={1}>
        {[420, 520, 620, 720, 820].map((r, i) => (
          <circle key={r} cx={W} cy={H} r={r} opacity={0.34 - i * 0.05} />
        ))}
      </g>

      {/* ruler along the centre line */}
      <g stroke={C.lavender} strokeWidth={1} opacity={0.5}>
        <line x1={0} y1={CY} x2={W} y2={CY} />
        {Array.from({ length: 28 }, (_, k) => (
          <line key={k} x1={k * 30} y1={CY - (k % 5 === 0 ? 14 : 6)} x2={k * 30} y2={CY + (k % 5 === 0 ? 14 : 6)} />
        ))}
      </g>

      {/* circles */}
      {cx.map((x, i) => (
        <circle key={i} cx={x} cy={CY} r={R} fill={fills[i]} />
      ))}
      <Letters ink={[C.ivory, C.indigo, C.ivory, C.indigo]} />

      {/* intersections: opaque lens, then the letters again in indigo clipped to it */}
      {lensFill.map((f, i) => (
        <g key={i} clipPath={`url(#stem-c${i})`}>
          <g clipPath={`url(#stem-c${i + 1})`}>
            <rect x={0} y={0} width={W} height={H} fill={f} />
            <Letters ink={lensInk[i]} />
          </g>
        </g>
      ))}
      {/* circle outlines so edges stay legible where tones meet */}
      <g fill="none" stroke={C.ivory} strokeWidth={1} opacity={0.55}>
        {cx.map((x, i) => (
          <circle key={i} cx={x} cy={CY} r={R} />
        ))}
      </g>

      {/* labels under each circle */}
      <g fontFamily="var(--f-text)" fontStyle="italic" fontSize={16} fill={C.ivory}>
        {cx.map((x, i) => (
          <g key={i}>
            <line x1={x} y1={CY + R + 8} x2={x} y2={CY + R + 52} stroke={C.lavender} strokeWidth={1} />
            <text x={x + 8} y={CY + R + 50}>{names[i]}</text>
          </g>
        ))}
      </g>

      {/* the line */}
      <line x1={48} y1={792} x2={W - 48} y2={792} stroke={C.coral} strokeWidth={2} />
      <text x={48} y={850} fontFamily="var(--f-text)" fontStyle="italic" fontWeight={300} fontSize={40} fill={C.ivory}>
        At the intersection of
      </text>
      <text x={48} y={898} fontFamily="var(--f-text)" fontStyle="italic" fontWeight={300} fontSize={40} fill={C.ivory}>
        inquiry and discovery.
      </text>

    </svg>
  );
}
