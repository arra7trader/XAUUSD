import Link from "next/link";

const navItems = [
  { href: "/kenapa-xauusd-naik-turun", label: "M5 Candle Lab" },
  { href: "/naked-chart", label: "Pullback" },
  { href: "/chart-lab", label: "Chart Desk" },
  { href: "/journal", label: "Replay" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="panel mx-auto flex w-full max-w-6xl items-center justify-between gap-6 rounded-[1.8rem] px-4 py-3 sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/35 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.24),rgba(251,191,36,0.08)),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] text-sm font-semibold tracking-[0.24em] text-amber-100 shadow-lg shadow-amber-300/10">
            M5
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-[0.24em] text-white/95 uppercase">
              XAUUSD Extreme Expert
            </p>
            <p className="truncate text-xs text-slate-400">
              Candlestick lab untuk XAUUSD, pullback, dan flow harga
            </p>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1.5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kenapa-xauusd-naik-turun"
          className="rounded-full border border-amber-300/35 bg-amber-300/14 px-4 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-300/22"
        >
          Mulai Belajar
        </Link>
      </div>
    </header>
  );
}
