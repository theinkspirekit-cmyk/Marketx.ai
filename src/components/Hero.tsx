import { ChevronRight, Zap, Clock } from "lucide-react";

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 text-center z-10 relative pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Small badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground">
              <Zap className="w-3.5 h-3.5 text-primary" />
              10x Faster Response
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground">
              <Clock className="w-3.5 h-3.5 text-primary" />
              24/7 Available
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium mb-6 leading-[1.1] tracking-tight">
            <span className="text-foreground">Stop losing leads.</span>
            <br />
            <span className="text-foreground">Start closing </span>
            <span className="font-instrument-serif italic text-primary font-normal">more deals</span>
            <span className="text-foreground">.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            We build AI-powered systems that capture, qualify, and follow up with every lead — so your team can focus on closing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onBookCallClick}
              className="group btn-primary-ref px-8 py-4 text-base inline-flex items-center gap-2"
            >
              Book Free Audit
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline px-8 py-4 text-base"
            >
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
