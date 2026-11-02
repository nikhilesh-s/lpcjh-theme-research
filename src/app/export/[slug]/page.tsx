import { notFound } from "next/navigation";
import { bySlug, pages } from "@/art/registry";

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export default async function ExportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = bySlug(slug);
  if (!page) notFound();
  const size = page.kind === "deck" ? "1280px 720px" : "8.5in 11in";
  const reset = <style>{`@page{size:${size};margin:0}html,body{margin:0;background:#fff}`}</style>;
  if (page.kind === "deck") {
    return <main id="page">{reset}<page.Component /></main>;
  }
  return (
    <main id="page" style={{ width: 816, height: 1056, overflow: "hidden", background: "#fff" }}>
      {reset}
      <page.Component />
    </main>
  );
}
