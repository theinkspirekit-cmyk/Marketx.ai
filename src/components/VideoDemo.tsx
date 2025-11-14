import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoDemoProps {
  onBookCallClick: () => void;
}

const VideoDemo = ({ onBookCallClick }: VideoDemoProps) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <section className="py-20 bg-muted/5 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="gradient-text">See It In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Watch how we automated 127 tasks for a marketing agency in just 30 days
          </p>

          {/* Video Container */}
          <div 
            className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group mb-8"
            onClick={() => setShowDialog(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan/20 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/90 rounded-full p-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-glow">
                  <Play className="w-16 h-16 text-primary-foreground fill-current" />
                </div>
              </div>
              
              {/* Thumbnail placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-50"></div>
              
              {/* Play overlay text */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-2xl font-bold text-foreground">90-Second Demo: Complete Workflow Automation</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onBookCallClick}
              className="inline-flex items-center space-x-2 btn-secondary-ref text-lg px-8 py-5 hover:scale-105 transition-all duration-300"
            >
              <span>Get Your Free Automation Audit</span>
            </button>
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
