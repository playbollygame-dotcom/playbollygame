import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PlayBollyGame | Official Support, APK Help & Bonus Assistance",

  description:
    "Contact the official PlayBollyGame support team for APK download assistance, account help, welcome bonus, referral rewards, cashback offers, payments, and general gaming support.",

  keywords: [
    "PlayBollyGame Contact",
    "PlayBollyGame Support",
    "Contact PlayBollyGame",
    "PlayBollyGame APK",
    "PlayBollyGame Help",
    "PlayBollyGame Customer Support",
    "APK Download Help",
    "Bonus Support",
    "Referral Rewards",
    "Gaming Support",
  ],

  alternates: {
    canonical: "https://www.playbollygame.com/contact",
  },

  openGraph: {
    title: "Contact PlayBollyGame | Official Support, APK Help & Bonus Assistance",
    description:
      "Need help with PlayBollyGame? Contact our official support team for APK downloads, account assistance, welcome bonuses, referral rewards, cashback offers, and technical support.",
    url: "https://www.playbollygame.com/contact",
    siteName: "PlayBollyGame",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/contact-banner.webp",
        width: 1200,
        height: 630,
        alt: "Contact PlayBollyGame",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact PlayBollyGame | Official Support",
    description:
      "Get official PlayBollyGame support for APK downloads, bonuses, account issues, and gaming assistance.",
    images: ["/contact-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}