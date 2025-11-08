interface CTAProps {
  onBookCallClick: () => void;
}
const CTA = ({
  onBookCallClick
}: CTAProps) => {
  return (
    <section id="cta" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Ready to Save 10+ Hours</span>
              <br />
              <span className="text-muted-foreground">Every Single Week?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Book your free automation strategy call today and discover exactly which workflows will save you the most time and money. No commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
              <span>✓ Free 30-minute consultation</span>
              <span>✓ Custom automation blueprint</span>
              <span>✓ ROI calculation included</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onBookCallClick} 
              className="btn-secondary-ref px-10 py-5 text-lg"
            >
              Schedule My Free Strategy Call
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary-ref px-10 py-5 text-lg"
            >
              Learn More About Our Services
            </button>
          </div>

          {/* Additional trust element */}
          <p className="text-center mt-8 text-sm text-muted-foreground">
            Join 500+ businesses already saving time with our automation solutions
          </p>
        </div>
      </div>
    </section>
  );
};
export default CTA;