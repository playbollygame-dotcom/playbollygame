"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { blogs } from "../data/blogs";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

const categories = [
  "All",
  "Guide",
  "Bonus",
  "Rewards",
  "Referral",
  "Security",
  "Updates",
  "Events",
  "Tips",
  "Android",
  "Account",
  "Features",
  "Comparison",
  "Privacy",
  "Performance",
  "Troubleshooting",
  "FAQ",
];

interface BlogsProps {
  showAll?: boolean;
}

export default function Blogs({ showAll = false }: BlogsProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = (
        blog.title +
        blog.description +
        blog.category
      )
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const displayedBlogs = showAll
    ? filteredBlogs
    : filteredBlogs.slice(0, 6);

  return (
    <section
      id="blogs"
      className="bg-[#050B12] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-500/20 px-5 py-2 text-green-400">
            Latest Articles
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Latest Blogs
          </h2>

          <p className="mt-5 text-gray-400">
            Read PlayBollyGame guides, rewards and updates.
          </p>

        </div>

        <div className="mx-auto mt-10 max-w-xl">

          <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900 px-5">

            <FaSearch className="text-green-400" />

            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent px-4 py-4 outline-none"
            />

          </div>

        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 transition ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-slate-900 text-gray-400 hover:bg-green-500 hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {displayedBlogs.map((blog) => (

            <article
              key={blog.id}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,.3)]"
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="p-6">

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                  {blog.category}
                </span>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <FaCalendarAlt />
                  {blog.date}
                </div>

                <h3 className="mt-4 text-2xl font-bold">
                  {blog.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {blog.description}
                </p>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-green-400 hover:text-green-300"
                >
                  Read More
                  <FaArrowRight />
                </Link>

              </div>

            </article>

          ))}

        </div>

        {filteredBlogs.length === 0 && (
          <div className="mt-16 text-center text-gray-400">
            No blogs found.
          </div>
        )}

        {!showAll && (
          <div className="mt-16 flex justify-center">
            <Link
              href="/blogs"
              className="rounded-xl bg-green-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-600"
            >
              View All Blogs →
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}