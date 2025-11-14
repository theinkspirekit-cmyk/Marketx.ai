import { ArrowRight, MapPin, TrendingUp } from "lucide-react";

interface CaseStudiesProps {
  onBookCallClick: () => void;
}

const CaseStudies = ({ onBookCallClick }: CaseStudiesProps) => {
  const cases = [
    {
      company: "Marketing Agency",
      location: "Austin, TX",
      logo: "📊",
      before: "6 hours daily on lead follow-ups, 40% lead response rate",
      solution: "Built custom CRM automation with instant SMS/email sequences",
      results: [
        { label: "87% time reduction", value: "87%" },
        { label: "$156,000 saved annually", value: "$156K" },
        { label: "95% lead response rate", value: "95%" }
      ],
      quote: "This automation paid for itself in 6 weeks",
      author: "Sarah Chen, CEO"
    },
    {
      company: "E-commerce Store",
      location: "San Diego, CA",
      logo: "🛍️",
      before: "Manual order processing, 50 orders/day max capacity",
      solution: "Automated entire fulfillment workflow from payment to shipping",
      results: [
        { label: "500 orders/day capacity", value: "10x" },
        { label: "$94,000 saved annually", value: "$94K" },
        { label: "99.9% accuracy rate", value: "99.9%" }
      ],
      quote: "We scaled 10x without hiring a single person",
      author: "Michael Torres, Founder"
    },
    {
      company: "Real Estate Agency",
      location: "Phoenix, AZ",
      logo: "🏠",
      before: "Leads waited 4+ hours for response, 15% conversion",
      solution: "Instant lead routing with automated follow-up sequences",
      results: [
        { label: "60-second response time", value: "60s" },
        { label: "38% conversion rate", value: "38%" },
        { label: "$220,000 additional revenue", value: "$220K" }
      ],
      quote: "ROI was 800% in the first year",
      author: "David Park, Owner"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            See how businesses like yours transformed their operations
          </p>

          <div className="space-y-12">
            {cases.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top Section */}
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{caseStudy.logo}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{caseStudy.company}</h3>
                  <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{caseStudy.location}</span>
                  </div>
                </div>

                {/* Huge Metrics */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="bg-success/10 border-2 border-success/30 rounded-2xl p-6 text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <TrendingUp className="w-6 h-6 text-success" />
                      </div>
                      <p className="text-[3rem] font-bold text-success leading-none mb-2">{result.value}</p>
                      <p className="text-sm text-gray-700 font-medium">{result.label}</p>
                    </div>
                  ))}
                </div>

                {/* Problem & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-urgency rounded-full"></div>
                      <span className="text-sm font-semibold text-urgency">THE PROBLEM</span>
                    </div>
                    <p className="text-gray-700">{caseStudy.before}</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-semibold text-primary">OUR SOLUTION</span>
                    </div>
                    <p className="text-gray-900 font-medium">{caseStudy.solution}</p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="border-l-4 border-primary pl-6 py-2 mb-6 bg-gray-50 rounded-r-xl">
                  <p className="text-lg italic text-gray-900 mb-2">"{caseStudy.quote}"</p>
                  <p className="text-sm text-gray-600">— {caseStudy.author}</p>
                </div>

                {/* CTA */}
                <button
                  onClick={onBookCallClick}
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow font-semibold group"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onBookCallClick}
              className="inline-flex items-center justify-center btn-secondary-ref px-10 py-6 text-lg hover:scale-105 transition-all duration-300"
            >
              Book Your Free Strategy Call Now
            </button>
            <p className="text-sm text-gray-600 mt-4">
              ⏱️ 30-minute call • 📋 Custom automation plan • ✅ No commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
