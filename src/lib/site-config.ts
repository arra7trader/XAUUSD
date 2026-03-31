export const siteConfig = {
  name: "XAUUSD Extreme Expert",
  description:
    "Platform belajar XAUUSD berbahasa Indonesia untuk memahami candlestick, market structure, faktor fundamental, dan alasan chart emas bergerak naik atau turun.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  chartSymbol: "OANDA:XAUUSD",
  disclaimer:
    "Semua materi di website ini bersifat edukasi dan bukan nasihat finansial, sinyal trading, atau ajakan transaksi.",
} as const;
