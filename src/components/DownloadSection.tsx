"use client";

import { useLanguage } from "@/context/LanguageContext";
import { downloadSection } from "@/translations/downloadSection";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function DownloadSection() {
  const { language } = useLanguage();
  const t = downloadSection[language];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2B0000] via-[#590000] to-[#990000] py-24 text-white">

      {/* Background Effects */}

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,.18),transparent_70%)]"></div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        {/* Logo */}

        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">

          <img
            src="/logo.png"
            alt="PlayBollyGame"
            className="h-20 w-20 rounded-2xl"
          />

        </div>

        {/* Heading */}

        <h2 className="text-5xl font-black leading-tight md:text-6xl">
          {t.title}
        </h2>

        {/* Divider */}

        <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-yellow-400"></div>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-100 md:text-xl">
          {t.description}
        </p>

        {/* Download Button */}

        <div className="mt-12 flex justify-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(220,38,38,.45)]"
          >
            {t.download}
          </a>

        </div>

        {/* Features */}

        <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-200">

          <span>{t.feature1}</span>

          <span>{t.feature2}</span>

          <span>{t.feature3}</span>

          <span>{t.feature4}</span>

        </div>

      </div>

    </section>
  );
}