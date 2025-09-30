import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
  };
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-card border-b rounded-3xl mx-4 mt-4' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 my-0">
        <div className="flex items-center justify-between mx-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground font-poppins tracking-wider">marketx.ai</span>
          </div>
          
          {/* Navigation matching reference */}
          <div className="hidden md:flex items-center space-x-8 text-sm px-0 py-0">
            <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Services
            </button>
            
            <button onClick={() => scrollToSection('proof')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Case Studies
            </button>
            
            <button onClick={() => scrollToSection('faq')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              FAQ
            </button>
            
          </div>

          {/* Book a Free Call button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://calendly.com/katkamdheekshitdatta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-ref"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </nav>
    </header>;
};
export default Header;