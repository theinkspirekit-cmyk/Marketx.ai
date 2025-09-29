import { Button } from "@/components/ui/button";

const Offer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    "Free strategy session to identify automation opportunities",
    "Custom automation blueprint for your business",
    "48-hour implementation guarantee", 
    "30-day money-back guarantee if automations don't work",
    "Ongoing support and optimization included"
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 hover-glow">
            <div className="inline-flex items-center space-x-2 bg-gradient-primary px-4 py-2 rounded-full mb-8">
              <span className="text-primary-foreground font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Your First Automation</span>
              <br />
              <span className="text-muted-foreground">In 48 Hours</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We'll build and deploy your first automation within 48 hours. 
              Pay only if it works and saves you time.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Strategy Session</h3>
                <p className="text-muted-foreground">Free 30-min call to identify your biggest automation opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Fast Implementation</h3>
                <p className="text-muted-foreground">Your first automation live and running within 48 hours</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Risk-Free Guarantee</h3>
                <p className="text-muted-foreground">Pay only if the automation works and saves you time</p>
              </div>
            </div>

            <div className="glass-card p-6 mb-8 text-left max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold mb-4 text-foreground">What's Included:</h4>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-3xl font-bold text-primary mb-2">$0 Upfront</div>
              <div className="text-muted-foreground">Pay only after you see results</div>
            </div>

            <Button 
              onClick={() => scrollToSection('cta')}
              size="lg"
              className="btn-glow text-primary-foreground px-12 py-6 text-xl font-semibold"
            >
              Claim Your Free Automation
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              ⏰ Limited spots available • No credit card required • 5-minute setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;