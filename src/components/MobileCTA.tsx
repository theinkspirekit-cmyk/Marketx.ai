import { Button } from "@/components/ui/button";

const MobileCTA = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <a
        href="https://calendly.com/katkamdheekshitdatta/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold transition-colors text-center rounded-xl"
      >
        Book Free Call 📞
      </a>
    </div>
  );
};

export default MobileCTA;