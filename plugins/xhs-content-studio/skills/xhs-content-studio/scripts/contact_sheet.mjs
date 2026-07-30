import { readdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';

// Resolve Codex's bundled workspace dependency from the invoking project, not this plugin folder.
const require = createRequire(path.join(process.cwd(), 'package.json'));
const sharp = require('sharp');

const [slidesArg, outputArg] = process.argv.slice(2);
if (!slidesArg) { console.error('Usage: node contact_sheet.mjs <slides-dir> [contact-sheet.png]'); process.exit(1); }
const slidesDir = path.resolve(slidesArg);
const files = (await readdir(slidesDir)).filter((name) => /\.png$/i.test(name)).sort();
if (!files.length) throw new Error('No PNG slides found.');
const width = 216, height = 288, gap = 18, columns = 3, rows = Math.ceil(files.length / columns);
const composites = await Promise.all(files.map(async (name, i) => ({ input: await sharp(path.join(slidesDir, name)).resize(width, height, { fit: 'fill' }).png().toBuffer(), left: gap + (i % columns) * (width + gap), top: gap + Math.floor(i / columns) * (height + gap) })));
const output = path.resolve(outputArg || path.join(path.dirname(slidesDir), 'contact-sheet.png'));
await sharp({ create: { width: gap + columns * (width + gap), height: gap + rows * (height + gap), channels: 4, background: '#22302a' } }).composite(composites).png().toFile(output);
console.log(`Wrote ${output}`);
