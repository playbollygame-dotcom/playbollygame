import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FAQ from "@/components/FAQ";
import ExploreMore from "@/components/ExploreMore";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | PlayBollyGame",
  description:
    "Find answers to the most common questions about PlayBollyGame APK, bonuses, installation, account support, rewards, withdrawals and gameplay.",
};

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function FAQPage() {
  const relatedBlogs = blogs.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#050B12] py-28 text-white">

      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-5xl font-black">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Find answers to the most common questions about
            PlayBollyGame APK, installation, welcome bonus,
            rewards, withdrawals, referral program,
            account support and more.
          </p>

        </div>

        {/* Download Button */}

        <div className="mt-10 flex justify-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-[#8B0000] px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,.45)]"
          >
            ⬇ Download BollyGame APK
          </a>

        </div>

        {/* FAQ Banner */}

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

          <Image
            src="/faq-banner.png"
            alt="PlayBollyGame FAQ Banner"
            width={1400}
            height={800}
            priority
            className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
          />

        </div>
                {/* FAQ Section */}

        <div className="mt-16">

          <FAQ />

        </div>

        {/* Bottom Download Button */}

        <div className="mt-16 flex justify-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-[#8B0000] px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,.45)]"
          >
            ⬇ Download BollyGame APK
          </a>

        </div>

        {/* Related Articles */}

        <div className="mt-20">

          <div className="text-center">

            <h2 className="text-4xl font-black text-white">
              Related Articles
            </h2>

            <p className="mt-4 text-gray-400">
              Explore more PlayBollyGame guides, APK tutorials and gaming tips.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {relatedBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,.25)]"
              >
                <h3 className="text-xl font-bold transition group-hover:text-red-500">
                  {blog.title}
                </h3>

                <p className="mt-3 line-clamp-3 leading-7 text-gray-400">
                  {blog.description}
                </p>

                <span className="mt-5 inline-flex items-center font-semibold text-red-500">
                  Read More →
                </span>

              </Link>
            ))}
          </div>

        </div>
                {/* Explore More */}

        <div className="mt-20">

          <ExploreMore />

        </div>

      </div>

    </main>
  );
}