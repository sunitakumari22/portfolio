import { Github, Linkedin, Mail, ArrowDown, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white dark:bg-gray-950 px-6 md:px-10 transition-colors duration-500"
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: theme === "dark"
            ? `linear-gradient(to right, rgba(99,102,241,0.08) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(99,102,241,0.08) 1px, transparent 1px)`
            : `linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal SVG lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[0, -10, 10, -20, 20].map((offset, i) => (
          <line
            key={i}
            x1={`${offset}%`}
            y1="100%"
            x2={`${100 + offset}%`}
            y2="0"
            stroke={theme === "dark" ? "rgba(99,102,241,0.08)" : "rgba(0,0,0,0.04)"}
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Dark mode glow orbs */}
      {theme === "dark" && (
        <>
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      {/* ── Floating Social Bubbles ── */}
      {/* LinkedIn */}
      <motion.a
        href="https://linkedin.com/in/sunita-kumari1606"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        className="absolute left-[6%] top-[54%] z-20 w-11 h-11 rounded-full bg-[#0077B5] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
        style={{ animation: "float 5s ease-in-out infinite" }}
      >
        <Linkedin size={18} className="text-white" />
      </motion.a>

      {/* Gmail */}
      <motion.a
        href="mailto:officialsunita1606@gmail.com"
        title="Email"
        className={`absolute right-[12%] top-[42%] z-20 w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform
          ${theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        style={{ animation: "float 4s ease-in-out infinite 0.5s" }}
      >
        <Mail size={18} className="text-red-500" />
      </motion.a>

      {/* GitHub */}
      <motion.a
        href="https://github.com/sunitakumari22"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        className={`absolute right-[6%] top-[24%] z-20 w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform
          ${theme === "dark" ? "bg-white" : "bg-gray-900"}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        style={{ animation: "float 6s ease-in-out infinite 1s" }}
      >
        <Github size={18} className={theme === "dark" ? "text-gray-900" : "text-white"} />
      </motion.a>

      {/* Twitter */}
      <motion.a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
        className="absolute left-[14%] top-[22%] z-20 w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.4 }}
        style={{ animation: "float 5.5s ease-in-out infinite 0.8s" }}
      >
        <Twitter size={16} className="text-white" />
      </motion.a>

      {/* Pink blob */}
      <motion.div
        className="absolute right-[28%] top-[18%] z-20 w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-md pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        style={{ animation: "float 4s ease-in-out infinite" }}
      />

      {/* Ring */}
      <motion.div
        className={`absolute right-[3%] bottom-[28%] z-20 w-8 h-8 rounded-full border-2 pointer-events-none
          ${theme === "dark" ? "border-indigo-500/40" : "border-gray-300"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.4 }}
      />

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-24 pb-16">

        {/* Small name label */}
        <motion.p
          className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sunita Kumari
        </motion.p>

        {/* Giant title */}
        <motion.h1
          className="text-[13vw] md:text-[11vw] lg:text-[10vw] font-light leading-[0.9] tracking-tight text-gray-900 dark:text-white transition-colors duration-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="block">Software</span>
          <span className="block text-right md:pl-16 text-gray-400 dark:text-gray-500">
            Developer
          </span>
        </motion.h1>

      
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-gray-400 dark:text-gray-600 text-xs tracking-widest uppercase">
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} className="text-gray-400 dark:text-gray-600" />
        </motion.div>
      </motion.div>

      {/* Float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}