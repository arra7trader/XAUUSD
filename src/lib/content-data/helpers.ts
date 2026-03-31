import type { RichTextBlock } from "@/lib/types";

function block(style: string, text: string): RichTextBlock {
  return {
    _key: `${style}-${text.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`,
    _type: "block",
    style,
    markDefs: [],
    children: [
      {
        _key: `span-${text.slice(0, 12).replace(/\s+/g, "-").toLowerCase()}`,
        _type: "span",
        marks: [],
        text,
      },
    ],
  };
}

export function paragraph(text: string) {
  return block("normal", text);
}

export function heading(text: string) {
  return block("h3", text);
}
