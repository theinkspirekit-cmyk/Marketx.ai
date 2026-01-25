import { useInView } from "@/hooks/useInView";
import { Check, ChevronRight } from "lucide-react";

const PricingSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const tiers = [
    {
      name: "Professional",
      badge: null,
      bestFor: "Growing Teams",
      price: "$X,XXX",
      period: "/month",
      features: ["Up to 10 AI agents", "100K agent interactions/month", "Standard integrations", "Email support", "Basic analytics", "Community access"],
      cta: "Start Free Trial",
      ctaStyle: "secondary",
      note: "14-day free trial • No credit card"
    },
    {
      name: "Business",
      badge: "Most Popular",
      bestFor: "Scaling Organizations",
      price: "$X,XXX",
      period: "/month",
      features: ["Unlimited AI agents", "1M agent interactions/month", "All integrations + custom", "Priority support", "Advanced analytics", "Multi-agent orchestration"],
      cta: "Start Free Trial",
      ctaStyle: "primary",
      note: "Everything in Professional, plus more"
    },
    {
      name: "Enterprise",
      badge: "Advanced Security",
      bestFor: "Large Enterprises",
      price: "Custom",
      period: "Pricing",
      features: ["Unlimited everything", "Custom SLAs & uptime", "Dedicated success team", "SOC 2, HIPAA compliance", "On-premise deployment", "White-glove onboarding"],
      cta: "Talk to Sales",
      ctaStyle: "secondary",
      note: "Custom contracts • Volume discounts"
    }
  ];

  return (
    <section className="enterprise-section relative">
      <div className="enterprise-container">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Plans That Scale With Your Business</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">From startups to Fortune 500, flexible pricing for every stage</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div key={index} className={`relative p-8 rounded-2xl bg-white/[0.03] border ${tier.badge === "Most Popular" ? 'border-blue-500/50' : 'border-white/10'} transition-all duration-500 hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              {tier.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500">{tier.badge}</div>}
              <div className="text-white/60 text-sm mb-2">{tier.bestFor}</div>
              <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                <span className="text-white/50">{tier.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-white/70 text-sm">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />{feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${tier.ctaStyle === 'primary' ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90' : 'text-white border border-white/20 hover:bg-white/10'}`}>{tier.cta}</button>
              <p className="text-center text-white/40 text-xs mt-3">{tier.note}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-white/50 text-sm">🔒 All plans include enterprise-grade security and encryption</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
