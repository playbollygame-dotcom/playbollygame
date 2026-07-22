import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlayBollyGame Bonus Guide (2026) | Welcome Bonus & Referral Rewards",

  description:
    "Learn how to claim PlayBollyGame welcome bonuses, referral rewards, cashback offers, daily promotions, and exclusive bonus rewards. Follow our complete bonus guide for 2026.",

  keywords: [
    "PlayBollyGame Bonus Guide",
    "PlayBollyGame Bonus",
    "PlayBollyGame Welcome Bonus",
    "PlayBollyGame Referral Bonus",
    "PlayBollyGame Rewards",
    "PlayBollyGame Cashback",
    "PlayBollyGame Promotions",
    "PlayBollyGame APK",
    "PlayBollyGame 2026",
    "Bonus Guide",
    "Referral Rewards",
    "Welcome Bonus",
    "APK Download",
  ],

  alternates: {
    canonical: "https://www.playbollygame.com/bonus-guide",
  },

  openGraph: {
    title: "PlayBollyGame Bonus Guide (2026) | Welcome Bonus & Referral Rewards",
    description:
      "Discover PlayBollyGame welcome bonuses, referral rewards, cashback offers, and exclusive promotions with our complete bonus guide.",
    url: "https://www.playbollygame.com/bonus-guide",
    siteName: "PlayBollyGame",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/download-banner.webp",
        width: 1200,
        height: 630,
        alt: "PlayBollyGame Bonus Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PlayBollyGame Bonus Guide (2026) | Welcome Bonus & Referral Rewards",
    description:
      "Learn how to claim PlayBollyGame welcome bonuses, referral rewards, cashback offers, and promotions.",
    images: ["/download-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BonusGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}