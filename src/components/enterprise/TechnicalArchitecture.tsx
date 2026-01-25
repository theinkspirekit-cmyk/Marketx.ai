import { useInView } from "@/hooks/useInView";
import { Shield, Maximize2, Globe, Lock } from "lucide-react";

const TechnicalArchitecture = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Shield,
      title: "99.9% Uptime SLA",
      description: "Redundant infrastructure across multiple regions with automatic failover and disaster recovery"
    },
    {
      icon: Maximize2,
      title: "Auto-Scaling Architecture",
      description: "Dynamically scale to handle any workload—from 100 to 10 million AI agent interactions seamlessly"
    },
    {
      icon: Globe,
      title: "Multi-Region Deployment",
      description: "Deploy AI agents globally with data residency compliance and low-latency access worldwide"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "SOC 2 Type II, GDPR, HIPAA compliant with end-to-end encryption, SSO, and granular access controls"
    }
  ];

  const certifications = [
    { name: "SOC 2", type: "Type II" },
    { name: "GDPR", type: "Compliant" },
    { name: "HIPAA", type: "Compliant" },
    { name: "ISO 27001", type: "Certified" },
    { name: "CCPA", type: "Compliant" }
  ];

  return (
    <section className="enterprise-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20" />
      
      <div className="enterprise-container relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enterprise Architecture Built for Scale
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Security, compliance, and performance at every layer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Architecture Visualization */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              {/* Simplified Architecture Diagram */}
              <div className="space-y-4">
                {[
                  { label: "UI Layer", color: "from-blue-500 to-cyan-500" },
                  { label: "Orchestration", color: "from-purple-500 to-pink-500" },
                  { label: "AI Models", color: "from-orange-500 to-red-500" },
                  { label: "Data Layer", color: "from-green-500 to-emerald-500" },
                  { label: "Security", color: "from-slate-500 to-slate-600" }
                ].map((layer, index) => (
                  <div key={index} className="relative">
                    <div 
                      className={`p-4 rounded-xl bg-gradient-to-r ${layer.color} opacity-20`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-medium">{layer.label}</span>
                    </div>
                    {index < 4 && (
                      <div className="flex justify-center py-2">
                        <svg className="w-4 h-8" viewBox="0 0 16 32">
                          <path d="M8 0 L8 32" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="4 4" className="animate-flow" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Animated Data Flows */}
              <div className="absolute top-1/4 left-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-50" />
              <div className="absolute top-1/2 right-0 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Right - Features */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-white/50 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3"
            >
              <Shield className="w-5 h-5 text-green-400" />
              <div>
                <div className="text-white font-semibold text-sm">{cert.name}</div>
                <div className="text-white/50 text-xs">{cert.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;
