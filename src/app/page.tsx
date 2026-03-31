import Link from "next/link";

import { CaseStudyCard } from "@/components/case-study-card";
import { buildMetadata } from "@/lib/metadata";
import {
  getCaseStudies,
  getCourse,
  getGlossary,
  getSiteStats,
  getWeeklyAnalyses,
} from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Belajar XAUUSD dari Dasar sampai Framework Analisa",
  description:
    "Platform edukasi XAUUSD berbahasa Indonesia untuk memahami candlestick, market structure, faktor fundamental, studi kasus, dan chart live.",
  path: "/",
});

export default async function HomePage() {
  const [course, caseStudies, glossary, analyses] = await Promise.all([
    getCourse(),
    getCaseStudies(),
    getGlossary(),
    getWeeklyAnalyses(),
  ]);
  const stats = getSiteStats();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-end">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-amber-100 uppercase">
            Edukasi murni · Bahasa Indonesia · Tanpa sinyal
          </div>

          <div className="space-y-6">
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Website belajar XAUUSD yang fokus pada alasan kenapa chart bisa{" "}
              <span className="text-amber-200">naik, turun, dan berubah arah.</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Pelajari candlestick, market structure, liquidity, sesi market,
              CPI, NFP, FOMC, dan cara menyusun framework analisa mandiri tanpa
              bergantung pada tebakan.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/kurikulum"
              className="rounded-full border border-amber-300/40 bg-amber-300/15 px-6 py-3 text-sm font-medium text-amber-100 transition hover:bg-amber-300/25"
            >
              Mulai roadmap belajar
            </Link>
            <Link
              href="/chart-lab"
              className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08]"
            >
              Buka chart lab
            </Link>
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-6 shadow-2xl shadow-black/30">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="font-mono text-xs tracking-[0.24em] text-slate-500 uppercase">
                Modules
              </p>
              <p className="mt-4 text-4xl font-semibold text-white">{stats.modules}</p>
              <p className="mt-2 text-sm text-slate-400">Roadmap bertahap dari fondasi sampai framework.</p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="font-mono text-xs tracking-[0.24em] text-slate-500 uppercase">
                Lessons
              </p>
              <p className="mt-4 text-4xl font-semibold text-white">{stats.lessons}</p>
              <p className="mt-2 text-sm text-slate-400">Materi inti candlestick, macro, risk, dan timing.</p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="font-mono text-xs tracking-[0.24em] text-slate-500 uppercase">
                Case Studies
              </p>
              <p className="mt-4 text-4xl font-semibold text-white">{stats.caseStudies}</p>
              <p className="mt-2 text-sm text-slate-400">Contoh nyata kenapa pasar lanjut atau gagal.</p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="font-mono text-xs tracking-[0.24em] text-slate-500 uppercase">
                Glossary
              </p>
              <p className="mt-4 text-4xl font-semibold text-white">{stats.glossaryTerms}</p>
              <p className="mt-2 text-sm text-slate-400">Istilah teknikal, makro, risk, dan perilaku trader.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            Jalur Belajar
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Belajar secara berurutan supaya logika market tidak loncat-loncat
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            {course.heroLabel}. Mulai dari dasar instrumen, lanjut ke struktur harga,
            level dan likuiditas, lalu gabungkan dengan driver fundamental agar analisa
            lebih utuh.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {course.modules.slice(0, 4).map((module) => (
            <div
              key={module.slug}
              className="rounded-[1.8rem] border border-white/10 bg-slate-950/60 p-5"
            >
              <p className="text-xs tracking-[0.22em] text-slate-500 uppercase">
                Modul {module.order}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{module.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{module.summary}</p>
              <p className="mt-4 text-sm text-amber-100">
                {module.lessons.length} materi inti
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Studi Kasus Pilihan
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Lihat contoh kenapa chart emas lanjut atau gagal
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

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            Fokus Fundamental
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Jangan hanya lihat candle, baca juga cerita di baliknya
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "USD dan DXY",
              "Real yield dan obligasi",
              "CPI, NFP, dan FOMC",
              "Geopolitik dan risk sentiment",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.2rem] border border-white/10 bg-slate-950/70 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            Glossary Cepat
          </p>
          <div className="mt-5 space-y-4">
            {glossary.slice(0, 4).map((term) => (
              <div
                key={term.slug}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-white">{term.term}</p>
                  <span className="text-xs text-slate-500">{term.category}</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-400">{term.definition}</p>
              </div>
            ))}
          </div>
          <Link
            href="/glossary"
            className="mt-5 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
          >
            Buka glossary lengkap
          </Link>
        </div>
      </section>

      <section className="rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Analisa Mingguan
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Contoh bagaimana mengubah bias menjadi skenario belajar
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            {siteConfig.disclaimer}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {analyses.map((analysis) => (
            <Link
              key={analysis.slug}
              href={`/analisa-mingguan/${analysis.slug}`}
              className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <p className="font-mono text-xs tracking-[0.22em] text-slate-500 uppercase">
                {analysis.publishDate}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {analysis.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {analysis.marketBiasSummary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
