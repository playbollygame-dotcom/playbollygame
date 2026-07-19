"use client";

import { useLanguage } from "@/context/LanguageContext";
import { aboutSection } from "@/translations/aboutSection";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function AboutSection() {
  const { language } = useLanguage();
  const t = aboutSection[language];

  const features = [
    {
      title: t.card1Title,
      description: t.card1Desc,
    },
    {
      title: t.card2Title,
      description: t.card2Desc,
    },
    {
      title: t.card3Title,
      description: t.card3Desc,
    },
    {
      title: t.card4Title,
      description: t.card4Desc,
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#050B12] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-red-600 bg-red-600/10 px-5 py-2 text-red-500">
            {t.badge}
          </span>

          <h2 className="mt-8 text-5xl font-black">
            {t.title}
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-400">
            {t.description}
          </p>

        </div>

        {/* Feature Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]"
            >
              <h3 className="text-2xl font-bold text-red-500">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

        {/* Download Button */}

        <div className="mt-16 text-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-red-600 px-10 py-4 font-bold text-white transition hover:bg-red-700"
          >
            {t.download}
          </a>

        </div>

      </div>
    </section>
  );
}