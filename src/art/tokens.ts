export type Swatch = { name: string; hex: string; role: string; share: number; on: string; step: string };

export const IB: Swatch[] = [
  { name: "Midnight Indigo", hex: "#28255F", role: "Structural foundation", share: 35, on: "#F2EDE8", step: "indigo 850" },
  { name: "Electric Iris", hex: "#5751C7", role: "Primary expressive colour", share: 25, on: "#F2EDE8", step: "indigo 600" },
  { name: "Soft Lavender", hex: "#8E9DFD", role: "Transition and visual bridge", share: 15, on: "#28255F", step: "indigo 300" },
  { name: "Living Coral", hex: "#ED7962", role: "Warm focal counterpoint", share: 10, on: "#28255F", step: "vermillion 300" },
  { name: "Warm Ivory", hex: "#F2EDE8", role: "Neutral editorial space", share: 15, on: "#28255F", step: "purple 25" },
];

export const FR: Swatch[] = [
  { name: "Editorial Ink", hex: "#171716", role: "Structural typography", share: 30, on: "#F7EDDD", step: "base 975" },
  { name: "Citrine Yellow", hex: "#DCBF4A", role: "Discovery and attention", share: 17, on: "#171716", step: "yellow 300" },
  { name: "Vermilion", hex: "#E15C49", role: "Energy and interruption", share: 10, on: "#171716", step: "vermillion 400" },
  { name: "Cobalt Blue", hex: "#305EB1", role: "Cool counterweight", share: 13, on: "#F7EDDD", step: "blue 600" },
  { name: "Warm Paper", hex: "#F7EDDD", role: "Neutral editorial foundation", share: 30, on: "#171716", step: "orange 25" },
];

// Every hex above is a palette-0 step (https://palette.elligene.com); `step` names it.
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
    ["Ivory on Indigo", "#F2EDE8", "#28255F", "All text sizes"],
    ["Ivory on Iris", "#F2EDE8", "#5751C7", "All text sizes"],
    ["Indigo on Lavender", "#28255F", "#8E9DFD", "All text sizes"],
    ["Indigo on Coral", "#28255F", "#ED7962", "All text sizes"],
    ["Ivory on Lavender", "#F2EDE8", "#8E9DFD", "Avoid: decorative only"],
  ],
  fragments: [
    ["Paper on Ink", "#F7EDDD", "#171716", "All text sizes"],
    ["Ink on Citrine", "#171716", "#DCBF4A", "All text sizes"],
    ["Ink on Vermilion", "#171716", "#E15C49", "All text sizes"],
    ["Paper on Cobalt", "#F7EDDD", "#305EB1", "All text sizes"],
    ["Paper on Vermilion", "#F7EDDD", "#E15C49", "Large display type only"],
  ],
} as const;

export const scale = {
  "in-between": [
    ["Cover title: IN", "255 pt", "Sabon Bold"],
    ["Cover title: BETWEEN", "108 pt", "Sabon Bold"],
    ["Divider title: STEM", "150 pt", "Sabon Bold"],
    ["Article title", "24.75 pt", "Sabon Bold"],
    ["Article subheading", "12.75 pt", "Sabon Bold"],
    ["Body", "10.5 pt / 15.75 pt", "Sabon Regular"],
    ["Figure caption", "8.6 pt", "Sabon Italic"],
    ["Metadata, folio", "8.25 pt", "Sabon Italic"],
  ],
  fragments: [
    ["Cover title: FRAG", "173 pt", "Sabon Bold"],
    ["Cover title: MENTS", "150 pt", "Sabon Bold"],
    ["Divider title: ARTS", "195 pt", "Sabon Bold"],
    ["Article title", "24.75 pt", "Sabon Bold"],
    ["Article subheading", "12.75 pt", "Sabon Bold"],
    ["Body", "10.5 pt / 15.75 pt", "Sabon Regular"],
    ["Figure caption", "8.6 pt", "Sabon Italic"],
    ["Metadata, folio", "8.25 pt", "Sabon Italic"],
  ],
} as const;
