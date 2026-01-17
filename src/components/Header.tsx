import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import markitxLogo from "@/assets/markitx-logo.png";

interface HeaderProps {
  onBookCallClick: () => void;
}

const Header = ({ onBookCallClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'mx-4 mt-4 left-0 right-0' 
          : ''
      }`} style={{ width: isScrolled ? 'calc(100% - 32px)' : '100%' }}>
        <nav className={`mx-auto px-6 py-4 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg shadow-black/5' 
            : 'bg-white/50 backdrop-blur-md'
        }`}>
          <div className="flex items-center justify-between container mx-auto">
            <div className="flex items-center space-x-2">
              <img 
                src={markitxLogo} 
                alt="Markitx - AI Business Automation Services" 
                className="h-8" 
                loading="eager" 
                width="150" 
                height="32" 
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <button onClick={() => scrollToSection('home')} className="text-foreground/70 hover:text-foreground transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-foreground transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('features')} className="text-foreground/70 hover:text-foreground transition-colors font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground/70 hover:text-foreground transition-colors font-medium">
                FAQ
              </button>
            </div>

            {/* Desktop CTA & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button onClick={onBookCallClick} className="hidden md:block btn-primary-ref">
                Get Your Free Automation Plan
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="md:hidden text-foreground p-2" 
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-white/90 backdrop-blur-xl pt-20">
            <nav className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                <button onClick={() => scrollToSection('home')} className="text-2xl font-medium text-foreground/70 hover:text-foreground transition-colors text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-2xl font-medium text-foreground/70 hover:text-foreground transition-colors text-left">
                  Services
                </button>
                <button onClick={() => scrollToSection('features')} className="text-2xl font-medium text-foreground/70 hover:text-foreground transition-colors text-left">
                  Features
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-2xl font-medium text-foreground/70 hover:text-foreground transition-colors text-left">
                  FAQ
                </button>
                <button 
                  onClick={() => {
                    onBookCallClick();
                    setMobileMenuOpen(false);
                  }} 
                  className="btn-primary-ref mt-4"
                >
                  🚀 Get Your Free Automation Plan
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
