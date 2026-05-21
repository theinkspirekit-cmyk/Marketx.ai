import { useInView } from "@/hooks/useInView";

const problems = [
  {
    number: "01",
    title: "No Single Source of Truth",
    body: "Your ops live across WhatsApp threads, spreadsheets, and someone's memory. When they leave, the process leaves with them.",
  },
  {
    number: "02",
    title: "Humans Doing Machine Work",
    body: "Your best people are copy-pasting data, sending follow-ups manually, and chasing updates that a system should handle automatically.",
  },
  {
    number: "03",
    title: "Growth That Breaks Things",
    body: "The workflow that worked at 10 clients falls apart at 50. Scaling without infrastructure just means more chaos, faster.",
  },
];

const RevenueDisappears = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="problem" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div ref={ref} className={`mb-16 scroll-animate ${isInView ? "animate-reveal-up" : ""}`}>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs text-foreground/70 font-semibold uppercase tracking-[0.25em]">
              The Problem
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-foreground tracking-tight">
            Most businesses don't have an AI problem.
            <br />
            <span className="text-foreground/50">They have an infrastructure problem.</span>
          </h2>

          <p className="text-base md:text-lg text-foreground/60 max-w-2xl leading-relaxed">
            Manual operations, broken handoffs, and workflows built for a team of 10 trying to
            serve 100. The bottleneck isn't your team — it's the systems underneath them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div
              key={p.number}
              className="rounded-2xl bg-[#141414] border border-white/10 p-8 hover:border-white/20 transition-colors"
            >
              <div className="text-xs font-mono text-foreground/40 mb-6 tracking-widest">{p.number}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueDisappears;
