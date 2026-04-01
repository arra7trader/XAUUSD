import Link from "next/link";

import {
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
    "Penjelasan visual sederhana tentang kenapa XAUUSD bisa naik atau turun, lengkap dengan diagram naked chart dan referensi utama.",
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
    label: "Oxford Review of Financial Studies: Gold’s Value as an Investment",
    href: "https://academic.oup.com/rfs/article/38/2/422/7887576",
  },
];

export default function WhyGoldMovesPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1.08fr,0.92fr]">
        <div className="panel rounded-[2.4rem] p-7 sm:p-9">
          <div className="space-y-6">
            <div className="eyebrow">Penjelasan sederhana</div>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Kenapa XAUUSD bisa naik dan turun, dijelaskan dengan gambar
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Halaman ini dibuat untuk kamu yang ingin paham tanpa istilah terlalu rumit.
                Kita mulai dari konsep dasar, lalu masuk ke alasan bullish, bearish,
                dan cara melihatnya di naked chart.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Konsep inti", value: "emas + dolar" },
                { label: "Yang dilihat", value: "structure + response" },
                { label: "Tujuan", value: "paham arah probabilitas" },
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
              "XAUUSD naik jika emas diburu, dolar melemah, atau dua-duanya.",
              "XAUUSD turun jika emas dijual, dolar menguat, atau dua-duanya.",
              "Di chart, jangan lihat candle tunggal. Lihat structure, level, lalu response sesudah level disentuh.",
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

      <section>
        <SweepReclaimDiagram />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr,1fr]">
        <div className="panel rounded-[2rem] p-6">
          <p className="metric-label">Kalimat yang perlu diingat</p>
          <div className="mt-5 space-y-3">
            {[
              "Emas sering naik saat fear naik atau real yield turun.",
              "Emas sering turun saat USD kuat atau real yield naik.",
              "Breakout belum tentu valid kalau harga tidak diterima di luar level.",
              "Wick besar penting, tapi yang lebih penting adalah apa yang terjadi sesudah wick itu.",
            ].map((item) => (
              <div
                key={item}
                className="panel-soft rounded-[1.4rem] px-4 py-4 text-sm leading-7 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-[2rem] p-6">
          <p className="metric-label">Sumber referensi utama</p>
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
    </div>
  );
}
