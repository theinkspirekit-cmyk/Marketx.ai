import { useInView } from "@/hooks/useInView";
import { Star } from "lucide-react";
import mayankImg from "@/assets/mayank.jpg";

const Problem = () => {
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.3 });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div 
          ref={contentRef}
          className={`max-w-4xl mx-auto text-center scroll-animate ${contentInView ? 'animate-reveal-up' : ''}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-white mb-8">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">WE ANALYZE YOUR DATA</span>
          </div>

          {/* Main Quote */}
          <p className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed mb-12 font-medium">
            We find what to <span className="italic text-muted-foreground font-normal">automate</span>, who your users are & how AI 
            can optimize your <span className="italic text-muted-foreground font-normal">workflow</span>. Best part is we also build 
            and launch <span className="italic text-muted-foreground font-normal">real solutions</span>."
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <img 
              src={mayankImg}
              alt="Co-founder"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-muted-foreground font-medium">Co-founder & AI Strategy Lead</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
