import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlayBollyGame Home (2026) | Official APK Download, Bonus & Games",

  description:
    "Download the latest PlayBollyGame APK (2026). Explore exciting games, claim welcome bonus, referral rewards, cashback offers, daily promotions, and enjoy a secure gaming experience.",

  keywords: [
    "PlayBollyGame Home",
    "PlayBollyGame",
    "Play BollyGame",
    "Play Bolly Game",
    "PlayBollyGame APK",
    "PlayBollyGame APK Download",
    "PlayBollyGame 2026",
    "Official PlayBollyGame",
    "BollyGame",
    "Bolly Game",
    "APK Download",
    "Bonus",
    "Daily Rewards",
    "Referral Bonus",
    "Cashback Offers",
    "Gaming Platform",
  ],

  alternates: {
    canonical: "https://www.playbollygame.com/home",
  },

  openGraph: {
    title: "PlayBollyGame Home (2026) | Official APK Download, Bonus & Games",
    description:
      "Download the latest PlayBollyGame APK (2026). Explore exciting games, welcome bonus, referral rewards, cashback offers, and daily rewards.",
    url: "https://www.playbollygame.com/home",
    siteName: "PlayBollyGame",
    images: [
      {
        url: "/home-banner.webp",
        width: 1200,
        height: 630,
        alt: "PlayBollyGame Home",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PlayBollyGame Home (2026) | Official APK Download, Bonus & Games",
    description:
      "Download the latest PlayBollyGame APK (2026). Explore exciting games, welcome bonus, referral rewards, cashback offers, and daily rewards.",
    images: ["/home-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}