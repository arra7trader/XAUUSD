import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.05] p-8 sm:p-12">
        <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
          Halaman tidak ditemukan
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Route yang kamu cari tidak tersedia atau URL-nya salah
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          Kembali ke dashboard war room untuk membaca bias harian, key levels, dan skenario aktif XAUUSD.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/daily-bias"
            className="rounded-full border border-amber-300/40 bg-amber-300/15 px-5 py-3 text-sm font-medium text-amber-100"
          >
            Buka daily bias
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-300"
          >
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
