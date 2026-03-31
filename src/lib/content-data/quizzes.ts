import type { Quiz } from "@/lib/types";

export const sampleQuizzes: Quiz[] = [
  {
    title: "Quiz Struktur Pasar",
    slug: "quiz-struktur-pasar",
    summary:
      "Menguji pemahaman tentang candle, market structure, breakout, dan false breakout.",
    lessonSlugs: [
      "candlestick-dan-market-structure",
      "trend-range-breakout",
      "support-resistance-dan-liquidity",
    ],
    questions: [
      {
        id: "q1",
        prompt: "Apa ciri utama tren naik yang sehat?",
        choices: [
          "Higher high dan higher low konsisten",
          "Semua candle bullish tanpa retracement",
          "Harga selalu di atas open mingguan",
          "Volume selalu turun",
        ],
        correctIndex: 0,
        explanation:
          "Tren naik yang sehat terlihat dari struktur higher high dan higher low, bukan dari warna candle semata.",
      },
      {
        id: "q2",
        prompt: "False breakout paling sering terjadi ketika...",
        choices: [
          "Harga menembus level lalu gagal diterima dan kembali masuk range",
          "Harga menutup kuat di atas resistance dan retest berhasil",
          "Ada tiga candle bullish berurutan",
          "Spread mengecil saat sesi Asia",
        ],
        correctIndex: 0,
        explanation:
          "Breakout palsu terjadi saat sapuan level tidak diikuti penerimaan harga dan market kembali ke area sebelumnya.",
      },
      {
        id: "q3",
        prompt: "Mengapa satu pola engulfing tidak cukup dijadikan alasan entry?",
        choices: [
          "Karena pola harus dibaca bersama lokasi, struktur, dan konteks",
          "Karena engulfing tidak pernah berhasil",
          "Karena hanya valid di timeframe weekly",
          "Karena wajib ada indikator RSI",
        ],
        correctIndex: 0,
        explanation:
          "Nilai pola candle naik jika muncul di area dan konteks yang tepat, bukan karena bentuknya saja.",
      },
    ],
  },
  {
    title: "Quiz Fundamental XAUUSD",
    slug: "quiz-fundamental-xauusd",
    summary:
      "Menguji hubungan emas dengan yield, USD, data ekonomi, dan ekspektasi pasar.",
    lessonSlugs: [
      "pengenalan-xauusd",
      "fundamental-penggerak-xauusd",
      "menggabungkan-technical-dan-fundamental",
    ],
    questions: [
      {
        id: "q1",
        prompt: "Kenaikan real yield AS biasanya berdampak bagaimana pada emas?",
        choices: [
          "Cenderung menekan emas",
          "Pasti membuat emas naik",
          "Tidak ada hubungan sama sekali",
          "Hanya berdampak pada sesi Asia",
        ],
        correctIndex: 0,
        explanation:
          "Real yield yang naik membuat biaya peluang memegang emas lebih tinggi sehingga bias emas sering melemah.",
      },
      {
        id: "q2",
        prompt: "Kenapa data CPI bisa menggerakkan XAUUSD dengan kuat?",
        choices: [
          "Karena CPI memengaruhi ekspektasi inflasi dan arah suku bunga",
          "Karena CPI hanya dibaca trader retail",
          "Karena CPI menentukan spread broker",
          "Karena CPI mengubah jam buka pasar",
        ],
        correctIndex: 0,
        explanation:
          "CPI memengaruhi cara pasar menilai langkah The Fed, dan itu berdampak ke USD, yield, serta emas.",
      },
      {
        id: "q3",
        prompt: "Jika data bagus tetapi emas naik, kesimpulan paling matang adalah...",
        choices: [
          "Pasar mungkin sudah mem-price skenario lebih hawkish sebelum rilis",
          "Data pasti salah",
          "Chart emas tidak bisa dianalisis",
          "Trader harus langsung mengejar buy tanpa konfirmasi",
        ],
        correctIndex: 0,
        explanation:
          "Reaksi pasar bergantung pada perbedaan antara ekspektasi dan realisasi, bukan sekadar headline data.",
      },
    ],
  },
  {
    title: "Quiz Risk dan Psikologi",
    slug: "quiz-risk-psikologi",
    summary:
      "Menguji kebiasaan proteksi modal dan disiplin eksekusi saat menghadapi volatilitas emas.",
    lessonSlugs: ["risk-management-dan-psikologi"],
    questions: [
      {
        id: "q1",
        prompt: "Langkah paling sehat setelah dua kerugian beruntun adalah...",
        choices: [
          "Meninjau ulang proses dan menjaga risiko tetap konsisten",
          "Melipatgandakan lot agar cepat balik modal",
          "Masuk ulang tanpa analisa supaya tidak tertinggal",
          "Menghapus stop loss",
        ],
        correctIndex: 0,
        explanation:
          "Konsistensi risiko dan evaluasi proses menjaga akun dari spiral overtrading.",
      },
      {
        id: "q2",
        prompt: "Mengapa ukuran posisi pada XAUUSD perlu disiplin ekstra?",
        choices: [
          "Karena volatilitas emas bisa membesar sangat cepat",
          "Karena emas tidak bisa dipasang stop loss",
          "Karena spread selalu tetap",
          "Karena emas hanya cocok untuk scalping",
        ],
        correctIndex: 0,
        explanation:
          "Emas dapat bergerak tajam dalam waktu singkat sehingga eksposur berlebihan sangat berisiko.",
      },
      {
        id: "q3",
        prompt: "Checklist sebelum entry membantu karena...",
        choices: [
          "Mengurangi keputusan impulsif dan memastikan alasan analisa jelas",
          "Membuat semua posisi pasti profit",
          "Menggantikan kebutuhan membaca chart",
          "Membuat stop loss tidak diperlukan",
        ],
        correctIndex: 0,
        explanation:
          "Checklist bukan jaminan profit, tetapi membantu menjaga kualitas keputusan tetap terukur.",
      },
    ],
  },
  {
    title: "Quiz Framework Analisa",
    slug: "quiz-framework-analisa",
    summary:
      "Menguji kemampuan merangkai bias, level, timing, dan invalidasi menjadi satu skenario utuh.",
    lessonSlugs: [
      "studi-kasus-multi-timeframe",
      "framework-analisa-mandiri",
    ],
    questions: [
      {
        id: "q1",
        prompt: "Urutan top-down analysis yang paling sehat adalah...",
        choices: [
          "Weekly/Daily untuk konteks, lalu H4/H1 untuk momentum, lalu intraday untuk detail",
          "M1 dulu baru weekly",
          "Langsung M5 karena paling cepat",
          "Semua timeframe dianggap sama",
        ],
        correctIndex: 0,
        explanation:
          "Konteks selalu lebih aman dibangun dari timeframe besar sebelum turun ke eksekusi.",
      },
      {
        id: "q2",
        prompt: "Apa fungsi invalidasi dalam framework analisa?",
        choices: [
          "Menentukan titik saat skenario tidak lagi valid",
          "Membuat target profit lebih besar",
          "Menghilangkan kebutuhan risk management",
          "Menandai sesi market terbaik untuk scalping",
        ],
        correctIndex: 0,
        explanation:
          "Invalidasi menjaga analis tetap objektif ketika pasar bergerak berlawanan dengan skenario.",
      },
      {
        id: "q3",
        prompt: "Mengapa dokumentasi proses analisa penting?",
        choices: [
          "Agar bisa membedakan salah bias, salah timing, atau salah manajemen risiko",
          "Agar chart bergerak sesuai rencana",
          "Agar tidak perlu membaca berita lagi",
          "Agar semua entry punya rasio risiko yang sama",
        ],
        correctIndex: 0,
        explanation:
          "Catatan proses membantu evaluasi berkelanjutan dan memperbaiki keputusan di masa depan.",
      },
    ],
  },
];
