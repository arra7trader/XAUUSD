import { buildMetadata } from "@/lib/metadata";
import { nakedChartPlaybook } from "@/lib/analysis-data";

export const metadata = buildMetadata({
  title: "Naked Chart Playbook",
  description:
    "Playbook naked chart XAUUSD: sweep and reclaim, break and hold, failed continuation, dan session expansion.",
  path: "/naked-chart",
});

export default function NakedChartPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="space-y-5">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Naked Chart
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Membaca XAUUSD dari respons harga, bukan dari tumpukan indikator
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Yang kita cari adalah acceptance, rejection, failure, reclaim, dan follow-through.
          Candle hanya bahasa. Maknanya muncul saat dibaca bersama lokasi dan struktur.
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {nakedChartPlaybook.map((item) => (
          <article
            key={item.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6"
          >
            <h2 className="text-3xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.explanation}</p>
          </article>
        ))}
      </div>

      <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Bahasa yang Diprioritaskan
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {[
            "accepted above",
            "accepted below",
            "sweep and reclaim",
            "failed breakout",
            "break and hold",
            "auction still balanced",
          ].map((term) => (
            <div
              key={term}
              className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
            >
              {term}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
