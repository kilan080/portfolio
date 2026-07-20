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
    slug: "my-journey-to-fullstack",
    comingSoon: true,
  },
  {
    title: "Building my first saas product: DevTracker",
    excerpt: "I finally built a saas product, It was a long journey building it from scratch.",
    date: "April 2026",
    readTime: "8 min read",
    tag: "Journey",
    slug: "building-devtrackr-from-idea-to-saas",
    comingSoon: false,
  },
  {
    title: "Building TMDB Movie App",
    excerpt:
      "Step by step guide to building a movie discovery app with search, movie details, cast info and trailer playback using TMDB API.",
    date: "April 2026",
    readTime: "5 min read",
    tag: "Projects",
    slug: "tmdb-movie-app-nextjs",
    comingSoon: false,
  },
];

export default function Blog() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 bg-[#F9F6F0]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center text-left"
        >
          <span className="text-[#a39f97] text-xs font-mono uppercase tracking-widest border border-[#111111] px-2 py-1 bg-[#F9F6F0] brutalist-shadow">
            Thoughts & Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#111111] mt-6 mb-4 tracking-tighter uppercase">
            Blog
          </h1>
          <p className="md:flex md:items-center md:justify-center md:text-center text-[#111111] max-w-xl text-sm font-mono mx-auto">
            I WRITE ABOUT THINGS I LEARN, PROJECTS I BUILD AND EXPERIENCES ALONG MY DEVELOPER JOURNEY.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {posts
            .filter((p) => !p.comingSoon)
            .map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-[#111111] bg-[#F9F6F0] p-6 sm:p-8 flex flex-col gap-6 transition-transform hover:-translate-y-2 brutalist-shadow cursor-pointer group h-full"
                >
                  {/* Tag */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-2 py-1 border border-[#111111] text-[#111111] text-[10px] font-mono tracking-widest uppercase">
                      <FiTag size={10} />
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-2 text-[#111111] text-[10px] font-mono tracking-widest uppercase">
                      <FiClock size={12} />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-black text-[#111111] uppercase tracking-tight leading-snug group-hover:text-[#a39f97] transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[#111111] text-xs font-mono leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#111111]">
                    <span className="text-[#111111] text-[10px] font-mono uppercase tracking-widest">{post.date}</span>
                    <span className="flex items-center gap-2 text-[#111111] text-[10px] font-mono font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                      READ MORE <FiArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
        </div>

        {/* Coming Soon Posts */}
        <h3 className="text-xl font-black text-[#111111] uppercase tracking-tighter mb-8 border-b border-[#111111] pb-4">
          Coming Soon
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts
            .filter((p) => p.comingSoon)
            .map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="border border-[#111111] border-dashed bg-[#F9F6F0] p-6 flex flex-col gap-4 opacity-70"
              >
                {/* Tag + Coming Soon */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-2 py-1 border border-[#111111] text-[#111111] text-[10px] font-mono tracking-widest uppercase">
                    <FiTag size={10} />
                    {post.tag}
                  </span>
                  <span className="text-[10px] text-[#111111] font-mono uppercase tracking-widest px-2 py-1 bg-[#111111] text-[#F9F6F0]">
                    Coming Soon
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-[#111111] uppercase tracking-tight leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#111111] text-xs font-mono leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                {/* Read time */}
                <div className="flex items-center gap-2 text-[#111111] text-[10px] font-mono tracking-widest uppercase pt-4 border-t border-[#111111]">
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
          className="mt-20 p-10 border border-[#111111] bg-[#F9F6F0] text-center brutalist-shadow"
        >
          <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tighter mb-4">Stay Updated</h3>
          <p className="text-[#111111] text-xs font-mono uppercase tracking-widest mb-8 max-w-md mx-auto">
            NEW ARTICLES ARE ON THE WAY. FOLLOW ME ON TWITTER TO GET NOTIFIED WHEN I PUBLISH NEW POSTS.
          </p>
          <a
            href="https://twitter.com/olamie03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-[#F9F6F0] font-mono text-xs uppercase tracking-widest border border-[#111111] transition-transform hover:-translate-y-1 brutalist-shadow"
          >
            Follow on Twitter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
