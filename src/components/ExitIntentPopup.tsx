import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ExitIntentPopupProps {
  onBookCallClick: () => void;
}

const ExitIntentPopup = ({ onBookCallClick }: ExitIntentPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from top of viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    const handleScroll = () => {
      // Show popup when user scrolls past 75%
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 75 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  const handleBookCall = () => {
    setIsVisible(false);
    onBookCallClick();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative max-w-md w-full glass-card p-8 rounded-2xl animate-in zoom-in duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="text-5xl mb-4">⏰</div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Wait! Don't Miss This Opportunity
          </h3>
          <p className="text-lg text-muted-foreground mb-2">
            Want to save <span className="text-primary font-semibold">10+ hours a week</span>?
          </p>
          <p className="text-muted-foreground mb-6">
            Book a free 15-minute audit call and discover which automations will transform your business.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span>Get a custom automation blueprint</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span>Usually available within 24 hours</span>
            </div>
          </div>

          <button
            onClick={handleBookCall}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-6 rounded-full font-semibold text-lg transition-colors mb-3"
          >
            Book Free Audit Call
          </button>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            No thanks, I'll do it manually
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
