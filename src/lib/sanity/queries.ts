export const courseQuery = `*[_type == "course" && slug.current == "xauusd-extreme-expert"][0]{
  title,
  "slug": slug.current,
  summary,
  heroLabel,
  modules[]->{
    title,
    "slug": slug.current,
    order,
    summary,
    lessons[]->{
      title,
      "slug": slug.current,
      level,
      summary,
      estimatedMinutes
    }
  }
}`;

export const lessonsQuery = `*[_type == "lesson"] | order(title asc){
  title,
  "slug": slug.current,
  level,
  summary,
  estimatedMinutes,
  "moduleSlug": module->slug.current,
  "moduleTitle": module->title,
  body,
  keyTakeaways,
  "relatedCaseStudies": relatedCaseStudies[]->slug.current,
  "quizSlug": quizRef->slug.current
}`;

export const lessonBySlugQuery = `*[_type == "lesson" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  level,
  summary,
  estimatedMinutes,
  "moduleSlug": module->slug.current,
  "moduleTitle": module->title,
  body,
  keyTakeaways,
  "relatedCaseStudies": relatedCaseStudies[]->slug.current,
  "quizSlug": quizRef->slug.current
}`;

export const quizzesQuery = `*[_type == "quiz"]{
  title,
  "slug": slug.current,
  summary,
  "lessonSlugs": lessonRefs[]->slug.current,
  questions[]{
    id,
    prompt,
    choices,
    correctIndex,
    explanation
  }
}`;

export const quizBySlugQuery = `*[_type == "quiz" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  summary,
  "lessonSlugs": lessonRefs[]->slug.current,
  questions[]{
    id,
    prompt,
    choices,
    correctIndex,
    explanation
  }
}`;

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(title asc){
  title,
  "slug": slug.current,
  direction,
  timeframe,
  summary,
  thesis,
  triggerFactors,
  invalidationReason,
  embedNote,
  "lessonSlugs": linkedLessons[]->slug.current
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  direction,
  timeframe,
  summary,
  thesis,
  triggerFactors,
  invalidationReason,
  embedNote,
  "lessonSlugs": linkedLessons[]->slug.current
}`;

export const glossaryQuery = `*[_type == "glossaryTerm"] | order(term asc){
  term,
  "slug": slug.current,
  category,
  definition,
  whyItMatters
}`;

export const weeklyAnalysesQuery = `*[_type == "weeklyAnalysis"] | order(publishDate desc){
  title,
  "slug": slug.current,
  publishDate,
  marketBiasSummary,
  educationalNotes,
  "linkedLessons": linkedLessons[]->slug.current,
  body
}`;

export const weeklyAnalysisBySlugQuery = `*[_type == "weeklyAnalysis" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  publishDate,
  marketBiasSummary,
  educationalNotes,
  "linkedLessons": linkedLessons[]->slug.current,
  body
}`;
