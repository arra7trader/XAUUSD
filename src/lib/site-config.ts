export const siteConfig = {
  name: "XAUUSD Extreme Expert",
  description:
    "Website berbahasa Indonesia untuk belajar expert candlestick XAUUSD: M5 price action, continuation, retrace, pullback, dan flow harga emas.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  chartSymbol: "OANDA:XAUUSD",
  disclaimer:
    "Semua konten di website ini bersifat analisa edukatif dan tidak menjamin arah harga di masa depan. Gunakan sebagai alat berpikir, bukan kepastian atau nasihat finansial.",
} as const;
