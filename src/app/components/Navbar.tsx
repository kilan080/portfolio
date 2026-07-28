"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Landing", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6E3DC] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#E6E3DC] flex items-center justify-center font-serif-heading font-bold text-sm group-hover:bg-[#1C1C1A] group-hover:border-[#1C1C1A] group-hover:text-[#FAF8F5] transition-colors">
            OK
          </div>
          <div className="flex flex-col">
            <span className="font-serif-heading font-medium text-lg tracking-tight leading-tight text-[#1C1C1A]">
              Olamilekan Kilani
            </span>
            <span className="text-[10px] font-mono-accent text-[#8E8B82] uppercase tracking-widest">
              Frontend Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? pathname === "/"
                : pathname.startsWith(link.path);

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-xs font-mono-accent uppercase tracking-widest transition-colors relative py-1 ${
                  isActive
                    ? "text-[#1C1C1A] font-semibold"
                    : "text-[#8E8B82] hover:text-[#1C1C1A]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8E8B82]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Availability Badge & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 border border-[#E6E3DC] bg-[#FAF8F5] rounded-full text-[11px] font-mono-accent text-[#383632]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Available for hire</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1C1C1A] hover:text-[#8E8B82]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E6E3DC] px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? pathname === "/"
                : pathname.startsWith(link.path);

            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-mono-accent uppercase tracking-widest py-2 ${
                  isActive
                    ? "text-[#1C1C1A] font-bold"
                    : "text-[#8E8B82]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
