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
    featured: true,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
  },
  {
    title: "TMDB Movie App",
    description:
      "A movie discovery app built with Next.js and the TMDB API. Features include movie search, detailed movie and cast info, and an in-app trailer player.",
    tags: ["Next.js", "React", "TMDB API", "TypeScript"],
    live: "https://tdmb-tau.vercel.app",
    github: "https://github.com/kilan080",
    status: "live",
    featured: true,
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
  },
  {
    title: "Startup Admin Dashboard",
    description:
      "A comprehensive admin dashboard for a startup to manage students, workspace payments, and company operations. Built with Next.js and Firebase.",
    tags: ["Next.js", "Firebase", "TypeScript", "Material UI"],
    live: "#",
    github: "https://github.com/kilan080",
    status: "coming-soon",
    featured: true,
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20",
  },
  {
    title: "Dev Tracker",
    description: "It is a platform for developers for logging your daily coding progress, achievements, and tracking your learning journey.",
    tags: ["Next.js", "NeonDB", "Clerk", "TailwindCSS", "React"],
    live: "https://devtrackr-alpha.vercel.app/",
    github: "https://github.com/kilan080/devtrackr",
    status: "live",
    featured: true,
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20",
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center lg:text-center"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            My Projects
          </h1>
          <p className="flex items-center justify-center text-center text-gray-400 max-w-xl text-lg mx-auto">
            A collection of real-world projects I&apos;ve built — from
            e-commerce platforms to movie apps and admin dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border ${project.border} bg-gradient-to-br ${project.color} backdrop-blur-sm p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform`}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between">
                {project.status === "live" ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium">
                    <FiClock size={10} />
                    Coming Soon
                  </span>
                )}

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.status !== "coming-soon" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Live site"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={16} />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs"
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/kilan080"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-medium rounded-lg transition-colors"
          >
            <FiGithub size={18} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
