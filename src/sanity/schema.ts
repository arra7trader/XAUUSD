import { caseStudyType } from "@/sanity/schemaTypes/caseStudyType";
import { courseType } from "@/sanity/schemaTypes/courseType";
import { glossaryTermType } from "@/sanity/schemaTypes/glossaryTermType";
import { lessonType } from "@/sanity/schemaTypes/lessonType";
import { moduleType } from "@/sanity/schemaTypes/moduleType";
import { quizType } from "@/sanity/schemaTypes/quizType";
import { weeklyAnalysisType } from "@/sanity/schemaTypes/weeklyAnalysisType";

export const schemaTypes = [
  courseType,
  moduleType,
  lessonType,
  quizType,
  glossaryTermType,
  caseStudyType,
  weeklyAnalysisType,
];
