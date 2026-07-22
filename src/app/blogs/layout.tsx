import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlayBollyGame Blogs (2026) | APK Download, Bonus Guides & Gaming Tips",

  description:
    "Explore the latest PlayBollyGame blogs featuring APK download guides, bonus offers, referral rewards, gaming tips, installation tutorials, and platform updates.",

  keywords: [
    "PlayBollyGame Blogs",
    "PlayBollyGame",
    "PlayBollyGame APK",
    "PlayBollyGame APK Download",
    "PlayBollyGame Bonus",
    "PlayBollyGame 2026",
    "BollyGame Blog",
    "Bolly Game APK",
    "Gaming Tips",
    "Bonus Guide",
    "Referral Rewards",
    "APK Download Guide",
  ],

  alternates: {
    canonical: "https://www.playbollygame.com/blogs",
  },

  openGraph: {
    title: "PlayBollyGame Blogs (2026) | APK Download, Bonus Guides & Gaming Tips",
    description:
      "Read the latest PlayBollyGame blogs about APK downloads, bonus guides, referral rewards, installation tutorials, and gaming tips.",
    url: "https://www.playbollygame.com/blogs",
    siteName: "PlayBollyGame",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/blogs-banner.webp",
        width: 1200,
        height: 630,
        alt: "PlayBollyGame Blogs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PlayBollyGame Blogs (2026) | APK Download, Bonus Guides & Gaming Tips",
    description:
      "Explore PlayBollyGame blogs with APK download guides, bonus offers, and gaming tips.",
    images: ["/blogs-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}