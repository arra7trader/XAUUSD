import Link from "next/link";

import type { CaseStudy } from "@/lib/types";

const directionClasses: Record<CaseStudy["direction"], string> = {
  bullish: "text-emerald-200 border-emerald-300/30 bg-emerald-300/10",
  bearish: "text-rose-200 border-rose-300/30 bg-rose-300/10",
  mixed: "text-sky-200 border-sky-300/30 bg-sky-300/10",
};

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/studi-kasus/${caseStudy.slug}`}
      className="group rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${directionClasses[caseStudy.direction]}`}
        >
          {caseStudy.direction}
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
          {caseStudy.timeframe}
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-white">{caseStudy.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{caseStudy.summary}</p>

      <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-400">
        <p className="font-medium text-white">Thesis</p>
        <p className="mt-2">{caseStudy.thesis}</p>
      </div>
    </Link>
  );
}
