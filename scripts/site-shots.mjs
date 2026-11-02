// usage: BASE=... node scripts/site-shots.mjs desktop|mobile route...
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
const [mode, ...routes] = process.argv.slice(2);
const out = "/private/tmp/claude-502/-Users-niks-Desktop/b85786eb-9288-4711-8296-b1f9fd9ffcb5/scratchpad/shots/site";
mkdirSync(out, { recursive: true });
const exe = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const b = await chromium.launch({ executablePath: exe });
const vp = mode === "mobile" ? { width: 390, height: 844 } : { width: 1440, height: 900 };
const ctx = await b.newContext({ viewport: vp, deviceScaleFactor: 1, isMobile: mode === "mobile" });
const errs = [];
for (const r of routes) {
  const p = await ctx.newPage();
  p.on("console", (m) => m.type() === "error" && errs.push(`${r}: ${m.text()}`));
  p.on("pageerror", (e) => errs.push(`${r}: ${e.message}`));
  p.on("requestfailed", (q) => errs.push(`${r}: failed ${q.url()}`));
  await p.goto(`${process.env.BASE || "http://localhost:3000"}${r}`, { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(2800);
  const name = (r === "/" ? "home" : r.slice(1)) + "-" + mode;
  await p.screenshot({ path: `${out}/${name}.png`, fullPage: true });
  const ov = await p.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  console.log(name, "h-overflow:", ov);
  await p.close();
}
console.log(errs.length ? errs.join("\n") : "no console errors");
await b.close();
