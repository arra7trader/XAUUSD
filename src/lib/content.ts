import type {
  CaseStudy,
  Course,
  GlossaryTerm,
  Lesson,
  Quiz,
  WeeklyAnalysis,
} from "@/lib/types";
import {
  sampleCaseStudies,
  sampleCourse,
  sampleGlossary,
  sampleLessons,
  sampleQuizzes,
  sampleStats,
  sampleWeeklyAnalyses,
} from "@/lib/sample-content";
import { getSanityClient } from "@/lib/sanity/client";
import {
  caseStudiesQuery,
  caseStudyBySlugQuery,
  courseQuery,
  glossaryQuery,
  lessonBySlugQuery,
  lessonsQuery,
  quizBySlugQuery,
  quizzesQuery,
  weeklyAnalysesQuery,
  weeklyAnalysisBySlugQuery,
} from "@/lib/sanity/queries";

async function sanityFetch<T>(
  query: string,
  params: Record<string, string> = {},
  fallback: T
) {
  const client = getSanityClient();

  if (!client) {
    return fallback;
  }

  try {
    return await client.fetch<T>(query, params, {
      next: {
        revalidate: 3600,
      },
    });
  } catch {
    return fallback;
  }
}

export async function getCourse(): Promise<Course> {
  return sanityFetch<Course>(courseQuery, {}, sampleCourse);
}

export async function getLessons(): Promise<Lesson[]> {
  return sanityFetch<Lesson[]>(lessonsQuery, {}, sampleLessons);
}

export async function getLessonBySlug(slug: string): Promise<Lesson | null> {
  return sanityFetch<Lesson | null>(
    lessonBySlugQuery,
    { slug },
    sampleLessons.find((item) => item.slug === slug) ?? null
  );
}

export async function getQuizzes(): Promise<Quiz[]> {
  return sanityFetch<Quiz[]>(quizzesQuery, {}, sampleQuizzes);
}

export async function getQuizBySlug(slug: string): Promise<Quiz | null> {
  return sanityFetch<Quiz | null>(
    quizBySlugQuery,
    { slug },
    sampleQuizzes.find((item) => item.slug === slug) ?? null
  );
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return sanityFetch<CaseStudy[]>(caseStudiesQuery, {}, sampleCaseStudies);
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  return sanityFetch<CaseStudy | null>(
    caseStudyBySlugQuery,
    { slug },
    sampleCaseStudies.find((item) => item.slug === slug) ?? null
  );
}

export async function getGlossary(): Promise<GlossaryTerm[]> {
  return sanityFetch<GlossaryTerm[]>(glossaryQuery, {}, sampleGlossary);
}

export async function getWeeklyAnalyses(): Promise<WeeklyAnalysis[]> {
  return sanityFetch<WeeklyAnalysis[]>(
    weeklyAnalysesQuery,
    {},
    sampleWeeklyAnalyses
  );
}

export async function getWeeklyAnalysisBySlug(
  slug: string
): Promise<WeeklyAnalysis | null> {
  return sanityFetch<WeeklyAnalysis | null>(
    weeklyAnalysisBySlugQuery,
    { slug },
    sampleWeeklyAnalyses.find((item) => item.slug === slug) ?? null
  );
}

export function getSiteStats() {
  return sampleStats;
}
