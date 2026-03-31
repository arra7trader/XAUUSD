import Link from "next/link";
import { PortableText } from "@portabletext/react";

import { BookmarkToggle } from "@/components/bookmark-toggle";
import { portableTextComponents } from "@/components/portable-text-components";
import type { CaseStudy, Lesson, Quiz } from "@/lib/types";

type LessonRendererProps = {
  lesson: Lesson;
  relatedCaseStudies: CaseStudy[];
  quiz?: Quiz | null;
};

export function LessonRenderer({
  lesson,
  relatedCaseStudies,
  quiz,
}: LessonRendererProps) {
  return (
    <article className="space-y-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-100">
            {lesson.level}
          </span>
          <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
            {lesson.estimatedMinutes} menit
          </span>
          <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
            {lesson.moduleTitle}
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {lesson.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            {lesson.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <BookmarkToggle
            storageKey={`bookmark:${lesson.slug}`}
            label="Simpan materi"
          />
          {quiz ? (
            <Link
              href={`/quiz/${quiz.slug}`}
              className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:bg-emerald-300/20"
            >
              Kerjakan quiz
            </Link>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
        <div className="space-y-6">
          <PortableText value={lesson.body} components={portableTextComponents} />
        </div>

        <div className="space-y-6">
          <section className="rounded-[1.6rem] border border-white/10 bg-slate-950/60 p-5">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Inti Materi
            </p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              {lesson.keyTakeaways.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                >
                  {point}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.6rem] border border-white/10 bg-slate-950/60 p-5">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Lanjut Praktik
            </p>
            <div className="mt-4 space-y-3">
              {relatedCaseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/studi-kasus/${study.slug}`}
                  className="block rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <p className="font-medium text-white">{study.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {study.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
