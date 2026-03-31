import { buildMetadata } from "@/lib/metadata";
import { currentWarRoom, structureMap } from "@/lib/analysis-data";

export const metadata = buildMetadata({
  title: "Market Structure XAUUSD",
  description:
    "Framework pembacaan market structure XAUUSD: trend bullish, trend bearish, range, dan transition.",
  path: "/market-structure",
});

export default function MarketStructurePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="space-y-5">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Market Structure
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Baca dulu state market sebelum bicara arah XAUUSD
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Pada emas, kesalahan terbesar biasanya terjadi saat trader memaksa breakout,
          reversal, atau continuation tanpa mengetahui market sedang trend, range, atau transition.
        </p>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
        <p className="text-sm text-slate-400">
          State desk saat ini:{" "}
          <span className="font-semibold capitalize text-white">
            {currentWarRoom.dominantStructure.replace("-", " ")}
          </span>
        </p>
        <p className="mt-3 max-w-4xl text-base leading-8 text-slate-300">
          {currentWarRoom.narrative}
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {structureMap.map((item) => (
          <article
            key={item.title}
            className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6"
          >
            <h2 className="text-3xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.reading}</p>
            <div className="mt-5 rounded-[1.4rem] border border-rose-300/20 bg-rose-300/8 p-4 text-sm leading-7 text-rose-50/90">
              <span className="font-medium text-white">Jebakan:</span> {item.danger}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
