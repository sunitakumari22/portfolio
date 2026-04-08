import { Briefcase, MapPin, CalendarDays, CheckCircle, ChevronRight, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const experiences = [
  {
    id: 1,
    company: "Pyxis Blu Infotech",
    role: "Frontend Developer",
    period: "May 2024 - Present",
    badge: "Current",
    badgeColor:
      "text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30",
    borderColor: "border-indigo-400 dark:border-indigo-500",
    iconColor:
      "bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-500 dark:text-indigo-400",
    description:
      "Frontend Engineer with 2+ years of experience building scalable enterprise web applications using Angular,React and TypeScript. Skilled in developing reusable UI components, optimizing frontend performance, and creating responsive and accessible user interfaces. Experienced in collaborating with Agile teams to deliver production-ready applications and improve user experience through modern frontend architecture.",
    responsibilities: [
  "Developed multiple modules for a university CRM system using Angular 18, including Examination Reports, Finance Transactions, and the complete Student Master module for both Admin and Student interfaces",
  
  "Designed and implemented reporting and transaction workflows by integrating RESTful APIs, enabling efficient management of academic records and financial operations",
  
  "Handled production deployments and resolved critical issues during release cycles, ensuring system stability and smooth functioning across examination and student management modules",
  
  "Built a Hostel and Hotel Management System using React, focusing on clean UI design and role-based workflows to enhance user experience",
  
  "Developed modular and reusable frontend architecture using Angular generic components and React Hooks, improving code maintainability and reducing duplication across multiple modules",
  
  "Implemented responsive and accessible user interfaces following modern UI/UX standards, ensuring cross-device compatibility and usability",
  
  "Optimized frontend performance using lazy loading, modular architecture, and efficient API data handling, improving application speed and scalability",
  
  "Independently developed and managed HR Management and Placement modules (Frontend + Backend), demonstrating end-to-end ownership",
  
  "Maintained and enhanced PyxisBlu official website (Next.js) and SBPS website (React), handling performance optimization, content updates, and responsive UI improvements",
  
  "Acted as Task Board Owner and Stand-up Lead, managing sprint planning, tracking tasks, and facilitating Agile ceremonies for efficient team collaboration"
]
  },
  {
    id: 2,
    company: "Dzinex Technologies",
    role: "Software Developer Intern",
    period: "April 2023 - Sept 2023",
    badge: "Internship",
    badgeColor:
      "text-violet-500 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/30",
    borderColor: "border-violet-400 dark:border-violet-500",
    iconColor:
      "bg-violet-50 dark:bg-violet-500/10 border border-violet-100 dark:border-violet-500/20 text-violet-500 dark:text-violet-400",
    description:
      "Worked on full stack web development projects using the MERN stack with a focus on responsive design and cross-browser compatibility.",
    responsibilities: [
      "Built responsive web applications using HTML5, CSS3, JavaScript, and React for multiple client projects",
      "Developed RESTful APIs using Node.js and Express.js, integrated with MongoDB for data persistence",
      "Implemented responsive UI designs using CSS Flexbox and Grid, ensuring compatibility across all major browsers",
      "Collaborated with a team of developers in an Agile environment, participating in daily standups and sprint reviews",
      "Wrote clean, maintainable code following best practices and contributed to code reviews",
    ],
  },
];

export default function ExperienceSection() {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className="relative py-10 md:py-32 px-6 md:px-10 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-500"
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
          className="mb-16 text-center"
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
              Growth · Impact · Expertise
            </span>
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
          </div>
        </motion.div>

        {/* ── Experience Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`
                rounded-2xl border p-6 flex flex-col gap-5 group
                transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-800 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
                    : "bg-white border-gray-100 hover:border-indigo-200 hover:shadow-indigo-50"
                }
              `}
            >
              {/* ── Card Header ── */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${exp.iconColor}`}
                  >
                    <Briefcase size={18} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 leading-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-gray-400 dark:text-gray-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Badge + Period */}
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}
                  >
                    {exp.badge}
                  </span>
                  <div className="flex items-center gap-1">
                    <CalendarDays size={11} className="text-gray-400 dark:text-gray-500" />
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Divider ── */}
              <div className="h-px w-full bg-gray-100 dark:bg-gray-800" />

              {/* ── Description ── */}
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {exp.description}
              </p>

              {/* ── Responsibilities ── */}
              <div
                className={`rounded-xl p-4 border-l-2 ${exp.borderColor}
                  ${
                    theme === "dark"
                      ? "bg-gray-800/50"
                      : "bg-gray-50"
                  }
                `}
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle
                    size={14}
                    className="text-emerald-500 dark:text-emerald-400 shrink-0"
                  />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-300">
                    Key Responsibilities
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <ChevronRight
                        size={14}
                        className="text-indigo-400 dark:text-indigo-500 mt-0.5 shrink-0"
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Download Resume CTA ── */}
<motion.div
  className="text-center mt-14"
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <a
    href="/sunita'sResume.pdf"
    download="Sunita_Kumari_Resume.pdf"
    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border
      transition-all duration-300 group
      ${
        theme === "dark"
          ? "border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10"
          : "border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50"
      }`}
  >
    <MoveRight
      size={15}
      className="group-hover:translate-x-1 transition-transform duration-200"
    />
    Download Full Resume
  </a>
</motion.div>
      </div>
    </section>
  );
}