import { useInView } from "@/hooks/useInView";

const Proof = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.2 });

  const stats = [
    { number: "500+", label: "Automations Built" },
    { number: "98.2%", label: "Success Rate" },
    { number: "2,000+", label: "Hours Saved Monthly" },
    { number: "48hr", label: "Average Setup Time" }
  ];

  return (
    <section id="proof" className="py-20 relative bg-white">
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
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center scroll-animate ${statsInView ? `animate-scale-fade stagger-${index + 1}` : ''}`}
              >
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
