import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useToast } from "@/hooks/use-toast";

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
      className="relative py-20 md:py-32 px-6 md:px-10 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-500"
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* ── Centered Section Heading ── */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">
            Say Hello
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white leading-tight">
            Get In <span className="text-gray-300 dark:text-gray-600">Touch</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
            <span className="text-gray-400 dark:text-gray-600 text-xs tracking-widest uppercase">
              Open to Work · Freelance · Collaboration
            </span>
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
          </div>
        </motion.div>

        {/* ── Full-Width Centered Contact Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl border p-8 md:p-12 transition-all duration-300 shadow-xl
            ${
              theme === "dark"
                ? "bg-gray-900/90 border-gray-800 shadow-black/40"
                : "bg-white border-gray-100 shadow-indigo-50/70"
            }`}
        >
          {/* Form Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4
                ${
                  theme === "dark"
                    ? "bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"
                    : "bg-indigo-50 border border-indigo-100 text-indigo-500"
                }`}
            >
              <Mail size={22} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Send Me a Message
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
              Have a project, opportunity, or question in mind? Fill out the form below and I'll get back to you promptly.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gray-100 dark:bg-gray-800 mb-8" />

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Name <span className="text-indigo-500">*</span>
                </label>
                <input
                  name="name"
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Email <span className="text-indigo-500">*</span>
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
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Subject <span className="text-indigo-500">*</span>
              </label>
              <input
                name="subject"
                placeholder="What would you like to discuss?"
                required
                value={formData.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Message <span className="text-indigo-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Tell me more about your requirements or inquiry..."
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
              className={`w-full flex items-center justify-center gap-2 px-8 py-4
                rounded-full text-sm font-medium border
                transition-all duration-300 group mt-4 shadow-sm
                disabled:opacity-60 disabled:cursor-not-allowed
                ${
                  theme === "dark"
                    ? "border-gray-700 text-gray-200 hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10 hover:shadow-indigo-500/10"
                    : "border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/70 hover:shadow-indigo-50"
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
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-indigo-500"
                  />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}