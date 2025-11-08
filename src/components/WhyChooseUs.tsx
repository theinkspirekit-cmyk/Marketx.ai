import { CheckCircle, Clock, Shield, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save 10+ Hours Weekly",
      description: "Reclaim valuable time by automating repetitive tasks. Focus on growing your business while AI handles the busywork.",
    },
    {
      icon: Shield,
      title: "99.9% Accuracy Guaranteed",
      description: "Our AI automation workflows ensure precision and reliability. Reduce human errors and maintain consistent quality.",
    },
    {
      icon: TrendingUp,
      title: "300-500% ROI in Month 1",
      description: "Most clients see immediate returns on investment. Transform time savings into revenue growth with proven automation solutions.",
    },
    {
      icon: CheckCircle,
      title: "48-Hour Implementation",
      description: "Fast deployment with zero technical knowledge required. We handle setup, testing, and training so you can start saving time immediately.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose</span>
            <br />
            <span className="text-muted-foreground">Marktrix.ai for Business Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of businesses that trust us to automate their workflows and drive measurable results through AI-powered process optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 hover-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">500+ Automations Deployed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">10,000+ Hours Saved</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">98% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
