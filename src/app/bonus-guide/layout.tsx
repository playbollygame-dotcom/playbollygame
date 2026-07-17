import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlayBollyGame Bonus Guide (2026)",
  description:
    "Learn how to claim welcome bonuses, referral rewards and promotions on PlayBollyGame.",
  keywords: [
    "PlayBollyGame",
    "PlayBollyGame Bonus",
    "Bonus Guide",
    "Referral Bonus",
    "Welcome Bonus",
    "APK Download",
    "PlayBollyGame 2026",
  ],
};

export default function BonusGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}