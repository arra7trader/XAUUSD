import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LearningPathSidebar } from "@/components/learning-path-sidebar";
import { LessonRenderer } from "@/components/lesson-renderer";
import {
  getCaseStudies,
  getCourse,
  getLessonBySlug,
  getQuizBySlug,
} from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug);

  if (!lesson) {
    return buildMetadata({
      title: "Materi Tidak Ditemukan",
      description: "Materi yang dicari belum tersedia.",
      path: `/materi/${slug}`,
    });
  }

  return buildMetadata({
    title: lesson.title,
    description: lesson.summary,
    path: `/materi/${lesson.slug}`,
    type: "article",
  });
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const [lesson, course, caseStudies] = await Promise.all([
    getLessonBySlug(slug),
    getCourse(),
    getCaseStudies(),
  ]);

  if (!lesson) {
    notFound();
  }

  const quiz = lesson.quizSlug ? await getQuizBySlug(lesson.quizSlug) : null;
  const relatedCaseStudies = caseStudies.filter((study) =>
    lesson.relatedCaseStudies.includes(study.slug)
  );

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.72fr,1.28fr] lg:px-8 lg:py-14">
      <LearningPathSidebar course={course} activeLessonSlug={lesson.slug} />
      <LessonRenderer
        lesson={lesson}
        relatedCaseStudies={relatedCaseStudies}
        quiz={quiz}
      />
    </div>
  );
}
