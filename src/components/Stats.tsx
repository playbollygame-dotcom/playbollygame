"use client";

import CountUp from "react-countup";
import { FaUsers, FaGamepad, FaShieldAlt, FaTrophy } from "react-icons/fa";
import FadeIn from "./FadeIn";

export default function Stats() {
  const stats = [
    {
      icon: <FaUsers />,
      number: 1000000,
      suffix: "+",
      title: "Happy Players",
    },
    {
      icon: <FaTrophy />,
      number: 5000000,
      suffix: "+",
      title: "Daily Rewards",
    },
    {
      icon: <FaGamepad />,
      number: 100,
      suffix: "+",
      title: "Games",
    },
    {
      icon: <FaShieldAlt />,
      number: 100,
      suffix: "%",
      title: "Secure Platform",
    },
  ];

  return (
    <section className="bg-[#081018] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="grid gap-8 md:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,.3)]"
              >

                <div className="mb-6 flex justify-center text-5xl text-green-400">
                  {item.icon}
                </div>

                <h2 className="text-4xl font-black text-green-400">

                  <CountUp
                    end={item.number}
                    duration={3}
                    separator=","
                  />

                  {item.suffix}

                </h2>

                <p className="mt-3 text-gray-400">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </FadeIn>

      </div>
    </section>
  );
}