import { useInView } from "@/hooks/useInView";
import { Zap, Brain, MailCheck } from "lucide-react";

const HowItWorks = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Zap,
      title: "Instant Lead Response",
      description: "Every inquiry gets an instant, intelligent reply — whether it's 2pm or 2am. No more lost leads from slow responses.",
    },
    {
      icon: Brain,
      title: "Your Knowledge, Automated",
      description: "We train AI on your business knowledge so it answers questions, qualifies leads, and books calls exactly like your best team member.",
    },
    {
      icon: MailCheck,
      title: "Hands-Off Follow-Up",
      description: "Automated sequences nurture leads through email, SMS, and WhatsApp until they're ready to buy — without manual effort.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`max-w-6xl mx-auto scroll-animate ${isInView ? 'animate-reveal-up' : ''}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight">
              How It{" "}
              <span className="font-instrument-serif italic text-primary font-normal">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three core systems that turn your lead generation on autopilot.
            </p>
          </div>

          {/* 3 Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="clean-card p-8">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
