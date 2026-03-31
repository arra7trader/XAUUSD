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
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="space-y-5">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          War Room Chart
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Tempat utama untuk membedah chart live XAUUSD dengan kerangka analisa yang rapi
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Gunakan chart embed untuk membaca structure, session range, liquidity pool,
          dan respons harga terhadap level. Fokus halaman ini adalah analisa aktif,
          bukan sinyal trading.
        </p>
      </section>

      <ChartEmbedPanel />

      <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Checklist Analisa
            </p>
          <div className="mt-5 space-y-3">
            {checklist.map((item, index) => (
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

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            Reminder Penting
          </p>
          <div className="mt-5 grid gap-4">
            {[
              "Jika breakout terjadi menjelang data besar, tunggu penerimaan harga.",
              "Jika likuiditas high/low baru saja disapu, perhatikan apakah market menerima sapuan itu atau justru menolak.",
              "Jika narasi makro bertentangan dengan struktur intraday, beri bobot lebih besar pada timeframe dan katalis yang lebih kuat.",
            ].map((note) => (
              <div
                key={note}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-300"
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
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Replay Desk
            </p>
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
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6"
            >
              <p className="font-mono text-xs tracking-[0.22em] text-slate-500 uppercase">
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
