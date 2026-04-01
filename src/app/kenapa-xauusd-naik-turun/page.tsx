import Link from "next/link";

import { PlaybookGrid, SourceDeck } from "@/components/candlestick-lab-sections";
import { buildMetadata } from "@/lib/metadata";
import {
  expertSources,
  inferenceNote,
  learningSteps,
  m5Playbooks,
  xauusdTraits,
} from "@/lib/candlestick-focus";

export const metadata = buildMetadata({
  title: "M5 Candle Lab XAUUSD",
  description:
    "Playbook expert candlestick XAUUSD untuk membaca M5 continuation, retrace, pullback, trap, dan reversal dari price action.",
  path: "/kenapa-xauusd-naik-turun",
});

const quickRules = [
  "Candle kuat harus dibuktikan oleh candle berikutnya.",
  "Retrace sehat biasanya lebih kecil dan lebih lambat daripada impulse.",
  "Breakout yang langsung kembali ke range perlu dicurigai sebagai trap.",
  "M5 emas lebih jujur saat dibaca bersama sesi dan level, bukan candle tunggal.",
];

export default function WhyGoldMovesPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1.02fr,0.98fr]">
        <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.22)] sm:p-9">
          <div className="eyebrow">M5 candle lab</div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Halaman ini saya buat lebih tenang,
            <span className="block text-amber-200">supaya kamu tidak bingung mulai dari mana.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Tujuan halaman ini cuma satu: membantu kamu membaca kenapa harga XAUUSD di M5 bisa
            lanjut naik, retrace, trap, atau berbalik. Jadi sekarang isinya saya rapikan menjadi
            urutan yang lebih lurus dan lebih ringan dilihat.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/naked-chart"
              className="rounded-full border border-amber-300/35 bg-amber-300/14 px-6 py-3 text-sm font-medium text-amber-100 transition hover:bg-amber-300/22"
            >
              Lanjut ke pullback
            </Link>
            <Link
              href="/chart-lab"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]"
            >
              Buka chart desk
            </Link>
          </div>
        </div>

        <div className="panel-strong rounded-[2rem] p-6 sm:p-7">
          <p className="metric-label">Empat pegangan inti</p>
          <div className="mt-5 space-y-3">
            {quickRules.map((item) => (
              <div key={item} className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.92fr,1.08fr]">
        <div className="panel rounded-[2rem] p-6 sm:p-7">
          <p className="metric-label">Urutan belajar</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Kalau bingung, baca M5 dengan urutan ini saja
          </h2>
          <div className="mt-5 space-y-3">
            {learningSteps.map((item) => (
              <div key={item.title} className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-[2rem] p-6 sm:p-7">
          <p className="metric-label">Karakter emas</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Kenapa XAUUSD perlu perlakuan khusus
          </h2>
          <div className="mt-5 space-y-3">
            {xauusdTraits.map((item) => (
              <div key={item.title} className="rounded-[1.35rem] border border-white/8 bg-slate-950/60 p-4">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="metric-label">Contoh nyata</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Tiga bentuk candle flow yang paling penting untuk kamu kuasai
          </h2>
        </div>
        <PlaybookGrid playbooks={m5Playbooks.slice(0, 3)} />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.92fr,1.08fr]">
        <div className="panel rounded-[2rem] p-6 sm:p-7">
          <p className="metric-label">Referensi</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Tetap valid, cuma tampilannya sekarang lebih mudah diikuti
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            Untuk pola candle dan pullback saya pakai sumber price action yang kuat. Untuk XAUUSD
            khusus, saya gabungkan dengan struktur market emas dan driver makronya.
          </p>
        </div>

        <SourceDeck sources={expertSources} note={inferenceNote} />
      </section>
    </div>
  );
}
