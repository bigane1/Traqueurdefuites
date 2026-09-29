/**
 * Génère public/brand/logo-header.png sans « .com » ni « PLOMBERIE SERVICES ».
 * Source : logo-blanc.png (678×260).
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "public/brand/logo-blanc.png");
const out = path.join(root, "public/brand/logo-header.png");

const meta = await sharp(src).metadata();
const w = meta.width ?? 678;
const h = meta.height ?? 260;

/** Zone utile : monogramme + canal/robinet + « Traqueur / de fuites » */
const crop = {
  left: 0,
  top: 0,
  width: Math.round(w * 0.786),
  height: Math.round(h * 0.755),
};

await sharp(src).extract(crop).png({ compressionLevel: 9 }).toFile(out);

console.log("Cropped", crop, "from", w, "x", h, "→", out);
