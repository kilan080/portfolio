"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiSend,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "olamilekankilani03@gmail.com",
    href: "mailto:olamilekankilani03@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: <FiClock size={20} />,
    label: "Availability",
    value: "Open to opportunities",
    href: "#",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
];

const socials = [
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    href: "https://github.com/kilan080",
    color: "hover:text-white",
  },
  {
    icon: <FiTwitter size={20} />,
    label: "Twitter",
    href: "https://twitter.com/olamie03",
    color: "hover:text-blue-400",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olamilekan-kilani-1197aa313/",
    color: "hover:text-blue-500",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        "service_ga5ovwu",
        "template_92zt6wr",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Portfolio Contact",
          message: form.message,
          to_email: "olamilekankilani03@gmail.com",
        },
        "dPQwyEiLL_d5JcVK3",
      );
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Failed to send message, please try again!!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Contact Me
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Have a project in mind or want to work together? I&apos;d love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info Cards */}
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className={`flex items-center gap-4 p-5 rounded-2xl border ${info.border} ${info.bg} hover:scale-[1.02] transition-transform`}
              >
                <div className={`${info.color} flex-shrink-0`}>{info.icon}</div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">{info.label}</p>
                  <p className="text-white text-sm font-medium">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div className="p-5 rounded-2xl border border-white/5 bg-white/5">
              <p className="text-gray-500 text-xs mb-4 uppercase tracking-widest">
                Find me on
              </p>
              <div className="flex items-center gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`text-gray-400 ${social.color} transition-colors p-2 rounded-lg hover:bg-white/5`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="p-5 rounded-2xl border border-white/5 bg-white/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <p className="text-green-400 text-sm font-medium">
                  Usually responds within 24 hours
                </p>
              </div>
              <p className="text-gray-500 text-sm">
                Feel free to reach out via email or social media. I&apos;m
                always open to discussing new projects and opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/5">
              <h2 className="text-xl font-bold text-white mb-6">
                Send a Message
              </h2>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <FiSend size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Thanks for reaching out. I&apos;ll get back to you as soon
                    as possible.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-xs mb-1.5 block">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder=""
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs mb-1.5 block">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder=""
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-gray-400 text-xs mb-1.5 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, collaboration..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-gray-400 text-xs mb-1.5 block">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
