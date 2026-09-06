"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiClock, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { posts } from "../data/postsData";

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const publishedPosts = posts.filter((p) => !p.comingSoon);
  const featuredPost = publishedPosts[0];
  const remainingPosts = publishedPosts.slice(1, 4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animations
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full px-6 sm:px-10 max-w-[1100px] mx-auto pt-32 pb-32 flex flex-col gap-12"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 fade-in mb-4">
        <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">
          Thoughts, Essays & Case Studies
        </span>
        <h1 className="font-sans font-semibold text-4xl sm:text-5xl md:text-5xl tracking-tight">
          <span className="text-foreground">Recent Notes</span>{" "}
          <span className="text-muted font-normal">& Articles</span>
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-xl leading-relaxed mt-1">
          I write about frontend architecture, Next.js optimization, state
          management, design systems, and lessons from building web products.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="fade-in group">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block relative overflow-hidden rounded-xl border border-border bg-[#0B0C0E] transition-colors hover:border-accent/40"
          >
            <div className="flex flex-col md:flex-row min-h-[380px]">
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center flex-1 z-10 w-full md:w-1/2">
                <span className="inline-block px-2.5 py-1 bg-accent/10 text-accent text-[10px] font-mono uppercase tracking-widest rounded w-fit mb-5 font-semibold">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug group-hover:text-foreground transition-colors max-w-md">
                  {featuredPost.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[10px] font-mono text-muted uppercase tracking-widest mt-auto">
                  <span className="flex items-center gap-1.5">
                    <FiClock size={12} />
                    {featuredPost.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              {/* Graphic/Image representation */}
              <div className="hidden md:block w-1/2 relative transition-opacity duration-500 overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Layered Cards / Mockups */}
                <div className="absolute right-[-10%] top-[10%] w-[80%] h-[120%] flex items-center justify-center pointer-events-none">
                  {/* Background blurry card */}
                  <div className="absolute right-[15%] top-[15%] w-64 h-80 rounded-xl border border-accent/20 bg-accent/5 backdrop-blur-sm shadow-2xl transform rotate-12 translate-x-10 scale-90" />

                  {/* Middle blurry card */}
                  <div className="absolute right-[20%] top-[25%] w-64 h-80 rounded-xl border border-accent/30 bg-gradient-to-br from-[#0B0C0E] to-accent/10 shadow-2xl transform rotate-6 translate-x-4 scale-95" />

                  {/* Front sharp card (Code editor style) */}
                  <div className="absolute right-[25%] top-[30%] w-64 h-72 rounded-xl border border-accent/40 bg-[#0B0C0E]/90 backdrop-blur-md shadow-[0_0_50px_rgba(52,199,123,0.1)] flex flex-col overflow-hidden z-20 group-hover:-translate-y-2 group-hover:shadow-[0_0_60px_rgba(52,199,123,0.2)] transition-all duration-500">
                    {/* Editor Header */}
                    <div className="h-8 border-b border-border/50 flex items-center px-4 gap-1.5 bg-[#121316]">
                      <div className="w-2 h-2 rounded-full bg-border/80" />
                      <div className="w-2 h-2 rounded-full bg-border/80" />
                      <div className="w-2 h-2 rounded-full bg-border/80" />
                    </div>
                    {/* Editor Content */}
                    <div className="p-5 flex-1 relative">
                      <div className="w-8 h-8 rounded text-accent flex items-center mb-4 text-sm font-mono font-bold">
                        {"</>"}
                      </div>
                      <div className="space-y-3">
                        <div className="w-full h-1.5 bg-border/60 rounded" />
                        <div className="w-5/6 h-1.5 bg-border/60 rounded" />
                        <div className="w-4/6 h-1.5 bg-accent/40 rounded" />
                        <div className="w-full h-1.5 bg-border/60 rounded" />
                        <div className="w-3/4 h-1.5 bg-border/60 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-10 right-10 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all z-20">
                <FiArrowRight size={20} />
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* All Articles Section */}
      <div className="flex flex-col gap-6 fade-in mt-4">
        <div className="flex items-end justify-between border-border pb-4">
          <h2 className="text-[11px] font-mono text-muted uppercase tracking-widest font-bold">
            All Articles
          </h2>
          <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
            {publishedPosts.length} Articles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {remainingPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col p-7 rounded-xl border border-border bg-[#0B0C0E] hover:border-accent/40 transition-colors relative overflow-hidden h-[300px]"
            >
              {/* Background subtle gradient for cards */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <span className="px-2 py-1 bg-accent/10 text-accent text-[9px] font-mono uppercase tracking-widest rounded font-semibold">
                  {post.tag}
                </span>

                {/* Decorative Icon */}
                <div className="w-10 h-10 rounded-lg border border-accent/20 flex items-center justify-center text-accent bg-[#0B0C0E] shadow-[0_0_15px_rgba(52,199,123,0.05)] group-hover:shadow-[0_0_20px_rgba(52,199,123,0.15)] transition-shadow">
                  {post.tag === "Tutorial" ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="4"
                        transform="rotate(30 12 12)"
                      />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="4"
                        transform="rotate(90 12 12)"
                      />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="4"
                        transform="rotate(150 12 12)"
                      />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                  ) : post.tag === "Product Journey" ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="5" r="2" />
                      <path d="M4 9l8 2 8-2" />
                      <path d="M12 11v6" />
                      <path d="M12 17l-4 5M12 17l4 5" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 relative z-10 flex-1">
                <h3 className="text-[17px] font-bold text-foreground leading-snug group-hover:text-foreground transition-colors pr-4">
                  {post.title}
                </h3>

                <p className="text-[13px] text-muted leading-relaxed line-clamp-3 mt-1">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-muted uppercase tracking-widest mt-auto relative z-10 pt-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <FiClock size={12} />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{post.readTime}</span>
                </div>
                <div className="group-hover:text-foreground group-hover:translate-x-1 transition-all">
                  <FiArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
