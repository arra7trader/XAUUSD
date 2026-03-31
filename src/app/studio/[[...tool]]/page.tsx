"use client";

import { NextStudio } from "next-sanity/studio";

import sanityConfig from "../../../../sanity.config";
import { isSanityConfigured } from "@/lib/sanity/client";

export default function StudioPage() {
  if (!isSanityConfigured()) {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-8">
          <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
            Sanity belum dikonfigurasi
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-white">
            Isi file `.env.local` dengan project ID dan dataset Sanity
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Setelah environment diisi, route ini akan berubah menjadi dashboard admin
            untuk mengelola course, lesson, quiz, glossary, case study, dan analisa mingguan.
          </p>
        </div>
      </div>
    );
  }

  return <NextStudio config={sanityConfig} />;
}
