import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlayBollyGame APK Download (2026) | Official Latest Version",

  description:
    "Download the latest PlayBollyGame APK (2026) safely from the official download center. Get the newest version, welcome bonus, referral rewards, secure gameplay, and installation guide.",

  keywords: [
    "PlayBollyGame APK",
    "PlayBollyGame APK Download",
    "PlayBollyGame Download",
    "PlayBollyGame Latest Version",
    "PlayBollyGame 2026",
    "BollyGame APK",
    "Bolly Game APK Download",
    "APK Download",
    "Official PlayBollyGame",
    "PlayBollyGame Bonus",
    "Download PlayBollyGame",
  ],

  alternates: {
    canonical: "https://www.playbollygame.com/download",
  },

  openGraph: {
    title: "PlayBollyGame APK Download (2026) | Official Latest Version",
    description:
      "Download the latest official PlayBollyGame APK (2026). Enjoy exciting games, welcome bonuses, referral rewards, secure gameplay, and the newest features.",
    url: "https://www.playbollygame.com/download",
    siteName: "PlayBollyGame",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/download-banner.webp",
        width: 1200,
        height: 630,
        alt: "PlayBollyGame APK Download",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PlayBollyGame APK Download (2026) | Official Latest Version",
    description:
      "Download the latest PlayBollyGame APK safely with welcome bonus, referral rewards, and secure gameplay.",
    images: ["/download-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}