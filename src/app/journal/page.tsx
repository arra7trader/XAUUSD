import { buildMetadata } from "@/lib/metadata";
import { journalEntries } from "@/lib/analysis-data";

export const metadata = buildMetadata({
  title: "Journal Analisa XAUUSD",
  description:
    "Journal analisa XAUUSD untuk menyimpan market state, thesis, watchlist, dan pelajaran dari pembacaan chart.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="space-y-5">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Journal
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Simpan thesis dan evaluasi supaya pembacaan chart makin tajam
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Journal bukan untuk membuktikan kamu benar. Fungsinya adalah membedakan
          kapan kita salah bias, salah timing, atau salah membaca acceptance.
        </p>
      </section>

      <div className="space-y-5">
        {journalEntries.map((entry) => (
          <article
            key={`${entry.date}-${entry.title}`}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs tracking-[0.24em] text-slate-500 uppercase">
                  {entry.date}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">{entry.title}</h2>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs capitalize text-slate-300">
                {entry.marketState.replace("-", " ")}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-300">{entry.thesis}</p>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr,0.85fr]">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
                <p className="text-sm font-medium text-white">What to watch</p>
                <div className="mt-3 space-y-3">
                  {entry.whatToWatch.map((item) => (
                    <div key={item} className="text-sm leading-7 text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-amber-300/20 bg-amber-300/8 p-4">
                <p className="text-sm font-medium text-white">Lesson</p>
                <p className="mt-3 text-sm leading-7 text-amber-50/90">{entry.lesson}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
