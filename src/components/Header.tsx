import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import markitxLogo from "@/assets/markitx-logo.png";
import markitxLogoWhite from "@/assets/markitx-logo-white.png";

interface HeaderProps {
  onBookCallClick: () => void;
}

const Header = ({ onBookCallClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  const isDark = resolvedTheme === 'dark';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3 px-4' : 'py-4 px-0'
      }`}>
        <nav className={`mx-auto transition-all duration-500 ${
          isScrolled 
            ? `max-w-5xl rounded-2xl px-6 py-3 ${isDark ? 'bg-gradient-to-b from-[hsl(222,18%,14%)] to-[hsl(222,18%,10%)] border-t border-t-[hsl(222,15%,20%)] border-b-2 border-b-[hsl(0,0%,0%,0.5)] shadow-[0_4px_12px_hsl(0,0%,0%,0.4),inset_0_1px_0_hsl(222,15%,20%)]' : 'bg-gradient-to-b from-white to-[hsl(220,15%,96%)] border-t border-t-white border-b-2 border-b-[hsl(220,15%,82%)] shadow-[0_4px_12px_hsl(220,20%,60%,0.15),inset_0_1px_0_white]'}`
            : 'container bg-transparent px-6 py-2'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={isScrolled ? (isDark ? markitxLogoWhite : markitxLogo) : markitxLogoWhite} 
                alt="Markitx.ai - AI Business Automation Services" 
                className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'} w-auto`}
                loading="eager" 
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              {['home', 'services', 'features', 'faq'].map((id) => (
                <button key={id} onClick={() => scrollToSection(id)} className={`transition-colors font-medium capitalize ${
                  isScrolled 
                    ? (isDark ? 'text-white/60 hover:text-white' : 'text-muted-foreground hover:text-foreground')
                    : 'text-white/70 hover:text-white'
                }`}>
                  {id === 'faq' ? 'FAQ' : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>

            {/* Desktop CTA & Theme Toggle */}
            <div className="flex items-center gap-3">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isScrolled
                      ? (isDark ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-muted-foreground hover:text-foreground hover:bg-black/5')
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}
              
              <button 
                onClick={onBookCallClick} 
                className={`hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'bg-primary text-primary-foreground shadow-[0_2px_8px_rgba(37,99,235,0.3)]'
                    : 'bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25'
                }`}
              >
                Book a Call
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className={`md:hidden p-2 ${isScrolled ? (isDark ? 'text-white' : 'text-foreground') : 'text-white'}`}
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
                {['home', 'services', 'features', 'faq'].map((id) => (
                  <button key={id} onClick={() => scrollToSection(id)} className="text-2xl font-bold text-left text-foreground capitalize">
                    {id === 'faq' ? 'FAQ' : id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
                <button 
                  onClick={() => { onBookCallClick(); setMobileMenuOpen(false); }} 
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
