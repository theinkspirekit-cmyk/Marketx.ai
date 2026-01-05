import { Target, ShoppingCart, Share2, Bot } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Services = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 });
  const services = [
    {
      title: "Lead Generation Automation",
      description: "Capture, qualify, and nurture leads automatically 24/7. Perfect for marketing agencies, real estate brokers, and B2B sales teams. Never miss another potential customer.",
      icon: Target,
      iconBg: "bg-primary/20",
      idealFor: "Marketing Agencies • Real Estate • Coaches",
      typicalResults: "Save 8 hours/week • 40% more qualified leads",
      features: [
        "Auto lead capture",
        "Smart qualification",
        "Follow-up sequences",
        "CRM integration"
      ]
    },
    {
      title: "E-commerce Workflow Automation",
      description: "Streamline your online store operations from inventory to customer service. Ideal for Shopify, WooCommerce, and multi-channel sellers.",
      icon: ShoppingCart,
      iconBg: "bg-primary/20",
      idealFor: "Online Stores • Dropshippers • Retailers",
      typicalResults: "Reduce errors by 95% • Save $50K+ annually",
      features: [
        "Inventory sync",
        "Order processing",
        "Customer support",
        "Review management"
      ]
    },
    {
      title: "Social Media Scheduling Automation",
      description: "Consistent social presence with automated posting and engagement tracking. Perfect for agencies, influencers, and small business owners.",
      icon: Share2,
      iconBg: "bg-primary/20",
      idealFor: "Agencies • Content Creators • SMBs",
      typicalResults: "Save 10 hours/week • 3x posting consistency",
      features: [
        "Multi-platform posting",
        "Content calendar",
        "Engagement tracking",
        "Analytics reports"
      ]
    },
    {
      title: "Custom AI Workflows",
      description: "Bespoke automation solutions tailored to your specific business processes. Ideal for unique workflows that need AI-powered decision making.",
      icon: Bot,
      iconBg: "bg-primary/20",
      idealFor: "All Industries • Complex Processes",
      typicalResults: "Fully customized • Maximum efficiency",
      features: [
        "Process analysis",
        "Custom workflows",
        "AI integration",
        "Ongoing optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Automation Services</span>
            <br />
            <span className="text-muted-foreground">That Actually Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We specialize in business automations that save time, reduce errors, and boost productivity.
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`glass-card p-8 hover-glow transition-all duration-300 hover:scale-[1.02] scroll-animate ${
                  cardsInView ? `animate-slide-up-fade stagger-${index + 1}` : ''
                }`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`${service.iconBg} p-3 rounded-full flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Ideal For:
                  </p>
                  <p className="text-sm text-foreground">{service.idealFor}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                    Typical Results:
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {service.typicalResults}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;