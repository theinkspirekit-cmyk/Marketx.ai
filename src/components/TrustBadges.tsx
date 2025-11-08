const TrustBadges = () => {
  const logos = [
    { name: "Google", path: "/logos/google.png", alt: "Google Workspace integration for AI automation" },
    { name: "Slack", path: "/logos/slack.png", alt: "Slack workflow automation integration" },
    { name: "HubSpot", path: "/logos/hubspot.png", alt: "HubSpot CRM automation and lead generation" },
    { name: "OpenAI", path: "/logos/openai.png", alt: "OpenAI powered custom AI workflows" },
    { name: "Make", path: "/logos/make.png", alt: "Make.com automation platform integration" },
    { name: "n8n", path: "/logos/n8n.png", alt: "n8n workflow automation tool integration" },
  ];

  return (
    <section className="py-12 border-y border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground text-sm mb-8 uppercase tracking-wider">
          Trusted Integrations & Technologies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo.path}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
