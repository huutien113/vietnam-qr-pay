import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { toSVG } from "qrto";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const entry = pkg.main;

const mod = await import(pathToFileURL(path.resolve(entry)));
const { QRPay } = mod;

const qrPay = QRPay.initVietQR({
  bankBin: "970407",
  bankNumber: "16249999999999",
  amount: "10000",
  purpose: "Chuyen tien thu code",
});

const content = qrPay.build();
fs.mkdirSync("artifacts", { recursive: true });
fs.writeFileSync("artifacts/vietqr.svg", toSVG(content));

console.log("Generated artifacts/vietqr.svg");
