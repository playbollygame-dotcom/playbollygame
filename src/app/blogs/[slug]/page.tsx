import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogs } from "../../../data/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

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
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: "en_US",
      type: "article",
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
        url: "https://www.playbollygame.com/favicon.ico",
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
        <div className="mx-auto max-w-4xl px-6">

          <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
            {blog.category}
          </span>

          <h1 className="mt-6 text-5xl font-black">
            {blog.title}
          </h1>

          <p className="mt-4 text-gray-500">
            {blog.date}
          </p>

          <img
            src={blog.image}
            alt={blog.title}
            className="mt-10 w-full rounded-3xl object-cover"
          />

          <div className="mt-12 rounded-3xl bg-slate-900 p-10 leading-8 text-gray-300 whitespace-pre-line">
            {blog.content || blog.description}
          </div>

        </div>
      </main>
    </>
  );
}