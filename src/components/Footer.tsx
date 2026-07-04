import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-green-400">
              PlayBollyGame
            </h2>

            <p className="mt-5 text-gray-400">
              India's trusted gaming platform with exciting games,
              rewards and secure gameplay.
            </p>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-green-500 px-6 py-3 font-semibold hover:bg-green-600 transition"
            >
              Download APK
            </a>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Home</li>
              <li>Blogs</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>

          </div>

          {/* Games */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Popular Games
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Rummy</li>
              <li>Ludo</li>
              <li>Dragon vs Tiger</li>
              <li>7 Up Down</li>
            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">

              <FaFacebookF className="cursor-pointer hover:text-green-400" />

              <FaInstagram className="cursor-pointer hover:text-green-400" />

              <FaTelegramPlane className="cursor-pointer hover:text-green-400" />

              <FaYoutube className="cursor-pointer hover:text-green-400" />

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-gray-500">

          © 2026 PlayBollyGame. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}