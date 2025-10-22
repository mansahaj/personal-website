import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Federated Learning IDS",
    subtitle: "Secure Underwater Communication Research - SOLIDS Lab",
    description: "Creating an Intrusion Detection System for distributed underwater drone networks using TensorFlow and Flower framework. Implementing federated learning for decentralized machine learning with enhanced data privacy. Conducting threat modeling using Threat Dragon to expose vulnerabilities.",
    tech: ["Python", "TensorFlow", "Flower", "Threat Dragon", "Cybersecurity", "ML"],
    link: "https://github.com/mansahaj/FederatedLearning",
    year: "Sep 2022 - Present",
    featured: true
  },
  {
    title: "INSPIRE Platform",
    subtitle: "Brightspace-Integrated Learning Platform",
    description: "Collaborating with a cross-functional team to develop a platform for 22,000+ students, focusing on neurodiverse learners. Built AI-driven study tools and task management features using React.js and Node.js, improving task efficiency by 20%. Interviewed 180+ students through pilot sessions and surveys.",
    tech: ["React.js", "Node.js", "Firebase", "REST APIs", "Brightspace API"],
    link: "https://www.uvic.ca/research/centres/cisur/projects/inspire/index.php",
    year: "Sep 2024 - Present",
    featured: true
  },
  {
    title: "Sport Match",
    subtitle: "Sports Social Media Database Platform",
    description: "A comprehensive sports social media database application designed to help people find other players to play with. Features include a league system, player matching algorithms, team management, and social networking capabilities for building local sports communities using MySQL and Kotlin.",
    tech: ["MySQL", "Kotlin", "Python", "Android", "Database Design"],
    link: "https://github.com/paramsbhs/SportMatch",
    year: "2024",
    featured: true
  },
  {
    title: "ArtMake",
    subtitle: "Generative Art Program",
    description: "Developed a Python program that generates aesthetically pleasing random art pieces. Implemented an object-oriented approach to dynamically create HTML webpages, utilizing the Random library to generate random shapes of varying sizes and colors, then rendering them onto the HTML canvas as SVGs.",
    tech: ["Python", "SVG", "OOP", "HTML", "Random Generation"],
    link: "https://github.com/mansahaj/artmake",
    year: "April 2024",
    featured: false
  },
  {
    title: "Indeed Web Scraper",
    subtitle: "Job Search Automation Tool",
    description: "Built a web-scraper for the Indeed website to enable easier job search. Used Pandas, Selenium, Beautiful Soup and Requests libraries to convert several web pages worth of information into an easier to analyze CSV file, providing users an optimized approach to access job information.",
    tech: ["Python", "Selenium", "Beautiful Soup", "Pandas", "Web Scraping"],
    link: "https://github.com/mansahaj",
    year: "January 2024",
    featured: false
  },
  {
    title: "Quantum Computing Exploration",
    subtitle: "Research & Development with Qiskit",
    description: "Exploring quantum computing applications using Qiskit framework, investigating potential applications in cryptography and optimization problems. Completed Quantum Software Engineering Bootcamp certification.",
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
