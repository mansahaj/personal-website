import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-transparent to-accent/5 pointer-events-none animate-gradient" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">Hi, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Mansahaj Singh Popli
              </h1>
              <p className="text-xl md:text-2xl gradient-text font-semibold">
                Software Engineering Student
              </p>
              <p className="text-lg text-muted-foreground">
                University of Victoria • Class of 2026
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about building innovative solutions in AI, cybersecurity, and cloud technologies. 
              Currently working as a Software Engineer Co-op at AEM and INSPIRE, developing scalable systems 
              that make a real impact.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://github.com/mansahaj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://www.linkedin.com/in/mansahaj-singh-popli/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-accent rounded-full blur-2xl opacity-20 animate-pulse" />
              <img 
                src={profileImage} 
                alt="Mansahaj Singh Popli"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
