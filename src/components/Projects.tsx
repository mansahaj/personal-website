import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Federated Learning IDS",
    subtitle: "Secure Underwater Communication Research",
    description: "Creating an Intrusion Detection System for distributed underwater drone networks using TensorFlow and Flower framework. Implementing federated learning for decentralized machine learning with enhanced data privacy for the SOLIDS Lab.",
    tech: ["Python", "TensorFlow", "Flower", "Machine Learning", "Cybersecurity"],
    link: "https://github.com/mansahaj/FederatedLearning",
    year: "Ongoing",
    featured: true
  },
  {
    title: "Sport Match",
    subtitle: "Sports Social Media Platform",
    description: "A comprehensive sports social media application designed to help people find other players to play with. Features include a league system, player matching algorithms, and social networking capabilities for building local sports communities.",
    tech: ["MySQL", "Kotlin", "Python", "Git"],
    link: "https://github.com/paramsbhs/370-Group-Project",
    year: "2024",
    featured: true
  },
  {
    title: "Threat Modeling Suite",
    subtitle: "SOLIDS Lab Cybersecurity",
    description: "Using Threat Dragon to conduct comprehensive threat modeling for secure underwater communication web applications, identifying and documenting vulnerabilities in the system architecture.",
    tech: ["Threat Dragon", "Cybersecurity", "Risk Assessment"],
    year: "Ongoing"
  },
  {
    title: "Quantum Computing Exploration",
    subtitle: "Research & Development",
    description: "Exploring quantum computing applications using Qiskit framework, investigating potential applications in cryptography and optimization problems.",
    tech: ["Python", "Qiskit", "Quantum Computing"],
    year: "2024"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 text-center animate-slide-up">
          <h2 className="text-4xl font-bold tracking-tight">Personal Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research initiatives, academic projects, and personal explorations in software engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-6 card-hover border-border flex flex-col animate-scale-in opacity-0 stagger-${(index % 4) + 1} ${
                project.featured ? 'bg-gradient-to-br from-primary/5 to-accent/5' : 'bg-card'
              }`}
            >
              <div className="space-y-4 flex-1">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    {project.link && (
                      <Button 
                        asChild 
                        variant="ghost" 
                        size="icon"
                        className="shrink-0"
                      >
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                  <p className="text-xs text-muted-foreground">{project.year}</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a 
              href="https://github.com/mansahaj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View More on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
