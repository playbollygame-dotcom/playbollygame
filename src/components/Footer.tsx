"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { footer } from "@/translations/footer";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function Footer() {
  const { language } = useLanguage();
  const t = footer[language];

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-red-500">
              PlayBollyGame
            </h2>

            <p className="mt-5 text-gray-400">
              {t.brandDesc}
            </p>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
            >
              {t.download}
            </a>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              {t.quickLinks}
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>{t.home}</li>
              <li>{t.blogs}</li>
              <li>{t.faq}</li>
              <li>{t.contact}</li>
            </ul>
          </div>

          {/* Popular Games */}

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              {t.popularGames}
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>{t.game1}</li>
              <li>{t.game2}</li>
              <li>{t.game3}</li>
              <li>{t.game4}</li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              {t.followUs}
            </h3>

            <div className="flex gap-4 text-2xl">
              <FaFacebookF className="cursor-pointer hover:text-red-500" />
              <FaInstagram className="cursor-pointer hover:text-red-500" />
              <FaTelegramPlane className="cursor-pointer hover:text-red-500" />
              <FaYoutube className="cursor-pointer hover:text-red-500" />
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-gray-500">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
}