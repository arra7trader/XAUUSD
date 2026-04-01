import Link from "next/link";

import { ChartEmbedPanel } from "@/components/chart-embed-panel";
import { journalEntries, scenarios } from "@/lib/analysis-data";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "War Room Chart XAUUSD",
  description:
    "War room chart XAUUSD untuk membaca structure, key levels, liquidity, dan acceptance dari live chart.",
  path: "/chart-lab",
});

const checklist = [
  "Tentukan bias weekly dan daily sebelum melihat intraday.",
  "Tandai high-low penting, area demand/supply, dan likuiditas terdekat.",
  "Catat sesi market yang aktif dan data ekonomi pada hari itu.",
  "Cari apakah harga diterima atau ditolak setelah menembus level.",
  "Tulis invalidasi skenario sebelum mengambil kesimpulan.",
];

export default async function ChartLabPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1.08fr,0.92fr]">
        <div className="panel rounded-[2.4rem] p-7 sm:p-9">
          <div className="space-y-6">
            <div className="eyebrow">War room chart</div>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Halaman chart yang dibuat supaya enak dipakai lama, bukan sekadar kelihatan ramai
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Pakai halaman ini untuk membaca structure, session range, liquidity pool,
                dan respons harga terhadap level. Mood desainnya saya buat lebih tenang
                supaya keputusan tetap jernih saat fokus ke chart.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Primary lens", value: "acceptance" },
                { label: "Session mode", value: "London / New York" },
                { label: "Desk rhythm", value: "slow and clear" },
              ].map((item) => (
                <div key={item.label} className="panel-soft rounded-[1.5rem] p-4">
                  <p className="metric-label">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel-strong rounded-[2.4rem] p-6 sm:p-7">
          <p className="metric-label">Desk intent</p>
          <div className="mt-5 grid gap-3">
            {[
              "Jangan cari entry dulu. Cari area yang benar-benar diterima atau ditolak.",
              "Jika expansion awal terlihat meyakinkan, cek apakah H1 memberi follow-through.",
              "Jika market terasa membingungkan, kemungkinan besar bias terbaik memang wait.",
            ].map((note) => (
              <div
                key={note}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChartEmbedPanel />

      <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="panel rounded-[2rem] p-6">
          <p className="metric-label">Checklist analisa</p>
          <div className="mt-5 space-y-3">
            {checklist.map((item, index) => (
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

        <div className="panel-strong rounded-[2rem] p-6">
          <p className="metric-label">Reminder penting</p>
          <div className="mt-5 grid gap-4">
            {[
              "Jika breakout terjadi menjelang data besar, tunggu penerimaan harga.",
              "Jika likuiditas high/low baru saja disapu, perhatikan apakah market menerima sapuan itu atau justru menolak.",
              "Jika narasi makro bertentangan dengan struktur intraday, beri bobot lebih besar pada timeframe dan katalis yang lebih kuat.",
            ].map((note) => (
              <div
                key={note}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300"
              >
                {note}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            {siteConfig.disclaimer}
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="metric-label">Replay desk</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Bandingkan live chart dengan skenario dan catatan desk
            </h2>
          </div>
          <Link
            href="/journal"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
          >
            Buka journal
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <article
              key={scenario.title}
              className="panel rounded-[1.9rem] p-6"
            >
              <p className="metric-label">
                Scenario {index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{scenario.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                <span className="font-medium text-white">Trigger:</span> {scenario.trigger}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                <span className="font-medium text-white">Check desk note:</span>{" "}
                {journalEntries[index]?.lesson}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
