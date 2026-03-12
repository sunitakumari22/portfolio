import { useState } from "react";
import { Briefcase, Code, User, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const skills = [
  { name: "Angular", category: "frontend" },
  { name: "PrimeNG", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "ASP.NET", category: "backend" },
  { name: "RESTful APIs", category: "tools" },
];

const cards = [
  {
    icon: User,
    title: "About Me",
    content: (
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed text-center">
        I'm a passionate{" "}
        <span className="font-semibold text-gray-700 dark:text-gray-200">
          Software Developer
        </span>{" "}
         with 2+ years of experience building scalable enterprise web applications using Angular,React
and TypeScript. Skilled in developing reusable UI components, optimizing frontend performance, and creating
responsive and accessible user interfaces. Experienced in collaborating with Agile teams to deliver production-ready
applications and improve user experience through modern frontend architecture.
      </p>
    ),
  },
  {
    icon: Code,
    title: "My Expertise",
    content: (
      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-3 w-full mt-1">
        {[
          {
            label: "Frontend",
            value: "Angular, React, TypeScript, PrimeNG, HTML5, CSS3, Tailwind CSS",
            color: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
          },
          {
            label: "Backend",
            value: "Node.js, Express.js, RESTful APIs, ASP.NET",
            color: "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400",
          },
          {
            label: "Database",
            value: "MongoDB, MySQL",
            color: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
          },
          {
            label: "Languages",
            value: "JavaScript, TypeScript, Python, Java",
            color: "bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400",
          },
        ].map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <span
              className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full w-fit ${item.color}`}
            >
              {item.label}
            </span>
            <span className="text-xs leading-relaxed pl-1">{item.value}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Briefcase,
    title: "Experience",
    content: (
      <div className="text-sm text-gray-500 dark:text-gray-400 space-y-4 w-full mt-1">
        {/* Current */}
        <div className="relative pl-3 border-l-2 border-indigo-400 dark:border-indigo-500">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded-full">
              Current
            </span>
          </div>
          <p className="font-semibold text-gray-700 dark:text-gray-200 text-sm">
            Frontend Developer
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mt-0.5">
            <MapPin size={10} />
            <span>Pyxis Blu Infotech</span>
          </div>
          <p className="text-xs mt-1 leading-relaxed">
            Building modern, scalable web applications using Angular, React,
            Node.js, and MongoDB.
          </p>
        </div>

        <div className="h-px w-full bg-gray-100 dark:bg-gray-800" />

        {/* Previous */}
        <div className="relative pl-3 border-l-2 border-violet-400 dark:border-violet-500">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 px-2 py-0.5 rounded-full">
              Internship
            </span>
          </div>
          <p className="font-semibold text-gray-700 dark:text-gray-200 text-sm">
            Software Developer Intern
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mt-0.5">
            <MapPin size={10} />
            <span>Dzinex Technologies, Ranchi</span>
          </div>
          <p className="text-xs mt-1 leading-relaxed">
            Worked on full stack web development projects using the MERN stack.
          </p>
        </div>
      </div>
    ),
  },
];

type Category = "all" | "frontend" | "backend" | "tools";
const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Tools", value: "tools" },
];

const categoryColor: Record<string, string> = {
  frontend:
    "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/30",
  backend:
    "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/30",
  tools:
    "bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-500/30",
};

export default function AboutSection() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-500"
    >
      {/* Grid background */}
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── CENTERED Section Heading ── */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">
            Who I am
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white leading-tight">
            About{" "}
            <span className="text-gray-300 dark:text-gray-600">Me</span>
          </h2>
          {/* Centered divider */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
            <span className="text-gray-400 dark:text-gray-600 text-xs tracking-widest uppercase">
              Developer 
            </span>
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
          </div>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`
                  rounded-2xl border p-6 flex flex-col items-center gap-4 group
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                  ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-800 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
                      : "bg-white border-gray-100 hover:border-indigo-200 hover:shadow-indigo-50"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center
                  ${
                    theme === "dark"
                      ? "bg-indigo-500/10 border border-indigo-500/20"
                      : "bg-indigo-50 border border-indigo-100"
                  }`}
                >
                  <Icon size={18} className="text-indigo-500 dark:text-indigo-400" />
                </div>

                {/* Title — centered */}
                <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 text-center">
                  {card.title}
                </h3>

                {/* Content */}
                <div className="w-full">{card.content}</div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Skills ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Skills heading — centered */}
          <div className="flex flex-col items-center gap-4 mb-8 text-center">
            <div>
              <p className="text-sm font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-2">
                Tech Stack
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white">
                My Skills
              </h3>
            </div>

            {/* Filter pills — centered */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
                    ${
                      activeCategory === cat.value
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white"
                        : theme === "dark"
                        ? "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-gray-200"
                        : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
                    }`}
                >
                  {cat.label}
                  <span
                    className={`ml-1.5 text-xs ${
                      activeCategory === cat.value
                        ? "opacity-60"
                        : "opacity-40"
                    }`}
                  >
                    {cat.value === "all"
                      ? skills.length
                      : skills.filter((s) => s.category === cat.value).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Skill tags — centered */}
          <motion.div layout className="flex flex-wrap justify-center gap-2.5">
            {filteredSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium border
                  transition-all duration-200 hover:scale-105 cursor-default
                  ${categoryColor[skill.category]}
                `}
              >
                {skill.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Skill count — centered */}
          <p className="text-xs text-gray-400 dark:text-gray-600 mt-6 tracking-wide text-center">
            Showing{" "}
            <span className="font-medium text-gray-500 dark:text-gray-500">
              {filteredSkills.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-gray-500 dark:text-gray-500">
              {skills.length}
            </span>{" "}
            skills
          </p>
        </motion.div>
      </div>
    </section>
  );
}