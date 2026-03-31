import type { MetadataRoute } from "next";

import {
  sampleCaseStudies,
  sampleGlossary,
  sampleLessons,
  sampleQuizzes,
  sampleWeeklyAnalyses,
} from "@/lib/sample-content";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/kurikulum",
    "/chart-lab",
    "/studi-kasus",
    "/glossary",
    "/analisa-mingguan",
    "/studio",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...sampleLessons.map((lesson) => ({
      url: `${siteConfig.url}/materi/${lesson.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...sampleQuizzes.map((quiz) => ({
      url: `${siteConfig.url}/quiz/${quiz.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...sampleCaseStudies.map((item) => ({
      url: `${siteConfig.url}/studi-kasus/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...sampleWeeklyAnalyses.map((item) => ({
      url: `${siteConfig.url}/analisa-mingguan/${item.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...sampleGlossary.map((item) => ({
      url: `${siteConfig.url}/glossary#${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
