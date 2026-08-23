"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(
        ".hero-label",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
      .fromTo(
        ".hero-heading-line",
        { opacity: 0, y: 40, rotateX: -20 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        ".hero-desc",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex-1 w-full flex flex-col justify-center px-6 sm:px-10 max-w-[1400px] mx-auto min-h-screen pt-20 pb-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
        
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="hero-label text-[11px] font-mono text-accent uppercase tracking-widest overflow-hidden">
            Olamilekan Kilani — Frontend Engineer
          </div>
          
          <h1 className="font-sans font-bold tracking-tighter text-foreground text-5xl sm:text-7xl md:text-[6.5rem] leading-[0.9] text-balance" style={{ perspective: "1000px" }}>
            <span className="block hero-heading-line origin-bottom">BUILDING</span>
            <span className="block hero-heading-line origin-bottom">DIGITAL</span>
            <span className="block hero-heading-line origin-bottom text-muted">EXPERIENCES.</span>
          </h1>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8 lg:mt-32">
          <p className="hero-desc text-base sm:text-lg leading-relaxed text-muted max-w-sm">
            I engineer high-performance, accessible, and intentionally designed web applications. Focusing on modern frontend architecture and clean user interfaces.
          </p>
          
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <Link 
              href="/work"
              className="hero-cta group inline-flex items-center justify-between gap-4 border border-border px-6 py-4 bg-background hover:border-accent transition-colors w-full sm:w-auto lg:w-full"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-foreground">View Work</span>
              <FiArrowRight size={14} className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </Link>
            
            <Link 
              href="/contact"
              className="hero-cta group inline-flex items-center justify-between gap-4 border border-transparent px-6 py-4 bg-foreground text-background hover:bg-accent hover:text-background transition-colors w-full sm:w-auto lg:w-full"
            >
              <span className="text-xs font-mono uppercase tracking-widest font-semibold">Get in Touch</span>
              <FiArrowRight size={14} className="group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}
