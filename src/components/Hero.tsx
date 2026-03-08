import { ChevronRight } from "lucide-react";

interface HeroProps {
  onBookCallClick: () => void;
}

const Hero = ({ onBookCallClick }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: '#F4F4F4' }}>
      {/* Subtle grid/border pattern background like Cal.com */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      
      {/* Radial fade overlay */}
      <div className="absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #F4F4F4 80%)',
      }} />

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10 relative pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Small label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm" style={{
            background: 'rgba(255,255,255,0.8)',
            border: '1px solid rgba(0,0,0,0.06)',
            color: 'rgb(137, 137, 137)',
          }}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            AI-Powered Business Automation
          </div>

          {/* Main heading - Manrope 700 */}
          <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold mb-6 leading-[1.1] tracking-tight" style={{ color: 'rgb(0, 0, 0)', lineHeight: '66px' }}>
            Automate Your Business.
            <br />
            <span className="font-instrument-serif italic" style={{ color: 'hsl(217, 91%, 60%)' }}>Save 10+ Hours/Week</span>
          </h1>
          
          <p className="text-lg md:text-[18px] mb-12 max-w-2xl mx-auto" style={{ color: 'rgb(137, 137, 137)', lineHeight: '27px', fontWeight: 300 }}>
            Automate the hustle, <span className="font-instrument-serif italic" style={{ color: 'hsl(217, 91%, 60%)' }}>amplify the win</span>. We build intelligent workflows that save your team 10+ hours every week.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onBookCallClick}
              className="group px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{
                background: '#000',
                boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
              }}
            >
              Book Free Call
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,0,0,0.1)',
                color: '#000',
              }}
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
