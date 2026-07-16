"use client";
import { FaDownload } from "react-icons/fa";
import ExploreMore from "@/components/ExploreMore";
import { useTranslation } from "@/hooks/useTranslation";


const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function BonusGuidePage() {
  const t = useTranslation();
  return (
    <main className="min-h-screen bg-[#050B12] pt-28 pb-20 text-white">

      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-red-500 font-semibold">
            {t.bonusBadge}
          </p>

          <h1 className="mt-4 text-5xl font-black">
            {t.bonusTitle}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          {t.bonusDescription}
          </p>

        </div>

        {/* Banner */}

        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">

          <img
            src="/bonus-banner.webp"
            alt="PlayBollyGame Bonus Banner"
            className="w-full"
          />

        </div>

        {/* Download Button */}

        <div className="mt-10 flex justify-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-red-600 px-10 py-4 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-red-700"
          >
            <FaDownload />
           {t.downloadAPK}
          </a>

        </div>

        <div className="mt-16 space-y-8 text-lg leading-9 text-gray-300">

          <h2 className="text-4xl font-black text-white">
            {t.guideTitle}
          </h2>

          <p>
          {t.guideDescription}
          </p>

                    {/* Bonus Cards */}

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-red-600/20 bg-[#081018] p-6">
              <h3 className="text-2xl font-bold text-red-500">
                🎁 {t.welcomeBonus}
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
              {t.welcomeBonusDesc}
              </p>
            </div>

            <div className="rounded-2xl border border-red-600/20 bg-[#081018] p-6">
              <h3 className="text-2xl font-bold text-red-500">
               💰 {t.depositBonus}
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                {t.depositBonusDesc}
              </p>
            </div>

            <div className="rounded-2xl border border-red-600/20 bg-[#081018] p-6">
              <h3 className="text-2xl font-bold text-red-500">
                👥 {t.referEarn}
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
               {t.referEarnDesc}
              </p>
            </div>

          </div>

          {/* Secure Download */}

          <div className="mt-16 rounded-3xl border border-red-600/20 bg-[#081018] p-8">

            <h2 className="text-3xl font-black text-white">
            {t.installTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              {t.installDesc}
            </p>

            <div className="mt-8 flex flex-col gap-5 md:flex-row">

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-red-600 px-8 py-4 text-center font-bold text-white transition hover:bg-red-700"
              >
                {t.downloadAPK}
              </a>

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl border border-red-600 px-8 py-4 text-center font-bold text-red-500 transition hover:bg-red-600 hover:text-white"
              >
                🚀 {t.alternativeDownload}
              </a>

            </div>

          </div>

          {/* Conclusion */}

          <div className="mt-16 rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-black text-white">
             {t.conclusionTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
            {t.conclusionDesc}
            </p>

            <div className="mt-10 flex justify-center">

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-red-600 px-10 py-4 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-red-700"
              >
                <FaDownload />
             {t.downloadAPK}
              </a>

            </div>
<ExploreMore />
          </div>

        </div>

      </div>

    </main>
  );
}