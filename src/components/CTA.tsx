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

          <div className="flex justify-center">
            <button onClick={onBookCallClick} className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg transition-colors font-semibold rounded-full">
              Book Free Call
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;