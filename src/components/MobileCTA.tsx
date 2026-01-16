import { Phone, ArrowUpRight } from "lucide-react";

interface MobileCTAProps {
  onBookCallClick: () => void;
}

const MobileCTA = ({ onBookCallClick }: MobileCTAProps) => {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 animate-fade-in">
      <button 
        onClick={onBookCallClick} 
        className="flex items-center justify-center gap-2 w-full bg-foreground text-background py-4 rounded-lg font-medium text-lg hover:bg-foreground/90 transition-all duration-300"
        aria-label="Schedule your free automation strategy call"
      >
        <Phone className="w-5 h-5" />
        <span>Get Free Automation Plan</span>
        <ArrowUpRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default MobileCTA;
