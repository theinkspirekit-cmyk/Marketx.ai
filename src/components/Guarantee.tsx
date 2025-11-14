import { Shield, CheckCircle, Clock, Headphones } from "lucide-react";

interface GuaranteeProps {
  onBookCallClick: () => void;
}

const Guarantee = ({ onBookCallClick }: GuaranteeProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-cyan relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center relative">
            {/* Badge with Animation */}
            <div className="relative mb-8 inline-block group">
              <div className="bg-yellow-400 rounded-full w-32 h-32 flex items-center justify-center mx-auto border-4 border-yellow-300 shadow-[0_0_40px_rgba(250,204,21,0.6)] group-hover:rotate-12 transition-transform duration-500">
                <Shield className="w-16 h-16 text-yellow-900" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-900 text-yellow-100 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                100% MONEY BACK
              </div>
            </div>

            {/* Content */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Iron-Clad Guarantee
            </h2>

            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-2xl text-white leading-relaxed mb-6">
                If our automation doesn't save you at least <span className="font-bold">20 hours per month</span> in the first 90 days, we'll refund <span className="font-bold">100% of your investment</span>. No questions asked.
              </p>
              
              <div className="bg-blue-900/30 border-2 border-blue-200/50 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-xl font-semibold text-white">
                  PLUS: 6 months of free support and maintenance included with every project
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-10 h-10 text-white mb-2" />
                <p className="text-sm text-white font-medium">20+ Hours Saved or Full Refund</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-10 h-10 text-white mb-2" />
                <p className="text-sm text-white font-medium">90-Day Guarantee Period</p>
              </div>
              <div className="flex flex-col items-center">
                <Headphones className="w-10 h-10 text-white mb-2" />
                <p className="text-sm text-white font-medium">6 Months Free Support</p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onBookCallClick}
              className="bg-white text-primary hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Claim Your Free Audit - Risk Free →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
