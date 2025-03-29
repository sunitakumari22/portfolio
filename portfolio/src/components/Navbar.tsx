
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavLink = ({ href, title, onClick }: { href: string; title: string; onClick?: () => void }) => (
  <li>
    <a 
      href={href} 
      className="nav-link"
      onClick={onClick}
    >
      {title}
    </a>
  </li>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container-custom">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Sunita <span className="text-primary">Kumari</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <NavLink href="#home" title="Home" />
            <NavLink href="#about" title="About" />
            <NavLink href="#projects" title="Projects" />
            <NavLink href="#experience" title="Experience" />
            <NavLink href="#contact" title="Contact" />
            <li><ThemeToggle /></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-sm md:hidden">
              <ul className="flex flex-col py-4 px-6 space-y-4">
                <NavLink href="#home" title="Home" onClick={closeMenu} />
                <NavLink href="#about" title="About" onClick={closeMenu} />
                <NavLink href="#projects" title="Projects" onClick={closeMenu} />
                <NavLink href="#experience" title="Experience" onClick={closeMenu} />
                <NavLink href="#contact" title="Contact" onClick={closeMenu} />
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
