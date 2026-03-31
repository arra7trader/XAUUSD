import Link from "next/link";

const navItems = [
  { href: "/kurikulum", label: "Kurikulum" },
  { href: "/chart-lab", label: "Chart Lab" },
  { href: "/studi-kasus", label: "Studi Kasus" },
  { href: "/glossary", label: "Glossary" },
  { href: "/analisa-mingguan", label: "Analisa" },
  { href: "/studio", label: "Studio" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,14,20,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-300/30 bg-amber-300/15 text-sm font-semibold tracking-[0.24em] text-amber-200">
            XAU
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-white/90 uppercase">
              Extreme Expert
            </p>
            <p className="text-xs text-slate-300">
              Belajar XAUUSD dengan konteks, bukan tebakan
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kurikulum"
          className="rounded-full border border-amber-300/40 bg-amber-300/15 px-4 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-300/25"
        >
          Mulai Belajar
        </Link>
      </div>
    </header>
  );
}
