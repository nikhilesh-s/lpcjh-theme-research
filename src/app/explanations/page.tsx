import { Nav } from "@/components/Nav";

export const metadata = { title: "Explanations | LPCJH Theme Studies" };

// Raw notes. Edit the text in place; each <li> is one bullet.
export default function Explanations() {
  return (
    <div className="t t-ex">
      <Nav current="/explanations" />
      <main id="main">
        <header className="sys-head">
          <h1>Explanations</h1>
          <p className="lede">Working notes in Nik's words. Not final copy.</p>
        </header>

        <div className="ex-grid">
          <section aria-labelledby="e-why">
            <h2 id="e-why">Why the themes work</h2>
            <h3>The core constraint: why does the theme make sense?</h3>
            <ul className="ex-write">
              <li>In Between: (write here)</li>
              <li>Fragments: (write here)</li>
            </ul>
          </section>

          <section aria-labelledby="e-how">
            <h2 id="e-how">How to implement a theme across the paper</h2>
            <h3>Write-up</h3>
            <ul className="ex-write">
              <li>Explain the reasoning behind each element that gets added. (write here)</li>
              <li>Example: using an accent. (write here)</li>
            </ul>
            <h3>Raw notes</h3>
            <ul>
              <li>Accents have to be automation-friendly if we want to automate them.</li>
              <li>The journal page is laid out in a page layout editor and exported as a PDF. Inline CSS and HTML do not work there.</li>
              <li>An inline SVG per accent would make the PDF very large.</li>
              <li>So the accents are created as elements inside the layout. It feels like going back to the caveman era.</li>
              <li>Any symbol or number is hard coded. If an SVG is placed live and it moves, it pushes everything with it.</li>
              <li>Example from another journal (Surge or Thurge, check which): the accent is just a square on the left and right side. Its colour shows which section the page belongs to. It is simple, and a design can be added into it.</li>
            </ul>
          </section>

          <section aria-labelledby="e-cases">
            <h2 id="e-cases">Case studies</h2>
            <article className="ex-case">
              <h3>Venn diagram as a heading accent</h3>
              <p className="ex-demo" aria-hidden="true"><span className="ib-mark" /><b>Section heading</b></p>
              <ul className="ex-write">
                <li>Why it makes sense for In Between: (write here)</li>
                <li>How it goes into the header and stays feasible: (write here)</li>
              </ul>
              <h4>Raw notes</h4>
              <ul>
                <li>If we have the SVG, how do we put it into the header so it is feasible?</li>
                <li>It does not have to be a square. It could be a fragment coming in, or two circles.</li>
                <li>The grey background of the running header could be replaced with a row of Venn diagrams. Same idea.</li>
              </ul>
            </article>
            <article className="ex-case">
              <h3>Case study 2</h3>
              <ul className="ex-write"><li>(write here)</li></ul>
            </article>
          </section>

          <section aria-labelledby="e-aff">
            <h2 id="e-aff">Affinity integration</h2>
            <ul className="ex-write"><li>(write here)</li></ul>
            <h3>Raw notes</h3>
            <ul>
              <li>First step on the agent side: use the Affinity MCP to read one of the master templates, then have it make a CSS-friendly version.</li>
              <li>Justified text is not native in CSS. That does not matter, the CSS version is only a mock-up.</li>
              <li>New designs then start from that version, which is easier for an agent or harness to work with.</li>
              <li>A human has to stay in the loop heavily. An agent can come up with good designs, but a one-shot does not work.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
