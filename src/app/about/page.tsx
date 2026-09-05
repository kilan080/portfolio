"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "HTML5 / CSS3",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Git / GitHub",
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".about-heading-word",
        { opacity: 0, y: 40, rotateX: -20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        ".about-fade-in",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.4,
        },
      );

      // Skills stagger reveal
      gsap.fromTo(
        ".skill-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-list",
            start: "top 85%",
            once: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full px-6 sm:px-10 max-w-[1400px] mx-auto pt-40 pb-32"
    >
      {/* Editorial Header */}
      <div className="mb-24 lg:mb-32">
        <h1
          className="font-sans font-bold text-5xl sm:text-7xl md:text-[5.5rem] tracking-tighter leading-[0.95] text-foreground"
          style={{ perspective: "1000px" }}
        >
          <span className="block about-heading-word origin-bottom">
            ENGINEERING
          </span>
          <span className="block about-heading-word origin-bottom text-muted">
            INTENTIONAL
          </span>
          <span className="block about-heading-word origin-bottom">
            INTERFACES.
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Main Content */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          <div className="about-fade-in">
            <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-4">
              Introduction
            </span>
            <p className="text-xl sm:text-2xl leading-relaxed text-foreground text-balance">
              I am a frontend developer based in Lagos, Nigeria. I specialize in
              building high-performance web applications that merge technical
              rigor with minimalist design.
            </p>
          </div>

          <div className="about-fade-in">
            <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-4">
              Approach
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-muted max-w-prose">
              My philosophy is rooted in simplicity. Whether I am constructing a
              complex authentication middleware or designing a landing page, I
              focus on stripping away the unnecessary. I build products that are
              fast, accessible, and feel effortless to use.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted max-w-prose mt-4">
              I view code as a medium for solving human problems. Performance
              matters. Accessibility matters. Design matters.
            </p>
          </div>
        </div>

        {/* Typographic Skills List */}
        <div className="lg:col-span-5 pt-8 lg:pt-0">
          <div className="about-fade-in mb-8">
            <span className="text-xs font-mono text-accent uppercase tracking-widest block">
              Core Technologies
            </span>
          </div>

          <ul className="skills-list flex flex-col">
            {skills.map((skill, idx) => (
              <li
                key={skill}
                className="skill-item flex items-baseline gap-6 py-4 border-b border-border group"
              >
                <span className="text-xs font-mono text-muted group-hover:text-accent transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl sm:text-3xl font-sans tracking-tight text-foreground group-hover:translate-x-2 transition-transform duration-300">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
