// render.mjs — renders poster.html to entry.png at exactly 1024x1024.
// Run from this directory:  node render.mjs
import { chromium } from "playwright";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(here, "poster.html");
const outPath = join(here, "entry.png");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto("file://" + htmlPath, { waitUntil: "networkidle" });
await page.screenshot({ path: outPath });
await browser.close();

const { statSync } = await import("node:fs");
const bytes = statSync(outPath).size;
console.log("wrote", outPath, `(${bytes} bytes, limit 1048576)`);
