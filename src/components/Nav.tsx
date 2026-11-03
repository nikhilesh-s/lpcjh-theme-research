import Link from "next/link";

const items = [
  { href: "/", label: "Overview" },
  { href: "/in-between", label: "In Between" },
  { href: "/fragments", label: "Fragments" },
  { href: "/systems", label: "Design Systems" },
  { href: "/deliverables", label: "Deliverables" },
  { href: "/explanations", label: "Explanations" },
];

export function Nav({ current }: { current: string }) {
  return (
    <header className="nav">
      <Link href="/" className="nav-mark" aria-label="LPCJH Theme Studies, overview">LPCJH</Link>
      <nav aria-label="Primary" className="nav-list">
        {items.map((i) => (
          <Link key={i.href} href={i.href} aria-current={current === i.href ? "page" : undefined}>{i.label}</Link>
        ))}
      </nav>
      <details className="nav-m">
        <summary>Menu</summary>
        <nav aria-label="Primary, mobile">
          {items.map((i) => (
            <Link key={i.href} href={i.href} aria-current={current === i.href ? "page" : undefined}>{i.label}</Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
