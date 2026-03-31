export type RichTextSpan = {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
};

export type RichTextBlock = {
  _key: string;
  _type: "block";
  children: RichTextSpan[];
  markDefs: unknown[];
  style: string;
};

export type LessonLevel =
  | "Pemula"
  | "Pemula-Menengah"
  | "Menengah"
  | "Menengah-Lanjut"
  | "Lanjut";

export type MarketDirection = "bullish" | "bearish" | "mixed";

export type LessonPreview = {
  title: string;
  slug: string;
  level: LessonLevel;
  summary: string;
  estimatedMinutes: number;
};

export type Module = {
  title: string;
  slug: string;
  order: number;
  summary: string;
  lessons: LessonPreview[];
};

export type Course = {
  title: string;
  slug: string;
  summary: string;
  heroLabel: string;
  modules: Module[];
};

export type Lesson = LessonPreview & {
  moduleSlug: string;
  moduleTitle: string;
  body: RichTextBlock[];
  keyTakeaways: string[];
  relatedCaseStudies: string[];
  quizSlug?: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
};

export type Quiz = {
  title: string;
  slug: string;
  summary: string;
  lessonSlugs: string[];
  questions: QuizQuestion[];
};

export type CaseStudy = {
  title: string;
  slug: string;
  direction: MarketDirection;
  timeframe: string;
  summary: string;
  thesis: string;
  triggerFactors: string[];
  invalidationReason: string;
  embedNote: string;
  lessonSlugs: string[];
};

export type GlossaryTerm = {
  term: string;
  slug: string;
  category: "Technical" | "Macro" | "Risk" | "Behavior";
  definition: string;
  whyItMatters: string;
};

export type WeeklyAnalysis = {
  title: string;
  slug: string;
  publishDate: string;
  marketBiasSummary: string;
  educationalNotes: string[];
  linkedLessons: string[];
  body: RichTextBlock[];
};

export type SiteStats = {
  modules: number;
  lessons: number;
  caseStudies: number;
  glossaryTerms: number;
};
