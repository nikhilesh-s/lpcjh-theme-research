import type { ReactNode } from "react";

export const W = 816; // 8.5in at 96 css px
export const H = 1056; // 11in

export type Region = { id: string; points: string; fill: string; ink: string };

/** Flat-fill every region of a partition. */
export function RegionFills({ regions }: { regions: Region[] }) {
  return (
    <>
      {regions.map((r) => (
        <polygon key={r.id} points={r.points} fill={r.fill} />
      ))}
    </>
  );
}

/**
 * Render `children(ink)` once per region, clipped to that region, so type and
 * lines flip colour exactly where the colour field underneath changes.
 */
export function Masked({
  uid,
  regions,
  children,
}: {
  uid: string;
  regions: Region[];
  children: (ink: string) => ReactNode;
}) {
  return (
    <>
      <defs>
        {regions.map((r) => (
          <clipPath key={r.id} id={`${uid}-${r.id}`}>
            <polygon points={r.points} />
          </clipPath>
        ))}
      </defs>
      {regions.map((r) => (
        <g key={r.id} clipPath={`url(#${uid}-${r.id})`}>
          {children(r.ink)}
        </g>
      ))}
    </>
  );
}

export const rect = (x: number, y: number, w: number, h: number) =>
  `${x},${y} ${x + w},${y} ${x + w},${y + h} ${x},${y + h}`;
