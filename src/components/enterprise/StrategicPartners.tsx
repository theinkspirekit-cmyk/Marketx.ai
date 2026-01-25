import { useInView } from "@/hooks/useInView";
import { ChevronRight, Check } from "lucide-react";

const StrategicPartners = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const partners = [
    {
      name: "Microsoft",
      badge: "Strategic Partner",
      title: "Microsoft Azure AI Integration",
      description: "Fully integrated with Azure AI Foundry, Microsoft 365 Copilot, Microsoft Teams, and Copilot Studio for seamless deployment",
      integrations: [
        "Azure OpenAI Service",
        "Microsoft 365 ecosystem",
        "Azure AI Search",
        "Power Platform"
      ],
      color: "from-blue-500 to-cyan-500",
      logoColor: "#00A4EF"
    },
    {
      name: "AWS",
      badge: "Technology Partner",
      title: "AWS AI & Cloud Integration",
      description: "Built on AWS infrastructure with native integration to Amazon Bedrock, Amazon Q, and Amazon Connect for enterprise-scale AI deployment",
      integrations: [
        "Amazon Bedrock",
        "Amazon Q Business",
        "Amazon Connect",
        "AWS Cloud Infrastructure"
      ],
      color: "from-orange-500 to-amber-500",
      logoColor: "#FF9900"
    }
  ];

  return (
    <section className="enterprise-section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      <div className="enterprise-container relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built on the World's Leading Platforms
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Logo Placeholder */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${partner.logoColor}20` }}
                >
                  <span className="font-bold text-lg" style={{ color: partner.logoColor }}>
                    {partner.name}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${partner.color}`}>
                  {partner.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{partner.title}</h3>
              <p className="text-white/60 mb-6">{partner.description}</p>

              {/* Integrations */}
              <ul className="space-y-2 mb-6">
                {partner.integrations.map((integration, iIndex) => (
                  <li key={iIndex} className="flex items-center gap-2 text-white/70 text-sm">
                    <Check className="w-4 h-4 text-green-400" />
                    {integration}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-all">
                  Read Announcement <ChevronRight className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-all">
                  View Marketplace <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPartners;
