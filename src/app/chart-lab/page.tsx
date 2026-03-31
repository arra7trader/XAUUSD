import Link from "next/link";

import { CaseStudyCard } from "@/components/case-study-card";
import { ChartEmbedPanel } from "@/components/chart-embed-panel";
import { buildMetadata } from "@/lib/metadata";
import { getCaseStudies } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Chart Lab XAUUSD",
  description:
    "Latihan membaca live chart XAUUSD dengan checklist top-down analysis, level penting, timing sesi, dan faktor fundamental.",
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
  const caseStudies = await getCaseStudies();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="space-y-5">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Chart Lab
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Tempat berlatih membaca chart live XAUUSD dengan kerangka berpikir yang rapi
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Gunakan chart embed untuk membandingkan struktur, level, sesi, dan katalis
          makro. Fokus halaman ini adalah latihan analisa, bukan sinyal trading.
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
              Studi Kasus untuk Replay
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Latih mata chart dengan skenario yang sudah punya narasi
            </h2>
          </div>
          <Link
            href="/studi-kasus"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
          >
            Semua studi kasus
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </section>
    </div>
  );
}
