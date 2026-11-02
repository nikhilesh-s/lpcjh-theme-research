import { chromium } from "playwright";
const exe = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const b = await chromium.launch({ executablePath: exe });
const p = await b.newPage();
await p.goto("http://localhost:3000/export/in-between-cover", { waitUntil: "networkidle" });
const words = process.argv.slice(2);
const r = await p.evaluate((words) => {
  const svg = document.querySelector("svg");
  return words.map((w) => {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute("font-family", "var(--f-display)"); t.setAttribute("font-weight", "700"); t.setAttribute("font-size", "100");
    t.textContent = w; svg.appendChild(t);
    const bb = t.getBBox(); const len = t.getComputedTextLength(); t.remove(); return [w, +len.toFixed(1)];
  });
}, words);
console.log(JSON.stringify(r)); await b.close();
