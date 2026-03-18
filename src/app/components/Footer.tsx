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
    <footer className="border-t border-white/5 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Olamilekan Kilani. Built with Next.js &
            Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-4">
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

        <div className="flex items-center gap-6">
          {["Projects", "Skills", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
