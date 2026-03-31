import type { SiteStats, WeeklyAnalysis } from "@/lib/types";

import { sampleCaseStudies } from "@/lib/content-data/case-studies";
import { sampleCourse } from "@/lib/content-data/course";
import { heading, paragraph } from "@/lib/content-data/helpers";
import { sampleGlossary } from "@/lib/content-data/glossary";
import { sampleLessons } from "@/lib/content-data/lessons";

export const sampleWeeklyAnalyses: WeeklyAnalysis[] = [
  {
    title: "Analisa Mingguan: Emas Menunggu Data Tenaga Kerja AS",
    slug: "analisa-xauusd-minggu-31-maret-2026",
    publishDate: "2026-03-31",
    marketBiasSummary:
      "Bias mingguan netral-ke-bullish selama harga bertahan di atas area demand harian dan yield tidak kembali menanjak agresif.",
    educationalNotes: [
      "Fokus pada bagaimana market menilai data, bukan angka headline saja.",
      "Amati apakah resistance harian diterima atau hanya disentuh sesaat.",
      "Gunakan overlap London-New York untuk membaca follow-through.",
    ],
    linkedLessons: [
      "fundamental-penggerak-xauusd",
      "menggabungkan-technical-dan-fundamental",
      "framework-analisa-mandiri",
    ],
    body: [
      heading("Narasi utama minggu ini"),
      paragraph(
        "Pasar menunggu data tenaga kerja AS untuk menilai apakah pelemahan inflasi sebelumnya cukup kuat untuk mengubah ekspektasi suku bunga. Selama ketidakpastian ini belum selesai, emas berpotensi bergerak dua arah di sekitar level harian penting."
      ),
      heading("Apa yang perlu diamati"),
      paragraph(
        "Jika yield turun dan DXY gagal menguat, emas punya ruang melanjutkan rotasi naik. Namun bila data tenaga kerja terlalu kuat dan mendorong repricing hawkish, XAUUSD bisa kembali tertekan."
      ),
      heading("Fokus edukatif"),
      paragraph(
        "Minggu seperti ini cocok untuk melatih disiplin skenario: tunggu penerimaan harga, tandai invalidasi, dan bedakan reaksi awal dengan arah yang benar-benar dipertahankan market."
      ),
    ],
  },
  {
    title: "Analisa Mingguan: Konsolidasi Setelah Reli CPI",
    slug: "analisa-xauusd-minggu-24-maret-2026",
    publishDate: "2026-03-24",
    marketBiasSummary:
      "Bias jangka pendek mixed karena market sedang mencerna rally sebelumnya dan menunggu katalis baru dari pejabat bank sentral.",
    educationalNotes: [
      "Konsolidasi setelah rally tidak otomatis bearish.",
      "Lihat apakah pullback membentuk higher low atau justru distribusi.",
      "Likuiditas di high mingguan bisa menjadi magnet sebelum arah berikutnya jelas.",
    ],
    linkedLessons: [
      "trend-range-breakout",
      "support-resistance-dan-liquidity",
      "studi-kasus-multi-timeframe",
    ],
    body: [
      heading("Narasi utama minggu ini"),
      paragraph(
        "Setelah reli tajam dipicu repricing inflasi, emas kini bergerak lebih selektif. Fase ini sering membingungkan trader baru karena candle besar sudah berhenti, tetapi justru inilah momen penting untuk membaca apakah market sedang membangun kelanjutan atau distribusi."
      ),
      heading("Apa yang perlu diamati"),
      paragraph(
        "Jika pullback tertahan di atas support baru dan volume jual cepat melemah, market mungkin hanya mengisi ulang tenaga. Jika harga berkali-kali gagal melewati high sebelumnya, trader perlu waspada terhadap rotasi turun yang lebih dalam."
      ),
      heading("Fokus edukatif"),
      paragraph(
        "Jangan menganggap konsolidasi sebagai sinyal masuk otomatis. Gunakan struktur range, sesi market, dan agenda pidato pejabat The Fed untuk membaca konteks secara utuh."
      ),
    ],
  },
];

export const sampleStats: SiteStats = {
  modules: sampleCourse.modules.length,
  lessons: sampleLessons.length,
  caseStudies: sampleCaseStudies.length,
  glossaryTerms: sampleGlossary.length,
};
