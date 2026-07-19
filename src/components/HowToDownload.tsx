import { howToDownload } from "@/translations/howToDownload";
import { useLanguage } from "@/context/LanguageContext";

export default function HowToDownload() {
  const { language } = useLanguage();
  const t = howToDownload[language];

  const steps = [
    t.step1,
    t.step2,
    t.step3,
    t.step4,
    t.step5,
  ];

  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-5xl font-bold">
          {t.title}
        </h2>

        <div className="mt-16 space-y-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-6 rounded-2xl bg-slate-900 p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl">
                {step}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}