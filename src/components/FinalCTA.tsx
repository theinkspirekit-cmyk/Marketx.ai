import { CheckCircle, Lock } from "lucide-react";

interface FinalCTAProps {
  onBookCallClick: () => void;
}

const FinalCTA = ({ onBookCallClick }: FinalCTAProps) => {
  const promises = [
    "We'll audit your current workflows",
    "Identify your biggest automation opportunities",
    "Show you exact ROI projections"
  ];

  return (
    <section className="py-20 bg-muted/5 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Ready to Get </span>
            <span className="gradient-text">40+ Hours Back</span>
            <br />
            <span className="text-foreground">Every Month?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Book your free 30-minute strategy call—no pressure, no pitch, just value
          </p>

          {/* Promises */}
          <div className="glass-card p-8 rounded-3xl mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-6">What You'll Get On This Call:</h3>
            <div className="space-y-4">
              {promises.map((promise, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground/90 text-left">{promise}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar CTA */}
          <div className="bg-gradient-to-br from-primary/20 to-cyan/20 p-12 rounded-3xl border border-primary/30">
            <button
              onClick={onBookCallClick}
              className="btn-secondary-ref px-12 py-6 text-xl mb-6 hover:scale-105 transition-all duration-300 shadow-glow"
            >
              📅 Schedule Your Free Strategy Call
            </button>
            
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Your information is secure. No spam, ever.</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 opacity-60">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-foreground/80">No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-foreground/80">100% Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-foreground/80">Zero Commitment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
