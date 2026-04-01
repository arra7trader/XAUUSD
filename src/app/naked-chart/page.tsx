import { PlaybookGrid } from "@/components/candlestick-lab-sections";
import { buildMetadata } from "@/lib/metadata";
import { learningSteps, m5Playbooks } from "@/lib/candlestick-focus";

export const metadata = buildMetadata({
  title: "Pullback Playbook XAUUSD",
  description:
    "Cara membaca pullback, retrace, failed breakout, dan continuation di XAUUSD dengan pendekatan naked chart.",
  path: "/naked-chart",
});

export default function NakedChartPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="grid gap-6 lg:grid-cols-[1fr,0.94fr]">
        <div className="panel rounded-[2.4rem] p-6 sm:p-8">
          <p className="metric-label">Pullback playbook</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Membaca retrace dan pullback XAUUSD tanpa takut pada candle lawan pertama
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Naked chart yang baik tidak bertanya &quot;ini candle apa?&quot;, tetapi bertanya
            &quot;apakah market cuma jeda atau benar-benar mulai membalik?&quot;. Itu inti dari membaca pullback secara
            expert.
          </p>
        </div>

        <div className="panel-strong rounded-[2.4rem] p-6 sm:p-8">
          <p className="metric-label">Yang harus diamati</p>
          <div className="mt-5 space-y-3">
            {[
              "Ukuran pullback dibanding impulse sebelumnya.",
              "Apakah candle lawan close menembus origin breakout atau tidak.",
              "Adakah acceptance baru di bawah higher low atau di atas lower high.",
              "Apakah retrace terjadi pada fase sepi atau justru sesudah sweep level penting.",
            ].map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel rounded-[2.3rem] p-6 sm:p-8">
        <p className="metric-label">Urutan baca</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Pullback yang baik dibaca dengan urutan ini
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {learningSteps.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="metric-label">Playbook examples</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Empat bentuk pullback dan continuation yang wajib kamu kenali di XAUUSD
          </h2>
        </div>
        <PlaybookGrid playbooks={m5Playbooks} />
      </section>
    </div>
  );
}
