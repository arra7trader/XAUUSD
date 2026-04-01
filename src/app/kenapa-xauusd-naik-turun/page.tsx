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

const deepNotes = [
  {
    title: "Kenapa candle bullish tidak selalu berarti buy",
    text:
      "Kalau candle bullish muncul tepat di tengah range, tanpa level penting, dan tidak punya follow-through, itu bisa hanya noise. Yang membuat candle bullish jadi berarti adalah location dan acceptance sesudahnya.",
  },
  {
    title: "Kenapa retrace bisa terjadi padahal bias masih naik",
    text:
      "Setelah impuls tajam, market sering perlu tarik napas: taking profit, test ulang breakout origin, atau menunggu order baru. Retrace baru berbahaya kalau seller mulai accepted di bawah higher low penting.",
  },
  {
    title: "Kenapa M5 emas suka menyapu high/low dulu",
    text:
      "XAUUSD sering mengambil likuiditas di intraday high-low sebelum jalan ke arah sebenarnya. Karena itu, candle sapuan tanpa reclaim belum cukup; kita butuh konfirmasi respons sesudah sweep.",
  },
];

const sessionFrames = [
  {
    title: "Awal London",
    text:
      "Sering jadi fase ekspansi pertama. High-low Asia banyak diuji di sini, jadi candle M5 pada jam ini sering sangat informatif.",
  },
  {
    title: "Overlap London-New York",
    text:
      "Biasanya fase paling hidup. Kalau breakout valid, follow-through lebih mudah terlihat pada rentang ini.",
  },
  {
    title: "Menjelang data AS",
    text:
      "Candle bisa terlihat rapih lalu tiba-tiba berubah agresif. Pada fase ini, lebih penting membaca acceptance sesudah data daripada mencoba menebak candle pertama.",
  },
];

export default function WhyGoldMovesPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[1.02fr,0.98fr]">
        <div className="relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),transparent_28%),radial-gradient(circle_at_86%_16%,_rgba(45,212,191,0.14),transparent_24%),linear-gradient(180deg,rgba(10,18,28,0.96),rgba(6,10,16,0.92))] p-7 sm:p-10">
          <div className="eyebrow">M5 candle lab</div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Bedah candlestick XAUUSD yang lebih expert,
            <span className="block text-amber-200">tanpa bikin kamu capek baca dasar yang berulang.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Halaman ini saya arahkan ke kebutuhan yang kamu sebut sendiri: candle M5, kenapa harga
            naik, kenapa retrace, kapan pullback sehat, kapan breakout gagal, dan bagaimana membaca
            semua itu khusus untuk XAUUSD.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Fokus", value: "M5 price action" },
              { label: "Yang dibedah", value: "continuation & pullback" },
              { label: "Gaya baca", value: "context dulu" },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="metric-label">{item.label}</p>
                <p className="mt-3 text-lg font-semibold capitalize text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/chart-lab"
              className="rounded-full border border-amber-300/35 bg-amber-300/14 px-6 py-3 text-sm font-medium text-amber-100 transition hover:bg-amber-300/22"
            >
              Buka chart desk
            </Link>
            <Link
              href="/"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]"
            >
              Kembali ke homepage baru
            </Link>
          </div>
        </div>

        <div className="panel-strong rounded-[2.4rem] p-6 sm:p-8">
          <p className="metric-label">Yang harus tertanam di kepala</p>
          <div className="mt-5 space-y-3">
            {[
              "Candle yang kuat harus diuji dengan follow-through, bukan disembah sendirian.",
              "Pullback sehat biasanya lebih lemah daripada impulse yang melahirkannya.",
              "Breakout yang kembali masuk range sering berubah menjadi trap.",
              "XAUUSD M5 sangat sensitif pada sweep high-low sesi dan momentum data AS.",
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {deepNotes.map((item) => (
          <article key={item.title} className="panel rounded-[2rem] p-5 sm:p-6">
            <p className="metric-label">Expert note</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="space-y-6">
        <div>
          <p className="metric-label">Core playbooks</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Inilah kerangka expert yang lebih dekat dengan real trading XAUUSD
          </h2>
        </div>
        <PlaybookGrid playbooks={m5Playbooks} />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
        <div className="panel rounded-[2.3rem] p-6 sm:p-8">
          <p className="metric-label">Sesi dan karakter</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            M5 candle harus dibaca bersama waktu dan karakter emas
          </h2>
          <div className="mt-6 space-y-3">
            {sessionFrames.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {xauusdTraits.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-[2.3rem] p-6 sm:p-8">
          <p className="metric-label">Cara belajar yang lebih efisien</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Jangan hafal semua candle. Hafal urutan baca market-nya.
          </h2>
          <div className="mt-6 grid gap-4">
            {learningSteps.map((item) => (
              <div key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="panel rounded-[2.3rem] p-6 sm:p-8">
          <p className="metric-label">Sumber valid</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Referensi expert yang saya pakai untuk menyusun framework ini
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            Untuk pola candle dan pullback saya pakai referensi price action expert. Untuk XAUUSD
            khusus, saya gabungkan dengan struktur market emas dan driver makronya.
          </p>
        </div>

        <SourceDeck sources={expertSources} note={inferenceNote} />
      </section>
    </div>
  );
}
