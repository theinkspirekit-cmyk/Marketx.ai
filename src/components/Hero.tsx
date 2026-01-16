import { Phone, ArrowUpRight } from "lucide-react";
import gradientBg from "@/assets/gradient-bg.png";

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
      {/* Background image with lazy loading */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${gradientBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <img 
          src={gradientBg} 
          alt="AI Automation gradient background" 
          className="hidden"
          loading="eager"
        />
      </div>

      {/* Main Content - exact typography matching reference */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main heading matching reference exactly */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-foreground text-4xl sm:text-6xl md:text-8xl block mb-2 animate-fade-in">Automate Your Business.</span>
            <span className="gradient-text-animated text-4xl sm:text-6xl md:text-8xl px-0 my-0 mx-0 py-2 md:py-[15px] block">Save 10+ Hours/Week</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-3xl mx-auto leading-relaxed">
            Automate the hustle, <span className="text-primary font-semibold bg-primary/10 px-2 rounded">amplify the win</span>.
          </p>

          {/* Buttons matching reference style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <button
              onClick={onBookCallClick}
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-lg font-medium text-base hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Book A Free Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            
            <button 
              onClick={() => scrollToSection('services')} 
              className="btn-primary-ref hover:scale-105 transition-all duration-300"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom right label */}
      <div className="absolute bottom-16 right-8 opacity-70">
        <div className="text-right">
          <div className="text-sm text-muted-foreground font-medium">AI Automation</div>
          <div className="w-8 h-px bg-muted-foreground mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
