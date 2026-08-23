"use client";

import { FiGithub, FiTwitter, FiLinkedin, FiArrowUp } from "react-icons/fi";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kilan080",
    icon: <FiGithub size={16} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/olamie03",
    icon: <FiTwitter size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olamilekan-kilani-1197aa313/",
    icon: <FiLinkedin size={16} />,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border bg-background pt-16 pb-12 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8">
          <div>
            <h3 className="font-sans font-semibold text-2xl text-foreground mb-2">
              Let&apos;s build something exceptional together.
            </h3>
            <p className="text-xs font-mono text-muted uppercase tracking-wider">
              Available for full-time roles & high-impact projects.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors uppercase tracking-wider"
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-muted border-border/50">
          <p>
            © {new Date().getFullYear()} Olamilekan Kilani. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors uppercase tracking-wider cursor-pointer"
          >
            <span>Back to top</span>
            <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
