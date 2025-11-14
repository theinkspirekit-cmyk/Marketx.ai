import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoDemoProps {
  onBookCallClick: () => void;
}

const VideoDemo = ({ onBookCallClick }: VideoDemoProps) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-4">
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold border border-primary/30">
              🎬 2-MINUTE DEMO
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="text-foreground">See How We Eliminated </span>
            <span className="gradient-text">127 Manual Tasks</span>
            <br />
            <span className="text-foreground">in 30 Days</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Watch a real business transformation from start to finish
          </p>

          {/* Video Container */}
          <div 
            className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group mb-8 max-w-5xl mx-auto shadow-2xl"
            onClick={() => setShowDialog(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan/20 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary rounded-full p-12 group-hover:scale-110 transition-all duration-300 shadow-[0_0_60px_rgba(59,130,246,0.6)] animate-pulse">
                  <Play className="w-24 h-24 text-primary-foreground fill-current" />
                </div>
              </div>
              
              {/* Thumbnail placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-50"></div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={onBookCallClick}
              className="inline-flex items-center space-x-2 btn-secondary-ref text-xl px-10 py-6 hover:scale-105 transition-all duration-300 shadow-glow"
            >
              <span>Get Your Free Automation Audit</span>
            </button>
            <p className="text-muted-foreground mt-4">
              ⏱️ 2 minutes • 🔒 No email required to watch
            </p>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-5xl p-0">
          <div className="aspect-video bg-black flex items-center justify-center">
            <p className="text-white">Video player would be embedded here</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoDemo;
