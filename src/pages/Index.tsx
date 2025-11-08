import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import TrustBadges from "@/components/TrustBadges";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import UseCases from "@/components/UseCases";
import SocialProof from "@/components/SocialProof";
import Resources from "@/components/Resources";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import CalendlyModal from "@/components/CalendlyModal";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import ChatWidget from "@/components/ChatWidget";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Index = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI Business Automation Services | Save 10+ Hours/Week | Marktrix.ai</title>
        <meta 
          name="description" 
          content="Transform your business with AI automation services. Expert workflow automation for lead generation, e-commerce, and custom AI solutions. Save 10+ hours weekly, reduce errors by 95%, and boost ROI." 
        />
      </Helmet>

      <Header onBookCallClick={() => setShowCalendly(true)} />
      
      {/* Optimized conversion funnel: Hero → Trust → Problem → Video → Services → Why Us → Use Cases → Social Proof → Resources → FAQ → CTA */}
      <main>
        <Hero onBookCallClick={() => setShowCalendly(true)} />
        <TrustBadges />
        <Problem />
        <VideoSection />
        <Services />
        <WhyChooseUs />
        <UseCases onBookCallClick={() => setShowCalendly(true)} />
        <SocialProof />
        <Resources />
        <FAQ />
        <CTA onBookCallClick={() => setShowCalendly(true)} />
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