export default function Features() {
  const features = [
    {
      title: "Fast Download",
      desc: "Download the latest PlayBollyGame APK quickly with a smooth and secure installation process.",
      icon: "⚡",
    },
    {
      title: "Secure Platform",
      desc: "Enjoy a safe, reliable, and trusted gaming experience with advanced security features.",
      icon: "🛡️",
    },
    {
      title: "Daily Rewards",
      desc: "Receive exciting bonuses, daily rewards, referral benefits, and promotional offers.",
      icon: "🎁",
    },
  ];

  return (
    <section className="bg-[#050B12] py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-red-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-red-400">
            Features
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Why Choose PlayBollyGame?
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400"></div>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Discover why thousands of players choose PlayBollyGame for
            fast downloads, secure gameplay, and exciting rewards.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {features.map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-slate-700 bg-gradient-to-b from-[#161B2D] to-[#0F172A] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,.40)]"
            >

              <div className="mb-6 text-6xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

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