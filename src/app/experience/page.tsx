"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    year: "2026 - PRESENT",
    role: "Open Source Contributor, Freelance Web developer",
    company: "npm / GitHub",
    description:
      "Published and maintained @kilan080/grade-calculator on npm, an open-source tool for GPA and grade classification. Developed role-based auth middleware protecting live production systems, prioritizing security and seamless user flows.",
  },
  {
    year: "2025 — 2026",
    role: "Frontend developer, Web design tutor",
    company: "Topibro Technologies, Lagos",
    description:
      "Architected and deployed responsive and user friendly web applications for various clients. Re-built the comapny's web application and customer support systems to be more user friendly, and also help in training students and working class people on the use of the web application and other digital tools.",
  },
  {
    year: "2024 — 2025",
    role: "Frontend Web Developer",
    company: "Personal & Academic Projects",
    description:
      "Transitioned from foundational web concepts to advanced React/Next.js architectures. Built dynamic, state-heavy interfaces using Tailwind CSS and GSAP for fluid, performant user interactions.",
  },
];

export default function ExperiencePage() {
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

      // Timeline reveal
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.inOut",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 70%",
            once: true,
          },
        },
      );

      // Items stagger
      const items = gsap.utils.toArray<HTMLElement>(".experience-item");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
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
      className="w-full px-6 sm:px-10 max-w-[1400px] mx-auto pt-40 pb-32 min-h-screen"
    >
      <div className="page-header mb-32 max-w-2xl">
        <h1 className="font-sans font-bold text-5xl sm:text-7xl tracking-tighter mb-6 text-foreground">
          PROFESSIONAL <br className="hidden sm:block" />
          <span className="text-muted">TIMELINE.</span>
        </h1>
        <p className="text-lg text-muted">
          A track record of building, shipping, and maintaining software.
        </p>
      </div>

      <div className="timeline-container relative max-w-4xl">
        {/* Vertical Line */}
        <div className="timeline-line absolute left-0 top-0 bottom-0 w-px bg-border sm:left-[200px]" />

        <div className="flex flex-col gap-20 sm:gap-24">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="experience-item relative flex flex-col sm:flex-row sm:gap-16"
            >
              {/* Year marker */}
              <div className="sm:w-[200px] shrink-0 mb-4 sm:mb-0 relative">
                {/* Node on the line (visible on sm+) */}
                <div className="hidden sm:block absolute right-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-mono text-accent uppercase tracking-widest">
                  {exp.year}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-4 pl-4 sm:pl-0 border-l border-border sm:border-none relative">
                {/* Node on the line (visible on mobile) */}
                <div className="sm:hidden absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-accent" />

                <div>
                  <h3 className="font-sans font-semibold text-2xl sm:text-3xl tracking-tight text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono text-muted uppercase tracking-widest mt-2 block">
                    {exp.company}
                  </span>
                </div>

                <p className="text-base text-muted leading-relaxed max-w-prose mt-2">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
