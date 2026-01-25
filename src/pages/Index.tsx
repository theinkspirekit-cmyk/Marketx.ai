import "@/styles/enterprise-theme.css";
import { useState } from "react";
import TrustBanner from "@/components/enterprise/TrustBanner";
import EnterpriseHeader from "@/components/enterprise/EnterpriseHeader";
import EnterpriseHero from "@/components/enterprise/EnterpriseHero";
import IndustryRecognition from "@/components/enterprise/IndustryRecognition";
import TrustedBy from "@/components/enterprise/TrustedBy";
import CoreSolutions from "@/components/enterprise/CoreSolutions";
import PlatformSection from "@/components/enterprise/PlatformSection";
import EnterpriseIntegrations from "@/components/enterprise/EnterpriseIntegrations";
import IndustryUseCases from "@/components/enterprise/IndustryUseCases";
import TechnicalArchitecture from "@/components/enterprise/TechnicalArchitecture";
import CustomerStories from "@/components/enterprise/CustomerStories";
import WhyChooseUs from "@/components/enterprise/WhyChooseUs";
import StrategicPartners from "@/components/enterprise/StrategicPartners";
import PricingSection from "@/components/enterprise/PricingSection";
import EnterpriseCTA from "@/components/enterprise/EnterpriseCTA";
import EnterpriseFooter from "@/components/enterprise/EnterpriseFooter";
import CalendlyModal from "@/components/CalendlyModal";

const Index = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <TrustBanner />
      <EnterpriseHeader onBookCallClick={() => setShowCalendly(true)} />
      
      <main>
        <EnterpriseHero onBookCallClick={() => setShowCalendly(true)} />
        <IndustryRecognition />
        <TrustedBy />
        <CoreSolutions />
        <PlatformSection />
        <EnterpriseIntegrations />
        <IndustryUseCases />
        <TechnicalArchitecture />
        <CustomerStories />
        <WhyChooseUs />
        <StrategicPartners />
        <PricingSection />
        <EnterpriseCTA onBookCallClick={() => setShowCalendly(true)} />
      </main>

      <EnterpriseFooter />
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default Index;
