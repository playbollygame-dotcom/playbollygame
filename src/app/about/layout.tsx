import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PlayBollyGame (2026)",

  description:
    "Learn about PlayBollyGame, India's popular gaming platform. Discover exciting games, APK downloads, welcome bonuses, cashback offers, referral rewards and secure gameplay.",

  keywords: [
    "About PlayBollyGame",
    "PlayBollyGame",
    "PlayBollyGame APK",
    "PlayBollyGame 2026",
    "BollyGame",
    "Bolly Game",
    "Gaming Platform",
    "APK Download",
  ],

  alternates: {
    canonical: "https://www.playbollygame.com/about",
  },

  openGraph: {
    title: "About PlayBollyGame (2026)",
    description:
      "Learn more about PlayBollyGame, its features, games, bonuses and secure gaming experience.",
    url: "https://www.playbollygame.com/about",
    type: "website",
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