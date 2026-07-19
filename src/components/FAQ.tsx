"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { faq } from "@/translations/faq";

export default function FAQ() {
  const { language } = useLanguage();
  const t = faq[language];

  const [open, setOpen] = useState<number | null>(0);

  const faqData = [
    {
      question: t.q1,
      answer: t.a1,
    },
    {
      question: t.q2,
      answer: t.a2,
    },
    {
      question: t.q3,
      answer: t.a3,
    },
    {
      question: t.q4,
      answer: t.a4,
    },
    {
      question: t.q5,
      answer: t.a5,
    },
    {
      question: t.q6,
      answer: t.a6,
    },
    {
      question: t.q7,
      answer: t.a7,
    },
    {
      question: t.q8,
      answer: t.a8,
    },
    {
      question: t.q9,
      answer: t.a9,
    },
    {
      question: t.q10,
      answer: t.a10,
    },
    {
      question: t.q11,
      answer: t.a11,
    },
    {
      question: t.q12,
      answer: t.a12,
    },
  ];

return (
  <section className="bg-[#050B12] py-24 text-white">
    <div className="mx-auto max-w-5xl px-6">

      <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h3 className="text-3xl font-bold text-red-500">
          {t.whyTitle}
        </h3>

        <p className="mt-5 leading-8 text-gray-300">
          {t.whyPara1}
        </p>

        <p className="mt-5 leading-8 text-gray-300">
          {t.whyPara2}
        </p>

      </div>

      <div className="mt-10 space-y-5">

        {faqData.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-800 bg-slate-900 transition hover:border-red-600"
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold">
                {faq.question}
              </span>

              {open === index ? (
                <FaChevronUp className="text-red-500" />
              ) : (
                <FaChevronDown className="text-red-500" />
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