"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How do I download PlayBollyGame APK?",
    answer:
      "Click the Download APK button available on the homepage and install the latest version on your Android device.",
  },
  {
    question: "What is PlayBollyGame APK?",
    answer:
      "PlayBollyGame APK is an Android gaming application that provides online entertainment, welcome bonuses, daily rewards, referral benefits, and a smooth mobile gaming experience.",
  },
  {
    question: "Is PlayBollyGame free to download?",
    answer:
      "Yes. PlayBollyGame is completely free to download and install on Android devices.",
  },
  {
    question: "How can I claim the ₹4500 welcome bonus?",
    answer:
      "Complete the registration process and fulfill the promotional requirements to become eligible for the welcome bonus.",
  },
  {
    question: "Is PlayBollyGame safe to use?",
    answer:
      "For the best security and latest updates, always download PlayBollyGame APK from the official or trusted source.",
  },
  {
    question: "Can I play PlayBollyGame on Android?",
    answer:
      "Yes. PlayBollyGame is specially designed for Android devices.",
  },
  {
    question: "Can I use PlayBollyGame on an iPhone?",
    answer:
      "Currently, the APK version is primarily available for Android devices.",
  },
  {
    question: "Does PlayBollyGame require fast internet?",
    answer:
      "A stable internet connection is recommended for faster loading, smooth gameplay, and uninterrupted performance.",
  },
  {
    question: "How do I install PlayBollyGame APK?",
    answer:
      "Download the latest APK, enable 'Install from Unknown Sources' in your Android settings, then complete the installation process.",
  },
  {
    question: "How do I claim rewards?",
    answer:
      "Log in daily, complete available tasks, participate in events, and use referral offers to receive rewards.",
  },
  {
    question: "Why is PlayBollyGame becoming popular?",
    answer:
      "PlayBollyGame is becoming popular because of its smooth interface, easy-to-use platform, welcome bonus, daily rewards, referral program, and regular updates.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can use the support options available inside the application or contact the official support team whenever assistance is required.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#050B12] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-black">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Everything you need to know about PlayBollyGame.
          </p>

        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h3 className="text-3xl font-bold text-green-400">
            Why PlayBollyGame?
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            PlayBollyGame continues to attract new users because of its smooth
            interface, easy registration process, exciting welcome bonuses,
            referral rewards, daily promotions, and user-friendly mobile
            experience.
          </p>

          <p className="mt-5 leading-8 text-gray-300">
            Whether you're searching for PlayBollyGame or looking for a fast
            mobile gaming platform, the application offers a simple installation
            process and lets users quickly start exploring its features after
            registration.
          </p>

        </div>

        <div className="mt-10 space-y-5">

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 transition hover:border-green-500"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                {open === index ? (
                  <FaChevronUp className="text-green-400" />
                ) : (
                  <FaChevronDown className="text-green-400" />
                )}
              </button>

              {open === index && (
                <div className="border-t border-slate-800 px-6 pb-6 pt-4 leading-8 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}