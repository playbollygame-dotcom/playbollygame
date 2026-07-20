import type { Metadata } from "next";
import GoogleTranslate from "@/components/GoogleTranslate";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";
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
    default: "PlayBollyGame (2026) | APK Download, Bonus & Games",
    template: "%s | PlayBollyGame",
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
    "Bollygame Blogs",
  ],

  authors: [
    {
      name: "PlayBollyGame",
    },
  ],

  creator: "PlayBollyGame",
  publisher: "PlayBollyGame",

  openGraph: {
    title: "PlayBollyGame (2026) | APK Download, Bonus & Games",
    description:
      "Download the latest PlayBollyGame APK (2026). Enjoy exciting games, welcome bonuses, cashback offers, referral rewards, and secure gameplay.",
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
    title: "PlayBollyGame (2026) | APK Download, Bonus & Games",
    description:
      "Download the latest PlayBollyGame APK (2026). Enjoy exciting games, welcome bonuses, cashback offers, referral rewards, and secure gameplay.",
    images: ["/home-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.playbollygame.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PlayBollyGame",
  url: "https://www.playbollygame.com",
  logo: "https://www.playbollygame.com/icon.png",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PlayBollyGame",
  url: "https://www.playbollygame.com",
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
      <body className="min-h-full flex flex-col">
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <LanguageProvider>
          <GoogleTranslate />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}