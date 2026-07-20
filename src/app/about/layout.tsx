import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PlayBollyGame | APK Download, Bonus & Platform Guide (2026)",

  description:
    "Learn everything about PlayBollyGame (2026), including APK download, exciting games, welcome bonus offers, referral rewards, cashback, secure gameplay, and platform features.",

  keywords: [
    "About PlayBollyGame",
    "PlayBollyGame",
    "PlayBollyGame APK",
    "PlayBollyGame APK Download",
    "PlayBollyGame 2026",
    "PlayBollyGame Bonus",
    "PlayBollyGame Games",
    "BollyGame",
    "Bolly Game",
    "Bolly Game APK",
    "Gaming Platform",
    "APK Download",
    "Bonus Guide",
    "Referral Bonus",
  ],

  alternates: {
    canonical: "https://www.playbollygame.com/about",
  },

  openGraph: {
    title: "About PlayBollyGame | APK Download, Bonus & Platform Guide (2026)",
    description:
      "Discover PlayBollyGame's games, APK download, welcome bonuses, referral rewards, secure gameplay, and platform features.",
    url: "https://www.playbollygame.com/about",
    siteName: "PlayBollyGame",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/about-banner.webp",
        width: 1200,
        height: 630,
        alt: "About PlayBollyGame",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About PlayBollyGame | APK Download, Bonus & Platform Guide (2026)",
    description:
      "Learn about PlayBollyGame, APK download, games, welcome bonuses, referral rewards, and secure gaming.",
    images: ["/about-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}