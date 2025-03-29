
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-16 md:py-40 min-h-screen flex items-center relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in [animation-delay:200ms]">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Sunita Kumari
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              UI Developer at Pyxis Blu Infotech
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I craft beautiful, responsive, and user-friendly interfaces with modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in-right [animation-delay:400ms]">
            <div className="w-full h-[400px] bg-gradient-to-tr from-primary/20 to-secondary/30 rounded-full blur-3xl absolute -top-10 -right-10 -z-10"></div>
            <div className="bg-gradient-to-tr from-primary to-secondary rounded-full p-1 shadow-xl">
              <div className="bg-background rounded-full p-2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Sunita Kumari" 
                  className="rounded-full w-full h-full object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex"
      >
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowDown />
        </Button>
      </a>
    </section>
  );
}
