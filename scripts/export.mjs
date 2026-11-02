// Renders every export route to PNG (300 dpi) and PDF (vector). Needs a running server: BASE=http://localhost:3100
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";
import { mkdirSync, writeFileSync, readFileSync, copyFileSync } from "node:fs";

const BASE = process.env.BASE || "http://localhost:3100";
const exe = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const OUT = "exports";
const DL = "public/downloads";
for (const d of [`${OUT}/01 - In Between`, `${OUT}/02 - Fragments`, `${OUT}/03 - Presentation`, DL]) mkdirSync(d, { recursive: true });

// slug -> [folder, file stem, site download stem]
const pages = {
  "in-between-cover": ["01 - In Between", "Cover", "in-between-cover"],
  "in-between-stem": ["01 - In Between", "STEM Divider", "in-between-stem-divider"],
  "in-between-research": ["01 - In Between", "Research Page", "in-between-research-page"],
  "fragments-cover": ["02 - Fragments", "Cover", "fragments-cover"],
  "fragments-arts": ["02 - Fragments", "ARTS Divider", "fragments-arts-divider"],
  "fragments-research": ["02 - Fragments", "Research Page", "fragments-research-page"],
};
const specs = { "in-between-spec": ["01 - In Between", "Palette and Typography", "in-between-palette-typography"], "fragments-spec": ["02 - Fragments", "Palette and Typography", "fragments-palette-typography"] };

const browser = await chromium.launch({ executablePath: exe });
const hi = await browser.newContext({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: 2550 / 816 });
const lo = await browser.newContext({ viewport: { width: 816, height: 1056 } });

async function render(slug, { png }) {
  const out = {};
  const p1 = await lo.newPage();
  await p1.goto(`${BASE}/export/${slug}`, { waitUntil: "networkidle" });
  await p1.evaluate(() => document.fonts.ready);
  out.pdf = await p1.pdf({ width: "8.5in", height: "11in", printBackground: true, pageRanges: "1" });
  await p1.close();
  if (png) {
    const p2 = await hi.newPage();
    await p2.goto(`${BASE}/export/${slug}`, { waitUntil: "networkidle" });
    await p2.evaluate(() => document.fonts.ready);
    out.png = await p2.locator("#page").screenshot();
    await p2.close();
  }
  return out;
}
const save = (folder, stem, dl, r) => {
  writeFileSync(`${OUT}/${folder}/${stem}.pdf`, r.pdf);
  copyFileSync(`${OUT}/${folder}/${stem}.pdf`, `${DL}/${dl}.pdf`);
  if (r.png) { writeFileSync(`${OUT}/${folder}/${stem}.png`, r.png); copyFileSync(`${OUT}/${folder}/${stem}.png`, `${DL}/${dl}.png`); }
};

for (const [slug, [f, s, d]] of Object.entries(pages)) save(f, s, d, await render(slug, { png: true }));
for (const [slug, [f, s, d]] of Object.entries(specs)) save(f, s, d, await render(slug, { png: false }));

// rationale: two Letter pages merged
const r1 = await render("rationale-1", { png: false });
const r2 = await render("rationale-2", { png: false });
const rat = await PDFDocument.create();
for (const b of [r1.pdf, r2.pdf]) { const src = await PDFDocument.load(b); (await rat.copyPages(src, [0])).forEach((pg) => rat.addPage(pg)); }
const ratBytes = await rat.save();
writeFileSync(`${OUT}/03 - Presentation/Theme Research - Design Rationale.pdf`, ratBytes);
writeFileSync(`${DL}/design-rationale.pdf`, ratBytes);

// deck: 16:9 pages
const dp = await (await browser.newContext({ viewport: { width: 1280, height: 720 } })).newPage();
await dp.goto(`${BASE}/export/deck`, { waitUntil: "networkidle" });
await dp.evaluate(() => document.fonts.ready);
const deck = await dp.pdf({ width: "1280px", height: "720px", printBackground: true });
const deckName = "LPCJH - Theme Research - Final Presentation.pdf";
writeFileSync(`${OUT}/03 - Presentation/${deckName}`, deck);
writeFileSync(`${DL}/final-presentation.pdf`, deck);

await browser.close();
for (const f of ["01 - In Between", "02 - Fragments", "03 - Presentation"]) console.log(f);
console.log("ok");
