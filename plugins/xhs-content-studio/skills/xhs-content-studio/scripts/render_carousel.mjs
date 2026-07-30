import { access, mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Resolve Codex's bundled workspace dependency from the invoking project, not this plugin folder.
const require = createRequire(path.join(process.cwd(), 'package.json'));
const { chromium } = require('playwright');

const [inputArg, outputArg] = process.argv.slice(2);
if (!inputArg) { console.error('Usage: node render_carousel.mjs <index.html> [slides-dir]'); process.exit(1); }
const input = path.resolve(inputArg);
const outputDir = path.resolve(outputArg || path.join(path.dirname(input), 'slides'));
await access(input); await mkdir(outputDir, { recursive: true });
const candidates = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'];
let executablePath;
for (const candidate of candidates) { try { await access(candidate); executablePath = candidate; break; } catch { /* use bundled Chromium */ } }
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
const page = await browser.newPage({ viewport: { width: 1080, height: 1440 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(input).href, { waitUntil: 'networkidle' });
await page.evaluate(async () => { await document.fonts.ready; });
const count = await page.locator('.slide').count();
if (!count) throw new Error('No .slide elements found. Give each carousel page class="slide".');
await page.evaluate(() => { document.body.style.cssText = 'margin:0;padding:0;background:#fff;display:block;'; document.querySelectorAll('.slide').forEach((slide) => { slide.style.transform='none'; slide.style.margin='0'; slide.style.borderRadius='0'; slide.style.boxShadow='none'; slide.style.display='none'; }); });
for (let i = 0; i < count; i += 1) {
  const slide = page.locator('.slide').nth(i);
  await page.evaluate((index) => { document.querySelectorAll('.slide').forEach((el, n) => { el.style.display = n === index ? 'block' : 'none'; }); }, i);
  await slide.screenshot({ path: path.join(outputDir, `${String(i + 1).padStart(2, '0')}.png`) });
}
await browser.close(); console.log(`Rendered ${count} pages to ${outputDir}`);
