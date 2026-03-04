const tools = [
  "Pipedrive", "GoHighLevel", "Stripe", "Gmail", "HubSpot", 
  "Salesforce", "WhatsApp", "Slack", "Calendly", "Zapier", 
  "Make.com", "ActiveCampaign"
];

const MarqueeRow = () => (
  <div className="flex items-center whitespace-nowrap">
    {tools.map((tool, i) => (
      <span key={i} className="flex items-center">
        <span className="text-lg md:text-xl font-medium text-foreground/70 px-4 md:px-6">{tool}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
      </span>
    ))}
  </div>
);

const Integrations = () => {
  return (
    <section className="py-12 bg-background border-y border-border/30">
      <div className="text-center mb-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
          Seamlessly integrating with your tech stack
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee-left">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
