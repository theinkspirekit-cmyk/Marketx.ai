import heroBg from "@/assets/hero-bg.png";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with reduced opacity */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Light gray/white overlay for the clean look like reference */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/90 via-white/70 to-white z-0" />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10 relative pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium mb-6 leading-tight tracking-tight">
            <span className="text-foreground block mb-2 animate-fade-in">Automate Your Business.</span>
            <span className="gradient-text-animated px-0 my-0 mx-0 py-2 md:py-[15px] block">Save 10+ Hours/Week</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in max-w-3xl mx-auto leading-relaxed">
            Automate the hustle, <span className="font-instrument-serif italic text-primary">amplify the win</span>.
          </p>

          {/* Pill Buttons like reference image */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            {/* Primary Button - Blue pill with gradient */}
            <button
              onClick={onBookCallClick}
              className="group relative px-8 py-4 rounded-full text-white font-medium text-base transition-all duration-300 hover:scale-105 overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, hsl(217 91% 72%) 0%, hsl(217 91% 60%) 100%)',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.35), 0 4px 12px rgba(59, 130, 246, 0.25), inset 0 1px 0 rgba(255,255,255,0.25)'
              }}
            >
              {/* Inner highlight */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
              <span className="relative flex items-center gap-2">
                Book Free Call
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Secondary Button - Light glass pill */}
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-medium text-base text-foreground transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)'
              }}
            >
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom right label */}
      <div className="absolute bottom-16 right-8 opacity-70 z-10">
        <div className="text-right">
          <div className="text-sm text-muted-foreground font-medium">AI Automation</div>
          <div className="w-8 h-px bg-muted-foreground mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;