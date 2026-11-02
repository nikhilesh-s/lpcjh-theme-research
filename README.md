# LPCJH Theme Research

Two editorial directions for the next issue of the Las Positas College Journal of Honors: **In Between** and **Fragments**.
Next.js 16 + TypeScript + Tailwind 4. All artwork is SVG and HTML, authored once and used both on the site and for the print exports.

## Structure
- `src/art/` - the six Letter pages (816 x 1056 css px), spec sheets, rationale and the 10-slide deck. Each is a React component.
- `src/app/export/[slug]` - bare, print-sized routes used by the export script.
- `scripts/export.mjs` - renders PNG (2550 x 3300, 300 dpi) and vector PDF with Playwright into `exports/` and `public/downloads/`.
- `docs/` - palette (palette-0 mapping), visual audit of the Spring 2026 issue and design references.

## Run
```bash
npm install
npm run dev                # http://localhost:3000
npm run build && npx next start -p 3100
BASE=http://localhost:3100 node scripts/export.mjs   # regenerate downloads
```
`scripts/export.mjs` expects a Playwright Chromium; edit `exe` at the top if yours lives elsewhere.

Placeholder article text on the research pages is invented for layout and labelled as such.
