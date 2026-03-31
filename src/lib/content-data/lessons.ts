import type { Lesson } from "@/lib/types";

import { lessonPreviews } from "@/lib/content-data/course";
import { heading, paragraph } from "@/lib/content-data/helpers";

export const sampleLessons: Lesson[] = [
  {
    ...lessonPreviews[0],
    moduleSlug: "fondasi-pasar-emas",
    moduleTitle: "Fondasi Pasar Emas",
    body: [
      heading("Mengapa XAUUSD berbeda dari pair forex biasa"),
      paragraph(
        "XAUUSD merepresentasikan harga emas yang dikutip dalam dolar AS, sehingga setiap perubahan ekspektasi terhadap USD dan suku bunga AS bisa langsung mengubah minat pada emas."
      ),
      paragraph(
        "Emas sering dipandang sebagai aset pelindung nilai saat ketidakpastian global meningkat, tetapi ia juga bisa tertekan ketika yield obligasi naik dan biaya peluang memegang emas menjadi lebih tinggi."
      ),
      heading("Karakter volatilitas emas"),
      paragraph(
        "XAUUSD bisa bergerak sangat tenang lalu tiba-tiba meledak saat rilis data ekonomi. Itulah sebabnya trader emas harus membaca konteks, bukan hanya pola candle."
      ),
      paragraph(
        "Perhatikan perbedaan respons antara sesi Asia yang lebih tenang, London yang mulai menambah likuiditas, dan New York yang sering memunculkan gerakan terbesar."
      ),
      heading("Fokus belajar yang benar"),
      paragraph(
        "Target utama fase awal bukan mencari entry, melainkan memahami apa yang memicu pembeli agresif masuk, kapan penjual menguasai harga, dan bagaimana struktur berubah setelah level penting diuji."
      ),
    ],
    keyTakeaways: [
      "XAUUSD sangat sensitif terhadap USD, yield, dan sentimen risiko global.",
      "Volatilitas emas berubah drastis tergantung sesi dan event data.",
      "Belajar konteks lebih penting daripada menghafal satu pola candle.",
    ],
    relatedCaseStudies: ["cpi-rally-repricing", "fomc-fade-after-spike"],
  },
  {
    ...lessonPreviews[1],
    moduleSlug: "struktur-harga",
    moduleTitle: "Struktur Harga",
    body: [
      heading("Candlestick adalah jejak keputusan market"),
      paragraph(
        "Setiap candle menyimpan informasi tentang siapa yang dominan, seberapa jauh harga didorong, dan apakah dorongan itu diterima atau ditolak pada penutupan."
      ),
      paragraph(
        "Sumbu panjang di area penting bisa berarti penolakan, tetapi nilainya naik drastis bila didukung struktur seperti break of structure atau failure swing."
      ),
      heading("Market structure dasar"),
      paragraph(
        "Tren naik tercipta saat harga membentuk higher high dan higher low. Tren turun terjadi saat lower high dan lower low mendominasi. Ketika struktur itu putus, market memasuki fase transisi."
      ),
      paragraph(
        "Jangan membaca satu candle secara terpisah. Lihat lokasi candle terhadap swing sebelumnya, area supply-demand, dan konteks timeframe yang lebih besar."
      ),
      heading("Kesalahan umum"),
      paragraph(
        "Banyak pemula menganggap semua engulfing bullish berarti buy. Padahal engulfing di tengah range sempit tanpa volume partisipasi dan tanpa konteks level sering hanya noise."
      ),
    ],
    keyTakeaways: [
      "Candle harus dibaca bersama lokasi dan konteks, bukan berdiri sendiri.",
      "Higher high dan higher low adalah bahasa dasar tren naik.",
      "Perubahan struktur lebih penting daripada bentuk candle tunggal.",
    ],
    relatedCaseStudies: ["asia-breakout-continuation", "fomc-fade-after-spike"],
    quizSlug: "quiz-struktur-pasar",
  },
  {
    ...lessonPreviews[2],
    moduleSlug: "struktur-harga",
    moduleTitle: "Struktur Harga",
    body: [
      heading("Trend vs range"),
      paragraph(
        "Trend sehat menunjukkan impuls yang tegas dan koreksi yang tertahan. Range justru ditandai oleh penolakan dua arah dan berkali-kali kembali ke tengah area."
      ),
      paragraph(
        "Saat emas berada di range, target terbaik biasanya lebih realistis dan ekspektasi breakout harus disertai bukti penerimaan harga di luar batas range."
      ),
      heading("Breakout valid"),
      paragraph(
        "Breakout berkualitas biasanya datang setelah tekanan harga berulang di satu sisi level, lalu diikuti penutupan yang kuat, retest yang tertahan, dan gagal kembali ke area lama."
      ),
      paragraph(
        "False breakout sering muncul ketika market hanya mengambil likuiditas di atas atau di bawah range sebelum kembali ke tengah. Inilah alasan pentingnya menunggu konfirmasi."
      ),
      heading("Checklist sederhana"),
      paragraph(
        "Tanyakan tiga hal: level mana yang dipecah, siapa yang gagal mempertahankan area itu, dan apakah ada faktor fundamental yang mendukung follow-through."
      ),
    ],
    keyTakeaways: [
      "Trend sehat punya impuls jelas dan koreksi terkontrol.",
      "Breakout perlu penerimaan harga, bukan sekadar tusukan level.",
      "False breakout sering berfungsi sebagai sapuan likuiditas.",
    ],
    relatedCaseStudies: ["asia-breakout-continuation"],
  },
  {
    ...lessonPreviews[3],
    moduleSlug: "area-dan-likuiditas",
    moduleTitle: "Area dan Likuiditas",
    body: [
      heading("Level bukan garis tunggal"),
      paragraph(
        "Support dan resistance lebih akurat dibaca sebagai zona reaksi, bukan satu angka presisi. Harga sering masuk sedikit ke area itu sebelum bergerak."
      ),
      paragraph(
        "Supply-demand memberi petunjuk tentang area yang sebelumnya memicu impuls besar. Namun area itu tetap harus diuji dengan respons harga terkini."
      ),
      heading("Liquidity matters"),
      paragraph(
        "Likuiditas adalah kumpulan order yang sering berada di sekitar swing high, swing low, atau level psikologis. Market maker dan partisipan besar cenderung tertarik ke area yang punya order tertunda."
      ),
      paragraph(
        "Sapuan likuiditas bukan selalu manipulasi; sering kali itu adalah proses efisien untuk mencari order sebelum arah utama bergerak."
      ),
      heading("Cara memakai area"),
      paragraph(
        "Gunakan area untuk menyusun skenario: jika harga menyapu high lalu gagal bertahan, cari tanda distribusi. Jika harga diterima di atas resistance lama, itu bisa menandakan perubahan peran level."
      ),
    ],
    keyTakeaways: [
      "Level penting dibaca sebagai area, bukan garis mutlak.",
      "Likuiditas sering terkumpul di swing dan level psikologis.",
      "Sapuan likuiditas harus dibaca bersama reaksi sesudahnya.",
    ],
    relatedCaseStudies: ["asia-breakout-continuation", "fomc-fade-after-spike"],
  },
  {
    ...lessonPreviews[4],
    moduleSlug: "timing-market",
    moduleTitle: "Timing Market",
    body: [
      heading("Perbedaan karakter tiap sesi"),
      paragraph(
        "Sesi Asia sering membentuk range awal. London menambah volume dan mulai menguji batas range. New York memperbesar gerakan terutama saat data ekonomi AS dirilis."
      ),
      paragraph(
        "Trader emas yang memaksa strategi breakout pada jam sepi sering terjebak karena market belum punya partisipasi yang cukup."
      ),
      heading("Timing lebih penting daripada buru-buru"),
      paragraph(
        "Sering kali keputusan terbaik adalah menunggu overlap London-New York atau beberapa menit setelah rilis data utama agar arah awal yang emosional mulai terbaca."
      ),
      heading("Hubungkan dengan agenda ekonomi"),
      paragraph(
        "Kalender CPI, NFP, FOMC, dan pidato pejabat bank sentral perlu menjadi bagian dari rutinitas harian. Chart tanpa jadwal hanya memberi setengah gambaran."
      ),
    ],
    keyTakeaways: [
      "Setiap sesi memiliki profil volatilitas yang berbeda.",
      "Setup bagus pada jam yang salah sering gagal berkembang.",
      "Kalender ekonomi wajib dibaca sebelum membuka chart emas.",
    ],
    relatedCaseStudies: ["asia-breakout-continuation", "cpi-rally-repricing"],
  },
  {
    ...lessonPreviews[5],
    moduleSlug: "driver-fundamental",
    moduleTitle: "Driver Fundamental",
    body: [
      heading("Hubungan emas dengan dolar dan yield"),
      paragraph(
        "Secara umum, emas cenderung diuntungkan saat dolar AS melemah atau real yield menurun. Sebaliknya, yield yang melonjak dapat menekan emas karena investor punya alternatif aset berimbal hasil."
      ),
      paragraph(
        "Hubungan ini tidak selalu linier per candle, tetapi sangat berguna untuk menjelaskan bias harian dan mingguan."
      ),
      heading("Data ekonomi yang paling sering menggerakkan XAUUSD"),
      paragraph(
        "CPI memengaruhi ekspektasi inflasi dan arah suku bunga. NFP mengubah pandangan terhadap kekuatan ekonomi AS. FOMC menggeser seluruh kurva ekspektasi kebijakan moneter."
      ),
      paragraph(
        "Geopolitik, krisis perbankan, atau lonjakan aversi risiko dapat membuat emas naik bahkan ketika data ekonomi terlihat biasa saja."
      ),
      heading("Belajar reaksi, bukan hanya angka headline"),
      paragraph(
        "Kadang data lebih baik dari ekspektasi tetapi emas justru naik. Itu terjadi ketika pasar sudah pricing in skenario yang lebih hawkish sebelumnya. Yang penting adalah selisih antara harapan pasar dan realitas."
      ),
    ],
    keyTakeaways: [
      "Bias emas dipengaruhi oleh USD, real yield, dan sentimen risiko.",
      "CPI, NFP, dan FOMC adalah driver fundamental inti.",
      "Reaksi pasar terhadap ekspektasi sering lebih penting daripada angka headline.",
    ],
    relatedCaseStudies: ["cpi-rally-repricing", "fomc-fade-after-spike"],
    quizSlug: "quiz-fundamental-xauusd",
  },
  {
    ...lessonPreviews[6],
    moduleSlug: "konfluensi-analisa",
    moduleTitle: "Konfluensi Analisa",
    body: [
      heading("Mulai dari bias besar"),
      paragraph(
        "Bangun narasi dari timeframe tinggi: apakah emas sedang dihargai sebagai safe haven, sedang ditekan oleh yield, atau hanya berkonsolidasi menunggu katalis baru."
      ),
      paragraph(
        "Setelah bias jelas, turun ke timeframe menengah dan kecil untuk mencari area reaksi, pola penerimaan harga, dan invalidasi yang bersih."
      ),
      heading("Technical memvalidasi, fundamental memberi arah"),
      paragraph(
        "Fundamental membantu memilih sisi yang lebih logis. Technical membantu menunggu timing dan lokasi yang masuk akal. Ketika dua hal ini sejalan, probabilitas biasanya membaik."
      ),
      heading("Satu skenario utama, satu skenario cadangan"),
      paragraph(
        "Selalu punya plan B. Jika skenario bullish gagal dipertahankan di atas level kunci, market mungkin sedang membangun distribusi atau sweep sebelum rotasi turun."
      ),
    ],
    keyTakeaways: [
      "Mulai analisa dari bias timeframe tinggi.",
      "Fundamental memberi arah, technical memberi lokasi dan timing.",
      "Skenario cadangan mencegah keputusan emosional saat market berubah.",
    ],
    relatedCaseStudies: ["cpi-rally-repricing", "fomc-fade-after-spike"],
  },
  {
    ...lessonPreviews[7],
    moduleSlug: "disiplin-trader",
    moduleTitle: "Disiplin Trader",
    body: [
      heading("Emas menghukum ukuran posisi yang asal"),
      paragraph(
        "XAUUSD terkenal cepat. Stop loss yang terlalu rapat pada jam volatil tanpa alasan struktur bisa tersentuh mudah, sedangkan ukuran posisi yang terlalu besar membuat satu kesalahan menjadi mahal."
      ),
      heading("Risiko per setup"),
      paragraph(
        "Tentukan risiko tetap per ide analisa. Banyak trader konsisten karena mereka mengukur kualitas proses, bukan mengejar balas dendam setelah rugi."
      ),
      heading("Psikologi yang realistis"),
      paragraph(
        "Takut ketinggalan, ingin cepat balik modal, dan overtrading setelah melihat candle besar adalah jebakan utama trader emas. Checklist sebelum klik jauh lebih penting daripada keberanian sesaat."
      ),
    ],
    keyTakeaways: [
      "Ukuran posisi harus menyesuaikan volatilitas emas.",
      "Risiko konsisten per setup menjaga akun tetap hidup.",
      "Checklist membantu memutus keputusan impulsif.",
    ],
    relatedCaseStudies: ["fomc-fade-after-spike"],
    quizSlug: "quiz-risk-psikologi",
  },
  {
    ...lessonPreviews[8],
    moduleSlug: "praktik-kasus-nyata",
    moduleTitle: "Praktik Kasus Nyata",
    body: [
      heading("Top-down analysis"),
      paragraph(
        "Mulai dari weekly untuk mengidentifikasi struktur besar dan area ekstrem. Lanjut ke daily untuk melihat fase market. H1-H4 dipakai untuk menilai momentum. M15-M5 hanya untuk detail respons."
      ),
      paragraph(
        "Jika timeframe besar bullish tetapi intraday sedang koreksi dalam, tugas kita bukan menebak semua candle, melainkan mencari kapan koreksi selesai atau invalid."
      ),
      heading("Sinkronisasi konteks"),
      paragraph(
        "Timeframe kecil yang melawan narasi timeframe besar sering hanya mencerminkan retracement. Karena itu, jangan memberi bobot sama pada semua timeframe."
      ),
    ],
    keyTakeaways: [
      "Weekly dan daily memberi konteks, intraday memberi presisi.",
      "Tidak semua timeframe punya bobot keputusan yang sama.",
      "Koreksi intraday perlu dibaca dalam narasi yang lebih besar.",
    ],
    relatedCaseStudies: [
      "asia-breakout-continuation",
      "cpi-rally-repricing",
      "fomc-fade-after-spike",
    ],
  },
  {
    ...lessonPreviews[9],
    moduleSlug: "praktik-kasus-nyata",
    moduleTitle: "Praktik Kasus Nyata",
    body: [
      heading("Framework harian"),
      paragraph(
        "Setiap hari, jawab lima pertanyaan: apa bias makro hari ini, level penting mana yang belum diuji, sesi mana yang paling relevan, data apa yang bisa mengubah bias, dan apa invalidasi skenario utama."
      ),
      paragraph(
        "Framework membuat analisa dapat diulang. Tujuannya agar kualitas keputusan tetap stabil bahkan saat market bergerak cepat."
      ),
      heading("Dokumentasi proses"),
      paragraph(
        "Simpan alasan analisa, bukan cuma hasilnya. Jika skenario gagal, evaluasi apakah salah di bias, salah di timing, atau salah di manajemen risiko."
      ),
      heading("Berpikir seperti analis"),
      paragraph(
        "Website ini dirancang agar kamu membangun kebiasaan bertanya 'mengapa harga bergerak' sebelum bertanya 'harus buy atau sell'."
      ),
    ],
    keyTakeaways: [
      "Checklist harian membuat analisa lebih konsisten.",
      "Dokumentasi proses lebih penting daripada ego benar-salah.",
      "Fokus pada alasan gerak harga, bukan impuls mengejar posisi.",
    ],
    relatedCaseStudies: [
      "asia-breakout-continuation",
      "cpi-rally-repricing",
      "fomc-fade-after-spike",
    ],
    quizSlug: "quiz-framework-analisa",
  },
];
