"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiClock, FiTag, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { posts } from "../data/postsData";

export default function BlogPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const publishedRef = useRef<HTMLDivElement>(null);
  const upcomingRef = useRef<HTMLDivElement>(null);

  const publishedPosts = posts.filter((p) => !p.comingSoon);
  const upcomingPosts = posts.filter((p) => p.comingSoon);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
        );
      }

      // GSAP Published posts stagger reveal
      if (publishedRef.current) {
        gsap.fromTo(
          publishedRef.current.children,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out", delay: 0.2 }
        );
      }

      // GSAP Upcoming posts animation
      if (upcomingRef.current) {
        gsap.fromTo(
          upcomingRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.4 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto flex flex-col gap-16">
      {/* Header */}
      <div ref={headerRef} className="flex flex-col gap-4 pb-4">
        <span className="text-[11px] font-mono-accent text-[#8E8B82] uppercase tracking-widest">
          Thoughts, Essays & Case Studies
        </span>
        <h1 className="font-serif-heading text-4xl sm:text-6xl text-[#1C1C1A]">
          Recent Notes & Articles
        </h1>
        <p className="text-base text-[#8E8B82] max-w-2xl font-light leading-relaxed">
          I write about frontend architecture, Next.js optimization, state management, design systems, and lessons from building web products.
        </p>
      </div>

      {/* Published Articles */}
      <div className="flex flex-col gap-6">
        <div className="flex items-baseline justify-between pb-1">
          <h2 className="font-serif-heading text-2xl text-[#1C1C1A]">
            Published Writings
          </h2>
          <span className="text-[11px] font-mono-accent text-[#8E8B82] uppercase tracking-widest">
            {publishedPosts.length} ARTICLES
          </span>
        </div>

        <div ref={publishedRef} className="flex flex-col divide-y divide-[#E6E3DC]">
          {publishedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="py-8 flex flex-col gap-3 group hover:bg-[#F5F2EC]/40 transition-colors px-2 rounded-sm"
            >
              <div className="flex items-center justify-between text-[11px] font-mono-accent text-[#8E8B82] uppercase tracking-widest">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-1">
                  <FiClock size={12} />
                  {post.readTime}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <h3 className="font-serif-heading text-xl sm:text-2xl text-[#1C1C1A] group-hover:text-[#615E58] transition-colors">
                  {post.title}
                </h3>
                <span className="text-[#8E8B82] group-hover:text-[#1C1C1A] group-hover:translate-x-1 transition-all">
                  <FiArrowRight size={18} />
                </span>
              </div>

              <p className="text-sm text-[#8E8B82] leading-relaxed font-light max-w-2xl">
                {post.excerpt}
              </p>

              <div className="pt-2 flex items-center gap-2">
                <span className="text-[10px] font-mono-accent text-[#8E8B82] border border-[#E6E3DC] px-2 py-0.5 rounded bg-[#FAF8F5]">
                  {post.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="flex flex-col gap-6 pt-6">
        <div className="flex items-baseline justify-between pb-1">
          <h2 className="font-serif-heading text-2xl text-[#1C1C1A]">
            Upcoming Notes
          </h2>
          <span className="text-[11px] font-mono-accent text-[#8E8B82] uppercase tracking-widest">
            IN DRAFT
          </span>
        </div>

        <div ref={upcomingRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingPosts.map((post) => (
            <div
              key={post.slug}
              className="border border-[#E6E3DC] border-dashed bg-[#FAF8F5] p-6 rounded-sm flex flex-col justify-between gap-4 opacity-75"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-accent text-[#8E8B82] border border-[#E6E3DC] px-2 py-0.5 rounded">
                  {post.tag}
                </span>
                <span className="text-[10px] font-mono-accent text-[#8E8B82] uppercase tracking-wider">
                  Drafting
                </span>
              </div>

              <div>
                <h3 className="font-serif-heading text-lg text-[#1C1C1A] leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-[#8E8B82] font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="text-[10px] font-mono-accent text-[#8E8B82] pt-3">
                {post.readTime}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
