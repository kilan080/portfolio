"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".contact-heading-word",
        { opacity: 0, y: 40, rotateX: -20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
      )
        .fromTo(
          ".contact-fade",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
          "-=0.4",
        )
        .fromTo(
          ".form-element",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full px-6 sm:px-10 max-w-[1400px] mx-auto pt-40 pb-32 min-h-screen flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Header & Links */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h1
              className="font-sans font-bold text-5xl sm:text-7xl md:text-[5.5rem] tracking-tighter leading-[0.95] text-foreground mb-8 text-balance"
              style={{ perspective: "1000px" }}
            >
              <span className="block contact-heading-word origin-bottom">
                LET&apos;S BUILD
              </span>
              <span className="block contact-heading-word origin-bottom text-muted">
                SOMETHING.
              </span>
            </h1>

            <p className="contact-fade text-lg sm:text-xl text-muted leading-relaxed max-w-md">
              Whether it&apos;s a new project, a technical challenge, or just a
              conversation about frontend engineering, I&apos;m always open to
              connecting.
            </p>
          </div>

          <div className="contact-fade flex flex-col gap-6 mt-16 lg:mt-32">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              Direct Access
            </span>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:kilan080@gmail.com"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-accent transition-colors"
              >
                <span className="flex items-center gap-4 text-xl sm:text-2xl font-sans tracking-tight text-foreground">
                  <FiMail className="text-muted group-hover:text-accent transition-colors" />
                  kilan080@gmail.com
                </span>
                <FiArrowUpRight
                  size={20}
                  className="text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>

              <a
                href="https://github.com/kilan080"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-accent transition-colors"
              >
                <span className="flex items-center gap-4 text-xl sm:text-2xl font-sans tracking-tight text-foreground">
                  <FiGithub className="text-muted group-hover:text-accent transition-colors" />
                  GitHub
                </span>
                <FiArrowUpRight
                  size={20}
                  className="text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-accent transition-colors"
              >
                <span className="flex items-center gap-4 text-xl sm:text-2xl font-sans tracking-tight text-foreground">
                  <FiLinkedin className="text-muted group-hover:text-accent transition-colors" />
                  LinkedIn
                </span>
                <FiArrowUpRight
                  size={20}
                  className="text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Contact Form */}
        <div className="lg:col-span-5 flex flex-col justify-end pt-8 lg:pt-0">
          <form
            className="flex flex-col gap-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-element flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-xs font-mono text-muted uppercase tracking-widest"
              >
                01. Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="CIROMA ADEKUNLE"
                className="w-full bg-transparent border-b border-border pb-3 text-lg font-sans text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors rounded-none"
              />
            </div>

            <div className="form-element flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-xs font-mono text-muted uppercase tracking-widest"
              >
                02. Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="ciroma@adekunle.com"
                className="w-full bg-transparent border-b border-border pb-3 text-lg font-sans text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors rounded-none"
              />
            </div>

            <div className="form-element flex flex-col gap-3">
              <label
                htmlFor="message"
                className="text-xs font-mono text-muted uppercase tracking-widest"
              >
                03. Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-b border-border pb-3 text-lg font-sans text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none rounded-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="form-element group inline-flex items-center justify-between gap-4 border border-border px-6 py-4 bg-background hover:bg-foreground hover:text-background transition-colors w-full mt-4"
            >
              <span className="text-xs font-mono uppercase tracking-widest group-hover:font-semibold">
                Send Message
              </span>
              <FiArrowUpRight
                size={14}
                className="text-muted group-hover:text-background group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
