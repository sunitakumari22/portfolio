import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const projects = [
  {
    id: 1,
    title: "Just Talk",
    description:
      "Built a video calling and audio calling platform using React, Node.js, MongoDB, TypeScript, Express.js, and Zego Cloud to connect users randomly for real-time video and audio chats, with user login and room-based interaction.",
    image: "/images/justtalk.png",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    liveLink: "https://justtalkin.vercel.app/",
    githubLink: "https://github.com/sunitakumari22/justTalk",
    category: "web",
  },
  {
    id: 2,
    title: "Siya Tech",
    description:
      "Developed 'Siya Technology' – a responsive web application for an educational institute, featuring course listings, contact forms, and a clean modern UI.",
    image: "/images/siyaTech.png",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    liveLink: "https://siya-technologies.vercel.app/",
    githubLink: "https://github.com/sunitakumari22/siyaTechnologies",
    category: "web",
  },
  // {
  //   id: 3,
  //   title: "Easy Find",
  //   description: "Developed a responsive local business directory website named Easy Find, inspired by Justdial, allowing users to search, filter, and contact service providers across various categories.",
  //   image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  //   tags: ["Angular", "Node.js", "MongoDB", "Express.js", "PrimeNG"],
  //   liveLink: "#",
  //   githubLink: "https://github.com/sunitakumari22/Easyfind",
  //   category: "fullstack",
  // },
  // {
  //   id: 4,
  //   title: "DevNest",
  //   description: "DevNest is a developer-centric platform to store, manage, and showcase both public and private projects and APIs.",
  //   image: "/images/devnest.png",
  //   tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  //   liveLink: "https://devnestpreview.vercel.app/",
  //   githubLink: "#",
  //   category: "web",
  // },
];

type Category = "all" | "web" | "fullstack" | "mobile";

const categories: { label: string; value: Category; count?: number }[] = [
  { label: "All Projects", value: "all" },
  { label: "Web Dev", value: "web" },
  { label: "Fullstack", value: "fullstack" },
  { label: "Mobile Apps", value: "mobile" },
];

const tagColor: Record<string, string> = {
  React:
    "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/30",
  TypeScript:
    "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30",
  "Node.js":
    "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30",
  MongoDB:
    "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/30",
  Angular:
    "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/30",
  "Express.js":
    "bg-gray-50 dark:bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-500/30",
  "Tailwind CSS":
    "bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-500/30",
  PrimeNG:
    "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/30",
  default:
    "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/30",
};

export default function ProjectsSection() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-500"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            theme === "dark"
              ? `linear-gradient(to right, rgba(99,102,241,0.04) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(99,102,241,0.04) 1px, transparent 1px)`
              : `linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {theme === "dark" && (
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
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
            What I've built
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white leading-tight">
            My{" "}
            <span className="text-gray-300 dark:text-gray-600">Projects</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
            <span className="text-gray-400 dark:text-gray-600 text-xs tracking-widest uppercase">
              Live · Open Source · Real World
            </span>
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
          </div>
        </motion.div>

        {/* ── Category Filter ── */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => {
            const count =
              cat.value === "all"
                ? projects.length
                : projects.filter((p) => p.category === cat.value).length;
            return (
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
                    activeCategory === cat.value ? "opacity-60" : "opacity-40"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Project Cards Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredProjects.length === 0 ? (
              <div className="col-span-2 text-center py-20 text-gray-400 dark:text-gray-600">
                <p className="text-lg font-light">No projects in this category yet.</p>
                <p className="text-sm mt-2 opacity-60">Check back soon!</p>
              </div>
            ) : (
              filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`
                    group rounded-2xl border overflow-hidden
                    transition-all duration-300
                    hover:shadow-xl hover:-translate-y-1
                    ${
                      theme === "dark"
                        ? "bg-gray-900 border-gray-800 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
                        : "bg-white border-gray-100 hover:border-indigo-200 hover:shadow-indigo-50"
                    }
                  `}
                >
                  {/* ── Image ── */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center gap-3
                        bg-black/50 backdrop-blur-sm
                        transition-opacity duration-300
                        ${hoveredId === project.id ? "opacity-100" : "opacity-0"}`}
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition-colors"
                      >
                        <Github size={14} />
                        Code
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-600 border border-indigo-500 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* ── Content ── */}
                  <div className="p-6">
                    {/* Title row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                        {project.title}
                      </h3>
                      {/* Quick link icon */}
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
                          ${
                            theme === "dark"
                              ? "text-gray-500 hover:text-indigo-400 hover:bg-indigo-500/10"
                              : "text-gray-400 hover:text-indigo-600 hover:bg-indigo-50"
                          }`}
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`text-xs font-medium px-3 py-1 rounded-full border transition-all duration-200 hover:scale-105 cursor-default
                            ${tagColor[tag] ?? tagColor.default}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-gray-100 dark:bg-gray-800 mb-4" />

                    {/* Footer buttons */}
                    <div className="flex items-center justify-between">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-sm font-medium transition-colors
                          ${
                            theme === "dark"
                              ? "text-gray-400 hover:text-white"
                              : "text-gray-500 hover:text-gray-900"
                          }`}
                      >
                        <Github size={15} />
                        View Code
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                      >
                        Live Demo
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── View All button ── */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/sunitakumari22"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border
              transition-all duration-300 group
              ${
                theme === "dark"
                  ? "border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10"
                  : "border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50"
              }`}
          >
            <Github size={15} />
            View All on GitHub
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}