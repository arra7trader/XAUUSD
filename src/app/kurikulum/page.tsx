import Link from "next/link";

import { buildMetadata } from "@/lib/metadata";
import { getCourse } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Kurikulum XAUUSD",
  description:
    "Roadmap belajar XAUUSD dari dasar candlestick, market structure, liquidity, timing, fundamental, sampai framework analisa mandiri.",
  path: "/kurikulum",
});

export default async function CurriculumPage() {
  const course = await getCourse();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="space-y-6">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Kurikulum
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Roadmap belajar XAUUSD yang dibuat supaya kamu paham struktur dan alasan geraknya
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">{course.summary}</p>
      </section>

      <section className="mt-10 space-y-6">
        {course.modules.map((module) => (
          <article
            key={module.slug}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[0.8fr,1.2fr]">
              <div>
                <p className="text-xs tracking-[0.24em] text-slate-500 uppercase">
                  Modul {module.order}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">{module.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">{module.summary}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {module.lessons.map((lesson) => (
                  <Link
                    key={lesson.slug}
                    href={`/materi/${lesson.slug}`}
                    className="rounded-[1.7rem] border border-white/10 bg-slate-950/70 p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs text-amber-100">
                        {lesson.level}
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        {lesson.estimatedMinutes} menit
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{lesson.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{lesson.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
