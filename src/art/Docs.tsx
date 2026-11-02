import "./docs.css";
import { IB, FR, contrast, pairs, rgb, scale } from "./tokens";

type Theme = "in-between" | "fragments";

export const rationale = {
  "in-between": {
    name: "In Between",
    line: "The spaces separating ideas are also where ideas meet.",
    body: [
      "In Between treats the boundary between disciplines as the place where work happens. That suits an interdisciplinary journal, because every article in an issue sits on a border: chemistry and climate, language and social media, history and art.",
      "Colour carries the idea. Midnight Indigo and Electric Iris are neighbouring violets, Soft Lavender is the tone where they meet, and Living Coral appears once per page as the single warm point of focus.",
      "On the cover, two planes cross. Above the crossing they overlap in lavender; below it they part and leave an ivory gap, so “in between” reads as both overlap and separation. The letters of IN BETWEEN change colour exactly where the plane beneath them changes, so the title is cut by the boundary it names.",
      "The STEM divider extends the idea. Four circles carry S, T, E and M, and each intersection is filled with a new colour, so the letters are visibly shared between neighbouring fields.",
      "On research pages the accents stay small: overlapping-circle heading markers, a dual-tone rule under the title, outlined figure capsules, a connecting line in the margin and a thin gradient strip on the outer edge. Body text remains dark indigo on ivory at 13.9:1 contrast.",
    ],
  },
  fragments: {
    name: "Fragments",
    line: "Knowledge is assembled from pieces that rarely arrive together.",
    body: [
      "Fragments treats an issue as an assembly job. Few studies are complete on their own; each article contributes a piece, and the journal is where the pieces are put together. That fits a publication of student research from many fields.",
      "Everything sits on one grid: 12 columns, 60 pixels, even the pieces that look displaced. Colour separates rather than blends. Citrine marks discovery, Cobalt gives a cool counterweight, Vermilion interrupts, and Editorial Ink and Warm Paper hold the page.",
      "The cover cuts the title into FRAG and MENTS and slides the lower strips one column sideways. Block colours flip the ink of the letters as they cross, so the word is broken by the same blocks that build the page.",
      "The ARTS divider spells the section across four blocks that step down the grid and overlap by one cell, tagged 01 to 04. It repeats the cover’s parts in a new arrangement.",
      "Research pages carry the same vocabulary in smaller form: numbered section tags, square heading markers, modular figure labels, crop-mark corners, a colour strip and a page number set on an offset block. All accents sit outside the text measure, so body text stays at 10.5 pt in Source Serif 4.",
    ],
  },
} as const;

export const shared = [
  "Both themes keep the Las Positas College / Journal of Honors masthead in a light serif, as on the Spring 2026 cover, and the same folio format (page number, bar, journal name) and running header as the existing research pages.",
  "Both use US Letter pages (8.5 × 11 in), which is the size of the Spring 2026 issue, and one type system: Space Grotesk for display, Source Serif 4 for article text, IBM Plex Mono for captions and metadata. Only colour, geometry and accents change, so an issue could adopt either theme without reworking its reading experience.",
];

export function SpecPage({ theme }: { theme: Theme }) {
  const fr = theme === "fragments";
  const sw = fr ? FR : IB;
  const r = rationale[theme];
  return (
    <div className={`doc ${fr ? "doc-fr" : "doc-ib"}`}>
      <div className="meta" style={{ display: "flex", justifyContent: "space-between" }}>
        <span>LPCJH Theme Research — Palette and Typography</span>
        <span>Theme study {fr ? "B" : "A"}</span>
      </div>
      <h1 style={{ fontSize: 84, marginTop: 22, color: fr ? "#171716" : "#28255F" }}>{r.name}</h1>
      <p style={{ marginTop: 14, fontStyle: "italic", fontSize: 17, lineHeight: "24px", maxWidth: 560 }}>{r.line}</p>

      <div className="sw-row">
        {sw.map((s) => (
          <div key={s.hex} className="sw" style={{ background: s.hex, color: s.on, flex: s.share, border: s.hex.toLowerCase() === (fr ? "#F7EDDD" : "#F2EDE8") ? "1px solid rgba(0,0,0,.25)" : undefined }}>
            <b>{s.name}</b>
            <span>{s.hex}</span>
            <span>RGB {rgb(s.hex)}</span>
            <span>palette-0 {s.step}</span>
            <span>~{s.share}%</span>
          </div>
        ))}
      </div>
      <div className="cols2" style={{ marginTop: 22, gridTemplateColumns: "1.35fr 1fr", columnGap: 28 }}>
        <div>
          <h2>Type scale</h2>
          <table className="scale">
            <thead><tr><th>Element</th><th>Size</th><th>Face</th></tr></thead>
            <tbody>
              {scale[theme].map(([a, b, c]) => (
                <tr key={a}><td>{a}</td><td className="m">{b}</td><td>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Contrast (WCAG 2.x)</h2>
          <table>
            <thead><tr><th>Pair</th><th>Ratio</th><th>Use</th></tr></thead>
            <tbody>
              {pairs[theme].map(([n, a, b, use]) => (
                <tr key={n}><td>{n}</td><td className="m">{contrast(a, b).toFixed(2)}:1</td><td>{use}</td></tr>
              ))}
            </tbody>
          </table>
          <h2 style={{ marginTop: 18 }}>Grid and spacing</h2>
          <p style={{ fontSize: 13, lineHeight: "19px" }}>
            {fr
              ? "12 columns, 60 px module (0.625 in), 48 px outer margin on covers and dividers, 64 px on research pages. Displacement happens in whole or half modules (60 or 30 px)."
              : "12 columns, 64 px margins on research pages, 48 px on covers. Planes meet at one nexus point; every construction line passes through it."}{" "}
            Baseline: 15.75 pt body leading. Page: 8.5 × 11 in.
          </p>
        </div>
      </div>

      <div style={{ position: "absolute", left: 64, right: 64, bottom: 48 }}>
        <h2>Specimen</h2>
        <div style={{ display: "flex", alignItems: "baseline", gap: 28 }}>
          <span style={{ fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 96, lineHeight: 0.9, letterSpacing: "-0.04em" }}>Aa</span>
          <span style={{ fontFamily: "var(--f-text)", fontSize: 14, lineHeight: "21px", maxWidth: 360 }}>
            Source Serif 4 sets long-form article text at 10.5 pt. Space Grotesk carries titles and subheadings. <span style={{ fontFamily: "var(--f-meta)", fontSize: 12 }}>IBM Plex Mono: figures, captions, folio.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function RationalePage({ page }: { page: 1 | 2 }) {
  const items = page === 1 ? (["in-between"] as const) : (["fragments"] as const);
  return (
    <div className="doc doc-ib" style={{ background: "#F2EDE8" }}>
      <div className="meta" style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <span>LPCJH — Theme Research — Design Rationale</span>
        <span>{page} / 2</span>
      </div>
      {items.map((t) => (
        <div key={t}>
          <h1 style={{ fontSize: 60, color: t === "fragments" ? "#171716" : "#28255F" }}>{rationale[t].name}</h1>
          <p style={{ margin: "12px 0 22px", fontStyle: "italic", fontSize: 16 }}>{rationale[t].line}</p>
          {rationale[t].body.map((b, i) => <p key={i} style={{ maxWidth: 640 }}>{b}</p>)}
        </div>
      ))}
      {page === 2 && (
        <div style={{ marginTop: 30, paddingTop: 16, borderTop: "2px solid #171716" }}>
          <h2>Shared institutional decisions</h2>
          {shared.map((b, i) => <p key={i} style={{ maxWidth: 640 }}>{b}</p>)}
        </div>
      )}
      {page === 1 && (
        <div style={{ position: "absolute", left: 64, right: 64, bottom: 56 }} className="meta">
          Sample pages use placeholder article text and a labelled illustrative author. No real author or article is represented.
        </div>
      )}
    </div>
  );
}
