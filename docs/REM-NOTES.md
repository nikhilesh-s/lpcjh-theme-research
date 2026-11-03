# rem conversion notes

Done (Nov 3): every `font-size` in `src/app/site.css` (including `clamp()` arguments and `font:` shorthands) is in rem, 1rem = 16px.

Not done, on purpose:

| Area | Why px stays | Future step |
|---|---|---|
| `src/art/*.tsx` SVG pages (covers, dividers) | Drawn on an 816 x 1056 grid that maps to US Letter. SVG `fontSize` is in user units, so rem would not scale with the artwork. | Leave. If needed, set the page's `font-size` on the wrapper and use `em` inside the SVG. |
| `src/art/research.css`, `docs.css`, `deck.css` | Fixed 816 x 1056 and 1280 x 720 pages for PDF/PNG export. Rem would change line breaks if a viewer's root size changed. | Convert only after the export script pins `html { font-size: 16px }`. Then `px / 16` is safe. |
| Layout px in `site.css` (padding, gaps, borders, max-width, nav height) | Hairlines and 1px borders should not scale. | Convert padding, gap and max-width to rem in one pass. Keep borders, outlines and box-shadows in px. |
| Type scale in `src/art/tokens.ts` | Specified in pt for print. | Keep pt. It documents print sizes. |

Check after any conversion: run `scripts/export.mjs` and compare page counts (deck 10, rationale 2) and PDF width (8.5in).
