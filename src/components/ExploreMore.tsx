import Link from "next/link";

export default function ExploreMore() {
  return (
    <section className="mt-20 rounded-3xl border border-slate-800 bg-[#081018] p-10">

      {/* Heading */}

      <div className="text-center">

        <h2 className="text-4xl font-black text-white">
          Explore More
        </h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400"></div>

        <p className="mx-auto mt-5 max-w-3xl text-gray-400">
          Explore more PlayBollyGame resources including APK downloads,
          bonus guides, referral rewards, FAQs, and the latest blogs.
        </p>

      </div>

      {/* Cards */}

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <Link
          href="/download"
          className="group rounded-3xl border border-slate-700 bg-[#101827] p-7 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]"
        >
          <h3 className="text-2xl font-bold text-red-500">
            📥 Download APK
          </h3>

          <p className="mt-3 text-gray-400">
            Download the latest PlayBollyGame APK safely and install the newest version.
          </p>
        </Link>

        <Link
          href="/download-bolly-game-apk"
          className="group rounded-3xl border border-slate-700 bg-[#101827] p-7 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]"
        >
          <h3 className="text-2xl font-bold text-red-500">
            🚀 APK Guide
          </h3>

          <p className="mt-3 text-gray-400">
            Learn how to download, install and update PlayBollyGame APK.
          </p>
        </Link>

        <Link
          href="/bonus-guide"
          className="group rounded-3xl border border-slate-700 bg-[#101827] p-7 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]"
        >
          <h3 className="text-2xl font-bold text-red-500">
            🎁 Bonus Guide
          </h3>

          <p className="mt-3 text-gray-400">
            Explore welcome bonuses, referral rewards and promotional offers.
          </p>
        </Link>

        <Link
          href="/blogs"
          className="group rounded-3xl border border-slate-700 bg-[#101827] p-7 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]"
        >
          <h3 className="text-2xl font-bold text-red-500">
            📰 Latest Blogs
          </h3>

          <p className="mt-3 text-gray-400">
            Read helpful guides, APK tutorials, FAQs and gaming resources.
          </p>
        </Link>

        <Link
          href="/about"
          className="group rounded-3xl border border-slate-700 bg-[#101827] p-7 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]"
        >
          <h3 className="text-2xl font-bold text-red-500">
            ℹ️ About Us
          </h3>

          <p className="mt-3 text-gray-400">
            Learn more about PlayBollyGame and our mission.
          </p>
        </Link>

        <Link
          href="/contact"
          className="group rounded-3xl border border-slate-700 bg-[#101827] p-7 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]"
        >
          <h3 className="text-2xl font-bold text-red-500">
            📩 Contact Us
          </h3>

          <p className="mt-3 text-gray-400">
            Need assistance? Our support team is here to help.
          </p>
        </Link>

      </div>

    </section>
  );
}