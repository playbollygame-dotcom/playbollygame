import { testimonials } from "@/translations/testimonials";
import { useLanguage } from "@/context/LanguageContext";

import {
  FaStar,
  FaShieldAlt,
  FaDownload,
  FaGift,
} from "react-icons/fa";

export default function Testimonials() {
  const { language } = useLanguage();
  const t = testimonials[language];

  const reviews = [
    {
      name: t.review1Name,
      city: t.review1City,
      review: t.review1Text,
    },
    {
      name: t.review2Name,
      city: t.review2City,
      review: t.review2Text,
    },
    {
      name: t.review3Name,
      city: t.review3City,
      review: t.review3Text,
    },
  ];

  return (
    <section className="bg-[#081018] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-red-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-red-400">
            {t.badge}
          </span>

          <h2 className="mt-6 text-5xl font-black">
            {t.title}
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            {t.description}
          </p>

        </div>

        {/* Reviews */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="group rounded-3xl border border-slate-700 bg-gradient-to-b from-[#161B2D] to-[#0F172A] p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,.40)]"
            >

              {/* Stars */}

              <div className="mb-5 flex justify-center gap-1 text-lg text-yellow-400">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* Review */}

              <p className="leading-8 italic text-gray-300">
                "{review.review}"
              </p>

              {/* User */}

              <div className="mt-8">

                <h3 className="text-xl font-bold text-white">
                  {review.name}
                </h3>

                <p className="text-gray-400">
                  {review.city}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Trust Badges */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="group flex items-center gap-5 rounded-3xl border border-slate-700 bg-gradient-to-b from-[#161B2D] to-[#0F172A] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl text-yellow-400 transition group-hover:scale-110">

              <FaShieldAlt />

            </div>

            <div>

              <h3 className="text-xl font-bold">
                {t.trust1Title}
              </h3>

              <p className="text-gray-400">
                {t.trust1Desc}
              </p>

            </div>

          </div>

          <div className="group flex items-center gap-5 rounded-3xl border border-slate-700 bg-gradient-to-b from-[#161B2D] to-[#0F172A] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl text-yellow-400 transition group-hover:scale-110">

              <FaDownload />

            </div>

            <div>

              <h3 className="text-xl font-bold">
                {t.trust2Title}
              </h3>

              <p className="text-gray-400">
                {t.trust2Desc}
              </p>

            </div>

          </div>

          <div className="group flex items-center gap-5 rounded-3xl border border-slate-700 bg-gradient-to-b from-[#161B2D] to-[#0F172A] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl text-yellow-400 transition group-hover:scale-110">

              <FaGift />

            </div>

            <div>

              <h3 className="text-xl font-bold">
                {t.trust3Title}
              </h3>

              <p className="text-gray-400">
                {t.trust3Desc}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}