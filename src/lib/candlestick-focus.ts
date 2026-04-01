export type CandleBar = {
  open: number;
  close: number;
  high: number;
  low: number;
  tone: "bull" | "bear" | "neutral";
  note?: string;
};

export type PlaybookCard = {
  id: string;
  timeframe: string;
  title: string;
  angle: string;
  why: string;
  watch: string;
  clue: string;
  bars: CandleBar[];
};

export const focusPillars = [
  {
    title: "Candlestick bukan hafalan pola",
    text: "Yang penting bukan nama candle, tetapi konteksnya: muncul di level mana, setelah dorongan apa, dan apakah ada follow-through.",
  },
  {
    title: "XAUUSD M5 hidup dari ekspansi dan likuiditas",
    text: "Emas sering bergerak cepat saat sesi London-New York aktif, data AS keluar, atau likuiditas high-low sesi sedang disapu.",
  },
  {
    title: "Retrace tidak selalu bearish",
    text: "Sering kali retrace hanyalah jeda order flow setelah impulse. Kita harus baca kualitas pullback, bukan takut pada candle lawan pertama.",
  },
];

export const xauusdTraits = [
  {
    title: "M5 di emas sangat cepat berubah mood",
    text: "Karena gold aktif hampir 24 jam lewat futures dan spot, dorongan tajam bisa muncul tiba-tiba saat order besar masuk.",
  },
  {
    title: "Sweep high/low sesi sangat sering terjadi",
    text: "Asia high, London low, dan intraday equal highs-lows sering jadi sumber likuiditas sebelum arah sebenarnya muncul.",
  },
  {
    title: "US data sering jadi pemicu candle ekspansi",
    text: "Ketika pasar menilai ulang dolar dan yield, candle M5 emas bisa berubah dari tenang menjadi agresif dalam satu sampai dua bar.",
  },
];

export const m5Playbooks: PlaybookCard[] = [
  {
    id: "continuation-breakout",
    timeframe: "M5",
    title: "Breakout continuation yang valid",
    angle: "Harga naik karena breakout punya follow-through",
    why: "Biasanya muncul setelah area high disapu atau resistance ditembus, lalu candle bullish menutup dekat high dan bar berikutnya tidak langsung ditelan balik.",
    watch:
      "Pullback sehat sesudahnya biasanya kecil, overlap ringan, dan tidak menutup bersih kembali ke bawah origin breakout.",
    clue:
      "Kalau dua sampai tiga candle berikutnya tetap menjaga higher low, buyer masih memegang kontrol.",
    bars: [
      { open: 48, close: 42, high: 50, low: 38, tone: "bear" },
      { open: 41, close: 56, high: 60, low: 39, tone: "bull", note: "reclaim" },
      { open: 55, close: 72, high: 76, low: 54, tone: "bull", note: "breakout" },
      { open: 71, close: 78, high: 82, low: 68, tone: "bull" },
      { open: 76, close: 73, high: 79, low: 67, tone: "neutral" },
      { open: 73, close: 85, high: 89, low: 72, tone: "bull", note: "follow-through" },
    ],
  },
  {
    id: "healthy-pullback",
    timeframe: "M5",
    title: "Pullback sehat setelah candle ekspansi",
    angle: "Harga retrace karena market sedang menyeimbangkan dorongan",
    why: "Sesudah impulse besar, market sering butuh test ulang breakout origin. Pullback ini sering berisi candle kecil atau body lawan yang tidak terlalu dominan.",
    watch:
      "Selama candle lawan tidak close kuat menembus origin dan tidak menghapus higher low utama, retrace bisa dianggap sehat.",
    clue:
      "Yang dicari bukan candle merah pertama, tetapi apakah seller mampu mempertahankan acceptance di bawah area pullback.",
    bars: [
      { open: 38, close: 52, high: 55, low: 35, tone: "bull" },
      { open: 52, close: 74, high: 79, low: 50, tone: "bull", note: "impulse" },
      { open: 73, close: 66, high: 75, low: 62, tone: "bear" },
      { open: 66, close: 63, high: 68, low: 59, tone: "bear", note: "pullback" },
      { open: 63, close: 67, high: 70, low: 61, tone: "neutral" },
      { open: 67, close: 81, high: 84, low: 66, tone: "bull", note: "continuation" },
    ],
  },
  {
    id: "failed-breakout",
    timeframe: "M5",
    title: "Failed breakout yang berubah jadi trap",
    angle: "Harga turun karena breakout tidak accepted",
    why: "Kadang candle bullish terlihat kuat, tetapi candle berikutnya gagal follow-through lalu ditelan balik masuk range. Itu tanda buyer telat bisa terjebak.",
    watch:
      "Saat bar lawan menutup tegas kembali ke bawah level breakout, peluang retrace dalam bisa berubah menjadi reversal intraday.",
    clue:
      "Ini bukan soal wick semata, tetapi soal market tidak menerima harga baru di luar range.",
    bars: [
      { open: 44, close: 47, high: 49, low: 40, tone: "neutral" },
      { open: 47, close: 69, high: 74, low: 45, tone: "bull", note: "fake break" },
      { open: 69, close: 65, high: 71, low: 61, tone: "neutral" },
      { open: 64, close: 51, high: 66, low: 49, tone: "bear", note: "failed" },
      { open: 51, close: 45, high: 53, low: 41, tone: "bear" },
      { open: 45, close: 39, high: 46, low: 36, tone: "bear", note: "trap unwind" },
    ],
  },
  {
    id: "sweep-reversal",
    timeframe: "M5",
    title: "Sweep low lalu reversal",
    angle: "Harga naik karena seller kehabisan follow-through di bawah low",
    why: "Saat low penting disapu tetapi market cepat reclaim area lama, banyak seller baru malah terjebak di harga terburuk dan buyer mendapatkan bahan bakar reversal.",
    watch:
      "Candle konfirmasi biasanya bullish close yang merebut kembali midpoint area sapuan, lalu retest tipis yang tidak jebol lagi.",
    clue:
      "Pada emas, setup seperti ini sering muncul sesudah stop hunt di awal sesi aktif atau menjelang data.",
    bars: [
      { open: 62, close: 56, high: 64, low: 54, tone: "bear" },
      { open: 56, close: 49, high: 58, low: 45, tone: "bear" },
      { open: 49, close: 43, high: 50, low: 33, tone: "bear", note: "sweep" },
      { open: 42, close: 57, high: 60, low: 41, tone: "bull", note: "reclaim" },
      { open: 57, close: 54, high: 58, low: 51, tone: "neutral" },
      { open: 54, close: 68, high: 71, low: 53, tone: "bull", note: "reversal" },
    ],
  },
];

export const learningSteps = [
  {
    title: "1. Lihat dorongan awal",
    text: "Apakah candle ekspansi muncul di area penting, atau hanya di tengah range yang berisik?",
  },
  {
    title: "2. Nilai follow-through",
    text: "Candle kuat tanpa lanjutan sering hanya emosi sesaat. Candle kuat dengan lanjutan lebih layak dipercaya.",
  },
  {
    title: "3. Bedakan retrace sehat vs rusak",
    text: "Retrace sehat cenderung lebih lambat, lebih kecil, dan gagal close menembus origin utama.",
  },
  {
    title: "4. Pastikan acceptance",
    text: "Kalau market accepted di atas breakout atau di bawah breakdown, arah lebih bersih. Kalau tidak, waspada trap.",
  },
];

export const expertSources = [
  {
    title: "Al Brooks",
    href: "https://www.brookstradingcourse.com/price-action-trading-books/",
    reason:
      "Sumber kuat untuk membaca candle secara bar-by-bar, breakout, pullback, dan follow-through tanpa bergantung pada indikator.",
  },
  {
    title: "Steve Nison / Candlecharts",
    href: "https://candlecharts.com/",
    reason:
      "Fondasi candlestick Jepang yang membantu mengenali bahasa candle, tetapi tetap harus dibaca dalam konteks.",
  },
  {
    title: "Adam Grimes",
    href: "https://catalogimages.wiley.com/images/db/pdf/9781118115121.excerpt.pdf",
    reason:
      "Sangat berguna untuk struktur market, location, trend, dan kapan pattern punya keunggulan statistik yang lebih masuk akal.",
  },
  {
    title: "Wyckoff Analytics",
    href: "https://www.wyckoffanalytics.com/wyckoff-method/",
    reason:
      "Penting untuk memahami spring, upthrust, akumulasi, distribusi, dan kenapa sweep likuiditas sering mendahului reversal.",
  },
  {
    title: "CME Gold Futures",
    href: "https://www.cmegroup.com/trading/metals/files/fact-card-gold-futures-options.pdf",
    reason:
      "Valid untuk memahami bagaimana emas diperdagangkan hampir 24 jam dan kenapa futures ikut membentuk price discovery.",
  },
  {
    title: "LBMA Guide",
    href: "https://cdn.lbma.org.uk/downloads/Publications/LBMA-The-Guide-2017-v1.pdf",
    reason:
      "Menjelaskan plumbing market bullion OTC yang menjadi tulang punggung besar dari harga spot emas global.",
  },
  {
    title: "World Gold Council",
    href: "https://www.gold.org/goldhub/research/gold-and-us-interest-rates-a-reality-check",
    reason:
      "Memberi kerangka kenapa emas tidak bisa dibaca hanya dari candle; real yield dan USD sering menjadi latar belakang candle M5 yang agresif.",
  },
];

export const inferenceNote =
  "Interpretasi M5 di website ini adalah sintesis dari sumber-sumber di atas yang diterapkan khusus ke XAUUSD. Jadi framework M5-nya adalah inferensi terarah dari referensi expert dan struktur market emas, bukan kutipan mentah dari satu buku saja.";
