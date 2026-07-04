import { notFound } from "next/navigation";
import { blogs } from "../../../data/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050B12] py-32 text-white">
      <div className="mx-auto max-w-4xl px-6">

        <span className="rounded-full bg-green-500 px-4 py-2 text-sm">
          {blog.category}
        </span>

        <h1 className="mt-8 text-5xl font-bold">
          {blog.title}
        </h1>

        <p className="mt-4 text-gray-400">
          {blog.date}
        </p>

        <div className="mt-12 rounded-3xl bg-slate-900 p-10 whitespace-pre-line leading-8 text-gray-300">
          {blog.content}
        </div>

      </div>
    </main>
  );
}