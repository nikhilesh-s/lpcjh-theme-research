import { Nav } from "@/components/Nav";
import { PagePreview } from "@/components/PagePreview";
import { InBetweenCover } from "@/art/InBetweenCover";
import { InBetweenStem } from "@/art/InBetweenStem";
import { FragmentsCover } from "@/art/FragmentsCover";
import { FragmentsArts } from "@/art/FragmentsArts";
import { ResearchPage } from "@/art/ResearchPage";
import { IB, FR, contrast, pairs } from "@/art/tokens";

export const metadata = { title: "Design Systems | LPCJH Theme Studies" };

function Bar({ sw }: { sw: typeof IB }) {
  return <div className="mini-pal" aria-hidden="true">{sw.map((s) => <span key={s.hex} style={{ background: s.hex, flexGrow: s.share }} />)}</div>;
}
function Contrast({ k }: { k: "in-between" | "fragments" }) {
  return (
    <ul className="cmp-pairs">
      {pairs[k].map(([n, a, b]) => (
        <li key={n}><span className="cmp-chip" style={{ background: b, color: a }}>Aa</span><span>{n}</span><span>{contrast(a, b).toFixed(1)}:1</span></li>
      ))}
    </ul>
  );
}

export default function Systems() {
  return (
    <div className="t t-sys">
      <Nav current="/systems" />
      <main id="main">
        <header className="sys-head">
          <p className="kicker">Design systems</p>
          <h1>Same journal, two systems</h1>
          <p className="lede">Both share a page size, a type system and a masthead. Everything else changes: colour logic, geometry, and what the page does at its edges.</p>
        </header>
        <div className="cmp">
          <div className="cmp-cols" aria-hidden="true"><span>In Between</span><span>Fragments</span></div>

          <section className="cmp-row" aria-labelledby="c-narr">
            <h2 id="c-narr">Narrative</h2>
            <div className="cmp-cell cmp-ib"><h3>In Between</h3><p>The boundary between disciplines is where ideas meet. The cover shows overlap and separation at once.</p></div>
            <div className="cmp-cell cmp-fr"><h3>Fragments</h3><p>Research is assembled from partial pieces. The cover is cut into strips and put back a column off.</p></div>
          </section>

          <section className="cmp-row" aria-labelledby="c-col">
            <h2 id="c-col">Colour theory</h2>
            <div className="cmp-cell cmp-ib"><h3>In Between</h3><Bar sw={IB} /><p>Cool analogous violets with one warm coral. Colour changes by degrees: overlaps, one gradient, translucent planes.</p></div>
            <div className="cmp-cell cmp-fr"><h3>Fragments</h3><Bar sw={FR} /><p>Saturated accents separated by hard edges. Colour marks separation and assembly. No gradients.</p></div>
          </section>

          <section className="cmp-row" aria-labelledby="c-type">
            <h2 id="c-type">Typography</h2>
            <div className="cmp-cell cmp-ib"><h3>In Between</h3><p>Space Grotesk cut by planes: ink flips where the colour under a letter changes. IN is 279 pt, BETWEEN 125 pt.</p></div>
            <div className="cmp-cell cmp-fr"><h3>Fragments</h3><p>The same face cut into strips and shifted by whole grid steps. FRAG is 193 pt, MENTS 150 pt. Article text is identical in both.</p></div>
          </section>

          <section className="cmp-row" aria-labelledby="c-cov">
            <h2 id="c-cov">Covers</h2>
            <div className="cmp-cell cmp-ib"><PagePreview title="In Between cover" pdf="/downloads/in-between-cover.pdf" png="/downloads/in-between-cover.png"><InBetweenCover /></PagePreview></div>
            <div className="cmp-cell cmp-fr"><PagePreview title="Fragments cover" pdf="/downloads/fragments-cover.pdf" png="/downloads/fragments-cover.png"><FragmentsCover /></PagePreview></div>
          </section>

          <section className="cmp-row" aria-labelledby="c-div">
            <h2 id="c-div">Section dividers</h2>
            <div className="cmp-cell cmp-ib"><PagePreview title="STEM divider" pdf="/downloads/in-between-stem-divider.pdf" png="/downloads/in-between-stem-divider.png"><InBetweenStem /></PagePreview><p>Four circles share their intersections. The Spring 2026 issue has no divider pages, so this is new either way.</p></div>
            <div className="cmp-cell cmp-fr"><PagePreview title="ARTS divider" pdf="/downloads/fragments-arts-divider.pdf" png="/downloads/fragments-arts-divider.png"><FragmentsArts /></PagePreview><p>Four stepped blocks, each overlapping the last. Other sections can reuse the stair with new letters.</p></div>
          </section>

          <section className="cmp-row" aria-labelledby="c-res">
            <h2 id="c-res">Research-page accents</h2>
            <div className="cmp-cell cmp-ib"><PagePreview title="In Between research page" pdf="/downloads/in-between-research-page.pdf" png="/downloads/in-between-research-page.png"><ResearchPage theme="in-between" /></PagePreview><p>Overlapping-circle markers, dual-tone rule, outlined capsules, margin connector, gradient edge.</p></div>
            <div className="cmp-cell cmp-fr"><PagePreview title="Fragments research page" pdf="/downloads/fragments-research-page.pdf" png="/downloads/fragments-research-page.png"><ResearchPage theme="fragments" /></PagePreview><p>Numbered tags, square markers, modular figure labels, crop marks, offset folio.</p></div>
          </section>

          <section className="cmp-row" aria-labelledby="c-flex">
            <h2 id="c-flex">Editorial flexibility</h2>
            <div className="cmp-cell cmp-ib"><h3>In Between</h3><p>Other dividers reuse the circle-and-intersection method with new letter sets. The tone is calm, which suits long reading.</p></div>
            <div className="cmp-cell cmp-fr"><h3>Fragments</h3><p>Any word can break into strips or blocks. The energy is higher; a long title needs care to stay legible.</p></div>
          </section>

          <section className="cmp-row" aria-labelledby="c-acc">
            <h2 id="c-acc">Visual accessibility</h2>
            <div className="cmp-cell cmp-ib"><Contrast k="in-between" /><p>Body text is 13.8:1 on ivory.</p></div>
            <div className="cmp-cell cmp-fr"><Contrast k="fragments" /><p>Body text is 15.5:1 on paper.</p></div>
          </section>

          <section className="cmp-row" aria-labelledby="c-prod">
            <h2 id="c-prod">Production feasibility</h2>
            <div className="cmp-cell cmp-ib"><h3>In Between</h3><p>All vector, with one gradient and a few transparencies. Both export cleanly to PDF.</p></div>
            <div className="cmp-cell cmp-fr"><h3>Fragments</h3><p>All vector with flat fills only. The grid is straightforward to rebuild in InDesign or Affinity.</p></div>
          </section>
        </div>
      </main>
    </div>
  );
}
