import dashboardPreview from "@/assets/dashboard-preview.jpg";
const Services = () => {
  const services = [{
    title: "Lead Gen Automation",
    description: "Capture, qualify, and nurture leads automatically. Never miss another potential customer.",
    features: ["Auto lead capture", "Smart qualification", "Follow-up sequences", "CRM integration"],
    icon: "🎯"
  }, {
    title: "E-commerce Automations",
    description: "Streamline your online store operations from inventory to customer service.",
    features: ["Inventory sync", "Order processing", "Customer support", "Review management"],
    icon: "🛒"
  }, {
    title: "Social Media Scheduling",
    description: "Consistent social presence with automated posting and engagement tracking.",
    features: ["Multi-platform posting", "Content calendar", "Engagement tracking", "Analytics reports"],
    icon: "📱"
  }, {
    title: "Custom AI Workflows",
    description: "Bespoke automation solutions tailored to your specific business processes.",
    features: ["Process analysis", "Custom workflows", "AI integration", "Ongoing optimization"],
    icon: "🤖"
  }];
  return <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Automation Services</span>
            <br />
            <span className="text-muted-foreground">That Actually Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We specialize in business automations that save time, reduce errors, and boost productivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => <div key={index} className="glass-card p-8 hover-glow transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start space-x-4">
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* Dashboard Preview */}
        
      </div>
    </section>;
};
export default Services;