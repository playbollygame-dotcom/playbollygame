export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050B12] text-white py-32">
      <div className="mx-auto max-w-5xl px-6">

        <h1 className="text-5xl font-bold text-red-500">
          Terms & Conditions
        </h1>

        <p className="mt-4 text-gray-400">
          Last Updated: July 2026
        </p>

        <div className="mt-12 space-y-10">

          <section>
            <h2 className="text-2xl font-semibold">
              1. Acceptance of Terms
            </h2>

            <p className="mt-4 text-gray-400 leading-8">
              By accessing PlayBollyGame, you agree to follow these
              Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              2. Website Usage
            </h2>

            <p className="mt-4 text-gray-400 leading-8">
              Users must use this website responsibly and comply with
              all applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              3. Intellectual Property
            </h2>

            <p className="mt-4 text-gray-400 leading-8">
              All content including logos, text, graphics and designs
              belongs to PlayBollyGame unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              4. Limitation of Liability
            </h2>

            <p className="mt-4 text-gray-400 leading-8">
              We are not responsible for losses arising from misuse of
              this website or third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              5. Changes
            </h2>

            <p className="mt-4 text-gray-400 leading-8">
              We may update these Terms & Conditions at any time.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}