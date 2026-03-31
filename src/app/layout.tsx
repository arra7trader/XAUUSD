import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${sora.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[radial-gradient(circle_at_top_left,_rgba(242,193,78,0.16),_transparent_24%),radial-gradient(circle_at_82%_18%,_rgba(90,200,250,0.16),_transparent_18%),linear-gradient(180deg,_#071019_0%,_#0b1420_48%,_#05070a_100%)] text-white">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[linear-gradient(180deg,rgba(242,193,78,0.12),transparent_72%)]" />
          <div className="pointer-events-none absolute left-[-8rem] top-32 h-72 w-72 rounded-full bg-amber-200/8 blur-3xl" />
          <div className="pointer-events-none absolute right-[-6rem] top-44 h-80 w-80 rounded-full bg-sky-300/8 blur-3xl" />
          <SiteHeader />
          <main className="relative flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
