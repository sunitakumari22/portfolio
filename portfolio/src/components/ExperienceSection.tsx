import { Briefcase, MapPin, CalendarDays, CheckCircle2, ChevronRight, MoveRight, Layers, Server, Cpu, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

interface PlatformWork {
  title: string;
  category: string;
  badgeColor: string;
  tech: string[];
  points: {
    title: string;
    description: string;
  }[];
}

const platforms: PlatformWork[] = [
  {
    title: "Multi-Tenant Fitness & Wellness Platform (0-to-1 SaaS)",
    category: "0-to-1 SaaS • Distributed Systems",
    badgeColor: "text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30",
    tech: ["Fastify", "Node.js", "PostgreSQL", "React", "WebSockets", "Docker", "RBAC"],
    points: [
      {
        title: "Backend Architecture & Core Engineering",
        description:
          "Owned 100% of the backend engineering from scratch, designing a multi-tenant SaaS architecture with strict tenant data isolation, centralized RBAC, client onboarding, and automated subscription billing.",
      },
      {
        title: "Resilient Tiered Search & AI Pipeline",
        description:
          "Engineered a high-throughput, tiered food-search service querying local PostgreSQL cache, sequentially falling back to 3 external APIs upon cache misses, and integrated an LLM pipeline for structured data extraction with DB persistence.",
      },
      {
        title: "Real-Time Communication & Frontend Integration",
        description:
          "Built a low-latency WebSocket service for live client-to-coach messaging and progress tracking, while contributing to key React frontend dashboards for seamless API integration.",
      },
    ],
  },
  {
    title: "Centralized Email & Notification Infrastructure Platform",
    category: "Microservices Infrastructure • Event-Driven",
    badgeColor: "text-violet-500 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/30",
    tech: ["Node.js", "Express.js", "MongoDB", "Redis (Pub/Sub & Queues)", "Docker", "SMTP"],
    points: [
      {
        title: "Multi-Tenant Messaging Microservice",
        description:
          "Designed a multi-tenant messaging microservice delivering RESTful APIs for transactional emails, OTP dispatch, and bulk batch processing across decoupled tenant applications.",
      },
      {
        title: "Encrypted Credential Management Framework",
        description:
          "Implemented an encrypted credential management framework storing partner SMTP configurations securely and provisioning authenticated API keys for client integrations.",
      },
      {
        title: "Asynchronous Redis Message Queue",
        description:
          "Built an asynchronous Redis-backed message queue to ingest and process high-volume requests with zero data loss.",
      },
    ],
  },
  {
    title: "Enterprise Products & EdTech Suite",
    category: "Enterprise Suite • Client-Facing Discovery",
    badgeColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30",
    tech: ["Angular", "React", "Node.js", "Express.js", "MongoDB", "PrimeNG", "TanStack Query", "Tailwind CSS", "Python"],
    points: [
      {
        title: "NCore Pro University CRM (Angular, PrimeNG)",
        description:
          "Conducted on-site client discovery to map university workflows, then owned Frontend Engineering for core modules—Finance, Examination, and Student Lifecycle—building dynamic forms, RBAC, and billing dashboards.",
      },
      {
        title: "Content & Management System (CMS) (React, Express.js, MongoDB)",
        description:
          "Re-architected a legacy HR module by redesigning system architecture and database schema following direct client consultation. Executed zero-loss data migration and delivered full-stack HR/Placement pipelines supporting 10,000+ daily transactions.",
      },
      {
        title: "School ERP System (React, TanStack Query, Tailwind CSS)",
        description:
          "Architected administrative interfaces optimizing server-state caching with TanStack Query to eliminate duplicate API requests and improve client-side rendering speed.",
      },
      {
        title: "Hotel/Hostel Booking Platform",
        description:
          "Drove on-site stakeholder requirement gathering to architect and deliver an end-to-end booking system handling room inventory allocation, billing workflows, and Easebuzz payment gateway integration.",
      },
      {
        title: "Operational Automation (Python)",
        description:
          "Developed Python automation scripts for document batch compression and operational reporting, cutting manual overhead.",
      },
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA) (Online)",
    institution: "Chandigarh University",
    location: "Chandigarh, India",
    period: "2025 – 2027",
    badge: "Pursuing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Ranchi Women’s College",
    location: "Ranchi, Jharkhand",
    period: "2021 – 2024",
    badge: "Completed",
  },
];

export default function ExperienceSection() {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className="relative py-16 md:py-32 px-6 md:px-10 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-500"
    >
      {/* ── Grid background ── */}
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Centered Section Heading ── */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white leading-tight">
            Professional{" "}
            <span className="text-gray-300 dark:text-gray-600">Experience</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
            <span className="text-gray-400 dark:text-gray-600 text-xs tracking-widest uppercase">
              Multi-Tenant SaaS · Distributed Microservices · High-Throughput APIs
            </span>
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
          </div>
        </motion.div>

        {/* ── Main Company Hero Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`
            rounded-3xl border p-6 md:p-8 mb-10
            transition-all duration-300
            ${
              theme === "dark"
                ? "bg-gray-900/90 border-gray-800 shadow-xl shadow-black/40"
                : "bg-white border-gray-100 shadow-xl shadow-indigo-50/50"
            }
          `}
        >
          {/* Company Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-start md:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-500 dark:text-indigo-400">
                <Briefcase size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                    PyxisBlu Solutions Pvt. Ltd.
                  </h3>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30">
                    Current · Full-Time
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-1 flex-wrap text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Software Engineer
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <MapPin size={13} className="text-gray-400" />
                    Ranchi, Jharkhand
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <CalendarDays size={13} className="text-gray-400" />
                    May 2024 – Present
                  </span>
                </div>
              </div>
            </div>

            <div className="text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/60 px-3.5 py-2 rounded-xl border border-gray-100 dark:border-gray-800 self-start md:self-auto">
              2+ Years Experience · 5+ Enterprise Platforms
            </div>
          </div>

          {/* Key Executive Highlight */}
          <div className="mt-5 p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/80 dark:border-indigo-900/30">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal flex items-start gap-2.5">
              <Sparkles size={16} className="text-indigo-500 mt-0.5 shrink-0" />
              <span>
                <strong className="font-semibold text-gray-900 dark:text-white">Core Impact:</strong>{" "}
                Drove on-site client discovery and full-lifecycle engineering across 5+ enterprise platforms and infrastructure services. Architected 0-to-1 multi-tenant SaaS systems, high-throughput microservices, and AI-assisted data pipelines.
              </span>
            </p>
          </div>
        </motion.div>

        {/* ── Platform Showcase Cards ── */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-3 mb-2">
            <Layers size={18} className="text-indigo-500 dark:text-indigo-400" />
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              Platforms & Infrastructure Delivered at PyxisBlu
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-7">
            {platforms.map((platform, idx) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`
                  rounded-3xl border p-6 md:p-8
                  transition-all duration-300 hover:shadow-lg
                  ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-800 hover:border-indigo-500/40 hover:shadow-indigo-500/5"
                      : "bg-white border-gray-100 hover:border-indigo-200 hover:shadow-indigo-50/80"
                  }
                `}
              >
                {/* Platform Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-gray-100 dark:border-gray-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      {/* <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${platform.badgeColor}`}>
                        {platform.category}
                      </span> */}
                    </div>
                    <h5 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                      {platform.title}
                    </h5>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 max-w-xl">
                    {platform.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium border
                          ${
                            theme === "dark"
                              ? "bg-gray-800/70 border-gray-700/80 text-gray-300"
                              : "bg-gray-50 border-gray-200 text-gray-700"
                          }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements List */}
                <div className="mt-6 space-y-3.5">
                  {platform.points.map((pt, pIdx) => (
                    <motion.div
                      key={pIdx}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: pIdx * 0.05 }}
                      className={`
                        p-4 rounded-2xl border transition-all duration-200
                        ${
                          theme === "dark"
                            ? "bg-gray-800/40 border-gray-800/80 hover:bg-gray-800/70"
                            : "bg-gray-50/70 border-gray-100 hover:bg-indigo-50/30"
                        }
                      `}
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0"
                        />
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                            {pt.title}
                          </p>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                            {pt.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Education Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={20} className="text-indigo-500 dark:text-indigo-400" />
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              Education
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`
                  rounded-2xl border p-5 flex flex-col justify-between
                  transition-all duration-300 hover:shadow-md
                  ${
                    theme === "dark"
                      ? "bg-gray-900 border-gray-800 hover:border-gray-700"
                      : "bg-white border-gray-100 hover:border-indigo-100"
                  }
                `}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-500/30 text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10">
                      {edu.badge}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <h5 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {edu.institution}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                  <MapPin size={12} />
                  <span>{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Download Resume CTA ── */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/images/sunitaResume.pdf"
            download="Sunita_Kumari_Resume.pdf"
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border
              transition-all duration-300 group shadow-sm
              ${
                theme === "dark"
                  ? "border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10 hover:shadow-indigo-500/10"
                  : "border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/70 hover:shadow-indigo-50"
              }`}
          >
            <MoveRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-200 text-indigo-500"
            />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}