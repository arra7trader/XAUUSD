import { GlossarySearch } from "@/components/glossary-search";
import { buildMetadata } from "@/lib/metadata";
import { getGlossary } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Glossary XAUUSD",
  description:
    "Kamus istilah technical, macro, risk, dan behavior untuk membantu memahami analisa XAUUSD.",
  path: "/glossary",
});

export default async function GlossaryPage() {
  const glossary = await getGlossary();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="space-y-5">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Glossary
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Kamus istilah yang paling sering muncul saat belajar dan menganalisa XAUUSD
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Gunakan halaman ini saat menemukan istilah baru di materi, studi kasus,
          atau analisa mingguan. Semua definisi dibuat ringkas, relevan, dan
          langsung terhubung ke konteks emas.
        </p>
      </section>

      <GlossarySearch terms={glossary} />
    </div>
  );
}
