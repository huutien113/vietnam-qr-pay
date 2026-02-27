import fs from "fs";
import QRCode from "qrcode";
import { QRPay, BanksObject } from "vietnam-qr-pay";

// Ví dụ VietQR động giống README
const qrPay = QRPay.initVietQR({
  bankBin: BanksObject.acb.bin,
  bankNumber: "257678859",
  amount: "10000",
  purpose: "Chuyen tien",
});

const content = qrPay.build(); // chuỗi EMV

fs.mkdirSync("artifacts", { recursive: true });
await QRCode.toFile("artifacts/vietqr.png", content, { errorCorrectionLevel: "M" });

console.log("Generated artifacts/vietqr.png");
console.log("QR content:", content);
