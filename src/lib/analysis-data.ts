export type BiasState = "bullish" | "bearish" | "neutral";

export type StructureState = "trend-bullish" | "trend-bearish" | "range" | "transition";

export type KeyLevel = {
  label: string;
  zone: string;
  intent: string;
  type: "attack" | "defense" | "liquidity";
};

export type Scenario = {
  title: string;
  bias: BiasState;
  trigger: string;
  confirmation: string;
  invalidation: string;
};

export type DailyBiasBoard = {
  sessionFocus: string;
  activeBias: BiasState;
  confidence: "low" | "medium" | "high";
  marketState: StructureState;
  thesis: string;
  bullishPath: string[];
  bearishPath: string[];
  neutralPath: string[];
  invalidation: string;
  morningChecklist: string[];
  macroInputs: string[];
  assistantPrompt: string;
};

export type JournalEntry = {
  date: string;
  title: string;
  marketState: StructureState;
  thesis: string;
  whatToWatch: string[];
  lesson: string;
};

export const currentWarRoom = {
  asOf: "2026-04-01",
  dominantBias: "neutral" as BiasState,
  dominantStructure: "transition" as StructureState,
  narrative:
    "XAUUSD sedang lebih cocok dibaca sebagai market yang mencari acceptance baru setelah rotasi tajam. Fokus utama bukan menebak arah satu candle, tetapi menilai apakah sapuan terakhir benar-benar diterima atau hanya menjadi fake expansion.",
  primaryDrivers: [
    "Respons XAUUSD terhadap real yields dan DXY setelah repricing ekspektasi suku bunga.",
    "Perilaku harga di sekitar previous day high/low dan sesi London-New York overlap.",
    "Kualitas follow-through setelah sweep liquidity, bukan hanya break level mentah.",
  ],
  marketNotes: [
    "Range tinggi-rendah sesi Asia sering menjadi titik baca pertama untuk expansion harian.",
    "Jika breakout tidak mendapat body lanjutan pada H1, perlakukan sebagai warning, bukan confirmation.",
    "XAUUSD paling jujur saat harga accepted di luar range lalu bertahan di retest, bukan saat spike pertama.",
  ],
};

export const dailyBiasBoard: DailyBiasBoard = {
  sessionFocus: "London ke New York overlap",
  activeBias: "neutral",
  confidence: "medium",
  marketState: "transition",
  thesis:
    "Bias aktif masih neutral karena market belum memberi acceptance tegas sesudah sweep terakhir. Prioritas utama adalah membaca apakah reclaim intraday mampu dipertahankan atau justru kembali ditelan market.",
  bullishPath: [
    "Low intraday tersapu lalu harga cepat reclaim ke atas area reclaim zone.",
    "Higher low M15-H1 terbentuk dan buyer mampu hold retest kedua.",
    "High sesi aktif pecah dengan body bersih dan tidak langsung dibuang.",
  ],
  bearishPath: [
    "Breakout ke atas gagal hold dan harga kembali accepted di bawah resistance.",
    "Lower high muncul setelah retest lemah di H1.",
    "Low range harian pecah dengan continuation body, bukan hanya wick.",
  ],
  neutralPath: [
    "Harga tetap bolak-balik di tengah range tanpa follow-through di kedua sisi.",
    "Expansion awal sesi langsung ditelan balik oleh candle berikutnya.",
    "Tidak ada acceptance di atas atau di bawah area kunci sebelum data atau sesi aktif selesai.",
  ],
  invalidation:
    "Semua bias sementara harus dibatalkan jika market menunjukkan acceptance tegas di sisi yang berlawanan dan retest berikutnya bertahan rapi.",
  morningChecklist: [
    "Tandai previous day high, previous day low, dan high-low Asia.",
    "Nilai apakah daily sedang trend, range, atau transition.",
    "Cari liquidity obvious: equal highs, equal lows, atau untouched swing.",
    "Catat event makro hari ini: data AS, pidato bank sentral, atau risk headline.",
    "Jangan putuskan arah sebelum melihat bagaimana market merespons level kunci saat sesi aktif.",
  ],
  macroInputs: [
    "DXY: apakah mendukung emas atau justru menekan reclaim.",
    "US real yields / Treasury yields: apakah memberi tekanan tambahan.",
    "Kalender data AS: CPI, NFP, FOMC, PCE, ISM, claims.",
    "Risk sentiment: geopolitik, risk-off flows, atau equity stress.",
  ],
  assistantPrompt:
    "Baca XAUUSD dengan urutan: market state, key levels, liquidity sweep, acceptance or rejection, lalu susun bullish, bearish, dan neutral scenario beserta invalidasinya.",
};

export const structureMap = [
  {
    title: "Trend Bullish",
    reading:
      "Higher high dan higher low masih utuh, pullback dangkal, dan resistance lama berubah menjadi area pertahanan.",
    danger:
      "Jangan FOMO jika breakout sudah terlalu jauh dari base. Tunggu retest, sweep kecil, atau higher low baru.",
  },
  {
    title: "Trend Bearish",
    reading:
      "Lower high dan lower low masih dominan, bounce lemah, dan reclaim ke atas cepat dijual kembali.",
    danger:
      "Jangan buru-buru sell setelah flush panjang jika market baru saja menyapu low besar tanpa follow-through.",
  },
  {
    title: "Range",
    reading:
      "Harga bolak-balik dalam value area, breakout cepat gagal, dan candle impuls kehilangan tenaga di tepi range.",
    danger:
      "Jangan menyebut semua break sebagai continuation. Range butuh acceptance di luar batas, bukan hanya wick.",
  },
  {
    title: "Transition",
    reading:
      "Terjadi setelah sweep besar, news impulse, atau saat struktur lama retak tetapi struktur baru belum mapan.",
    danger:
      "Ini fase paling rawan overconfidence. Tugas utama adalah menunggu market menunjukkan sisi mana yang benar-benar diterima.",
  },
];

export const keyLevels: KeyLevel[] = [
  {
    label: "Previous Week High",
    zone: "Area high mingguan terakhir",
    intent: "Magnet likuiditas atas. Jika disapu lalu gagal hold, waspadai distribution intraday.",
    type: "liquidity",
  },
  {
    label: "Previous Day Low",
    zone: "Area low harian sebelumnya",
    intent: "Level defensif seller atau target sapuan sebelum reclaim bullish.",
    type: "liquidity",
  },
  {
    label: "Asia Range High",
    zone: "Puncak range sesi Asia",
    intent: "Sering jadi titik breakout awal London. Valid jika ada acceptance, rawan trap jika langsung masuk lagi ke range.",
    type: "attack",
  },
  {
    label: "London Open Reclaim Zone",
    zone: "Area yang direclaim kuat setelah open London",
    intent: "Jika harga kembali diterima di area ini, peluang continuation harian biasanya membesar.",
    type: "defense",
  },
  {
    label: "H4 Breakout Origin",
    zone: "Base sebelum impuls H4",
    intent: "Area penting untuk menilai apakah impuls terakhir hanya correction atau benar-benar berganti arah.",
    type: "defense",
  },
  {
    label: "Equal Highs / Equal Lows",
    zone: "Kumpulan high/low setara",
    intent: "Area order obvious. Sangat sering menjadi target sweep sebelum move sebenarnya dimulai.",
    type: "liquidity",
  },
];

export const nakedChartPlaybook = [
  {
    title: "Sweep and Reclaim",
    explanation:
      "Fokus pada sapuan liquidity yang langsung kehilangan tenaga lalu direclaim. Bukan wick-nya yang penting, tetapi apakah market accepted kembali ke area lama.",
  },
  {
    title: "Break and Hold",
    explanation:
      "Breakout baru dianggap berkualitas jika harga diterima di luar level, retest tertahan, dan lawan gagal merebut lagi area lama.",
  },
  {
    title: "Failure to Follow Through",
    explanation:
      "Jika impuls awal terlihat kuat tetapi candle lanjutan lemah dan harga cepat masuk lagi ke range, baca itu sebagai warning bahwa move bisa gagal total.",
  },
  {
    title: "Session Expansion",
    explanation:
      "Bandingkan range Asia dengan ekspansi London dan validasi New York. XAUUSD sering memperlihatkan niat asli pada urutan tiga fase ini.",
  },
];

export const scenarios: Scenario[] = [
  {
    title: "Bullish Reclaim Scenario",
    bias: "bullish",
    trigger:
      "Harga menyapu low intraday lalu kembali accepted di atas level reclaim utama.",
    confirmation:
      "Higher low terbentuk di M15-H1 dan breakout berikutnya tidak langsung dibuang.",
    invalidation:
      "Harga kembali diterima di bawah zone reclaim dan lower high baru muncul.",
  },
  {
    title: "Bearish Failed Breakout Scenario",
    bias: "bearish",
    trigger:
      "Harga menembus resistance penting tetapi gagal hold dan masuk lagi ke range.",
    confirmation:
      "Lower high terbentuk, high sesi aktif gagal diretake, lalu low range pecah dengan acceptance.",
    invalidation:
      "Resistance kembali direclaim dengan impuls dan retest buyer bertahan.",
  },
  {
    title: "Neutral Wait Scenario",
    bias: "neutral",
    trigger:
      "Harga masih balance di tengah range, belum ada acceptance di atas atau di bawah area penting.",
    confirmation:
      "Tidak ada follow-through pada kedua sisi dan candle besar terus ditelan market.",
    invalidation:
      "Salah satu sisi akhirnya accepted dan retest sukses menunjukkan directional control.",
  },
];

export const journalEntries: JournalEntry[] = [
  {
    date: "2026-04-01",
    title: "Transition After Sweep",
    marketState: "transition",
    thesis:
      "Sweep besar belum otomatis berarti reversal. Yang dicari adalah apakah market mampu hold area reclaim setelah likuiditas bawah diambil.",
    whatToWatch: [
      "Apakah London menerima harga di atas reclaim zone.",
      "Apakah New York memperkuat atau justru menelan expansion awal.",
      "Apakah DXY dan yield mengonfirmasi perubahan selera risiko.",
    ],
    lesson:
      "Move terbesar sering datang sesudah acceptance, bukan saat wick dramatis pertama muncul.",
  },
  {
    date: "2026-03-31",
    title: "Range Expansion Without Acceptance",
    marketState: "range",
    thesis:
      "Breakout intraday terlihat agresif tetapi kehilangan tenaga karena tidak ada continuation body pada H1.",
    whatToWatch: [
      "Seberapa cepat harga kembali ke tengah range.",
      "Apakah breakout trader terjebak di puncak.",
      "Apakah low range kemudian menjadi target rotasi berikutnya.",
    ],
    lesson:
      "Pada XAUUSD, expansion tanpa acceptance sering lebih informatif sebagai trap daripada sebagai trend signal.",
  },
  {
    date: "2026-03-28",
    title: "Higher Low That Actually Matters",
    marketState: "trend-bullish",
    thesis:
      "Higher low baru dianggap kuat jika muncul setelah reclaim level penting dan seller gagal menekan kembali ke origin area.",
    whatToWatch: [
      "Jarak retracement terhadap impuls sebelumnya.",
      "Reaksi buyer di retest kedua.",
      "Kemampuan market menembus high minor dengan body bersih.",
    ],
    lesson:
      "Tidak semua higher low penting. Higher low terbaik lahir di area yang memang punya alasan auction, bukan sekadar pullback acak.",
  },
];

export const referencePillars = [
  "LBMA + CME untuk memahami struktur pasar emas dan price discovery.",
  "World Gold Council untuk driver emas seperti real yields, USD, dan risk sentiment.",
  "Wyckoff, Al Brooks, dan Adam Grimes untuk membaca naked chart, liquidity, dan market structure.",
];
