"use client";

import Blogs from "@/components/Blogs";
import { useTranslation } from "@/hooks/useTranslation";

export default function BlogsPage() {
  const t = useTranslation();

  return (
    <main className="min-h-screen bg-[#050B12] py-32 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <h1 className="text-5xl font-bold">
          {t.blogTitle}
        </h1>

        <p className="mt-6 text-gray-400">
          {t.blogDescription}
        </p>

      </div>

      <Blogs showAll />

    </main>
  );
}