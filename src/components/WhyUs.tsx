import { Award, Zap, Shield, Users } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import dheekshitImg from "@/assets/dheekshit-new.jpg";
import venugopalImg from "@/assets/venugopal-new.png";

const WhyUs = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: teamRef, isInView: teamInView } = useInView({ threshold: 0.1 });

  const teamMembers = [
    {
      name: "Dheekshit Datta",
      role: "Founder",
      image: dheekshitImg,
    },
    {
      name: "Venugopal",
      role: "CSO",
      image: venugopalImg,
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
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Meet the <span className="font-instrument-serif italic text-muted-foreground font-normal">Team Behind</span> Marktrix
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate engineers, designers, and strategists.
          </p>
        </div>

        {/* Team Members - Card Style with liquid glass */}
        <div 
          ref={teamRef}
          className={`grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 scroll-animate ${teamInView ? 'animate-reveal-up' : ''}`}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="liquid-glass-container p-4"
            >
              {/* Large Image */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-muted">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name and Role */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <span className="text-sm text-muted-foreground">{member.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:bg-muted/50 transition-colors">
                    <span className="text-sm font-medium text-muted-foreground">𝕏</span>
                  </button>
                  <button className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:bg-muted/50 transition-colors">
                    <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Points with liquid glass */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 liquid-glass-container"
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
