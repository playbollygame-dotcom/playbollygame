import Link from "next/link";

export default function ExploreMore() {
  return (
    <section className="mt-20 rounded-3xl border border-slate-800 bg-[#081018] p-8">

      <h2 className="text-center text-4xl font-black text-white">
        Explore More
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-center text-gray-400">
        Discover more PlayBollyGame guides, APK downloads, bonus offers,
        gaming tips, and useful resources.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        <Link
          href="/download"
          className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6 transition hover:border-green-500 hover:bg-[#132130]"
        >
          <h3 className="text-xl font-bold text-green-400">
            📥 Download APK
          </h3>

          <p className="mt-2 text-gray-400">
            Download the latest PlayBollyGame APK safely.
          </p>
        </Link>

        <Link
          href="/download-bolly-game-apk"
          className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6 transition hover:border-green-500 hover:bg-[#132130]"
        >
          <h3 className="text-xl font-bold text-green-400">
            🚀 Latest APK Guide
          </h3>

          <p className="mt-2 text-gray-400">
            Learn how to install the latest version.
          </p>
        </Link>

        <Link
          href="/bonus-guide"
          className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6 transition hover:border-green-500 hover:bg-[#132130]"
        >
          <h3 className="text-xl font-bold text-green-400">
            🎁 Bonus Guide
          </h3>

          <p className="mt-2 text-gray-400">
            Discover welcome bonuses and referral rewards.
          </p>
        </Link>

        <Link
          href="/blogs"
          className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6 transition hover:border-green-500 hover:bg-[#132130]"
        >
          <h3 className="text-xl font-bold text-green-400">
            📰 Latest Blogs
          </h3>

          <p className="mt-2 text-gray-400">
            Read the newest PlayBollyGame articles and guides.
          </p>
        </Link>

        <Link
          href="/about"
          className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6 transition hover:border-green-500 hover:bg-[#132130]"
        >
          <h3 className="text-xl font-bold text-green-400">
            ℹ️ About Us
          </h3>

          <p className="mt-2 text-gray-400">
            Learn more about PlayBollyGame and our platform.
          </p>
        </Link>

        <Link
          href="/contact"
          className="rounded-2xl border border-slate-700 bg-[#0D1722] p-6 transition hover:border-green-500 hover:bg-[#132130]"
        >
          <h3 className="text-xl font-bold text-green-400">
            📩 Contact Us
          </h3>

          <p className="mt-2 text-gray-400">
            Get in touch with our support team.
          </p>
        </Link>

      </div>

    </section>
  );
}