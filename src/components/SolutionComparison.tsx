import { useInView } from "@/hooks/useInView";
import { X, Check } from "lucide-react";

const SolutionComparison = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const without = [
    "Leads slip through the cracks",
    "Manual follow-ups take hours",
    "No idea which leads are hot",
    "Inconsistent response times",
    "Team overwhelmed with admin",
    "Revenue left on the table",
  ];

  const withMarkitx = [
    "Every lead captured instantly",
    "Automated follow-up sequences",
    "AI-scored lead qualification",
    "Instant response, 24/7",
    "Team focused on closing",
    "Predictable revenue growth",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`max-w-5xl mx-auto scroll-animate ${isInView ? 'animate-reveal-up' : ''}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">The Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              From overwhelmed to{" "}
              <span className="font-instrument-serif italic text-primary font-normal">in control</span>.
            </h2>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Without */}
            <div className="clean-card p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">Without Markitx</h3>
              <div className="space-y-4">
                {without.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* With */}
            <div className="clean-card p-8 bg-accent border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-6">With Markitx</h3>
              <div className="space-y-4">
                {withMarkitx.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
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

export default SolutionComparison;
