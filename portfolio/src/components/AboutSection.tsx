import { useState } from "react";
import { Briefcase, Code, User, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const skills = [
  // Frontend
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "TanStack Query", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "PrimeNG", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },

  // Backend & APIs
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Fastify", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "WebSockets", category: "backend" },
  { name: "API Gateway", category: "backend" },
  { name: "Microservices Architecture", category: "backend" },
  { name: "Python", category: "backend" },

  // Databases & Systems
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis (Pub/Sub & Queues)", category: "database" },
  { name: "Database Optimization", category: "database" },
  { name: "Multi-Tenant SaaS", category: "database" },
  { name: "System Design (HLD/LLD)", category: "database" },
  { name: "Asynchronous Processing", category: "database" },
  { name: "RBAC", category: "database" },
  { name: "Caching", category: "database" },

  // AI & Tooling
  { name: "LLM Integration", category: "tools" },
  { name: "Structured Data Extraction", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Jest", category: "tools" },
  { name: "Razorpay", category: "tools" },
  { name: "Easebuzz", category: "tools" },
  { name: "SMTP", category: "tools" },
];

const cards = [
  {
    icon: User,
    title: "About Me",
    content: (
      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed text-center max-w-4xl mx-auto">
        I'm a passionate{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          Software Engineer
        </span>{" "}
        with 2+ years of experience designing and shipping scalable multi-tenant SaaS platforms, distributed microservices, and enterprise applications using React, TypeScript, Node.js, Fastify, and PostgreSQL. Proven expertise in client-facing requirement discovery, high-throughput API design, asynchronous processing, and relational database tuning. Hands-on experience architecting 0-to-1 systems and integrating AI/LLM data extraction pipelines.
      </p>
    ),
  },
];

type Category = "all" | "frontend" | "backend" | "database" | "tools";
const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend & APIs", value: "backend" },
  { label: "Databases & Architecture", value: "database" },
  { label: "AI & Tooling", value: "tools" },
];

const categoryColor: Record<string, string> = {
  frontend:
    "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/30",
  backend:
    "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/30",
  database:
    "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30",
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
        <div className="grid grid-cols-1 gap-6 mb-20">
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