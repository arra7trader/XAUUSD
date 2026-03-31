import type { Course, LessonPreview } from "@/lib/types";

export const lessonPreviews: LessonPreview[] = [
  {
    title: "Pengenalan XAUUSD dan Karakter Market Emas",
    slug: "pengenalan-xauusd",
    level: "Pemula",
    summary:
      "Memahami apa itu XAUUSD, kenapa emas bereaksi kuat terhadap USD, yield, dan sentimen risiko global.",
    estimatedMinutes: 18,
  },
  {
    title: "Candlestick dan Market Structure",
    slug: "candlestick-dan-market-structure",
    level: "Pemula",
    summary:
      "Belajar membaca candle, swing high/low, impuls, koreksi, dan konteks sebelum masuk ke setup.",
    estimatedMinutes: 22,
  },
  {
    title: "Trend, Range, Breakout, dan False Breakout",
    slug: "trend-range-breakout",
    level: "Pemula-Menengah",
    summary:
      "Membedakan kondisi pasar yang sehat, pasar ranging, serta kapan breakout punya tenaga nyata.",
    estimatedMinutes: 24,
  },
  {
    title: "Support, Resistance, Supply, Demand, dan Liquidity",
    slug: "support-resistance-dan-liquidity",
    level: "Menengah",
    summary:
      "Mengenali area penting chart dan memahami kenapa harga sering menyapu level sebelum bergerak.",
    estimatedMinutes: 26,
  },
  {
    title: "Sesi Market dan Timing XAUUSD",
    slug: "sesi-market-dan-timing",
    level: "Menengah",
    summary:
      "Melihat hubungan volatilitas emas dengan sesi Asia, London, New York, dan overlap-nya.",
    estimatedMinutes: 16,
  },
  {
    title: "Faktor Fundamental Penggerak XAUUSD",
    slug: "fundamental-penggerak-xauusd",
    level: "Menengah",
    summary:
      "Menghubungkan pergerakan emas dengan CPI, NFP, FOMC, real yield, DXY, dan geopolitik.",
    estimatedMinutes: 28,
  },
  {
    title: "Menggabungkan Technical dan Fundamental",
    slug: "menggabungkan-technical-dan-fundamental",
    level: "Menengah-Lanjut",
    summary:
      "Membangun narasi market dari bias makro lalu mencari eksekusi dengan struktur harga yang jelas.",
    estimatedMinutes: 25,
  },
  {
    title: "Risk Management dan Psikologi Trader Emas",
    slug: "risk-management-dan-psikologi",
    level: "Menengah-Lanjut",
    summary:
      "Menentukan risiko per setup, mengelola drawdown, dan menjaga disiplin saat market sangat cepat.",
    estimatedMinutes: 18,
  },
  {
    title: "Studi Kasus Multi-Timeframe",
    slug: "studi-kasus-multi-timeframe",
    level: "Lanjut",
    summary:
      "Melatih cara top-down analysis dari weekly sampai intraday agar pembacaan arah lebih utuh.",
    estimatedMinutes: 20,
  },
  {
    title: "Framework Analisa Mandiri XAUUSD",
    slug: "framework-analisa-mandiri",
    level: "Lanjut",
    summary:
      "Merangkai checklist harian agar keputusan analisa tidak bergantung pada firasat atau emosi.",
    estimatedMinutes: 21,
  },
];

export const sampleCourse: Course = {
  title: "Roadmap Belajar XAUUSD Extreme Expert",
  slug: "xauusd-extreme-expert",
  summary:
    "Kurikulum berjenjang untuk memahami karakter XAUUSD dari nol sampai mampu menyusun bias dan skenario analisa mandiri.",
  heroLabel: "Belajar chart emas sampai paham kenapa ia bergerak",
  modules: [
    {
      title: "Fondasi Pasar Emas",
      slug: "fondasi-pasar-emas",
      order: 1,
      summary:
        "Dasar memahami instrumen XAUUSD, sifat pergerakannya, dan hubungan awal dengan sentimen makro.",
      lessons: [lessonPreviews[0]],
    },
    {
      title: "Struktur Harga",
      slug: "struktur-harga",
      order: 2,
      summary:
        "Membaca candle, swing, impuls, dan koreksi agar keputusan tidak diambil dari satu candle saja.",
      lessons: [lessonPreviews[1], lessonPreviews[2]],
    },
    {
      title: "Area dan Likuiditas",
      slug: "area-dan-likuiditas",
      order: 3,
      summary:
        "Menentukan level yang penting dan memahami logika sapuan likuiditas sebelum breakout valid.",
      lessons: [lessonPreviews[3]],
    },
    {
      title: "Timing Market",
      slug: "timing-market",
      order: 4,
      summary:
        "Menyesuaikan ekspektasi volatilitas berdasarkan sesi market dan jadwal rilis data penting.",
      lessons: [lessonPreviews[4]],
    },
    {
      title: "Driver Fundamental",
      slug: "driver-fundamental",
      order: 5,
      summary:
        "Menghubungkan narasi emas dengan suku bunga, dolar AS, inflasi, data tenaga kerja, dan geopolitik.",
      lessons: [lessonPreviews[5]],
    },
    {
      title: "Konfluensi Analisa",
      slug: "konfluensi-analisa",
      order: 6,
      summary:
        "Menggabungkan bias makro dan struktur teknikal agar skenario punya alasan yang kuat.",
      lessons: [lessonPreviews[6]],
    },
    {
      title: "Disiplin Trader",
      slug: "disiplin-trader",
      order: 7,
      summary:
        "Fokus pada proteksi modal, probabilitas, dan pengendalian emosi saat volatilitas emas membesar.",
      lessons: [lessonPreviews[7]],
    },
    {
      title: "Praktik Kasus Nyata",
      slug: "praktik-kasus-nyata",
      order: 8,
      summary:
        "Membiasakan top-down analysis lewat contoh skenario bullish, bearish, dan mixed.",
      lessons: [lessonPreviews[8], lessonPreviews[9]],
    },
  ],
};
