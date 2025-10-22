import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Brain, Award } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "C", "R"]
  },
  {
    icon: Database,
    title: "Web Development",
    skills: ["React", "Next.js", "Svelte", "Node.js", "HTML/CSS", "Bootstrap", "MySQL"]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "Federated Learning", "Qiskit", "MATLAB", "Data Analysis"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Azure", "AWS", "Firebase", "API Management", "Git", "Agile"]
  },
  {
    icon: Award,
    title: "Additional Skills",
    skills: ["Cybersecurity", "Threat Modeling", "Figma", "Jupyter Notebook", "Kali Linux"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 text-center animate-slide-up">
          <h2 className="text-4xl font-bold tracking-tight">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical competencies across software engineering, cloud, and AI
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`p-6 card-hover bg-card border-border animate-scale-in opacity-0 stagger-${(index % 6) + 1}`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
