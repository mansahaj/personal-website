import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BridgeCare",
    subtitle: "Island Health Codehack Hackathon",
    description: "Built a website to improve communication between hospital staff and caregivers, featuring real-time notification system and AI chatbot for better patient care coordination.",
    tech: ["Svelte", "CSS", "Bootstrap", "JavaScript", "Git"],
    link: "https://github.com/mansahaj/bridgecare",
    year: "March 2024"
  },
  {
    title: "Federated Learning IDS",
    subtitle: "Secure Underwater Communication",
    description: "Created an Intrusion Detection System for distributed underwater drone networks using TensorFlow and Flower framework, implementing federated learning for decentralized machine learning with data privacy.",
    tech: ["Python", "TensorFlow", "Flower", "Machine Learning", "Cybersecurity"],
    link: "https://github.com/mansahaj/FederatedLearning",
    year: "Ongoing"
  },
  {
    title: "Brain Teaser",
    subtitle: "1st Place - Inspire Ideathon",
    description: "Designed a web app for neurodivergent students to have a more accessible college life, focusing on task management and procrastination solutions. Won first prize at the Inspire Ideathon.",
    tech: ["Figma", "Canva", "UI/UX Design", "Project Planning"],
    year: "January 2024"
  },
  {
    title: "MathMagician",
    subtitle: "1st Place - UVEC Hackathon",
    description: "Collaborated in a team of four to develop a town-saving game where players protect the town from incoming comets by solving math equations. Combined education with engaging gameplay.",
    tech: ["Next.js", "React", "Tailwind CSS", "Git"],
    link: "https://github.com/arfazhxss/MathMagician",
    year: "2024"
  },
  {
    title: "AWS DeepRacer",
    subtitle: "InnovateWEST Hackathon",
    description: "Coded the AWS DeepRacer autonomous race car driven by reinforcement learning. Created rewards function and trained the model for several hours on AWS cloud infrastructure.",
    tech: ["Python", "AWS", "Reinforcement Learning", "Machine Learning"],
    link: "https://github.com/mansahaj",
    year: "April 2024"
  },
  {
    title: "Sport Match",
    subtitle: "Sports Social Media Platform",
    description: "A sports social media app designed to help people find other players to play with. Features include a league system, player matching, and social networking capabilities.",
    tech: ["MySQL", "Kotlin", "Python", "Git"],
    link: "https://github.com/paramsbhs/370-Group-Project",
    year: "2024"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From hackathon wins to research initiatives, here are some of my key projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 card-hover bg-card border-border flex flex-col"
            >
              <div className="space-y-4 flex-1">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
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
