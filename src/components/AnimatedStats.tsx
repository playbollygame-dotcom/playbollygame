"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    end: 1,
    suffix: "M+",
    title: "Downloads",
  },
  {
    end: 10,
    prefix: "₹",
    suffix: "Cr+",
    title: "Rewards",
  },
  {
    end: 24,
    suffix: "/7",
    title: "Support",
  },
  {
    end: 99.9,
    suffix: "%",
    title: "Uptime",
  },
];

export default function AnimatedStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="bg-[#081018] py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">

        {stats.map((item) => (

          <div
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center hover:border-red-600 transition"
          >

            <h2 className="text-5xl font-black text-red-500">

              {inView && (
                <CountUp
                  end={item.end}
                  decimals={item.end === 99.9 ? 1 : 0}
                  duration={2}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              )}

            </h2>

            <p className="mt-4 text-gray-400">
              {item.title}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}