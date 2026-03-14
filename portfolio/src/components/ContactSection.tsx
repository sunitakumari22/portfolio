import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  {
    icon: Mail,
    label: "Email Me",
    value: "officialsunita1606@gmail.com",
    href: "mailto:officialsunita1606@gmail.com",
    badgeColor:
      "bg-indigo-50 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/20 text-indigo-500 dark:text-indigo-400",
    hoverBorder: "hover:border-indigo-200 dark:hover:border-indigo-500/40",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sunitakumari22",
    href: "https://github.com/sunitakumari22",
    badgeColor:
      "bg-violet-50 dark:bg-violet-500/10 border-violet-100 dark:border-violet-500/20 text-violet-500 dark:text-violet-400",
    hoverBorder: "hover:border-violet-200 dark:hover:border-violet-500/40",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sunita-kumari1606",
    href: "https://linkedin.com/in/sunita-kumari1606",
    badgeColor:
      "bg-sky-50 dark:bg-sky-500/10 border-sky-100 dark:border-sky-500/20 text-sky-500 dark:text-sky-400",
    hoverBorder: "hover:border-sky-200 dark:hover:border-sky-500/40",
  },
];

export default function ContactSection() {
  const { theme } = useTheme();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/portfolio/Messages",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error("Failed to send message");
      const result = await response.json();
      toast({
        title: "Message sent!",
        description:
          result.message ||
          "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // shared input classes
  const inputClass = `w-full px-4 py-3 rounded-xl text-sm border outline-none
    transition-all duration-200
    bg-gray-50 dark:bg-gray-800
    text-gray-800 dark:text-gray-100
    placeholder:text-gray-400 dark:placeholder:text-gray-600
    focus:ring-2 focus:ring-indigo-400/40 dark:focus:ring-indigo-500/30
    ${
      theme === "dark"
        ? "border-gray-700 focus:border-indigo-500"
        : "border-gray-200 focus:border-indigo-400"
    }`;

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-500"
    >
      {/* ── Grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            theme === "dark"
              ? `linear-gradient(to right, rgba(99,102,241,0.05) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(99,102,241,0.05) 1px, transparent 1px)`
              : `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {theme === "dark" && (
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Centered Section Heading ── */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">
            Say Hello
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white leading-tight">
            Get In{" "}
            <span className="text-gray-300 dark:text-gray-600">Touch</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
            <span className="text-gray-400 dark:text-gray-600 text-xs tracking-widest uppercase">
              Open to Work · Freelance · Collaborate
            </span>
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Left — Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Info card */}
            <div
              className={`rounded-2xl border p-6 transition-all duration-300
                ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-100"
                }`}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4
                  ${
                    theme === "dark"
                      ? "bg-indigo-500/10 border border-indigo-500/20"
                      : "bg-indigo-50 border border-indigo-100"
                  }`}
              >
                <Send size={18} className="text-indigo-500 dark:text-indigo-400" />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Let's Collaborate
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                I'm currently available for freelance work and open to full-time
                opportunities. Feel free to reach out — I'll respond within{" "}
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  24 hours
                </span>
                .
              </p>
            </div>

            {/* Contact link cards */}
            <div className="flex flex-col gap-3">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-2xl border
                      transition-all duration-300 group
                      hover:shadow-md hover:-translate-y-0.5
                      ${link.hoverBorder}
                      ${
                        theme === "dark"
                          ? "bg-gray-900 border-gray-800 hover:shadow-indigo-500/10"
                          : "bg-white border-gray-100 hover:shadow-gray-100"
                      }`}
                  >
                    {/* Icon bubble */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border
                        transition-transform duration-300 group-hover:scale-110
                        ${link.badgeColor}`}
                    >
                      <Icon size={17} />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {link.label}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 truncate">
                        {link.value}
                      </span>
                    </div>

                    {/* Arrow indicator */}
                    <div className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center
                          ${
                            theme === "dark"
                              ? "bg-gray-800 text-gray-400"
                              : "bg-gray-100 text-gray-500"
                          }`}
                      >
                        <Send size={10} />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right — Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl border p-6 md:p-8 transition-all duration-300
              ${
                theme === "dark"
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-gray-100"
              }`}
          >
            {/* Form header */}
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4
                ${
                  theme === "dark"
                    ? "bg-indigo-500/10 border border-indigo-500/20"
                    : "bg-indigo-50 border border-indigo-100"
                }`}
            >
              <Mail size={18} className="text-indigo-500 dark:text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
              Send Me a Message
            </h3>
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
              Fill out the form and I'll get back to you soon.
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-gray-100 dark:bg-gray-800 mb-6" />

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    Email <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  Subject <span className="text-indigo-400">*</span>
                </label>
                <input
                  name="subject"
                  placeholder="How can I help you?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  Message <span className="text-indigo-400">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5
                  rounded-full text-sm font-medium border
                  transition-all duration-300 group mt-2
                  disabled:opacity-60 disabled:cursor-not-allowed
                  ${
                    theme === "dark"
                      ? "border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10"
                      : "border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send
                      size={15}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}