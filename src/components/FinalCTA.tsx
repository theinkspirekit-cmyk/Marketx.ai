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
          {/* Urgency Badge */}
          <div className="mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 bg-urgency/20 text-urgency px-4 py-2 rounded-full text-sm font-bold border border-urgency/30">
              ⚠️ LIMITED AVAILABILITY
            </div>
            <p className="text-muted-foreground">We only take 5 new clients per month</p>
            <p className="text-foreground font-semibold">Next opening: {new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Ready to Get </span>
            <span className="gradient-text">40+ Hours Back</span>
            <br />
            <span className="text-foreground">Every Month?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Book your free 30-minute strategy call <span className="text-foreground font-semibold">(Worth $500)</span>
          </p>

          {/* Promises */}
          <div className="glass-card p-8 rounded-3xl mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-6">What You'll Get On This Call:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground/90 text-left">Free workflow audit <span className="text-success font-semibold">(normally $500)</span></p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground/90 text-left">Custom ROI projection for your business</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground/90 text-left">Zero-obligation, no pressure call</p>
              </div>
            </div>
          </div>

          {/* Calendar CTA */}
          <div className="bg-gradient-to-br from-primary/20 to-cyan/20 p-12 rounded-3xl border border-primary/30">
            <button
              onClick={onBookCallClick}
              className="btn-secondary-ref px-12 py-6 text-xl mb-4 hover:scale-105 transition-all duration-300 shadow-glow"
            >
              📅 Book My Free Strategy Call →
            </button>
            
            <p className="text-muted-foreground mb-4">
              📅 See available times • ⚡ <span className="text-urgency font-bold">Only 3 spots left this month</span>
            </p>

            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Your information is secure</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12">
            <p className="text-muted-foreground text-sm mb-4">Trusted integrations:</p>
            <div className="flex flex-wrap items-center justify-center gap-4 opacity-60">
              <span className="text-foreground/80 text-sm">Zapier</span>
              <span className="text-foreground/80">•</span>
              <span className="text-foreground/80 text-sm">Make</span>
              <span className="text-foreground/80">•</span>
              <span className="text-foreground/80 text-sm">n8n</span>
              <span className="text-foreground/80">•</span>
              <span className="text-foreground/80 text-sm">HubSpot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
