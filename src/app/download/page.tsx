import type { Metadata } from "next";
import ExploreMore from "@/components/ExploreMore";
import Image from "next/image";
import {
  FaDownload,
  FaShieldAlt,
  FaBolt,
  FaBell,
  FaMobileAlt,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Download PlayBollyGame APK | Official Download Center",
  description:
    "Download the latest PlayBollyGame APK from the official download center. Safe, secure and updated APK.",
};

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#050B12] text-white pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}

        <section className="relative overflow-hidden rounded-3xl border border-red-600/30 bg-gradient-to-br from-[#2B0000] via-[#4A0000] to-[#050B12] p-10 lg:p-16 shadow-[0_0_50px_rgba(220,38,38,.25)]">
          <div className="inline-flex rounded-full bg-red-600/20 px-5 py-2 font-semibold text-red-500">
            Official Download Center
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
            Download PlayBollyGame APK
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-gray-300">
            Jaise hi aap website ke Download Tab par click karte hain,
            aap is highly secure aur fast-loading interface par pahunch jaate hain.
            Yeh dedicated download page khas taur par aapko
            <span className="font-bold text-red-500">
              {" "}
              PlayBollyGame App{" "}
            </span>
            ka sabse authenticated aur original installation package
            pradan karta hai.
          </p>

          <div className="mt-10 flex flex-col gap-5 md:flex-row">

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-8 py-5 text-lg font-bold transition hover:bg-red-700"
            >
              <FaDownload />
              OPTION 1 : DOWNLOAD OFFICIAL APK
            </a>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border border-red-600 px-8 py-5 text-lg font-bold text-red-500 transition hover:bg-red-600 hover:text-white"
            >
              <FaDownload />
              OPTION 2 : MIRROR SERVER DOWNLOAD
            </a>

          </div>

        </section>

        {/* Features */}

        <section className="mt-24">

          <div className="text-center">

            <h2 className="text-4xl font-black">
              PlayBollyGame App Features
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-gray-400">
              Smartphones par ekdam seamless, lag-free aur immersive
              gaming experience ke liye PlayBollyGame App best choice hai.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-slate-900 p-8 transition hover:-translate-y-2 hover:border hover:border-red-600">

              <FaBolt className="text-5xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">
                Smooth Gameplay
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Kam internet speed aur low-end Android devices par bhi
                crash games aur slots makhkhan ki tarah smoothly chalte hain.
              </p>

            </div>

            <div className="rounded-3xl bg-slate-900 p-8 transition hover:-translate-y-2 hover:border hover:border-red-600">

              <FaShieldAlt className="text-5xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">
                Advanced Security
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Wallet balance, transactions aur personal data
                end-to-end encrypted rehta hai.
              </p>

            </div>

            <div className="rounded-3xl bg-slate-900 p-8 transition hover:-translate-y-2 hover:border hover:border-red-600">

              <FaBell className="text-5xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">
                Real-Time Alerts
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Promotions, bonuses aur latest updates sabse pehle
                notification ke through milte hain.
              </p>

            </div>

            <div className="rounded-3xl bg-slate-900 p-8 transition hover:-translate-y-2 hover:border hover:border-red-600">

              <FaMobileAlt className="text-5xl text-red-500" />

              <h3 className="mt-6 text-2xl font-bold">
                Optimized App
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Fast loading, lightweight aur Android smartphones ke
                liye specially optimized.
              </p>

            </div>

          </div>

        </section>
                {/* Installation Guide */}

        <section className="mt-24">

          <div className="rounded-3xl bg-slate-900 p-10 lg:p-14">

            <h2 className="text-4xl font-black">
              Installation Guide
            </h2>

            <p className="mt-5 text-lg text-gray-400">
              APK download karne ke baad niche diye gaye steps follow karein.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">

              <div className="rounded-2xl border border-slate-700 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl font-black">
                  1
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Download Bollygame
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  Official ya Mirror Server me se kisi bhi ek button par click
                  karke latest APK file download karein.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl font-black">
                  2
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Allow Unknown Sources
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  Settings → Security → Allow Installation from Unknown Sources
                  ko ON karein.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl font-black">
                  3
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Install APK
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  Download hui APK file open karein aur Install button dabayein.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl font-black">
                  4
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Login & Claim Bonus
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  Mobile number verify karein, login karein aur welcome bonus
                  claim karke gaming shuru karein.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Download Servers */}

        <section className="mt-24">

          <div className="text-center">

            <h2 className="text-4xl font-black">
              Download Options
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-gray-400">
              High-speed aur secure downloading ke liye niche diye gaye
              verified servers ka use karein.
            </p>

          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {/* Official */}

            <div className="rounded-3xl border border-red-600 bg-slate-900 p-10">

              <div className="inline-flex rounded-full bg-red-600/20 px-4 py-2 font-bold text-red-500">
                Official Server
              </div>

              <h3 className="mt-6 text-3xl font-black">
                ⚡ Download Official APK
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                Primary Cloud Server se latest verified PlayBollyGame APK
                download karein.
              </p>

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-red-600 py-5 text-xl font-bold transition hover:bg-red-700"
              >
                <FaDownload />
                DOWNLOAD NOW
              </a>

            </div>

            {/* Mirror */}

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-10">

              <div className="inline-flex rounded-full bg-slate-800 px-4 py-2 font-bold text-white">
                Mirror Server
              </div>

              <h3 className="mt-6 text-3xl font-black">
                🚀 Backup Download
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                Agar official server busy ho to backup mirror server ka use
                karke instantly APK download karein.
              </p>

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-red-600 py-5 text-xl font-bold text-red-500 transition hover:bg-red-600 hover:text-white"
              >
                <FaDownload />
                MIRROR DOWNLOAD
              </a>

            </div>

          </div>

        </section>

        {/* Security Notice */}

        <section className="mt-24 rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-10">

          <h2 className="text-3xl font-black text-yellow-400">
            🔒 Security Notice
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            Hamesha official PlayBollyGame APK hi download karein.
            Third-party ya modified APK files account security,
            wallet aur personal data ke liye harmful ho sakti hain.
            Is page par diye gaye dono download buttons verified aur
            trusted source provide karte hain.
          </p>

        </section>
                {/* FAQ Section */}

        <section className="mt-24">

          <div className="text-center">
            <h2 className="text-4xl font-black">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-gray-400">
              PlayBollyGame APK download se jude sabse common questions.
            </p>
          </div>

          <div className="mt-12 space-y-6">

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Is PlayBollyGame APK Safe?
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Ji haan. Is page par diya gaya APK official source se
                provide kiya jata hai aur regular updates ke sath aata hai.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Latest Version Kaise Download Kare?
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Sirf is official Download Center ka use karein.
                Hamesha latest verified version yahi available hota hai.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                APK Install Nahi Ho Raha?
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Unknown Sources enable karein aur purani APK uninstall
                karke latest APK install karein.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Kya Download Free Hai?
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Haan. PlayBollyGame APK bilkul free download ki ja sakti hai.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="relative mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-[#2B0000] via-[#590000] to-[#990000] p-12 text-center shadow-[0_0_40px_rgba(220,38,38,.25)]">
          <h2 className="text-4xl font-black">
            Ready To Play?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Official PlayBollyGame APK download karein aur
            exciting games, fast withdrawals aur exclusive bonuses ka
            maza uthaiye.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 md:flex-row">

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-[#990000] px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(220,38,38,.5)] active:scale-95"
            >
              Download Official APK
            </a>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
             className="rounded-2xl border-2 border-red-500 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_25px_rgba(220,38,38,.45)]">
              Mirror Download
            </a>

          </div>

        </section>

        {/* Disclaimer */}

        <section className="mt-24 rounded-3xl bg-slate-900 p-10">

          <h2 className="text-3xl font-black">
            Disclaimer
          </h2>

          <p className="mt-6 leading-9 text-gray-400">
            Yeh page sirf PlayBollyGame APK download information
            provide karta hai. Download karne se pehle apne area ke
            local rules aur regulations zarur check karein.
            Sirf official links ka hi use karein.
          </p>

        </section>
<ExploreMore />
      </div>
    </main>
  );
}