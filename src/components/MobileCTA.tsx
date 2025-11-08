interface MobileCTAProps {
  onBookCallClick: () => void;
}
const MobileCTA = ({
  onBookCallClick
}: MobileCTAProps) => {
  return <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <button onClick={onBookCallClick} className="block w-full btn-secondary-ref py-4 text-lg text-center">
        Book Free Call
      </button>
    </div>;
};
export default MobileCTA;