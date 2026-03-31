import { buildMetadata } from "@/lib/metadata";
import { dailyBiasBoard } from "@/lib/analysis-data";
import { siteConfig } from "@/lib/site-config";

const biasStyles = {
  bullish: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  bearish: "border-rose-300/25 bg-rose-300/10 text-rose-100",
  neutral: "border-sky-300/25 bg-sky-300/10 text-sky-100",
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
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1.08fr,0.92fr]">
        <div className="panel rounded-[2.4rem] p-7 sm:p-9">
          <div className="space-y-6">
            <div className="eyebrow">Daily bias board</div>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Halaman paling penting untuk mulai baca XAUUSD setiap hari
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Gunakan halaman ini untuk menentukan apakah market layak dibaca
                bullish, bearish, atau justru wait. Fokus utamanya adalah struktur,
                acceptance, dan invalidation, bukan opini keras.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              <div className="panel-soft rounded-[1.6rem] p-4">
                <p className="metric-label">Bias</p>
                <p className="mt-3 text-xl font-semibold capitalize text-white">
                  {dailyBiasBoard.activeBias}
                </p>
              </div>
              <div className="panel-soft rounded-[1.6rem] p-4">
                <p className="metric-label">Confidence</p>
                <p className="mt-3 text-xl font-semibold capitalize text-white">
                  {dailyBiasBoard.confidence}
                </p>
              </div>
              <div className="panel-soft rounded-[1.6rem] p-4">
                <p className="metric-label">Market state</p>
                <p className="mt-3 text-xl font-semibold capitalize text-white">
                  {dailyBiasBoard.marketState.replace("-", " ")}
                </p>
              </div>
              <div className="panel-soft rounded-[1.6rem] p-4">
                <p className="metric-label">Session focus</p>
                <p className="mt-3 text-base font-semibold text-white">
                  {dailyBiasBoard.sessionFocus}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="panel-strong rounded-[2.4rem] p-6 sm:p-7">
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
          </div>

          <p className="mt-5 metric-label">Desk thesis</p>
          <p className="mt-3 text-base leading-8 text-slate-300">{dailyBiasBoard.thesis}</p>

          <div className="mt-6 rounded-[1.7rem] border border-amber-300/18 bg-amber-300/8 p-5">
            <p className="metric-label text-amber-100/80">Invalidation rule</p>
            <p className="mt-3 text-sm leading-7 text-amber-50/90">
              {dailyBiasBoard.invalidation}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        <article className="panel rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">
              Bullish
            </span>
            <p className="metric-label">Scenario path</p>
          </div>
          <div className="mt-5 space-y-3">
            {dailyBiasBoard.bullishPath.map((item) => (
              <div key={item} className="panel-soft rounded-[1.4rem] px-4 py-4 text-sm leading-7 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="panel rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-rose-300/25 bg-rose-300/10 px-3 py-1 text-xs font-medium text-rose-100">
              Bearish
            </span>
            <p className="metric-label">Scenario path</p>
          </div>
          <div className="mt-5 space-y-3">
            {dailyBiasBoard.bearishPath.map((item) => (
              <div key={item} className="panel-soft rounded-[1.4rem] px-4 py-4 text-sm leading-7 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="panel rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-sky-300/25 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100">
              Neutral
            </span>
            <p className="metric-label">Scenario path</p>
          </div>
          <div className="mt-5 space-y-3">
            {dailyBiasBoard.neutralPath.map((item) => (
              <div key={item} className="panel-soft rounded-[1.4rem] px-4 py-4 text-sm leading-7 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.96fr,1.04fr]">
        <div className="panel rounded-[2rem] p-6">
          <p className="metric-label">Morning checklist</p>
          <div className="mt-5 space-y-3">
            {dailyBiasBoard.morningChecklist.map((item, index) => (
              <div
                key={item}
                className="panel-soft rounded-[1.4rem] px-4 py-4 text-sm leading-7 text-slate-300"
              >
                <span className="mr-3 font-mono text-amber-200">0{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="panel rounded-[2rem] p-6">
            <p className="metric-label">Macro inputs</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {dailyBiasBoard.macroInputs.map((item) => (
                <div
                  key={item}
                  className="panel-soft rounded-[1.4rem] px-4 py-4 text-sm leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel-strong rounded-[2rem] p-6">
            <p className="metric-label">Assistant prompt</p>
            <div className="mt-5 rounded-[1.7rem] border border-white/10 bg-[#09121a] p-5 shadow-inner shadow-black/30">
              <p className="font-mono text-sm leading-8 text-slate-200">
                {dailyBiasBoard.assistantPrompt}
              </p>
            </div>
            <p className="mt-5 text-xs leading-6 text-slate-500">{siteConfig.disclaimer}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
