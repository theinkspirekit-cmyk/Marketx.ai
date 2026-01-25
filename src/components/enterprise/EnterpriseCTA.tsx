import { ChevronRight, Check } from "lucide-react";

interface EnterpriseCTAProps {
  onBookCallClick: () => void;
}

const EnterpriseCTA = ({ onBookCallClick }: EnterpriseCTAProps) => {
  return (
    <section className="enterprise-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      <div className="enterprise-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Transform Your Enterprise with AI?</h2>
          <p className="text-lg text-white/60">Join hundreds of organizations orchestrating AI agents at scale</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise Solutions</h3>
            <p className="text-white/60 mb-6">Custom deployment, dedicated support, and enterprise SLAs</p>
            <button onClick={onBookCallClick} className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all flex items-center justify-center gap-2">
              Talk to an Expert <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Start Building Today</h3>
            <p className="text-white/60 mb-6">Free 14-day trial with full platform access</p>
            <button className="w-full py-4 rounded-xl font-semibold text-white border-2 border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Create Your First Agent <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/50 text-sm">
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> No credit card required</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> 14-day free trial</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
