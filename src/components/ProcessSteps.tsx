import { useInView } from "@/hooks/useInView";
import { Search, ListChecks, Link2, BookOpen, Rocket, CheckCircle, Clock, Users, FileText, Activity } from "lucide-react";

interface StepProps {
  step: string;
  title: string;
  description: string;
  widget: React.ReactNode;
  reversed?: boolean;
}

const Step = ({ step, title, description, widget, reversed }: StepProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isInView ? 'animate-reveal-up' : ''} grid md:grid-cols-2 gap-8 md:gap-16 items-center ${reversed ? 'direction-rtl' : ''}`}
    >
      <div className={`${reversed ? 'md:order-2' : ''}`}>
        <div className="step-label mb-4">{step}</div>
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className={`${reversed ? 'md:order-1' : ''}`}>
        {widget}
      </div>
    </div>
  );
};

const ProcessSteps = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-24">

          {/* Step 01 */}
          <Step
            step="Step 01"
            title="We Audit Your Operations"
            description="We analyze your current lead flow, tools, and bottlenecks. You'll get a clear picture of where opportunities are slipping away and what to fix first."
            widget={
              <div className="mock-widget">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Discovery Process</div>
                <div className="space-y-3 mb-4">
                  {["Lead Sources", "Response Time", "Conversion Funnel", "Tool Stack"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                      <Search className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{item}</span>
                      <CheckCircle className="w-4 h-4 text-primary ml-auto" />
                    </div>
                  ))}
                </div>
                <button className="w-full btn-primary-ref py-3 text-sm">Check Availability</button>
              </div>
            }
          />

          {/* Step 02 */}
          <Step
            step="Step 02"
            title="We Pinpoint What to Automate"
            description="Based on the audit, we identify the highest-impact tasks to automate — the ones that save the most time and recover the most revenue."
            reversed
            widget={
              <div className="mock-widget">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Tasks We Automate</div>
                <div className="space-y-2 mb-4">
                  {["Lead qualification", "Follow-up emails", "Appointment booking", "Data entry"].map((task, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                      <ListChecks className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{task}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-accent text-center">
                    <div className="text-lg font-bold text-primary">20+</div>
                    <div className="text-xs text-muted-foreground">Hrs Saved/Week</div>
                  </div>
                  <div className="p-3 rounded-xl bg-accent text-center">
                    <div className="text-lg font-bold text-primary">&lt;2 min</div>
                    <div className="text-xs text-muted-foreground">Avg Response</div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Step 03 */}
          <Step
            step="Step 03"
            title="We Connect Your Tools"
            description="We integrate your CRM, messaging apps, email, and more into one seamless system. Everything talks to everything — automatically."
            widget={
              <div className="mock-widget">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Lead Pipeline</div>
                <div className="space-y-2">
                  {[
                    { name: "Sarah Johnson", status: "Qualified", qualified: true },
                    { name: "Mike Chen", status: "Qualified", qualified: true },
                    { name: "Alex Rivera", status: "Not Qualified", qualified: false },
                    { name: "Emma Wilson", status: "Qualified", qualified: true },
                  ].map((lead, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-muted">
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">{lead.name}</span>
                      </div>
                      <span className={`mock-badge ${lead.qualified ? 'bg-accent text-primary' : 'bg-destructive/10 text-destructive'}`}>
                        {lead.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          {/* Step 04 */}
          <Step
            step="Step 04"
            title="We Capture Your Knowledge"
            description="We train AI on your FAQs, pricing, services, and sales process so it represents your brand perfectly in every conversation."
            reversed
            widget={
              <div className="mock-widget">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">What It Knows</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: FileText, label: "Services & Pricing" },
                    { icon: Users, label: "Target Audience" },
                    { icon: BookOpen, label: "FAQs & Objections" },
                    { icon: Link2, label: "Brand Voice" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted flex flex-col items-center text-center gap-2">
                      <item.icon className="w-5 h-5 text-primary" />
                      <span className="text-xs text-foreground font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          {/* Step 05 */}
          <Step
            step="Step 05"
            title="You Go Live"
            description="We launch your system, monitor performance, and optimize continuously. You start seeing results from day one."
            widget={
              <div className="mock-widget">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Live System Activity</div>
                <div className="space-y-2 mb-4">
                  {[
                    { text: "New lead captured from website", time: "2s ago" },
                    { text: "Follow-up email sent to Sarah", time: "5m ago" },
                    { text: "Call booked with Mike Chen", time: "12m ago" },
                    { text: "Lead qualified: Emma Wilson", time: "18m ago" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-muted">
                      <div className="flex items-center gap-3">
                        <Activity className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">{item.text}</span>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full btn-primary-ref py-3 text-sm">Book a Free Audit</button>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
