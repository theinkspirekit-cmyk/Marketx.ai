import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Progress } from "@/components/ui/progress";

const CTA = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="cta" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`max-w-4xl mx-auto scroll-animate ${isInView ? "animate-reveal-up" : ""}`}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4 leading-tight">
              Book Your Free <span className="font-instrument-serif italic text-primary font-normal">Audit</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              15 minutes to understand your operations and show you exactly what we'd automate — no strings attached.
            </p>
          </div>

          <div className="relative bg-background border border-border/40 rounded-2xl overflow-hidden" style={{ minHeight: "650px" }}>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                <div className="w-full max-w-xs px-8">
                  <div className="text-center mb-4">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">Loading calendar...</p>
                  </div>
                  <Progress value={66} className="h-1.5" />
                </div>
              </div>
            )}
            <iframe
              src="https://cal.com/dheekshit-datta-hc4xco/30-min-meeting"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a meeting"
              className="absolute inset-0 w-full h-full"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
