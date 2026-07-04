const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function AppShowcase() {
  return (
    <section className="bg-slate-950 py-24 text-white">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
            Latest APK
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Download PlayBollyGame APK
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Experience exciting gameplay, daily rewards,
            secure platform and lightning-fast performance.
          </p>

          <ul className="mt-8 space-y-4">

            <li>✅ Secure Download</li>

            <li>🎁 Daily Bonus Rewards</li>

            <li>⚡ Fast Performance</li>

            <li>🎮 Smooth Gaming Experience</li>

          </ul>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-xl bg-green-500 px-8 py-4 text-lg font-bold hover:bg-green-600 transition"
          >
            Download APK
          </a>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="h-[520px] w-[260px] rounded-[40px] border-4 border-green-500 bg-gradient-to-b from-slate-800 to-slate-950 shadow-[0_0_60px_rgba(34,197,94,.35)]">

            <div className="flex h-full items-center justify-center text-center">

              <div>

                <div className="text-7xl">
                  🎮
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  PlayBollyGame
                </h3>

                <p className="mt-3 text-gray-400">
                  App Preview
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}