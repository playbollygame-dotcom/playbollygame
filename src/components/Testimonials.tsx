import {
  FaStar,
  FaShieldAlt,
  FaDownload,
  FaGift,
} from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Sharma",
    city: "Delhi",
    review:
      "Very smooth experience. APK downloaded instantly and rewards are amazing.",
  },
  {
    name: "Ankit Kumar",
    city: "Patna",
    review:
      "Daily rewards are excellent. The app is fast and easy to use.",
  },
  {
    name: "Aman Verma",
    city: "Lucknow",
    review:
      "Best gaming platform I've tried. Secure download and regular updates.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#081018] py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-red-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-red-400">
            Trusted by Players
          </span>

          <h2 className="mt-6 text-5xl font-black">
            What Players Say
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Thousands of players trust PlayBollyGame for secure downloads,
            exciting rewards, and smooth gameplay.
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

              <div className="mb-5 flex justify-center gap-1 text-yellow-400 text-lg">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* Review */}

              <p className="leading-8 text-gray-300 italic">
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

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl text-yellow-400 group-hover:scale-110 transition">

              <FaShieldAlt />

            </div>

            <div>

              <h3 className="text-xl font-bold">
                Secure APK
              </h3>

              <p className="text-gray-400">
                Safe & verified downloads.
              </p>

            </div>

          </div>

          <div className="group flex items-center gap-5 rounded-3xl border border-slate-700 bg-gradient-to-b from-[#161B2D] to-[#0F172A] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl text-yellow-400 group-hover:scale-110 transition">

              <FaDownload />

            </div>

            <div>

              <h3 className="text-xl font-bold">
                1M+ Downloads
              </h3>

              <p className="text-gray-400">
                Trusted by thousands of players.
              </p>

            </div>

          </div>

          <div className="group flex items-center gap-5 rounded-3xl border border-slate-700 bg-gradient-to-b from-[#161B2D] to-[#0F172A] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,.35)]">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl text-yellow-400 group-hover:scale-110 transition">

              <FaGift />

            </div>

            <div>

              <h3 className="text-xl font-bold">
                Daily Rewards
              </h3>

              <p className="text-gray-400">
                Exciting bonuses and promotional rewards.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}