import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3 px-4' : 'py-4 px-0'
      }`}>
        <nav className={`mx-auto transition-all duration-500 ${
          isScrolled 
            ? 'max-w-5xl bg-white/95 backdrop-blur-xl border border-black/[0.08] rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] px-6 py-3' 
            : 'container bg-transparent px-6 py-2'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={markitxLogo} 
                alt="Markitx.ai - AI Business Automation Services" 
                className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'} w-auto`}
                loading="eager" 
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              <button onClick={() => scrollToSection('home')} className="transition-colors font-medium hover:text-foreground text-muted-foreground">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="transition-colors font-medium hover:text-foreground text-muted-foreground">
                Services
              </button>
              <button onClick={() => scrollToSection('features')} className="transition-colors font-medium hover:text-foreground text-muted-foreground">
                Features
              </button>
              <button onClick={() => scrollToSection('faq')} className="transition-colors font-medium hover:text-foreground text-muted-foreground">
                FAQ
              </button>
            </div>

            {/* Desktop CTA & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <button 
                onClick={onBookCallClick} 
                className="hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-[0_2px_8px_rgba(37,99,235,0.3)]"
              >
                Book a Call
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="md:hidden p-2 text-foreground" 
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
          <div className="fixed inset-0 pt-20 bg-background/97 backdrop-blur-xl">
            <nav className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-left text-foreground">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-2xl font-bold text-left text-foreground">
                  Services
                </button>
                <button onClick={() => scrollToSection('features')} className="text-2xl font-bold text-left text-foreground">
                  Features
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-2xl font-bold text-left text-foreground">
                  FAQ
                </button>
                <button 
                  onClick={() => {
                    onBookCallClick();
                    setMobileMenuOpen(false);
                  }} 
                  className="flex items-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold mt-4"
                >
                  🚀 Book a Call
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
