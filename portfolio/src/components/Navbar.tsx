import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const NavLink = ({
  href,
  title,
  onClick,
}: {
  href: string;
  title: string;
  onClick?: () => void;
}) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 relative group"
    >
      {title}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-900 dark:bg-white group-hover:w-full transition-all duration-300" />
    </a>
  </li>
);

export default function Navbar({ onAiClick }: { onAiClick?: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm shadow-sm py-3 border-b border-gray-100 dark:border-gray-800"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 dark:text-gray-100 tracking-wide hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Sunita Kumari
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-7">
            <NavLink href="#about" title="About me" />
            <NavLink href="#experience" title="Experience" />
            <NavLink href="#contact" title="Contact" />

            {/* LinkedIn Direct Button */}
            <li>
              <a
                href="https://linkedin.com/in/sunita-kumari1606"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-blue-600/30 dark:border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-500/10 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 shadow-sm"
              >
                <Linkedin size={13} />
                <span>LinkedIn</span>
              </a>
            </li>

            {/* Theme Toggle (Instant Light / Dark switch) */}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile: AI + theme + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onAiClick}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium
                bg-gradient-to-r from-indigo-500/10 to-violet-500/10
                border border-indigo-400/30 dark:border-indigo-500/40
                text-indigo-600 dark:text-indigo-400
                hover:from-indigo-500/20 hover:to-violet-500/20
                transition-all duration-200"
            >
              <Sparkles size={12} />
              AI
            </button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-md md:hidden border-t border-gray-100 dark:border-gray-800"
          >
            <ul className="flex flex-col py-5 px-6 space-y-4">
              <NavLink href="#home" title="Home" onClick={closeMenu} />
              <NavLink href="#about" title="About me" onClick={closeMenu} />
              <NavLink href="#experience" title="Experience" onClick={closeMenu} />
              <NavLink href="#contact" title="Contact" onClick={closeMenu} />
              <li className="pt-2 border-t border-gray-100 dark:border-gray-800">
                <a
                  href="https://linkedin.com/in/sunita-kumari1606"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}