import ROICalculator from "./ROICalculator";
import { Clock, DollarSign, Users, Play } from "lucide-react";

interface NewHeroProps {
  onBookCallClick: () => void;
  onVideoClick: () => void;
}

const NewHero = ({ onBookCallClick, onVideoClick }: NewHeroProps) => {
  const clientLogos = ["Google", "HubSpot", "Slack", "OpenAI", "Make"];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-foreground">
            Stop Losing $15,000/Month on Manual Work
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            We build custom automation systems that eliminate 80% of repetitive tasks—so you can focus on revenue, not busywork.
          </p>

          {/* ROI Calculator */}
          <ROICalculator />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={onVideoClick}
              className="btn-secondary-ref inline-flex items-center space-x-3 text-lg px-8 py-5 hover:scale-105 transition-all duration-300 group"
            >
              <Play className="w-6 h-6 fill-current" />
              <span>Watch 90-Second Demo</span>
            </button>
            
            <button
              onClick={onBookCallClick}
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <span>Book Free Audit</span>
            </button>
          </div>

          {/* Social Proof Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
              <span className="text-foreground/90 ml-2 font-semibold">4.9/5 from 200+ businesses</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
              {clientLogos.map((logo, index) => (
                <div key={index} className="glass-card px-6 py-3 rounded-xl">
                  <span className="text-foreground/80 font-semibold">{logo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
              <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="text-4xl font-bold text-foreground mb-2">47 Hours</p>
              <p className="text-muted-foreground">Saved per month (avg)</p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
              <DollarSign className="w-12 h-12 text-success mx-auto mb-3" />
              <p className="text-4xl font-bold text-foreground mb-2">$12,450</p>
              <p className="text-muted-foreground">Cost reduction (avg)</p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
              <Users className="w-12 h-12 text-cyan mx-auto mb-3" />
              <p className="text-4xl font-bold text-foreground mb-2">60 Days</p>
              <p className="text-muted-foreground">Average time to ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
