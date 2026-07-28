import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlayBollyGame FAQ (2026) | Installation, Login & Bonus Help",
  description:
    "Find answers to the most frequently asked questions about PlayBollyGame including APK download, login, installation, bonuses, withdrawals and account support.",

  alternates: {
    canonical: "https://www.playbollygame.com/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}