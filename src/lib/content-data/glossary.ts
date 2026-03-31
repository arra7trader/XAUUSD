import type { GlossaryTerm } from "@/lib/types";

export const sampleGlossary: GlossaryTerm[] = [
  {
    term: "Candlestick",
    slug: "candlestick",
    category: "Technical",
    definition:
      "Representasi visual open, high, low, dan close pada satu periode waktu tertentu.",
    whyItMatters:
      "Candle menunjukkan bagaimana tekanan beli dan jual terjadi dalam satu sesi harga.",
  },
  {
    term: "Market Structure",
    slug: "market-structure",
    category: "Technical",
    definition:
      "Urutan swing high dan swing low yang membentuk tren naik, tren turun, atau range.",
    whyItMatters:
      "Struktur membantu menentukan siapa yang dominan dan kapan dominasi itu mulai retak.",
  },
  {
    term: "Liquidity Sweep",
    slug: "liquidity-sweep",
    category: "Technical",
    definition:
      "Gerakan harga yang menyapu area order tertunda di atas swing high atau di bawah swing low.",
    whyItMatters:
      "Sapuan likuiditas sering mendahului breakout valid atau reversal tajam pada emas.",
  },
  {
    term: "False Breakout",
    slug: "false-breakout",
    category: "Technical",
    definition:
      "Penembusan level penting yang gagal dipertahankan dan akhirnya kembali ke area sebelumnya.",
    whyItMatters:
      "Trader yang membedakan false breakout bisa menghindari entry terlambat dan membaca trap market.",
  },
  {
    term: "DXY",
    slug: "dxy",
    category: "Macro",
    definition:
      "Indeks yang mengukur kekuatan dolar AS terhadap sekeranjang mata uang utama.",
    whyItMatters:
      "Pelemahan atau penguatan DXY sering memberi konteks tambahan untuk bias XAUUSD.",
  },
  {
    term: "Real Yield",
    slug: "real-yield",
    category: "Macro",
    definition: "Imbal hasil obligasi setelah disesuaikan dengan inflasi.",
    whyItMatters:
      "Kenaikan real yield biasanya mengurangi daya tarik emas yang tidak memberikan kupon.",
  },
  {
    term: "CPI",
    slug: "cpi",
    category: "Macro",
    definition:
      "Consumer Price Index, indikator inflasi yang sangat diperhatikan pasar.",
    whyItMatters:
      "CPI mengubah ekspektasi kebijakan suku bunga dan langsung memengaruhi USD, yield, serta emas.",
  },
  {
    term: "NFP",
    slug: "nfp",
    category: "Macro",
    definition: "Non-Farm Payrolls, data tenaga kerja AS yang dirilis bulanan.",
    whyItMatters:
      "NFP dapat menggeser pandangan pasar terhadap kekuatan ekonomi dan langkah The Fed.",
  },
  {
    term: "FOMC",
    slug: "fomc",
    category: "Macro",
    definition:
      "Federal Open Market Committee, badan penentu kebijakan moneter The Fed.",
    whyItMatters:
      "Keputusan suku bunga dan konferensi pers FOMC sering menjadi katalis besar pada emas.",
  },
  {
    term: "Risk-Reward Ratio",
    slug: "risk-reward-ratio",
    category: "Risk",
    definition:
      "Perbandingan antara potensi rugi dan potensi untung pada satu skenario.",
    whyItMatters:
      "Rasio ini membantu menjaga kualitas setup dan ekspektasi hasil jangka panjang.",
  },
  {
    term: "Drawdown",
    slug: "drawdown",
    category: "Risk",
    definition:
      "Penurunan ekuitas akun dari puncak ke lembah sebelum pulih kembali.",
    whyItMatters:
      "Memahami drawdown membantu trader memilih ukuran risiko yang sanggup ditanggung.",
  },
  {
    term: "FOMO",
    slug: "fomo",
    category: "Behavior",
    definition:
      "Fear of Missing Out, dorongan emosional untuk mengejar gerakan harga karena takut tertinggal.",
    whyItMatters:
      "FOMO sering membuat trader masuk terlambat tanpa struktur atau invalidasi yang jelas.",
  },
];
