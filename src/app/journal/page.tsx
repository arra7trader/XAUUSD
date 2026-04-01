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
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="panel rounded-[2.4rem] p-7 sm:p-9">
          <div className="space-y-6">
            <div className="eyebrow">Journal</div>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Simpan thesis dan evaluasi dalam format yang ringan dibaca, bukan seperti log yang melelahkan
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Journal ini saya desain lebih tenang supaya kamu bisa menikmati proses review.
                Fokusnya tetap sama: membedakan kapan kita salah bias, salah timing,
                atau salah membaca acceptance.
              </p>
            </div>
          </div>
        </div>

        <div className="panel-strong rounded-[2.4rem] p-6 sm:p-7">
          <p className="metric-label">Why this matters</p>
          <div className="mt-5 grid gap-3">
            {[
              "Catatan yang bersih membantu melihat pola salah yang berulang.",
              "Kalimat yang singkat lebih mudah ditinjau ulang daripada jurnal yang terlalu penuh.",
              "Tujuannya bukan menang argumen dengan market, tapi menaikkan kualitas pembacaan chart.",
            ].map((item) => (
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

      <div className="grid gap-5 xl:grid-cols-2">
        {journalEntries.map((entry) => (
          <article
            key={`${entry.date}-${entry.title}`}
            className="panel rounded-[2rem] p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="metric-label">{entry.date}</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">{entry.title}</h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs capitalize text-slate-300">
                {entry.marketState.replace("-", " ")}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-300">{entry.thesis}</p>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr,0.85fr]">
              <div className="panel-soft rounded-[1.5rem] p-4">
                <p className="metric-label">What to watch</p>
                <div className="mt-3 space-y-3">
                  {entry.whatToWatch.map((item) => (
                    <div key={item} className="text-sm leading-7 text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-amber-300/20 bg-amber-300/8 p-4">
                <p className="metric-label text-amber-100/80">Lesson</p>
                <p className="mt-3 text-sm leading-7 text-amber-50/90">{entry.lesson}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
