import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import heroDarkBg from "@/assets/hero-dark-bg.jpeg";
import heroLightBg from "@/assets/hero-light-bg.jpeg";

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  const { resolvedTheme } = useTheme();
  const heroBg = resolvedTheme === "dark" ? heroDarkBg : heroLightBg;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-black/20" />

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10 relative pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Small label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white/80">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            AI-Powered Business Automation
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold mb-6 leading-[1.1] tracking-tight text-white" style={{ lineHeight: '66px' }}>
            Automate Your Business.
            <br />
            <span className="font-instrument-serif italic text-blue-300">Save 10+ Hours/Week</span>
          </h1>
          
          <p className="text-lg md:text-[18px] mb-12 max-w-2xl mx-auto text-white/70" style={{ lineHeight: '27px', fontWeight: 300 }}>
            Automate the hustle, <span className="font-instrument-serif italic text-white">amplify the win</span>. We build intelligent workflows that save your team 10+ hours every week.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onBookCallClick}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold text-base transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-[0_4px_20px_rgba(59,130,246,0.4)]"
            >
              Book Free Call
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
