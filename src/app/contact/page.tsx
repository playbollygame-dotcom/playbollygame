export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050B12] text-white py-32">

      <div className="mx-auto max-w-6xl px-6">

        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <div className="mt-12 grid gap-6">

          <input
            placeholder="Your Name"
            className="rounded-xl bg-slate-900 p-4 outline-none"
          />

          <input
            placeholder="Email Address"
            className="rounded-xl bg-slate-900 p-4 outline-none"
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="rounded-xl bg-slate-900 p-4 outline-none"
          />

          <button className="rounded-xl bg-green-500 py-4 font-bold">
            Send Message
          </button>

        </div>

      </div>

    </main>
  );
}