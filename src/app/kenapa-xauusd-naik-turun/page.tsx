import Link from "next/link";

import {
  GoldMarketStructureDiagram,
  GoldUsdRelationshipDiagram,
  NakedChartTrendDiagram,
  SweepReclaimDiagram,
  WhyDownDiagram,
  WhyUpDiagram,
} from "@/components/xauusd-explainer-diagrams";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Kenapa XAUUSD Naik dan Turun",
  description:
    "Penjelasan visual tentang kenapa XAUUSD bisa naik atau turun, lengkap dengan struktur market emas, naked chart, dan referensi utama.",
  path: "/kenapa-xauusd-naik-turun",
});

const sourceLinks = [
  {
    label: "LBMA Guide to the Global OTC Precious Metals Market",
    href: "https://cdn.lbma.org.uk/downloads/Publications/LBMA-The-Guide-2017-v1.pdf",
  },
  {
    label: "CME Price Discovery in Futures Markets",
    href: "https://www.cmegroup.com/education/courses/introduction-to-futures/price-discovery.html",
  },
  {
    label: "CME Gold Futures & Options Fact Card",
    href: "https://www.cmegroup.com/trading/metals/files/fact-card-gold-futures-options.pdf",
  },
  {
    label: "World Gold Council: Gold and US interest rates, a reality check",
    href: "https://www.gold.org/goldhub/research/gold-and-us-interest-rates-a-reality-check",
  },
  {
    label: "World Gold Council Gold Valuation Model",
    href: "https://www.gold.org/goldhub/tools/gold-valuation-model",
  },
  {
    label: "Oxford Review of Financial Studies: Gold's Value as an Investment",
    href: "https://academic.oup.com/rfs/article/38/2/422/7887576",
  },
];

const referencePillars = [
  {
    title: "Pasar emas itu besar dan nyata",
    body:
      "LBMA menunjukkan bullion market global banyak berputar di OTC London. Jadi candle XAUUSD adalah jejak dari pasar emas yang sangat besar, bukan sekadar reaksi chart retail.",
    source: "LBMA Guide",
  },
  {
    title: "Futures ikut membentuk gerakan harga",
    body:
      "CME menjelaskan futures membantu price discovery secara transparan. Saat order dan likuiditas aktif, breakout dan rotation di chart bisa jadi jauh lebih tajam.",
    source: "CME Price Discovery",
  },
  {
    title: "Real yield dan USD adalah pendorong utama",
    body:
      "World Gold Council dan riset Oxford sama-sama menegaskan bahwa emas sangat sensitif terhadap real rates dan kekuatan dolar AS.",
    source: "WGC + Oxford RFS",
  },
  {
    title: "Chart tetap jadi tempat konfirmasi",
    body:
      "Makro memberi arah besar, tetapi keputusan trading tetap perlu konfirmasi dari structure, rejection, acceptance, sweep, dan follow-through di level penting.",
    source: "Auction logic + price action",
  },
];

const practicalChecklist = [
  "Lihat dulu apakah struktur market sedang bullish, bearish, atau hanya range.",
  "Tandai level penting: swing high-low, equal highs-lows, dan area reclaim terakhir.",
  "Tanya apakah harga diterima di luar level atau cuma menyentuh lalu kembali masuk range.",
  "Selaraskan dengan konteks: USD, real yield, fear/risk, dan sesi market yang sedang aktif.",
];

export default function WhyGoldMovesPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1.08fr,0.92fr]">
        <div className="panel rounded-[2.4rem] p-7 sm:p-9">
          <div className="space-y-6">
            <div className="eyebrow">Penjelasan visual</div>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Kenapa XAUUSD bisa naik dan turun, dijelaskan lebih rapi dan lebih dalam
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Halaman ini saya ubah supaya lebih enak dipahami. Bukan cuma poster singkat, tapi
                alur yang benar-benar menjelaskan apa yang mendorong emas, apa yang mendorong dolar,
                dan bagaimana semuanya terlihat di naked chart.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Konsep inti", value: "emas x dolar" },
                { label: "Yang dibaca", value: "structure + context" },
                { label: "Tujuan", value: "arah probabilitas" },
              ].map((item) => (
                <div key={item.label} className="panel-soft rounded-[1.5rem] p-4">
                  <p className="metric-label">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold capitalize text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel-strong rounded-[2.4rem] p-6 sm:p-7">
          <p className="metric-label">Cara baca paling singkat</p>
          <div className="mt-5 space-y-3">
            {[
              "XAUUSD naik jika emas dibeli, USD melemah, atau dua-duanya terjadi bersamaan.",
              "XAUUSD turun jika emas kehilangan bid, USD menguat, atau dua-duanya terjadi bersamaan.",
              "Di chart, jangan terpaku pada satu candle. Lihat structure, level, lalu respons harga sesudah level disentuh.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/daily-bias"
              className="rounded-full border border-amber-300/35 bg-amber-300/14 px-5 py-2.5 text-sm font-medium text-amber-100"
            >
              Lanjut ke daily bias
            </Link>
            <Link
              href="/chart-lab"
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-slate-300"
            >
              Buka war room chart
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <GoldUsdRelationshipDiagram />
        <WhyUpDiagram />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <WhyDownDiagram />
        <NakedChartTrendDiagram />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
        <GoldMarketStructureDiagram />
        <div className="panel rounded-[2rem] p-6 sm:p-7">
          <p className="metric-label">Lapisan referensi</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Empat hal yang benar-benar perlu kamu pegang
          </h2>
          <div className="mt-6 space-y-3">
            {referencePillars.map((item) => (
              <div key={item.title} className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SweepReclaimDiagram />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr,1fr]">
        <div className="panel rounded-[2rem] p-6 sm:p-7">
          <p className="metric-label">Checklist sederhana</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Urutan baca chart supaya tidak cepat salah narasi
          </h2>
          <div className="mt-5 space-y-3">
            {practicalChecklist.map((item, index) => (
              <div key={item} className="panel-soft rounded-[1.4rem] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Langkah {index + 1}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-[2rem] p-6 sm:p-7">
          <p className="metric-label">Sumber referensi utama</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Fondasi yang saya pakai untuk menjelaskan XAUUSD
          </h2>
          <div className="mt-5 space-y-3">
            {sourceLinks.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-4 text-sm leading-7 text-slate-300 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                {source.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="panel rounded-[2rem] p-6 sm:p-7">
        <p className="metric-label">Kesimpulan cepat</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">
          Jika kamu ingin tahu kenapa harga naik atau turun
        </h2>
        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {[
            "Cari dulu apakah dorongannya datang dari emas yang dibeli, dolar yang dilemahkan, atau dua-duanya.",
            "Lalu lihat apakah chart mengonfirmasi cerita itu lewat structure, sweep, rejection, atau acceptance di level penting.",
            "Kalau makro bercerita bullish tapi harga gagal accepted di atas level, jangan paksa narasi naik hanya karena feeling.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
