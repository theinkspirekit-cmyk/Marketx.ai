import { useInView } from "@/hooks/useInView";
import { AlertTriangle, Clock, BarChart3 } from "lucide-react";

const RevenueDisappears = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`max-w-6xl mx-auto scroll-animate ${isInView ? 'animate-reveal-up' : ''}`}>
          {/* Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">The Problem</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight">
              Where Your Revenue{" "}
              <span className="font-instrument-serif italic text-primary font-normal">Disappears</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most businesses lose leads before they even get a chance to sell. Here's where it happens.
            </p>
          </div>

          {/* 3 Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Missed Inquiries */}
            <div className="clean-card p-6">
              <div className="mock-widget mb-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Incoming Leads</span>
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-muted">
                    <span className="text-sm text-foreground">Website Form</span>
                    <span className="mock-badge bg-destructive/10 text-destructive">MISSED</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-muted">
                    <span className="text-sm text-foreground">Instagram DM</span>
                    <span className="mock-badge bg-destructive/10 text-destructive">MISSED</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-muted">
                    <span className="text-sm text-foreground">WhatsApp</span>
                    <span className="mock-badge bg-destructive/10 text-destructive">MISSED</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Missed Inquiries</h3>
              <p className="text-sm text-muted-foreground">Leads come in from everywhere. Without instant response, they go to competitors.</p>
            </div>

            {/* Card 2: Slow Follow-Ups */}
            <div className="clean-card p-6">
              <div className="mock-widget mb-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Response Time</span>
                  <Clock className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="relative h-4 bg-muted rounded-full mb-3 overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-[85%] bg-gradient-to-r from-primary to-destructive rounded-full" />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mb-4">
                  <span>5 MIN</span>
                  <span>48 HOURS LATER</span>
                </div>
                <div className="text-center">
                  <span className="mock-badge bg-destructive/10 text-destructive">LEAD IS COLD</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Slow Follow-Ups</h3>
              <p className="text-sm text-muted-foreground">Every hour of delay reduces conversion by 10x. Manual follow-up can't keep pace.</p>
            </div>

            {/* Card 3: No Clear Picture */}
            <div className="clean-card p-6">
              <div className="mock-widget mb-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Lead Status</span>
                  <BarChart3 className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  {["Lead A", "Lead B", "Lead C", "Lead D"].map((lead, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-muted">
                      <span className="text-sm text-foreground">{lead}</span>
                      <span className="text-xs text-muted-foreground">???</span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No Clear Picture</h3>
              <p className="text-sm text-muted-foreground">Without proper tracking, you don't know which leads are hot, warm, or lost.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueDisappears;
