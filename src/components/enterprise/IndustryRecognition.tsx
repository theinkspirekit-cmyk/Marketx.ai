import { useInView } from "@/hooks/useInView";
import { Award, ChevronRight } from "lucide-react";

const IndustryRecognition = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const recognitions = [
    {
      analyst: "Gartner",
      badge: "Leader 2025",
      title: "Leader in AI Development Platforms",
      description: "Recognized for completeness of vision and ability to execute",
      color: "from-blue-500 to-blue-600"
    },
    {
      analyst: "Forrester",
      badge: "Strong Performer",
      title: "Strong Performer in Conversational AI",
      description: "Noted for enterprise-grade security and governance capabilities",
      color: "from-purple-500 to-purple-600"
    },
    {
      analyst: "IDC",
      badge: "Major Player",
      title: "Major Player in AI Software Platforms",
      description: "Highlighted for multi-agent orchestration innovation",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      analyst: "G2",
      badge: "#1 Rated",
      title: "#1 in Enterprise AI Automation",
      description: "Highest rated by verified enterprise customers",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="enterprise-section relative">
      {/* <!-- REPLACE: Add real analyst reports or remove this section --> */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      <div className="enterprise-container relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recognized by Leading Analysts
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Industry analysts consistently recognize our platform for enterprise AI innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recognitions.map((item, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Analyst Logo Placeholder */}
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <span className="text-white/60 font-bold text-sm">{item.analyst}</span>
              </div>

              {/* Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 bg-gradient-to-r ${item.color}`}>
                {item.badge}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-white/50 text-sm mb-4">{item.description}</p>

              {/* CTA */}
              <button className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 group-hover:gap-2 transition-all">
                Read Report <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryRecognition;
