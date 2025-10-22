import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, Github } from "lucide-react";

const hackathons = [
  {
    title: "BridgeCare",
    event: "Island Health Codehack Hackathon",
    achievement: "Project Winner",
    date: "March 2024",
    description: "Built a comprehensive website to improve communication between hospital staff and caregivers. Featured real-time notification system and AI chatbot for better patient care coordination.",
    tech: ["Svelte", "CSS", "Bootstrap", "JavaScript", "Git"],
    highlights: [
      "Real-time notification system",
      "AI-powered chatbot integration",
      "Collaborative Git workflow with frontend & backend teams"
    ],
    link: "https://github.com/mansahaj/bridgecare",
    teamSize: 4
  },
  {
    title: "Brain Teaser",
    event: "Inspire Ideathon",
    achievement: "🏆 1st Place Winner",
    date: "January 2024",
    description: "Designed an innovative web app for neurodivergent students to have a more accessible college life, focusing on task management and procrastination solutions.",
    tech: ["Figma", "Canva", "UI/UX Design", "Project Planning"],
    highlights: [
      "Won first prize among all competing teams",
      "Focus on accessibility and inclusive design",
      "Creative pitch and design proposal"
    ],
    teamSize: 3
  },
  {
    title: "MathMagician",
    event: "UVEC Hackathon",
    achievement: "🏆 1st Place Winner",
    date: "2024",
    description: "Collaborated to develop an engaging town-saving game where players protect the town from incoming comets by solving math equations. Successfully combined education with entertaining gameplay.",
    tech: ["Next.js", "React", "Tailwind CSS", "Git"],
    highlights: [
      "Won first place in the competition",
      "Gamified learning experience",
      "Full-stack web game development"
    ],
    link: "https://github.com/arfazhxss/MathMagician",
    teamSize: 4
  },
  {
    title: "AWS DeepRacer",
    event: "InnovateWEST Hackathon",
    achievement: "Participant",
    date: "April 2024",
    description: "Coded the AWS DeepRacer - an autonomous race car driven by reinforcement learning. Created custom rewards function and trained the model on AWS cloud infrastructure.",
    tech: ["Python", "AWS", "Reinforcement Learning", "Machine Learning"],
    highlights: [
      "Hands-on reinforcement learning",
      "AWS cloud training experience",
      "Autonomous vehicle programming"
    ],
    link: "https://github.com/mansahaj"
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 animate-gradient" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="space-y-4 mb-12 text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-semibold">Hackathon Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hackathons & Competitions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Winning solutions built under pressure, showcasing creativity, teamwork, and technical excellence
          </p>
        </div>
        
        <div className="grid gap-8">
          {hackathons.map((hackathon, index) => (
            <Card 
              key={index} 
              className={`p-6 md:p-8 card-hover bg-card/50 backdrop-blur-sm border-border animate-scale-in opacity-0 stagger-${(index % 4) + 1}`}
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-6">
                {/* Main Content */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                        {hackathon.title}
                      </h3>
                      {hackathon.achievement.includes("🏆") && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-0">
                          {hackathon.achievement}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        {hackathon.event}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {hackathon.date}
                      </span>
                      {hackathon.teamSize && (
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Team of {hackathon.teamSize}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {hackathon.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Key Highlights:</p>
                    <ul className="space-y-1">
                      {hackathon.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Button */}
                {hackathon.link && (
                  <div className="flex md:flex-col items-start gap-2">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="icon"
                      className="shrink-0"
                    >
                      <a 
                        href={hackathon.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View ${hackathon.title} on GitHub`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-in">
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border">
            <div className="text-3xl font-bold gradient-text">4+</div>
            <div className="text-sm text-muted-foreground mt-1">Hackathons</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border">
            <div className="text-3xl font-bold gradient-text">2</div>
            <div className="text-sm text-muted-foreground mt-1">First Places</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border">
            <div className="text-3xl font-bold gradient-text">15+</div>
            <div className="text-sm text-muted-foreground mt-1">Team Members</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border">
            <div className="text-3xl font-bold gradient-text">48h</div>
            <div className="text-sm text-muted-foreground mt-1">Avg Duration</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
