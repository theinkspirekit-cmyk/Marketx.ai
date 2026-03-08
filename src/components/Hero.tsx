import { ChevronRight } from "lucide-react";

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Grid pattern background */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      
      {/* Radial fade overlay */}
      <div className="absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, hsl(var(--background)) 80%)',
      }} />

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10 relative pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Small label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm bg-white/80 border border-black/[0.06] text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            AI-Powered Business Automation
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold mb-6 leading-[1.1] tracking-tight text-foreground" style={{ lineHeight: '66px' }}>
            Automate Your Business.
            <br />
            <span className="font-instrument-serif italic text-foreground">Save 10+ Hours/Week</span>
          </h1>
          
          <p className="text-lg md:text-[18px] mb-12 max-w-2xl mx-auto text-muted-foreground" style={{ lineHeight: '27px', fontWeight: 300 }}>
            Automate the hustle, <span className="font-instrument-serif italic text-foreground">amplify the win</span>. We build intelligent workflows that save your team 10+ hours every week.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onBookCallClick}
              className="group px-8 py-4 rounded-xl bg-foreground text-background font-semibold text-base transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
            >
              Book Free Call
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 hover:scale-105 bg-white/90 border border-black/10 text-foreground"
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
