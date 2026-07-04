"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How do I download PlayBollyGame APK?",
    answer:
      "Click on the Download APK button available on the homepage and install the latest version.",
  },
  {
    question: "Is PlayBollyGame safe to use?",
    answer:
      "Yes, always download the APK from the official PlayBollyGame website for the latest and safest version.",
  },
  {
    question: "How do I claim rewards?",
    answer:
      "Log in daily, complete available tasks, and participate in promotions to receive rewards.",
  },
  {
    question: "Can I play on Android?",
    answer:
      "Yes. PlayBollyGame is designed for Android devices.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can use the Contact page or the support options available inside the app.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#050B12] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Everything you need to know about PlayBollyGame.
        </p>

        <div className="mt-12 space-y-5">

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                {open === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-400">
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