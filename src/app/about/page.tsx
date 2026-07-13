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

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-green-400 font-semibold">
            About PlayBollyGame
          </p>

          <h1 className="mt-4 text-5xl font-black leading-tight">
            Welcome to
            <span className="block text-green-400">
              PlayBollyGame
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            India's trusted gaming platform offering exciting games,
            daily rewards, referral bonuses, instant payouts,
            and a secure gaming experience.
          </p>

        </div>

        {/* First Paragraph */}

        <div className="mt-16 space-y-8 text-lg leading-9 text-gray-300">

          <p>
            Welcome to the ultimate hub of online entertainment and
            real cash gaming! Humara platform,
            <span className="font-bold text-green-400">
              {" "}bollygame
            </span>,
            India ka ek leading aur most trusted gaming network hai
            jahan gaming enthusiasts ko ek unique aur safe ecosystem
            milta hai.
          </p>

          {/* First Download Button */}

          <div className="flex justify-center">

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-green-500 px-10 py-4 font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-green-600"
            >
              <FaDownload />
              Download Bollygame
            </a>

          </div>

              <p>
            Agar aap online gaming ke zariye excitement aur high rewards dono
            chahte hain, toh aap bilkul sahi jagah par aaye hain. Pure internet
            par <span className="font-semibold text-green-400">BollyGame</span>{" "}
            ko ek trusted gaming platform ke roop mein jaana jata hai kyunki
            hum transparency, secure gameplay, aur fast payouts ko hamesha
            priority dete hain.
          </p>

          <p>
            Humari pehchan aur behtareen ranking ka nateejah hai ki Google par
            search karne par BollyGame ko hazaron users roz visit karte hain.
            Humara goal hai har player ko ek safe, exciting aur rewarding gaming
            experience dena.
          </p>

          {/* About Banner */}

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">

            <img
              src="/about-banner.webp"
              alt="PlayBollyGame Bonus Banner"
              className="w-full object-cover"
            />

          </div>

          <div className="mt-12 rounded-3xl border border-green-500/20 bg-[#081018] p-8">

            <h2 className="text-3xl font-black text-white">
              Why Thousands of Players Trust PlayBollyGame
            </h2>

            <p className="mt-5 text-gray-400 leading-8">
              PlayBollyGame is designed to deliver an entertaining and rewarding
              gaming experience with modern features, exciting promotions,
              referral rewards, and a secure platform for every player.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <h3 className="text-xl font-bold text-green-400">
                  🎁 Daily Rewards
                </h3>

                <p className="mt-3 text-gray-400">
                  Claim welcome bonuses, login rewards, cashback offers,
                  and seasonal promotions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <h3 className="text-xl font-bold text-green-400">
                  ⚡ Fast Withdrawals
                </h3>

                <p className="mt-3 text-gray-400">
                  Smooth deposits and quick withdrawals help provide a
                  convenient gaming experience.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <h3 className="text-xl font-bold text-green-400">
                  👥 Referral Program
                </h3>

                <p className="mt-3 text-gray-400">
                  Invite eligible friends and participate in referral campaigns
                  to unlock additional rewards.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <h3 className="text-xl font-bold text-green-400">
                  🔒 Secure Platform
                </h3>

                <p className="mt-3 text-gray-400">
                  Reliable payment methods and account protection make
                  PlayBollyGame a trusted platform.
                </p>
              </div>

            </div>

          </div>

                 <div className="mt-16">

            <h2 className="text-4xl font-black text-center text-white">
              Why Choose PlayBollyGame?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-gray-400">
              PlayBollyGame continues to attract thousands of gaming enthusiasts
              by offering exciting games, secure transactions, attractive
              rewards, and a smooth user experience across devices.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <div className="text-4xl">🎮</div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  Exciting Games
                </h3>

                <p className="mt-3 text-gray-400">
                  Enjoy Teen Patti, Dragon vs Tiger, Lucky Spin,
                  Color Prediction, Card Games, and many more.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <div className="text-4xl">💰</div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  Daily Rewards
                </h3>

                <p className="mt-3 text-gray-400">
                  Welcome bonuses, cashback offers, referral rewards,
                  login bonuses, and exclusive campaigns.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <div className="text-4xl">🚀</div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  Smooth Experience
                </h3>

                <p className="mt-3 text-gray-400">
                  Fast loading, secure payments, and responsive design
                  for mobile and desktop users.
                </p>
              </div>

            </div>

          </div>

          {/* FAQ */}

          <div className="mt-20">

            <h2 className="text-4xl font-black text-center text-white">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 space-y-6">

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <h3 className="text-xl font-bold text-white">
                  What is PlayBollyGame?
                </h3>

                <p className="mt-3 text-gray-400">
                  PlayBollyGame is an online gaming platform offering exciting
                  games, promotional campaigns, referral rewards, and a smooth
                  gaming experience.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <h3 className="text-xl font-bold text-white">
                  Does PlayBollyGame offer bonuses?
                </h3>

                <p className="mt-3 text-gray-400">
                  Eligible users can participate in welcome rewards, referral
                  campaigns, cashback promotions, and other limited-time offers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                <h3 className="text-xl font-bold text-white">
                  Is PlayBollyGame beginner friendly?
                </h3>

                <p className="mt-3 text-gray-400">
                  Yes. The platform is designed with a simple interface that
                  makes it easy for new users to register and explore games.
                </p>
              </div>

            </div>

          </div>

          {/* Final CTA */}

          <div className="mt-20 rounded-3xl bg-gradient-to-r from-green-500 to-green-600 p-10 text-center">

            <h2 className="text-4xl font-black text-white">
              Ready to Play?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-green-100">
              Download the latest PlayBollyGame APK today and enjoy exciting
              games, referral rewards, cashback offers, and exclusive
              promotional campaigns.
            </p>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-10 py-4 font-bold text-green-600 shadow-lg transition hover:scale-105"
            >
              <FaDownload />
              Download Bollygame
            </a>

          </div>
<ExploreMore />
        </div>

      </div>

    </main>
  );
}