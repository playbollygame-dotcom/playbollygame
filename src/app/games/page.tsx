"use client";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import ExploreMore from "@/components/ExploreMore";
import { useTranslation } from "@/hooks/useTranslation";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function GamesPage() {
  const t = useTranslation();
  return (
    <main className="min-h-screen bg-[#050B12] pt-28 pb-20 text-white">

      <div className="mx-auto max-w-6xl px-6">

        {/* Hero */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-red-500 font-semibold">
            {t.gamesBadge}
          </p>

          <h1 className="mt-4 text-5xl font-black">
            {t.gamesTitle}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {t.gamesDescription}
          </p>

        </div>

        {/* Banner */}

        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">

          <Image
            src="/games-banner.webp"
            alt="PlayBollyGame Games"
            width={1200}
            height={600}
            priority
            className="w-full rounded-3xl object-cover"
          />

        </div>

        {/* Top Download Button */}

        <div className="mt-10 flex justify-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-10 py-4 text-lg font-bold text-white transition hover:scale-105"
          >
            <FaDownload />
            {t.downloadAPK}
          </a>

        </div>

               {/* Games Section */}

        <div className="mt-20">

          <h2 className="text-center text-4xl font-black text-white">
            {t.popularGames}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-gray-400">
           {t.popularGamesDesc}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-red-600">
              <div className="text-5xl">🃏</div>

              <h3 className="mt-6 text-2xl font-bold text-red-500">
                {t.teenPatti}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {t.teenPattiDesc}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-red-600">
              <div className="text-5xl">🐉</div>

              <h3 className="mt-6 text-2xl font-bold text-red-500">
               {t.dragonTiger}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {t.dragonTigerDesc}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-red-600">
              <div className="text-5xl">🎨</div>

              <h3 className="mt-6 text-2xl font-bold text-red-500">
                {t.colorPrediction}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
             {t.colorPredictionDesc}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-red-600">
              <div className="text-5xl">🎰</div>

              <h3 className="mt-6 text-2xl font-bold text-red-500">
                {t.luckySpin}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {t.luckySpinDesc}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-red-600">
              <div className="text-5xl">♠️</div>

              <h3 className="mt-6 text-2xl font-bold text-red-500">
               {t.cardGames}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
             {t.cardGamesDesc}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-red-600">
              <div className="text-5xl">💰</div>

              <h3 className="mt-6 text-2xl font-bold text-red-500">
                {t.rewards}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
             {t.rewardsDesc}
              </p>
            </div>

          </div>

        </div>

                {/* Why Choose */}

        <div className="mt-20 rounded-3xl border border-slate-800 bg-[#081018] p-10">

          <h2 className="text-center text-4xl font-black text-white">
       {t.whyChoose}
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-gray-400">
            {t.whyChooseDesc}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
              <h3 className="text-2xl font-bold text-red-500">
               {t.fastGameplay}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
               {t.fastGameplayDesc}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
              <h3 className="text-2xl font-bold text-red-500">
                {t.dailyRewards}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
       {t.dailyRewardsDesc}
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Download Section */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-red-600 to-red-700 p-10 text-center">

          <h2 className="text-4xl font-black text-white">
            {t.ctaTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 tracking-wide text-gray-200">
           {t.ctaDescription}
          </p>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-[#990000] px-10 py-5 text-lg font-bold text-white shadow-[0_0_30px_rgba(220,38,38,.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,.6)] active:scale-95"
          >
            <FaDownload />
           {t.downloadAPK}
          </a>

        </div>

        {/* Internal Links */}

        <ExploreMore />

      </div>

    </main>
  );
}