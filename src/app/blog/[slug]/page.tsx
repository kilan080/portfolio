"use client";

import { use, useEffect, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiClock, FiTag, FiCalendar } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import gsap from "gsap";
import { posts } from "../../data/postsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: PageProps) {
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!post) return;

    const ctx = gsap.context(() => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" }
        );
      }
    });

    return () => ctx.revert();
  }, [post]);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto flex flex-col gap-12">
      {/* Back Button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono-accent text-[#8E8B82] hover:text-[#1C1C1A] uppercase tracking-widest transition-colors py-1"
        >
          <FiArrowLeft size={14} />
          <span>Back to Notes</span>
        </Link>
      </div>

      <div ref={containerRef} className="flex flex-col gap-8">
        {/* Article Meta Header */}
        <div className="flex flex-col gap-4 pb-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-accent text-[#8E8B82] uppercase tracking-wider">
            <span className="inline-flex items-center gap-1">
              <FiTag size={12} />
              {post.tag}
            </span>
            <span className="inline-flex items-center gap-1">
              <FiCalendar size={12} />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <FiClock size={12} />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#1C1C1A] leading-[1.15]">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-4">
            <div className="w-8 h-8 rounded-full bg-[#1C1C1A] text-[#FAF8F5] flex items-center justify-center font-serif-heading font-bold text-xs">
              OK
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#1C1C1A]">
                Olamilekan Kilani
              </span>
              <span className="text-[10px] font-mono-accent text-[#8E8B82] uppercase tracking-wider">
                Frontend Engineer
              </span>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <article className="prose prose-neutral max-w-none prose-headings:font-serif-heading prose-headings:font-normal prose-headings:text-[#1C1C1A] prose-p:text-[#383632] prose-p:font-light prose-p:leading-relaxed prose-a:text-[#1C1C1A] prose-a:underline prose-code:text-[#1C1C1A] prose-code:bg-[#F5F2EC] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono-accent prose-code:before:content-none prose-code:after:content-none">
          {post.content ? (
            <ReactMarkdown>{post.content}</ReactMarkdown>
          ) : (
            <p className="text-sm text-[#8E8B82] italic">
              This note is currently being drafted and will be published shortly.
            </p>
          )}
        </article>

        {/* Bottom Navigation */}
        <div className="pt-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono-accent text-[#8E8B82] hover:text-[#1C1C1A] uppercase tracking-widest transition-colors"
          >
            <FiArrowLeft size={14} />
            <span>All Articles</span>
          </Link>
          <a
            href="mailto:kilan080@gmail.com"
            className="inline-flex items-center gap-2 text-xs font-mono-accent text-[#1C1C1A] uppercase tracking-widest underline underline-offset-4 hover:text-[#8E8B82] transition-colors"
          >
            <span>Share Feedback</span>
          </a>
        </div>
      </div>
    </div>
  );
}
