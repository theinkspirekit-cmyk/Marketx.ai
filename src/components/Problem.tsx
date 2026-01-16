import { useInView } from "@/hooks/useInView";
import { Star } from "lucide-react";
import dheekshitImg from "@/assets/dheekshit.jpg";

const Problem = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.3 });

  return (
    <section className="py-24 md:py-32 relative bg-white">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className={`text-center max-w-4xl mx-auto scroll-animate ${isInView ? 'animate-fade-in' : ''}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground mb-10">
            <Star className="w-4 h-4 text-background fill-background" />
            <span className="text-sm text-background font-medium tracking-wide uppercase">We Analyze Your Data</span>
          </div>

          {/* Quote */}
          <p className="text-3xl md:text-4xl lg:text-[42px] text-muted-foreground leading-relaxed font-normal mb-12">
            We find what to <span className="font-instrument-serif italic text-[#b8d4e8]">automate</span>, who your users are & how
            AI can optimize your <span className="font-instrument-serif italic text-[#b8d4e8]">workflow</span>. Best part is we also
            build and launch <span className="font-instrument-serif italic text-[#b8d4e8]">real solutions</span>."
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
