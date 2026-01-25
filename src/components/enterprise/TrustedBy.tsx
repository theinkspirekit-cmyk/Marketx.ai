import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const TrustedBy = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [activeTab, setActiveTab] = useState("technology");

  const industries = [
    { id: "financial", label: "Financial Services" },
    { id: "healthcare", label: "Healthcare" },
    { id: "technology", label: "Technology" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "retail", label: "Retail" },
  ];

  // Placeholder logos - replace with actual client logos
  const logos: Record<string, string[]> = {
    financial: ["Bank A", "Bank B", "Insurance Co", "FinTech 1", "FinTech 2", "Bank C", "Investment Firm", "Credit Union"],
    healthcare: ["Hospital A", "Pharma Co", "HealthTech 1", "Medical Group", "Clinic Chain", "Biotech 1", "Health System", "Wellness Co"],
    technology: ["Tech Corp", "SaaS Co 1", "Cloud Provider", "AI Startup", "Enterprise 1", "Software Co", "Platform Inc", "DevTools Co"],
    manufacturing: ["Manufacturer A", "Auto Corp", "Industrial Co", "Factory Inc", "Assembly Co", "Supply Chain", "Logistics Co", "Materials Inc"],
    retail: ["Retail Giant", "E-commerce A", "Fashion Brand", "Grocery Chain", "Home Goods", "Luxury Brand", "Marketplace", "D2C Brand"],
  };

  return (
    <section className="enterprise-section relative">
      {/* <!-- REPLACE: Insert actual customer logos with permission --> */}
      <div className="enterprise-container">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Global Enterprises
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Hundreds of organizations rely on our platform for mission-critical AI orchestration
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === industry.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {industry.label}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {logos[activeTab]?.map((logo, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-300 flex items-center justify-center"
            >
              {/* Placeholder - replace with actual logo images */}
              <div className="text-white/40 group-hover:text-white/70 text-sm font-medium transition-colors">
                {logo}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">[X]+</div>
            <div className="text-white/50 text-sm">Enterprise Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">[X]M+</div>
            <div className="text-white/50 text-sm">AI Tasks Monthly</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">[X]+</div>
            <div className="text-white/50 text-sm">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-white/50 text-sm">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
