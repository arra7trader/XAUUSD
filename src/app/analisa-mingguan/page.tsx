import Link from "next/link";

import { buildMetadata } from "@/lib/metadata";
import { getWeeklyAnalyses } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Analisa Mingguan XAUUSD",
  description:
    "Analisa mingguan edukatif untuk melatih cara menghubungkan bias market dengan skenario XAUUSD.",
  path: "/analisa-mingguan",
});

export default async function WeeklyAnalysisIndexPage() {
  const analyses = await getWeeklyAnalyses();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="space-y-5">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Analisa Mingguan
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Contoh analisa edukatif untuk melatih cara berpikir, bukan memberi sinyal
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Setiap analisa mingguan menunjukkan bagaimana bias, level penting, dan
          katalis ekonomi disusun menjadi skenario belajar yang bisa dievaluasi.
        </p>
        <p className="max-w-3xl text-sm leading-7 text-slate-400">
          {siteConfig.disclaimer}
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {analyses.map((analysis) => (
          <Link
            key={analysis.slug}
            href={`/analisa-mingguan/${analysis.slug}`}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            <p className="font-mono text-xs tracking-[0.24em] text-slate-500 uppercase">
              {analysis.publishDate}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">{analysis.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {analysis.marketBiasSummary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
