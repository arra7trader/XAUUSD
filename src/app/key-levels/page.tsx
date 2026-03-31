import { buildMetadata } from "@/lib/metadata";
import { keyLevels } from "@/lib/analysis-data";

const typeStyles = {
  attack: "border-amber-300/30 bg-amber-300/10 text-amber-100",
  defense: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  liquidity: "border-sky-300/30 bg-sky-300/10 text-sky-100",
};

export const metadata = buildMetadata({
  title: "Key Levels XAUUSD",
  description:
    "Peta key levels XAUUSD: previous high-low, session range, liquidity pool, dan breakout origin.",
  path: "/key-levels",
});

export default function KeyLevelsPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="space-y-5">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Key Levels
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Level bukan garis sakti, tetapi area tempat market menunjukkan niat
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Fokus utama bukan apakah harga menyentuh level, tetapi apakah level itu ditolak,
          diterima, disapu, atau direclaim.
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {keyLevels.map((level) => (
          <article
            key={level.label}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${typeStyles[level.type]}`}
              >
                {level.type}
              </span>
              <p className="text-sm text-slate-400">{level.zone}</p>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-white">{level.label}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{level.intent}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
