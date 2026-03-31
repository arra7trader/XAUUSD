import { defineArrayMember, defineField, defineType } from "sanity";

export const weeklyAnalysisType = defineType({
  name: "weeklyAnalysis",
  title: "Weekly Analysis",
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
      name: "publishDate",
      title: "Publish Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "marketBiasSummary",
      title: "Market Bias Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "educationalNotes",
      title: "Educational Notes",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(2),
    }),
    defineField({
      name: "linkedLessons",
      title: "Linked Lessons",
      type: "array",
      of: [{ type: "reference", to: [{ type: "lesson" }] }],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 3", value: "h3" },
          ],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});
