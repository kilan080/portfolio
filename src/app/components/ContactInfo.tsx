"use client";

import { useEffect, useRef } from "react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import gsap from "gsap";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kilan080",
    icon: <FiGithub size={20} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/olamie03",
    icon: <FiTwitter size={20} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olamilekan-kilani-1197aa313/",
    icon: <FiLinkedin size={20} />,
  },
];

export default function ContactInfo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const links = containerRef.current.querySelectorAll("a");

    gsap.fromTo(
      links,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.6)",
        stagger: 0.12,
        delay: 0.4,
      },
    );
  }, []);

  const handleMouseEnter = (el: HTMLAnchorElement) => {
    gsap.to(el, {
      scale: 1.2,
      duration: 0.3,
      ease: "back.out(2)",
    });
  };

  const handleMouseLeave = (el: HTMLAnchorElement) => {
    gsap.to(el, {
      scale: 1,
      duration: 0.3,
      ease: "back.out(2)",
    });
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.5rem",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        alignItems: "center",
      }}
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.label}
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            background: "var(--bg-color)",
            color: "var(--text-main)",
            textDecoration: "none",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            cursor: "pointer",
            opacity: 0,
          }}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
