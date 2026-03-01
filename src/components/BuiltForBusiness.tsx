import { useInView } from "@/hooks/useInView";
import { Building2, Stethoscope, ShoppingBag, GraduationCap, Briefcase, Home } from "lucide-react";

const BuiltForBusiness = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const industries = [
    { icon: Building2, label: "Agencies" },
    { icon: Stethoscope, label: "Healthcare" },
    { icon: ShoppingBag, label: "E-commerce" },
    { icon: GraduationCap, label: "Education" },
    { icon: Briefcase, label: "Consulting" },
    { icon: Home, label: "Real Estate" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`max-w-4xl mx-auto text-center scroll-animate ${isInView ? 'animate-reveal-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight">
            Built for businesses that{" "}
            <span className="font-instrument-serif italic text-primary font-normal">run on leads</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            If your revenue depends on generating and converting leads, our systems are built for you.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="clean-card p-6 flex flex-col items-center gap-3 hover:border-primary/30 transition-colors">
                <ind.icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-foreground">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForBusiness;
