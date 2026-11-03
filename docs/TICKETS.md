# Tickets (for another agent or Nik)

Open items from the Nov 3 revision pass (Elli's notes). Each is self-contained.

| # | Ticket | Why it is open | Suggested owner |
|---|---|---|---|
| 1 | Confirm the school's Sabon licence covers web embedding and PDF embedding | The woff2 files are served by the live site and embedded in PDFs. fsType = 8 (editable embedding), which allows it, but the licence terms were not read. The files are gitignored (`src/fonts/`) so the public repo does not redistribute them. | Nik / school |
| 2 | Confirm which text counts as "bad UX copy" | Removed: "Hover or focus..." and section intro lines on both theme pages, kickers, theme tags, section numerals, "about N%" lines. Kept: hero tagline, contrast notes, home intro (shortened). | Elli |
| 3 | Research page: section label (STEM / Arts & Humanities) now sits in the running head, the eyebrow above the title is gone | The Fragments numbered section tag accent was cut with it. Elli may want a category label back in another form. | Elli |
| 4 | Fragments ARTS divider: bottom ink field is mostly empty after footer labels were removed | Design call: fill with the masthead, shrink the field, or leave. | design agent |
| 5 | Cover title sizes changed to fit Sabon: IN 255 pt, BETWEEN 108 pt, FRAG 173 pt (the earlier audit already flagged them as outside the brief range; re-check against the brief) | Sabon is narrower than Space Grotesk at the same size. | design agent |
| 6 | Sabon has Regular, Bold, Italic, Bold Italic only | Weights 300, 500 and 600 in the CSS now render as 400 or 700. Check the light italic lines and heading weights by eye. | design agent |
| 7 | Drive "Reference audit" PDF still names Source Serif 4 | `docs/VISUAL-AUDIT.md` is updated; the PDF in Drive was not regenerated. | agent |
| 8 | Art and print CSS still in px (see `docs/REM-NOTES.md`) | Needs the export script to pin root font size first. | agent |
| 9 | IBM Plex Mono is still loaded for hex values and the type table on the site | Elli's note was about mono inside the artwork. Drop it if he wants no mono anywhere. | Elli |
| 10 | Canvas submission window closed Nov 2, 9:00 AM PT | Nik says he is working with Elli on feedback. Re-export and Drive refresh happen after the next round of notes. | Nik |
| 11 | Make the accents work better | Nik's note, Nov 3. Accents must be automation-friendly: flat placed elements, hard-coded symbols and numbers, no live inline SVG/CSS. Rework the Venn heading marker and the Fragments markers so they can be built as placed elements in Affinity. Case studies go on `/explanations`. | design agent, human in the loop |
| 12 | Remove "Claude-isms" from site copy, deck, rationale and spec text | Nik's note, Nov 3. Look for stock phrasing, "not X, it's Y" lines, em dashes, tidy three-part lists. Run the humanizer skill, then read it by hand. | agent |
| 13 | Affinity: read a master template through the Affinity MCP and build a CSS-friendly mock-up version | Nik's plan, Nov 3. New designs start from that version. Justified text does not need to match. | agent |
| 14 | Nik writes the why, how and case-study text on `/explanations` himself | Placeholders marked "(write here)". | Nik |
