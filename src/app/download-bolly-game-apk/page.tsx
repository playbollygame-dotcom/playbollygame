import { FaDownload } from "react-icons/fa";
import ExploreMore from "@/components/ExploreMore";
const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function DownloadBollyGamePage() {
  return (
    <main className="min-h-screen bg-[#050B12] pt-28 pb-20 text-white">

      <div className="mx-auto max-w-6xl px-6">

        {/* Hero */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-green-400 font-semibold">
            Official APK Download
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Download BollyGame APK (2026)
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Download the latest PlayBollyGame APK safely and enjoy exciting
            games, daily rewards, welcome bonuses, referral campaigns,
            and a secure gaming experience.
          </p>

        </div>

        {/* Top Download Button */}

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

        {/* Banner */}

        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">

          <img
            src="/download-banner.webp"
            alt="Download BollyGame APK"
            className="w-full"
          />

        </div>

        <div className="mt-16 space-y-8 text-lg leading-9 text-gray-300">

          <h2 className="text-4xl font-black text-white">
            Download PlayBollyGame APK – Official Latest Version
          </h2>

          <p>
            PlayBollyGame is one of India's fastest-growing online gaming
            platforms. Download the latest APK to enjoy smooth gameplay,
            welcome rewards, referral bonuses, cashback offers,
            and exciting gaming experiences.
          </p>
          {/* Features */}

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-green-500/20 bg-[#081018] p-6">
              <h3 className="text-2xl font-bold text-green-400">
                🎁 Welcome Rewards
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                New users can explore exciting welcome rewards, daily bonuses,
                and promotional offers available on the platform.
              </p>
            </div>

            <div className="rounded-2xl border border-green-500/20 bg-[#081018] p-6">
              <h3 className="text-2xl font-bold text-green-400">
                ⚡ Fast & Secure
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Enjoy smooth gameplay, secure transactions, quick deposits,
                and a responsive gaming experience across supported devices.
              </p>
            </div>

            <div className="rounded-2xl border border-green-500/20 bg-[#081018] p-6">
              <h3 className="text-2xl font-bold text-green-400">
                👥 Refer & Earn
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Invite eligible friends and participate in referral campaigns
                to unlock additional rewards and bonus opportunities.
              </p>
            </div>

          </div>

          {/* Installation Guide */}

          <div className="mt-16 rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-black text-white">
              How to Install the APK
            </h2>

            <div className="mt-8 space-y-5 text-gray-300">

              <p><strong>Step 1:</strong> Click the Download APK button.</p>

              <p><strong>Step 2:</strong> Wait for the APK file to finish downloading.</p>

              <p><strong>Step 3:</strong> Allow installation from trusted sources if prompted on your device.</p>

              <p><strong>Step 4:</strong> Install the APK and open PlayBollyGame.</p>

              <p><strong>Step 5:</strong> Register or log in and explore available games and promotions.</p>

            </div>

          </div>

          {/* FAQ */}

          <div className="mt-16 rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-black text-white">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 space-y-6">

              <div>
                <h3 className="text-xl font-bold text-green-400">
                  Is PlayBollyGame APK free to download?
                </h3>

                <p className="mt-2 text-gray-400">
                  Yes, the APK can be downloaded from the official source.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400">
                  Is the APK safe?
                </h3>

                <p className="mt-2 text-gray-400">
                  Download the APK only from the official PlayBollyGame website
                  to ensure you receive the latest available version.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400">
                  Can I receive welcome rewards?
                </h3>

                <p className="mt-2 text-gray-400">
                  Eligible users may receive welcome rewards and promotional
                  offers according to the platform's current terms.
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Download Section */}

          <div className="mt-20 rounded-3xl bg-gradient-to-r from-green-500 to-green-600 p-10 text-center">

            <h2 className="text-4xl font-black text-white">
              Ready to Download?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-green-100">
              Download the latest PlayBollyGame APK and start enjoying exciting
              games, promotional campaigns, referral rewards, and a smooth
              gaming experience.
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