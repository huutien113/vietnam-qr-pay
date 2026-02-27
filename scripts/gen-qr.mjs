import fs from "fs";
import QRCode from "qrcode";
import { QRPay, BanksObject } from "vietnam-qr-pay";

const qrPay = QRPay.initVietQR({
  bankBin: "970407",
  bankNumber: "16249999999999",
  amount: "10000",
  purpose: "Chuyen tien thu code",
});

const content = qrPay.build(); //EMV

fs.mkdirSync("artifacts", { recursive: true });
await QRCode.toFile("artifacts/vietqr.png", content, { errorCorrectionLevel: "M" });

console.log("Generated artifacts/vietqr.png");
console.log("QR content:", content);
