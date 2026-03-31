import { buildMetadata } from "@/lib/metadata";
import { scenarios } from "@/lib/analysis-data";

const biasStyles = {
  bullish: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  bearish: "border-rose-300/30 bg-rose-300/10 text-rose-100",
  neutral: "border-sky-300/30 bg-sky-300/10 text-sky-100",
};

export const metadata = buildMetadata({
  title: "Scenarios XAUUSD",
  description:
    "Scenario builder XAUUSD untuk membedakan trigger, confirmation, dan invalidation pada bias bullish, bearish, dan neutral.",
  path: "/scenarios",
});

export default function ScenariosPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="space-y-5">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Scenarios
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Tiga skenario wajib: bullish, bearish, dan wait
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Bias terbaik bukan opini keras, melainkan hasil dari trigger yang jelas,
          confirmation yang bisa diamati, dan invalidation yang memaksa kita tetap objektif.
        </p>
      </section>

      <div className="grid gap-5 lg:grid-cols-3">
        {scenarios.map((scenario) => (
          <article
            key={scenario.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6"
          >
            <span
              className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${biasStyles[scenario.bias]}`}
            >
              {scenario.bias}
            </span>
            <h2 className="mt-5 text-2xl font-semibold text-white">{scenario.title}</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <p>
                <span className="font-medium text-white">Trigger:</span> {scenario.trigger}
              </p>
              <p>
                <span className="font-medium text-white">Confirmation:</span> {scenario.confirmation}
              </p>
              <p>
                <span className="font-medium text-white">Invalidation:</span> {scenario.invalidation}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
