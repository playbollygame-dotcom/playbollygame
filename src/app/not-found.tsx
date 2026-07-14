import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050B12] text-white">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-green-500">404</h1>

        <h2 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400">
          Sorry, this page doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-red-600 px-6 py-3"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}