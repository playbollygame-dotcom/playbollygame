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
    url: `https://www.playbollygame.com${blog.image}`,
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
      images: [
  `https://www.playbollygame.com${blog.image}`,
],
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

  datePublished: "2026-07-15",
  dateModified: "2026-07-20",

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

        {/* Top Download Button */}

        <div className="flex justify-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-[#990000] px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,.45)]"
          >
            ⬇ DOWNLOAD BOLLYGAME APK
          </a>

        </div>

        {/* Blog Title */}

        <h1 className="mt-12 text-center text-5xl font-black leading-tight">
          {blog.title}
        </h1>

        {/* Date */}

        <p className="mt-5 text-center text-gray-500">
          {blog.date}
        </p>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-300">
          {blog.description}
        </p>

        {/* Banner */}

        <img
          src={blog.image}
          alt={blog.title}
          className="mt-10 w-full rounded-3xl border border-red-600/20 object-cover shadow-2xl"
        />

        {/* Article */}

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-10 leading-8 whitespace-pre-line text-gray-300">
          {blog.content}
        </div>

        {/* Blog Screenshots */}

        {"images" in blog &&
          Array.isArray((blog as any).images) && (

          <section className="mt-16">

            <div className="text-center">

              <h2 className="text-4xl font-black text-white">
                Bolly Game Screenshots
              </h2>

              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400"></div>

              <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-400">
                Below are some screenshots of the latest
                BollyGame application.
              </p>

            </div>

            <div className="mt-10 space-y-8">

              {(blog as any).images.map(
                (image: string, index: number) => (

                  <div
                    key={index}
                    className="overflow-hidden rounded-3xl border border-red-600/20 bg-slate-900 shadow-2xl"
                  >

                    <img
                      src={image}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full object-cover transition duration-500 hover:scale-105"
                    />

                  </div>

                )
              )}

            </div>

          </section>

        )}
                {/* Bottom Download Button */}

        <div className="mt-16 flex justify-center">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-[#990000] px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,.45)]"
          >
            ⬇ DOWNLOAD BOLLYGAME APK
          </a>

        </div>

        {/* Related Articles */}

        <div className="mt-24">

          <div className="text-center">

            <h2 className="text-4xl font-black text-white">
              Related Articles
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400"></div>

            <p className="mt-5 text-gray-400">
              Continue reading more PlayBollyGame guides.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {relatedBlogs.map((item) => (

              <Link
                key={item.id}
                href={`/blogs/${item.slug}`}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_0_25px_rgba(220,38,38,.30)]"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-5 h-52 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="rounded-full bg-red-600/20 px-3 py-1 text-sm font-semibold text-red-400">
                  {item.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-gray-400">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex items-center font-semibold text-red-500">
                  Read More →
                </span>

              </Link>

            ))}

          </div>

        </div>

        {/* Explore More */}

        <div className="mt-24">
          <ExploreMore />
        </div>

      </div>

    </main>

  </>
);

}
  