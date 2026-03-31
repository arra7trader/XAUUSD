import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { QuizRunner } from "@/components/quiz-runner";
import { buildMetadata } from "@/lib/metadata";
import { getLessons, getQuizBySlug } from "@/lib/content";

type QuizPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: QuizPageProps): Promise<Metadata> {
  const { slug } = await params;
  const quiz = await getQuizBySlug(slug);

  if (!quiz) {
    return buildMetadata({
      title: "Quiz Tidak Ditemukan",
      description: "Quiz yang dicari belum tersedia.",
      path: `/quiz/${slug}`,
    });
  }

  return buildMetadata({
    title: quiz.title,
    description: quiz.summary,
    path: `/quiz/${quiz.slug}`,
    type: "article",
  });
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { slug } = await params;
  const [quiz, lessons] = await Promise.all([getQuizBySlug(slug), getLessons()]);

  if (!quiz) {
    notFound();
  }

  const relatedLessons = lessons.filter((lesson) =>
    quiz.lessonSlugs.includes(lesson.slug)
  );

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr,1.2fr] lg:px-8 lg:py-14">
      <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            Quiz
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-white">{quiz.title}</h1>
        </div>

        <div className="space-y-3">
          <p className="text-sm leading-7 text-slate-300">
            Kerjakan kuis ini untuk mengecek apakah logika pembacaan struktur, makro,
            atau manajemen risiko sudah benar-benar nyambung.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-white">Materi terkait</p>
          {relatedLessons.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/materi/${lesson.slug}`}
              className="block rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              {lesson.title}
            </Link>
          ))}
        </div>
      </aside>

      <QuizRunner quiz={quiz} />
    </div>
  );
}
