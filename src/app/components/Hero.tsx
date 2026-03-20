"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";
import { start } from "repl";

const socials = [
  {
    icon: <FiGithub size={20} />,
    href: "https://github.com/kilan080",
    label: "GitHub",
  },
  {
    icon: <FiTwitter size={20} />,
    href: "https://twitter.com/olamie03",
    label: "Twitter",
  },
  {
    icon: <FiLinkedin size={20} />,
    href: "https://www.linkedin.com/in/olamilekan-kilani-1197aa313/",
    label: "LinkedIn",
  },
];

export default function Hero() {
  function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        },
        { threshold: 0.5 },
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
      if (!started) return;
      let start = 0;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [started, end]);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  }
  return (
    <section className="min-h-screen tflex items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        <div className="max-w-3xl w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-6"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Olamilekan
            </span>
            <br />
            Frontend Developer
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto"
          >
            I&apos;m a frontend web developer focused on building responsive,
            user-friendly applications with modern technologies. Currently
            seeking opportunities where I can contribute to impactful products
            while growing as a developer.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-lg transition-colors"
            >
              View My Work
              <FiArrowRight size={16} />
            </Link>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-medium rounded-lg transition-colors"
            >
              Download CV
              <FiDownload size={16} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center mt-2.5 gap-6"
          >
            <span className="text-gray-600 text-sm">Find me on</span>
            <div className="flex items-center justify-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-white/5 w-full"
        >
          {[
            { end: 20, suffix: "+", label: "Months Experience" },
            { end: 15, suffix: "+", label: "Projects Built" },
            { end: 7, suffix: "+", label: "Tech Stacks" },
            { end: 100, suffix: "%", label: "Passion for Code" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
