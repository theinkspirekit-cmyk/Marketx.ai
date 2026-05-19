import { ArrowRight } from "lucide-react";

interface MobileCTAProps {
  onBookCallClick: () => void;
}

const MobileCTA = ({ onBookCallClick }: MobileCTAProps) => {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 animate-fade-in">
      <button
        onClick={onBookCallClick}
        className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-white text-black font-semibold text-base shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        aria-label="Book a call"
      >
        Book a Call <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default MobileCTA;
