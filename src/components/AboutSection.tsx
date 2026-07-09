const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#050B12] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-green-500 bg-green-500/10 px-5 py-2 text-green-400">
            About PlayBollyGame
          </span>

          <h2 className="mt-8 text-5xl font-black">
            Why Choose PlayBollyGame?
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-400">
            PlayBollyGame is designed to provide an entertaining gaming
            experience with a modern interface, quick navigation, exciting
            games, and rewarding promotions. Whether you're new or experienced,
            the platform is built to make gameplay smooth and enjoyable.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-slate-900 p-8">

            <h3 className="text-2xl font-bold text-green-400">
              Fast Gameplay
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Optimized performance provides a smooth gaming experience on
              Android devices.
            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 p-8">

            <h3 className="text-2xl font-bold text-green-400">
              Daily Rewards
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Discover welcome rewards, daily bonuses and promotional offers
              available on the platform.
            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 p-8">

            <h3 className="text-2xl font-bold text-green-400">
              Secure Platform
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              The platform focuses on account security and a simple user
              experience.
            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 p-8">

            <h3 className="text-2xl font-bold text-green-400">
              User Friendly
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Clean interface with easy navigation for new and experienced
              users.
            </p>

          </div>

        </div>

        <div className="mt-16 text-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-green-500 px-10 py-4 font-bold text-white transition hover:bg-green-600"
          >
            Download BollyGame
          </a>

        </div>

      </div>
    </section>
  );
}