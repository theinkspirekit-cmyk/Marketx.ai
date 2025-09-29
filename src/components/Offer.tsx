import { Button } from "@/components/ui/button";
const Offer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const benefits = ["Free strategy session to identify automation opportunities", "Custom automation blueprint for your business", "48-hour implementation guarantee", "30-day money-back guarantee if automations don't work", "Ongoing support and optimization included"];
  return (
    <section id="offer" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Your First Automation</span>
              <br />
              <span className="gradient-text">in 48 Hours</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Pay only if it works. We're that confident in our results.
            </p>

            <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="https://calendly.com/katkamdheekshitdatta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-xl rounded-xl transition-colors"
            >
              Start Now - It's Free →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offer;