import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/bolly-games",
        destination: "/games",
        permanent: true,
      },
      {
        source: "/blogs/playbollygame-apk-latest-version",
        destination: "/blogs/bolly-game-apk-download-2026-latest-version",
        permanent: true,
      },
      {
        source: "/blogs/playbollygame-beginner-faq-guide",
        destination: "/faq", // Change this if another page is a better replacement
        permanent: true,
      },
    ];
  },
};

export default nextConfig;