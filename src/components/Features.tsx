export default function Features() {
  const features = [
    {
      title: "Fast Download",
      desc: "Download the latest APK in just one click.",
      icon: "⚡",
    },
    {
      title: "Secure Platform",
      desc: "Safe and trusted gaming experience.",
      icon: "🛡️",
    },
    {
      title: "Daily Rewards",
      desc: "Get exciting bonuses and rewards every day.",
      icon: "🎁",
    },
  ];

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Why Choose Play Bolly Game?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center transition hover:border-green-500"
            >
              <div className="mb-5 text-5xl">{item.icon}</div>

              <h3 className="mb-3 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}