import { whyChoose } from "@/translations/whyChoose";
import { useLanguage } from "@/context/LanguageContext";

import {
  FaShieldAlt,
  FaGift,
  FaBolt,
  FaHeadset,
} from "react-icons/fa";

export default function WhyChoose() {
  const { language } = useLanguage();
  const t = whyChoose[language];

  const features = [
    {
      icon: <FaShieldAlt />,
      title: t.card1Title,
      desc: t.card1Desc,
    },
    {
      icon: <FaGift />,
      title: t.card2Title,
      desc: t.card2Desc,
    },
    {
      icon: <FaBolt />,
      title: t.card3Title,
      desc: t.card3Desc,
    },
    {
      icon: <FaHeadset />,
      title: t.card4Title,
      desc: t.card4Desc,
    },
  ];

  return (
    <section className="bg-[#050B12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-red-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-red-400">
            {t.badge}
          </span>

  <h2 className="mt-6 text-5xl font-black">
  {t.title}
</h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            {t.description}
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-700 bg-gradient-to-b from-[#161B2D] to-[#0F172A] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,.40)]"
            >

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-4xl text-yellow-400 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}