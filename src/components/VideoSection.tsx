import { Play, AlertCircle } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">See How It Works</span>
              <br />
              <span className="text-muted-foreground">in 30 Seconds</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch how we transform manual work into automated workflows
            </p>
          </div>

          <div className="relative aspect-video glass-card overflow-hidden rounded-2xl cursor-pointer" onClick={() => setIsOpen(true)}>
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
              <button
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-50"></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center">
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground ml-1" />
                </div>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  Manual Work → AI Workflow → Results
                </h3>
                <p className="text-muted-foreground">
                  See the complete automation process from start to finish
                </p>
              </div>
            </div>
          </div>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-2xl w-full">
              <DialogHeader>
                <DialogTitle>Video Unavailable</DialogTitle>
                <DialogDescription>
                  Watch how we transform manual work into automated workflows
                </DialogDescription>
              </DialogHeader>
              <div className="aspect-video w-full bg-muted rounded-lg flex flex-col items-center justify-center gap-4 p-8">
                <AlertCircle className="w-16 h-16 text-muted-foreground" />
                <p className="text-lg font-semibold text-foreground">Cannot Play Video</p>
                <p className="text-sm text-muted-foreground text-center">
                  This video is currently unavailable. Please check back later.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Step 1</div>
              <h4 className="font-semibold text-foreground mb-2">Identify</h4>
              <p className="text-sm text-muted-foreground">Manual tasks eating your time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Step 2</div>
              <h4 className="font-semibold text-foreground mb-2">Automate</h4>
              <p className="text-sm text-muted-foreground">Build intelligent workflows</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Step 3</div>
              <h4 className="font-semibold text-foreground mb-2">Scale</h4>
              <p className="text-sm text-muted-foreground">Save 10+ hours every week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
