import { defineField, defineType } from "sanity";

export const glossaryTermType = defineType({
  name: "glossaryTerm",
  title: "Glossary Term",
  type: "document",
  fields: [
    defineField({
      name: "term",
      title: "Term",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "term", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Technical", value: "Technical" },
          { title: "Macro", value: "Macro" },
          { title: "Risk", value: "Risk" },
          { title: "Behavior", value: "Behavior" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "definition",
      title: "Definition",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "whyItMatters",
      title: "Why It Matters",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
});
