import { ArrowRight } from "lucide-react";

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
        }}
      />

      <div className="container mx-auto px-6 text-center z-10 relative pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 text-xs bg-white/5 border border-white/10 text-foreground/70 uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            AI Infrastructure
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tight text-foreground">
            Building AI Infrastructure
            <br />
            <span className="text-foreground/50">for Businesses.</span>
          </h1>

          <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-foreground/60 leading-relaxed">
            Automate the hustle, <span className="text-foreground">amplify the win</span>. We
            engineer multi-agent systems, automated workflows, and operational intelligence — so
            your business runs without you being in every process.
          </p>

          <div className="flex justify-center">
            <button
              onClick={onBookCallClick}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all"
            >
              Book a Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
