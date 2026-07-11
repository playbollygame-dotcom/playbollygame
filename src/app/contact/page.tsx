"use client";
import ExploreMore from "@/components/ExploreMore";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export default function ContactPage() {
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

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-green-400 font-semibold">
            Contact
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Have questions about PlayBollyGame, feedback, or need support?
            We'd love to hear from you.
          </p>

        </div>

        {/* Contact Form */}

        <form
          onSubmit={sendEmail}
          className="mt-16 rounded-3xl border border-slate-800 bg-[#081018] p-8"
        >

          <div className="grid gap-6">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={form.user_name}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-green-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              value={form.user_email}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-green-500"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-green-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-green-500 py-4 font-bold transition hover:bg-green-600 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`text-center font-semibold ${
                  status.startsWith("✅")
                    ? "text-green-400"
                    : "text-red-400"
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

            <div className="rounded-full bg-green-500 p-4">
              <FaEnvelope size={20} />
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                Email Support
              </h2>

              <p className="mt-2 text-gray-400">
                playbollygame@gmail.com
              </p>

            </div>

          </div>

        </div>

                {/* Download Section */}

        <div className="mt-16 rounded-3xl border border-green-500/20 bg-gradient-to-r from-[#081018] to-[#0B1622] p-10 text-center">

          <h2 className="text-4xl font-black text-white">
            Download the Best Bolly Game!
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Experience the ultimate Bollywood quiz and movie trivia.
            Join thousands of fans enjoying exciting gameplay, daily rewards,
            referral bonuses, cashback offers, and exclusive promotions on
            PlayBollyGame.
          </p>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-green-500 px-10 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"
          >
            <FaDownload />
            Download Bolly Game Now
          </a>

        </div>

        {/* Support Section */}

        <div className="mt-16 rounded-3xl border border-slate-800 bg-[#081018] p-8">

          <h2 className="text-3xl font-black text-white">
            We're Here to Help
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Hum koshish karte hain ki aapke queries ka jald se jald jawab dein.
            Agar aapko account, download, bonus, ya kisi technical issue mein
            madad chahiye, toh hume email karein. Hum aapki madad karne ke liye
            hamesha taiyaar hain.
          </p>
        </div>
<ExploreMore />
      </div>

    </main>
  );
}