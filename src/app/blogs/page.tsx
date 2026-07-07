"use client";

import Blogs from "@/components/Blogs";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#050B12] text-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <h1 className="text-5xl font-bold">
          Latest Blogs
        </h1>

        <p className="mt-6 text-gray-400">
          Gaming news, APK updates and guides.
        </p>

      </div>

      <Blogs showAll />

    </main>
  );
}