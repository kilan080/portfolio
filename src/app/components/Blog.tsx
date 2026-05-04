"use client";

import { motion } from "framer-motion";
import { FiClock, FiArrowRight, FiTag } from "react-icons/fi";
import Link from "next/link";

const posts = [
  {
    title: "How I Built a Full-Stack E-Commerce App in 3 Months",
    excerpt:
      "A deep dive into building Footies by Zain — from setting up authentication, cart management, checkout flow to deploying on Vercel.",
    date: "March 2026",
    readTime: "8 min read",
    tag: "Project",
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    slug: "how-i-built-footies-by-zain",
    comingSoon: false,
  },
  {
    title: "Understanding Protected Routes in Next.js with Middleware",
    excerpt:
      "A practical guide to securing pages in Next.js App Router using middleware, cookies and JWT tokens — lessons learned from real projects.",
    date: "March 2026",
    readTime: "5 min read",
    tag: "Tutorial",
    color: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    slug: "protected-routes-nextjs-middleware",
    comingSoon: false,
  },
  {
    title: "Why I Switched from useEffect to SWR for Data Fetching",
    excerpt:
      "How SWR changed the way I fetch data in React — better caching, less boilerplate and improved user experience.",
    date: "Coming Soon",
    readTime: "4 min read",
    tag: "React",
    color: "text-green-400",
    border: "border-green-500/20",
    bg: "bg-green-500/5",
    slug: "swr-vs-useeffect",
    comingSoon: true,
  },
  {
    title: "Performance Optimization in Next.js — What Actually Works",
    excerpt:
      "Real lessons from optimizing a Next.js e-commerce app — image optimization, caching strategies and Lighthouse scores.",
    date: "Coming Soon",
    readTime: "6 min read",
    tag: "Performance",
    color: "text-orange-400",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    slug: "nextjs-performance-optimization",
    comingSoon: true,
  },
  {
    title: "My Journey from Zero to Full-Stack in 18 Months",
    excerpt:
      "How I went from learning HTML/CSS to building and deploying full-stack applications — what worked, what did not and what I wish I knew earlier.",
    date: "Coming Soon",
    readTime: "7 min read",
    tag: "Journey",
    color: "text-pink-400",
    border: "border-pink-500/20",
    bg: "bg-pink-500/5",
    slug: "my-journey-to-fullstack",
    comingSoon: true,
  },
  {
    title: "Building my first saas product: DevTracker",
    excerpt: "I finally built a saas product, It was a long journey building it from scratch.",
    date: "April 2026",
    readTime: "8 min read",
    tag: "Journey",
    color: "text-pink-400",
    border: "border-pink-500/20",
    bg: "bg-pink-500/5",
    slug: "building-devtrackr-from-idea-to-saas",
    comingSoon: false,
  },
  {
    title: "Building TMDB Movie App",
    excerpt:
      "Step by step guide to building a movie discovery app with search, movie details, cast info and trailer playback using TMDB API.",
    date: "4 min read",
    readTime: "5 min read",
    tag: "Projects",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
    slug: "tmdb-movie-app-nextjs",
    comingSoon: false,
  },
];

export default function Blog() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Thoughts & Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Blog
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            I write about things I learn, projects I build and experiences along
            my developer journey.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {posts
            .filter((p) => !p.comingSoon)
            .map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl border ${post.border} ${post.bg} p-6 sm:p-8 flex flex-col gap-4 hover:scale-[1.02] transition-transform cursor-pointer group`}
                >
                  {/* Tag */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${post.color} text-xs font-medium`}
                    >
                      <FiTag size={10} />
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <FiClock size={12} />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-gray-500 text-xs">{post.date}</span>
                    <span
                      className={`flex items-center gap-1 text-xs font-medium ${post.color} group-hover:gap-2 transition-all`}
                    >
                      Read More <FiArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
        </div>

        {/* Coming Soon Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts
            .filter((p) => p.comingSoon)
            .map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`rounded-2xl border ${post.border} ${post.bg} p-5 flex flex-col gap-3 opacity-70`}
              >
                {/* Tag + Coming Soon */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${post.color} text-xs font-medium`}
                  >
                    <FiTag size={10} />
                    {post.tag}
                  </span>
                  <span className="text-xs text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-xs leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                {/* Read time */}
                <div className="flex items-center gap-1.5 text-gray-600 text-xs pt-2 border-t border-white/5">
                  <FiClock size={10} />
                  {post.readTime}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            New articles are on the way. Follow me on Twitter to get notified
            when I publish new posts.
          </p>
          <a
            href="https://twitter.com/olamie03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Follow on Twitter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
