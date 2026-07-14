import { FaDownload } from "react-icons/fa";
import type { Metadata } from "next";
import ExploreMore from "@/components/ExploreMore";

export const metadata: Metadata = {
  title: "About PlayBollyGame (2026)",

  description:
    "Learn about PlayBollyGame, India's popular gaming platform. Discover exciting games, APK downloads, welcome bonuses, cashback offers, referral rewards, and secure gameplay.",

  keywords: [
    "About PlayBollyGame",
    "PlayBollyGame",
    "PlayBollyGame APK",
    "PlayBollyGame 2026",
    "BollyGame",
    "Bolly Game",
    "Gaming Platform",
    "APK Download",
  ],

  alternates: {
    canonical: "https://www.playbollygame.com/about",
  },

  openGraph: {
    title: "About PlayBollyGame (2026)",
    description:
      "Learn more about PlayBollyGame, its features, games, bonuses, and secure gaming experience.",
    url: "https://www.playbollygame.com/about",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050B12] pt-28 pb-20 text-white">

      <div className="mx-auto max-w-6xl px-6">

        {/* Hero */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-yellow-400">
            About PlayBollyGame
          </p>

          <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl">
            Welcome to
            <span className="block text-red-500">
              PlayBollyGame
            </span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            India's trusted gaming platform offering exciting games,
            secure gameplay, daily rewards, referral bonuses,
            cashback offers and smooth withdrawals.
          </p>

        </div>

        {/* About Content */}

        <div className="mt-16 space-y-8 text-lg leading-9 text-gray-300">

          <p>
            Welcome to the ultimate hub of online entertainment and real cash
            gaming. <span className="font-bold text-red-500">PlayBollyGame</span>
            {" "}is designed to deliver a smooth, secure and rewarding gaming
            experience for every player.
          </p>

          <div className="flex justify-center">

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-[#990000] px-10 py-5 text-lg font-bold text-white shadow-[0_0_30px_rgba(220,38,38,.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,.6)]"
            >
              <FaDownload />
              Download BollyGame APK
            </a>

          </div>

          <p>
            Thousands of players trust PlayBollyGame because of its reliable
            platform, exciting games, attractive promotions, secure payments,
            and user-friendly interface. Whether you're a beginner or an
            experienced player, you'll find a smooth experience across all
            devices.
          </p>

          <p>
            We continuously improve our platform by introducing new games,
            better performance, regular updates, and exciting promotional
            campaigns to enhance your gaming experience.
          </p>

          {/* Banner */}

          <div className="mt-12 overflow-hidden rounded-3xl border border-red-600/20 shadow-2xl">

            <img
              src="/about-banner.webp"
              alt="PlayBollyGame"
              className="w-full object-cover"
            />

          </div>

          {/* Why Trust */}

          <div className="mt-12 rounded-3xl border border-red-600/20 bg-[#081018] p-8">

            <h2 className="text-3xl font-black text-white">
              Why Thousands of Players Trust PlayBollyGame
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              PlayBollyGame provides secure gameplay, exciting rewards,
              reliable performance and an enjoyable gaming environment.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <h3 className="text-xl font-bold text-red-500">
                  🎁 Daily Rewards
                </h3>

                <p className="mt-3 text-gray-400">
                  Login bonuses, cashback offers, referral rewards and
                  promotional campaigns.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <h3 className="text-xl font-bold text-red-500">
                  ⚡ Fast Withdrawals
                </h3>

                <p className="mt-3 text-gray-400">
                  Smooth deposits and quick withdrawals with secure payment
                  methods.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <h3 className="text-xl font-bold text-red-500">
                  👥 Referral Program
                </h3>

                <p className="mt-3 text-gray-400">
                  Invite friends and unlock additional referral rewards.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <h3 className="text-xl font-bold text-red-500">
                  🔒 Secure Platform
                </h3>

                <p className="mt-3 text-gray-400">
                  Safe account protection and trusted gaming environment.
                </p>
              </div>

            </div>

          </div>

          {/* Features */}

          <div className="mt-16">

            <h2 className="text-center text-4xl font-black">
              Why Choose PlayBollyGame?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-gray-400">
              Exciting games, attractive rewards, secure gameplay and
              excellent performance across all devices.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <div className="text-4xl">🎮</div>

                <h3 className="mt-5 text-2xl font-bold">
                  Exciting Games
                </h3>

                <p className="mt-3 text-gray-400">
                  Enjoy Dragon vs Tiger, Wingo, Slots, Aviator,
                  Teen Patti and many more.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">

                <div className="text-4xl">💰</div>

                <h3 className="mt-5 text-2xl font-bold">
                  Daily Rewards
                </h3>

                <p className="mt-3 text-gray-400">
                  Welcome bonuses, cashback, referral rewards and
                  exciting offers.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">

                <div className="text-4xl">🚀</div>

                <h3 className="mt-5 text-2xl font-bold">
                  Smooth Experience
                </h3>

                <p className="mt-3 text-gray-400">
                  Optimized for mobile and desktop with secure gameplay.
                </p>

              </div>

            </div>

          </div>
                    {/* FAQ */}

          <div className="mt-20">

            <h2 className="text-center text-4xl font-black text-white">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-gray-400">
              Find answers to the most common questions about
              PlayBollyGame, downloads, rewards and gameplay.
            </p>

            <div className="mt-10 space-y-6">

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6 transition duration-300 hover:border-red-600">

                <h3 className="text-xl font-bold text-white">
                  What is PlayBollyGame?
                </h3>

                <p className="mt-3 leading-8 text-gray-400">
                  PlayBollyGame is an online gaming platform where players
                  can enjoy exciting games, welcome rewards, cashback,
                  referral bonuses and a smooth gaming experience.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6 transition duration-300 hover:border-red-600">

                <h3 className="text-xl font-bold text-white">
                  Is PlayBollyGame safe?
                </h3>

                <p className="mt-3 leading-8 text-gray-400">
                  Yes. The platform focuses on secure gameplay,
                  protected user accounts and reliable payment
                  methods.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6 transition duration-300 hover:border-red-600">

                <h3 className="text-xl font-bold text-white">
                  Does PlayBollyGame offer bonuses?
                </h3>

                <p className="mt-3 leading-8 text-gray-400">
                  Eligible users can participate in welcome rewards,
                  referral bonuses, cashback campaigns and
                  promotional offers.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6 transition duration-300 hover:border-red-600">

                <h3 className="text-xl font-bold text-white">
                  Can beginners use PlayBollyGame?
                </h3>

                <p className="mt-3 leading-8 text-gray-400">
                  Absolutely. The interface is designed to be
                  beginner-friendly with simple navigation and
                  quick registration.
                </p>

              </div>

            </div>

          </div>

          {/* Final CTA */}

          <div className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-[#2B0000] via-[#590000] to-[#990000] p-10 text-center shadow-[0_0_45px_rgba(220,38,38,.28)]">

            {/* Background */}

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,.18),transparent_70%)]"></div>

            <div className="relative z-10">

              <h2 className="text-5xl font-black text-white">
                Ready to Play?
              </h2>

              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400"></div>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
                Download the latest
                <span className="font-semibold text-white">
                  {" "}PlayBollyGame APK
                </span>
                {" "}and enjoy exciting games, referral rewards,
                cashback offers, welcome bonuses and secure gameplay.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">

                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-[#990000] px-10 py-5 text-lg font-bold text-white shadow-[0_0_30px_rgba(220,38,38,.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,.6)]"
                >
                  <FaDownload />
                  Download BollyGame APK
                </a>

                <a
                  href="/bonus-guide"
                  className="inline-flex items-center gap-3 rounded-2xl border border-red-500 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,.45)]"
                >
                  🎁 Bonus Guide
                </a>

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