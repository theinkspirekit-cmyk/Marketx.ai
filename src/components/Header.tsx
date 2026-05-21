import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/markitx-logo.png";

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
          className="relative mx-auto max-w-5xl rounded-full px-6 py-3 overflow-hidden border border-white/20 bg-white/[0.03] backdrop-blur-3xl backdrop-saturate-150 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.25),inset_0_-1px_1px_0_rgba(255,255,255,0.08),0_8px_32px_-8px_rgba(0,0,0,0.5)]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.04) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-px h-px rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
          <div className="relative flex items-center justify-between">
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
