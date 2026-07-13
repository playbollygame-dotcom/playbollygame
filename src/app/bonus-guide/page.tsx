import { FaDownload } from "react-icons/fa";
import type { Metadata } from "next";
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

export default function BonusGuidePage() {
  return (
    <main className="min-h-screen bg-[#050B12] pt-28 pb-20 text-white">

      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-green-400 font-semibold">
            Bonus Guide
          </p>

          <h1 className="mt-4 text-5xl font-black">
            PlayBollyGame Bonus Guide
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Learn how to claim welcome bonuses, deposit rewards,
            referral earnings, and exclusive promotions on
            PlayBollyGame.
          </p>

        </div>

        {/* Banner */}

        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">

          <img
            src="/bonus-banner.webp"
            alt="PlayBollyGame Bonus Banner"
            className="w-full"
          />

        </div>

        {/* Download Button */}

        <div className="mt-10 flex justify-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-green-500 px-10 py-4 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
          >
            <FaDownload />
            Download Bollygame
          </a>

        </div>

        <div className="mt-16 space-y-8 text-lg leading-9 text-gray-300">

          <h2 className="text-4xl font-black text-white">
            PlayBollyGame Bonus Guide: Free Cash Aur Mega Bonuses Kaise Claim Karein?
          </h2>

          <p>
            Online real cash gaming mein agar aap apni kamai ko pehle hi din
            se dugna-tingna karna chahte hain, toh PlayBollyGame ka official
            Bonus Guide aapke liye ek jackpot hai!
          </p>

                    {/* Bonus Cards */}

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-green-500/20 bg-[#081018] p-6">
              <h3 className="text-2xl font-bold text-green-400">
                🎁 ₹200 Free Cash
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Agar aap platform par naye hain, toh pehli baar official app
                download karte hi aap ₹200 tak ka welcome reward claim kar sakte
                hain. Is bonus ka use karke aap exciting games explore kar sakte
                hain.
              </p>
            </div>

            <div className="rounded-2xl border border-green-500/20 bg-[#081018] p-6">
              <h3 className="text-2xl font-bold text-green-400">
                💰 200% First Deposit Bonus
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Apna pehla deposit karte hi aapko exciting deposit bonus mil
                sakta hai. Isse aap apne wallet balance ke saath aur bhi zyada
                games enjoy kar sakte hain.
              </p>
            </div>

            <div className="rounded-2xl border border-green-500/20 bg-[#081018] p-6">
              <h3 className="text-2xl font-bold text-green-400">
                👥 Refer & Earn
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Apne doston ko invite karke referral rewards earn karein.
                Eligible referrals ke liye attractive bonuses aur campaigns ka
                benefit uthaiye.
              </p>
            </div>

          </div>

          {/* Secure Download */}

          <div className="mt-16 rounded-3xl border border-green-500/20 bg-[#081018] p-8">

            <h2 className="text-3xl font-black text-white">
              Secure Installation Guide
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Official PlayBollyGame APK download karne ke liye hamesha trusted
              source ka use karein. Latest version download karke naye features,
              bonuses aur promotions ka benefit uthaiye.
            </p>

            <div className="mt-8 flex flex-col gap-5 md:flex-row">

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-green-500 px-8 py-4 text-center font-bold text-white transition hover:bg-green-600"
              >
                ⚡ Download Bollygame APK
              </a>

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl border border-green-500 px-8 py-4 text-center font-bold text-green-400 transition hover:bg-green-500 hover:text-white"
              >
                🚀 Alternative Download
              </a>

            </div>

          </div>

          {/* Conclusion */}

          <div className="mt-16 rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-black text-white">
              Conclusion
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              PlayBollyGame par welcome rewards, deposit bonuses, referral
              campaigns aur promotional offers ke saath ek exciting gaming
              experience ka maza lijiye. Latest APK download karke available
              rewards aur offers explore karein.
            </p>

            <div className="mt-10 flex justify-center">

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-green-500 px-10 py-4 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
              >
                <FaDownload />
                Download Bollygame
              </a>

            </div>
<ExploreMore />
          </div>

        </div>

      </div>

    </main>
  );
}