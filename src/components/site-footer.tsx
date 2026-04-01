import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-6 pt-2 sm:px-6 lg:px-8">
      <div className="panel mx-auto grid w-full max-w-7xl gap-8 rounded-[2.2rem] px-5 py-8 text-sm text-slate-300 sm:px-6 lg:grid-cols-[1.3fr,1fr,1fr] lg:px-8">
        <div className="space-y-3">
          <p className="font-semibold tracking-[0.24em] text-amber-200 uppercase">
            XAUUSD Extreme Expert
          </p>
          <p className="max-w-xl text-slate-400">{siteConfig.description}</p>
          <p className="max-w-xl text-xs leading-6 text-slate-500">{siteConfig.disclaimer}</p>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-white">Navigasi</p>
          <div className="flex flex-col gap-2 text-slate-400">
            <Link href="/kenapa-xauusd-naik-turun">M5 Candle Lab</Link>
            <Link href="/naked-chart">Pullback Playbook</Link>
            <Link href="/chart-lab">Chart Desk</Link>
            <Link href="/daily-bias">Daily Bias</Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-white">Operasional</p>
          <div className="flex flex-col gap-2 text-slate-400">
            <Link href="/journal">Journal</Link>
            <Link href="/chart-lab">War Room</Link>
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
