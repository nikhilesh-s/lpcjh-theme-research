import "./research.css";

type Theme = "in-between" | "fragments";

const copy = {
  "in-between": {
    section: "STEM",
    running: "Reading the Boundary: Measurement Where Two Disciplines Overlap",
    title: "Reading the Boundary: Measurement Where Two Disciplines Overlap",
    folio: 23,
    abstract:
      "This placeholder abstract shows how a research article sits inside the In Between system. Studies that cross disciplinary lines often borrow instruments from one field and interpretive habits from another. The sample text asks where the two meet, what each side measures and what each leaves out. It exists only to test line length, rhythm and hierarchy; it reports no real findings and names no real author.",
    left: [
      { h: "1. Introduction" },
      "Research that sits between fields rarely arrives with its own vocabulary. A chemist reading a climate record, or a linguist reading a social feed, borrows terms that were built for another purpose.",
      "The borrowing is useful, and it is also where small mismatches enter the work. This sample page uses an invented question to show how that tension can be set in type: how often do two fields describe the same observation with different words?",
      { h: "2. Methods" },
      "Placeholder methods text appears here so the page shows a realistic second heading, a justified paragraph and a note call. Sources are described, instruments are named and the unit of analysis is stated before any result is given.",
    ],
    right: [
      "Figure 1 shows the shape most readers expect from an interdisciplinary result: two sets of observations that overlap in the middle and part at the edges. The overlap is where both vocabularies apply.",
    ],
    right2: [
      { h: "3. Discussion" },
      "The discussion begins directly under the figure so the caption, the evidence and the argument stay within one glance. Body text is a text serif at 10.5 pt on 15.75 pt leading, which keeps lines near 55 characters in a two-column measure.",
    ],
    caption: "Illustrative figure placeholder. Two measurement sets overlap near the centre of the plot. Replace with the authors' figure.",
    notes: ["1. Placeholder reference, APA 7th ed., with DOI.", "2. Placeholder note on instruments and units."],
  },
  fragments: {
    section: "Arts & Humanities",
    running: "Assembling the Archive: Meaning from Partial Records",
    title: "Assembling the Archive: Meaning from Partial Records",
    folio: 79,
    abstract:
      "This placeholder abstract shows how a humanities article sits inside the Fragments system. Archives seldom hold a complete record; a reader works from letters without replies, images without captions and dates without events. The sample text asks how a coherent account is built from such pieces, and how an author should mark the seams. It exists only to test line length, rhythm and hierarchy; it reports no real findings and names no real author.",
    left: [
      { h: "1. Introduction" },
      "An archive is a set of survivors. What remains was kept for reasons that rarely match the questions a later reader brings to it, and the reader's first task is to say what the pieces are before saying what they mean.",
      "This sample page invents a small collection to show how that work can be laid out: each source gets its own label, each claim points back to a source, and the gaps between sources are stated rather than smoothed over.",
      { h: "2. Sources" },
      "Placeholder text for the sources section appears here so the page shows a realistic second heading, a justified paragraph and a note call. Each item is described by what it is, who made it and what it leaves out.",
    ],
    right: [
      "Figure 1 arranges four invented sources as modular panels. Panels of different size sit on one shared grid, so a reader can compare them without losing the sense that they belong to a single account.",
    ],
    right2: [
      { h: "3. Reading the gaps" },
      "The discussion begins directly under the figure so the caption, the evidence and the argument stay within one glance. Body text is a text serif at 10.5 pt on 15.75 pt leading, which keeps lines near 55 characters in a two-column measure.",
    ],
    caption: "Illustrative figure placeholder. Four sources shown as modular panels on one grid. Replace with the authors' figure.",
    notes: ["1. Placeholder reference, APA 7th ed., with DOI.", "2. Placeholder note on archive and collection."],
  },
} as const;

type Block = string | { h: string };

function Blocks({ items, fr, sups = {} }: { items: readonly Block[]; fr: boolean; sups?: Record<number, number> }) {
  return (
    <>
      {items.map((b, i) =>
        typeof b === "string" ? (
          <p key={i}>{b}{sups[i] ? <sup>{sups[i]}</sup> : null}</p>
        ) : (
          <h2 key={i}>{fr ? <><span className="n">{b.h.split(".")[0]}</span><span>{b.h.split(". ")[1]}</span></> : b.h}</h2>
        )
      )}
    </>
  );
}

function PlateIB() {
  return (
    <svg className="plate" viewBox="0 0 344 188" role="img" aria-label="Placeholder figure: two overlapping circles on an axis">
      <rect x="0.5" y="0.5" width="343" height="187" fill="#fbf8f2" stroke="#25235c" strokeOpacity="0.35" />
      <g stroke="#25235c" strokeOpacity="0.28">
        {[40, 80, 120, 160].map((y) => <line key={y} x1="0" x2="344" y1={y} y2={y} />)}
      </g>
      <circle cx="140" cy="94" r="62" fill="#4948ed" fillOpacity="0.88" />
      <circle cx="204" cy="94" r="62" fill="#a29cf4" fillOpacity="0.88" />
      <path d="M172 40.6 A62 62 0 0 1 172 147.4 A62 62 0 0 1 172 40.6Z" fill="#ff755b" />
      <line x1="24" y1="160" x2="320" y2="160" stroke="#25235c" />
      <g fontFamily="var(--f-meta)" fontSize="9.5" fill="#25235c">
        <text x="24" y="176">Set A</text><text x="320" y="176" textAnchor="end">Set B</text>
        <text x="172" y="98" textAnchor="middle" fill="#25235c">overlap</text>
      </g>
    </svg>
  );
}

function PlateFR() {
  return (
    <svg className="plate" viewBox="0 0 344 188" role="img" aria-label="Placeholder figure: modular panels on a grid">
      <rect x="0.5" y="0.5" width="343" height="187" fill="#f5f0e5" stroke="#191919" />
      <g>
        <rect x="12" y="12" width="164" height="96" fill="#3873d9" />
        <rect x="182" y="12" width="76" height="46" fill="#f2d84a" />
        <rect x="264" y="12" width="68" height="46" fill="#191919" />
        <path d="M182 108 A38 38 0 0 1 258 108Z" fill="#e44f3f" />
        <rect x="264" y="64" width="68" height="44" fill="none" stroke="#191919" />
        <rect x="12" y="114" width="76" height="62" fill="#191919" />
        <rect x="94" y="114" width="82" height="62" fill="#f2d84a" />
        <rect x="182" y="114" width="150" height="62" fill="none" stroke="#191919" />
      </g>
      <g fontFamily="var(--f-meta)" fontSize="9.5">
        <text x="18" y="28" fill="#f5f0e5">01</text><text x="188" y="28" fill="#191919">02</text>
        <text x="270" y="28" fill="#f5f0e5">03</text><text x="18" y="130" fill="#f5f0e5">04</text>
      </g>
    </svg>
  );
}

function DecoIB() {
  return (
    <svg className="rp-deco" viewBox="0 0 816 1056" aria-hidden="true">
      <defs>
        <linearGradient id="rp-ib-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#25235c" /><stop offset="0.55" stopColor="#4948ed" /><stop offset="1" stopColor="#a29cf4" />
        </linearGradient>
      </defs>
      <rect x="808" y="0" width="8" height="1056" fill="url(#rp-ib-edge)" />
      <line x1="40" y1="78" x2="40" y2="990" stroke="#25235c" strokeOpacity="0.28" />
      {[294, 426, 703].map((y) => (
        <g key={y}><circle cx="40" cy={y} r="3.5" fill="#f3ede3" stroke="#4948ed" /><line x1="44" x2="62" y1={y} y2={y} stroke="#4948ed" strokeOpacity="0.6" /></g>
      ))}
      <g fill="none" stroke="#a29cf4" strokeOpacity="0.55">
        {[26, 46].map((r) => <circle key={r} cx="0" cy="0" r={r} />)}
      </g>
    </svg>
  );
}

function DecoFR() {
  const m = 26; // crop marks sit outside the live area
  const L = 14;
  const corners: [number, number, number, number][] = [
    [m, m, 1, 1], [816 - m, m, -1, 1], [m, 1056 - m, 1, -1], [816 - m, 1056 - m, -1, -1],
  ];
  return (
    <svg className="rp-deco" viewBox="0 0 816 1056" aria-hidden="true">
      <g stroke="#191919" strokeWidth="1">
        {corners.map(([x, y, sx, sy], i) => (
          <g key={i}><line x1={x} y1={y} x2={x + sx * L} y2={y} /><line x1={x} y1={y} x2={x} y2={y + sy * L} /></g>
        ))}
      </g>
      <g>
        <rect x="64" y="12" width="8" height="8" fill="#f2d84a" /><rect x="74" y="12" width="8" height="8" fill="#3873d9" /><rect x="84" y="12" width="8" height="8" fill="#e44f3f" />
      </g>
      <g fontFamily="var(--f-meta)" fontSize="9" fill="#191919" opacity="0.7">
        {[1, 2, 3, 4, 5, 6].map((n) => <text key={n} x="30" y={80 + n * 140} transform={`rotate(-90 30 ${80 + n * 140})`}>{String(n).padStart(2, "0")}</text>)}
      </g>
      <rect x="772" y="78" width="20" height="6" fill="#e44f3f" />
      <rect x="772" y="86" width="20" height="2" fill="#191919" />
    </svg>
  );
}

export function ResearchPage({ theme }: { theme: Theme }) {
  const c = copy[theme];
  const fr = theme === "fragments";
  return (
    <div className={`rp ${fr ? "rp-fr" : "rp-ib"}`}>
      {fr ? <DecoFR /> : <DecoIB />}
      <div className="rp-run">
        <span className="m">Next issue | Sample page</span>
        <em>{c.running}</em>
      </div>
      <div className="rp-main">
        <div className="rp-sec">
          {fr ? (
            <><span className="num">03</span><span className="lab">{c.section}</span></>
          ) : (
            <span>{c.section}</span>
          )}
        </div>
        <h1 className="rp-title">{c.title}</h1>
        <div className="rp-by"><b>Illustrative Author</b><i>Las Positas College</i><span className="tag">layout copy only</span></div>
        <section className="rp-abs">
          <h2>{fr ? <><span className="n">A</span><span>Abstract</span></> : "Abstract"}</h2>
          <p>{c.abstract}</p>
        </section>
        <div className="rp-cols">
          <div>
            <Blocks items={c.left} fr={fr} sups={{ 1: 1, 4: 2 }} />
          </div>
          <div>
            <Blocks items={c.right} fr={fr} />
            <figure className="rp-fig">
              {fr ? <PlateFR /> : <PlateIB />}
              <figcaption>
                <span className="fignum">{fr ? <><b>FIG 1</b><s /></> : "FIG. 1"}</span>
                <span>{c.caption}</span>
              </figcaption>
            </figure>
            <Blocks items={c.right2} fr={fr} />
          </div>
        </div>
      </div>
      <div className="rp-notes">{c.notes.map((n) => <div key={n}>{n}</div>)}</div>
      <div className="rp-foot">
        {fr ? <span className="folio-box">{c.folio}</span> : <span className="folio">{c.folio} | Las Positas College Journal of Honors</span>}
        {fr ? <span className="folio">Las Positas College Journal of Honors</span> : <span className="folio">Theme study A</span>}
      </div>
    </div>
  );
}
