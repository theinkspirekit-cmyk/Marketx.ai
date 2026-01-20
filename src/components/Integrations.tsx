import { useInView } from "@/hooks/useInView";

const Integrations = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });

  // First row of tools - exact logos from reference
  const toolsRow1 = [
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
    { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
    { name: "Manychat", logo: "https://cdn.worldvectorlogo.com/logos/manychat-1.svg" },
    { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
    { name: "Buildkite", logo: "https://buildkite.com/favicon.svg" },
    { name: "Mailchimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg" },
    { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
    { name: "Webflow", logo: "https://cdn.worldvectorlogo.com/logos/webflow-1.svg" },
  ];

  // Second row of tools
  const toolsRow2 = [
    { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg" },
    { name: "Loom", logo: "https://cdn.worldvectorlogo.com/logos/loom-icon.svg" },
    { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-1.svg" },
    { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
    { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg" },
    { name: "Mixpanel", logo: "https://cdn.worldvectorlogo.com/logos/mixpanel.svg" },
    { name: "Dropbox", logo: "https://cdn.worldvectorlogo.com/logos/dropbox-2.svg" },
  ];

  return (
    <section id="integrations" className="py-24 relative overflow-hidden bg-[#f5f6f8]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div 
            ref={headerRef}
            className={`text-center mb-12 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-white mb-8">
              <span className="text-sm text-foreground font-medium">Tools</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground leading-tight">
              Integrate all of
              <br />
              your favorite tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamlessly connect the platforms you already use — from marketing to analytics — and keep your work in perfect sync.
            </p>
          </div>

          {/* Tools Grid with Marquee Animation */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-border/20 overflow-hidden">
            {/* Row 1 - Moving Left */}
            <div className="relative mb-8 overflow-hidden">
              <div className="flex animate-marquee-left">
                {/* First set */}
                {toolsRow1.map((tool, index) => (
                  <div 
                    key={`row1-a-${index}`} 
                    className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 mx-6 md:mx-8 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} integration`} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {toolsRow1.map((tool, index) => (
                  <div 
                    key={`row1-b-${index}`} 
                    className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 mx-6 md:mx-8 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} integration`} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Moving Right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee-right">
                {/* First set */}
                {toolsRow2.map((tool, index) => (
                  <div 
                    key={`row2-a-${index}`} 
                    className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 mx-6 md:mx-8 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} integration`} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {toolsRow2.map((tool, index) => (
                  <div 
                    key={`row2-b-${index}`} 
                    className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 mx-6 md:mx-8 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} integration`} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
