interface MobileCTAProps {
  onBookCallClick: () => void;
}
const MobileCTA = ({
  onBookCallClick
}: MobileCTAProps) => {
  return <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <button onClick={onBookCallClick} className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg transition-colors text-center font-semibold rounded-3xl">
        Book Free Call 📞
      </button>
    </div>;
};
export default MobileCTA;