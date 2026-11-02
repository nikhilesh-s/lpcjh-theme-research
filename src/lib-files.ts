import { statSync } from "node:fs";
import { join } from "node:path";

export type FileRow = { label: string; file: string; kind: "PDF" | "PNG" };
const size = (f: string) => {
  try { const b = statSync(join(process.cwd(), "public/downloads", f)).size; return b > 1e6 ? `${(b / 1e6).toFixed(1)} MB` : `${Math.round(b / 1e3)} KB`; } catch { return "missing"; }
};
export const withSize = (r: FileRow) => ({ ...r, href: `/downloads/${r.file}`, size: size(r.file) });

export const groups = [
  { id: "presentation", title: "Presentation", rows: [
    { label: "Final presentation, 10 slides", file: "final-presentation.pdf", kind: "PDF" },
    { label: "Design rationale, 2 pages", file: "design-rationale.pdf", kind: "PDF" },
  ] },
  { id: "in-between", title: "In Between", rows: [
    { label: "Cover", file: "in-between-cover.pdf", kind: "PDF" },
    { label: "Cover", file: "in-between-cover.png", kind: "PNG" },
    { label: "STEM divider", file: "in-between-stem-divider.pdf", kind: "PDF" },
    { label: "STEM divider", file: "in-between-stem-divider.png", kind: "PNG" },
    { label: "Research page", file: "in-between-research-page.pdf", kind: "PDF" },
    { label: "Research page", file: "in-between-research-page.png", kind: "PNG" },
    { label: "Palette and typography", file: "in-between-palette-typography.pdf", kind: "PDF" },
  ] },
  { id: "fragments", title: "Fragments", rows: [
    { label: "Cover", file: "fragments-cover.pdf", kind: "PDF" },
    { label: "Cover", file: "fragments-cover.png", kind: "PNG" },
    { label: "ARTS divider", file: "fragments-arts-divider.pdf", kind: "PDF" },
    { label: "ARTS divider", file: "fragments-arts-divider.png", kind: "PNG" },
    { label: "Research page", file: "fragments-research-page.pdf", kind: "PDF" },
    { label: "Research page", file: "fragments-research-page.png", kind: "PNG" },
    { label: "Palette and typography", file: "fragments-palette-typography.pdf", kind: "PDF" },
  ] },
] as const;
