import type { ReactNode } from "react";

export const F = { ink: "#191919", citrine: "#F2D84A", vermilion: "#E44F3F", cobalt: "#3873D9", paper: "#F5F0E5" };
export const GX = 48; // grid origin and unit: 12 cols x 16 rows of 60px inside a 48px margin
export const U = 60;
export const gx = (c: number) => GX + c * U;
export const gy = (r: number) => GX + r * U;

export type Block = { id: string; x: number; y: number; w: number; h: number; fill: string; ink: string };

/** Paint the base layer, then each block and the same artwork re-inked inside it. */
export function BlockLayers({ uid, blocks, art }: { uid: string; blocks: Block[]; art: (ink: string) => ReactNode }) {
  return (
    <>
      <defs>
        {blocks.map((b) => (
          <clipPath key={b.id} id={`${uid}-${b.id}`}><rect x={b.x} y={b.y} width={b.w} height={b.h} /></clipPath>
        ))}
      </defs>
      {art(F.ink)}
      {blocks.map((b) => (
        <g key={b.id}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={b.fill} />
          <g clipPath={`url(#${uid}-${b.id})`}>{art(b.ink)}</g>
        </g>
      ))}
    </>
  );
}

export type Strip = { y0: number; y1: number; dx: number };

/** Clip `children` to horizontal strips and slide each strip sideways by whole grid steps. */
export function Strips({ uid, strips, children }: { uid: string; strips: Strip[]; children: ReactNode }) {
  return (
    <>
      <defs>
        {strips.map((s, i) => (
          <clipPath key={i} id={`${uid}-s${i}`}><rect x={-200} y={s.y0} width={1216} height={s.y1 - s.y0} /></clipPath>
        ))}
      </defs>
      {strips.map((s, i) => (
        <g key={i} clipPath={`url(#${uid}-s${i})`}>
          <g transform={`translate(${s.dx} 0)`}>{children}</g>
        </g>
      ))}
    </>
  );
}

/** Crop marks, plus-marks and a 60px construction grid. */
export function Construction({ w, h, op = 0.13 }: { w: number; h: number; op?: number }) {
  const xs = Array.from({ length: 13 }, (_, i) => gx(i));
  const ys = Array.from({ length: 17 }, (_, i) => gy(i));
  return (
    <g stroke={F.ink} strokeWidth={1}>
      <g opacity={op}>
        {xs.map((x) => <line key={x} x1={x} y1={0} x2={x} y2={h} />)}
        {ys.map((y) => <line key={y} x1={0} y1={y} x2={w} y2={y} />)}
      </g>
      {[[20, 20, 1, 1], [w - 20, 20, -1, 1], [20, h - 20, 1, -1], [w - 20, h - 20, -1, -1]].map(([x, y, sx, sy], i) => (
        <g key={i} opacity={0.8}><line x1={x} y1={y} x2={x + sx * 12} y2={y} /><line x1={x} y1={y} x2={x} y2={y + sy * 12} /></g>
      ))}
    </g>
  );
}
