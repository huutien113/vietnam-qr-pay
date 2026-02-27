import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import QRCode from "qrcode";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const entry = pkg.main;

const mod = await import(pathToFileURL(path.resolve(entry)));
const { QRPay, BanksObject } = mod;

const qrPay = QRPay.initVietQR({
  bankBin: "970407",
  bankNumber: "16249999999999",
  amount: "10000",
  purpose: "Chuyen tien thu code",
});

const content = qrPay.build();
fs.mkdirSync("artifacts", { recursive: true });
await QRCode.toFile("artifacts/vietqr.png", content, { errorCorrectionLevel: "M" });

console.log("Generated artifacts/vietqr.png");
