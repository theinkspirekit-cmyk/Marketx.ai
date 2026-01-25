import { useInView } from "@/hooks/useInView";
import { ChevronRight } from "lucide-react";

const EnterpriseIntegrations = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const categories = [
    {
      title: "Business Systems",
      description: "Connect to core enterprise apps",
      logos: [
        "Salesforce", "SAP", "Workday", "ServiceNow",
        "Oracle", "Dynamics", "NetSuite", "Jira",
        "Asana", "Monday", "ClickUp", "HubSpot"
      ]
    },
    {
      title: "Knowledge Sources",
      description: "Access unstructured data across your organization",
      logos: [
        "SharePoint", "Confluence", "Google Drive", "Dropbox",
        "Slack", "Teams", "Notion", "Airtable",
        "Box", "OneDrive", "Zoom", "Gmail"
      ]
    },
    {
      title: "AI & Cloud",
      description: "Model-agnostic architecture",
      logos: [
        "OpenAI", "Claude", "Gemini", "Bedrock",
        "Azure AI", "Cohere", "Llama", "Mistral",
        "AWS", "Azure", "GCP", "On-Prem"
      ]
    }
  ];

  return (
    <section className="enterprise-section relative">
      <div className="enterprise-container">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Integrate Your Entire Tech Stack
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Pre-built connectors for 100+ enterprise applications and data sources
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
              <p className="text-white/50 text-sm mb-6">{category.description}</p>
              
              <div className="grid grid-cols-4 gap-2">
                {category.logos.map((logo, logoIndex) => (
                  <div
                    key={logoIndex}
                    className="group aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    {/* Replace with actual logo images */}
                    <span className="text-[10px] text-white/40 group-hover:text-white/70 transition-colors text-center px-1">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all group">
            View All 100+ Integrations
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseIntegrations;
