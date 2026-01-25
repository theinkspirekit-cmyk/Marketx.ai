import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const CustomerStories = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // <!-- REPLACE: Use real testimonials with names, titles, companies, photos -->
  const testimonials = [
    {
      quote: "What we were really solving for was giving our teams 15-20 minutes back each day. That extra time translates directly to revenue—more customer calls, faster responses, better relationships.",
      name: "Sarah Chen",
      title: "VP of Digital Transformation",
      company: "Fortune 500 Financial Services",
      industry: "Financial Services",
      metrics: [
        { label: "Time Saved", value: "40%" },
        { label: "Tasks Automated", value: "15M+" },
        { label: "Annual ROI", value: "$2.3M" }
      ]
    },
    {
      quote: "The multi-agent orchestration capability completely transformed how we handle customer inquiries. Our response times dropped dramatically while satisfaction scores hit all-time highs.",
      name: "Michael Torres",
      title: "Chief Technology Officer",
      company: "Leading Healthcare Provider",
      industry: "Healthcare",
      metrics: [
        { label: "Response Time", value: "-65%" },
        { label: "CSAT Score", value: "94%" },
        { label: "Cost Reduction", value: "$1.8M" }
      ]
    },
    {
      quote: "We deployed our first AI agent in under a week. Within a month, we had automated 80% of our repetitive compliance checks. The platform's governance features gave our legal team complete peace of mind.",
      name: "Jennifer Park",
      title: "Head of Operations",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      metrics: [
        { label: "Deployment Time", value: "5 days" },
        { label: "Automation Rate", value: "80%" },
        { label: "Error Reduction", value: "95%" }
      ]
    },
    {
      quote: "The ability to coordinate multiple AI agents across our entire tech stack was game-changing. We're now processing orders 3x faster with zero increase in headcount.",
      name: "David Kim",
      title: "Director of Engineering",
      company: "E-commerce Platform",
      industry: "E-Commerce",
      metrics: [
        { label: "Processing Speed", value: "3x" },
        { label: "Orders Handled", value: "10M+" },
        { label: "Team Efficiency", value: "+150%" }
      ]
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="enterprise-section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div className="enterprise-container relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See What's Possible with AI Orchestration
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Real results from real enterprises
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
                style={{ display: index === currentSlide ? 'block' : 'none' }}
              >
                {/* Company Logo Placeholder */}
                <div className="w-24 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-8">
                  <span className="text-white/40 text-xs">LOGO</span>
                </div>

                {/* Quote */}
                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-500/20" />
                  <p className="text-xl md:text-2xl text-white leading-relaxed pl-8">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Attribution */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-white/50 text-sm">{testimonial.title}</div>
                    <div className="text-white/40 text-sm">{testimonial.company}</div>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium">
                      {testimonial.industry}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {testimonial.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-white/50 text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full md:-translate-x-16 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full md:translate-x-16 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all">
            Read All Customer Stories
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
