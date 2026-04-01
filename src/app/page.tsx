import Link from "next/link";

import {
  EditorialCTA,
  HeroPatternStack,
  PlaybookGrid,
  SourceDeck,
} from "@/components/candlestick-lab-sections";
import { buildMetadata } from "@/lib/metadata";
import {
  expertSources,
  focusPillars,
  inferenceNote,
  learningSteps,
  m5Playbooks,
  xauusdTraits,
} from "@/lib/candlestick-focus";

export const metadata = buildMetadata({
  title: "XAUUSD Candlestick Lab",
  description:
    "Website belajar expert candlestick XAUUSD yang fokus ke M5 price action, retrace, pullback, continuation, dan kenapa candle itu valid.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 xl:grid-cols-[1.02fr,0.98fr]">
        <div className="relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),transparent_30%),radial-gradient(circle_at_85%_18%,_rgba(34,211,238,0.12),transparent_24%),linear-gradient(180deg,rgba(10,18,28,0.94),rgba(7,12,18,0.9))] p-7 shadow-[0_40px_120px_rgba(0,0,0,0.28)] sm:p-10">
          <div className="absolute right-[-5rem] top-[-4rem] h-44 w-44 rounded-full bg-amber-300/12 blur-3xl" />
          <div className="absolute bottom-[-7rem] left-[-3rem] h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative space-y-7">
            <div className="eyebrow">XAUUSD candlestick lab</div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Belajar expert candlestick untuk
                <span className="block text-amber-200">membaca alur harga XAUUSD, bukan sekadar hafal pola.</span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Fokus website ini sekarang saya tajamkan ke satu hal: bagaimana candle M5 di XAUUSD
                bercerita tentang continuation, retrace, pullback, trap, dan reversal, dengan
                konteks market emas yang benar.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {focusPillars.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/kenapa-xauusd-naik-turun"
                className="rounded-full border border-amber-300/35 bg-amber-300/14 px-6 py-3 text-sm font-medium text-amber-100 transition hover:bg-amber-300/22"
              >
                Mulai dari M5 Candle Lab
              </Link>
              <Link
                href="/naked-chart"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08]"
              >
                Buka Pullback Playbook
              </Link>
            </div>
          </div>
        </div>

        <HeroPatternStack playbooks={m5Playbooks.slice(0, 2)} />
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.92fr,1.08fr]">
        <div className="panel rounded-[2.3rem] p-6 sm:p-8">
          <p className="metric-label">Kenapa XAUUSD beda</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Candle emas tidak boleh dibaca seperti saham random atau pair yang lambat
          </h2>
          <div className="mt-6 space-y-3">
            {xauusdTraits.map((trait) => (
              <div key={trait.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
                <p className="text-lg font-semibold text-white">{trait.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{trait.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-[2.3rem] p-6 sm:p-8">
          <p className="metric-label">Cara belajar yang tidak membosankan</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Kita pecah bacaan chart jadi langkah pendek yang bisa langsung dipakai
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {learningSteps.map((item) => (
              <div key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="metric-label">M5 playbooks</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Contoh kecil yang sebenarnya kamu cari: kenapa harga naik, retrace, atau gagal lanjut
            </h2>
          </div>
          <Link
            href="/kenapa-xauusd-naik-turun"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06]"
          >
            Baca versi detail
          </Link>
        </div>
        <PlaybookGrid playbooks={m5Playbooks} />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="panel rounded-[2.3rem] p-6 sm:p-8">
          <p className="metric-label">Referensi expert</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Sumber valid yang saya pakai untuk membangun otak website ini
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            Untuk candlestick dan price action, saya pilih sumber yang memang dikenal kuat oleh
            trader profesional. Untuk XAUUSD khusus, saya gabungkan dengan referensi market emas dan
            driver makro emas.
          </p>
        </div>

        <SourceDeck sources={expertSources} note={inferenceNote} />
      </section>

      <EditorialCTA />
    </div>
  );
}
