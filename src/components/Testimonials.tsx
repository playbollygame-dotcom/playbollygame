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

        <div className="text-center">

          <span className="rounded-full bg-green-500/20 px-5 py-2 text-green-400">
            Trusted by Players
          </span>

          <h2 className="mt-6 text-5xl font-black">
            What Players Say
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Thousands of users enjoy PlayBollyGame every day.
          </p>

        </div>

        {/* Reviews */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,.35)]"
            >

              <div className="mb-4 flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="leading-8 text-gray-300">
                "{review.review}"
              </p>

              <div className="mt-8">

                <h3 className="text-xl font-bold">
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

          <div className="flex items-center gap-4 rounded-2xl bg-slate-900 p-6">

            <FaShieldAlt className="text-4xl text-green-400" />

            <div>
              <h3 className="text-xl font-bold">
                Secure APK
              </h3>

              <p className="text-gray-400">
                Safe & verified download.
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-slate-900 p-6">

            <FaDownload className="text-4xl text-green-400" />

            <div>
              <h3 className="text-xl font-bold">
                1M+ Downloads
              </h3>

              <p className="text-gray-400">
                Trusted by thousands of players.
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-slate-900 p-6">

            <FaGift className="text-4xl text-green-400" />

            <div>
              <h3 className="text-xl font-bold">
                Daily Rewards
              </h3>

              <p className="text-gray-400">
                Exciting bonuses every day.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}