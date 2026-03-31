import Link from "next/link";

import type { Course } from "@/lib/types";

type LearningPathSidebarProps = {
  course: Course;
  activeLessonSlug?: string;
};

export function LearningPathSidebar({
  course,
  activeLessonSlug,
}: LearningPathSidebarProps) {
  return (
    <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Roadmap Belajar
        </p>
        <h2 className="text-2xl font-semibold text-white">{course.title}</h2>
        <p className="text-sm leading-7 text-slate-400">{course.summary}</p>
      </div>

      <div className="mt-8 space-y-6">
        {course.modules.map((module) => (
          <div key={module.slug} className="space-y-3">
            <div>
              <p className="text-xs tracking-[0.18em] text-slate-500 uppercase">
                Modul {module.order}
              </p>
              <h3 className="text-base font-medium text-white">{module.title}</h3>
              <p className="text-sm leading-6 text-slate-400">{module.summary}</p>
            </div>

            <div className="space-y-2">
              {module.lessons.map((lesson) => {
                const isActive = lesson.slug === activeLessonSlug;

                return (
                  <Link
                    key={lesson.slug}
                    href={`/materi/${lesson.slug}`}
                    className={`block rounded-2xl border px-4 py-3 transition ${
                      isActive
                        ? "border-amber-300/40 bg-amber-300/10 text-white"
                        : "border-white/8 bg-slate-900/70 text-slate-300 hover:border-white/20 hover:bg-white/[0.06]"
                    }`}
                  >
                    <p className="text-sm font-medium">{lesson.title}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {lesson.level} · {lesson.estimatedMinutes} menit
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
