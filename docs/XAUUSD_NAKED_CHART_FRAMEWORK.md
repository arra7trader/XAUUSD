# XAUUSD Naked Chart Framework

Framework ini dibuat untuk membaca arah probabilitas XAUUSD tanpa ribet indikator. Fokusnya adalah `context -> structure -> liquidity -> scenario`, bukan sinyal instan.

## Tujuan

- Membaca kemungkinan arah harga berikutnya dengan lebih disiplin.
- Menghindari keputusan berbasis emosi atau satu candle.
- Menjadikan chart telanjang sebagai sumber utama keputusan, dengan makro sebagai penguat konteks.

## Urutan Analisa

### 1. Tentukan market state

Jawab dulu:

- Apakah market sedang trend naik?
- Apakah market sedang trend turun?
- Apakah market sedang range?
- Apakah market sedang transisi setelah sweep besar atau event data?

Label yang dipakai:

- `trend-bullish`
- `trend-bearish`
- `range`
- `transition`

### 2. Baca timeframe besar dulu

Urutan minimum:

- Weekly: arah dominan dan area ekstrem
- Daily: struktur aktif dan level pertahanan
- H4/H1: momentum saat ini
- M15/M5: hanya untuk detail reaksi

Aturan:

- Timeframe kecil tidak boleh membatalkan konteks timeframe besar tanpa bukti acceptance yang kuat.
- Setup M15 yang melawan daily trend harus dianggap lebih lemah.

### 3. Petakan level yang benar-benar penting

Yang wajib ditandai:

- previous week high / low
- previous day high / low
- Asia high / low
- London high / low
- swing high / swing low utama
- equal highs / equal lows
- breakout origin
- impuls origin

Aturan:

- Level dibaca sebagai area, bukan garis tunggal.
- Reaksi setelah menyentuh level lebih penting daripada sentuhan itu sendiri.

### 4. Baca likuiditas

Hal yang dicari:

- apakah market sedang mengejar high?
- apakah market sedang membersihkan low?
- apakah ada sweep yang langsung ditolak?
- apakah sesudah sapuan market justru accepted di area baru?

Makna:

- `sweep + reject` sering membuka peluang reversal atau minimal pullback.
- `sweep + accept` lebih sering mengarah ke continuation.

### 5. Nilai kualitas impuls

Impuls sehat:

- body candle dominan,
- follow-through ada,
- pullback dangkal,
- retest tertahan,
- lawan gagal reclaim level lama.

Impuls lemah:

- breakout tanpa body kuat,
- follow-through hilang,
- wick dominan,
- langsung masuk lagi ke range,
- retest gagal bertahan.

### 6. Bangun 3 skenario

Website nanti harus selalu menghasilkan tiga skenario:

- `bullish scenario`
- `bearish scenario`
- `neutral / wait scenario`

Contoh struktur:

- Bullish:
  - valid jika harga bertahan di atas level A
  - semakin kuat jika retest sukses dan high terbaru ditembus
  - batal jika reclaim turun ke bawah level invalidasi

- Bearish:
  - valid jika harga gagal di resistance B
  - semakin kuat jika lower high terbentuk dan low sesi disapu ke bawah
  - batal jika resistance direclaim kuat

- Neutral:
  - dipakai saat market masih balance
  - tidak boleh dipaksa jadi bullish atau bearish sebelum ada acceptance

## Bahasa Inti yang Harus Dipakai

- `accepted above`
- `accepted below`
- `rejected from level`
- `failed breakout`
- `sweep and reclaim`
- `break and hold`
- `lower high confirmed`
- `higher low defended`
- `auction still balanced`

Hindari bahasa:

- pasti naik
- pasti turun
- sinyal buy/sell mutlak

## Checklist Analisa Harian

Sebelum menyimpulkan bias:

1. Apa struktur daily saat ini?
2. Apakah market sedang trend, range, atau transition?
3. Level mana yang paling dekat untuk diuji?
4. Apakah ada likuiditas obvious di atas atau di bawah harga sekarang?
5. Sesi apa yang sedang aktif?
6. Apakah ada data besar hari ini?
7. Jika harga menyapu level, apa tanda acceptance atau rejection-nya?
8. Di mana invalidasi skenario bullish?
9. Di mana invalidasi skenario bearish?
10. Apakah kondisi terbaik sebenarnya wait?

## Setup Naked Chart yang Layak Diprioritaskan

### 1. Sweep lalu reclaim

Kuat ketika:

- terjadi di level daily/H4,
- disertai rejection yang jelas,
- diikuti perubahan struktur pada timeframe lebih kecil.

### 2. Break and hold

Kuat ketika:

- breakout datang dengan impuls,
- retest tidak dalam,
- market accepted di atas atau di bawah area lama.

### 3. Failed continuation

Kuat ketika:

- trend terlihat ingin lanjut,
- tetapi breakout gagal follow-through,
- lalu market kembali masuk ke range dan merusak struktur pendek.

### 4. Range expansion dari session boundary

Kuat ketika:

- Asia range jelas,
- London atau New York mendorong keluar range,
- ada acceptance, bukan sekadar spike.

## Hal Yang Harus Selalu Diingat

- XAUUSD sangat cepat; jangan tafsirkan semua gerak sebagai sinyal.
- Banyak move intraday hanyalah perebutan likuiditas.
- Yang paling penting bukan apakah level tersentuh, tetapi apa yang terjadi setelah level disentuh.
- Naked chart expert berarti ahli membaca respons pasar, bukan sekadar hafal pola.

## Output Analisa Harian Ideal

Template final yang nanti bisa dipakai assistant:

- Market state:
- Dominant timeframe:
- Key bullish level:
- Key bearish level:
- Liquidity target above:
- Liquidity target below:
- Bullish scenario:
- Bearish scenario:
- Neutral scenario:
- Invalidasi utama:
- Apa yang harus dilihat saat London:
- Apa yang harus dilihat saat New York:

## Fungsi Dokumen Ini

- Menjadi framework tetap untuk assistant saat membedah chart XAUUSD.
- Menjadi fondasi fitur website nanti.
- Menjaga supaya semua analisa konsisten dan tidak berubah-ubah tergantung mood.
