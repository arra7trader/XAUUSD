import type { CaseStudy } from "@/lib/types";

export const sampleCaseStudies: CaseStudy[] = [
  {
    title: "Asia Breakout Continuation ke London",
    slug: "asia-breakout-continuation",
    direction: "bullish",
    timeframe: "H1 ke M15",
    summary:
      "Range sempit sesi Asia pecah ke atas, lalu London mempertahankan retest dan mempercepat impuls naik.",
    thesis:
      "Breakout valid terjadi karena tekanan beli sudah dibangun sejak Asia, resistance diambil bersih, dan sesi London menerima harga di atas level lama.",
    triggerFactors: [
      "Higher low berulang di bawah resistance Asia",
      "Penutupan H1 kuat di atas range",
      "Retest London tertahan lalu dilanjutkan impuls",
    ],
    invalidationReason:
      "Skenario bullish gagal bila harga kembali diterima di bawah high range Asia dan membentuk lower high intraday.",
    embedNote:
      "Amati simbol XAUUSD pada H1 dan M15. Tandai high-range Asia lalu lihat apakah harga bertahan di atasnya saat London masuk.",
    lessonSlugs: [
      "trend-range-breakout",
      "support-resistance-dan-liquidity",
      "sesi-market-dan-timing",
    ],
  },
  {
    title: "CPI Rally Karena Repricing Ekspektasi",
    slug: "cpi-rally-repricing",
    direction: "bullish",
    timeframe: "Daily ke H1",
    summary:
      "Rilis CPI yang lebih lunak memicu pelemahan USD dan penurunan yield, membuat emas rally dengan follow-through beberapa sesi.",
    thesis:
      "Gerak naik bukan hanya reaksi headline, tetapi repricing terhadap jalur suku bunga yang membuat pasar kembali memburu aset defensif tanpa imbal hasil.",
    triggerFactors: [
      "CPI di bawah ekspektasi pasar",
      "DXY dan yield Treasury turun bersama",
      "Harga menembus resistance harian dan bertahan",
    ],
    invalidationReason:
      "Bias bullish melemah jika harga gagal bertahan di atas resistance harian yang sudah diambil atau yield kembali melonjak agresif.",
    embedNote:
      "Bandingkan reaksi XAUUSD dengan DXY dan US10Y pada hari rilis CPI. Fokus pada pergeseran ekspektasi, bukan hanya candle pertama.",
    lessonSlugs: [
      "pengenalan-xauusd",
      "fundamental-penggerak-xauusd",
      "menggabungkan-technical-dan-fundamental",
    ],
  },
  {
    title: "FOMC Fade Setelah Spike Awal",
    slug: "fomc-fade-after-spike",
    direction: "bearish",
    timeframe: "M30 ke M5",
    summary:
      "Emas melonjak sesaat setelah rilis, menyapu high likuiditas, lalu berbalik turun ketika konferensi pers memperkuat nada hawkish.",
    thesis:
      "Spike awal mengambil likuiditas dan memancing breakout trader, tetapi penerimaan harga gagal bertahan karena narasi kebijakan tetap ketat.",
    triggerFactors: [
      "Sapuan di atas high intraday sebelum rejection",
      "Konferensi pers mengubah pembacaan pasar menjadi lebih hawkish",
      "Harga kembali masuk range dan mematahkan higher low pendek",
    ],
    invalidationReason:
      "Skenario fade gagal jika harga diterima di atas high sapuan dan membangun base baru dengan volume partisipasi lanjutan.",
    embedNote:
      "Lihat replay saat rilis FOMC: tandai high likuiditas, bandingkan candle rilis dan konferensi pers, lalu amati perubahan struktur pada M15-M5.",
    lessonSlugs: [
      "candlestick-dan-market-structure",
      "support-resistance-dan-liquidity",
      "risk-management-dan-psikologi",
    ],
  },
];
