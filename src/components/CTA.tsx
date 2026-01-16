import { useInView } from "@/hooks/useInView";
import { Phone, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

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
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src={logo} alt="Marktrix.ai" className="h-10" />
            </div>
            
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
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-lg font-medium text-lg hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Schedule My Free Strategy Call</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <div className="glass-card px-8 py-4 rounded-full">
              <p className="text-sm text-muted-foreground">Fast Implementation • Proven Results • 30-Day Money-Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
