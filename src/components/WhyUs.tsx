import { Users, Award, Zap, Shield } from "lucide-react";

const WhyUs = () => {
  const teamMembers = [
    {
      name: "Dheekshit Datta",
      role: "Founder",
      description: "Automation expert with a passion for helping businesses scale through intelligent workflows."
    },
    {
      name: "Mayank Goel",
      role: "Partner",
      description: "Technology strategist focused on delivering innovative AI solutions for business growth."
    }
  ];

  const reasons = [
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "We deliver working automations in days, not months."
    },
    {
      icon: Shield,
      title: "Reliable Systems",
      description: "Built to scale with your business without breaking."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "10+ hours saved weekly for every client we serve."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 font-poppins">
            Meet the Team Behind Your Success
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just another automation agency. We're your partners in building systems that work.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1 font-poppins">{member.name}</h3>
              <span className="text-primary font-semibold text-sm">{member.role}</span>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Points */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-card/50 rounded-xl border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{reason.title}</h4>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
