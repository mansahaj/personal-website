import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking co-op opportunities for 2025. Let's connect and build something amazing together!
          </p>
        </div>
        
        <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/30 border-border">
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:mansahajp@uvic.ca"
                className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">mansahajp@uvic.ca</p>
                </div>
              </a>
              
              <a 
                href="tel:825-561-0098"
                className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">825-561-0098</p>
                </div>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-center text-sm text-muted-foreground">Connect with me on</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="lg">
                  <a 
                    href="https://github.com/mansahaj" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                    <ExternalLink className="w-3 h-3" />
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
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <a href="mailto:mansahajp@uvic.ca">
                  Send me an email
                </a>
              </Button>
            </div>
          </div>
        </Card>
        
        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Mansahaj Singh Popli. Based in Victoria, BC.</p>
          <p className="mt-2">Open to co-op opportunities • Available May 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
