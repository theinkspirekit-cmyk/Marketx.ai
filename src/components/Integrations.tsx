const tools = [
  "HubSpot", "Salesforce", "WhatsApp", "Slack", "Calendly",
  "Zapier", "Make.com", "ActiveCampaign", "Mailchimp", "Notion",
  "Google Sheets", "Airtable", "Shopify", "Stripe"
];

const Integrations = () => {
  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-4">
        <p className="text-xs text-muted-foreground tracking-widest uppercase text-center font-medium">
          Seamlessly integrating with your tech stack
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {[...tools, ...tools].map((tool, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 text-muted-foreground font-medium text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
