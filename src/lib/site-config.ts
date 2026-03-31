export const siteConfig = {
  name: "XAUUSD Extreme Expert",
  description:
    "War room analisa XAUUSD berbahasa Indonesia untuk membaca market structure, liquidity, key levels, dan skenario arah harga dari naked chart.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  chartSymbol: "OANDA:XAUUSD",
  disclaimer:
    "Semua konten di website ini bersifat analisa edukatif dan tidak menjamin arah harga di masa depan. Gunakan sebagai alat berpikir, bukan kepastian atau nasihat finansial.",
} as const;
