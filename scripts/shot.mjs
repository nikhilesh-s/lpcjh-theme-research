// usage: node scripts/shot.mjs <slug> [scale] [outdir]
import { chromium } from "playwright";
const [slug, scale = "1", out = "/private/tmp/claude-502/-Users-niks-Desktop/b85786eb-9288-4711-8296-b1f9fd9ffcb5/scratchpad/shots"] = process.argv.slice(2);
import { mkdirSync } from "node:fs";
mkdirSync(out, { recursive: true });
const exe = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const browser = await chromium.launch({ executablePath: exe });
const page = await browser.newPage({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: Number(scale) });
await page.goto(`${process.env.BASE || "http://localhost:3000"}/export/${slug}`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.locator("#page").screenshot({ path: `${out}/${slug}.png` });
await browser.close();
console.log(`${out}/${slug}.png`);
