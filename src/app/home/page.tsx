"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";
import ExploreMore from "@/components/ExploreMore";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function HomePage() {
  
const { language } = useLanguage();
const t = useTranslation();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050B12] pt-24">

        {/* Hero */}

        <section className="border-b border-slate-800">

          <div className="mx-auto max-w-7xl px-6 py-16">

            <p className="font-semibold uppercase tracking-[6px] text-red-500">
              {t.home}
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight text-white md:text-6xl">
              {t.heroTitle}

              <span className="block text-red-500">
                {t.heroSubtitle}
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              {t.heroDescription}
            </p>

            <div className="mt-10">

              <Link
                href="/download"
                className="inline-flex rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-red-700"
              >
             {t.heroDownload}
              </Link>

            </div>

          </div>

        </section>

        {/* Banner */}

        <section className="py-16">

          <div className="mx-auto max-w-7xl px-6">

            <img
              src="/home-banner.webp"
              alt="BollyGame Banner"
              className="w-full rounded-3xl shadow-2xl"
            />

          </div>

        </section>

        {/* Article */}

        <section className="pb-20">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 md:p-12">

              <h2 className="mb-8 text-4xl font-bold text-white">
                {t.articleTitle}
              </h2>
              <div className="space-y-7 text-lg leading-8 text-gray-300">

 <p>{t.articlePara1}</p>

 <p>{t.articlePara2}</p>

<p>{t.articlePara3}</p>

  <div className="mt-10">

    <Link
      href="/download"
      className="inline-flex rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
    >
      {t.articleDownload}
    </Link>

  </div>

  <h3 className="pt-8 text-3xl font-bold text-white">

   {t.whyTitle}

  </h3>

  <p>

    {t.whyDescription}

  </p>

  <div className="mt-6 grid gap-5 md:grid-cols-2">

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
       🎁 {t.welcomeTitle}
      </h4>

      <p className="text-gray-400">
        {t.welcomeDescription}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
       💰 {t.dailyTitle}
      </h4>

      <p className="text-gray-400">
       {t.dailyDescription}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
       ⚡ {t.fastTitle}
      </h4>

      <p className="text-gray-400">
       {t.fastDescription}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
        🔒 {t.secureTitle}
      </h4>

      <p className="text-gray-400">
        {t.secureDescription}
      </p>

    </div>

  </div>
    <h3 className="pt-10 text-3xl font-bold text-white">

   {t.gamesTitle}

  </h3>

  <p>

   {t.gamesDescription}

  </p>

  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

    <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5 text-center">
      🎮
      <p className="mt-3 font-semibold text-white">
       {t.game1}
      </p>
    </div>

    <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5 text-center">
      🐉
      <p className="mt-3 font-semibold text-white">
        {t.game2}
      </p>
    </div>

    <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5 text-center">
      🎯
      <p className="mt-3 font-semibold text-white">
       {t.game3}
      </p>
    </div>

    <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5 text-center">
      🎲
      <p className="mt-3 font-semibold text-white">
       {t.game4}
      </p>
    </div>

  </div>

  <h3 className="pt-10 text-3xl font-bold text-white">
{t.rewardsTitle}

  </h3>

  <p>

    {t.rewardsDescription}

  </p>

  <ul className="list-disc space-y-3 pl-6 text-gray-300">

    <li>{t.reward1}</li>

    <li>{t.reward2}</li>

<li>{t.reward3}</li>

   <li>{t.reward4}</li>

    <li>{t.reward5}</li>

   <li>{t.reward6}</li>

  </ul>

  <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#2B0000] via-[#590000] to-[#990000] p-8 shadow-[0_0_40px_rgba(220,38,38,.25)]">

    <h3 className="text-4xl font-black text-white">

      {t.ctaTitle}

    </h3>

    <div className="mt-4 h-1 w-20 rounded-full bg-yellow-400"></div>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">

     {t.ctaDescription}
    </p>

    <Link
      href="/download"
      className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,.45)]"
    >
      ⬇ {t.ctaButton}
    </Link>

  </div>

  <h3 className="pt-12 text-3xl font-bold text-white">

    {t.referralTitle}

  </h3>

  <p>

    {t.referralDescription}

  </p>
    <div className="mt-8 grid gap-5 md:grid-cols-2">

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
       👥 {t.inviteTitle}
      </h4>

      <p className="text-gray-400">
      {t.inviteDescription}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">

      <h4 className="mb-2 font-bold text-red-500">
       💸 {t.earnTitle}
      </h4>

      <p className="text-gray-400">
        {t.earnDescription}
      </p>

    </div>

  </div>

  <h3 className="pt-12 text-3xl font-bold text-white">

 {t.securityTitle}

  </h3>

  <p>

    {t.securityDescription}

  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-3">

  <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5">

    <div className="text-4xl">🔒</div>

    <h4 className="mt-3 font-bold text-white">
      {t.protectedTitle}
    </h4>

    <p className="mt-2 text-gray-400">
      {t.protectedDescription}
    </p>

  </div>

  <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5">

    <div className="text-4xl">⚡</div>

    <h4 className="mt-3 font-bold text-white">
      {t.withdrawTitle}
    </h4>

    <p className="mt-2 text-gray-400">
      {t.withdrawDescription}
    </p>

  </div>

  <div className="rounded-xl border border-slate-700 bg-[#0D1722] p-5">

    <div className="text-4xl">💳</div>

    <h4 className="mt-3 font-bold text-white">
      {t.paymentTitle}
    </h4>

    <p className="mt-2 text-gray-400">
      {t.paymentDescription}
    </p>

  </div>

</div>

  <h3 className="pt-12 text-3xl font-bold text-white">

   {t.faqTitle}

  </h3>

  <div className="mt-8 space-y-6">

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">

      <h4 className="text-xl font-bold text-white">
        {t.faq1Title}
      </h4>

      <p className="mt-3 text-gray-400">
       {t.faq1Desc}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">

      <h4 className="text-xl font-bold text-white">
      {t.faq2Title}
      </h4>

      <p className="mt-3 text-gray-400">
      {t.faq2Desc}
      </p>

    </div>

    <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">

      <h4 className="text-xl font-bold text-white">
      {t.faq3Title}
      </h4>

      <p className="mt-3 text-gray-400">
        {t.faq3Desc}
      </p>

    </div>

  </div>

  <div className="mt-16 rounded-3xl border border-red-600/30 bg-gradient-to-r from-[#0B1622] to-[#0F2232] p-10 text-center">

    <h2 className="text-4xl font-black text-white">
{t.finalTitle}

    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-300">

      {t.finalDescription}

    </p>

    <Link
      href="/download"
      className="mt-8 inline-flex rounded-xl bg-red-600 px-10 py-4 text-lg font-bold text-white transition hover:bg-red-700"
    >
      {t.finalButton}
    </Link>

  </div>

  <ExploreMore />

</div>

</div>

</div>

</section>

</main>

<Footer />

</>
);
}