
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A responsive admin dashboard for an e-commerce platform with analytics, user management, and inventory tracking features.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    category: "web"
  },
  {
    id: 2,
    title: "Financial App UI",
    description: "A modern UI design for a financial application with transaction history, budget tracking, and investment insights.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tags: ["Angular", "PrimeNG", "Chart.js"],
    liveLink: "#",
    githubLink: "#",
    category: "web"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates, assignee tracking, and deadline management features.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "Node.js", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
    category: "fullstack"
  },
  {
    id: 4,
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers and designers to showcase their work and skills effectively.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "#",
    category: "web"
  }
];

type Category = "all" | "web" | "fullstack" | "mobile";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button 
            className={`skill-badge ${activeCategory === "all" ? "skill-badge-active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All Projects
          </button>
          <button 
            className={`skill-badge ${activeCategory === "web" ? "skill-badge-active" : ""}`}
            onClick={() => setActiveCategory("web")}
          >
            Web Development
          </button>
          <button 
            className={`skill-badge ${activeCategory === "fullstack" ? "skill-badge-active" : ""}`}
            onClick={() => setActiveCategory("fullstack")}
          >
            Fullstack
          </button>
          <button 
            className={`skill-badge ${activeCategory === "mobile" ? "skill-badge-active" : ""}`}
            onClick={() => setActiveCategory("mobile")}
          >
            Mobile Apps
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover border border-border/40">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-secondary/30 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github size={16} /> GitHub
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    Demo <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="group">
            <a href="#" className="inline-flex items-center gap-2">
              View All Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
