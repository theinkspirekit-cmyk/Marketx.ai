import { ArrowRight, Zap, ShoppingCart, Share2, Workflow, Check } from "lucide-react";

interface BenefitServicesProps {
  onBookCallClick: () => void;
}

const BenefitServices = ({ onBookCallClick }: BenefitServicesProps) => {
  const services = [
    {
      icon: Zap,
      headline: "Never Lose a Lead Again",
      description: "Respond to every lead in 60 seconds, 24/7—even while you sleep",
      metrics: [
        "3x more conversions",
        "2-week setup",
        "Save $4,200/month"
      ]
    },
    {
      icon: ShoppingCart,
      headline: "Fulfill 10x More Orders Without Hiring",
      description: "Complete order processing automation from purchase to shipping notification",
      metrics: [
        "90% time reduction",
        "3-week setup",
        "Save $8,500/month"
      ]
    },
    {
      icon: Share2,
      headline: "Post Consistently Without Thinking",
      description: "AI-powered content scheduling across all platforms automatically",
      metrics: [
        "20 hours saved monthly",
        "1-week setup",
        "Save $2,000/month"
      ]
    },
    {
      icon: Workflow,
      headline: "Automate Any Repetitive Task",
      description: "We build custom solutions for your unique business processes",
      metrics: [
        "Tailored to your needs",
        "2-4 week setup",
        "Average $6,000/month saved"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/5 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            <span className="gradient-text">What We Automate</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Choose from our proven automation solutions or let us build a custom system for your business
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover-glow transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 bg-background/50"
              >
                {/* Icon */}
                <div className="bg-primary/20 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.headline}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground/90">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={onBookCallClick}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 py-3 rounded-xl font-semibold transition-all duration-300 group"
                >
                  <span>{index === 3 ? "Book Strategy Call" : "See How It Works"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitServices;
