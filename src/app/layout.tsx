import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.playbollygame.com"),

  title: {
    default: "PlayBollyGame (2026)",
    template: "%s | PlayBollyGame (2026)",
  },

  description:
    "Download the latest PlayBollyGame APK (2026). Enjoy exciting games, welcome bonuses, referral rewards, cashback offers, secure gameplay, and exclusive promotions.",

  keywords: [
    "PlayBollyGame",
    "Play BollyGame",
    "Play Bolly Game",
    "PlayBollyGame APK",
    "PlayBollyGame APK Download",
    "PlayBollyGame 2026",
    "PlayBollyGame Latest Version",
    "BollyGame",
    "Bolly Game",
    "Bolly Game APK",
    "Bolly Game Download",
    "Bolly Game 2026",
    "APK Download",
    "APK Latest Version",
    "Bonus Guide",
    "Referral Bonus",
    "Welcome Bonus",
    "Bollygame Blogs"
  ],

  authors: [
    {
      name: "PlayBollyGame",
    },
  ],

  creator: "PlayBollyGame",
  publisher: "PlayBollyGame",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "PlayBollyGame (2026)",
    description:
      "Download the latest PlayBollyGame APK (2026) and enjoy exciting games, welcome bonuses, cashback offers, referral rewards, and secure gameplay.",
    url: "https://www.playbollygame.com",
    siteName: "PlayBollyGame",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/home-banner.webp",
        width: 1200,
        height: 630,
        alt: "PlayBollyGame",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PlayBollyGame (2026)",
    description:
      "Download the latest PlayBollyGame APK and enjoy exciting games with amazing bonuses.",
    images: ["/home-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PlayBollyGame",
      url: "https://www.playbollygame.com",
      logo: "https://www.playbollygame.com/icon.png",
      sameAs: [],
    }),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "PlayBollyGame",
      url: "https://www.playbollygame.com",
    }),
  }}
/>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}