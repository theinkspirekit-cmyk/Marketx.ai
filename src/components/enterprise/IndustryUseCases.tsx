import { useInView } from "@/hooks/useInView";
import { 
  Building2, 
  Heart, 
  Factory, 
  Code, 
  Briefcase, 
  ShoppingCart,
  ChevronRight 
} from "lucide-react";

const IndustryUseCases = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const useCases = [
    {
      icon: Building2,
      industry: "Financial Services",
      title: "Compliance Reporting Automation",
      description: "Automate regulatory reporting, KYC processes, and risk assessment with AI agents trained on financial regulations",
      metrics: "[X]% faster compliance | [X]% cost reduction",
      color: "border-t-blue-500"
    },
    {
      icon: Heart,
      industry: "Healthcare",
      title: "Patient Data Orchestration",
      description: "Coordinate AI agents across EHR systems, insurance verification, and care coordination for seamless patient experiences",
      metrics: "[X] min avg response time | [X]% satisfaction",
      color: "border-t-red-500"
    },
    {
      icon: Factory,
      industry: "Manufacturing",
      title: "Supply Chain Optimization",
      description: "Multi-agent systems managing inventory, vendor communications, and predictive maintenance across global operations",
      metrics: "[X]% inventory reduction | [X]% uptime",
      color: "border-t-amber-500"
    },
    {
      icon: Code,
      industry: "Technology",
      title: "DevOps Automation",
      description: "Autonomous agents for incident response, deployment pipelines, and infrastructure monitoring with intelligent escalation",
      metrics: "[X]% faster resolution | [X]% fewer incidents",
      color: "border-t-purple-500"
    },
    {
      icon: Briefcase,
      industry: "Professional Services",
      title: "Document Intelligence",
      description: "AI agents for contract analysis, proposal generation, and knowledge extraction from complex legal and business documents",
      metrics: "[X] hours saved per week | [X]% accuracy",
      color: "border-t-green-500"
    },
    {
      icon: ShoppingCart,
      industry: "E-Commerce",
      title: "Order Orchestration",
      description: "End-to-end automation from order receipt to fulfillment with AI agents managing inventory, logistics, and customer communication",
      metrics: "[X]% faster fulfillment | [X]% error reduction",
      color: "border-t-cyan-500"
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
            Built for Enterprise Complexity
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Industry-specific AI agents and workflows for your most demanding processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl bg-white/[0.03] border border-white/10 border-t-4 ${useCase.color} hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <useCase.icon className="w-5 h-5 text-white/60" />
                <span className="text-sm text-white/60 font-medium">{useCase.industry}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">{useCase.description}</p>
              
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 mb-4">
                <span className="text-sm text-blue-400">{useCase.metrics}</span>
              </div>
              
              <button className="flex items-center gap-1 text-sm text-white/60 hover:text-white group-hover:gap-2 transition-all">
                Learn more <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCases;
