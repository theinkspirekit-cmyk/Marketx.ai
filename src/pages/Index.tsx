import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import RevenueDisappears from "@/components/RevenueDisappears";
import SolutionComparison from "@/components/SolutionComparison";
import HowItWorks from "@/components/HowItWorks";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import BuiltForBusiness from "@/components/BuiltForBusiness";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import CalendlyModal from "@/components/CalendlyModal";
import ChatWidget from "@/components/ChatWidget";
import { useState } from "react";

const Index = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="min-h-screen font-geist">
      <Header onBookCallClick={() => setShowCalendly(true)} />

      <main>
        <Hero onBookCallClick={() => setShowCalendly(true)} />
        <Integrations />
        <RevenueDisappears />
        <SolutionComparison />
        <HowItWorks />
        <ProcessSteps />
        <Testimonials />
        <BuiltForBusiness />
        <FAQ />
        <CTA onBookCallClick={() => setShowCalendly(true)} />
      </main>

      <Footer />
      <MobileCTA onBookCallClick={() => setShowCalendly(true)} />
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
      <ChatWidget onBookCallClick={() => setShowCalendly(true)} />
    </div>
  );
};

export default Index;
