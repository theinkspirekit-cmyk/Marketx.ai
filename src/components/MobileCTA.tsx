interface MobileCTAProps {
  onBookCallClick: () => void;
}
const MobileCTA = ({
  onBookCallClick
}: MobileCTAProps) => {
  return <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 animate-fade-in">
      <button 
        onClick={onBookCallClick} 
        className="block w-full btn-secondary-ref py-4 text-lg text-center hover:scale-105 duration-300"
        aria-label="Schedule your free automation strategy call"
      >
        🚀 Get Free Automation Plan
      </button>
    </div>;
};
export default MobileCTA;