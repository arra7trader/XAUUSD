import { buildMetadata } from "@/lib/metadata";
import { dailyBiasBoard } from "@/lib/analysis-data";
import { siteConfig } from "@/lib/site-config";

const biasStyles = {
  bullish: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  bearish: "border-rose-300/30 bg-rose-300/10 text-rose-100",
  neutral: "border-sky-300/30 bg-sky-300/10 text-sky-100",
};

const confidenceStyles = {
  low: "text-rose-100 border-rose-300/20 bg-rose-300/8",
  medium: "text-amber-100 border-amber-300/20 bg-amber-300/8",
  high: "text-emerald-100 border-emerald-300/20 bg-emerald-300/8",
};

export const metadata = buildMetadata({
  title: "Daily Bias XAUUSD",
  description:
    "Dashboard bias harian XAUUSD untuk menyusun bullish, bearish, dan neutral scenario dari naked chart dan market structure.",
  path: "/daily-bias",
});

export default function DailyBiasPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="space-y-5">
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            Daily Bias
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Dashboard bias harian untuk memutuskan apakah XAUUSD layak dibaca bullish, bearish, atau wait
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Halaman ini dirancang sebagai titik awal setiap hari. Kita mulai dari market state,
            lalu menurunkan tiga skenario lengkap beserta invalidasi agar pembacaan chart tidak liar.
          </p>
        </div>

        <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${biasStyles[dailyBiasBoard.activeBias]}`}
            >
              {dailyBiasBoard.activeBias}
            </span>
            <span
              className={`rounded-full border px-3 py-1 text-xs font-medium uppercase ${confidenceStyles[dailyBiasBoard.confidence]}`}
            >
              confidence {dailyBiasBoard.confidence}
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs capitalize text-slate-300">
              {dailyBiasBoard.marketState.replace("-", " ")}
            </span>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            <span className="font-medium text-white">Fokus sesi:</span> {dailyBiasBoard.sessionFocus}
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">{dailyBiasBoard.thesis}</p>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-[2rem] border border-emerald-300/20 bg-emerald-300/8 p-6">
          <h2 className="text-2xl font-semibold text-white">Bullish Path</h2>
          <div className="mt-5 space-y-3">
            {dailyBiasBoard.bullishPath.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/10 bg-slate-950/60 px-4 py-4 text-sm leading-7 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-rose-300/20 bg-rose-300/8 p-6">
          <h2 className="text-2xl font-semibold text-white">Bearish Path</h2>
          <div className="mt-5 space-y-3">
            {dailyBiasBoard.bearishPath.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/10 bg-slate-950/60 px-4 py-4 text-sm leading-7 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-sky-300/20 bg-sky-300/8 p-6">
          <h2 className="text-2xl font-semibold text-white">Neutral Path</h2>
          <div className="mt-5 space-y-3">
            {dailyBiasBoard.neutralPath.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/10 bg-slate-950/60 px-4 py-4 text-sm leading-7 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            Morning Checklist
          </p>
          <div className="mt-5 space-y-3">
            {dailyBiasBoard.morningChecklist.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-4 text-sm leading-7 text-slate-300"
              >
                <span className="mr-3 font-mono text-amber-200">0{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Macro Inputs
            </p>
            <div className="mt-5 space-y-3">
              {dailyBiasBoard.macroInputs.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-4 text-sm leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-300/20 bg-amber-300/8 p-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Invalidation Rule
            </p>
            <p className="mt-4 text-sm leading-7 text-amber-50/90">
              {dailyBiasBoard.invalidation}
            </p>
            <p className="mt-5 text-xs leading-6 text-slate-200/80">
              {siteConfig.disclaimer}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Assistant Prompt
        </p>
        <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
          <p className="font-mono text-sm leading-7 text-slate-200">
            {dailyBiasBoard.assistantPrompt}
          </p>
        </div>
      </section>
    </div>
  );
}
