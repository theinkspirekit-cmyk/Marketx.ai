import { useInView } from "@/hooks/useInView";
import { 
  Rocket, 
  Settings, 
  RefreshCw, 
  Layers, 
  TrendingUp, 
  Handshake 
} from "lucide-react";

const WhyChooseUs = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const differentiators = [
    {
      icon: Rocket,
      title: "Speed to Value",
      description: "Deploy your first AI agent in days, not months, with 100+ pre-built templates and accelerators"
    },
    {
      icon: Settings,
      title: "Enterprise Control",
      description: "Centralized governance, version control, and compliance management across all AI agents and workflows"
    },
    {
      icon: RefreshCw,
      title: "Model Flexibility",
      description: "Model-agnostic architecture—use any LLM, switch providers, or bring your own models without vendor lock-in"
    },
    {
      icon: Layers,
      title: "Deep Capabilities",
      description: "Multi-agent orchestration with shared memory, tool use, and sophisticated decision-making logic"
    },
    {
      icon: TrendingUp,
      title: "Proven at Scale",
      description: "Built by an AI-first company serving hundreds of global enterprises since 2014"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Official partnerships with Microsoft Azure, AWS, and leading enterprise platforms"
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
            What Sets Us Apart
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            The only platform built for true enterprise AI orchestration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
