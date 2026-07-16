import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlayBollyGame Games (2026)",
  description:
    "Explore exciting games on PlayBollyGame including Teen Patti, Dragon vs Tiger and more.",
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}