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
      return {
        fill: "#5eead4",
        stroke: "#99f6e4",
        label: "#ccfbf1",
      };
    }

    if (tone === "bear") {
      return {
        fill: "#fb7185",
        stroke: "#fda4af",
        label: "#fecdd3",
      };
    }

    return {
      fill: "#e2e8f0",
      stroke: "#f8fafc",
      label: "#e2e8f0",
    };
  };

  return (
    <div className="rounded-[1.7rem] border border-white/8 bg-slate-950/55 p-4">
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
                opacity={bar.note ? 1 : 0.9}
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

export function HeroPatternStack({
  playbooks,
}: {
  playbooks: PlaybookCard[];
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-[2.4rem] bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.2),transparent_38%),radial-gradient(circle_at_82%_20%,_rgba(45,212,191,0.18),transparent_28%)] blur-2xl" />
      <div className="relative panel-strong grid gap-4 rounded-[2.4rem] p-5 sm:p-6">
        {playbooks.map((item, index) => (
          <article
            key={item.id}
            className={`rounded-[1.7rem] border p-4 ${
              index === 0
                ? "border-amber-300/30 bg-amber-300/[0.08]"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="metric-label">{item.timeframe}</p>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                {item.angle}
              </span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
            <div className="mt-4">
              <CandleStrip bars={item.bars} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function PlaybookGrid({ playbooks }: { playbooks: PlaybookCard[] }) {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {playbooks.map((item) => (
        <article
          key={item.id}
          className="group panel rounded-[2.1rem] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/15"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-amber-100">
              {item.timeframe}
            </span>
            <p className="text-sm text-slate-400">{item.angle}</p>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
          <div className="mt-5">
            <CandleStrip bars={item.bars} />
          </div>

          <div className="mt-5 grid gap-3">
            {[
              { label: "Kenapa bisa begitu", text: item.why },
              { label: "Yang harus diawasi", text: item.watch },
              { label: "Clue penting", text: item.clue },
            ].map((block) => (
              <div key={block.label} className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  {block.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{block.text}</p>
              </div>
            ))}
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
    <div className="grid gap-4">
      {sources.map((source) => (
        <a
          key={source.href}
          href={source.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-[1.6rem] border border-white/10 bg-slate-950/72 p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
        >
          <p className="text-lg font-semibold text-white">{source.title}</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">{source.reason}</p>
        </a>
      ))}
      <div className="rounded-[1.6rem] border border-sky-300/18 bg-sky-300/[0.08] p-5 text-sm leading-7 text-sky-100/90">
        {note}
      </div>
    </div>
  );
}

export function EditorialCTA() {
  return (
    <div className="panel-strong rounded-[2.2rem] p-6 sm:p-8">
      <p className="metric-label">Langkah lanjut</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
        Setelah paham candle, kita pakai itu untuk membaca XAUUSD dengan kepala dingin
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
        Fokusnya bukan mencari indikator baru, tetapi membiasakan mata melihat dorongan, jeda,
        trap, reclaim, dan failure di area yang memang penting.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/kenapa-xauusd-naik-turun"
          className="rounded-full border border-amber-300/35 bg-amber-300/14 px-5 py-3 text-sm font-medium text-amber-100 transition hover:bg-amber-300/22"
        >
          Buka M5 Candle Lab
        </Link>
        <Link
          href="/chart-lab"
          className="rounded-full border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:bg-white/[0.06]"
        >
          Masuk Chart Desk
        </Link>
      </div>
    </div>
  );
}
