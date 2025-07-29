import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CalendarDays, CheckCircle, ChevronRight, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
{
  id: 1,
  company: "Pyxis Blu Infotech",
  role: "Frontend Developer",
  period: "May 2024 - Present",
  description:
    "Crafting modern, scalable interfaces using Angular and React for real-world applications in the education sector. Key contributor to major university platforms and CRM systems.",
  responsibilities: [
    "Developing responsive UIs with Angular, React, PrimeNG, and Tailwind CSS",
    "Frontend development for Sarla Birla University CRM and official website",
    "Building modules for university campus management and SBPS school platform",
    "Integrating RESTful APIs and ensuring smooth frontend-backend communication",
    "Collaborating with design and backend teams for consistent UI/UX",
    "Optimizing performance, accessibility, and cross-browser compatibility"
  ],
  color: "bg-gradient-to-br from-indigo-600 to-violet-600"
},


  {
    id: 2,
    company: "Dzinex Technologies",
    role: "Intern of Full Stack Developer",
    period: "April 2023 - June 2023",
    description: "Worked on multiple client projects, developing frontend solutions with a focus on responsive design and cross-browser compatibility.",
    responsibilities: [
      "Built responsive web applications using HTML, CSS, and JavaScript",
      "Integrated RESTful APIs with frontend interfaces",
      "Implemented design systems for consistent UI/UX",
      "Collaborated in agile development teams"
    ],
    color: "bg-gradient-to-br from-cyan-600 to-sky-600"
  },
 
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-4">
            <Briefcase className="w-4 h-4 text-indigo-500" />
            <span className="text-indigo-500 font-medium">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career path through various roles in the tech industry, showcasing my growth and expertise in web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-1 h-full ${experience.color} rounded-tl-lg rounded-bl-lg`}></div>
              
              <Card className="card-hover h-full ml-3 border-l-0 rounded-l-none">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${experience.color}`}>
                          <Briefcase className="text-white w-5 h-5" />
                        </div>
                        <CardTitle className="text-xl">{experience.role}</CardTitle>
                      </div>
                      <p className="text-lg font-medium text-muted-foreground">{experience.company}</p>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-muted">
                      <CalendarDays className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{experience.period}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium hover:from-indigo-700 hover:to-violet-700 transition-all"
          >
            Download Full Resume
            <MoveRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}