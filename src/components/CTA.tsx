import { useInView } from "@/hooks/useInView";
import { ChevronRight, Calendar } from "lucide-react";

interface CTAProps {
  onBookCallClick: () => void;
}

const CTA = ({ onBookCallClick }: CTAProps) => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section id="cta" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`max-w-5xl mx-auto scroll-animate ${isInView ? 'animate-bounce-in' : ''}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
                Book Your{" "}
                <span className="font-instrument-serif italic text-primary font-normal">Free Audit</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                In 30 minutes, we'll show you exactly which automations will save you the most time and money. No commitment required.
              </p>
              <button
                onClick={onBookCallClick}
                className="group btn-primary-ref px-8 py-4 text-base inline-flex items-center gap-2"
              >
                Schedule My Free Audit
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right - Calendar Mock */}
            <div className="mock-widget">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Pick a Time</span>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {["M","T","W","T","F","S","S"].map((d, i) => (
                  <div key={i} className="text-center text-xs text-muted-foreground font-medium py-1">{d}</div>
                ))}
                {Array.from({ length: 28 }, (_, i) => (
                  <div
                    key={i}
                    className={`text-center text-xs py-2 rounded-lg cursor-pointer transition-colors ${
                      i === 14
                        ? 'bg-primary text-primary-foreground font-bold'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {["9:00 AM", "10:30 AM", "2:00 PM"].map((time, i) => (
                  <div
                    key={i}
                    className={`flex-1 text-center py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      i === 1
                        ? 'border-primary bg-accent text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
