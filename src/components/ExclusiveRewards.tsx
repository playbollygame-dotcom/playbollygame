import { exclusiveRewards } from "@/translations/exclusiveRewards";
import { useLanguage } from "@/context/LanguageContext";

import {
  FaGift,
  FaCoins,
  FaUserFriends,
  FaBolt,
} from "react-icons/fa";

export default function ExclusiveRewards() {
  const { language } = useLanguage();
  const t = exclusiveRewards[language];

  const rewards = [
    {
      icon: <FaGift />,
      title: t.card1Title,
      desc: t.card1Desc,
    },
    {
      icon: <FaCoins />,
      title: t.card2Title,
      desc: t.card2Desc,
    },
    {
      icon: <FaUserFriends />,
      title: t.card3Title,
      desc: t.card3Desc,
    },
    {
      icon: <FaBolt />,
      title: t.card4Title,
      desc: t.card4Desc,
    },
  ];

  return (
    <section className="bg-[#081018] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-red-600/20 px-5 py-2 text-red-500">
            {t.badge}
          </span>

          <h2 className="mt-6 text-5xl font-black">
            {t.title}
          </h2>

          <p className="mt-5 text-gray-400">
            {t.description}
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {rewards.map((reward) => (
            <div
              key={reward.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_0_25px_rgba(34,197,94,.35)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-3xl text-white">
                {reward.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {reward.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {reward.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}