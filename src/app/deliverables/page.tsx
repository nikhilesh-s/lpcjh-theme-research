import { Nav } from "@/components/Nav";
import { groups, withSize } from "@/lib-files";

export const metadata = { title: "Deliverables | LPCJH Theme Studies" };

export default function Deliverables() {
  return (
    <div className="t t-del">
      <Nav current="/deliverables" />
      <main id="main">
        <header className="sys-head">
          <p className="kicker">Deliverables</p>
          <h1>Files</h1>
          <p className="lede">Pages are US Letter (8.5 × 11 in). PNGs are 2550 × 3300 px, 300 dpi. PDFs keep type and artwork as vectors.</p>
        </header>
        <div className="del-grid">
          {groups.map((g) => (
            <section key={g.id} aria-labelledby={`d-${g.id}`} className={`del-g del-${g.id}`}>
              <h2 id={`d-${g.id}`}>{g.title}</h2>
              <ul className="files">
                {g.rows.map(withSize).map((f) => (
                  <li key={f.file}><a href={f.href} download><span>{f.label}</span><span>{f.kind}</span><span>{f.size}</span></a></li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
