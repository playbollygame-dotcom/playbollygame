"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translations";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { language, setLanguage } = useLanguage();
  const t = translations[language];

const links = [
  { name: t.home, href: "/home" },
  { name: t.download, href: "/download" },
  { name: t.games, href: "/games" },
  { name: t.blogs, href: "/blogs" },
  { name: t.bonus, href: "/bonus-guide" },
  { name: t.about, href: "/about" },
  { name: t.contact, href: "/contact" },
];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050B12]/90 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Left */}

        <div className="flex w-[260px] items-center">

          <Link
            href="/home"
            className="flex items-center gap-3"
          >

            <Image
              src="/logo.png"
              alt="PlayBollyGame"
              width={44}
              height={44}
              priority
              className="rounded-xl"
            />

            <h1 className="whitespace-nowrap text-[26px] font-extrabold leading-none">

              <span className="text-white">
                Play
              </span>

              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                BollyGame
              </span>

            </h1>

          </Link>

        </div>

        {/* Center */}

        <nav className="hidden flex-1 justify-center xl:flex">

         <div className="flex items-center gap-8">
            {links.map((link) => (


  <Link
    key={link.href}
    href={link.href}
    className={`group relative text-[15px] font-semibold tracking-wide transition-all duration-300 ${
      pathname === link.href
        ? "text-red-500"
        : "text-gray-300 hover:text-white"
    }`}
  >

    {link.name}

    <span
      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-red-500 transition-all duration-300 ${
        pathname === link.href
          ? "w-full"
          : "w-0 group-hover:w-full"
      }`}
    />

  </Link>

))}

          </div>

        </nav>

        {/* Right */}
<div className="hidden w-[300px] items-center justify-end gap-3 xl:flex">

          {/* Language Switch */}

          <div className="flex items-center rounded-full border border-red-500/20 bg-[#0B1622] p-1">

            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                language === "en"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                language === "hi"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              हिन्दी
            </button>

          </div>

          {/* Download Button */}

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(220,38,38,.45)]"
          >

            <FaDownload />

     {t.downloadAPK}

          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-[#0B1622] text-white transition-all duration-300 hover:bg-red-600 xl:hidden"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

      </div>
            {/* Mobile Menu */}

      {menuOpen && (

        <div className="border-t border-white/10 bg-[#081018]/95 backdrop-blur-xl xl:hidden">

          <nav className="flex flex-col gap-4 p-6">

            {links.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 ${
                  pathname === link.href
                    ? "border-red-600 bg-gradient-to-r from-red-600 to-red-700 text-white"
                    : "border-slate-700 bg-[#0D1722] text-gray-300 hover:border-red-500 hover:bg-[#132130]"
                }`}
              >

                <span className="font-semibold">
                  {link.name}
                </span>

                <span className="text-red-400">
                  →
                </span>

              </Link>

            ))}

            {/* Mobile Language */}

            <div className="mt-2 flex justify-center">

              <div className="flex items-center rounded-full border border-red-500/20 bg-[#0B1622] p-1">

                <button
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    language === "en"
                      ? "bg-red-600 text-white"
                      : "text-gray-400"
                  }`}
                >
                  EN
                </button>

                <button
                  onClick={() => setLanguage("hi")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    language === "hi"
                      ? "bg-red-600 text-white"
                      : "text-gray-400"
                  }`}
                >
                  हिन्दी
                </button>

              </div>

            </div>

            {/* Mobile Download */}

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 py-4 font-bold text-white shadow-lg transition hover:scale-[1.02]"
            >

              <FaDownload />

              {t.downloadAPK}

            </a>

          </nav>

        </div>

      )}

    </header>
  );
}
