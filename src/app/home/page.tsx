import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050B12] min-h-screen pt-24">

        {/* Hero */}
        <section className="border-b border-slate-800">

          <div className="max-w-7xl mx-auto px-6 py-16">

            <p className="uppercase tracking-[6px] text-green-400 font-semibold">
              Home
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-black text-white leading-tight">
              BollyGame
              <span className="block text-green-400">
                India's Trusted Gaming Platform
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-8">
              Explore exciting games, daily rewards, referral bonuses,
              cashback offers, and exclusive promotions on one of India's
              fastest-growing gaming platforms.
            </p>

            <div className="mt-10">
              <Link
                href="/download"
                className="inline-flex rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white hover:bg-green-600 transition"
              >
                Download Bollygame
              </Link>
            </div>

          </div>

        </section>

        {/* Banner */}

        <section className="py-16">

          <div className="max-w-7xl mx-auto px-6">

            <img
  src="/home-banner.webp"
  alt="BollyGame Banner"
  className="rounded-3xl w-full shadow-2xl"
/>

          </div>

        </section>

        {/* Article */}

        <section className="pb-20">

          <div className="max-w-5xl mx-auto px-6">

            <div className="rounded-3xl border border-slate-800 bg-[#081018] p-8 md:p-12">

              <h2 className="text-4xl font-bold text-white mb-8">
                BollyGame – India's Trusted Real Cash Gaming Platform with Exciting Rewards and Daily Bonuses
              </h2>

              <div className="space-y-7 text-gray-300 leading-8 text-lg">

                <p>
                  The world of online gaming is growing rapidly, and players
                  are always searching for a secure platform that offers
                  exciting games, instant rewards, and a smooth user
                  experience.
                </p>

                <p>
                  BollyGame has become one of the fastest-growing gaming
                  platforms in India, providing entertaining games,
                  attractive bonuses, referral rewards, and quick
                  withdrawals.
                </p>

                <p>
                  Whether you are a beginner or an experienced player,
                  BollyGame offers an enjoyable gaming experience with
                  multiple game categories and regular promotional offers.
                </p>

                <div className="mt-10">

                  <Link
                    href="/download"
                    className="inline-flex rounded-xl bg-green-500 px-8 py-4 font-bold text-white hover:bg-green-600 transition"
                  >
                    Download BollyGame APK
                  </Link>

                </div>

                              <h3 className="text-3xl font-bold text-white pt-8">
                  Why BollyGame Is Becoming Popular
                </h3>

                <p>
                  BollyGame is designed for players who enjoy skill-based and
                  entertainment gaming. The platform focuses on providing a
                  secure environment, fast gameplay, attractive rewards, and a
                  user-friendly experience.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mt-6">

                  <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">
                    <h4 className="font-bold text-green-400 mb-2">
                      🎁 Welcome Rewards
                    </h4>
                    <p className="text-gray-400">
                      Attractive welcome bonuses for eligible new users.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">
                    <h4 className="font-bold text-green-400 mb-2">
                      💰 Daily Bonuses
                    </h4>
                    <p className="text-gray-400">
                      Regular daily rewards and promotional campaigns.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">
                    <h4 className="font-bold text-green-400 mb-2">
                      ⚡ Fast Transactions
                    </h4>
                    <p className="text-gray-400">
                      Quick deposits and smooth withdrawal process.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">
                    <h4 className="font-bold text-green-400 mb-2">
                      🔒 Secure Platform
                    </h4>
                    <p className="text-gray-400">
                      Reliable payment methods with account protection.
                    </p>
                  </div>

                </div>

                <h3 className="text-3xl font-bold text-white pt-10">
                  Exciting Games Available
                </h3>

                <p>
                  BollyGame offers multiple exciting games so users can enjoy
                  everything from one application without switching platforms.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

                  <div className="rounded-xl bg-[#0D1722] p-5 text-center border border-slate-700">
                    🎮
                    <p className="mt-3 font-semibold text-white">
                      Teen Patti
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#0D1722] p-5 text-center border border-slate-700">
                    🐉
                    <p className="mt-3 font-semibold text-white">
                      Dragon vs Tiger
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#0D1722] p-5 text-center border border-slate-700">
                    🎯
                    <p className="mt-3 font-semibold text-white">
                      Color Prediction
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#0D1722] p-5 text-center border border-slate-700">
                    🎲
                    <p className="mt-3 font-semibold text-white">
                      Lucky Spin
                    </p>
                  </div>

                </div>

                <h3 className="text-3xl font-bold text-white pt-10">
                  Daily Rewards & Bonus Offers
                </h3>

                <p>
                  Users can participate in various promotional campaigns
                  throughout the year. Rewards may include welcome bonuses,
                  cashback offers, referral benefits, and limited-time events.
                </p>

                <ul className="list-disc pl-6 space-y-3 text-gray-300">

                  <li>Welcome Bonus</li>
                  <li>Daily Login Rewards</li>
                  <li>Referral Bonus</li>
                  <li>Cashback Promotions</li>
                  <li>Festival Campaigns</li>
                  <li>VIP Benefits</li>

                </ul>

                <div className="rounded-3xl bg-gradient-to-r from-green-500 to-green-600 p-8 mt-12">

                  <h3 className="text-3xl font-bold text-white">
                    Ready to Start?
                  </h3>

                  <p className="mt-4 text-green-100 text-lg">
                    Download the latest BollyGame APK and enjoy exciting
                    games, daily bonuses, cashback offers, and referral
                    rewards.
                  </p>

                  <Link
                    href="/download"
                    className="inline-flex mt-8 rounded-xl bg-white px-8 py-4 font-bold text-green-600 hover:bg-gray-100 transition"
                  >
                    Download Bollygame
                  </Link>

                </div>

                         <h3 className="text-3xl font-bold text-white pt-12">
                  Referral Program
                </h3>

                <p>
                  One of the most popular features of BollyGame is its referral
                  program. Users can invite friends and receive referral rewards
                  whenever the platform's eligibility conditions are met.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mt-8">

                  <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">
                    <h4 className="text-green-400 font-bold mb-2">
                      👥 Invite Friends
                    </h4>
                    <p className="text-gray-400">
                      Share your referral link and invite eligible users.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-5">
                    <h4 className="text-green-400 font-bold mb-2">
                      💸 Earn Rewards
                    </h4>
                    <p className="text-gray-400">
                      Participate in referral campaigns and unlock bonus
                      opportunities.
                    </p>
                  </div>

                </div>

                <h3 className="text-3xl font-bold text-white pt-12">
                  Safe & Secure Gaming Experience
                </h3>

                <p>
                  Security plays an important role in online gaming.
                  BollyGame focuses on protecting users by offering secure
                  accounts, reliable payment methods, and a smooth gaming
                  experience.
                </p>

                <div className="grid md:grid-cols-3 gap-5 mt-8">

                  <div className="rounded-xl bg-[#0D1722] border border-slate-700 p-5">
                    🔒
                    <h4 className="mt-3 text-white font-bold">
                      Protected Accounts
                    </h4>
                  </div>

                  <div className="rounded-xl bg-[#0D1722] border border-slate-700 p-5">
                    ⚡
                    <h4 className="mt-3 text-white font-bold">
                      Fast Withdrawals
                    </h4>
                  </div>

                  <div className="rounded-xl bg-[#0D1722] border border-slate-700 p-5">
                    💳
                    <h4 className="mt-3 text-white font-bold">
                      Secure Payments
                    </h4>
                  </div>

                </div>

                <h3 className="text-3xl font-bold text-white pt-12">
                  Frequently Asked Questions
                </h3>

                <div className="space-y-6 mt-8">

                  <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                    <h4 className="text-xl font-bold text-white">
                      What is BollyGame?
                    </h4>

                    <p className="mt-3 text-gray-400">
                      BollyGame is an online gaming platform offering exciting
                      games, promotional campaigns, referral rewards, and
                      bonus opportunities.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                    <h4 className="text-xl font-bold text-white">
                      Does BollyGame provide bonuses?
                    </h4>

                    <p className="mt-3 text-gray-400">
                      Eligible users may receive welcome rewards, cashback
                      offers, referral bonuses, and limited-time promotions.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6">
                    <h4 className="text-xl font-bold text-white">
                      Is BollyGame beginner friendly?
                    </h4>

                    <p className="mt-3 text-gray-400">
                      Yes. The platform is designed with a simple interface,
                      making it easy for both beginners and experienced users.
                    </p>
                  </div>

                </div>

                <div className="mt-16 rounded-3xl border border-green-500/30 bg-gradient-to-r from-[#0B1622] to-[#0F2232] p-10 text-center">

                  <h2 className="text-4xl font-black text-white">
                    Start Your Gaming Journey Today
                  </h2>

                  <p className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto">
                    Download the latest BollyGame APK and enjoy exciting games,
                    daily bonuses, referral rewards, cashback offers, and
                    exclusive promotions on one secure platform.
                  </p>

                  <Link
                    href="/download"
                    className="inline-flex mt-8 rounded-xl bg-green-500 px-10 py-4 text-lg font-bold text-white transition hover:bg-green-600"
                  >
                    Download BollyGame APK
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}