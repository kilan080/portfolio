"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiDownload, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";

// Real Projects data from user portfolio formatted for Selected Works layout
const selectedWorks = [
  {
    year: "2026",
    title: "Footies by Zain",
    description:
      "A full-stack e-commerce platform for premium footwear featuring authentication, multi-step checkout, and order management.",
    tags: ["Next.js", "TypeScript", "Express.js", "MongoDB"],
    live: "https://footiesbyzain.vercel.app",
    github: "https://github.com/kilan080",
  },
  {
    year: "2026",
    title: "Dev Tracker",
    description:
      "A developer productivity SaaS for logging daily coding progress, achievements, and tracking learning journeys.",
    tags: ["Next.js", "NeonDB", "Clerk", "TailwindCSS"],
    live: "https://devtrackr-alpha.vercel.app/",
    github: "https://github.com/kilan080/devtrackr",
  },
  {
    year: "2026",
    title: "TMDB Movie Discovery",
    description:
      "A fast movie discovery app built with Next.js and TMDB API featuring instant search, cast details, and in-app trailers.",
    tags: ["Next.js", "TMDB API", "React", "TypeScript"],
    live: "https://tdmb-tau.vercel.app",
    github: "https://github.com/kilan080",
  },
  {
    year: "2026",
    title: "AI Travel Planner",
    description:
      "An intelligent travel itinerary planner with location suggestions, budget tips, and an integrated AI chatbot.",
    tags: ["Next.js", "Firebase", "TypeScript", "TailwindCSS"],
    live: "https://ai-travel-planner-kol.vercel.app",
    github: "https://github.com/kilan080/ai-travel-planner",
  },
  {
    year: "2025",
    title: "School Result Management Portal",
    description:
      "A comprehensive portal for academic institutions to generate student report cards, track grades, and record performance.",
    tags: ["Next.js", "TypeScript", "Firebase", "TailwindCSS"],
    live: "https://portal-two-xi-52.vercel.app",
    github: "https://github.com/kilan080",
  },
  {
    year: "2025",
    title: "@kilan080/grade-calculator",
    description:
      "An open-source NPM utility package calculating academic GPA and grade classifications automatically.",
    tags: ["TypeScript", "NPM", "CLI"],
    live: "https://www.npmjs.com/package/@kilan080/grade-calculator",
    github: "https://github.com/kilan080/grade-calculator",
  },
];

// Real Blog Posts data from user portfolio formatted for Recent Notes layout
const recentNotes = [
  {
    date: "MARCH 2026",
    title: "How I Built a Full-Stack E-Commerce App in 3 Months",
    excerpt:
      "A deep dive into building Footies by Zain — from setting up authentication, cart state management, and checkout flow to Vercel deployment.",
    slug: "how-i-built-footies-by-zain",
  },
  {
    date: "MARCH 2026",
    title: "Understanding Protected Routes in Next.js with Middleware",
    excerpt:
      "A practical guide to securing application routes in Next.js App Router using server middleware, cookies, and JWT tokens.",
    slug: "protected-routes-nextjs-middleware",
  },
  {
    date: "APRIL 2026",
    title: "Building my first saas product: DevTracker",
    excerpt:
      "Lessons learned building and launching a SaaS product from scratch, managing user auth, database schema, and public launch.",
    slug: "building-devtrackr-from-idea-to-saas",
  },
];

const stats = [
  { value: "20+", label: "Months Experience" },
  { value: "15+", label: "Projects Built" },
  { value: "7+", label: "Core Tech Stacks" },
  { value: "100%", label: "Code Quality" },
];

export default function Home() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const notesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP Hero Text animation
      if (heroTitleRef.current) {
        gsap.fromTo(
          heroTitleRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          }
        );
      }

      if (heroSubRef.current) {
        gsap.fromTo(
          heroSubRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power2.out" }
        );
      }

      if (heroCtaRef.current) {
        gsap.fromTo(
          heroCtaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power2.out" }
        );
      }

      // GSAP Selected Works items stagger reveal
      if (worksRef.current) {
        gsap.fromTo(
          worksRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
          }
        );
      }

      // GSAP Recent Notes reveal
      if (notesRef.current) {
        gsap.fromTo(
          notesRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto flex flex-col gap-24">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-8 pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E6E3DC] rounded-full text-[11px] font-mono-accent text-[#8E8B82] uppercase tracking-widest bg-[#FAF8F5]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1A]" />
          Based in Nigeria — Working Worldwide
        </div>

        <h1
          ref={heroTitleRef}
          className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-[#1C1C1A] leading-[1.08] tracking-tight font-normal"
        >
          <span className="block">Crafting refined,</span>
          <span className="block italic">high-performance</span>
          <span className="block">digital web experiences.</span>
        </h1>

        <p
          ref={heroSubRef}
          className="text-base sm:text-lg text-[#8E8B82] max-w-2xl font-light leading-relaxed"
        >
          I am <strong className="text-[#1C1C1A] font-normal">Olamilekan Kilani</strong>, a Frontend Engineer passionate about clean code, minimal design systems, and fluid interactive animations with Next.js, React, and GSAP.
        </p>

        {/* CTA Buttons */}
        <div ref={heroCtaRef} className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#selected-works"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1C1A] text-[#FAF8F5] text-xs font-mono-accent uppercase tracking-widest hover:bg-[#383632] transition-colors rounded-sm"
          >
            <span>Selected Works</span>
            <FiArrowRight size={14} />
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#E6E3DC] hover:border-[#8E8B82] text-[#1C1C1A] text-xs font-mono-accent uppercase tracking-widest transition-colors rounded-sm bg-[#FAF8F5]"
          >
            <span>Download CV</span>
            <FiDownload size={14} />
          </a>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-[#E6E3DC]">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="font-serif-heading text-3xl sm:text-4xl text-[#1C1C1A]">
              {stat.value}
            </span>
            <span className="text-[11px] font-mono-accent text-[#8E8B82] uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </section>

      {/* Selected Works Section */}
      <section id="selected-works" className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-baseline justify-between pb-2">
          <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#1C1C1A]">
            Selected Works
          </h2>
          <Link
            href="/skills"
            className="text-[11px] font-mono-accent text-[#8E8B82] hover:text-[#1C1C1A] uppercase tracking-widest transition-colors inline-flex items-center gap-1"
          >
            <span>VIEW SKILLS</span>
            <span className="text-xs">→</span>
          </Link>
        </div>

        {/* List layout */}
        <div ref={worksRef} className="flex flex-col divide-y divide-[#E6E3DC]">
          {selectedWorks.map((work) => (
            <div
              key={work.title}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 group hover:bg-[#F5F2EC]/40 transition-colors px-2 rounded-sm"
            >
              {/* Year Column */}
              <div className="md:col-span-2 text-xs font-mono-accent text-[#8E8B82] pt-1">
                {work.year}
              </div>

              {/* Title & Description Column */}
              <div className="md:col-span-9 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="font-serif-heading text-xl sm:text-2xl text-[#1C1C1A] group-hover:text-[#383632] transition-colors">
                    {work.title}
                  </h3>
                  {work.live !== "#" && (
                    <a
                      href={work.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8E8B82] hover:text-[#1C1C1A] transition-colors"
                      aria-label={`Open ${work.title}`}
                    >
                      <FiArrowUpRight size={16} />
                    </a>
                  )}
                </div>

                <p className="text-sm text-[#8E8B82] leading-relaxed font-light">
                  {work.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono-accent text-[#8E8B82] bg-[#F5F2EC] px-2 py-0.5 rounded border border-[#E6E3DC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Notes Section */}
      <section className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-baseline justify-between pb-2">
          <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#1C1C1A]">
            Recent Notes
          </h2>
          <Link
            href="/blog"
            className="text-[11px] font-mono-accent text-[#8E8B82] hover:text-[#1C1C1A] uppercase tracking-widest transition-colors inline-flex items-center gap-1"
          >
            <span>VIEW ARCHIVE</span>
            <span className="text-xs">→</span>
          </Link>
        </div>

        {/* List matching image layout */}
        <div ref={notesRef} className="flex flex-col divide-y divide-[#E6E3DC]">
          {recentNotes.map((note) => (
            <Link
              key={note.slug}
              href={`/blog/${note.slug}`}
              className="py-8 flex flex-col gap-3 group hover:bg-[#F5F2EC]/40 transition-colors px-2 rounded-sm"
            >
              <div className="text-[11px] font-mono-accent text-[#8E8B82] uppercase tracking-widest">
                {note.date}
              </div>

              <h3 className="font-serif-heading text-xl sm:text-2xl text-[#1C1C1A] group-hover:text-[#615E58] transition-colors">
                {note.title}
              </h3>

              <p className="text-sm text-[#8E8B82] leading-relaxed font-light max-w-2xl">
                {note.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Summary & Contact Trigger */}
      <section className="border border-[#E6E3DC] bg-[#FAF8F5] p-8 sm:p-12 rounded-sm flex flex-col gap-6">
        <h3 className="font-serif-heading text-2xl text-[#1C1C1A]">
          About Olamilekan
        </h3>
        <p className="text-sm text-[#8E8B82] leading-relaxed font-light">
          With over 20 months of hands-on experience developing web applications, I focus on constructing high-quality digital interfaces using React, Next.js, TypeScript, and modern CSS/GSAP primitives. I love turning complex logic into clear, human-centered designs.
        </p>
        <div className="pt-2">
          <a
            href="mailto:kilan080@gmail.com"
            className="inline-flex items-center gap-2 text-xs font-mono-accent text-[#1C1C1A] underline underline-offset-4 uppercase tracking-wider hover:text-[#8E8B82] transition-colors"
          >
            <span>Get in touch — kilan080@gmail.com</span>
            <FiArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
