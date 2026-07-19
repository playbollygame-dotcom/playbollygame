import { appShowcase } from "@/translations/appShowcase";
import { useLanguage } from "@/context/LanguageContext";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function AppShowcase() {
  const { language } = useLanguage();
  const t = appShowcase[language];

  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-red-600/20 px-4 py-2 text-red-500">
            {t.badge}
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            {t.title}
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            {t.description}
          </p>

          <ul className="mt-8 space-y-4">

            <li>{t.feature1}</li>

            <li>{t.feature2}</li>

            <li>{t.feature3}</li>

            <li>{t.feature4}</li>

          </ul>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-xl bg-red-600 px-8 py-4 text-lg font-bold transition hover:bg-red-700"
          >
            {t.button}
          </a>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="h-[520px] w-[260px] rounded-[40px] border-4 border-red-600 bg-gradient-to-b from-slate-800 to-slate-950 shadow-[0_0_60px_rgba(34,197,94,.35)]">

            <div className="flex h-full items-center justify-center text-center">

              <div>

                <div className="text-7xl">
                  🎮
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {t.previewTitle}
                </h3>

                <p className="mt-3 text-gray-400">
                  {t.previewText}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}