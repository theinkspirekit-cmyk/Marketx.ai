import { useInView } from "@/hooks/useInView";

const Integrations = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: toolsRef, isInView: toolsInView } = useInView({ threshold: 0.1 });

  const tools = [
    { name: "Make", logo: "/logos/make.png" },
    { name: "n8n", logo: "/logos/n8n.png" },
    { name: "OpenAI", logo: "/logos/openai.png" },
    { name: "Google Workspace", logo: "/logos/google.png" },
    { name: "Slack", logo: "/logos/slack.png" },
    { name: "HubSpot", logo: "/logos/hubspot.png" },
  ];

  return (
    <section id="integrations" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerRef}
            className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Integrate All of Your</span>
              <br />
              <span className="gradient-text">Favorite Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamlessly connect with the platforms you already use. Our automation solutions work with 100+ popular tools and services.
            </p>
          </div>

          <div 
            ref={toolsRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className={`glass-card p-6 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 scroll-animate ${
                  toolsInView ? `animate-scale-fade stagger-${index + 1}` : ''
                }`}
              >
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} integration`} 
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                  width="48"
                  height="48"
                />
                <span className="font-semibold text-foreground text-center">{tool.name}</span>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 scroll-animate ${toolsInView ? 'animate-reveal-up' : ''}`}>
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">100+</span> integrations available and growing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
