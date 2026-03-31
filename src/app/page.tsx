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

export const metadata = buildMetadata({
  title: "War Room Analisa XAUUSD",
  description:
    "Dashboard analisa XAUUSD untuk membaca market structure, liquidity, key levels, dan skenario arah harga dari naked chart.",
  path: "/",
});

const biasStyles = {
  bullish: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  bearish: "border-rose-300/25 bg-rose-300/10 text-rose-100",
  neutral: "border-sky-300/25 bg-sky-300/10 text-sky-100",
};

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
        <div className="panel relative overflow-hidden rounded-[2.4rem] p-7 sm:p-10">
          <div className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(242,193,78,0.12),transparent)]" />
          <div className="relative space-y-7">
            <div className="eyebrow">XAUUSD analyst desk · {currentWarRoom.asOf}</div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Baca XAUUSD lebih jernih,
                <span className="block text-amber-200">tanpa desain yang ribut dan tanpa indikator yang bikin pusing.</span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Produk ini dirancang seperti meja kerja analis: mulai dari daily bias,
                structure, key levels, liquidity sweep, sampai skenario bullish, bearish,
                dan wait yang benar-benar bisa dipakai untuk berpikir.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Dominant bias", value: currentWarRoom.dominantBias },
                {
                  label: "Market state",
                  value: currentWarRoom.dominantStructure.replace("-", " "),
                },
                { label: "Desk mode", value: "structure first" },
              ].map((item) => (
                <div key={item.label} className="panel-soft rounded-[1.6rem] p-4">
                  <p className="metric-label">{item.label}</p>
                  <p className="mt-3 text-xl font-semibold capitalize text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/daily-bias"
                className="rounded-full border border-amber-300/35 bg-amber-300/14 px-6 py-3 text-sm font-medium text-amber-100 transition hover:bg-amber-300/22"
              >
                Open Daily Bias
              </Link>
              <Link
                href="/chart-lab"
                className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08]"
              >
                Masuk War Room Chart
              </Link>
            </div>
          </div>
        </div>

        <div className="panel-strong rounded-[2.4rem] p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="metric-label">Live desk note</p>
              <h2 className="mt-3 text-3xl font-semibold capitalize text-white">
                {currentWarRoom.dominantStructure.replace("-", " ")}
              </h2>
            </div>
            <span
              className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${biasStyles[currentWarRoom.dominantBias]}`}
            >
              {currentWarRoom.dominantBias}
            </span>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-300">{currentWarRoom.narrative}</p>

          <div className="mt-6 space-y-3">
            {currentWarRoom.primaryDrivers.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-4">
        {[
          {
            href: "/daily-bias",
            title: "Daily Bias",
            text: "Halaman pertama yang dibuka setiap hari untuk baca bias, invalidasi, dan morning checklist.",
          },
          {
            href: "/market-structure",
            title: "Structure",
            text: "Bedakan trend, range, dan transition sebelum bicara arah harga.",
          },
          {
            href: "/key-levels",
            title: "Key Levels",
            text: "Lihat area mana yang layak dibela, disapu, atau diuji ulang.",
          },
          {
            href: "/scenarios",
            title: "Scenarios",
            text: "Susun bullish, bearish, dan neutral path tanpa overconfidence.",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="panel rounded-[2rem] p-5 transition hover:-translate-y-0.5 hover:border-white/15"
          >
            <p className="metric-label">{item.title}</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.08fr,0.92fr]">
        <ChartEmbedPanel />

        <div className="grid gap-6">
          <div className="panel rounded-[2rem] p-6">
            <p className="metric-label">What to watch</p>
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

          <div className="panel-strong rounded-[2rem] p-6">
            <p className="metric-label">Desk rules</p>
            <div className="mt-5 grid gap-3">
              {[
                "Structure first, baru opini.",
                "Acceptance lebih penting daripada breakout mentah.",
                "Liquidity event lebih jujur daripada candle dramatis.",
                "Neutral juga keputusan yang valid.",
              ].map((rule) => (
                <div
                  key={rule}
                  className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
        <div className="panel rounded-[2.2rem] p-6 sm:p-8">
          <p className="metric-label">Reference pillars</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Fondasi analisa yang dipakai website ini
          </h2>
          <div className="mt-6 space-y-3">
            {referencePillars.map((pillar) => (
              <div
                key={pillar}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 px-4 py-4 text-sm leading-7 text-slate-300"
              >
                {pillar}
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-[2.2rem] p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="metric-label">Key levels preview</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Fokus pada area yang memancing respons market
              </h2>
            </div>
            <Link
              href="/key-levels"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
            >
              Full map
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {keyLevels.slice(0, 4).map((level) => (
              <div key={level.label} className="panel-soft rounded-[1.6rem] p-4">
                <p className="text-base font-semibold text-white">{level.label}</p>
                <p className="mt-2 text-sm text-amber-100">{level.zone}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{level.intent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.04fr,0.96fr]">
        <div className="panel rounded-[2.2rem] p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="metric-label">Scenario builder</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Bias yang enak dibaca adalah bias yang punya trigger dan invalidasi
              </h2>
            </div>
            <Link
              href="/daily-bias"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
            >
              Open bias board
            </Link>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {scenarios.map((scenario) => (
              <article key={scenario.title} className="panel-soft rounded-[1.7rem] p-5">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${biasStyles[scenario.bias]}`}
                >
                  {scenario.bias}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{scenario.title}</h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  <p>{scenario.trigger}</p>
                  <p className="text-slate-400">{scenario.invalidation}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="panel rounded-[2.2rem] p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="metric-label">Journal cards</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Catatan desk yang singkat tapi berguna
              </h2>
            </div>
            <Link
              href="/journal"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
            >
              View journal
            </Link>
          </div>
          <div className="mt-6 space-y-4">
            {journalEntries.map((entry) => (
              <article key={`${entry.date}-${entry.title}`} className="panel-soft rounded-[1.6rem] p-4">
                <p className="metric-label">{entry.date}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{entry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{entry.thesis}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
