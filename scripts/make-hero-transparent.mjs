import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const originalName = "ChatGPT Image Feb 27, 2026, 11_13_54 PM.png";
const inputPath = path.join(root, "public", originalName);
const tempPath = path.join(root, "public", "hero-shield-right-transparent-temp.png");
const outputPath = path.join(root, "public", "hero-shield-right.png");

// Remove white speckles and light halo edge (>= 212). Shield body (~160) and inner glow stay.
const BRIGHTNESS_THRESHOLD = 212;

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const brightness = (r + g + b) / 3;
  if (brightness >= BRIGHTNESS_THRESHOLD) {
    data[i + 3] = 0;
  }
}

await sharp(data, {
  raw: { width, height, channels },
})
  .png()
  .toFile(tempPath);

fs.renameSync(tempPath, outputPath);
console.log("Done: hero-shield-right.png (background removed, shield intact)");
