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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card border-b' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo matching reference style */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold text-sm">C</span>
            </div>
          </div>
          
          {/* Navigation matching reference */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              DeFi App
            </button>
            <button 
              onClick={() => scrollToSection('proof')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Assets
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Features
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Pricing
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              FAQ
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground font-medium">Protection</span>
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Create Account button matching reference */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold text-xs">?</span>
            </div>
            <Button 
              onClick={() => scrollToSection('cta')}
              className="btn-primary-ref text-sm"
              size="sm"
            >
              <span className="mr-2">👤</span>
              Create Account
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;