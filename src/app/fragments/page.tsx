import Link from "next/link";
import { Nav } from "@/components/Nav";
import { HeroFR } from "@/components/Heroes";
import { PagePreview } from "@/components/PagePreview";
import { PaletteStrip } from "@/components/PaletteStrip";
import { AccentsFR, TypeShowcase } from "@/components/Showcase";
import { FragmentsCover } from "@/art/FragmentsCover";
import { FragmentsArts } from "@/art/FragmentsArts";
import { ResearchPage } from "@/art/ResearchPage";
import { rationale } from "@/art/Docs";
import { FR } from "@/art/tokens";
import { groups, withSize } from "@/lib-files";

export const metadata = { title: "Fragments | LPCJH Theme Studies" };

export default function Fragments() {
  const r = rationale.fragments;
  const rows = groups.find((g) => g.id === "fragments")!.rows.map(withSize);
  return (
    <div className="t t-fr">
      <Nav current="/fragments" />
      <main id="main">
        <header className="fr-hero">
          <div className="fr-hero-text">
            <p className="tag"><i>B</i><span>Theme study</span></p>
            <h1><span className="s1">FRAG</span><span className="s2">MENTS</span></h1>
            <p className="lede">{r.line}</p>
            <nav aria-label="On this page" className="jump">
              <a href="#rationale">Rationale</a><a href="#colour">Colour</a><a href="#type">Type</a><a href="#pages">Pages</a><a href="#accents">Accents</a><a href="#files">Files</a>
            </nav>
          </div>
          <div className="fr-hero-art"><HeroFR className="fr-hero-svg" /></div>
          <div className="fr-hero-cover">
            <PagePreview title="Cover" pdf="/downloads/fragments-cover.pdf" png="/downloads/fragments-cover.png"><FragmentsCover /></PagePreview>
          </div>
        </header>

        <section id="rationale" className="fr-sec" aria-labelledby="h-rat">
          <h2 id="h-rat"><i>01</i>What the theme means</h2>
          <div className="prose">{r.body.map((b, i) => <p key={i}>{b}</p>)}</div>
        </section>

        <section id="colour" className="fr-sec fr-ink" aria-labelledby="h-col">
          <h2 id="h-col"><i>02</i>Colour separates and assembles</h2>
          <p className="sec-lede">Hover or focus a block. Saturated accents sit behind hard boundaries; there are no gradients.</p>
          <PaletteStrip swatches={FR} label="Fragments palette" />
          <p className="note">Paper on cobalt is 5.4:1 and ink on vermilion 5.0:1, so both work at text size. Paper on vermilion is 3.1:1, so it is for display type only.</p>
        </section>

        <section id="type" className="fr-sec" aria-labelledby="h-type">
          <h2 id="h-type"><i>03</i>Type</h2>
          <TypeShowcase theme="fragments" />
        </section>

        <section id="pages" className="fr-sec fr-cit" aria-labelledby="h-pages">
          <h2 id="h-pages"><i>04</i>Divider and research page</h2>
          <p className="sec-lede">The ARTS divider rebuilds the cover’s parts into four stepped blocks. The research page keeps its accents outside the text measure.</p>
          <div className="pages-pair">
            <PagePreview title="ARTS divider" pdf="/downloads/fragments-arts-divider.pdf" png="/downloads/fragments-arts-divider.png"><FragmentsArts /></PagePreview>
            <PagePreview title="Research page" pdf="/downloads/fragments-research-page.pdf" png="/downloads/fragments-research-page.png"><ResearchPage theme="fragments" /></PagePreview>
          </div>
        </section>

        <section id="accents" className="fr-sec" aria-labelledby="h-acc">
          <h2 id="h-acc"><i>05</i>Accent system</h2>
          <AccentsFR />
        </section>

        <section id="files" className="fr-sec fr-ink" aria-labelledby="h-files">
          <h2 id="h-files"><i>06</i>Files</h2>
          <ul className="files">
            {rows.map((f) => (
              <li key={f.file}><a href={f.href} download><span>{f.label}</span><span>{f.kind}</span><span>{f.size}</span></a></li>
            ))}
          </ul>
          <p className="next">Next: <Link href="/systems">Compare both systems</Link>.</p>
        </section>
      </main>
    </div>
  );
}
