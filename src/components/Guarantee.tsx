import { Shield, CheckCircle, Clock, Headphones } from "lucide-react";

interface GuaranteeProps {
  onBookCallClick: () => void;
}

const Guarantee = ({ onBookCallClick }: GuaranteeProps) => {
  return (
    <section className="py-20 bg-muted/5 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-3xl text-center border-2 border-primary/30 relative overflow-hidden">
            {/* Background Badge */}
            <div className="absolute top-0 right-0 opacity-5">
              <Shield className="w-96 h-96 text-primary" />
            </div>

            {/* Badge */}
            <div className="relative mb-8 inline-block">
              <div className="bg-primary/20 rounded-full w-32 h-32 flex items-center justify-center mx-auto border-4 border-primary shadow-glow">
                <Shield className="w-16 h-16 text-primary" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                100% GUARANTEED
              </div>
            </div>

            {/* Content */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Iron-Clad Guarantee</span>
            </h2>

            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-xl text-foreground/90 leading-relaxed mb-6">
                If our automation doesn't save you at least <span className="font-bold text-primary">20 hours per month</span> in the first 90 days, we'll refund <span className="font-bold text-primary">100% of your investment</span>. No questions asked.
              </p>
              
              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Plus: 6 months of free support and maintenance included.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-success mb-2" />
                <p className="text-sm text-foreground/80">20+ Hours Saved or Full Refund</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-cyan mb-2" />
                <p className="text-sm text-foreground/80">90-Day Guarantee Period</p>
              </div>
              <div className="flex flex-col items-center">
                <Headphones className="w-8 h-8 text-primary mb-2" />
                <p className="text-sm text-foreground/80">6 Months Free Support</p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onBookCallClick}
              className="btn-secondary-ref px-10 py-6 text-lg hover:scale-105 transition-all duration-300 shadow-glow"
            >
              Claim Your Free Audit →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
