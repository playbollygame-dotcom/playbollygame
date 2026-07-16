"use client";

import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

import ExploreMore from "@/components/ExploreMore";
import { useTranslation } from "@/hooks/useTranslation";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function AboutPage() {
  const t = useTranslation();

  return (
    <main className="min-h-screen bg-[#050B12] pt-28 pb-20 text-white">

      <div className="mx-auto max-w-6xl px-6">

        {/* Hero */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-yellow-400">
            {t.aboutTitle}
          </p>

          <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl">

            {t.aboutHeading}

            <span className="block text-red-500">
              PlayBollyGame
            </span>

          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            {t.aboutSubtitle}
          </p>

        </div>

        {/* About Content */}

<div className="mt-16 space-y-8 text-lg leading-9 text-gray-300">

  <p>{t.aboutPara1}</p>

  <div className="flex justify-center">

    <a
      href={DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-[#990000] px-10 py-5 text-lg font-bold text-white shadow-[0_0_30px_rgba(220,38,38,.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,.6)]"
    >
      <FaDownload />
      {t.downloadAPK}
    </a>

  </div>

  <p>{t.aboutPara2}</p>

  <p>{t.aboutPara3}</p>

  {/* Banner */}

  <div className="mt-14 overflow-hidden rounded-3xl border border-red-600/20 shadow-2xl">

    <Image
      src="/about-banner.webp"
      alt="PlayBollyGame"
      width={1400}
      height={700}
      className="w-full object-cover"
      priority
    />

  </div>

  {/* Why Trust */}

  <div className="mt-16">

    <h2 className="text-center text-4xl font-black">
      {t.trustTitle}
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-gray-400">
      {t.trustDescription}
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-2">

      <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-7 transition duration-300 hover:border-red-500">

        <div className="text-4xl">🎁</div>

        <h3 className="mt-4 text-2xl font-bold">
          {t.dailyReward}
        </h3>

        <p className="mt-3 text-gray-400">
          {t.dailyRewardDesc}
        </p>

      </div>

      <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-7 transition duration-300 hover:border-red-500">

        <div className="text-4xl">⚡</div>

        <h3 className="mt-4 text-2xl font-bold">
          {t.fastWithdraw}
        </h3>

        <p className="mt-3 text-gray-400">
          {t.fastWithdrawDesc}
        </p>

      </div>

      <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-7 transition duration-300 hover:border-red-500">

        <div className="text-4xl">👥</div>

        <h3 className="mt-4 text-2xl font-bold">
          {t.referral}
        </h3>

        <p className="mt-3 text-gray-400">
          {t.referralDesc}
        </p>

      </div>

      <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-7 transition duration-300 hover:border-red-500">

        <div className="text-4xl">🔒</div>

        <h3 className="mt-4 text-2xl font-bold">
          {t.secure}
        </h3>

        <p className="mt-3 text-gray-400">
          {t.secureDesc}
        </p>

      </div>

    </div>

  </div>

{/* Features */}

<div className="mt-20">

  <h2 className="text-center text-4xl font-black">
    {t.featureTitle}
  </h2>

  <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-gray-400">
    {t.featureDescription}
  </p>

  <div className="mt-12 grid gap-6 md:grid-cols-3">

    {/* Feature 1 */}

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-7 transition duration-300 hover:border-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,.25)]">

      <div className="text-5xl">🎮</div>

      <h3 className="mt-5 text-2xl font-bold">
        {t.feature1}
      </h3>

      <p className="mt-4 leading-8 text-gray-400">
        {t.feature1Desc}
      </p>

    </div>

    {/* Feature 2 */}

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-7 transition duration-300 hover:border-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,.25)]">

      <div className="text-5xl">💰</div>

      <h3 className="mt-5 text-2xl font-bold">
        {t.feature2}
      </h3>

      <p className="mt-4 leading-8 text-gray-400">
        {t.feature2Desc}
      </p>

    </div>

    {/* Feature 3 */}

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-7 transition duration-300 hover:border-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,.25)]">

      <div className="text-5xl">🚀</div>

      <h3 className="mt-5 text-2xl font-bold">
        {t.feature3}
      </h3>

      <p className="mt-4 leading-8 text-gray-400">
        {t.feature3Desc}
      </p>

    </div>

  </div>

</div>

{/* FAQ */}

<div className="mt-24">

  <h2 className="text-center text-4xl font-black">
    {t.faqTitle}
  </h2>

  <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-gray-400">
    {t.faqDescription}
  </p>

  <div className="mt-12 space-y-6">

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-7">

      <h3 className="text-2xl font-bold">
        {t.faq1Title}
      </h3>

      <p className="mt-3 leading-8 text-gray-400">
        {t.faq1Desc}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-7">

      <h3 className="text-2xl font-bold">
        {t.faq2Title}
      </h3>

      <p className="mt-3 leading-8 text-gray-400">
        {t.faq2Desc}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-7">

      <h3 className="text-2xl font-bold">
        {t.faq3Title}
      </h3>

      <p className="mt-3 leading-8 text-gray-400">
        {t.faq3Desc}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-7">

      <h3 className="text-2xl font-bold">
        {t.faq4Title}
      </h3>

      <p className="mt-3 leading-8 text-gray-400">
        {t.faq4Desc}
      </p>

    </div>

  </div>

</div>

{/* Final CTA */}

<div className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-[#2B0000] via-[#590000] to-[#990000] p-10 text-center shadow-[0_0_45px_rgba(220,38,38,.28)]">

  <div className="absolute inset-0 bg-black/20"></div>

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,.18),transparent_70%)]"></div>

  <div className="relative z-10">

    <h2 className="text-5xl font-black text-white">
      {t.ctaTitle}
    </h2>

    <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-yellow-400"></div>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
      {t.ctaDescription}
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <a
        href={DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-[#990000] px-10 py-5 text-lg font-bold text-white shadow-[0_0_30px_rgba(220,38,38,.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,.6)]"
      >
        <FaDownload />
        {t.downloadAPK}
      </a>

      <Link
        href="/bonus-guide"
        className="inline-flex items-center gap-3 rounded-2xl border border-red-500 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:scale-105"
      >
        🎁 {t.bonusGuide}
      </Link>

    </div>

  </div>

</div>

{/* Explore More */}

<div className="mt-20">
  <ExploreMore />
</div>
</div>
      </div>
    </main>
  );
}