import { useInView } from "@/hooks/useInView";
import { Rocket, CheckCircle } from "lucide-react";

interface CTAProps {
  onBookCallClick: () => void;
}

const CTA = ({ onBookCallClick }: CTAProps) => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.3 });

  return (
    <section id="cta" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className={`max-w-4xl mx-auto scroll-animate ${isInView ? 'animate-bounce-in' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Let's Automate</span>
              <br />
              <span className="text-muted-foreground">Your Business Today</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book your free strategy call and discover which automations will save you the most time and money.
            </p>
          </div>

          <div className="flex justify-center flex-col items-center gap-6">
            <button 
              onClick={onBookCallClick} 
              className="btn-secondary-ref px-10 py-5 text-lg hover:scale-105 duration-300 inline-flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Schedule My Free Strategy Call
            </button>
            <div className="liquid-glass-container px-8 py-4 rounded-full flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Fast Implementation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
