import { scale } from "@/art/tokens";

export function TypeShowcase({ theme }: { theme: "in-between" | "fragments" }) {
  return (
    <div className="type-grid">
      <div className="type-specimen">
        <div className="type-aa" aria-hidden="true">Aa</div>
        <p className="type-face">Sabon Bold</p>
        <p className="type-line type-display">Titles, dividers, subheadings</p>
        <p className="type-face">Sabon Regular</p>
        <p className="type-line type-text">Long-form article text is set at 10.5 pt on 15.75 pt leading, near 55 characters to the line in a two-column measure.</p>
        <p className="type-face">Sabon Italic</p>
        <p className="type-line type-meta">Figure 1. Captions, metadata, folio.</p>
      </div>
      <table className="type-table">
        <caption>Scale on the Letter page</caption>
        <thead><tr><th scope="col">Element</th><th scope="col">Size</th><th scope="col">Face</th></tr></thead>
        <tbody>
          {scale[theme].map(([a, b, c]) => (
            <tr key={a}><th scope="row">{a}</th><td>{b}</td><td>{c}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AccentsIB() {
  return (
    <ul className="acc">
      <li><span className="acc-demo"><span className="ib-mark" /><b>Section heading</b></span><span>Heading marker: an outlined and a coral circle that overlap.</span></li>
      <li><span className="acc-demo"><span className="ib-rule" /></span><span>Dual-tone rule: indigo over a fine iris line, under the article title.</span></li>
      <li><span className="acc-demo"><span className="ib-cap">FIG. 1</span></span><span>Figure-number capsule, outlined in iris.</span></li>
      <li><span className="acc-demo"><svg width="120" height="20" viewBox="0 0 120 20" aria-hidden="true"><line x1="6" y1="10" x2="120" y2="10" stroke="#5751C7" strokeOpacity=".6" /><circle cx="6" cy="10" r="4" fill="#F2EDE8" stroke="#5751C7" /></svg></span><span>Connecting line from the margin rail to each section.</span></li>
      <li><span className="acc-demo"><span className="ib-edge" /></span><span>Gradient edge, indigo to lavender, 8 px on the outer margin. The only gradient on the page.</span></li>
    </ul>
  );
}

export function AccentsFR() {
  return (
    <ul className="acc">
      <li><span className="acc-demo"><span className="fr-hm">1</span><b>Introduction</b></span><span>Square heading marker in cobalt, numbered to the section.</span></li>
      <li><span className="acc-demo"><span className="fr-fig"><i>FIG 1</i><s /></span></span><span>Modular figure label with a citrine chip.</span></li>
      <li><span className="acc-demo"><svg width="64" height="40" viewBox="0 0 64 40" aria-hidden="true"><path d="M2 14V2H14M50 2H62V14M62 26V38H50M14 38H2V26" fill="none" stroke="#171716" /></svg></span><span>Crop marks at the corners, outside the live area.</span></li>
      <li><span className="acc-demo"><span className="fr-folio">79</span></span><span>Offset folio: citrine block over a hard ink shadow.</span></li>
      <li><span className="acc-demo"><svg width="64" height="16" viewBox="0 0 64 16" aria-hidden="true"><rect width="16" height="16" fill="#DCBF4A" /><rect x="20" width="16" height="16" fill="#305EB1" /><rect x="40" width="16" height="16" fill="#E15C49" /></svg></span><span>Colour strip in the top margin, a print-style control bar.</span></li>
    </ul>
  );
}
