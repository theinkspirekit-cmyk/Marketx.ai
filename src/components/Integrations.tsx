import { useInView } from "@/hooks/useInView";

const Integrations = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });

  const tools = [
    { name: "Make", logo: "/logos/make.png" },
    { name: "n8n", logo: "/logos/n8n.png" },
    { name: "OpenAI", logo: "/logos/openai.png" },
    { name: "Google Workspace", logo: "/logos/google.png" },
    { name: "Slack", logo: "/logos/slack.png" },
    { name: "HubSpot", logo: "/logos/hubspot.png" },
  ];

  // Duplicate for seamless loop
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section id="integrations" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerRef}
            className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
          >
            <h2 className="text-4xl md:text-6xl font-medium mb-6">
              <span className="text-foreground">Integrate All of Your</span>
              <br />
              <span className="gradient-text">Favorite Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamlessly connect with the platforms you already use. Our automation solutions work with 100+ popular tools and services.
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative">
            {/* Gradient Overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling Container */}
            <div className="overflow-hidden">
              <div className="flex animate-marquee gap-6">
                {duplicatedTools.map((tool, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/5 rounded-2xl px-8 py-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} integration`} 
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                      width="40"
                      height="40"
                    />
                    <span className="font-semibold text-foreground whitespace-nowrap">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`text-center mt-12 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}>
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">100+</span> integrations available and growing
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Integrations;
