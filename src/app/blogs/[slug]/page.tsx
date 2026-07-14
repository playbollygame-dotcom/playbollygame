import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ExploreMore from "@/components/ExploreMore";
import { blogs } from "../../../data/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const DOWNLOAD_URL =
  "https://lp.bollygame.com/m/share?channel=0&userId=3784779&shareCode=3784779&bindCode=100";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | PlayBollyGame",
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.keywords,

    alternates: {
      canonical: `https://www.playbollygame.com/blogs/${blog.slug}`,
    },

    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: `https://www.playbollygame.com/blogs/${blog.slug}`,
      siteName: "PlayBollyGame",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.image],
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    image: `https://www.playbollygame.com${blog.image}`,
    datePublished: blog.date,

    author: {
      "@type": "Organization",
      name: "PlayBollyGame",
    },

    publisher: {
      "@type": "Organization",
      name: "PlayBollyGame",

      logo: {
        "@type": "ImageObject",
        url: "https://www.playbollygame.com/icon.png",
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.playbollygame.com/blogs/${blog.slug}`,
    },
  };
  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />

    <main className="min-h-screen bg-[#050B12] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">

        {/* Download Button */}

        <div className="flex justify-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-10 py-4 text-lg font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,.45)]"
          >
            ⬇ DOWNLOAD BOLLYGAME APK
          </a>

        </div>

        {/* Blog Title */}

        <h1 className="mt-12 text-center text-5xl font-black leading-tight">
          {blog.title}
        </h1>

        {/* Publish Date */}

        <p className="mt-5 text-center text-gray-500">
          {blog.date}
        </p>

        {/* Banner */}

        <img
          src={blog.image}
          alt={blog.title}
          className="mt-10 w-full rounded-3xl border border-slate-800 object-cover shadow-2xl"
        />

        {/* Blog Content */}

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-10 leading-8 whitespace-pre-line text-gray-300">
          {blog.content}
        </div>

        {/* Bottom Download Button */}

        <div className="mt-12 flex justify-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-10 py-4 text-lg font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,.45)]"
          >
            ⬇ DOWNLOAD BOLLYGAME APK
          </a>

        </div>
                {/* Related Articles */}

        <div className="mt-20">

          <h2 className="text-3xl font-black text-white text-center">
            Related Articles
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {relatedBlogs.map((item) => (

              <Link
                key={item.id}
                href={`/blogs/${item.slug}`}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-[0_0_20px_rgba(34,197,94,.25)]"
              >

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-gray-400">
                  {item.description}
                </p>

                <span className="mt-5 inline-block font-semibold text-red-500">
                  Read More →
                </span>

              </Link>

            ))}

          </div>

        </div>

        {/* Explore More */}

        <div className="mt-20">
          <ExploreMore />
        </div>

      </div>

    </main>

  </>
);
}
  