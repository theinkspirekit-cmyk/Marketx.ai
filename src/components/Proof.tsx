const Proof = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "E-commerce Owner",
      company: "StyleHub",
      content: "AutomateFlow saved us 15 hours per week on order processing. Our customer satisfaction increased 40% with faster response times.",
      metric: "15hrs/week saved"
    },
    {
      name: "Marcus Johnson", 
      role: "Business Coach",
      company: "Growth Catalyst",
      content: "Lead follow-up automation increased our conversion rate by 65%. We never miss a potential client anymore.",
      metric: "65% conversion boost"
    },
    {
      name: "Elena Rodriguez",
      role: "Agency Owner", 
      company: "Digital Dynamics",
      content: "Client reporting that used to take 8 hours now happens automatically. We can focus on strategy instead of spreadsheets.",
      metric: "8hrs/week to 0hrs"
    }
  ];

  const tools = [
    { name: "Make", logo: "🔗" },
    { name: "Zapier", logo: "⚡" },
    { name: "OpenAI", logo: "🤖" },
    { name: "Google Workspace", logo: "📧" },
    { name: "Slack", logo: "💬" },
    { name: "HubSpot", logo: "📊" },
  ];

  const stats = [
    { number: "500+", label: "Automations Built" },
    { number: "98.2%", label: "Success Rate" },  
    { number: "2,000+", label: "Hours Saved Monthly" },
    { number: "48hr", label: "Average Setup Time" }
  ];

  return (
    <section id="proof" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Proven Results</span>
            <br />
            <span className="text-muted-foreground">Real Client Success</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center hover-glow">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-glow transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <div className="text-2xl font-bold text-primary mb-2">{testimonial.metric}</div>
                <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tool Integration */}
        <div className="glass-card p-8 text-center">
          <h3 className="text-2xl font-bold mb-6 gradient-text">We Work With Your Favorite Tools</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Seamlessly integrate with the platforms you already use. No need to change your workflow.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center space-x-2 glass-card p-4 hover-glow">
                <span className="text-2xl">{tool.logo}</span>
                <span className="text-foreground font-semibold">{tool.name}</span>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center space-x-2 bg-gradient-primary px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-primary-foreground rounded-full pulse-glow"></div>
            <span className="text-primary-foreground font-semibold">100+ Integrations Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;