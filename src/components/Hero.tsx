"use client";

import { useTranslation } from "@/hooks/useTranslation";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function Hero() {
  const t = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#050B12] py-20 text-white">
      {/* Left Red Glow */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[140px]" />

      {/* Right Red Glow */}
      <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-red-500/10 blur-[140px]" />

      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Left */}
        <div className="flex-1">

          <span className="rounded-full border border-red-600 bg-red-600/10 px-5 py-2 text-red-500">
            🔥 {t.heroBadge}
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
  {t.heroPlay}
  <span className="text-red-500">{t.heroGame}</span>
</h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            {t.heroDescription}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,.45)]"
            >
              {t.heroDownload}
            </a>

            <a
              href="#blogs"
              className="rounded-xl border border-red-600 px-8 py-4 font-bold transition hover:bg-red-600 hover:text-white"
            >
              {t.heroReadBlogs}
            </a>

          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

            <div>
              <h2 className="text-4xl font-black text-red-500">1M+</h2>
              <p className="mt-2 text-gray-400">{t.downloadsLabel}</p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-red-500">₹10Cr+</h2>
              <p className="mt-2 text-gray-400">{t.rewardsLabel}</p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-red-500">24/7</h2>
              <p className="mt-2 text-gray-400">{t.supportLabel}</p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-red-500">99.9%</h2>
              <p className="mt-2 text-gray-400">{t.uptimeLabel}</p>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="relative flex flex-1 justify-center">

          <div className="absolute h-96 w-96 rounded-full bg-red-600/20 blur-3xl"></div>

          <div className="relative flex h-[620px] w-[320px] flex-col items-center justify-center rounded-[42px] border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_0_60px_rgba(34,197,94,.35)]">

            <div className="absolute top-5 h-6 w-36 rounded-full bg-black"></div>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/logo.png"
                alt="PlayBollyGame"
                className="h-28 w-28 rounded-3xl transition duration-300 hover:scale-110"
              />
            </a>

           <h3 className="mt-8 text-3xl font-bold">
  {t.heroPlay}
  <span className="text-red-500">{t.heroGame}</span>
</h3>

            <p className="mt-4 px-8 text-center text-gray-400">
              🔥 {t.heroBadge}
            </p>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-8 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,.45)]"
            >
              {t.heroDownload}
            </a>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-red-600 bg-red-600/10 px-6 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-600 hover:text-white"
            >
              ⬇ {t.phoneLatestVersion}
            </a>

            <div className="mt-6 text-center text-gray-500">
              {t.phoneFeatures}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}