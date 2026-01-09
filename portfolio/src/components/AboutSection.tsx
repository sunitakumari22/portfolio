import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, User } from "lucide-react";

const skills = [
   { name: "Angular", category: "frontend" },
  { name: "PrimeNG", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "ASP.NET", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "RESTful APIs", category: "tools" },
];

type Category = "all" | "frontend" | "backend" | "tools";

export default function AboutSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Card */}
          <Card className="card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">About Me</h3>
              <p className="text-muted-foreground">
                I'm a passionate <strong>MEAN & MERN Stack Developer</strong> with experience building scalable web applications.
                Currently at <strong>Pyxis Blu Infotech</strong>, I work with <strong>MongoDB, Express.js, Angular, React, and Node.js</strong>.
              </p>
            </CardContent>
          </Card>

          {/* Expertise Card */}
          <Card className="card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">My Expertise</h3>
              <ul className="text-muted-foreground list-disc pl-5 mt-2 space-y-1 text-left">
                <li><strong>Frontend:</strong> Angular, React, TypeScript, HTML, CSS, PrimeNG</li>
                <li><strong>Backend:</strong> Node.js, Express.js, RESTful APIs</li>
                <li><strong>Database:</strong> MongoDB</li>
              </ul>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card className="card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">
                Frontend Developer at Pyxis Blu Infotech, building modern web applications.
              </p>
              <p className="text-muted-foreground">
                Former Full Stack Intern at Dzinex Technologies, Ranchi.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Centered Skills Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">My Skills</h3>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["All", "Frontend", "Backend", "Tools"].map((cat) => (
              <button
                key={cat}
                className={`skill-badge ${activeCategory === cat.toLowerCase() ? "skill-badge-active" : ""}`}
                onClick={() => setActiveCategory(cat.toLowerCase() as Category)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {filteredSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-card border rounded-full px-4 py-2 text-sm font-medium"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
