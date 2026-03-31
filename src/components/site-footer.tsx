import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 text-sm text-slate-300 sm:px-6 lg:grid-cols-[1.3fr,1fr,1fr] lg:px-8">
        <div className="space-y-3">
          <p className="font-semibold tracking-[0.24em] text-amber-200 uppercase">
            XAUUSD Extreme Expert
          </p>
          <p className="max-w-xl text-slate-400">{siteConfig.description}</p>
          <p className="max-w-xl text-xs text-slate-500">{siteConfig.disclaimer}</p>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-white">Navigasi</p>
          <div className="flex flex-col gap-2">
            <Link href="/kurikulum">Kurikulum</Link>
            <Link href="/chart-lab">Chart Lab</Link>
            <Link href="/studi-kasus">Studi Kasus</Link>
            <Link href="/glossary">Glossary</Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-white">Operasional</p>
          <div className="flex flex-col gap-2">
            <Link href="/analisa-mingguan">Analisa Mingguan</Link>
            <Link href="/studio">CMS Studio</Link>
            <a href="https://www.tradingview.com/" target="_blank" rel="noreferrer">
              TradingView
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
