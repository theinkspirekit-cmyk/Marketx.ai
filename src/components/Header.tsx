import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/markitx-logo.avif";

interface HeaderProps {
  onBookCallClick: () => void;
}

const navItems = [
  { id: "problem", label: "Problem" },
  { id: "services", label: "What We Build" },
  { id: "case-studies", label: "Case Studies" },
  { id: "faq", label: "FAQ" },
];

const Header = ({ onBookCallClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-3 px-4">
        <nav
          className={`mx-auto max-w-5xl rounded-full px-6 py-3 transition-all duration-500 border ${
            isScrolled
              ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-background/40 backdrop-blur-md border-white/10"
          }`}
        >
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection("home")} className="flex items-center gap-2">
              <img src={logo} alt="MARKITX" className="h-7 w-auto" loading="eager" />
              <span className="font-bold tracking-[0.2em] text-foreground text-sm">MARKITX</span>
            </button>

            <div className="hidden md:flex items-center gap-7 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/70 hover:text-foreground transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onBookCallClick}
                className="hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all"
              >
                Book a Call
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

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

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 pt-24 bg-background/97 backdrop-blur-xl">
            <nav className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-2xl font-bold text-left text-foreground"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    onBookCallClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-black font-semibold mt-4"
                >
                  Book a Call <ArrowRight className="w-4 h-4" />
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
