import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  const scrollToCaseStudies = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Dotted background */}
      <div
        className="absolute inset-0 z-0 text-foreground"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.28,
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-50 text-foreground"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, currentColor, transparent 70%)",
          opacity: 0.06,
        }}
      />

      <div className="container mx-auto px-6 text-center z-10 relative pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 text-xs bg-foreground/5 border border-foreground/10 text-foreground/70 uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            Enterprise AI Solutions
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-[1.05] tracking-tight text-foreground">
            Agentic AI applications
            <br />
            <span className="text-foreground/50">for the enterprise.</span>
          </h1>

          <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-foreground/60 leading-relaxed">
            Automate the hustle, <span className="text-foreground">amplify the win</span>. We
            engineer multi-agent systems, automated workflows, and operational intelligence — so
            your business runs without you being in every process.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#case-studies"
              onClick={scrollToCaseStudies}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground/5 border border-foreground/15 backdrop-blur-xl text-foreground font-semibold text-sm hover:bg-foreground/10 hover:border-foreground/25 transition-all"
            >
              Case Studies
            </a>
            <button
              onClick={onBookCallClick}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all"
            >
              Book a Free Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
