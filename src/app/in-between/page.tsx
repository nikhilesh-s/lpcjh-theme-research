import Link from "next/link";
import { Nav } from "@/components/Nav";
import { HeroIB } from "@/components/Heroes";
import { PagePreview } from "@/components/PagePreview";
import { PaletteStrip } from "@/components/PaletteStrip";
import { AccentsIB, TypeShowcase } from "@/components/Showcase";
import { InBetweenCover } from "@/art/InBetweenCover";
import { InBetweenStem } from "@/art/InBetweenStem";
import { ResearchPage } from "@/art/ResearchPage";
import { rationale } from "@/art/Docs";
import { IB } from "@/art/tokens";
import { groups, withSize } from "@/lib-files";

export const metadata = { title: "In Between | LPCJH Theme Studies" };

export default function InBetween() {
  const r = rationale["in-between"];
  const rows = groups.find((g) => g.id === "in-between")!.rows.map(withSize);
  return (
    <div className="t t-ib">
      <Nav current="/in-between" />
      <main id="main">
        <header className="ib-hero">
          <HeroIB className="ib-hero-art" />
          <div className="ib-hero-text">
            <h1>In Between</h1>
            <p className="lede">{r.line}</p>
            <nav aria-label="On this page" className="jump">
              <a href="#rationale">Rationale</a><a href="#colour">Colour</a><a href="#type">Type</a><a href="#pages">Pages</a><a href="#accents">Accents</a><a href="#files">Files</a>
            </nav>
          </div>
          <div className="ib-hero-cover">
            <PagePreview title="Cover" pdf="/downloads/in-between-cover.pdf" png="/downloads/in-between-cover.png"><InBetweenCover /></PagePreview>
          </div>
        </header>

        <section id="rationale" className="ib-sec ib-iris" aria-labelledby="h-rat">
          <h2 id="h-rat">What the theme means</h2>
          <div className="prose">{r.body.map((b, i) => <p key={i}>{b}</p>)}</div>
        </section>

        <section id="colour" className="ib-sec ib-light" aria-labelledby="h-col">
          <h2 id="h-col">Colour is transition</h2>
          <PaletteStrip swatches={IB} label="In Between palette" />
          <p className="note">Ivory on lavender measures 2.2:1, so that pairing is decorative only. Indigo on lavender is 5.5:1 and indigo on coral 4.9:1.</p>
        </section>

        <section id="type" className="ib-sec ib-dark" aria-labelledby="h-type">
          <h2 id="h-type">Type</h2>
          <TypeShowcase theme="in-between" />
        </section>

        <section id="pages" className="ib-sec ib-iris" aria-labelledby="h-pages">
          <h2 id="h-pages">Divider and research page</h2>
          <div className="pages-pair">
            <PagePreview title="STEM divider" pdf="/downloads/in-between-stem-divider.pdf" png="/downloads/in-between-stem-divider.png"><InBetweenStem /></PagePreview>
            <PagePreview title="Research page" pdf="/downloads/in-between-research-page.pdf" png="/downloads/in-between-research-page.png"><ResearchPage theme="in-between" /></PagePreview>
          </div>
        </section>

        <section id="accents" className="ib-sec ib-light" aria-labelledby="h-acc">
          <h2 id="h-acc">Accent system</h2>
          <AccentsIB />
        </section>

        <section id="files" className="ib-sec ib-dark" aria-labelledby="h-files">
          <h2 id="h-files">Files</h2>
          <ul className="files">
            {rows.map((f) => (
              <li key={f.file}><a href={f.href} download><span>{f.label}</span><span>{f.kind}</span><span>{f.size}</span></a></li>
            ))}
          </ul>
          <p className="next">Next: <Link href="/fragments">Fragments</Link>, the other direction.</p>
        </section>
      </main>
    </div>
  );
}
