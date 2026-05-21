import { useInView } from "@/hooks/useInView";
import { Network, Send, Bot, Workflow } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Multi-Agent Systems",
    body: "Networks of AI agents that handle complex, multi-step operations autonomously — research, outreach, reporting, and decision-making without human intervention at every step.",
  },
  {
    icon: Send,
    title: "Automated Outreach Pipelines",
    body: "End-to-end outbound systems that find prospects, personalize messaging, follow up intelligently, and book calls — running 24/7 without a sales team behind them.",
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    body: "Purpose-built agents trained on your business context. Voice agents, research agents, client-facing bots — designed for your exact workflow, not a generic use case.",
  },
  {
    icon: Workflow,
    title: "Operational Workflow Automation",
    body: "We identify the manual processes costing you the most time and replace them with systems that run themselves — CRM updates, follow-ups, reporting, onboarding, and more.",
  },
];

const Services = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div ref={ref} className={`mb-16 scroll-animate ${isInView ? "animate-reveal-up" : ""}`}>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs text-foreground/70 font-semibold uppercase tracking-[0.25em]">
              What We Build
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground tracking-tight">
            Not tools. <span className="text-foreground/50">Infrastructure.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="rounded-2xl bg-[#141414] border border-white/10 p-8 hover:border-white/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
