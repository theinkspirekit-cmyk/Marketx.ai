import { useInView } from "@/hooks/useInView";

const steps = [
  {
    n: "01",
    title: "Diagnose",
    body: "We map your operations end to end — where work stalls, where humans are doing machine work, and where the biggest leverage points are.",
  },
  {
    n: "02",
    title: "Engineer",
    body: "We build the system. Multi-agent workflows, automated pipelines, custom AI agents — designed specifically for how your business actually runs.",
  },
  {
    n: "03",
    title: "Deploy",
    body: "We hand over infrastructure that runs without you. Not a template. Not a tool. A system built for your operation.",
  },
];

const VideoSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div ref={ref} className={`mb-16 scroll-animate ${isInView ? "animate-reveal-up" : ""}`}>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs text-foreground/70 font-semibold uppercase tracking-[0.25em]">
              The Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground tracking-tight">
            How we build your <span className="text-foreground/50">infrastructure.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-[#141414] border border-white/10 p-8 hover:border-white/20 transition-colors"
            >
              <div className="text-xs font-mono text-foreground/40 mb-6 tracking-widest">STEP {s.n}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
