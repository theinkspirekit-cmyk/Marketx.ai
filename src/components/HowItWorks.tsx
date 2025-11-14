import { Search, Wrench, Rocket, DollarSign, Clock, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Audit",
      subtitle: "Week 1 - FREE",
      icon: Search,
      description: "We map every manual task in your business",
      details: [
        "Identify automation opportunities",
        "Show exact ROI projection"
      ]
    },
    {
      number: 2,
      title: "Build",
      subtitle: "Week 2-3",
      icon: Wrench,
      description: "Custom automation system built for you",
      details: [
        "Integration with your existing tools",
        "Testing and refinement"
      ]
    },
    {
      number: 3,
      title: "Launch",
      subtitle: "Week 4",
      icon: Rocket,
      description: "Go live with full support",
      details: [
        "Training for your team",
        "Start saving time immediately"
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Simple 3-step process from audit to automation
          </p>

          {/* Timeline */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan to-success" 
                 style={{ width: 'calc(100% - 200px)', left: '100px' }}>
            </div>

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-8 rounded-3xl hover-glow transition-all duration-300 hover:scale-105 relative z-10 bg-background/50">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 bg-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-glow">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="bg-primary/20 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 text-center">{step.title}</h3>
                  <p className="text-primary font-semibold mb-4 text-center">{step.subtitle}</p>
                  <p className="text-foreground/90 mb-4 text-center">{step.description}</p>
                  
                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Investment Details */}
          <div className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Investment</p>
                <p className="text-2xl font-bold text-foreground">$3,500 - $12,000</p>
                <p className="text-sm text-muted-foreground">(one-time)</p>
              </div>

              <div>
                <Clock className="w-12 h-12 text-cyan mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">ROI Timeline</p>
                <p className="text-2xl font-bold text-foreground">60-90 days</p>
                <p className="text-sm text-muted-foreground">Break even</p>
              </div>

              <div>
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Guarantee</p>
                <p className="text-2xl font-bold text-foreground">100% ROI</p>
                <p className="text-sm text-muted-foreground">or money back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
