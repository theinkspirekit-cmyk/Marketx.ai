import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface EnterpriseHeaderProps {
  onBookCallClick: () => void;
}

const EnterpriseHeader = ({ onBookCallClick }: EnterpriseHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = {
    solutions: [
      { name: "AI for Work", href: "/ai-for-work", description: "Enterprise workflow automation" },
      { name: "AI for Service", href: "/ai-for-service", description: "Customer service AI agents" },
      { name: "AI for Process", href: "/ai-for-process", description: "Business process automation" },
    ],
    platform: [
      { name: "Platform Overview", href: "/platform", description: "Enterprise-grade AI platform" },
      { name: "Integrations", href: "/integrations", description: "100+ pre-built connectors" },
      { name: "Security", href: "/enterprise", description: "Enterprise security & compliance" },
    ],
    resources: [
      { name: "Customer Stories", href: "/customer-stories", description: "Real enterprise results" },
      { name: "Resources", href: "/resources", description: "Guides, whitepapers & more" },
      { name: "Documentation", href: "/docs", description: "Technical documentation" },
    ],
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="enterprise-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              {/* <!-- REPLACE: Your company name --> */}
              AgentOrch
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm font-medium">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2">
                  {navigation.solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="text-white font-medium">{item.name}</div>
                      <div className="text-white/50 text-sm">{item.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Platform Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('platform')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm font-medium">
                Platform <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'platform' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2">
                  {navigation.platform.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="text-white font-medium">{item.name}</div>
                      <div className="text-white/50 text-sm">{item.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm font-medium">
                Resources <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2">
                  {navigation.resources.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="text-white font-medium">{item.name}</div>
                      <div className="text-white/50 text-sm">{item.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </Link>

            <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onBookCallClick}
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)'
              }}
            >
              Talk to an Expert
            </button>
            <Link
              to="/signup"
              className="px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-slate-900/98 backdrop-blur-xl z-50 overflow-y-auto">
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-white/50 text-xs font-semibold uppercase mb-3">Solutions</h3>
                {navigation.solutions.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-white font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div>
                <h3 className="text-white/50 text-xs font-semibold uppercase mb-3">Platform</h3>
                {navigation.platform.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-white font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div>
                <h3 className="text-white/50 text-xs font-semibold uppercase mb-3">Resources</h3>
                {navigation.resources.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-white font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-white font-medium"
              >
                Pricing
              </Link>

              <div className="pt-6 space-y-3">
                <button
                  onClick={() => {
                    onBookCallClick();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-4 text-center font-semibold text-white rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                  }}
                >
                  Talk to an Expert
                </button>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-4 text-center font-semibold text-white border border-white/20 rounded-xl"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default EnterpriseHeader;
