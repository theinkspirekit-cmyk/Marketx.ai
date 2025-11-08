import { Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Agency",
      result: "Saved 12 hours/week",
      quote: "The lead generation automation transformed our sales process. We're now capturing and qualifying leads 24/7 without lifting a finger.",
      metric: "40% more qualified leads",
    },
    {
      name: "Michael Chen",
      role: "E-commerce Owner",
      company: "Urban Styles",
      result: "Reduced errors by 95%",
      quote: "Inventory management used to be a nightmare. Now it's completely automated, synced across all platforms, and I haven't had a stockout in 3 months.",
      metric: "$50K+ saved annually",
    },
    {
      name: "Emily Rodriguez",
      role: "Real Estate Broker",
      company: "Premium Properties",
      result: "3x faster follow-ups",
      quote: "The AI workflows handle all my client follow-ups and scheduling. I closed 5 deals last month that would have slipped through the cracks before.",
      metric: "150% ROI in month 1",
    },
  ];

  return (
    <section id="social-proof" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-muted-foreground">Real Results From</span>
            <br />
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how business owners are saving time and increasing revenue with our AI automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-glow transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/40" />
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="mb-6">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.metric}
                  </span>
                </div>
              </div>

              <div className="border-t border-border/50 pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                <p className="text-sm text-primary font-semibold mt-2">
                  {testimonial.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
