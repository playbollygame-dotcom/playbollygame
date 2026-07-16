import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | PlayBollyGame",
  description:
    "Find answers to the most common questions about PlayBollyGame APK.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}