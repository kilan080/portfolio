import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

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
  {
    icon: <FiMail size={18} />,
    href: "mailto:olamilekankilani03@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#111111] py-12 bg-[#F9F6F0]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-[#111111] text-xs font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Olamilekan Kilani.
          </p>
        </div>

        <div className="flex items-center gap-6">
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

        <div className="flex items-center gap-8">
          {[
            { label: "Projects", href: "/#projects" },
            { label: "Skills", href: "/#skills" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#111111] hover:text-[#a39f97] text-xs font-mono uppercase tracking-widest transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
