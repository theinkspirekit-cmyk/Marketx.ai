import gradientBg from "@/assets/gradient-bg.png";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with optimization */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${gradientBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        role="img"
        aria-label="AI automation workflow gradient background"
      ></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main heading - SEO optimized */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-foreground text-4xl sm:text-6xl md:text-8xl block mb-2 animate-fade-in">
              AI Business Automation
            </span>
            <span className="gradient-text-animated text-4xl sm:text-6xl md:text-8xl px-0 my-0 mx-0 py-2 md:py-[15px] block">
              Save 10+ Hours Per Week
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-3xl mx-auto leading-relaxed">
            Professional workflow automation services for businesses. Automate lead generation, e-commerce operations, and custom processes. 
            <span className="text-primary font-semibold"> Reduce errors by 95%</span> and boost productivity with proven AI solutions.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm animate-fade-in">
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-foreground"><strong>48-Hour</strong> Implementation</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-foreground"><strong>300-500%</strong> ROI</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <span className="text-primary text-lg">✓</span>
              <span className="text-foreground"><strong>30-Day</strong> Money-Back Guarantee</span>
            </div>
          </div>

          {/* CTA Buttons - Conversion optimized */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <button
              onClick={onBookCallClick}
              className="btn-secondary-ref inline-flex items-center space-x-2 group hover:scale-105 transition-all duration-300"
              aria-label="Schedule a free automation strategy call"
            >
              <span>Get My Free Automation Plan</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={() => scrollToSection('services')} 
              className="btn-primary-ref hover:scale-105 transition-all duration-300"
            >
              See How Much Time You Can Save
            </button>
          </div>
        </div>
      </div>

      {/* Bottom right label */}
      <div className="absolute bottom-16 right-8 opacity-70 hidden md:block">
        <div className="text-right">
          <div className="text-sm text-muted-foreground font-medium">AI Workflow Automation</div>
          <div className="w-8 h-px bg-muted-foreground mt-2"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;