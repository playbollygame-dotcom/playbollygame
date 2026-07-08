"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

const links = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050B12]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="PlayBollyGame Logo"
            width={52}
            height={52}
            priority
            className="rounded-xl object-contain"
          />

          <div>
            <h1 className="text-2xl font-black text-white">
              Play<span className="text-green-400">BollyGame</span>
            </h1>

            <p className="text-xs text-gray-400">
              Gaming Platform
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Download Button */}
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600"
        >
          <FaDownload />
          Download BollyGame APK
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-[#081018] md:hidden">
          <nav className="flex flex-col p-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 ${
                  pathname === link.href
                    ? "bg-green-500 text-white"
                    : "text-gray-300 hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Download Button */}
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              <FaDownload />
              Download BollyGame APK
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}