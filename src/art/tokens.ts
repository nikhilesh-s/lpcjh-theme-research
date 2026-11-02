export type Swatch = { name: string; hex: string; role: string; share: number; on: string };

export const IB: Swatch[] = [
  { name: "Midnight Indigo", hex: "#25235C", role: "Structural foundation", share: 35, on: "#F3EDE3" },
  { name: "Electric Iris", hex: "#4948ED", role: "Primary expressive colour", share: 25, on: "#F3EDE3" },
  { name: "Soft Lavender", hex: "#A29CF4", role: "Transition and visual bridge", share: 15, on: "#25235C" },
  { name: "Living Coral", hex: "#FF755B", role: "Warm focal counterpoint", share: 10, on: "#25235C" },
  { name: "Warm Ivory", hex: "#F3EDE3", role: "Neutral editorial space", share: 15, on: "#25235C" },
];

export const FR: Swatch[] = [
  { name: "Editorial Ink", hex: "#191919", role: "Structural typography", share: 30, on: "#F5F0E5" },
  { name: "Citrine Yellow", hex: "#F2D84A", role: "Discovery and attention", share: 17, on: "#191919" },
  { name: "Vermilion", hex: "#E44F3F", role: "Energy and interruption", share: 10, on: "#191919" },
  { name: "Cobalt Blue", hex: "#3873D9", role: "Cool counterweight", share: 13, on: "#FFFFFF" },
  { name: "Warm Paper", hex: "#F5F0E5", role: "Neutral editorial foundation", share: 30, on: "#191919" },
];

export const rgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)).join(", ");

// WCAG 2.x contrast, computed from the hex values above.
export const contrast = (a: string, b: string) => {
  const L = (h: string) => {
    const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };
  const [x, y] = [L(a), L(b)];
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};

export const pairs = {
  "in-between": [
    ["Ivory on Indigo", "#F3EDE3", "#25235C", "All text sizes"],
    ["Ivory on Iris", "#F3EDE3", "#4948ED", "All text sizes"],
    ["Indigo on Lavender", "#25235C", "#A29CF4", "All text sizes"],
    ["Indigo on Coral", "#25235C", "#FF755B", "All text sizes"],
    ["Ivory on Lavender", "#F3EDE3", "#A29CF4", "Avoid: decorative only"],
  ],
  fragments: [
    ["Paper on Ink", "#F5F0E5", "#191919", "All text sizes"],
    ["Ink on Citrine", "#191919", "#F2D84A", "All text sizes"],
    ["Ink on Vermilion", "#191919", "#E44F3F", "All text sizes"],
    ["White on Cobalt", "#FFFFFF", "#3873D9", "All text sizes"],
    ["Paper on Cobalt", "#F5F0E5", "#3873D9", "Large display type only"],
  ],
} as const;

export const scale = {
  "in-between": [
    ["Cover title: IN", "279 pt", "Space Grotesk Bold"],
    ["Cover title: BETWEEN", "125 pt", "Space Grotesk Bold"],
    ["Divider title: STEM", "150 pt", "Space Grotesk Bold"],
    ["Article title", "24.75 pt", "Space Grotesk SemiBold"],
    ["Article subheading", "12.75 pt", "Space Grotesk SemiBold"],
    ["Body", "10.5 pt / 15.75 pt", "Source Serif 4"],
    ["Figure caption", "8.6 pt", "IBM Plex Mono"],
    ["Metadata, folio", "8.25 pt", "IBM Plex Mono"],
  ],
  fragments: [
    ["Cover title: FRAG", "193 pt", "Space Grotesk Bold"],
    ["Cover title: MENTS", "150 pt", "Space Grotesk Bold"],
    ["Divider title: ARTS", "195 pt", "Space Grotesk Bold"],
    ["Article title", "24.75 pt", "Space Grotesk SemiBold"],
    ["Article subheading", "12.75 pt", "Space Grotesk SemiBold"],
    ["Body", "10.5 pt / 15.75 pt", "Source Serif 4"],
    ["Figure caption", "8.6 pt", "IBM Plex Mono"],
    ["Metadata, folio", "8.25 pt", "IBM Plex Mono"],
  ],
} as const;
