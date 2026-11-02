import { Construction, F, gx, gy, U } from "./fr";
import { W, H } from "./regions";

// Four 4x4-cell blocks step down the grid, each overlapping the last by one cell.
const cells = [
  { l: "A", c: 0, r: 2, fill: F.ink, ink: F.paper, n: "01", dx: -22 },
  { l: "R", c: 3, r: 4, fill: F.citrine, ink: F.ink, n: "02", dx: -14 },
  { l: "T", c: 6, r: 6, fill: F.cobalt, ink: F.paper, n: "03", dx: 18 },
  { l: "S", c: 9, r: 8, fill: F.vermilion, ink: F.ink, n: "04", dx: 18 },
];

export function FragmentsArts() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fragments ARTS section divider: four colour blocks carrying the letters A, R, T and S step diagonally down a grid">
      <rect width={W} height={H} fill={F.paper} />
      <Construction w={W} h={H} />

      {/* top-right: a circle split in two and displaced */}
      <g>
        <path d={`M${gx(9)} ${gy(0) + 18} a${U * 1.5} ${U * 1.5} 0 0 0 0 ${U * 3}Z`} fill={F.cobalt} />
        <path d={`M${gx(9)} ${gy(0) + 48} a${U * 1.5} ${U * 1.5} 0 0 1 0 ${U * 3}Z`} fill={F.citrine} />
        <rect x={gx(9) + U * 1.5 + 24} y={gy(0)} width={U} height={U} fill="none" stroke={F.ink} strokeWidth={2} />
      </g>

      {cells.map((c) => {
        const x = gx(c.c), y = gy(c.r), w = 4 * U, h = 4 * U;
        return (
          <g key={c.l}>
            <rect x={x} y={y} width={w} height={h} fill={c.fill} />
            <text x={x + w / 2 + c.dx} y={y + h / 2 + 91} textAnchor="middle" fontFamily="var(--f-display)" fontWeight={700} fontSize={260} fill={c.ink}>{c.l}</text>
            <text x={x + 10} y={y + 20} fontFamily="var(--f-meta)" fontSize={11} letterSpacing={1.2} fill={c.ink}>{c.n}</text>
          </g>
        );
      })}

      {/* lower-left assembly */}
      <g>
        <path d={`M${gx(0)} ${gy(10)} h${2 * U} a${2 * U} ${2 * U} 0 0 1 -${2 * U} ${2 * U}Z`} fill={F.vermilion} />
        <rect x={gx(2)} y={gy(10)} width={2 * U} height={2 * U} fill={F.citrine} />
        <rect x={gx(4)} y={gy(10)} width={2 * U} height={2 * U} fill="none" stroke={F.ink} strokeWidth={2} />
        <rect x={gx(4)} y={gy(10) + U} width={U} height={U} fill={F.cobalt} />
      </g>

      {/* ink field, section name, running label */}
      <rect x={0} y={gy(12)} width={W} height={H - gy(12)} fill={F.ink} />
      <g fill={F.paper}>
        <text x={gx(0)} y={gy(13) + 20} fontFamily="var(--f-display)" fontWeight={600} fontSize={44} letterSpacing={-0.8}>& Humanities</text>
        <text x={gx(0)} y={gy(13) + 56} fontFamily="var(--f-text)" fontStyle="italic" fontWeight={300} fontSize={22}>Pieces made, then put together.</text>
        <text x={gx(0)} y={gy(15) + 6} fontFamily="var(--f-meta)" fontSize={11} letterSpacing={1.2}>Las Positas College Journal of Honors</text>
        <text x={W - 48} y={gy(15) + 6} textAnchor="end" fontFamily="var(--f-meta)" fontSize={11} letterSpacing={1.2}>Fragments</text>
      </g>
      <rect x={gx(0)} y={gy(12)} width={U} height={6} fill={F.citrine} />
      <g fontFamily="var(--f-meta)" fontSize={11} letterSpacing={1.2} fill={F.ink}>
        <text x={gx(0)} y={gy(0) + 6}>SECTION DIVIDER</text>
        <text x={gx(0)} y={gy(0) + 24}>03 / ARTS</text>
      </g>
    </svg>
  );
}
