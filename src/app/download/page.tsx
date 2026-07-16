"use client";
import Link from "next/link";
import ExploreMore from "@/components/ExploreMore";
import { useTranslation } from "@/hooks/useTranslation";
import {
  FaDownload,
  FaBolt,
  FaShieldAlt,
  FaBell,
  FaMobileAlt,
} from "react-icons/fa";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function DownloadPage() {

  const t = useTranslation();
  return (
    <main className="min-h-screen bg-[#050B12] text-white pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}

        <section className="relative overflow-hidden rounded-3xl border border-red-600/30 bg-gradient-to-br from-[#2B0000] via-[#4A0000] to-[#050B12] p-10 lg:p-16 shadow-[0_0_50px_rgba(220,38,38,.25)]">
          <div className="inline-flex rounded-full bg-red-600/20 px-5 py-2 font-semibold text-red-500">
      {t.heroBadge}
          </div>
<div
  className="mt-8 rounded-3xl border-4 border-red-500"
  style={{ minHeight: "300px" }}
>
  <img
  src="/download-banner.webp"
  alt="Download Banner"
  style={{
    width: "100%",
    height: "auto",
    display: "block",
    border: "5px solid red",
  }}
/>
</div>
          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
          {t.heroTitle}
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-gray-300">
  {t.heroDescription}
</p>

          <div className="mt-10 flex flex-col gap-5 md:flex-row">

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-8 py-5 text-lg font-bold transition hover:bg-red-700"
            >
              <FaDownload />
             {t.downloadBtn}
            </a>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border border-red-600 px-8 py-5 text-lg font-bold text-red-500 transition hover:bg-red-600 hover:text-white"
            >
              <FaDownload />
             {t.mirrorBtn}
            </a>

          </div>

        </section>

        {/* Features */}

        <section className="mt-24">

          <div className="text-center">

            <h2 className="text-4xl font-black">
              {t.featureTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-gray-400">
              {t.featureSubtitle}
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-slate-900 p-8 transition hover:-translate-y-2 hover:border hover:border-red-600">

              <FaBolt className="text-5xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">
               {t.smoothTitle}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Kam internet speed aur low-end Android devices par bhi
                crash games aur slots makhkhan ki tarah smoothly chalte hain.
              </p>

            </div>

            <div className="rounded-3xl bg-slate-900 p-8 transition hover:-translate-y-2 hover:border hover:border-red-600">

              <FaShieldAlt className="text-5xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">
                {t.secureTitle}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {t.secureDesc}
              </p>

            </div>

            <div className="rounded-3xl bg-slate-900 p-8 transition hover:-translate-y-2 hover:border hover:border-red-600">

              <FaBell className="text-5xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">
               {t.notificationTitle}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {t.notificationDesc}
              </p>

            </div>

            <div className="rounded-3xl bg-slate-900 p-8 transition hover:-translate-y-2 hover:border hover:border-red-600">

              <FaMobileAlt className="text-5xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">
                {t.mobileTitle}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
              {t.mobileDesc}
              </p>

            </div>

          </div>

        </section>
                {/* Installation Guide */}

        <section className="mt-24">

          <div className="rounded-3xl bg-slate-900 p-10 lg:p-14">

            <h2 className="text-4xl font-black">
              {t.installTitle}
            </h2>

            <p className="mt-5 text-lg text-gray-400">
              {t.installSubtitle}
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">

              <div className="rounded-2xl border border-slate-700 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl font-black">
                  1
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                {t.step1Title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                 {t.step1Desc}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl font-black">
                  2
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                 {t.step2Title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
              {t.step2Desc}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl font-black">
                  3
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                 {t.step3Title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                 {t.step3Desc}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl font-black">
                  4
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {t.step4Title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
              {t.step4Desc}
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Download Servers */}

        <section className="mt-24">

          <div className="text-center">

            <h2 className="text-4xl font-black">
              {t.serverTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-gray-400">
            {t.serverSubtitle}
            </p>

          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {/* Official */}

            <div className="rounded-3xl border border-red-600 bg-slate-900 p-10">

              <div className="inline-flex rounded-full bg-red-600/20 px-4 py-2 font-bold text-red-500">
               {t.officialServer}
              </div>

              <h3 className="mt-6 text-3xl font-black">
                {t.officialTitle}
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                {t.officialDesc}
              </p>

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-red-600 py-5 text-xl font-bold transition hover:bg-red-700"
              >
                <FaDownload />
               {t.officialBtn}
              </a>

            </div>

            {/* Mirror */}

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-10">

              <div className="inline-flex rounded-full bg-slate-800 px-4 py-2 font-bold text-white">
             {t.mirrorServer}
              </div>

              <h3 className="mt-6 text-3xl font-black">
              {t.mirrorTitle}
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                {t.mirrorDesc}
              </p>

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-red-600 py-5 text-xl font-bold text-red-500 transition hover:bg-red-600 hover:text-white"
              >
                <FaDownload />
             {t.mirrorDownloadBtn}
              </a>

            </div>

          </div>

        </section>

        {/* Security Notice */}

        <section className="mt-24 rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-10">

          <h2 className="text-3xl font-black text-yellow-400">
            {t.securityNoticeTitle}
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            {t.securityNoticeDesc}
          </p>

        </section>
                {/* FAQ Section */}

        <section className="mt-24">

          <div className="text-center">
            <h2 className="text-4xl font-black">
             {t.faqTitle}
            </h2>

            <p className="mt-5 text-gray-400">
             {t.faqSubtitle}
            </p>
          </div>

          <div className="mt-12 space-y-6">

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                {t.faq1Title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {t.faq1Desc}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                {t.faq2Title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
               {t.faq2Desc}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                {t.faq3Title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
             {t.faq3Desc}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
              {t.faq4Title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {t.faq4Desc}
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="relative mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-[#2B0000] via-[#590000] to-[#990000] p-12 text-center shadow-[0_0_40px_rgba(220,38,38,.25)]">
          <h2 className="text-4xl font-black">
          {t.ctaTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            {t.ctaDesc}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 md:flex-row">

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-[#990000] px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(220,38,38,.5)] active:scale-95"
            >
              {t.downloadBtn}
            </a>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
             className="rounded-2xl border-2 border-red-500 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_25px_rgba(220,38,38,.45)]">
            {t.mirrorDownloadBtn}
            </a>

          </div>

        </section>

        {/* Disclaimer */}

        <section className="mt-24 rounded-3xl bg-slate-900 p-10">

          <h2 className="text-3xl font-black">
           {t.disclaimerTitle}
          </h2>

          <p className="mt-6 leading-9 text-gray-400">
            {t.disclaimerDesc}
          </p>

        </section>
<ExploreMore />
      </div>
    </main>
  );
}