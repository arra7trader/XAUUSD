import Link from "next/link";

import {
  EditorialCTA,
  HeroPatternStack,
  PlaybookGrid,
  SourceDeck,
} from "@/components/candlestick-lab-sections";
import { buildMetadata } from "@/lib/metadata";
import {
  expertSources,
  focusPillars,
  inferenceNote,
  learningSteps,
  m5Playbooks,
} from "@/lib/candlestick-focus";

export const metadata = buildMetadata({
  title: "XAUUSD Candlestick Lab",
  description:
    "Website belajar expert candlestick XAUUSD yang fokus ke M5 price action, retrace, pullback, continuation, dan kenapa candle itu valid.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 xl:grid-cols-[1.08fr,0.92fr]">
        <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.22)] sm:p-9">
          <div className="eyebrow">XAUUSD candlestick lab</div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Desainnya saya sederhanakan supaya kamu langsung paham
            <span className="block text-amber-200">kenapa candle XAUUSD naik, retrace, atau gagal lanjut.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Fokus website ini sekarang bukan banyak istilah, tapi cara membaca candle M5 dengan
            jelas: lihat dorongan, cek follow-through, nilai pullback, lalu pastikan acceptance.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {focusPillars.map((item) => (
              <div key={item.title} className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/kenapa-xauusd-naik-turun"
              className="rounded-full border border-amber-300/35 bg-amber-300/14 px-6 py-3 text-sm font-medium text-amber-100 transition hover:bg-amber-300/22"
            >
              Mulai dari M5 Candle Lab
            </Link>
            <Link
              href="/naked-chart"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08]"
            >
              Lihat Pullback Playbook
            </Link>
          </div>
        </div>

        <HeroPatternStack playbooks={m5Playbooks.slice(0, 3)} />
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="panel rounded-[2rem] p-6 sm:p-7">
          <p className="metric-label">Urutan baca</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Belajar dengan alur yang lurus</h2>
          <div className="mt-5 space-y-3">
            {learningSteps.map((item) => (
              <div key={item.title} className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-[2rem] p-6 sm:p-7">
          <p className="metric-label">Yang paling dicari</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Contoh yang memang relevan buat trading XAUUSD
          </h2>
          <div className="mt-5 grid gap-3">
            {[
              "Kenapa candle bullish di M5 kadang lanjut naik, tapi kadang justru jadi trap.",
              "Kenapa retrace setelah impulse tidak otomatis berarti buyer selesai.",
              "Kenapa sweep high-low sesi sering datang dulu sebelum arah intraday terlihat jelas.",
            ].map((item) => (
              <div key={item} className="rounded-[1.35rem] border border-white/8 bg-slate-950/60 p-4 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="metric-label">Playbooks inti</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Saya susun ulang jadi contoh-contoh yang lebih gampang diikuti
            </h2>
          </div>
          <Link
            href="/kenapa-xauusd-naik-turun"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06]"
          >
            Buka halaman detail
          </Link>
        </div>
        <PlaybookGrid playbooks={m5Playbooks.slice(0, 3)} />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.92fr,1.08fr]">
        <div className="space-y-4">
          <div className="panel rounded-[2rem] p-6 sm:p-7">
            <p className="metric-label">Referensi valid</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Semua penjelasan ini tetap berdiri di atas sumber yang jelas
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Saya sengaja tetap menautkan referensi supaya website ini tidak terasa seperti opini
              kosong. Tapi tampilannya saya buat lebih ringan supaya tidak melelahkan dibaca.
            </p>
          </div>
          <EditorialCTA />
        </div>

        <SourceDeck sources={expertSources} note={inferenceNote} />
      </section>
    </div>
  );
}
