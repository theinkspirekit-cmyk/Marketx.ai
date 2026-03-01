import { Mail, Phone } from "lucide-react";
import markitxLogo from "@/assets/markitx-logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={markitxLogo} alt="Markitx" className="h-7 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-powered lead automation that saves 10+ hours weekly and grows your revenue.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Navigation</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('home')} className="block text-muted-foreground hover:text-foreground text-sm transition-colors">Home</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block text-muted-foreground hover:text-foreground text-sm transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('process')} className="block text-muted-foreground hover:text-foreground text-sm transition-colors">Process</button>
              <button onClick={() => scrollToSection('faq')} className="block text-muted-foreground hover:text-foreground text-sm transition-colors">FAQ</button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:markitx.ai@gmail.com" className="hover:text-foreground transition-colors">markitx.ai@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Get Started</h4>
            <a
              href="https://cal.com/dheekshit-datta-hc4xco/30-min-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-ref text-sm px-6 py-3 inline-block"
            >
              Book Free Audit
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2025 Markitx.ai • AI Business Automation
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
