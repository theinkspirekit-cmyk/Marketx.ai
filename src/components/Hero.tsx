import heroBg from "@/assets/hero-bg.png";

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* White overlay for readability */}
      <div className="absolute inset-0 bg-white/70 z-0" />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10 relative pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium mb-6 leading-tight tracking-tight">
            <span className="text-foreground block mb-2 animate-fade-in">Automate Your Business.</span>
            <span className="gradient-text-animated px-0 my-0 mx-0 py-2 md:py-[15px] block">Save 10+ Hours/Week</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-3xl mx-auto leading-relaxed">
            Automate the hustle, <span className="text-primary font-semibold bg-primary/10 px-2 rounded">amplify the win</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <button
              onClick={onBookCallClick}
              className="btn-secondary-ref inline-flex items-center space-x-2 group hover:scale-105 transition-all duration-300"
            >
              <span>Book Free Call</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button onClick={() => scrollToSection('services')} className="btn-primary-ref hover:scale-105 transition-all duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom right label */}
      <div className="absolute bottom-16 right-8 opacity-70 z-10">
        <div className="text-right">
          <div className="text-sm text-muted-foreground font-medium">AI Automation</div>
          <div className="w-8 h-px bg-muted-foreground mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
