import { useInView } from "@/hooks/useInView";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";

const WhyChoose = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 });

  const markitxBenefits = [
    "Fast, fully managed setup",
    "Built around your exact workflow",
    "Context-aware, intelligent actions",
    "Ongoing improvement & fine-tuning",
    "Connects with your full stack",
    "Designed to grow with your business"
  ];

  const otherToolsDrawbacks = [
    "Manual, time-consuming",
    "Limited to predefined templates",
    "Rule-based, no real learning",
    "Static once deployed",
    "Limited platform compatibility",
    "Difficult to scale without breaking"
  ];

  return (
    <section className="py-24 bg-[#f5f6f8]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-white mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Benefits</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium mb-4 text-foreground">
            Why Choose <span className="italic font-normal">MARKITX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Here's why teams choose us over traditional tools.
          </p>
        </div>

        {/* Comparison Cards */}
        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-6 max-w-5xl mx-auto scroll-animate ${cardsInView ? 'animate-reveal-up' : ''}`}
        >
          {/* MARKITX Card */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg shadow-black/5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-primary">Markitx</h3>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <ul className="space-y-4">
              {markitxBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Tools Card */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg shadow-black/5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-foreground/70">Other tools</h3>
              <div className="w-3 h-3 rounded-full border-2 border-foreground/30"></div>
            </div>
            <ul className="space-y-4">
              {otherToolsDrawbacks.map((drawback, index) => (
                <li key={index} className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-foreground/40 flex-shrink-0" />
                  <span className="text-foreground/50">{drawback}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
