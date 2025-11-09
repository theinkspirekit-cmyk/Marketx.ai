const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-lg text-foreground font-poppins tracking-wider">Marktrix.ai</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-powered business automation that saves 10+ hours weekly. 
              Transform your workflows with intelligent automation solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('services')} className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Lead Generation Automation
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                E-commerce Automation
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Social Media Automation
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Custom AI Workflows
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <div className="space-y-2">
              
              <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                About Us
              </a>
              
              
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get Started</h4>
            <div className="space-y-3">
              <a href="https://calendly.com/katkamdheekshitdatta/30min" target="_blank" rel="noopener noreferrer" className="block text-primary hover:text-primary-glow text-sm font-semibold transition-colors">
                Book Free Call →
              </a>
              <div className="text-muted-foreground text-sm">
                <div>
                  📧 <a href="mailto:markitx.ai@gmail.com" className="hover:text-primary transition-colors">markitx.ai@gmail.com</a>
                </div>
                <div>📞 Available 24/7</div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
                <span className="text-foreground">Usually respond in &lt; 2 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © 2025 Marktrix.ai • AI Business Automation Services
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;