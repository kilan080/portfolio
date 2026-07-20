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
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
  {
    icon: <FiClock size={20} />,
    label: "Availability",
    value: "Open to opportunities",
    href: "#",
  },
];

const socials = [
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    href: "https://github.com/kilan080",
  },
  {
    icon: <FiTwitter size={20} />,
    label: "Twitter",
    href: "https://twitter.com/olamie03",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olamilekan-kilani-1197aa313/",
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
    <section
      id="contact"
      className="min-h-screen pt-28 pb-20 px-4 sm:px-6 bg-[#F9F6F0]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center text-left"
        >
          <span className="text-[#a39f97] text-xs font-mono uppercase tracking-widest border border-[#111111] px-2 py-1 bg-[#F9F6F0] brutalist-shadow">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#111111] mt-6 mb-4 tracking-tighter uppercase">
            Contact Me
          </h2>
          <p className="md:flex md:items-center md:justify-center md:text-center text-[#111111] max-w-xl text-sm font-mono mx-auto">
            HAVE A PROJECT IN MIND OR WANT TO WORK TOGETHER? I&apos;D LOVE TO
            HEAR FROM YOU.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info Cards */}
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-6 p-6 border border-[#111111] bg-[#F9F6F0] transition-transform hover:-translate-y-1 brutalist-shadow group"
              >
                <div className="text-[#111111] group-hover:text-[#a39f97] transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-[#111111] text-[10px] font-mono tracking-widest uppercase mb-1">
                    {info.label}
                  </p>
                  <p className="text-[#111111] text-sm font-bold">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div className="p-6 border border-[#111111] bg-[#F9F6F0] brutalist-shadow mt-4">
              <p className="text-[rgb(17,17,17)] text-[10px] font-mono mb-6 uppercase tracking-widest  pb-4">
                Find me on
              </p>
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
            </div>

            {/* Response time */}
            <div className="p-6 border border-[#111111] bg-[#F9F6F0] brutalist-shadow mt-4">
              <div className="flex items-center gap-3 mb-4 border-[#111111] pb-4">
                <span className="w-2 h-2 bg-[#111111] animate-pulse" />
                <p className="text-[#111111] text-xs font-mono uppercase tracking-widest font-bold">
                  Usually responds within 24 hours
                </p>
              </div>
              <p className="text-[#111111] text-xs font-mono leading-relaxed">
                FEEL FREE TO REACH OUT VIA EMAIL OR SOCIAL MEDIA. I&apos;M
                ALWAYS OPEN TO DISCUSSING NEW PROJECTS AND OPPORTUNITIES.
              </p>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-6 mt-6 sm:p-10 border border-[#111111] bg-[#F9F6F0] brutalist-shadow">
              <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tighter pb-6 mb-6">
                Send a Message
              </h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 border border-[#111111] flex items-center justify-center mb-6 brutalist-shadow bg-[#F9F6F0]">
                    <FiSend size={32} className="text-[#111111]" />
                  </div>
                  <h4 className="text-2xl font-black text-[#111111] uppercase tracking-tighter mb-4">
                    Message Sent
                  </h4>
                  <p className="text-[#111111] text-xs font-mono uppercase tracking-widest mb-10 max-w-sm">
                    THANKS FOR REACHING OUT. I&apos;LL GET BACK TO YOU AS SOON
                    AS POSSIBLE.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-8 py-4 bg-[#111111] text-[#F9F6F0] font-mono text-xs uppercase tracking-widest border border-[#111111] transition-transform hover:-translate-y-1 brutalist-shadow"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {error && (
                    <div className="p-4 border border-[#111111] bg-[#F9F6F0] text-[#111111] text-xs font-mono uppercase font-bold brutalist-shadow">
                      {error}
                    </div>
                  )}

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[#111111] text-[10px] font-mono uppercase tracking-widest mb-2 block font-bold">
                        Name <span className="text-[#111111]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F9F6F0] border border-[#111111] text-[#111111] text-sm focus:outline-none focus:ring-1 focus:ring-[#111111] transition-shadow hover:shadow-[2px_2px_0px_#111111] focus:shadow-[2px_2px_0px_#111111]"
                      />
                    </div>
                    <div>
                      <label className="text-[#111111] text-[10px] font-mono uppercase tracking-widest mb-2 block font-bold">
                        Email <span className="text-[#111111]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F9F6F0] border border-[#111111] text-[#111111] text-sm focus:outline-none focus:ring-1 focus:ring-[#111111] transition-shadow hover:shadow-[2px_2px_0px_#111111] focus:shadow-[2px_2px_0px_#111111]"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-[#111111] text-[10px] font-mono uppercase tracking-widest mb-2 block font-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F9F6F0] border border-[#111111] text-[#111111] text-sm focus:outline-none focus:ring-1 focus:ring-[#111111] transition-shadow hover:shadow-[2px_2px_0px_#111111] focus:shadow-[2px_2px_0px_#111111]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-[#111111] text-[10px] font-mono uppercase tracking-widest mb-2 block font-bold">
                      Message <span className="text-[#111111]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-[#F9F6F0] border border-[#111111] text-[#111111] text-sm focus:outline-none focus:ring-1 focus:ring-[#111111] transition-shadow hover:shadow-[2px_2px_0px_#111111] focus:shadow-[2px_2px_0px_#111111] resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#111111] text-[#F9F6F0] font-mono text-xs tracking-widest uppercase border border-[#111111] transition-transform hover:-translate-y-1 brutalist-shadow mt-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border border-t-[#111111] border-[#F9F6F0] rounded-full animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        SEND MESSAGE
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
