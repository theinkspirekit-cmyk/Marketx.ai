import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onBookCallClick?: () => void;
}

const CTA = ({ onBookCallClick }: CTAProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="cta" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div ref={ref} className={`text-center scroll-animate ${isInView ? "animate-reveal-up" : ""}`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-foreground tracking-tight leading-[1.05]">
            Ready to <span className="text-foreground/50">build?</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Book a 20-minute call. We'll map out exactly what your operation needs and what we'd
            build — no pitch, no pressure.
          </p>
          <button
            onClick={onBookCallClick}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all"
          >
            Book a Call
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
