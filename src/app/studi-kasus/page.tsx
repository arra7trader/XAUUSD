import { CaseStudyCard } from "@/components/case-study-card";
import { buildMetadata } from "@/lib/metadata";
import { getCaseStudies } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Studi Kasus XAUUSD",
  description:
    "Kumpulan studi kasus untuk memahami kenapa chart XAUUSD bisa bullish, bearish, atau mixed dalam konteks nyata.",
  path: "/studi-kasus",
});

export default async function CaseStudyIndexPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="space-y-5">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Studi Kasus
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Belajar dari contoh pergerakan chart emas yang punya sebab, bukan kebetulan
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Setiap studi kasus dipecah ke thesis, trigger, dan invalidasi supaya kamu
          belajar membaca proses market, bukan cuma hasil akhirnya.
        </p>
      </section>

      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </div>
  );
}
