import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software/Firmware Engineer Co-op",
    company: "AEM",
    period: "May 2025 – Present",
    description: [
      "Spearheaded automated regression testing for firmware using Python and Bash, identifying 100+ critical bugs with 100% customer satisfaction post-launch",
      "Designed cloud-native API management system using Azure API Management for 200+ customer-facing APIs with rate limiting and RBAC",
      "Leveraged Azure App Services, Functions, and Storage to build scalable backend logic and data pipelines",
      "Developed secure client-facing web portal with Azure Entra ID for authentication and subscription management",
      "Operated across two agile teams with bi-weekly sprint delivery"
    ],
    skills: ["Python", "Bash", "Azure", "API Management", "React", "Cloud Architecture"]
  },
  {
    title: "Software Engineer Co-op",
    company: "INSPIRE",
    period: "Sep 2024 – Present",
    description: [
      "Developed Brightspace-integrated platform for 22,000+ students focusing on neurodiverse learners",
      "Conducted 180+ student interviews through pilot sessions and surveys to gather requirements",
      "Built AI-driven study tools and task management features using React.js, Node.js, and REST APIs, improving efficiency by 20%",
      "Implemented Firebase for secure authentication and integrated Brightspace APIs",
      "Collaborated in agile environment with global teams in Nepal"
    ],
    skills: ["React", "Node.js", "Firebase", "REST APIs", "Agile", "UX Research"]
  },
  {
    title: "Research Assistant, SOLIDS Lab",
    company: "University of Victoria",
    period: "Sep 2022 – Present",
    description: [
      "Working in cybersecurity sub-team for secure underwater communication suite",
      "Using Threat Dragon for threat modeling and vulnerability assessment",
      "Creating Intrusion Detection System (IDS) for distributed underwater drones using TensorFlow and Flower framework",
      "Implementing Federated Learning for data privacy and decentralized machine learning"
    ],
    skills: ["TensorFlow", "Federated Learning", "Cybersecurity", "Threat Modeling", "Python"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 text-center animate-slide-up">
          <h2 className="text-4xl font-bold tracking-tight">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across cloud infrastructure, AI-driven platforms, and cybersecurity research
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 md:p-8 card-hover bg-card border-border"
            >
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-tight">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
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

export default Experience;
