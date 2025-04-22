
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, User } from "lucide-react";

const skills = [
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "PrimeNG", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "ASP.NET", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "RESTful APIs", category: "tools" },
];



type Category = "all" | "frontend" | "backend" | "tools";

export default function AboutSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">About Me</h3>
              <p className="text-muted-foreground">
                I'm a passionate <strong>MEAN & MERN Stack Developer</strong> with expertise in building dynamic and scalable web applications.
                Currently, I work at <strong>Pyxis Blu Infotech</strong>, where I develop high-performance solutions using <strong>MongoDB, Express.js, Angular, and Node.js</strong>.
                I have a strong foundation in <strong>JavaScript, TypeScript, HTML, CSS, and PrimeNG</strong>
              </p>

            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">My Expertise</h3>

              <ul className="text-muted-foreground list-disc pl-5 mt-2 space-y-1">
                <li><strong>Frontend Development:</strong>  <strong>Angular,React, TypeScript, HTML, CSS, and PrimeNG</strong>.</li>
                <li><strong>Backend Development:</strong> <strong>Node.js, Express.js, and RESTful APIs</strong>.</li>
                <li><strong>Database Management:</strong> <strong>MongoDB</strong></li>

              </ul>


            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">
                Currently working as a UI Developer at Pyxis Blu Infotech, with a focus on building modern web applications.
              </p>
              <p className="text-muted-foreground">
                i also worked as intern of  Full Stack Development in Dzinex technologies Ranchi.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              I'm Sunita Kumari, a dedicated <strong>MEAN & MERN Stack Developer</strong> with a passion for building scalable and high-performance web applications.
              Currently working at <strong>Pyxis Blu Infotech</strong>, I specialize in developing dynamic full-stack applications using <strong>MongoDB, Express.js, Angular,React, and Node.js</strong>.
            </p>
            <p className="text-muted-foreground mb-4">
              My expertise lies in building **scalable and high-performance full-stack applications** using the **MEAN & MERN stack (MongoDB, Express.js, Angular,React and Node.js)**.
              I develop secure and efficient backends with **Node.js and Express.js**, while ensuring seamless, responsive frontend experiences with **Angular and TypeScript**.
              I focus on **RESTful APIs, database optimization, and seamless frontend-backend integration** to create dynamic web applications.
            </p>
            <p className="text-muted-foreground">
              I'm constantly learning and staying updated with the latest advancements in **JavaScript frameworks, NoSQL databases, and cloud-based technologies**
              to build modern, scalable, and efficient web solutions.
            </p>

          </div>


          <div>
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>

            <div className="flex flex-wrap gap-2 mb-6">
              <button
                className={`skill-badge ${activeCategory === "all" ? "skill-badge-active" : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                All
              </button>
              <button
                className={`skill-badge ${activeCategory === "frontend" ? "skill-badge-active" : ""}`}
                onClick={() => setActiveCategory("frontend")}
              >
                Frontend
              </button>
              <button
                className={`skill-badge ${activeCategory === "backend" ? "skill-badge-active" : ""}`}
                onClick={() => setActiveCategory("backend")}
              >
                Backend
              </button>
              <button
                className={`skill-badge ${activeCategory === "tools" ? "skill-badge-active" : ""}`}
                onClick={() => setActiveCategory("tools")}
              >
                Tools
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {filteredSkills.map((skill, index) => (
                <span key={index} className="bg-card border rounded-full px-4 py-2 text-sm font-medium">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
