import { useInView } from "@/hooks/useInView";
import { Search, Users, Clock, DollarSign, Mail, FileText, Image, MessageSquare, BarChart3, Sparkles } from "lucide-react";

const Services = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 mb-6">
            <Sparkles className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Smarter Services, </span>
            <span className="text-muted-foreground italic font-normal">Built with AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Everything you need to automate operations, boost productivity
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 - Automate repetitive tasks */}
          <div className={`glass-card p-6 rounded-2xl scroll-animate ${cardsInView ? 'animate-scale-fade stagger-1' : ''}`}>
            <div className="bg-card/80 rounded-xl p-4 mb-6 border border-border/30">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/20">
                  <div className="w-16 h-2 bg-muted rounded"></div>
                  <div className="w-8 h-2 bg-muted rounded"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/20">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">Employee Tracking</span>
                  </div>
                  <Clock className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/20">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">Payment reminder</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/20">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">Cost Management</span>
                  </div>
                  <Clock className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Automate repetitive tasks</h3>
            <p className="text-sm text-muted-foreground">We help you streamline internal operations by automating manual workflows</p>
          </div>

          {/* Card 2 - Automated Workflows (spans 2 columns on larger screens) */}
          <div className={`glass-card p-6 rounded-2xl lg:col-span-2 scroll-animate ${cardsInView ? 'animate-scale-fade stagger-2' : ''}`}>
            <div className="bg-card/80 rounded-xl p-8 mb-6 border border-border/30 relative overflow-hidden min-h-[200px]">
              {/* Floating icons around center */}
              <div className="absolute top-4 left-8">
                <div className="w-10 h-10 rounded-lg bg-background/80 border border-border/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              <div className="absolute top-4 right-1/3">
                <div className="w-10 h-10 rounded-lg bg-background/80 border border-border/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              <div className="absolute top-8 right-8">
                <div className="w-10 h-10 rounded-lg bg-background/80 border border-border/30 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              <div className="absolute bottom-16 left-12">
                <div className="w-10 h-10 rounded-lg bg-background/80 border border-border/30 flex items-center justify-center">
                  <Image className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              <div className="absolute bottom-8 right-12">
                <div className="w-10 h-10 rounded-lg bg-background/80 border border-border/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-muted-foreground">N</span>
                </div>
              </div>
              <div className="absolute top-1/2 right-16 -translate-y-1/2">
                <div className="w-10 h-10 rounded-lg bg-background/80 border border-border/30 flex items-center justify-center">
                  <span className="text-lg font-bold text-muted-foreground">𝕏</span>
                </div>
              </div>
              
              {/* Center sparkle icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-background" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Automated Workflows</h3>
            <p className="text-sm text-muted-foreground">Boost efficiency across teams with smart automation Build intelligent workflows that automate multi-step processes across tools and platforms</p>
          </div>

          {/* Card 3 - Real-Time Intelligence */}
          <div className={`glass-card p-6 rounded-2xl scroll-animate ${cardsInView ? 'animate-scale-fade stagger-3' : ''}`}>
            <div className="bg-card/80 rounded-xl p-4 mb-6 border border-border/30">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg border border-border/20">
                  <span className="text-sm text-muted-foreground">Research anything...</span>
                  <div className="ml-auto px-3 py-1 bg-muted rounded-md text-xs text-foreground">Research</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/20">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">Software & App Industry</span>
                  </div>
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/20">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">UX & UI Design Industry</span>
                  </div>
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/20">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">High Converting Customer</span>
                  </div>
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Real-Time Intelligence</h3>
            <p className="text-sm text-muted-foreground">Make smarter decisions with live data insights Tap into real-time data</p>
          </div>

          {/* Card 4 - Custom AI Agent development */}
          <div className={`glass-card p-6 rounded-2xl scroll-animate ${cardsInView ? 'animate-scale-fade stagger-4' : ''}`}>
            <div className="bg-card/80 rounded-xl p-4 mb-6 border border-border/30">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/20">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-muted-foreground" />
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-muted/50 rounded text-xs text-muted-foreground">
                    <span>Code</span>
                    <span className="text-[10px]">&lt;/&gt;</span>
                  </div>
                </div>
              </div>
              <div className="font-mono text-xs space-y-1 text-muted-foreground">
                <div className="flex">
                  <span className="w-6 text-muted-foreground/50">1</span>
                  <span><span className="text-blue-400">self</span>.activation_limit =</span>
                </div>
                <div className="flex">
                  <span className="w-6 text-muted-foreground/50">2</span>
                  <span className="pl-4">activation_limit</span>
                </div>
                <div className="flex">
                  <span className="w-6 text-muted-foreground/50">3</span>
                  <span><span className="text-blue-400">self</span>.current_mode = <span className="text-green-400">"idle"</span></span>
                </div>
                <div className="flex">
                  <span className="w-6 text-muted-foreground/50">4</span>
                  <span></span>
                </div>
                <div className="flex">
                  <span className="w-6 text-muted-foreground/50">5</span>
                  <span><span className="text-purple-400">def</span> <span className="text-yellow-400">evaluate_task</span>(<span className="text-blue-400">self</span>,workload_value):</span>
                </div>
                <div className="flex">
                  <span className="w-6 text-muted-foreground/50">6</span>
                  <span className="pl-4"><span className="text-purple-400">if</span> workload_value &gt;</span>
                </div>
                <div className="flex">
                  <span className="w-6 text-muted-foreground/50">7</span>
                  <span className="pl-8"><span className="text-blue-400">self</span>.activation_limit:</span>
                </div>
                <div className="flex">
                  <span className="w-6 text-muted-foreground/50">8</span>
                  <span className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">"require..."</span></span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Custom AI Agent development</h3>
            <p className="text-sm text-muted-foreground">We develop custom AI agents that integrate seamlessly with your tools</p>
          </div>

          {/* Card 5 - AI Strategy Consulting */}
          <div className={`glass-card p-6 rounded-2xl scroll-animate ${cardsInView ? 'animate-scale-fade stagger-5' : ''}`}>
            <div className="bg-card/80 rounded-xl p-8 mb-6 border border-border/30 relative min-h-[180px]">
              {/* Chart icon top left */}
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 rounded-lg bg-background/80 border border-border/30 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>
              
              {/* Sparkle icon bottom center */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-background/80 border border-border/30 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>
              
              {/* Connection lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <line x1="40" y1="50" x2="50%" y2="140" stroke="currentColor" strokeWidth="1" className="text-border/40" strokeDasharray="4 4" />
                <line x1="50%" y1="140" x2="calc(100% - 40px)" y2="50" stroke="currentColor" strokeWidth="1" className="text-border/40" strokeDasharray="4 4" />
              </svg>
              
              {/* Empty box top right */}
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-lg bg-background/80 border border-border/30"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">AI Strategy Consulting</h3>
            <p className="text-sm text-muted-foreground">Get expert guidance to implement AI solutions that drive business growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
