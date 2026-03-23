"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiGithub,
  FiExternalLink,
  FiArrowRight,
  FiClock,
} from "react-icons/fi";

const featured = [
  {
    title: "Footies by Zain",
    description:
      "A full-stack e-commerce platform for premium footwear with user authentication, cart, multi-step checkout, order tracking and an admin dashboard.",
    tags: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Material UI"],
    live: "https://footiesbyzain.vercel.app",
    github: "https://github.com/kilan080",
    status: "live",
    color: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20",
    number: "01",
  },
  {
    title: "TMDB Movie App",
    description:
      "A movie discovery app with real-time search, Redux Toolkit state management, horizontal scrolling layouts and in-app trailer playback.",
    tags: ["Next.js", "React", "Redux Toolkit", "TMDB API", "Javascript"],
    live: "https://tdmb-tau.vercel.app",
    github: "https://github.com/kilan080",
    status: "live",
    color: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20",
    number: "02",
  },
  {
    title: "Startup Admin Dashboard",
    description:
      "A comprehensive admin dashboard for a startup to manage students, workspace payments and company operations.",
    tags: ["Next.js", "Firebase", "TypeScript", "Material UI"],
    live: "#",
    github: "https://github.com/kilan080",
    status: "coming-soon",
    color: "from-green-500/10 to-emerald-500/10",
    border: "border-green-500/20",
    number: "03",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div className="text-center">
            <span className="flex items-center justify-center text-center text-blue-400 text-sm font-medium tracking-widest uppercase">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
          >
            View All Projects
            <FiArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-6">
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl border ${project.border} bg-gradient-to-br ${project.color} p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:scale-[1.01] transition-transform`}
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="text-4xl font-bold text-white/10">
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      {project.status === "live" ? (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                          Live
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs">
                          <FiClock size={10} />
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                      aria-label="GitHub"
                    >
                      <FiGithub size={18} />
                    </a>
                    {project.status === "live" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                        aria-label="Live site"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
