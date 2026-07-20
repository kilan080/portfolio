"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiClock } from "react-icons/fi";

const projects = [
  {
    title: "Footies by Zain",
    description:
      "A full-stack e-commerce platform for premium footwear. Features include user authentication, cart, multi-step checkout, order tracking, and an admin dashboard for managing products and orders.",
    tags: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Material UI"],
    live: "https://footiesbyzain.vercel.app",
    github: "https://github.com/kilan080",
    status: "live",
  },
  {
    title: "TMDB Movie App",
    description:
      "A movie discovery app built with Next.js and the TMDB API. Features include movie search, detailed movie and cast info, and an in-app trailer player.",
    tags: ["Next.js", "React", "TMDB API", "TypeScript"],
    live: "https://tdmb-tau.vercel.app",
    github: "https://github.com/kilan080",
    status: "live",
  },
  {
    title: "Startup Admin Dashboard",
    description:
      "A comprehensive admin dashboard for a startup to manage students, workspace payments, and company operations. Built with Next.js and Firebase.",
    tags: ["Next.js", "Firebase", "TypeScript", "Material UI"],
    live: "#",
    github: "https://github.com/kilan080",
    status: "coming-soon",
  },
  {
    title: "Dev Tracker",
    description:
      "It is a platform for developers for logging your daily coding progress, achievements, and tracking your learning journey.",
    tags: ["Next.js", "NeonDB", "Clerk", "TailwindCSS", "React"],
    live: "https://devtrackr-alpha.vercel.app/",
    github: "https://github.com/kilan080/devtrackr",
    status: "live",
  },
  {
    title: "TobiBro Admin",
    description:
      "An admin dashboard for TobiBro to manage its students and also tutor for the development and progress of students.",
    tags: ["Next.js", "TypeScript", "Material UI"],
    live: "#",
    github: "https://github.com/kilan080",
    status: "coming-soon",
  },
  {
    title: "AI travel planner",
    description:
      "An AI travel planner to help plan your travels, give tips about how to spend and also locations of where you can visit with an integrated chatbot. Built with Next.js and Firebase.",
    tags: ["Next.js", "Firebase", "TypeScript", "Tailwindcss"],
    live: " https://ai-travel-planner-kol.vercel.app",
    github: "https://github.com/kilan080/ai-travel-planner",
    status: "live",
  },
  {
    title: "Grade Calculator",
    description:
      "An npm package that calculates grade of students based on their scores",
    tags: ["TypeScript", "npm", "git/CLI"],
    live: "https://www.npmjs.com/package/@kilan080/grade-calculator",
    github: "https://github.com/kilan080/grade-calculator",
    status: "live",
  },
  {
    title: "A School Result Management Portal",
    description:
      "A school result management portal for schools to manage their students and also generate reports.",
    tags: ["Next.js", "TypeScript", "TailwindCss", "firebase"],
    live: "https://portal-two-xi-52.vercel.app",
    github: "https://github.com/kilan080",
    status: "live",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen pt-28 pb-20 px-6 border-b brutalist-border bg-[#F9F6F0]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center text-left"
        >
          <span className="text-[#a39f97] text-xs font-mono uppercase tracking-widest border border-[#111111] px-2 py-1 bg-[#F9F6F0] brutalist-shadow">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#111111] mt-6 mb-4 tracking-tighter uppercase">
            My Projects
          </h2>
          <p className="md:flex md:items-center md:justify-center md:text-center text-[#111111] max-w-xl text-sm font-mono mx-auto">
            A COLLECTION OF REAL-WORLD PROJECTS I&apos;VE BUILT FROM E-COMMERCE
            PLATFORMS TO MOVIE APPS AND ADMIN DASHBOARDS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border border-[#111111] bg-[#F9F6F0] p-6 flex flex-col gap-6 transition-transform hover:-translate-y-2 brutalist-shadow"
            >
              {/* Status badge */}
              <div className="flex items-center justify-between">
                {project.status === "live" ? (
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-[#111111] text-[#111111] text-[10px] uppercase tracking-widest font-mono">
                    <span className="w-1.5 h-1.5 bg-[#111111] animate-pulse" />
                    Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-[#111111] text-[#111111] text-[10px] uppercase tracking-widest font-mono">
                    <FiClock size={10} />
                    Coming Soon
                  </span>
                )}

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.status !== "coming-soon" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111111] hover:text-[#a39f97] transition-colors"
                      aria-label="Live site"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111111] hover:text-[#a39f97] transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={18} />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-[#111111] uppercase tracking-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#111111] text-xs font-mono leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto border-[#111111] pt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 border border-[#111111] text-[#111111] text-[10px] font-mono tracking-widest uppercase bg-[#F9F6F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 text-center"
        >
          <p className="text-[#111111] font-mono text-xs uppercase tracking-widest mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/kilan080"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#111111] bg-[#111111] text-[#F9F6F0] font-mono text-xs uppercase tracking-widest transition-transform hover:-translate-y-1 brutalist-shadow"
          >
            <FiGithub size={16} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
