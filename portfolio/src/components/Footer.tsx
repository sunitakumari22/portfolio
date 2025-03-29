
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              Sunita <span className="text-primary">Kumari</span>
            </h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@sunitakumari.com" 
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-muted-foreground text-sm">
            &copy; {currentYear} Sunita Kumari. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
