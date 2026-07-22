import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlayBollyGame Games (2026) | Aviator, Wingo, Teen Patti & More",

  description:
    "Explore the latest PlayBollyGame games including Aviator, Wingo, Teen Patti, Dragon vs Tiger, Color Prediction, and more. Enjoy exciting gameplay, bonuses, rewards, and secure gaming.",

  keywords: [
    "PlayBollyGame Games",
    "PlayBollyGame",
    "PlayBollyGame APK",
    "PlayBollyGame 2026",
    "Aviator Game",
    "Wingo Game",
    "Teen Patti",
    "Dragon vs Tiger",
    "Color Prediction Game",
    "BollyGame Games",
    "Online Games",
    "Real Cash Games",
    "Bonus Games",
    "APK Download",
  ],

  alternates: {
    canonical: "https://www.playbollygame.com/games",
  },

  openGraph: {
    title: "PlayBollyGame Games (2026) | Aviator, Wingo, Teen Patti & More",
    description:
      "Discover exciting PlayBollyGame games including Aviator, Wingo, Teen Patti, Dragon vs Tiger, and more with secure gameplay and bonus rewards.",
    url: "https://www.playbollygame.com/games",
    siteName: "PlayBollyGame",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/games-banner.webp",
        width: 1200,
        height: 630,
        alt: "PlayBollyGame Games",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PlayBollyGame Games (2026) | Aviator, Wingo, Teen Patti & More",
    description:
      "Play Aviator, Wingo, Teen Patti, Dragon vs Tiger and more exciting games on PlayBollyGame.",
    images: ["/games-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}