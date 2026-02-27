import fs from "fs";
import path from "path";
import sharp from "sharp";

const dir = "artifacts";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".svg"));

for (const f of files) {
  const inPath = path.join(dir, f);
  const outPath = path.join(dir, f.replace(/\.svg$/i, ".png"));
  const svg = fs.readFileSync(inPath);

  await sharp(svg).png().toFile(outPath);
  console.log("Converted:", inPath, "->", outPath);
}
