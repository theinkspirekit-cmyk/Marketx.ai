import { Target, ShoppingCart, Share2, Bot } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Lead Generation Automation",
      description: "Capture, qualify, and nurture leads automatically 24/7. Perfect for marketing agencies, real estate brokers, and B2B sales teams. Never miss another potential customer.",
      features: ["Auto lead capture", "Smart qualification", "Follow-up sequences", "CRM integration"],
      icon: Target,
      useCases: "Marketing Agencies • Real Estate • Coaches",
      results: "Save 8 hours/week • 40% more qualified leads",
    },
    {
      title: "E-commerce Workflow Automation",
      description: "Streamline your online store operations from inventory to customer service. Ideal for Shopify, WooCommerce, and multi-channel sellers.",
      features: ["Inventory sync", "Order processing", "Customer support", "Review management"],
      icon: ShoppingCart,
      useCases: "Online Stores • Dropshippers • Retailers",
      results: "Reduce errors by 95% • Save $50K+ annually",
    },
    {
      title: "Social Media Scheduling Automation",
      description: "Consistent social presence with automated posting and engagement tracking. Perfect for agencies, influencers, and small business owners.",
      features: ["Multi-platform posting", "Content calendar", "Engagement tracking", "Analytics reports"],
      icon: Share2,
      useCases: "Agencies • Content Creators • SMBs",
      results: "Save 10 hours/week • 3x posting consistency",
    },
    {
      title: "Custom AI Workflows",
      description: "Bespoke automation solutions tailored to your specific business processes. Ideal for unique workflows that need AI-powered decision making.",
      features: ["Process analysis", "Custom workflows", "AI integration", "Ongoing optimization"],
      icon: Bot,
      useCases: "All Industries • Complex Processes",
      results: "300-500% ROI • Fully customized",
    },
  ];
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI Workflow Automation Services</span>
            <br />
            <span className="text-muted-foreground">That Drive Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert business process automation designed to save time, reduce errors, and boost productivity. Proven solutions for lead generation, e-commerce, social media, and custom workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={index} className="glass-card p-8 hover-glow transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4 pb-4 border-b border-border/50">
                      <p className="text-xs text-muted-foreground mb-2">IDEAL FOR:</p>
                      <p className="text-sm text-foreground">{service.useCases}</p>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-xs text-primary font-semibold mb-2">TYPICAL RESULTS:</p>
                      <p className="text-sm text-foreground font-medium">{service.results}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Services;