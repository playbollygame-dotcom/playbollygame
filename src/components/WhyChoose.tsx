import { FaShieldAlt, FaGift, FaBolt, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "100% Secure",
    desc: "Safe APK downloads and secure platform.",
  },
  {
    icon: <FaGift />,
    title: "Daily Rewards",
    desc: "Get exciting rewards every day.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Performance",
    desc: "Smooth gameplay with fast loading.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Friendly support whenever you need help.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#050B12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-black">
            Why Choose PlayBollyGame?
          </h2>

          <p className="mt-5 text-gray-400">
            Experience secure gaming, exciting rewards and smooth gameplay.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,.3)]"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}