import type { Metadata } from "next";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

import { portableTextComponents } from "@/components/portable-text-components";
import { buildMetadata } from "@/lib/metadata";
import { getLessons, getWeeklyAnalysisBySlug } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

type WeeklyAnalysisPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: WeeklyAnalysisPageProps): Promise<Metadata> {
  const { slug } = await params;
  const analysis = await getWeeklyAnalysisBySlug(slug);

  if (!analysis) {
    return buildMetadata({
      title: "Analisa Tidak Ditemukan",
      description: "Analisa mingguan yang dicari belum tersedia.",
      path: `/analisa-mingguan/${slug}`,
    });
  }

  return buildMetadata({
    title: analysis.title,
    description: analysis.marketBiasSummary,
    path: `/analisa-mingguan/${analysis.slug}`,
    type: "article",
  });
}

export default async function WeeklyAnalysisPage({
  params,
}: WeeklyAnalysisPageProps) {
  const { slug } = await params;
  const [analysis, lessons] = await Promise.all([
    getWeeklyAnalysisBySlug(slug),
    getLessons(),
  ]);

  if (!analysis) {
    notFound();
  }

  const linkedLessons = lessons.filter((lesson) =>
    analysis.linkedLessons.includes(lesson.slug)
  );

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr,0.85fr] lg:px-8 lg:py-14">
      <article className="space-y-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8">
        <div>
          <p className="font-mono text-xs tracking-[0.24em] text-slate-500 uppercase">
            {analysis.publishDate}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {analysis.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            {analysis.marketBiasSummary}
          </p>
        </div>

        <div className="space-y-6">
          <PortableText value={analysis.body} components={portableTextComponents} />
        </div>
      </article>

      <aside className="space-y-6">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            Educational Notes
          </p>
          <div className="mt-4 space-y-3">
            {analysis.educationalNotes.map((note) => (
              <div
                key={note}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-slate-300"
              >
                {note}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            Materi Pendukung
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
    </div>
  );
}
