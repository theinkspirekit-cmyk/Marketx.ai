import { ArrowRight, Zap, ShoppingCart, Share2, Workflow, Check } from "lucide-react";

interface BenefitServicesProps {
  onBookCallClick: () => void;
}

const BenefitServices = ({ onBookCallClick }: BenefitServicesProps) => {
  const services = [
    {
      icon: Zap,
      iconColor: "text-blue-500",
      borderColor: "border-blue-500",
      headline: "Never Lose a Lead Again",
      description: "Respond to every lead in 60 seconds, 24/7—even while you sleep",
      metrics: [
        { icon: "⚡", label: "3x conversions", color: "bg-green-500/20 text-green-500" },
        { icon: "⏱️", label: "2 weeks", color: "bg-blue-500/20 text-blue-500" },
        { icon: "💰", label: "Save $4.2K/mo", color: "bg-orange-500/20 text-orange-500" }
      ],
      cta: "Get Lead Response Automation"
    },
    {
      icon: ShoppingCart,
      iconColor: "text-green-500",
      borderColor: "border-green-500",
      headline: "Fulfill 10x More Orders Without Hiring",
      description: "Complete order processing automation from purchase to shipping notification",
      metrics: [
        { icon: "⚡", label: "90% time saved", color: "bg-green-500/20 text-green-500" },
        { icon: "⏱️", label: "3 weeks", color: "bg-blue-500/20 text-blue-500" },
        { icon: "💰", label: "Save $8.5K/mo", color: "bg-orange-500/20 text-orange-500" }
      ],
      cta: "Automate My Orders"
    },
    {
      icon: Share2,
      iconColor: "text-purple-500",
      borderColor: "border-purple-500",
      headline: "Post Consistently Without Thinking",
      description: "AI-powered content scheduling across all platforms automatically",
      metrics: [
        { icon: "⚡", label: "20 hrs saved", color: "bg-green-500/20 text-green-500" },
        { icon: "⏱️", label: "1 week", color: "bg-blue-500/20 text-blue-500" },
        { icon: "💰", label: "Save $2K/mo", color: "bg-orange-500/20 text-orange-500" }
      ],
      cta: "Schedule Content Automatically"
    },
    {
      icon: Workflow,
      iconColor: "text-orange-500",
      borderColor: "border-orange-500",
      headline: "Automate Any Repetitive Task",
      description: "We build custom solutions for your unique business processes",
      metrics: [
        { icon: "⚡", label: "Custom solution", color: "bg-green-500/20 text-green-500" },
        { icon: "⏱️", label: "2-4 weeks", color: "bg-blue-500/20 text-blue-500" },
        { icon: "💰", label: "Save $6K/mo avg", color: "bg-orange-500/20 text-orange-500" }
      ],
      cta: "Book Strategy Call"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            <span className="gradient-text">What We Automate</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Choose from our proven automation solutions or let us build a custom system for your business
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-3xl border-t-4 ${service.borderColor} shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <service.icon className={`w-16 h-16 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.headline}</h3>
                <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">{service.description}</p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className={`${metric.color} px-4 py-2 rounded-lg font-semibold text-sm`}>
                      <span className="mr-1">{metric.icon}</span>
                      {metric.label}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={onBookCallClick}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-glow text-primary-foreground py-4 rounded-xl font-semibold text-lg transition-all duration-300 group shadow-md hover:shadow-xl"
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitServices;
