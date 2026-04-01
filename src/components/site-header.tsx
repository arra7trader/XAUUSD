import Link from "next/link";

const navItems = [
  { href: "/kenapa-xauusd-naik-turun", label: "Kenapa Naik?" },
  { href: "/daily-bias", label: "Daily Bias" },
  { href: "/market-structure", label: "Structure" },
  { href: "/key-levels", label: "Key Levels" },
  { href: "/naked-chart", label: "Naked Chart" },
  { href: "/scenarios", label: "Scenarios" },
  { href: "/journal", label: "Journal" },
  { href: "/studio", label: "Studio" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="panel mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-[2rem] px-4 py-3 sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/35 bg-amber-300/12 text-sm font-semibold tracking-[0.24em] text-amber-100 shadow-lg shadow-amber-300/10">
            X
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-[0.24em] text-white/95 uppercase">
              XAUUSD Extreme Expert
            </p>
            <p className="truncate text-xs text-slate-400">
              Analyst desk untuk structure, liquidity, dan price action
            </p>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1.5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/daily-bias"
          className="rounded-full border border-amber-300/35 bg-amber-300/14 px-4 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-300/22"
        >
          Lihat Bias
        </Link>
      </div>
    </header>
  );
}
