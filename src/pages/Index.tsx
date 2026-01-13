import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import UseCases from "@/components/UseCases";
import WhyUs from "@/components/WhyUs";
import Integrations from "@/components/Integrations";
import Offer from "@/components/Offer";
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
    <div className="min-h-screen">
      <Header onBookCallClick={() => setShowCalendly(true)} />
      
      {/* One-page funnel: Hero → Problem → Video → Services → Use Cases → FAQ → CTA */}
      <main>
        <Hero onBookCallClick={() => setShowCalendly(true)} />
        <Problem />
        <VideoSection />
        <Services />
        <UseCases onBookCallClick={() => setShowCalendly(true)} />
        <WhyUs />
        <Integrations />
        <Offer />
        <FAQ />
        <CTA onBookCallClick={() => setShowCalendly(true)} />
      </main>

      <Footer />
      <MobileCTA onBookCallClick={() => setShowCalendly(true)} />
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
      <ChatWidget onBookCallClick={() => setShowCalendly(true)} />
      <ChatWidget onBookCallClick={() => setShowCalendly(true)} />
    </div>
  );
};

export default Index;