import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
interface UseCaseProps {
  onBookCallClick: () => void;
}
const UseCases = ({
  onBookCallClick
}: UseCaseProps) => {
  const {
    ref: headerRef,
    isInView: headerInView
  } = useInView({
    threshold: 0.3
  });
  const {
    ref: cardsRef,
    isInView: cardsInView
  } = useInView({
    threshold: 0.1
  });
  const cases = [{
    title: "Marketing Agency",
    problem: "Spending 15+ hours/week on manual lead tracking and client reporting",
    solution: "Automated lead capture, CRM updates, and weekly performance reports",
    results: ["14 hours saved weekly", "Zero missed leads", "Client satisfaction up 40%"],
    icon: "📊"
  }, {
    title: "E-commerce Store",
    problem: "Inventory chaos and delayed customer responses hurting sales",
    solution: "Real-time inventory sync, automated order processing, and instant support",
    results: ["20% faster fulfillment", "95% support automation", "30% revenue increase"],
    icon: "🛍️"
  }, {
    title: "Coaching Business",
    problem: "Drowning in scheduling, follow-ups, and content posting",
    solution: "Smart scheduling, automated nurture sequences, and social posting",
    results: ["12 hours saved weekly", "2x booking rate", "Consistent social presence"],
    icon: "💼"
  }, {
    title: "Real Estate Agency",
    problem: "Manual property listings and lead qualification eating up time",
    solution: "Automated listing distribution, lead scoring, and follow-up workflows",
    results: ["18 hours saved weekly", "3x qualified leads", "50% faster closings"],
    icon: "🏠"
  }];
  return <section id="use-cases" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Success Stories</span>
            <br />
            <span className="text-muted-foreground">Real Results from Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses like yours are saving time and scaling with automation
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cases.map((useCase, index) => <div key={index} className={`glass-card p-8 hover-glow transition-all duration-300 hover:scale-[1.02] scroll-animate ${cardsInView ? `${index % 2 === 0 ? 'animate-slide-left-fade' : 'animate-slide-right-fade'} stagger-${Math.floor(index / 2) + 1}` : ''}`}>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">{useCase.title}</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm font-semibold text-destructive mb-2">❌ The Problem:</div>
                  <p className="text-muted-foreground text-sm">{useCase.problem}</p>
                </div>
                
                <div>
                  <div className="text-sm font-semibold text-primary mb-2">✅ Our Solution:</div>
                  <p className="text-foreground text-sm">{useCase.solution}</p>
                </div>
                
                <div>
                  <div className="text-sm font-semibold text-primary mb-2">📈 Results:</div>
                  <ul className="space-y-1">
                    {useCase.results.map((result, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {result}
                      </li>)}
                  </ul>
                </div>
              </div>

              <button onClick={onBookCallClick} className="w-full bg-background text-primary border-2 border-primary hover:bg-primary/10 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span>Get Your Custom Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>)}
        </div>

        <div className="text-center mt-12">
          <button onClick={onBookCallClick} className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg transition-colors font-semibold rounded-full hover:scale-105 duration-300"> Book Your Free Strategy Call Now</button>
          <p className="text-sm text-muted-foreground mt-4"> 30-minute call •  Custom automation plan •  No commitment required</p>
        </div>
      </div>
    </section>;
};
export default UseCases;