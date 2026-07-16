import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download PlayBollyGame APK | Official Download Center",
  description:
    "Download the latest official PlayBollyGame APK safely and enjoy secure gaming.",
  alternates: {
    canonical: "https://www.playbollygame.com/download",
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}