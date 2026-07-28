"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FiCode, FiServer, FiDatabase, FiTool, FiCheckCircle } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiHtml5,
  SiCss,
  SiFigma,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <FiCode size={18} />,
    description: "Building responsive, accessible, and high-performance UI systems.",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs size={20} />, level: "Advanced", desc: "App Router, SSR, Middleware" },
      { name: "React", icon: <SiReact size={20} />, level: "Advanced", desc: "Hooks, Context, State Management" },
      { name: "TypeScript", icon: <SiTypescript size={20} />, level: "Proficient", desc: "Type Safety, Generics, Interfaces" },
      { name: "JavaScript (ES6+)", icon: <SiJavascript size={20} />, level: "Advanced", desc: "Async/Await, Closures, DOM" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={20} />, level: "Advanced", desc: "Custom Utilities, Design Systems" },
      { name: "Material UI", icon: <SiMui size={20} />, level: "Proficient", desc: "Component Customization" },
      { name: "HTML5", icon: <SiHtml5 size={20} />, level: "Expert", desc: "Semantic Markup, Accessibility" },
      { name: "CSS3", icon: <SiCss size={20} />, level: "Advanced", desc: "Flexbox, Grid, Animations" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: <FiServer size={18} />,
    description: "Constructing reliable server-side logic and robust RESTful APIs.",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={20} />, level: "Proficient", desc: "Event Loop, Express, Runtime" },
      { name: "Express.js", icon: <SiExpress size={20} />, level: "Proficient", desc: "Middleware, Routing, Controllers" },
    ],
  },
  {
    title: "Database & Cloud Services",
    icon: <FiDatabase size={18} />,
    description: "Managing persistence layers, schemas, and cloud deployment pipelines.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={20} />, level: "Proficient", desc: "Document Modeling, Mongoose" },
      { name: "Firebase", icon: <SiFirebase size={20} />, level: "Proficient", desc: "Firestore, Auth, Hosting" },
      { name: "Vercel", icon: <SiVercel size={20} />, level: "Advanced", desc: "Deployment, Edge Functions" },
    ],
  },
  {
    title: "Development Tools",
    icon: <FiTool size={18} />,
    description: "Version control, collaboration, and interface design software.",
    skills: [
      { name: "Git", icon: <SiGit size={20} />, level: "Proficient", desc: "Branching, Rebase, Workflows" },
      { name: "GitHub", icon: <SiGithub size={20} />, level: "Proficient", desc: "PR Reviews, CI/CD Actions" },
      { name: "Figma", icon: <SiFigma size={20} />, level: "Intermediate", desc: "UI Inspection, Wireframing" },
    ],
  },
];

const learningFocus = [
  "Jest & Unit Testing",
  "PostgreSQL & Prisma",
  "Docker Containers",
  "TanStack React Query",
  "System Architecture",
];

export default function SkillsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const learningRef = useRef<HTMLDivElement>(null);

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

      // GSAP Categories animation
      if (categoriesRef.current) {
        gsap.fromTo(
          categoriesRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out", delay: 0.2 }
        );
      }

      // GSAP Learning block animation
      if (learningRef.current) {
        gsap.fromTo(
          learningRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.5 }
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
          Capabilities & Tech Stack
        </span>
        <h1 className="font-serif-heading text-4xl sm:text-6xl text-[#1C1C1A]">
          Skills & Expertise
        </h1>
        <p className="text-base text-[#8E8B82] max-w-2xl font-light leading-relaxed">
          A comprehensive overview of the modern technologies, languages, frameworks, and developer tools I work with daily to build production-ready applications.
        </p>
      </div>

      {/* Categories */}
      <div ref={categoriesRef} className="flex flex-col gap-14">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-1">
              <span className="text-[#1C1C1A]">{cat.icon}</span>
              <h2 className="font-serif-heading text-2xl text-[#1C1C1A]">
                {cat.title}
              </h2>
            </div>

            <p className="text-xs font-mono-accent text-[#8E8B82] uppercase tracking-wider -mt-2">
              {cat.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="border border-[#E6E3DC] bg-[#FAF8F5] p-5 rounded-sm flex flex-col gap-3 hover:border-[#8E8B82] transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[#1C1C1A] group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-mono-accent text-[#8E8B82] border border-[#E6E3DC] px-2 py-0.5 rounded">
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif-heading font-medium text-base text-[#1C1C1A]">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-[#8E8B82] font-light mt-0.5">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Currently Learning Section */}
      <div
        ref={learningRef}
        className="border border-[#E6E3DC] bg-[#F5F2EC]/60 p-8 rounded-sm flex flex-col gap-4"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1C1C1A] animate-ping" />
          <h3 className="font-serif-heading text-xl text-[#1C1C1A]">
            Active Learning & Technical Goals
          </h3>
        </div>

        <p className="text-xs font-mono-accent text-[#8E8B82] uppercase tracking-wider">
          Continuously expanding my engineering repertoire in these domains:
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          {learningFocus.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#E6E3DC] bg-[#FAF8F5] text-xs font-mono-accent text-[#1C1C1A] rounded-sm"
            >
              <FiCheckCircle size={12} className="text-[#8E8B82]" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
