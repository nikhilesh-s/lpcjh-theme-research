# Design references

Real sources only. Nothing here was copied; principles were extracted and applied to a different subject.

| Source | What was used |
|---|---|
| Spring 2026 LPCJH issue (see VISUAL-AUDIT.md) | Page size, masthead, folio and running-header conventions. |
| Harvard GSD website teardown (Nik's own notes, `nikhilesh-site/docs/portfolio-inspo/harvard-gsd.md`) | The grid is the identity: a square module drives both the logo and the layout. Informed Fragments' 60 px grid and hard-edged blocks. Restraint in motion (short transitions, no scroll-jacking). |
| Stanford d.school teardown (`.../stanford-dschool.md`) | Type cutting into a field and pieces that settle into place on load. Informed the masked title treatments and the one-time assembly animation. |
| Swiss / International Typographic Style conventions | Asymmetric layouts on a modular grid, flush-left text. |
| WCAG 2.x contrast formula | All contrast ratios in the specs are computed from the hex values (`src/art/tokens.ts`). |

Font: Sabon (school licence, loaded through next/font/local from src/fonts, not committed). IBM Plex Mono is used for hex values on the site only.
