const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function DownloadSection() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-500 py-20">

      <div className="mx-auto max-w-7xl px-6 text-center text-white">

        <h2 className="text-5xl font-bold">
          Ready to Play?
        </h2>

        <p className="mt-5 text-xl opacity-90">
          Download the latest version of Play Bolly Game and start winning today.
        </p>

        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-xl bg-black px-8 py-4 text-lg font-bold hover:bg-slate-900 transition"
        >
          📥 Download APK
        </a>

      </div>

    </section>
  );
}