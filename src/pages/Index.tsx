import { useState } from "react";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import NewHero from "@/components/NewHero";
import ProblemChecklist from "@/components/ProblemChecklist";
import ComparisonTable from "@/components/ComparisonTable";
import VideoDemo from "@/components/VideoDemo";
import HowItWorks from "@/components/HowItWorks";
import BenefitServices from "@/components/BenefitServices";
import CaseStudies from "@/components/CaseStudies";
import Guarantee from "@/components/Guarantee";
import UpdatedFAQ from "@/components/UpdatedFAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import CalendlyModal from "@/components/CalendlyModal";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="min-h-screen">
      <TrustBar />
      <Header onBookCallClick={() => setShowCalendly(true)} />
      
      {/* High-Converting Funnel: Trust Bar → Hero with ROI Calc → Problem → Comparison → Video → How It Works → Services → Case Studies → Guarantee → FAQ → Final CTA */}
      <main>
        <NewHero 
          onBookCallClick={() => setShowCalendly(true)} 
          onVideoClick={() => setShowVideoModal(true)}
        />
        <ProblemChecklist onBookCallClick={() => setShowCalendly(true)} />
        <ComparisonTable />
        <VideoDemo onBookCallClick={() => setShowCalendly(true)} />
        <HowItWorks />
        <BenefitServices onBookCallClick={() => setShowCalendly(true)} />
        <CaseStudies onBookCallClick={() => setShowCalendly(true)} />
        <Guarantee onBookCallClick={() => setShowCalendly(true)} />
        <UpdatedFAQ />
        <FinalCTA onBookCallClick={() => setShowCalendly(true)} />
      </main>

      <Footer />
      <MobileCTA onBookCallClick={() => setShowCalendly(true)} />
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
      <ExitIntentPopup onBookCallClick={() => setShowCalendly(true)} />
      <ChatWidget onBookCallClick={() => setShowCalendly(true)} />
    </div>
  );
};

export default Index;