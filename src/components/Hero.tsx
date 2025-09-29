import { Button } from "@/components/ui/button";
import heroAutomation from "@/assets/hero-automation.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroAutomation} 
          alt="Business automation dashboard"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 glass-card p-4 float-animation">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
          <span className="text-sm text-muted-foreground">Workflow Active</span>
        </div>
      </div>

      <div className="absolute top-32 right-16 glass-card p-4 float-animation" style={{ animationDelay: '1s' }}>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">98.2%</div>
          <div className="text-xs text-muted-foreground">Success Rate</div>
        </div>
      </div>

      <div className="absolute bottom-32 left-20 glass-card p-4 float-animation" style={{ animationDelay: '2s' }}>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-foreground">+10hrs</span>
          <span className="text-sm text-muted-foreground">Saved Weekly</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Automate Your Business.</span>
            <br />
            Save 10+ Hours/Week.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform repetitive tasks into smart automations. Focus on growth while AI handles the busy work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('cta')}
              size="lg"
              className="btn-glow text-primary-foreground px-8 py-6 text-lg font-semibold"
            >
              Book Free Strategy Call
            </Button>
            
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline" 
              size="lg"
              className="border-border text-foreground px-8 py-6 text-lg hover-glow"
            >
              See Sample Automations
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>48hr Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Pay Only If It Works</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;