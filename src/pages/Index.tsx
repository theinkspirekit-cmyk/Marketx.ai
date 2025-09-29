import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* One-page funnel: Hero → Problem → Services → Proof → Offer → CTA */}
      <main>
        <Hero />
        <Problem />
        <Services />
        <Proof />
        <Offer />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;