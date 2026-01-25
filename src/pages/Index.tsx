import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import Features from "@/components/Features";
import WhyChoose from "@/components/WhyChoose";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
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
        <Problem />
        <VideoSection />
        <Services />
        <Features />
        <WhyChoose />
        <Projects />
        <WhyUs />
        <Integrations />
        <Testimonials />
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
