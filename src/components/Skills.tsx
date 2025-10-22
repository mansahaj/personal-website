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

const achievements = [
  "🏆 1st Place - Inspire Ideathon (Brain Teaser)",
  "🏆 1st Place - UVEC Hackathon (MathMagician)",
  "🎓 Bachelor of Engineering in Software Engineering - UVic (2022-2026)",
  "🔬 Research Assistant - SOLIDS Lab, Cybersecurity Team"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Skills & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical competencies and academic achievements
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 card-hover bg-card border-border"
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
        
        {/* Achievements */}
        <Card className="p-6 md:p-8 bg-card border-border">
          <h3 className="text-2xl font-semibold mb-6">Education & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
              >
                <span className="text-lg">{achievement}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
