import Link from "next/link";

import { ChartEmbedPanel } from "@/components/chart-embed-panel";
import { buildMetadata } from "@/lib/metadata";
import {
  currentWarRoom,
  journalEntries,
  keyLevels,
  referencePillars,
  scenarios,
} from "@/lib/analysis-data";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "War Room Analisa XAUUSD",
  description:
    "Dashboard analisa XAUUSD untuk membaca market structure, liquidity, key levels, dan skenario arah harga dari naked chart.",
  path: "/",
});

const biasStyles = {
  bullish: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  bearish: "border-rose-300/30 bg-rose-300/10 text-rose-100",
  neutral: "border-sky-300/30 bg-sky-300/10 text-sky-100",
};

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-amber-100 uppercase">
            War Room XAUUSD · As of {currentWarRoom.asOf}
          </div>

          <div className="space-y-5">
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Bedah daging XAUUSD dari{" "}
              <span className="text-amber-200">struktur, likuiditas, dan naked chart.</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Website ini diposisikan sebagai asisten analisa, bukan kursus. Fokusnya
              adalah membantu membaca arah probabilitas harga melalui market state,
              acceptance, rejection, liquidity sweep, dan skenario lanjutannya.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/daily-bias"
              className="rounded-full border border-amber-300/40 bg-amber-300/15 px-6 py-3 text-sm font-medium text-amber-100 transition hover:bg-amber-300/25"
            >
              Buka daily bias
            </Link>
            <Link
              href="/chart-lab"
              className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08]"
            >
              Buka war room chart
            </Link>
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-6 shadow-2xl shadow-black/30">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-xs tracking-[0.24em] text-slate-500 uppercase">
                Dominant Bias
              </p>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${biasStyles[currentWarRoom.dominantBias]}`}
              >
                {currentWarRoom.dominantBias}
              </span>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="font-mono text-xs tracking-[0.24em] text-slate-500 uppercase">
                Market State
              </p>
              <p className="mt-4 text-4xl font-semibold capitalize text-white">
                {currentWarRoom.dominantStructure.replace("-", " ")}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {currentWarRoom.narrative}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {currentWarRoom.primaryDrivers.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <ChartEmbedPanel />

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Watchlist Hari Ini
            </p>
            <div className="mt-5 space-y-3">
              {currentWarRoom.marketNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-4 text-sm leading-7 text-slate-300"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Rule of the Desk
            </p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              <p>Structure first.</p>
              <p>Acceptance beats breakout.</p>
              <p>Liquidity events matter more than candle cosmetics.</p>
              <p>Neutral is a valid bias when market has not chosen a side.</p>
            </div>
            <p className="mt-5 text-xs leading-6 text-slate-500">{siteConfig.disclaimer}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
        <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            Reference Pillars
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Fondasi analisa kita cukup kuat untuk v1
          </h2>
          <div className="mt-6 space-y-3">
            {referencePillars.map((pillar) => (
              <div
                key={pillar}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 px-4 py-4 text-sm leading-7 text-slate-300"
              >
                {pillar}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
                Key Levels Map
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Level dibaca sebagai area yang diuji, bukan garis sakti
              </h2>
            </div>
            <Link
              href="/key-levels"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
            >
              Semua level
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {keyLevels.slice(0, 4).map((level) => (
              <div
                key={level.label}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4"
              >
                <p className="font-semibold text-white">{level.label}</p>
                <p className="mt-2 text-sm text-amber-100">{level.zone}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{level.intent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Scenario Builder
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Bias bukan tebakan, tapi hasil dari trigger, confirmation, dan invalidation
            </h2>
          </div>
          <Link
            href="/daily-bias"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
          >
            Dashboard bias
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {scenarios.map((scenario) => (
            <article
              key={scenario.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6"
            >
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${biasStyles[scenario.bias]}`}
              >
                {scenario.bias}
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-white">{scenario.title}</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  <span className="font-medium text-white">Trigger:</span> {scenario.trigger}
                </p>
                <p>
                  <span className="font-medium text-white">Confirm:</span> {scenario.confirmation}
                </p>
                <p>
                  <span className="font-medium text-white">Invalidasi:</span> {scenario.invalidation}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Desk Journal
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Catatan analisa untuk melatih konsistensi, bukan sekadar merasa benar
            </h2>
          </div>
          <Link
            href="/journal"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
          >
            Buka journal
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {journalEntries.map((entry) => (
            <article
              key={`${entry.date}-${entry.title}`}
              className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5"
            >
              <p className="font-mono text-xs tracking-[0.22em] text-slate-500 uppercase">
                {entry.date}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{entry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{entry.thesis}</p>
              <p className="mt-4 text-sm text-amber-100">{entry.lesson}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
