import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  onBookCallClick: () => void;
}

const Header = ({ onBookCallClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 px-4">
        <nav className={`mx-auto max-w-5xl rounded-full px-6 py-3 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
            : 'bg-white/15 backdrop-blur-md border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.1)]'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Markitx.ai"
                className="h-8 w-auto"
                loading="eager"
              />
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm">
              {['home', 'services', 'features', 'faq'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors font-medium capitalize ${
                    isScrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {id === 'faq' ? 'FAQ' : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onBookCallClick}
                className="hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 bg-primary text-primary-foreground shadow-[0_2px_8px_rgba(37,99,235,0.3)]"
              >
                Book a Call
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

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
                  className="flex items-center gap-2 px-6 py-4 rounded-full bg-primary text-primary-foreground font-semibold mt-4"
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
