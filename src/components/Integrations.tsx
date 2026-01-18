import { useInView } from "@/hooks/useInView";

const Integrations = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });

  // First row of tools
  const toolsRow1 = [
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
    { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg" },
    { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg" },
    { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
    { name: "Buildkite", logo: "https://buildkite.com/favicon.svg" },
    { name: "Mailchimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg" },
    { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
    { name: "Webflow", logo: "https://cdn.worldvectorlogo.com/logos/webflow-1.svg" },
  ];

  // Second row of tools
  const toolsRow2 = [
    { name: "Framer", logo: "https://cdn.worldvectorlogo.com/logos/framer-logo.svg" },
    { name: "Loom", logo: "https://cdn.worldvectorlogo.com/logos/loom-icon.svg" },
    { name: "OpenAI", logo: "/logos/openai.png" },
    { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-1.svg" },
    { name: "HubSpot", logo: "/logos/hubspot.png" },
    { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg" },
    { name: "Mixpanel", logo: "https://cdn.worldvectorlogo.com/logos/mixpanel.svg" },
    { name: "Dropbox", logo: "https://cdn.worldvectorlogo.com/logos/dropbox-2.svg" },
  ];

  return (
    <section id="integrations" className="py-24 relative overflow-hidden bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div 
            ref={headerRef}
            className={`text-center mb-12 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white mb-8">
              <span className="text-sm text-foreground font-medium">Tools</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground">
              Integrate all of
              <br />
              your favorite tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamlessly connect the platforms you already use — from marketing to analytics — and keep your work in perfect sync.
            </p>
          </div>

          {/* Tools Grid - Static like reference */}
          <div className="liquid-glass-container p-8 rounded-3xl">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
              {toolsRow1.map((tool, index) => (
                <div 
                  key={index} 
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} integration`} 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {toolsRow2.map((tool, index) => (
                <div 
                  key={index} 
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} integration`} 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
