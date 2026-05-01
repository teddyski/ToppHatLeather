// Watermarks every JPG/PNG under src/assets/ in place with "hightoppleather.com"
// in the bottom-right corner. Re-run if you add new source images.
//
// Usage:  node scripts/watermark.mjs

import sharp from "sharp";
import { readdir, rename } from "node:fs/promises";
import { join, extname } from "node:path";

const TEXT = "hightoppleather.com";
const ROOTS = ["src/assets/products", "src/assets/about"];
const EXTS = new Set([".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (EXTS.has(extname(e.name).toLowerCase())) out.push(p);
  }
  return out;
}

function overlaySvg(width, height) {
  const fontSize = Math.max(16, Math.round(height / 55));
  const padX = Math.round(width * 0.025);
  const padY = Math.round(height * 0.025);
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <defs>
    <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="black" flood-opacity="0.55"/>
    </filter>
  </defs>
  <text x="${width - padX}" y="${height - padY}"
        text-anchor="end"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="${fontSize}"
        fill="white"
        fill-opacity="0.78"
        filter="url(#s)">${TEXT}</text>
</svg>`);
}

async function watermark(file) {
  const tmp = `${file}.wm.tmp`;
  // Bake EXIF rotation into a buffer first so we can read post-rotation dims
  // and composite an overlay sized to the actual canvas.
  const rotated = await sharp(file).rotate().toBuffer();
  const meta = await sharp(rotated).metadata();
  const overlay = overlaySvg(meta.width, meta.height);
  const isPng = extname(file).toLowerCase() === ".png";
  const pipe = sharp(rotated).composite([{ input: overlay, top: 0, left: 0 }]);
  if (isPng) await pipe.png({ compressionLevel: 9 }).toFile(tmp);
  else await pipe.jpeg({ quality: 92, mozjpeg: true }).toFile(tmp);
  await rename(tmp, file);
  console.log(`✓ ${file}`);
}

// CLI: pass file paths to watermark only those, otherwise process all under ROOTS.
const args = process.argv.slice(2);
const targets = args.length
  ? args
  : (await Promise.all(ROOTS.map(walk))).flat();
for (const f of targets) await watermark(f);
console.log(`\nDone. Watermarked ${targets.length} image(s).`);
