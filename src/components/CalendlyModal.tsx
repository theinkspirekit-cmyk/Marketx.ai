import { Calendar, ExternalLink, X } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  if (!isOpen) return null;

  const handleBooking = () => {
    window.open("https://cal.com/dheekshit-datta-hc4xco/30-min-meeting", "_blank");
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-3">
            Schedule Your Strategy Call
          </h2>
          
          <p className="text-white/60 mb-8 leading-relaxed">
            Book a free 30-minute consultation with our AI automation experts. 
            We'll discuss your needs and create a custom automation roadmap.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={handleBooking}
              className="w-full py-4 px-6 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                boxShadow: '0 8px 32px rgba(37, 99, 235, 0.4)'
              }}
            >
              Open Booking Page
              <ExternalLink className="w-4 h-4" />
            </button>
            
            <p className="text-sm text-white/40">
              Opens in a new tab for faster loading
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center justify-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                30 min call
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Free consultation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;
