"use client";

import { useEffect, useRef } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const selectedWorks = [
  {
    index: "01",
    year: "2026",
    title: "Footies by Zain",
    description:
      "A comprehensive full-stack e-commerce platform dedicated to footwear. Engineered with secure authentication, a seamless multi-step checkout process, and robust order state management to ensure a frictionless shopping experience from browsing to purchase.",
    tags: ["Next.js", "TypeScript", "Express", "MongoDB"],
    live: "https://footiesbyzain.vercel.app",
    github: "https://github.com/kilan080",
  },
  {
    index: "02",
    year: "2026",
    title: "Dev Tracker",
    description:
      "A specialized SaaS platform built for developers to meticulously log their coding progress, maintain daily learning streaks, and analyze their productivity over time. Architected for speed and scalability using Next.js and NeonDB.",
    tags: ["Next.js", "NeonDB", "Clerk", "Tailwind"],
    live: "https://devtrackr-alpha.vercel.app/",
    github: "https://github.com/kilan080/devtrackr",
  },
  {
    index: "03",
    year: "2026",
    title: "TMDB Movie Discovery",
    description:
      "A dynamic movie discovery application leveraging the TMDB API. It features comprehensive search functionality, detailed cast and crew pages, and integrated in-app trailers, providing a rich, cinema-centric user interface.",
    tags: ["Next.js", "TMDB API", "TypeScript"],
    live: "https://tdmb-tau.vercel.app",
    github: "https://github.com/kilan080",
  },
  {
    index: "04",
    year: "2026",
    title: "AI Travel Planner",
    description:
      "An intelligent trip planning companion that utilizes OpenRouter AI to generate personalized itineraries. Integrated with live weather data and Firebase for real-time synchronization, making travel preparation intuitive and dynamic.",
    tags: ["Next.js", "Firebase", "OpenRouter"],
    live: "https://ai-travel-planner-kol.vercel.app",
    github: "https://github.com/kilan080/ai-travel-planner",
  },
  {
    index: "05",
    year: "2025",
    title: "School Result Portal",
    description:
      "A secure, role-based educational portal designed for institutional use. Features include fee-gated access to academic results and a forced password-reset middleware to ensure rigorous data privacy and security compliance.",
    tags: ["Next.js", "Firebase", "Express"],
    live: "https://portal-two-xi-52.vercel.app",
    github: "https://github.com/kilan080",
  },
  {
    index: "06",
    year: "2025",
    title: "grade-calculator",
    description:
      "An open-source npm package crafted to simplify academic grading. It provides developers with utility functions for accurate GPA calculation and grade classification, rigorously tested and currently utilized in production environments.",
    tags: ["TypeScript", "npm", "CLI"],
    live: "https://www.npmjs.com/package/@kilan080/grade-calculator",
    github: "https://github.com/kilan080/grade-calculator",
  },
];

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".page-header",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );

      // Project reveal animations
      const projects = gsap.utils.toArray<HTMLElement>(".project-item");

      projects.forEach((project) => {
        const elements = project.querySelectorAll(".reveal-item");

        gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
              once: true,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full px-6 sm:px-10 max-w-[1400px] mx-auto pt-40 pb-32"
    >
      <div className="page-header mb-32 max-w-2xl">
        <h1 className="font-sans font-bold text-5xl sm:text-7xl tracking-tighter mb-6 text-foreground">
          SELECTED <br className="hidden sm:block" />
          <span className="text-muted">WORKS.</span>
        </h1>
        <p className="text-lg text-muted">
          A collection of full-stack applications, interactive experiences, and
          tools I&apos;ve built.
        </p>
      </div>

      <div className="flex flex-col gap-24 sm:gap-32">
        {selectedWorks.map((work) => (
          <article
            key={work.title}
            className="project-item group pt-10 sm:pt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              {/* Meta Info */}
              <div className="md:col-span-4 lg:col-span-3 reveal-item flex flex-col">
                <span className="text-xs font-mono font-bold text-accent mb-2 block">
                  {work.index}
                </span>
                <span className="text-xs font-mono text-muted uppercase tracking-widest">
                  {work.year}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-8 lg:col-span-9 flex flex-col">
                <h2 className="reveal-item font-sans font-semibold text-4xl sm:text-6xl tracking-tight text-foreground mb-8 transition-colors group-hover:text-accent">
                  {work.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                  <p className="reveal-item text-lg text-muted leading-relaxed">
                    {work.description}
                  </p>

                  <div className="flex flex-col gap-10">
                    <div className="reveal-item flex flex-wrap gap-3">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono uppercase tracking-widest text-foreground px-3 py-1.5 rounded-sm bg-border/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="reveal-item flex items-center gap-8 pt-2">
                      <a
                        href={work.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                      >
                        Live <FiArrowUpRight size={14} />
                      </a>
                      <a
                        href={work.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                      >
                        Code <FiGithub size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
