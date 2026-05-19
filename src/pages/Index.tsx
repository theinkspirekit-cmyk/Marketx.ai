import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import RevenueDisappears from "@/components/RevenueDisappears";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import WhoFor from "@/components/WhoFor";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import CalendlyModal from "@/components/CalendlyModal";
import ChatWidget from "@/components/ChatWidget";
import { useState } from "react";

const Index = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const openCal = () => setShowCalendly(true);

  return (
    <div className="min-h-screen font-geist bg-background">
      <Header onBookCallClick={openCal} />

      <main>
        <Hero onBookCallClick={openCal} />
        <Integrations />
        <RevenueDisappears />
        <VideoSection />
        <Services />
        <CaseStudies />
        <WhoFor />
        <FAQ />
        <CTA onBookCallClick={openCal} />
      </main>

      <Footer />
      <MobileCTA onBookCallClick={openCal} />
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
      <ChatWidget onBookCallClick={openCal} />
    </div>
  );
};

export default Index;
