import { notFound } from "next/navigation";
import { bySlug, pages } from "@/art/registry";

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export default async function ExportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = bySlug(slug);
  if (!page) notFound();
  return (
    <main id="page" style={{ width: 816, height: 1056, overflow: "hidden", background: "#fff" }}>
      <page.Component />
    </main>
  );
}
