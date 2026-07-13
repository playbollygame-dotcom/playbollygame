import Image from "next/image";
import type { Metadata } from "next";
import { FaDownload } from "react-icons/fa";
import ExploreMore from "@/components/ExploreMore";

export const metadata: Metadata = {
  title: "PlayBollyGame Games (2026) | Play Popular Games",

  description:
    "Explore exciting games on PlayBollyGame including Teen Patti, Dragon vs Tiger, Color Prediction, Lucky Spin, and more. Download the latest PlayBollyGame APK.",

  keywords: [
    "PlayBollyGame Games",
    "PlayBollyGame",
    "PlayBollyGame APK",
    "PlayBollyGame 2026",
    "Teen Patti",
    "Dragon vs Tiger",
    "Color Prediction",
    "Lucky Spin",
    "Card Games",
    "Online Games",
    "Gaming India",
  ],

  alternates: {
    canonical: "https://www.playbollygame.com/games",
  },

  openGraph: {
    title: "PlayBollyGame Games (2026)",
    description:
      "Discover the latest PlayBollyGame games including Teen Patti, Dragon vs Tiger, Color Prediction, and more.",
    url: "https://www.playbollygame.com/games",
    type: "website",
    images: [
      {
        url: "/games-banner.webp",
        width: 1200,
        height: 630,
        alt: "PlayBollyGame Games",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-[#050B12] pt-28 pb-20 text-white">

      <div className="mx-auto max-w-6xl px-6">

        {/* Hero */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-green-400 font-semibold">
            PlayBollyGame
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Exciting Games Collection
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Explore the most popular games available on PlayBollyGame.
            Enjoy exciting gameplay, daily rewards, referral bonuses,
            promotional events, and a smooth gaming experience.
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
            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:scale-105"
          >
            <FaDownload />
            Download BollyGame
          </a>

        </div>

               {/* Games Section */}

        <div className="mt-20">

          <h2 className="text-center text-4xl font-black text-white">
            Popular Games on PlayBollyGame
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-gray-400">
            PlayBollyGame offers a wide variety of exciting games for players
            looking for fun, entertainment, and rewarding gameplay.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-green-500">
              <div className="text-5xl">🃏</div>

              <h3 className="mt-6 text-2xl font-bold text-green-400">
                Teen Patti
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                One of India's most popular card games with exciting gameplay
                and smooth user experience.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-green-500">
              <div className="text-5xl">🐉</div>

              <h3 className="mt-6 text-2xl font-bold text-green-400">
                Dragon vs Tiger
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Fast-paced gameplay with exciting rounds that many players
                enjoy every day.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-green-500">
              <div className="text-5xl">🎨</div>

              <h3 className="mt-6 text-2xl font-bold text-green-400">
                Color Prediction
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                A simple and entertaining game category with an engaging
                interface.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-green-500">
              <div className="text-5xl">🎰</div>

              <h3 className="mt-6 text-2xl font-bold text-green-400">
                Lucky Spin
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Spin the wheel and enjoy exciting rewards through promotional
                events and offers.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-green-500">
              <div className="text-5xl">♠️</div>

              <h3 className="mt-6 text-2xl font-bold text-green-400">
                Card Games
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Discover multiple entertaining card game categories available
                on the platform.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 transition hover:border-green-500">
              <div className="text-5xl">💰</div>

              <h3 className="mt-6 text-2xl font-bold text-green-400">
                Rewards & Promotions
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Explore welcome rewards, referral bonuses, cashback offers,
                and seasonal campaigns.
              </p>
            </div>

          </div>

        </div>

                {/* Why Choose */}

        <div className="mt-20 rounded-3xl border border-slate-800 bg-[#081018] p-10">

          <h2 className="text-center text-4xl font-black text-white">
            Why Choose PlayBollyGame?
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-gray-400">
            PlayBollyGame combines exciting games, a user-friendly interface,
            attractive promotions, and secure gameplay to deliver a smooth
            entertainment experience for players across India.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
              <h3 className="text-2xl font-bold text-green-400">
                ⚡ Fast Gameplay
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Enjoy smooth performance, quick loading, and responsive gameplay
                designed for mobile users.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
              <h3 className="text-2xl font-bold text-green-400">
                🎁 Daily Rewards
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Explore welcome rewards, daily bonuses, cashback offers, and
                referral campaigns available on the platform.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Download Section */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 p-10 text-center">

          <h2 className="text-4xl font-black text-white">
            Ready to Start Playing?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-green-100">
            Download the latest PlayBollyGame APK today and enjoy exciting
            games, daily rewards, referral bonuses, cashback offers,
            and exclusive promotions.
          </p>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-10 py-4 font-bold text-green-600 shadow-lg transition hover:scale-105"
          >
            <FaDownload />
            Download BollyGame
          </a>

        </div>

        {/* Internal Links */}

        <ExploreMore />

      </div>

    </main>
  );
}