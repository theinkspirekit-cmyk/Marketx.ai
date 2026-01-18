import { useInView } from "@/hooks/useInView";
import { Star, MessageSquare } from "lucide-react";

const Testimonials = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 });

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
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      {/* Outer glass container */}
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 md:p-12 rounded-3xl">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-medium">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
              What Our <span className="text-muted-foreground italic font-normal">Clients Are</span> Saying
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by teams and businesses across all industries.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div 
            ref={cardsRef}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`glass-card p-6 scroll-animate ${cardsInView ? `animate-scale-fade stagger-${index + 1}` : ''}`}
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
      </div>
    </section>
  );
};

export default Testimonials;
