import { useInView } from "@/hooks/useInView";
import dheekshitImg from "@/assets/dheekshit.jpg";

const Problem = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.3 });

  return (
    <section className="py-24 md:py-32 relative bg-[#0a0f1a]">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className={`text-center max-w-4xl mx-auto scroll-animate ${isInView ? 'animate-fade-in' : ''}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-muted-foreground tracking-wide uppercase">We Analyze Your Data</span>
          </div>

          {/* Quote */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground/90 leading-relaxed font-light italic mb-10">
            We find what to <span className="text-foreground font-medium not-italic underline decoration-primary/50 underline-offset-4">automate</span>, who your users are & how
            AI can optimize your <span className="text-foreground font-medium not-italic underline decoration-primary/50 underline-offset-4">workflow</span>. Best part is we also
            build and launch <span className="text-foreground font-medium not-italic underline decoration-primary/50 underline-offset-4">real solutions</span>."
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <img 
              src={dheekshitImg} 
              alt="Co-founder" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm text-muted-foreground">Co-founder & AI Strategy Lead</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
