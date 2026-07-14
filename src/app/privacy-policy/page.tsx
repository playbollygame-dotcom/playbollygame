import Image from "next/image";
import type { Metadata } from "next";
import ExploreMore from "@/components/ExploreMore";

export const metadata: Metadata = {
  title: "Privacy Policy | PlayBollyGame (2026)",

  description:
    "Read the official PlayBollyGame Privacy Policy to understand how we collect, use, and protect your information while using our website and services.",

  keywords: [
    "PlayBollyGame Privacy Policy",
    "Privacy Policy",
    "PlayBollyGame",
    "BollyGame",
    "User Privacy",
    "Data Protection",
    "Website Policy",
  ],

  alternates: {
    canonical: "https://www.playbollygame.com/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | PlayBollyGame (2026)",
    description:
      "Learn how PlayBollyGame collects, stores, and protects your information through our official Privacy Policy.",
    url: "https://www.playbollygame.com/privacy-policy",
    type: "website",
    images: [
      {
        url: "/faq-banner.webp",
        width: 1200,
        height: 630,
        alt: "PlayBollyGame Privacy Policy",
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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050B12] text-white py-28">

      <div className="mx-auto max-w-6xl px-6">

        {/* Hero */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-red-500 font-semibold">
            Privacy Policy
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-400">
            At PlayBollyGame, your privacy is extremely important to us.
            This Privacy Policy explains how we collect, use, protect,
            and manage your information while you browse and use our website.
          </p>

        </div>

        {/* Banner */}

        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">

          <Image
            src="/faq-banner.webp"
            alt="PlayBollyGame Privacy Policy"
            width={1200}
            height={500}
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
            className="rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-10 py-4 text-lg font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,.45)]"
          >
            ⬇ Download BollyGame
          </a>

        </div>

        <div className="mt-16 space-y-10">

                   {/* Introduction */}

          <section className="rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-bold text-white">
              1. Introduction
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Welcome to PlayBollyGame. We value your trust and are committed
              to protecting your privacy. This Privacy Policy explains how we
              collect, use, and safeguard your information while you browse our
              website and use its features.
            </p>

          </section>

          {/* Information We Collect */}

          <section className="rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-bold text-white">
              2. Information We Collect
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Depending on how you interact with our website, we may collect
              the following types of information:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-400">
              <li>Name (when voluntarily provided)</li>
              <li>Email Address</li>
              <li>Device Information</li>
              <li>Browser Information</li>
              <li>IP Address</li>
              <li>Cookies & Usage Data</li>
            </ul>

          </section>

          {/* How We Use Information */}

          <section className="rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-bold text-white">
              3. How We Use Your Information
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              We use the collected information to improve the quality of our
              website and provide a better user experience.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-400">
              <li>Improve website performance</li>
              <li>Provide customer support</li>
              <li>Respond to user enquiries</li>
              <li>Maintain website security</li>
              <li>Analyze website traffic</li>
              <li>Improve user experience</li>
            </ul>

          </section>

          {/* Cookies */}

          <section className="rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-bold text-white">
              4. Cookies
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Our website may use cookies to remember user preferences,
              improve browsing experience, analyze traffic, and enhance
              website performance. You can disable cookies anytime through
              your browser settings.
            </p>

          </section>

          {/* Third-Party Services */}

          <section className="rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-bold text-white">
              5. Third-Party Services
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              We may use trusted third-party services for analytics, website
              hosting, performance monitoring, and functionality. These
              providers operate under their own privacy policies.
            </p>

          </section>
          {/* Data Security */}

          <section className="rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-bold text-white">
              6. Data Security
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              We implement reasonable technical and organizational security
              measures to help protect your information against unauthorized
              access, alteration, disclosure, or misuse. While no online
              platform can guarantee complete security, we continuously work
              to improve the safety of our website.
            </p>

          </section>

          {/* External Links */}

          <section className="rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-bold text-white">
              7. External Links
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Our website may contain links to external websites for your
              convenience. We are not responsible for the privacy practices,
              security policies, or content of third-party websites. We
              encourage users to review the privacy policies of those sites
              before sharing personal information.
            </p>

          </section>

          {/* Policy Updates */}

          <section className="rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-bold text-white">
              8. Policy Updates
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              We may update this Privacy Policy from time to time to reflect
              changes in our services, legal requirements, or security
              practices. Any updates will be published on this page along with
              the latest revision date.
            </p>

          </section>

          {/* Contact */}

          <section className="rounded-3xl border border-slate-800 bg-[#081018] p-8">

            <h2 className="text-3xl font-bold text-white">
              9. Contact Us
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              If you have any questions, suggestions, or concerns regarding
              this Privacy Policy, feel free to contact us through our Contact
              page or email us at
              <span className="font-semibold text-red-500">
                {" "}playbollygame@gmail.com
              </span>.
            </p>

          </section>

          {/* Bottom Download Section */}

          <div className="mt-20 rounded-3xl bg-gradient-to-r from-red-600 to-red-700 p-10 text-center">

            <h2 className="text-4xl font-black text-white">
              Download PlayBollyGame
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-green-100">
              Download the latest PlayBollyGame APK to explore exciting games,
              welcome rewards, referral bonuses, and exclusive promotional
              campaigns. Enjoy a secure and smooth gaming experience.
            </p>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-white px-10 py-4 text-lg font-bold text-green-600 transition duration-300 hover:scale-105"
            >
              ⬇ Download BollyGame
            </a>
          </div>
<ExploreMore />
        </div>

      </div>

    </main>
  );
}