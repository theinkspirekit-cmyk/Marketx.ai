import { useInView } from "@/hooks/useInView";
import { Star, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "James Whitmore",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "They didn't just build automation, they built momentum.",
      description: "They didn't just automate tasks, they helped us rethink how we work. Their insight and execution were top-tier.",
      stars: 5
    },
    {
      name: "Daniel Reyes",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "It feels like having an extra project manager but smarter.",
      description: "The task automation system they built saved our team hours every week. Everything just flows now, with zero micromanagement.",
      stars: 5
    },
    {
      name: "Sarah Malik",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      quote: "We saw results within the first week, it was a game changer.",
      description: "Calisto helped us automate a huge chunk of our workflow without changing how we work. Their team truly understands both AI and business logic.",
      stars: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      quote: "The ROI was visible within the first month.",
      description: "Automation reduced our operational costs by 40%. The team delivered exactly what we needed.",
      stars: 5
    },
    {
      name: "Emily Torres",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "Our campaigns now run on autopilot.",
      description: "From lead nurturing to reporting, everything is automated. Game changer for our marketing team.",
      stars: 5
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-container mb-6">
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            What Our <span className="font-instrument-serif italic text-muted-foreground font-normal">Clients Are</span> Saying
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by teams and businesses across all industries.
          </p>
        </div>

        {/* Animated Testimonial Cards Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] liquid-glass-container p-6"
              >
                {/* Header with avatar and stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-lg font-medium text-foreground mb-4">
                  "{testimonial.quote}"
                </blockquote>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(testimonials.length - 2)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Logo strip */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="flex items-center justify-center gap-12 opacity-40">
            <span className="text-xl font-bold tracking-wider text-foreground">IPSUM</span>
            <span className="text-xl font-bold tracking-wider text-foreground">LOGO</span>
            <span className="text-xl font-bold tracking-wider text-foreground">///</span>
            <span className="text-xl font-bold tracking-wider text-foreground">∞</span>
            <span className="text-xl font-bold tracking-wider text-foreground">||||</span>
            <span className="text-xl font-bold tracking-wider text-foreground">LOGO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
