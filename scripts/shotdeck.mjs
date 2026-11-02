// usage: node scripts/shotdeck.mjs  -> per-slide PNGs in scratch
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
const out = "/private/tmp/claude-502/-Users-niks-Desktop/b85786eb-9288-4711-8296-b1f9fd9ffcb5/scratchpad/shots/deck";
mkdirSync(out, { recursive: true });
const exe = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const b = await chromium.launch({ executablePath: exe });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
await p.goto(`${process.env.BASE || "http://localhost:3000"}/export/deck`, { waitUntil: "networkidle" });
await p.evaluate(() => document.fonts.ready);
const slides = p.locator(".slide");
const n = await slides.count();
for (let i = 0; i < n; i++) await slides.nth(i).screenshot({ path: `${out}/s${i + 1}.png` });
console.log(n, out);
await b.close();
