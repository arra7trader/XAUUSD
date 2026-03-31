import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-8 text-slate-300">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 pl-5 text-base leading-8 text-slate-300">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="list-disc">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  },
};
