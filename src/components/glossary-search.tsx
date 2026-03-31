"use client";

import { useDeferredValue, useMemo, useState } from "react";

import type { GlossaryTerm } from "@/lib/types";

type GlossarySearchProps = {
  terms: GlossaryTerm[];
};

export function GlossarySearch({ terms }: GlossarySearchProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredTerms = useMemo(() => {
    const keyword = deferredQuery.trim().toLowerCase();

    if (!keyword) {
      return terms;
    }

    return terms.filter((term) => {
      const haystack = `${term.term} ${term.definition} ${term.whyItMatters}`.toLowerCase();
      return haystack.includes(keyword);
    });
  }, [deferredQuery, terms]);

  return (
    <section className="space-y-6">
      <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-5">
        <label className="mb-3 block text-sm font-medium text-white" htmlFor="glossary-search">
          Cari istilah
        </label>
        <input
          id="glossary-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Misalnya: liquidity, CPI, drawdown..."
          className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300/40"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredTerms.map((term) => (
          <article
            key={term.slug}
            className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{term.term}</h3>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                {term.category}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">{term.definition}</p>
            <p className="mt-4 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm leading-7 text-slate-400">
              <span className="font-medium text-white">Kenapa penting:</span>{" "}
              {term.whyItMatters}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
