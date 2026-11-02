import { BlockLayers, Construction, F, Strips, gx, gy, U, type Block } from "./fr";
import { W, H } from "./regions";

const FRAG_STRIPS = [
  { y0: gy(3), y1: gy(5), dx: 0 },
  { y0: gy(5), y1: gy(6), dx: U },
];
const MENTS_STRIPS = [
  { y0: gy(7), y1: gy(8) + 30, dx: 0 },
  { y0: gy(8) + 30, y1: gy(9) + 30, dx: -30 },
];

const blocks: Block[] = [
  { id: "cobalt", x: gx(0), y: gy(2), w: 6 * U, h: 4 * U, fill: F.cobalt, ink: F.paper },
  { id: "citrine", x: gx(8), y: gy(3), w: 4 * U + 48, h: 2 * U, fill: F.citrine, ink: F.ink },
  { id: "vermilion", x: gx(0), y: gy(7) - 30, w: 2 * U, h: 2 * U + 30, fill: F.vermilion, ink: F.ink },
  { id: "ink", x: gx(4), y: gy(8) + 30, w: 8 * U + 48, h: 2 * U, fill: F.ink, ink: F.paper },
];

export function FragmentsCover() {
  const Title = ({ ink }: { ink: string }) => (
    <g fill={ink} fontFamily="var(--f-display)" fontWeight={700}>
      <Strips uid={`frc-f-${ink.slice(1)}`} strips={FRAG_STRIPS}>
        <text x={gx(0) - 14} y={gy(6)} fontSize={257} letterSpacing={30}>FRAG</text>
      </Strips>
      <Strips uid={`frc-m-${ink.slice(1)}`} strips={MENTS_STRIPS}>
        <text x={gx(0) + 6} y={gy(9) + 30} fontSize={200} letterSpacing={0}>MENTS</text>
      </Strips>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fragments cover: the word FRAGMENTS cut into strips and shifted across colour blocks on a 12-column grid">
      <rect width={W} height={H} fill={F.paper} />
      <Construction w={W} h={H} />

      {/* ink base: bottom field */}
      <rect x={0} y={gy(12)} width={W} height={H - gy(12)} fill={F.ink} />

      <BlockLayers uid="frc" blocks={blocks} art={(ink) => <Title ink={ink} />} />

      {/* numbered fragments */}
      <g fontFamily="var(--f-meta)" fontSize={11} letterSpacing={1.2}>
        <text x={gx(0) + 8} y={gy(2) + 20} fill={F.paper}>01</text>
        <text x={gx(8) + 8} y={gy(3) + 20} fill={F.ink}>02</text>
        <text x={gx(0) + 8} y={gy(7) - 10} fill={F.ink}>03</text>
        <text x={gx(4) + 8} y={gy(8) + 50} fill={F.paper}>04</text>
        <text x={gx(0)} y={gy(0) + 6} fill={F.ink}>LPCJH THEME STUDY B</text>
        <text x={W - GX_R} y={gy(0) + 6} fill={F.ink} textAnchor="end">02 / 02</text>
        <text x={gx(0)} y={gy(11) + 20} fill={F.ink}>Knowledge is assembled from pieces</text>
        <text x={gx(0)} y={gy(11) + 36} fill={F.ink}>that rarely arrive together.</text>
      </g>

      {/* assembled panel: cells on the 60px grid, 120px each (right column 168 to bleed) */}
      <g>
        <rect x={gx(6)} y={gy(12)} width={2 * U} height={2 * U} fill={F.citrine} />
        <path d={`M${gx(6)} ${gy(14)} A${U} ${U} 0 0 1 ${gx(8)} ${gy(14)}Z`} fill={F.ink} />
        <rect x={gx(8)} y={gy(12)} width={2 * U} height={2 * U} fill={F.vermilion} />
        <path d={`M${gx(8)} ${gy(14)} V${gy(12)} A${2 * U} ${2 * U} 0 0 1 ${gx(10)} ${gy(14)}Z`} fill={F.paper} />
        <rect x={gx(10)} y={gy(12)} width={2 * U + 48} height={2 * U} fill={F.cobalt} />
        <circle cx={gx(11) + 24} cy={gy(13)} r={U - 14} fill="none" stroke={F.paper} strokeWidth={2} />
        <rect x={gx(6)} y={gy(14)} width={2 * U} height={2 * U} fill={F.paper} />
        <rect x={gx(6)} y={gy(14)} width={U} height={8} fill={F.vermilion} />
        <rect x={gx(8)} y={gy(14)} width={2 * U} height={2 * U} fill={F.paper} />
        <path d={`M${gx(9)} ${gy(14) + 14} a46 46 0 0 0 0 92Z`} fill={F.cobalt} />
        <path d={`M${gx(9)} ${gy(14) + 6} a46 46 0 0 1 0 92Z`} fill={F.vermilion} />
        <rect x={gx(10)} y={gy(14)} width={2 * U + 48} height={2 * U} fill={F.citrine} />
        <rect x={gx(11) + 48} y={gy(15)} width={U} height={U} fill={F.ink} />
      </g>

      {/* masthead on the ink field */}
      <g fill={F.paper}>
        <text x={gx(0)} y={gy(13) + 8} fontFamily="var(--f-text)" fontWeight={300} fontSize={40} letterSpacing={-0.4}>Las Positas College</text>
        <text x={gx(0)} y={gy(13) + 40} fontFamily="var(--f-text)" fontWeight={300} fontSize={20}>Journal of Honors <tspan opacity={0.5}>|</tspan> Next issue</text>
      </g>
      <rect x={gx(0)} y={gy(14) + 30} width={U} height={6} fill={F.citrine} />
      <text x={gx(0)} y={gy(15) + 6} fontFamily="var(--f-meta)" fontSize={11} letterSpacing={1.2} fill={F.paper}>FRAGMENTS</text>
    </svg>
  );
}
const GX_R = 48;
