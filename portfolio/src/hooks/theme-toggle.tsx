import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none
        ${theme === "dark"
          ? "bg-indigo-600"
          : "bg-gray-200"
        }
      `}
    >
      {/* Sliding knob */}
      <motion.div
        layout
        animate={{ x: theme === "dark" ? 28 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`
          absolute top-[3px] w-[22px] h-[22px] rounded-full flex items-center justify-center shadow-md
          ${theme === "dark" ? "bg-white" : "bg-white"}
        `}
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={12} className="text-indigo-600" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={12} className="text-amber-500" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Label icons on track */}
      <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <Sun size={10} className={`transition-opacity ${theme === "light" ? "opacity-0" : "opacity-40"} text-white`} />
      </span>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <Moon size={10} className={`transition-opacity ${theme === "dark" ? "opacity-0" : "opacity-40"} text-gray-500`} />
      </span>
    </button>
  );
}