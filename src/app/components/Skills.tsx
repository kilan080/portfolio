"use client";

import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiTool } from "react-icons/fi";
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

const categories = [
  {
    title: "Frontend",
    icon: <FiCode size={20} />,
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs size={28} />, level: 85 },
      { name: "React", icon: <SiReact size={28} />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript size={28} />, level: 75 },
      { name: "JavaScript", icon: <SiJavascript size={28} />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, level: 80 },
      { name: "Material UI", icon: <SiMui size={28} />, level: 85 },
      { name: "HTML5", icon: <SiHtml5 size={28} />, level: 90 },
      { name: "CSS3", icon: <SiCss size={28} />, level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: <FiServer size={20} />,
    color: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={28} />, level: 70 },
      { name: "Express.js", icon: <SiExpress size={28} />, level: 70 },
    ],
  },
  {
    title: "Database",
    icon: <FiDatabase size={20} />,
    color: "text-green-400",
    border: "border-green-500/20",
    bg: "bg-green-500/5",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={28} />, level: 70 },
      { name: "Firebase", icon: <SiFirebase size={28} />, level: 65 },
    ],
  },
  {
    title: "Tools",
    icon: <FiTool size={20} />,
    color: "text-orange-400",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    skills: [
      { name: "Git", icon: <SiGit size={28} />, level: 75 },
      { name: "GitHub", icon: <SiGithub size={28} />, level: 75 },
      { name: "Vercel", icon: <SiVercel size={28} />, level: 80 },
      { name: "Figma", icon: <SiFigma size={28} />, level: 60 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            What I work with
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            My Skills
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Technologies and tools I use to build modern, performant web
            applications.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`rounded-2xl border ${category.border} ${category.bg} p-6 sm:p-8`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`${category.color}`}>{category.icon}</div>
                <h2 className={`text-xl font-bold ${category.color}`}>
                  {category.title}
                </h2>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.03 }}
                    className="flex flex-col gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                  >
                    {/* Icon + Name */}
                    <div className="flex items-center gap-3">
                      <span className="text-gray-300">{skill.icon}</span>
                      <span className="text-sm font-medium text-gray-200">
                        {skill.name}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/5 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                        className={`h-1.5 rounded-full ${
                          category.color === "text-blue-400"
                            ? "bg-blue-400"
                            : category.color === "text-purple-400"
                              ? "bg-purple-400"
                              : category.color === "text-green-400"
                                ? "bg-green-400"
                                : "bg-orange-400"
                        }`}
                      />
                    </div>

                    {/* Level */}
                    {/* <span className="text-xs text-gray-500 text-right">
                      {skill.level}%
                    </span> */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5"
        >
          <h3 className="text-yellow-400 font-bold text-lg mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Jest & Testing",
              "PostgreSQL",
              "Docker",
              "React Query",
              "System Design",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
