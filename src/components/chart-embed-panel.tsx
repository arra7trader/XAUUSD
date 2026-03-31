"use client";

import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/lib/site-config";

type ChartEmbedPanelProps = {
  symbol?: string;
};

declare global {
  interface Window {
    TradingView?: {
      widget: new (options: Record<string, unknown>) => unknown;
    };
  }
}

export function ChartEmbedPanel({
  symbol = siteConfig.chartSymbol,
}: ChartEmbedPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let scriptEl: HTMLScriptElement | null = null;

    function mountWidget() {
      if (!containerRef.current || !window.TradingView?.widget) {
        setFallback(true);
        return;
      }

      containerRef.current.innerHTML = "";

      new window.TradingView.widget({
        autosize: true,
        symbol,
        interval: "60",
        timezone: "Asia/Jakarta",
        theme: "dark",
        style: "1",
        locale: "id",
        toolbar_bg: "#08111a",
        enable_publishing: false,
        allow_symbol_change: true,
        withdateranges: true,
        hide_side_toolbar: false,
        container_id: "tradingview_xauusd_panel",
      });
    }

    timeoutId = setTimeout(() => {
      setFallback(true);
    }, 5000);

    if (window.TradingView?.widget) {
      mountWidget();
      if (timeoutId) clearTimeout(timeoutId);
      return;
    }

    scriptEl = document.createElement("script");
    scriptEl.src = "https://s3.tradingview.com/tv.js";
    scriptEl.async = true;
    scriptEl.onload = () => {
      if (timeoutId) clearTimeout(timeoutId);
      setFallback(false);
      mountWidget();
    };
    scriptEl.onerror = () => {
      if (timeoutId) clearTimeout(timeoutId);
      setFallback(true);
    };

    document.body.appendChild(scriptEl);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (scriptEl) {
        document.body.removeChild(scriptEl);
      }
    };
  }, [symbol]);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            War Room Chart
          </p>
          <p className="text-sm text-slate-400">
            Baca multi-timeframe, tandai level penting, lalu nilai acceptance atau rejection-nya.
          </p>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
          {symbol}
        </span>
      </div>

      <div className="relative h-[540px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08111a]">
        <div
          id="tradingview_xauusd_panel"
          ref={containerRef}
          className="h-full w-full"
        />

        {fallback ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/95 p-6">
            <div className="max-w-md rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-center">
              <p className="text-lg font-semibold text-white">
                Chart embed belum berhasil dimuat
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Periksa koneksi internet atau buka ulang halaman. Struktur halaman tetap bisa dipelajari sambil menunggu widget live tersedia.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
