import { defineField, defineType } from "sanity";

export const caseStudyType = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "direction",
      title: "Direction",
      type: "string",
      options: {
        list: [
          { title: "Bullish", value: "bullish" },
          { title: "Bearish", value: "bearish" },
          { title: "Mixed", value: "mixed" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "timeframe",
      title: "Timeframe",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thesis",
      title: "Thesis",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "triggerFactors",
      title: "Trigger Factors",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(2),
    }),
    defineField({
      name: "invalidationReason",
      title: "Invalidation Reason",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "embedNote",
      title: "Embed Note",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "linkedLessons",
      title: "Linked Lessons",
      type: "array",
      of: [{ type: "reference", to: [{ type: "lesson" }] }],
    }),
  ],
});
