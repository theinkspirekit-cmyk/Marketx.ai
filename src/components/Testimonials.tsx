import { useInView } from "@/hooks/useInView";
import { MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "James Whitmore",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "They didn't just build automation, they built momentum. Their insight and execution were top-tier.",
    },
    {
      name: "Daniel Reyes",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "It feels like having an extra project manager but smarter. The task automation saved our team hours every week.",
    },
    {
      name: "Sarah Malik",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      quote: "We saw results within the first week. They helped us automate a huge chunk of our workflow without changing how we work.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      quote: "The ROI was visible within the first month. Automation reduced our operational costs by 40%.",
    },
    {
      name: "Emily Torres",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "Our campaigns now run on autopilot. From lead nurturing to reporting, everything is automated.",
    },
  ];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-container mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-[48px] font-bold mb-4" style={{ lineHeight: '66px', fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
            <span className="text-foreground">What Our Clients Are </span>
            <span className="text-muted-foreground">Saying</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by teams and businesses across all industries.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="liquid-glass-container rounded-3xl p-10 md:p-14 text-center relative">
              <blockquote className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed mb-8">
                "{current.quote}"
              </blockquote>

              <p className="font-bold text-foreground text-base mb-1">{current.name}</p>
              <p className="text-sm text-muted-foreground mb-8">{current.role}</p>

              {/* Avatar row + navigation */}
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full bg-gradient-to-b from-card to-secondary flex items-center justify-center text-foreground shadow-[var(--shadow-raised)] hover:shadow-[var(--shadow-raised-hover)] active:shadow-[var(--shadow-pressed)] active:translate-y-0.5 transition-all flex-shrink-0 border-t border-t-[var(--surface-border-light)] border-b-2 border-b-[var(--surface-border-dark)]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex -space-x-3">
                  {testimonials.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-10 h-10 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                        i === currentIndex
                          ? 'border-primary scale-110 z-10 ring-2 ring-primary/30'
                          : 'border-white opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={goNext}
                  className="w-10 h-10 rounded-full bg-gradient-to-b from-card to-secondary flex items-center justify-center text-foreground shadow-[var(--shadow-raised)] hover:shadow-[var(--shadow-raised-hover)] active:shadow-[var(--shadow-pressed)] active:translate-y-0.5 transition-all flex-shrink-0 border-t border-t-[var(--surface-border-light)] border-b-2 border-b-[var(--surface-border-dark)]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
