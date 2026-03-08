import { useInView } from "@/hooks/useInView";

const CTA = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="cta" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div ref={ref} className={`scroll-animate ${isInView ? "animate-reveal-up" : ""}`}>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs text-primary font-semibold uppercase tracking-[0.2em]">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-[48px] font-bold mb-4 leading-tight" style={{ lineHeight: '66px', fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
              <span style={{ color: 'rgb(0, 0, 0)' }}>Book Your Free </span>
              <span style={{ color: 'rgb(137, 137, 137)' }}>Audit</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              15 minutes to understand your operations and show you exactly what we'd automate — no strings attached.
            </p>
          </div>

          <div className="liquid-glass-container overflow-hidden" style={{ height: "660px" }}>
            <iframe
              src="https://cal.com/dheekshit/30-min-meeting?embed=true&theme=light"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a meeting"
              loading="eager"
              style={{ border: 'none', minHeight: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
