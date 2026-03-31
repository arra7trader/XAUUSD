import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/metadata";
import { getCaseStudies, getCaseStudyBySlug, getLessons } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return buildMetadata({
      title: "Studi Kasus Tidak Ditemukan",
      description: "Studi kasus yang dicari belum tersedia.",
      path: `/studi-kasus/${slug}`,
    });
  }

  return buildMetadata({
    title: caseStudy.title,
    description: caseStudy.summary,
    path: `/studi-kasus/${caseStudy.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const [caseStudy, lessons, allCaseStudies] = await Promise.all([
    getCaseStudyBySlug(slug),
    getLessons(),
    getCaseStudies(),
  ]);

  if (!caseStudy) {
    notFound();
  }

  const linkedLessons = lessons.filter((lesson) =>
    caseStudy.lessonSlugs.includes(lesson.slug)
  );
  const relatedCases = allCaseStudies.filter((item) => item.slug !== caseStudy.slug);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs text-amber-100 capitalize">
            {caseStudy.direction}
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
            {caseStudy.timeframe}
          </span>
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {caseStudy.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          {caseStudy.summary}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <article className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Thesis
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">{caseStudy.thesis}</p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Trigger Factors
            </p>
            <div className="mt-4 space-y-3">
              {caseStudy.triggerFactors.map((factor) => (
                <div
                  key={factor}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-slate-300"
                >
                  {factor}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-rose-300/20 bg-rose-300/8 p-5">
            <p className="text-xs font-semibold tracking-[0.24em] text-rose-100 uppercase">
              Invalidation
            </p>
            <p className="mt-3 text-sm leading-7 text-rose-50/90">
              {caseStudy.invalidationReason}
            </p>
          </div>
        </article>

        <aside className="space-y-6">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Panduan Replay
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">{caseStudy.embedNote}</p>
            <Link
              href="/chart-lab"
              className="mt-5 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
            >
              Buka chart lab
            </Link>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Materi Terkait
            </p>
            <div className="mt-4 space-y-3">
              {linkedLessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/materi/${lesson.slug}`}
                  className="block rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  {lesson.title}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 text-sm leading-7 text-slate-400">
            <p className="font-medium text-white">Disclaimer</p>
            <p className="mt-3">{siteConfig.disclaimer}</p>
          </section>
        </aside>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Lanjut Belajar
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Baca studi kasus lain untuk membandingkan konteks market
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {relatedCases.map((item) => (
            <Link
              key={item.slug}
              href={`/studi-kasus/${item.slug}`}
              className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
