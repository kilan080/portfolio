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
import dynamic from "next/dynamic";

const ThreeHero = dynamic(() => import("./ThreeHero"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#F9F6F0]">
      <div className="w-64 h-64 border border-[#111111] rounded-full animate-pulse opacity-20" />
    </div>
  )
});

const socials = [
  {
    icon: <FiGithub size={18} />,
    href: "https://github.com/kilan080",
    label: "GitHub",
  },
  {
    icon: <FiTwitter size={18} />,
    href: "https://twitter.com/olamie03",
    label: "Twitter",
  },
  {
    icon: <FiLinkedin size={18} />,
    href: "https://www.linkedin.com/in/olamilekan-kilani-1197aa313/",
    label: "LinkedIn",
  },
];

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

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 border-b brutalist-border">
      
      {/* Three.js Background with CSS fallback */}
      <ThreeHero />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center pointer-events-none mt-20">
        <div className="max-w-3xl w-full pointer-events-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#111111] text-[#111111] text-xs font-mono mb-8 uppercase tracking-widest bg-[#F9F6F0] brutalist-shadow"
          >
            <span className="w-2 h-2 bg-[#111111] animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black text-[#111111] leading-[0.9] tracking-tighter mb-6 uppercase"
          >
            Olamilekan
            <br />
            <span className="text-[#a39f97]">Kilani</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#111111] text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto font-mono tracking-tight"
          >
            FRONTEND WEB DEVELOPER FOCUSING ON MINIMALIST, HIGH-PERFORMANCE INTERACTIVE EXPERIENCES.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-[#F9F6F0] font-mono text-xs tracking-widest uppercase border border-[#111111] transition-transform hover:-translate-y-1 brutalist-shadow"
            >
              View My Work
              <FiArrowRight size={14} />
            </Link>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#111111] text-[#111111] bg-[#F9F6F0] font-mono text-xs tracking-widest uppercase transition-transform hover:-translate-y-1 brutalist-shadow"
            >
              Download CV
              <FiDownload size={14} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-6"
          >
            <span className="text-[#a39f97] text-xs font-mono uppercase tracking-widest">Connect /</span>
            <div className="flex items-center justify-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[#111111] hover:text-[#a39f97] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-12 mt-24 pt-12 border-t border-[#111111] w-full pointer-events-auto"
        >
          {[
            { end: 20, suffix: "+", label: "Months Experience" },
            { end: 15, suffix: "+", label: "Projects Built" },
            { end: 7, suffix: "+", label: "Tech Stacks" },
            { end: 100, suffix: "%", label: "Commitment" },
          ].map((stat) => (
            <div key={stat.label} className="text-left">
              <p className="text-4xl font-black text-[#111111] tracking-tighter">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="text-[#a39f97] text-xs font-mono uppercase tracking-widest mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
