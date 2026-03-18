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
  color: string;
  content: string;
}

export default function BlogPost({ post }: { post: Post }) {
  return (
    <section className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <FiArrowLeft size={16} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${post.color} text-xs font-medium`}
            >
              <FiTag size={10} />
              {post.tag}
            </span>
            <span className="flex items-center gap-1.5 text-gray-500 text-xs">
              <FiClock size={12} />
              {post.readTime}
            </span>
            <span className="text-gray-500 text-xs">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              O
            </div>
            <div>
              <p className="text-white text-sm font-medium">
                Olamilekan Kilani
              </p>
              <p className="text-gray-500 text-xs">Frontend Developer</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert prose-blue max-w-none"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between flex-wrap gap-4"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <FiArrowLeft size={16} />
            Back to Blog
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
