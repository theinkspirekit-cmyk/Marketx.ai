import { useInView } from "@/hooks/useInView";

const Problem = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 });
  const { ref: solutionRef, isInView: solutionInView } = useInView({ threshold: 0.2 });

  const problems = [{
    icon: "⏰",
    title: "Repetitive Tasks",
    description: "Spending hours on manual data entry, email responses, and routine processes that could be automated."
  }, {
    icon: "📧",
    title: "Missed Leads",
    description: "Potential customers slip through the cracks due to delayed follow-ups and manual lead management."
  }, {
    icon: "🔄",
    title: "Manual Work",
    description: "Team members stuck doing boring, repetitive work instead of focusing on growth and creativity."
  }, {
    icon: "📊",
    title: "Data Chaos",
    description: "Information scattered across multiple platforms with no unified system or reporting."
  }];
  return <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-bounce-in' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-muted-foreground">Stuck in the</span>
            <br />
            <span className="gradient-text">Manual Work Trap?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Most businesses waste 10+ hours weekly on tasks that could be automated. 
            Here's what's holding you back:
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => <div 
            key={index} 
            className={`glass-card p-6 hover-glow transition-all duration-300 hover:scale-105 scroll-animate ${
              cardsInView ? `animate-scale-fade stagger-${index + 1}` : ''
            }`}
          >
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>)}
        </div>

        <div className="text-center">
          <div 
            ref={solutionRef}
            className={`glass-card p-8 max-w-3xl mx-auto rounded-3xl scroll-animate ${
              solutionInView ? 'animate-slide-up-fade' : ''
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">We Fix This With Smart Automations</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Transform your business operations with AI-powered workflows that handle the boring stuff, 
              so your team can focus on what really matters - growing your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-3 sm:space-y-0 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
                <span className="text-foreground">10x Faster Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
                <span className="text-foreground">99.9% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
                <span className="text-foreground">24/7 Operation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Problem;