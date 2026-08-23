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
    description: "Full-stack footwear store — auth, multi-step checkout, order state.",
    tags: ["Next.js", "TypeScript", "Express", "MongoDB"],
    live: "https://footiesbyzain.vercel.app",
    github: "https://github.com/kilan080",
  },
  {
    index: "02",
    year: "2026",
    title: "Dev Tracker",
    description: "SaaS for logging coding progress and learning streaks.",
    tags: ["Next.js", "NeonDB", "Clerk", "Tailwind"],
    live: "https://devtrackr-alpha.vercel.app/",
    github: "https://github.com/kilan080/devtrackr",
  },
  {
    index: "03",
    year: "2026",
    title: "TMDB Movie Discovery",
    description: "Search app with cast pages and in-app trailers.",
    tags: ["Next.js", "TMDB API", "TypeScript"],
    live: "https://tdmb-tau.vercel.app",
    github: "https://github.com/kilan080",
  },
  {
    index: "04",
    year: "2026",
    title: "AI Travel Planner",
    description: "Trip planner with an AI chat assistant and live weather.",
    tags: ["Next.js", "Firebase", "OpenRouter"],
    live: "https://ai-travel-planner-kol.vercel.app",
    github: "https://github.com/kilan080/ai-travel-planner",
  },
  {
    index: "05",
    year: "2025",
    title: "School Result Portal",
    description: "Role-based auth, fee-gated results, forced password-reset middleware.",
    tags: ["Next.js", "Firebase", "Express"],
    live: "https://portal-two-xi-52.vercel.app",
    github: "https://github.com/kilan080",
  },
  {
    index: "06",
    year: "2025",
    title: "grade-calculator",
    description: "Published npm package for GPA and grade classification.",
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
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
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
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full px-6 sm:px-10 max-w-[1400px] mx-auto pt-40 pb-32">
      
      <div className="page-header mb-32 max-w-2xl">
        <h1 className="font-sans font-bold text-5xl sm:text-7xl tracking-tighter mb-6 text-foreground">
          SELECTED <br className="hidden sm:block" />
          <span className="text-muted">WORKS.</span>
        </h1>
        <p className="text-lg text-muted">
          A collection of full-stack applications, interactive experiences, and tools I've built.
        </p>
      </div>

      <div className="flex flex-col gap-32 sm:gap-48">
        {selectedWorks.map((work, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <article key={work.title} className="project-item group">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Text Content */}
                <div className={`lg:col-span-5 flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="reveal-item flex items-center gap-4 mb-6">
                    <span className="text-xs font-mono font-bold text-accent">{work.index}</span>
                    <span className="h-px flex-1 bg-border"></span>
                    <span className="text-xs font-mono text-muted">{work.year}</span>
                  </div>
                  
                  <h2 className="reveal-item font-sans font-semibold text-3xl sm:text-5xl tracking-tight text-foreground mb-6 transition-colors group-hover:text-accent">
                    {work.title}
                  </h2>
                  
                  <p className="reveal-item text-base text-muted leading-relaxed mb-8">
                    {work.description}
                  </p>
                  
                  <div className="reveal-item flex flex-wrap gap-x-4 gap-y-2 mb-10">
                    {work.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono uppercase tracking-widest text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="reveal-item flex items-center gap-6">
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

                {/* Project Image Placeholder */}
                <div className={`reveal-item lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] bg-border/30 border border-border flex items-center justify-center overflow-hidden relative">
                    {/* Hover interaction overlay */}
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/5 transition-colors duration-500 z-10" />
                    
                    <span className="font-mono text-xs text-muted uppercase tracking-widest">
                      Preview Image
                    </span>
                  </div>
                </div>
                
              </div>
            </article>
          );
        })}
      </div>
      
    </div>
  );
}
