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
    skills: [
      { name: "Next.js", icon: <SiNextdotjs size={24} />, level: 85 },
      { name: "React", icon: <SiReact size={24} />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript size={24} />, level: 75 },
      { name: "JavaScript", icon: <SiJavascript size={24} />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={24} />, level: 80 },
      { name: "Material UI", icon: <SiMui size={24} />, level: 85 },
      { name: "HTML5", icon: <SiHtml5 size={24} />, level: 90 },
      { name: "CSS3", icon: <SiCss size={24} />, level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: <FiServer size={20} />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={24} />, level: 70 },
      { name: "Express.js", icon: <SiExpress size={24} />, level: 70 },
    ],
  },
  {
    title: "Database",
    icon: <FiDatabase size={20} />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={24} />, level: 70 },
      { name: "Firebase", icon: <SiFirebase size={24} />, level: 65 },
    ],
  },
  {
    title: "Tools",
    icon: <FiTool size={20} />,
    skills: [
      { name: "Git", icon: <SiGit size={24} />, level: 75 },
      { name: "GitHub", icon: <SiGithub size={24} />, level: 75 },
      { name: "Vercel", icon: <SiVercel size={24} />, level: 80 },
      { name: "Figma", icon: <SiFigma size={24} />, level: 60 },
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
    <section id="skills" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 bg-[#F9F6F0] border-b brutalist-border">
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
            What I work with
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#111111] mt-6 mb-4 tracking-tighter uppercase">
            My Skills
          </h2>
          <p className="md:flex md:items-center md:justify-center md:text-center text-[#111111] max-w-xl text-sm font-mono mx-auto">
            TECHNOLOGIES AND TOOLS I USE TO BUILD MODERN, PERFORMANT WEB APPLICATIONS.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="border border-[#111111] bg-[#F9F6F0] p-6 sm:p-8 brutalist-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#111111]">
                <div className="text-[#111111]">{category.icon}</div>
                <h3 className="text-xl font-black text-[#111111] uppercase tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center gap-4 p-6 border border-[#111111] bg-[#F9F6F0] transition-all hover:bg-[#111111] hover:text-[#F9F6F0] group"
                  >
                    {/* Icon */}
                    <div className="text-[#111111] group-hover:text-[#F9F6F0] transition-colors">
                      {skill.icon}
                    </div>
                    {/* Name */}
                    <span className="text-[10px] font-mono tracking-widest uppercase text-center text-[#111111] group-hover:text-[#F9F6F0]">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-6 sm:p-8 border border-[#111111] bg-[#F9F6F0] brutalist-shadow"
        >
          <h3 className="text-[#111111] font-black uppercase tracking-tight text-lg mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-[#111111] animate-pulse" />
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Jest & Testing",
              "PostgreSQL",
              "Docker",
              "React Query",
              "System Design",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 border border-[#111111] text-[#111111] text-xs font-mono uppercase tracking-widest bg-[#F9F6F0]"
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
