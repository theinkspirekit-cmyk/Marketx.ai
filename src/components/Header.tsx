import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-card border-b rounded-3xl mx-4 mt-4' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4 my-0">
          <div className="flex items-center justify-between mx-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold text-foreground tracking-tight">
                markitx<span className="text-primary">.ai</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm px-0 py-0">
              <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('use-cases')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Success Stories
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                FAQ
              </button>
            </div>

            {/* Desktop CTA & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onBookCallClick}
                className="hidden md:block btn-primary-ref"
              >
                Book a Free Call
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
          <div className="fixed inset-0 bg-background/95 backdrop-blur-lg pt-20">
            <nav className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('use-cases')} 
                  className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Success Stories
                </button>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  FAQ
                </button>
                <button
                  onClick={() => {
                    onBookCallClick();
                    setMobileMenuOpen(false);
                  }}
                  className="btn-primary-ref mt-4"
                >
                  Book a Free Call
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