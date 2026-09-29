import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public/brand/logo-site.png");
const src = out;

let img = sharp(src).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const t = 32;
for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r <= t && g <= t && b <= t) data[i + 3] = 0;
}

const tmp = path.join(root, "public/brand/logo-site.tmp.png");
await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .trim({ threshold: 12 })
  .toFile(tmp);
fs.renameSync(tmp, out);

const meta = await sharp(out).metadata();
console.log("logo-site.png", meta.width, "x", meta.height);
