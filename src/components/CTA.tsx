interface CTAProps {
  onBookCallClick: () => void;
}
const CTA = ({
  onBookCallClick
}: CTAProps) => {
  return <section id="cta" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
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
            <button onClick={onBookCallClick} className="btn-secondary-ref px-10 py-5 text-lg hover:scale-105 duration-300">
              🚀 Schedule My Free Strategy Call
            </button>
            <div className="glass-card px-8 py-4 rounded-full">
              <p className="text-sm text-muted-foreground">
                ✅ 48-Hour Implementation • 💰 300-500% ROI • 🔒 30-Day Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;