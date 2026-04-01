import Link from "next/link";

import type { CandleBar, PlaybookCard } from "@/lib/candlestick-focus";

function CandleStrip({ bars }: { bars: CandleBar[] }) {
  const min = Math.min(...bars.map((bar) => bar.low)) - 4;
  const max = Math.max(...bars.map((bar) => bar.high)) + 4;
  const height = 172;
  const width = 360;
  const step = width / (bars.length + 1);

  const scaleY = (value: number) => {
    const range = max - min || 1;
    return height - ((value - min) / range) * (height - 20) - 10;
  };

  const getTone = (tone: CandleBar["tone"]) => {
    if (tone === "bull") {
      return { fill: "#5eead4", stroke: "#99f6e4", label: "#ccfbf1" };
    }

    if (tone === "bear") {
      return { fill: "#fb7185", stroke: "#fda4af", label: "#fecdd3" };
    }

    return { fill: "#e2e8f0", stroke: "#f8fafc", label: "#e2e8f0" };
  };

  return (
    <div className="rounded-[1.6rem] border border-white/8 bg-slate-950/55 p-4">
      <svg viewBox={`0 0 ${width} ${height + 28}`} className="w-full">
        <line
          x1="12"
          y1={height}
          x2={width - 12}
          y2={height}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        {bars.map((bar, index) => {
          const x = step * (index + 1);
          const top = scaleY(Math.max(bar.open, bar.close));
          const bottom = scaleY(Math.min(bar.open, bar.close));
          const bodyHeight = Math.max(bottom - top, 8);
          const colors = getTone(bar.tone);

          return (
            <g key={`${bar.open}-${bar.close}-${index}`}>
              <line
                x1={x}
                y1={scaleY(bar.high)}
                x2={x}
                y2={scaleY(bar.low)}
                stroke={colors.stroke}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <rect
                x={x - 12}
                y={top}
                width="24"
                height={bodyHeight}
                rx="8"
                fill={colors.fill}
                opacity={bar.note ? 1 : 0.92}
              />
              {bar.note ? (
                <text
                  x={x}
                  y={scaleY(bar.high) - 8}
                  fill={colors.label}
                  fontSize="11"
                  textAnchor="middle"
                >
                  {bar.note}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function HeroPatternStack({ playbooks }: { playbooks: PlaybookCard[] }) {
  const featured = playbooks[0];
  const support = playbooks.slice(1, 3);

  if (!featured) {
    return null;
  }

  return (
    <div className="panel rounded-[2.2rem] p-5 sm:p-6">
      <p className="metric-label">Contoh paling penting</p>
      <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{featured.title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-300">{featured.why}</p>

      <div className="mt-5">
        <CandleStrip bars={featured.bars} />
      </div>

      <div className="mt-5 rounded-[1.5rem] border border-amber-300/18 bg-amber-300/[0.07] p-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-100">
          Inti bacaannya
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-200">{featured.clue}</p>
      </div>

      {support.length > 0 ? (
        <div className="mt-5 grid gap-3">
          {support.map((item) => (
            <div key={item.id} className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {item.timeframe}
                </span>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.angle}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function PlaybookGrid({ playbooks }: { playbooks: PlaybookCard[] }) {
  return (
    <div className="space-y-5">
      {playbooks.map((item, index) => (
        <article key={item.id} className="panel rounded-[2rem] p-5 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-amber-100">
                  {item.timeframe}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  Playbook {index + 1}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white sm:text-[1.75rem]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.angle}</p>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Kenapa naik/turun", text: item.why },
                  { label: "Cara cek retrace", text: item.watch },
                  { label: "Clue utama", text: item.clue },
                ].map((block) => (
                  <div key={block.label} className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                      {block.label}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <CandleStrip bars={item.bars} />
              <div className="rounded-[1.35rem] border border-white/8 bg-slate-950/60 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Cara pakai cepat
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Lihat dulu dorongan awal, lalu tanyakan apakah candle berikutnya mendukung arah
                  yang sama atau justru menelan balik. Itu pembeda utama antara continuation dan
                  trap.
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function SourceDeck({
  sources,
  note,
}: {
  sources: {
    title: string;
    href: string;
    reason: string;
  }[];
  note: string;
}) {
  return (
    <div className="panel rounded-[2rem] p-5 sm:p-6">
      <p className="metric-label">Referensi utama</p>
      <div className="mt-5 space-y-3">
        {sources.map((source, index) => (
          <a
            key={source.href}
            href={source.href}
            target="_blank"
            rel="noreferrer"
            className="block rounded-[1.4rem] border border-white/10 bg-slate-950/72 p-4 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-medium text-slate-300">
                {index + 1}
              </span>
              <div>
                <p className="text-base font-semibold text-white">{source.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{source.reason}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-4 rounded-[1.5rem] border border-sky-300/18 bg-sky-300/[0.08] p-4 text-sm leading-7 text-sky-100/90">
        {note}
      </div>
    </div>
  );
}

export function EditorialCTA() {
  return (
    <div className="panel-strong rounded-[2rem] p-6 sm:p-8">
      <p className="metric-label">Langkah lanjut</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
        Setelah tampilan diringkas, fokusnya sekarang ada pada urutan belajar yang jelas
      </h2>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {[
          "Mulai dari M5 Candle Lab untuk mengerti kenapa candle itu valid atau gagal.",
          "Lanjut ke Pullback Playbook untuk membedakan retrace sehat dan retrace yang merusak.",
          "Terakhir buka Chart Desk untuk menghubungkan playbook itu ke chart XAUUSD asli.",
        ].map((item) => (
          <div key={item} className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/kenapa-xauusd-naik-turun"
          className="rounded-full border border-amber-300/35 bg-amber-300/14 px-5 py-3 text-sm font-medium text-amber-100 transition hover:bg-amber-300/22"
        >
          Buka M5 Candle Lab
        </Link>
        <Link
          href="/naked-chart"
          className="rounded-full border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:bg-white/[0.06]"
        >
          Buka Pullback Playbook
        </Link>
      </div>
    </div>
  );
}
