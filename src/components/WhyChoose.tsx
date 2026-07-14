import {
  FaShieldAlt,
  FaGift,
  FaBolt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "100% Secure",
    desc: "Safe APK downloads and a trusted platform with secure gameplay.",
  },
  {
    icon: <FaGift />,
    title: "Daily Rewards",
    desc: "Enjoy exciting daily rewards, bonuses and promotional offers.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Performance",
    desc: "Experience smooth gameplay with optimized speed and fast loading.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our friendly support team is always available whenever you need help.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#050B12] py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-red-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-red-400">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Why Choose PlayBollyGame?
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Experience secure gaming, exciting rewards, lightning-fast
            performance, and reliable customer support.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-slate-700 bg-gradient-to-b from-[#161B2D] to-[#0F172A] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,.40)]"
            >

              {/* Icon */}

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-4xl text-yellow-400 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-4 leading-7 text-gray-400">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}