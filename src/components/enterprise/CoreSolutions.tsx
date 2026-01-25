import { useInView } from "@/hooks/useInView";
import { Network, MessageSquare, Cog, ChevronRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const CoreSolutions = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const solutions = [
    {
      icon: Network,
      title: "AI for Work",
      description: "Search across enterprise silos, automate complex workflows, and orchestrate multiple AI agents with enterprise-grade governance and control",
      features: [
        "Enterprise-wide search across all data sources",
        "Intelligent workflow orchestration",
        "Pre-built departmental AI agents (HR, IT, Finance)"
      ],
      link: "/ai-for-work",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/20"
    },
    {
      icon: MessageSquare,
      title: "AI for Service",
      description: "Leverage agentic AI capabilities to deliver personalized customer experiences and empower service teams with intelligent automation",
      features: [
        "Autonomous customer service agents",
        "Agent AI assistance for human teams",
        "Quality assurance and analytics"
      ],
      link: "/ai-for-service",
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/20"
    },
    {
      icon: Cog,
      title: "AI for Process",
      description: "Streamline knowledge-intensive business processes with autonomous AI agents that execute, monitor, and optimize continuously",
      features: [
        "End-to-end process automation",
        "Real-time analytics and monitoring",
        "Pre-built process templates"
      ],
      link: "/ai-for-process",
      gradient: "from-orange-500 to-red-500",
      iconBg: "bg-orange-500/20"
    }
  ];

  return (
    <section className="enterprise-section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div className="enterprise-container relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One Platform, Three Powerful Solutions
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Purpose-built AI orchestration for every business function
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient Border Effect on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${solution.iconBg} flex items-center justify-center mb-6`}>
                <solution.icon className={`w-7 h-7 bg-gradient-to-br ${solution.gradient} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                <solution.icon className={`w-7 h-7 text-white`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>

              {/* Description */}
              <p className="text-white/60 mb-6 leading-relaxed">{solution.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={solution.link}
                className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
              >
                Explore {solution.title} <ChevronRight className="w-4 h-4 text-white/60" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSolutions;
