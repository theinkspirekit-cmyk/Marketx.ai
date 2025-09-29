import { Button } from "@/components/ui/button";

const MobileCTA = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <Button 
        onClick={() => scrollToSection('cta')}
        className="w-full btn-glow text-primary-foreground py-4 text-lg font-semibold shadow-glow"
        size="lg"
      >
        Book Free Call 📞
      </Button>
    </div>
  );
};

export default MobileCTA;