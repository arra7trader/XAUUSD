import { defineArrayMember, defineField, defineType } from "sanity";

export const quizType = defineType({
  name: "quiz",
  title: "Quiz",
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
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lessonRefs",
      title: "Related Lessons",
      type: "array",
      of: [{ type: "reference", to: [{ type: "lesson" }] }],
    }),
    defineField({
      name: "questions",
      title: "Questions",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "prompt",
              title: "Prompt",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "choices",
              title: "Choices",
              type: "array",
              of: [{ type: "string" }],
              validation: (rule) => rule.required().min(2),
            }),
            defineField({
              name: "correctIndex",
              title: "Correct Index",
              type: "number",
              validation: (rule) => rule.required().integer().min(0),
            }),
            defineField({
              name: "explanation",
              title: "Explanation",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});
