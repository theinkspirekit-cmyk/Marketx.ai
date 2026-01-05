import { Award, Zap, Shield } from "lucide-react";
import dheekshitImg from "@/assets/dheekshit.jpg";
import mayankImg from "@/assets/mayank.jpg";

const WhyUs = () => {
  const teamMembers = [
    {
      name: "Dheekshit Datta",
      role: "Founder",
      image: dheekshitImg,
      description: "Automation expert with a passion for helping businesses scale through intelligent workflows."
    },
    {
      name: "Mayank Goel",
      role: "CSO",
      image: mayankImg,
      description: "Technology strategist focused on delivering innovative AI solutions for business growth."
    }
  ];

  const reasons = [
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "We deliver working automations quickly, not months."
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
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/30">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
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
