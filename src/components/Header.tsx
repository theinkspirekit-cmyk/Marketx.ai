import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
interface HeaderProps {
  onBookCallClick: () => void;
}
const Header = ({
  onBookCallClick
}: HeaderProps) => {
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
      <header 
        className="fixed top-0 w-full z-50 glass-nav shadow-lg transition-all duration-300"
        role="banner"
      >
        <nav className="container mx-auto px-6 py-4" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="Marktrix.ai - AI Business Automation Services" 
                className="h-10 w-auto"
                width="150"
                height="40"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('use-cases')} 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Use Cases
              </button>
              <button 
                onClick={() => scrollToSection('resources')} 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Resources
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                FAQ
              </button>
            </div>

            {/* Desktop CTA & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBookCallClick} 
                className="hidden md:block btn-secondary-ref"
                aria-label="Schedule a free strategy call"
              >
                Book Free Strategy Call
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
                  onClick={() => scrollToSection('services')} 
                  className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('use-cases')} 
                  className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Use Cases
                </button>
                <button 
                  onClick={() => scrollToSection('resources')} 
                  className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Resources
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
                  className="btn-secondary-ref mt-4"
                >
                  Book Free Strategy Call
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