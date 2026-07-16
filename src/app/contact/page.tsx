"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaDownload, FaEnvelope } from "react-icons/fa";

import ExploreMore from "@/components/ExploreMore";
import { useTranslation } from "@/hooks/useTranslation";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function ContactPage() {
  const t = useTranslation();

  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_k8nh2ll",
        "template_fub40rs",
        {
          user_name: form.user_name,
          user_email: form.user_email,
          message: form.message,
        },
        "Wo_ny6g08wI_ZYww0"
      );

      setStatus("✅ Message sent successfully!");

      setForm({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (err: any) {
      console.error("EmailJS Error:", err);

      if (err?.text) {
        alert(err.text);
      } else if (err?.message) {
        alert(err.message);
      } else {
        alert(JSON.stringify(err));
      }

      setStatus("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#050B12] py-28 text-white">

      <div className="mx-auto max-w-6xl px-6">

        {/* Hero */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-red-500">
            {t.badge}
          </p>

          <h1 className="mt-4 text-5xl font-black">
            {t.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {t.subtitle}
          </p>

        </div>

        {/* Contact Form */}

        <form
          onSubmit={sendEmail}
          className="mt-16 rounded-3xl border border-slate-800 bg-[#081018] p-8"
        >

          <h2 className="mb-8 text-3xl font-black text-white">
            {t.formTitle}
          </h2>

          <div className="grid gap-6">

            <input
              type="text"
              name="user_name"
              placeholder={t.name}
              value={form.user_name}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-red-600"
            />

            <input
              type="email"
              name="user_email"
              placeholder={t.email}
              value={form.user_email}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-red-600"
            />

            <textarea
              rows={6}
              name="message"
              placeholder={t.message}
              value={form.message}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-red-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-red-600 py-4 font-bold transition hover:bg-red-700 disabled:opacity-60"
            >
              {loading ? "Sending..." : t.send}
            </button>

            {status && (
              <p
                className={`text-center font-semibold ${
                  status.startsWith("✅")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}

          </div>

        </form>

               {/* Email Support */}

        <div className="mt-16 rounded-3xl border border-slate-800 bg-[#081018] p-8">

          <div className="flex items-center gap-4">

            <div className="rounded-full bg-red-600 p-4">
              <FaEnvelope size={20} />
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                {t.emailTitle}
              </h2>

              <p className="mt-2 text-gray-400">
                playbollygame@gmail.com
              </p>

            </div>

          </div>

        </div>

        {/* Download CTA */}

        <div className="mt-16 rounded-3xl border border-red-600/20 bg-gradient-to-r from-[#081018] to-[#0B1622] p-10 text-center">

          <h2 className="text-4xl font-black text-white">
            {t.supportTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            {t.supportDesc}
          </p>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-red-600 px-10 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            <FaDownload />
            {t.downloadAPK}
          </a>

        </div>

        {/* Response */}

        <div className="mt-16 rounded-3xl border border-slate-800 bg-[#081018] p-8">

          <h2 className="text-3xl font-black text-white">
            {t.responseTitle}
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            {t.responseDesc}
          </p>

        </div>

        <div className="mt-20">
          <ExploreMore />
        </div>

      </div>

    </main>
  );
}