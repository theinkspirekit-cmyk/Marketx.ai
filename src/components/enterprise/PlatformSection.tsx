import { useInView } from "@/hooks/useInView";
import { 
  Network, 
  Search, 
  Shield, 
  Code2, 
  Wrench, 
  BarChart3,
  ChevronRight 
} from "lucide-react";

const PlatformSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const capabilities = [
    {
      icon: Network,
      title: "Multi-Agent Orchestration",
      description: "Coordinate multiple AI agents to handle complex, multi-step workflows with shared memory and intelligent task delegation"
    },
    {
      icon: Search,
      title: "Enterprise Search + Data AI",
      description: "Agentic RAG across 100+ data sources with intelligent retrieval, knowledge graphs, and semantic understanding"
    },
    {
      icon: Shield,
      title: "AI Security & Governance",
      description: "Built-in guardrails, RBAC, audit logs, and compliance frameworks ensuring responsible AI at enterprise scale"
    },
    {
      icon: Code2,
      title: "No-Code + Pro-Code Tools",
      description: "Visual AI agent builder for business users, SDKs and APIs for developers—choose your development approach"
    },
    {
      icon: Wrench,
      title: "AI Engineering Tools",
      description: "Model Hub, Prompt Studio, and Evaluation Studio for optimizing AI performance and managing multiple LLMs"
    },
    {
      icon: BarChart3,
      title: "Observability & Analytics",
      description: "Real-time agent tracing, performance monitoring, and actionable insights across all AI operations"
    }
  ];

  const layers = [
    { name: "AI Solutions Layer", items: ["Work", "Service", "Process"], color: "from-blue-500 to-cyan-500" },
    { name: "Multi-Agent Orchestration", items: ["Agent Coordination", "Memory", "Tools"], color: "from-purple-500 to-pink-500" },
    { name: "Platform Capabilities", items: ["Search AI", "Governance", "No-Code/Pro-Code"], color: "from-orange-500 to-yellow-500" },
    { name: "Integration Layer", items: ["Data Sources", "APIs", "Enterprise Apps"], color: "from-green-500 to-emerald-500" },
    { name: "Infrastructure", items: ["Cloud", "Security", "Compliance"], color: "from-slate-400 to-slate-500" }
  ];

  return (
    <section className="enterprise-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-purple-950/20" />
      
      <div className="enterprise-container relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enterprise-Grade AI Agent Platform
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Built for scale, security, and sophisticated multi-agent orchestration
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className={`max-w-4xl mx-auto mb-20 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="space-y-3">
              {layers.map((layer, index) => (
                <div
                  key={index}
                  className="relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Layer Container */}
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${layer.color} bg-opacity-10 border border-white/10`}
                    style={{ background: `linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Layer Name */}
                      <div className="md:w-48 flex-shrink-0">
                        <span className={`text-sm font-semibold bg-gradient-to-r ${layer.color} bg-clip-text text-transparent`}>
                          {layer.name}
                        </span>
                      </div>
                      
                      {/* Layer Items */}
                      <div className="flex flex-wrap gap-2">
                        {layer.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="px-3 py-1.5 rounded-lg bg-white/5 text-white/70 text-sm border border-white/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connector Lines */}
                  {index < layers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-white/20 to-white/5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 5) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <capability.icon className="w-6 h-6 text-blue-400" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">{capability.description}</p>
              
              <button className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 group-hover:gap-2 transition-all">
                Learn more <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
