"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiCode } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F9F6F0]/90 backdrop-blur-md border-b brutalist-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#111111] flex items-center justify-center transition-transform group-hover:-translate-y-1 brutalist-border brutalist-shadow">
            <FiCode className="text-[#F9F6F0] text-sm" />
          </div>
          <span className="font-black text-[#111111] tracking-tighter uppercase text-sm">O.K.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-mono text-xs tracking-widest uppercase transition-colors hover:text-[#a39f97] ${
                  pathname === link.href && link.href === "/blog"
                    ? "text-[#111111] font-bold"
                    : "text-[#111111]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:olamilekankilani03@gmail.com"
            className="px-4 py-2 bg-[#111111] text-[#F9F6F0] font-mono text-xs tracking-widest uppercase border border-[#111111] transition-transform hover:-translate-y-1 brutalist-shadow"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#111111] hover:text-[#a39f97] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F9F6F0] border-t border-b brutalist-border px-6 py-4">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-mono text-xs tracking-widest uppercase block ${
                    pathname === link.href && link.href === "/blog"
                      ? "text-[#111111] font-bold"
                      : "text-[#111111]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="mailto:olamilekankilani03@gmail.com"
                className="inline-block px-4 py-2 bg-[#111111] text-[#F9F6F0] font-mono text-xs tracking-widest uppercase border border-[#111111] transition-transform hover:-translate-y-1 brutalist-shadow mt-4"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
