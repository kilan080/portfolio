"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiClock, FiTag } from "react-icons/fi";
import ReactMarkdown from "react-markdown";

interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tag: string;
  content: string;
}

export default function BlogPost({ post }: { post: Post }) {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 bg-[#F9F6F0]">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-[#111111] hover:text-[#a39f97] transition-colors text-[10px] font-mono uppercase tracking-widest border border-[#111111] px-4 py-2 brutalist-shadow"
          >
            <FiArrowLeft size={16} />
            BACK TO BLOG
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 px-2 py-1 border border-[#111111] text-[#111111] text-[10px] font-mono tracking-widest uppercase">
              <FiTag size={10} />
              {post.tag}
            </span>
            <span className="flex items-center gap-2 text-[#111111] text-[10px] font-mono tracking-widest uppercase">
              <FiClock size={12} />
              {post.readTime}
            </span>
            <span className="text-[#111111] text-[10px] font-mono tracking-widest uppercase">
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#111111] leading-tight mb-8 uppercase tracking-tighter">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pt-6 border-t border-[#111111]">
            <div className="w-10 h-10 border border-[#111111] bg-[#111111] flex items-center justify-center text-[#F9F6F0] text-sm font-black brutalist-shadow">
              O
            </div>
            <div>
              <p className="text-[#111111] text-xs font-mono font-bold uppercase tracking-widest">
                Olamilekan Kilani
              </p>
              <p className="text-[#111111] text-[10px] font-mono uppercase tracking-widest">Frontend Developer</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-neutral prose-headings:font-black prose-headings:text-[#111111] prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-[#111111] prose-a:font-bold prose-code:text-[#F9F6F0] prose-code:bg-[#111111] prose-code:px-1 prose-code:py-0.5 prose-p:text-[#111111] prose-p:font-mono prose-li:text-[#111111] prose-li:font-mono max-w-none mb-16"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-[#111111] flex items-center justify-between flex-wrap gap-4"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-[#111111] hover:text-[#a39f97] transition-colors text-[10px] font-mono uppercase tracking-widest border border-[#111111] px-4 py-2 brutalist-shadow bg-[#F9F6F0]"
          >
            <FiArrowLeft size={16} />
            BACK TO BLOG
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:-translate-y-1 text-[#F9F6F0] text-[10px] font-mono tracking-widest uppercase border border-[#111111] transition-transform brutalist-shadow"
          >
            GET IN TOUCH
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
