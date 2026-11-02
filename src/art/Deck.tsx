import "./deck.css";
import type { ReactNode } from "react";
import { InBetweenCover } from "./InBetweenCover";
import { InBetweenStem } from "./InBetweenStem";
import { FragmentsCover } from "./FragmentsCover";
import { FragmentsArts } from "./FragmentsArts";
import { ResearchPage } from "./ResearchPage";
import { IB, FR } from "./tokens";

function Pg({ children, h }: { children: ReactNode; h: number }) {
  const s = h / 1056;
  return (
    <div className="pg" style={{ width: 816 * s, height: h }}>
      <div style={{ transform: `scale(${s})` }}>{children}</div>
    </div>
  );
}
const Foot = ({ n, label }: { n: number; label: string }) => (
  <div className="foot m"><span>LPCJH Theme Research · Nikhilesh Suravarjjala</span><span>{label} · {n}</span></div>
);

function Palette({ sw, ink, edge = "rgba(128,128,128,.4)" }: { sw: typeof IB; ink: string; edge?: string }) {
  return (
    <div>
      <div className="dist">
        {sw.map((s) => <div key={s.hex} style={{ flex: s.share, background: s.hex, outline: `1px solid ${edge}`, outlineOffset: -1 }} />)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, marginTop: 8, color: ink }}>
        {sw.map((s) => (
          <div key={s.hex}><b style={{ fontSize: 14, fontWeight: 600 }}>{s.name}</b><div className="m" style={{ opacity: 0.85 }}>{s.hex} · ~{s.share}%</div><div style={{ fontFamily: "var(--f-text)", fontSize: 13, lineHeight: "17px", marginTop: 3 }}>{s.role}</div></div>
        ))}
      </div>
    </div>
  );
}

export function Deck() {
  return (
    <div className="slides">
      {/* 1 */}
      <section className="slide s-neutral">
        <div className="m">Las Positas College Journal of Honors</div>
        <h1 style={{ fontSize: 108, marginTop: 28, maxWidth: 640 }}>Theme<br />Research</h1>
        <p style={{ fontSize: 21, lineHeight: "30px", maxWidth: 520, marginTop: 28 }}>Two editorial directions for the next issue: In Between and Fragments. Each has a cover, a section divider and accents for research pages.</p>
        <div className="m" style={{ position: "absolute", left: 64, bottom: 48, lineHeight: "20px" }}>Nikhilesh Suravarjjala<br />November 2026</div>
        <div style={{ position: "absolute", left: 770, top: 70 }}><Pg h={480}><InBetweenCover /></Pg></div>
        <div style={{ position: "absolute", left: 890, top: 160 }}><Pg h={480}><FragmentsCover /></Pg></div>
      </section>

      {/* 2 */}
      <section className="slide s-neutral">
        <div className="m">Reference audit · Spring 2026, Vol. 1, Issue 1</div>
        <h1 style={{ fontSize: 46, marginTop: 14, maxWidth: 760 }}>What the first issue already establishes</h1>
        <div style={{ display: "flex", gap: 16, marginTop: 26 }}>
          {["cover", "toc", "research"].map((n) => (
            <div key={n}>
              <div className="pg" style={{ width: 230, height: 298 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/ref/spring-2026-${n}.jpg`} alt={`Spring 2026 issue, ${n} page`} style={{ width: "100%", height: "100%", display: "block" }} />
              </div>
              <div className="m" style={{ marginTop: 8 }}>{n === "cover" ? "Cover, p. 1" : n === "toc" ? "Contents, p. 3" : "Research page, p. 5"}</div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", left: 830, top: 112, width: 386 }}>
          <h2>Verified in the PDF</h2>
          <ul>
            <li>112 pages, US Letter (612 × 792 pt), exported from Affinity.</li>
            <li>The cover is one full-page photograph; the masthead reads “Las Positas College / Journal of Honors | Vol. 1, Issue 1” in a light serif.</li>
            <li>Contents groups work as STEM, Social Sciences, Arts &amp; Humanities, Op-eds. There are no divider pages: each group starts on an article.</li>
            <li>Research pages: two columns, about 53 pt side margins, Atkinson Hyperlegible Next at 12 pt, Noto Serif italic titles, folio “5 | Las Positas College Journal of Honors”.</li>
          </ul>
          <h2 style={{ marginTop: 16 }}>Carried forward</h2>
          <p style={{ fontSize: 15, lineHeight: "22px" }}>Masthead wording and light serif, folio and running-header format, Letter size. New: section dividers, a colour system, a display face.</p>
        </div>
        <Foot n={2} label="Audit" />
      </section>

      {/* 3 IB concept */}
      <section className="slide s-ib">
        <div className="m" style={{ opacity: 0.8 }}>Theme A</div>
        <h1 style={{ fontSize: 120, marginTop: 10 }}>In Between</h1>
        <p style={{ fontStyle: "italic", fontSize: 22, marginTop: 14, maxWidth: 700 }}>The spaces separating ideas are also where ideas meet.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 28 }}>
          <div>
            <h2>Why it fits</h2>
            <p>Every article in an issue sits on a border: chemistry and climate, language and social media, history and art. The theme treats the border as the subject.</p>
            <h2 style={{ marginTop: 18 }}>Colour theory</h2>
            <p>Cool analogous violets carry the structure, with one warm coral counterpoint. Lavender sits between indigo and iris as a bridge tone. Colour describes transition: overlaps, gradual steps, translucent planes.</p>
          </div>
          <div style={{ paddingTop: 4 }}>
            <Palette sw={IB} ink="#F2EDE8" edge="rgba(242,237,232,.6)" />
          </div>
        </div>
        <Foot n={3} label="In Between" />
      </section>

      {/* 4 IB cover */}
      <section className="slide s-ib">
        <div className="m" style={{ opacity: 0.8 }}>In Between · Cover</div>
        <div style={{ position: "absolute", left: 64, top: 48 + 28 }}><Pg h={600}><InBetweenCover /></Pg></div>
        <div style={{ position: "absolute", left: 560, top: 76, width: 640 }}>
          <h1 style={{ fontSize: 52 }}>Two planes cross. Where they overlap, the work is shared.</h1>
          <div className="callouts" style={{ marginTop: 32, gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            <div><b>The crossing</b><span>Above the coral nexus the planes overlap in lavender. Below it they part and leave an ivory gap.</span></div>
            <div><b>Masked title</b><span>IN and BETWEEN switch ink wherever the plane under a letter changes, so the title is cut by its own subject.</span></div>
            <div><b>Construction</b><span>Concentric arcs and a crosshair run through the nexus. Every hairline is clipped and re-inked per region.</span></div>
            <div><b>Masthead</b><span>“Las Positas College / Journal of Honors” stays in a light serif on an ivory band, as on Spring 2026.</span></div>
          </div>
        </div>
        <Foot n={4} label="In Between" />
      </section>

      {/* 5 IB divider + research */}
      <section className="slide s-ib">
        <div className="m" style={{ opacity: 0.8 }}>In Between · STEM divider and research page</div>
        <div style={{ position: "absolute", left: 64, top: 76, display: "flex", gap: 24 }}>
          <Pg h={540}><InBetweenStem /></Pg>
          <Pg h={540}><ResearchPage theme="in-between" /></Pg>
        </div>
        <div style={{ position: "absolute", left: 958, top: 76, width: 258 }} className="callouts">
          <div><b>Divider</b><span>S, T, E and M each sit in a circle. Every intersection takes a new colour, so the fields visibly share letters.</span></div>
          <div><b>Heading marker</b><span>Two overlapping circles, one outlined and one coral.</span></div>
          <div><b>Rules and capsules</b><span>Dual-tone title rule, outlined figure capsule, margin connector line.</span></div>
          <div><b>Gradient edge</b><span>An 8 px indigo to lavender strip. The only gradient on the page.</span></div>
        </div>
        <Foot n={5} label="In Between" />
      </section>

      {/* 6 FR concept */}
      <section className="slide s-fr">
        <div className="m">Theme B</div>
        <h1 style={{ fontSize: 120, marginTop: 10 }}>Fragments</h1>
        <p style={{ fontStyle: "italic", fontSize: 22, marginTop: 14, maxWidth: 700 }}>Knowledge is assembled from pieces that rarely arrive together.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 28 }}>
          <div>
            <h2>Why it fits</h2>
            <p>Few studies are complete alone. Each article adds a piece, and the issue is where the pieces are put together.</p>
            <h2 style={{ marginTop: 18 }}>Colour theory</h2>
            <p>Saturated primaries separated by hard edges. Citrine for discovery, Vermilion for interruption, Cobalt for a cool counterweight. Ink and Paper hold the page. No gradients.</p>
          </div>
          <div style={{ paddingTop: 4 }}>
            <Palette sw={FR} ink="#171716" />
          </div>
        </div>
        <Foot n={6} label="Fragments" />
      </section>

      {/* 7 FR cover */}
      <section className="slide s-fr">
        <div className="m">Fragments · Cover</div>
        <div style={{ position: "absolute", left: 64, top: 76 }}><Pg h={600}><FragmentsCover /></Pg></div>
        <div style={{ position: "absolute", left: 560, top: 76, width: 640 }}>
          <h1 style={{ fontSize: 52 }}>One word, cut into strips and put back one column off.</h1>
          <div className="callouts" style={{ marginTop: 32, gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            <div><b>12 × 16 grid</b><span>Every block and every displacement lands on a 60 px module, or half of one.</span></div>
            <div><b>Colour blocks flip ink</b><span>Letters turn paper or ink as they cross cobalt, citrine, vermilion and ink fields.</span></div>
            <div><b>Numbered fragments</b><span>01 to 04 label the blocks; the panel at lower right shows the parts assembled.</span></div>
            <div><b>Masthead</b><span>Same light serif lockup, set paper-on-ink at the base.</span></div>
          </div>
        </div>
        <Foot n={7} label="Fragments" />
      </section>

      {/* 8 FR divider + research */}
      <section className="slide s-fr">
        <div className="m">Fragments · ARTS divider and research page</div>
        <div style={{ position: "absolute", left: 64, top: 76, display: "flex", gap: 24 }}>
          <Pg h={540}><FragmentsArts /></Pg>
          <Pg h={540}><ResearchPage theme="fragments" /></Pg>
        </div>
        <div style={{ position: "absolute", left: 958, top: 76, width: 258 }} className="callouts">
          <div><b>Divider</b><span>A, R, T and S step down the grid in four blocks, each overlapping the last by one cell.</span></div>
          <div><b>Tags and labels</b><span>Numbered section tag, square heading markers, “FIG” label with a colour chip.</span></div>
          <div><b>Margin details</b><span>Crop marks, a colour strip and a folio on an offset block. All outside the text.</span></div>
        </div>
        <Foot n={8} label="Fragments" />
      </section>

      {/* 9 compare */}
      <section className="slide s-neutral">
        <div className="m">Comparison</div>
        <h1 style={{ fontSize: 44, marginTop: 10 }}>Same journal, two systems</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, auto)", gap: 10, marginTop: 22, justifyContent: "start" }}>
          <Pg h={248}><InBetweenCover /></Pg><Pg h={248}><InBetweenStem /></Pg><Pg h={248}><ResearchPage theme="in-between" /></Pg>
          <Pg h={248}><FragmentsCover /></Pg><Pg h={248}><FragmentsArts /></Pg><Pg h={248}><ResearchPage theme="fragments" /></Pg>
        </div>
        <table className="tbl" style={{ marginTop: 22 }}>
          <thead><tr><th></th><th>In Between</th><th>Fragments</th></tr></thead>
          <tbody>
            <tr><td>Narrative</td><td>Boundaries are where ideas meet.</td><td>Knowledge is assembled from pieces.</td></tr>
            <tr><td>Colour</td><td>Analogous violets, one warm counterpoint, gradual change.</td><td>Primaries split by hard edges, no gradients.</td></tr>
            <tr><td>Geometry</td><td>Crossing planes, circles, arcs.</td><td>Blocks, strips, split circles on a 60 px grid.</td></tr>
          </tbody>
        </table>
        <Foot n={9} label="Comparison" />
      </section>

      {/* 10 implementation */}
      <section className="slide s-neutral">
        <div className="m">Implementation</div>
        <h1 style={{ fontSize: 44, marginTop: 10 }}>Flexibility, accessibility, production</h1>
        <table className="tbl" style={{ marginTop: 24 }}>
          <thead><tr><th></th><th>In Between</th><th>Fragments</th></tr></thead>
          <tbody>
            <tr><td>Editorial flexibility</td><td>Dividers for the other sections reuse the circle-and-intersection method with different letter sets. Tone stays calm, which suits longer reading.</td><td>Any word breaks into strips or blocks. Higher energy; a long title needs more care to stay legible.</td></tr>
            <tr><td>Visual accessibility</td><td>Body text 13.9:1 on ivory. Ivory on lavender is 2.2:1, so that pairing is decorative only; indigo on lavender is 5.5:1.</td><td>Body 15.5:1 on paper. Paper on cobalt is 5.4:1 and ink on vermilion 5.0:1; paper on vermilion (3.1:1) is for display type only.</td></tr>
            <tr><td>Production</td><td>All vector. One gradient and a few transparencies; both export cleanly to PDF.</td><td>All vector, flat fills only. The grid is easy to rebuild in InDesign or Affinity.</td></tr>
            <tr><td>Type</td><td colSpan={2}>Shared: Space Grotesk, Source Serif 4, IBM Plex Mono (all open licence). The Spring 2026 issue sets body text in Atkinson Hyperlegible Next; swapping it back is a one-token change if readability policy requires it.</td></tr>
          </tbody>
        </table>
        <Foot n={10} label="Implementation" />
      </section>
    </div>
  );
}
