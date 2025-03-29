
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    company: "Pyxis Blu Infotech",
    role: "UI Developer",
    period: "2021 - Present",
    description: "Leading the development of user interfaces for web applications using React, Angular, and other modern frontend technologies. Collaborating with design and backend teams to deliver seamless user experiences.",
    responsibilities: [
      "Developing responsive and accessible web interfaces",
      "Implementing UI components using React and Angular frameworks",
      "Optimizing application performance and load times",
      "Collaborating with UX designers to implement designs accurately"
    ]
  },
  {
    id: 2,
    company: "TechSolve Solutions",
    role: "Frontend Developer",
    period: "2019 - 2021",
    description: "Worked on multiple client projects, developing frontend solutions with a focus on responsive design and cross-browser compatibility.",
    responsibilities: [
      "Built responsive web applications using HTML, CSS, and JavaScript",
      "Integrated RESTful APIs with frontend interfaces",
      "Implemented design systems for consistent UI/UX",
      "Collaborated in agile development teams"
    ]
  },
  {
    id: 3,
    company: "WebDesign Pro",
    role: "Junior Web Developer",
    period: "2018 - 2019",
    description: "Started my career working on website development projects for small businesses, focusing on frontend implementation and basic CMS development.",
    responsibilities: [
      "Created static websites using HTML, CSS, and JavaScript",
      "Customized CMS themes for client websites",
      "Performed website maintenance and updates",
      "Assisted senior developers with larger projects"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[9px] md:left-1/2 md:-ml-[1px] top-0 h-full w-[2px] bg-border"></div>
          
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`relative z-10 mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-background bg-primary"></div>
              
              {/* Content */}
              <div className="md:w-1/2 pl-10 md:pl-0 md:pr-10">
                <Card className="card-hover">
                  <CardHeader>
                    <p className="text-sm text-primary font-medium">{experience.period}</p>
                    <CardTitle className="text-xl">{experience.role}</CardTitle>
                    <p className="text-muted-foreground font-medium">{experience.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {experience.description}
                    </p>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {experience.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
