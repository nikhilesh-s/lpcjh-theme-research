import Link from "next/link";
import { Nav } from "@/components/Nav";
import { HeroFR, HeroIB } from "@/components/Heroes";
import { PagePreview } from "@/components/PagePreview";
import { InBetweenCover } from "@/art/InBetweenCover";
import { InBetweenStem } from "@/art/InBetweenStem";
import { FragmentsCover } from "@/art/FragmentsCover";
import { FragmentsArts } from "@/art/FragmentsArts";
import { ResearchPage } from "@/art/ResearchPage";
import { IB, FR } from "@/art/tokens";

export default function Home() {
  return (
    <div className="t t-home">
      <Nav current="/" />
      <main id="main">
        <section className="split" aria-labelledby="home-title">
          <div className="half half-ib"><HeroIB /></div>
          <div className="half half-fr"><HeroFR /></div>
          <h1 id="home-title" className="split-title">
            <span className="layer layer-a" aria-hidden="true"><span>LPCJH</span><span>Theme Studies</span></span>
            <span className="layer layer-b"><span>LPCJH</span><span>Theme Studies</span></span>
          </h1>
          <p className="split-sub">Two editorial directions for the next issue of the Las Positas College Journal of Honors.</p>
          <div className="split-cta">
            <Link className="cta cta-ib" href="/in-between">Open In Between</Link>
            <Link className="cta cta-fr" href="/fragments">Open Fragments</Link>
          </div>
        </section>

        <section className="home-sec" aria-labelledby="six">
          <div className="home-head">
            <h2 id="six">Six pages, two journals</h2>
            <p>Each direction has a cover, a section divider and a research page. Select any page to see it at full size, or download it.</p>
          </div>
          <div className="home-rows">
            <div className="home-row home-row-ib">
              <h3>In Between</h3>
              <div className="home-thumbs">
                <PagePreview title="Cover" pdf="/downloads/in-between-cover.pdf" png="/downloads/in-between-cover.png"><InBetweenCover /></PagePreview>
                <PagePreview title="STEM divider" pdf="/downloads/in-between-stem-divider.pdf" png="/downloads/in-between-stem-divider.png"><InBetweenStem /></PagePreview>
                <PagePreview title="Research page" pdf="/downloads/in-between-research-page.pdf" png="/downloads/in-between-research-page.png"><ResearchPage theme="in-between" /></PagePreview>
              </div>
            </div>
            <div className="home-row home-row-fr">
              <h3>Fragments</h3>
              <div className="home-thumbs">
                <PagePreview title="Cover" pdf="/downloads/fragments-cover.pdf" png="/downloads/fragments-cover.png"><FragmentsCover /></PagePreview>
                <PagePreview title="ARTS divider" pdf="/downloads/fragments-arts-divider.pdf" png="/downloads/fragments-arts-divider.png"><FragmentsArts /></PagePreview>
                <PagePreview title="Research page" pdf="/downloads/fragments-research-page.pdf" png="/downloads/fragments-research-page.png"><ResearchPage theme="fragments" /></PagePreview>
              </div>
            </div>
          </div>
        </section>

        <section className="home-sec home-two" aria-label="The two directions in brief">
          <article className="brief brief-ib">
            <h2>In Between</h2>
            <p className="brief-line">The spaces separating ideas are also where ideas meet.</p>
            <div className="mini-pal" aria-hidden="true">{IB.map((s) => <span key={s.hex} style={{ background: s.hex, flexGrow: s.share }} />)}</div>
            <p>Crossing planes, overlaps and a single coral point. Colour changes by degrees.</p>
            <Link href="/in-between">See the In Between system</Link>
          </article>
          <article className="brief brief-fr">
            <h2>Fragments</h2>
            <p className="brief-line">Knowledge is assembled from pieces that rarely arrive together.</p>
            <div className="mini-pal" aria-hidden="true">{FR.map((s) => <span key={s.hex} style={{ background: s.hex, flexGrow: s.share }} />)}</div>
            <p>Strips, blocks and split circles on a 60 px grid. Colour is separated by hard edges.</p>
            <Link href="/fragments">See the Fragments system</Link>
          </article>
        </section>
      </main>
      <footer className="home-foot">
        <span>Nikhilesh Suravarjjala. Theme research for the Las Positas College Journal of Honors.</span>
        <Link href="/deliverables">All files</Link>
      </footer>
    </div>
  );
}
