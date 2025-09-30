import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import CalendlyModal from "@/components/CalendlyModal";
import { useState } from "react";

const Index = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onBookCallClick={() => setShowCalendly(true)} />
      
      {/* One-page funnel: Hero → Problem → Services → Offer → CTA */}
      <main>
        <Hero onBookCallClick={() => setShowCalendly(true)} />
        <Problem />
        <Services />
        <Offer />
        <FAQ />
        <CTA onBookCallClick={() => setShowCalendly(true)} />
      </main>

      <Footer />
      <MobileCTA onBookCallClick={() => setShowCalendly(true)} />
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default Index;