import { Button } from "@/components/ui/button";
import heroAutomation from "@/assets/hero-automation.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Exact radial gradient background matching reference */}
      <div className="radial-bg"></div>

      {/* Floating Elements - matching reference style */}
      

      <div className="absolute top-32 right-16 glass-card p-4 float-animation opacity-80" style={{
      animationDelay: '1s'
    }}>
        <div className="text-center">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-xs text-muted-foreground font-medium">Quant</span>
          </div>
          <div className="text-xs text-muted-foreground">3.245</div>
        </div>
      </div>

      <div className="absolute bottom-32 left-20 glass-card p-4 float-animation opacity-80" style={{
      animationDelay: '2s'
    }}>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-foreground">Aelf</span>
        </div>
        <div className="text-xs text-muted-foreground">18.540</div>
      </div>

      

      {/* Main Content - exact typography matching reference */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-6xl mx-auto">
          {/* Small unlock button matching reference */}
          <div className="mb-8">
            
          </div>

          {/* Main heading matching reference exactly */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-foreground">Automate Your Business. Save 10+ Hours/Week.</span>
            
          </h1>
          
          

          {/* Buttons matching reference style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn-secondary-ref inline-flex items-center space-x-2">
              <span>Book Free Call
            </span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button onClick={() => scrollToSection('services')} className="btn-primary-ref">
              Discover More
            </button>
          </div>

          {/* Bottom scroll indicator matching reference */}
          
        </div>
      </div>

      {/* Bottom right label matching reference */}
      <div className="absolute bottom-16 right-8 opacity-70">
        <div className="text-right">
          
          <div className="w-8 h-px bg-muted-foreground mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;