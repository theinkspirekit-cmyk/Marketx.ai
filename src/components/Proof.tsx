import { useInView } from "@/hooks/useInView";

const Proof = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.2 });
  const { ref: testimonialsRef, isInView: testimonialsInView } = useInView({ threshold: 0.1 });

  const testimonials = [{
    name: "Sarah Chen",
    role: "E-commerce Owner",
    company: "StyleHub",
    content: "AutomateFlow saved us 15 hours per week on order processing. Our customer satisfaction increased 40% with faster response times.",
    metric: "15hrs/week saved"
  }, {
    name: "Marcus Johnson",
    role: "Business Coach",
    company: "Growth Catalyst",
    content: "Lead follow-up automation increased our conversion rate by 65%. We never miss a potential client anymore.",
    metric: "65% conversion boost"
  }, {
    name: "Elena Rodriguez",
    role: "Agency Owner",
    company: "Digital Dynamics",
    content: "Client reporting that used to take 8 hours now happens automatically. We can focus on strategy instead of spreadsheets.",
    metric: "8hrs/week to 0hrs"
  }];
  const tools = [{
    name: "Make",
    logo: "/logos/make.png"
  }, {
    name: "n8n",
    logo: "/logos/n8n.png"
  }, {
    name: "OpenAI",
    logo: "/logos/openai.png"
  }, {
    name: "Google Workspace",
    logo: "/logos/google.png"
  }, {
    name: "Slack",
    logo: "/logos/slack.png"
  }, {
    name: "HubSpot",
    logo: "/logos/hubspot.png"
  }];
  const stats = [{
    number: "500+",
    label: "Automations Built"
  }, {
    number: "98.2%",
    label: "Success Rate"
  }, {
    number: "2,000+",
    label: "Hours Saved Monthly"
  }, {
    number: "48hr",
    label: "Average Setup Time"
  }];
  return (
    <section id="proof" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerRef}
            className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6 text-foreground">
              Proven Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of businesses already saving time and money with our automation solutions.
            </p>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center scroll-animate ${
                  statsInView ? `animate-scale-fade stagger-${index + 1}` : ''
                }`}
              >
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div ref={testimonialsRef} className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`glass-card p-6 scroll-animate ${
                  testimonialsInView ? `animate-slide-up-fade stagger-${index + 1}` : ''
                }`}
              >
                <div className="text-primary font-bold text-lg mb-3">{testimonial.metric}</div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Trusted Tools We Use</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-3 glass-card px-6 py-3">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} integration - Business automation platform`} 
                    className="w-6 h-6 object-contain" 
                    loading="lazy"
                    width="24"
                    height="24"
                  />
                  <span className="font-semibold text-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Proof;