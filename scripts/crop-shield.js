/**
 * Crop the shield PNG: trim transparent or near-black padding so the shield fills the bounds.
 * Run: node scripts/crop-shield.js
 * Output: public/darkshepherd_logo1_cropped.png (use this in the hero; replace original if desired)
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const inputPath = path.join(__dirname, "..", "public", "darkshepherd_logo1.png");
const outputPath = path.join(__dirname, "..", "public", "darkshepherd_logo1_cropped.png");

async function main() {
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const isDark = (r, g, b, a) => (a < 20) || (a >= 20 && r < 25 && g < 25 && b < 25);

  let minX = width, minY = height, maxX = 0, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = channels === 4 ? data[i + 3] : 255;
      if (!isDark(r, g, b, a)) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const pad = 2;
  const left = Math.max(0, minX - pad);
  const top = 0; // don't crop the top — keep full height from top
  const cropWidth = Math.min(width - left, maxX - left + 1 + pad * 2);
  const cropHeight = maxY + 1 + pad; // from top of image to bottom of content

  const outDir = path.join(__dirname, "..", "public", "images");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outputPathImages = path.join(outDir, "darkshepherd-shield.png");

  await sharp(inputPath)
    .extract({ left, top, width: cropWidth, height: cropHeight })
    .png()
    .toFile(outputPath);

  await sharp(inputPath)
    .extract({ left, top, width: cropWidth, height: cropHeight })
    .png()
    .toFile(outputPathImages);

  console.log("Cropped shield (tight):", { left, top, width: cropWidth, height: cropHeight });
  console.log("Wrote:", outputPath, "and", outputPathImages);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
