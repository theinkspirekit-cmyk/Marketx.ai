import { useInView } from "@/hooks/useInView";
import { Settings, LayoutGrid, Link2, Zap, BarChart3, Shield, MoreHorizontal } from "lucide-react";

const Features = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 });

  const features = [
    {
      icon: Settings,
      title: "AI-Powered Decision Making",
      description: "Leverage intelligent automation that understands context, adapts to inputs, and takes smart actions."
    },
    {
      icon: LayoutGrid,
      title: "Custom Workflows",
      description: "We design automation flows built specifically for your business needs, goals, and internal processes."
    },
    {
      icon: Link2,
      title: "Seamless Integrations",
      description: "Connect effortlessly with the tools you already use, from CRMs and email platforms to project management systems."
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Get up and running quickly. Our lightweight, scalable solutions are built to launch fast with minimal disruption."
    },
    {
      icon: BarChart3,
      title: "Real-Time Insights",
      description: "Track performance, activity, and ROI with dashboards that make it easy to monitor and optimize your automations."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with high standards for data privacy, reliability, and uptime, so you can automate with confidence."
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/80 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Automate <span className="text-muted-foreground italic font-normal">Faster,</span> Work Smarter
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Powerful features that gives you the tools to scale with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 scroll-animate ${cardsInView ? `animate-scale-fade stagger-${index + 1}` : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <button className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
                  <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
