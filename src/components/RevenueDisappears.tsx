import { useInView } from "@/hooks/useInView";

const MissedInquiriesWidget = () => (
  <div className="bg-muted/30 rounded-xl p-4 space-y-3">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-2 h-2 rounded-full bg-green-500" />
      <div className="w-2 h-2 rounded-full bg-yellow-500" />
      <div className="w-2 h-2 rounded-full bg-red-500" />
      <span className="text-[10px] text-muted-foreground ml-auto">Inbox</span>
    </div>
    <div className="space-y-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2 bg-background rounded-lg px-3 py-2">
          <div className="w-6 h-6 rounded-full bg-muted" />
          <div className="flex-1">
            <div className="h-2 w-20 bg-muted rounded" />
            <div className="h-1.5 w-32 bg-muted/60 rounded mt-1" />
          </div>
          {i === 1 && (
            <span className="text-[9px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded">MISSED</span>
          )}
        </div>
      ))}
    </div>
    <div className="text-center">
      <span className="text-[10px] text-red-500 font-semibold">3 leads unanswered today</span>
    </div>
  </div>
);

const SlowFollowUpsWidget = () => (
  <div className="bg-muted/30 rounded-xl p-4">
    <div className="flex items-center justify-between mb-3">
      <span className="text-[10px] font-semibold text-muted-foreground">RESPONSE TIME</span>
    </div>
    <div className="relative mb-4">
      <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
        <span>5 MIN</span>
        <span>48 HOURS LATER</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" />
      </div>
    </div>
    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
      <span className="text-[10px] font-bold text-red-600">LEAD IS COLD</span>
    </div>
    <p className="text-[10px] text-muted-foreground mt-2 text-center">
      Conversion drops 80% after 5 minutes
    </p>
  </div>
);

const NoClearPictureWidget = () => (
  <div className="bg-muted/30 rounded-xl p-4">
    <div className="flex items-center justify-between mb-3">
      <span className="text-[10px] font-semibold text-muted-foreground">DASHBOARD</span>
      <span className="text-[9px] text-muted-foreground">No data</span>
    </div>
    <div className="grid grid-cols-3 gap-1.5">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="aspect-square rounded bg-muted flex items-center justify-center">
          <span className="text-[8px] text-muted-foreground/50">—</span>
        </div>
      ))}
    </div>
    <div className="mt-3 flex items-center gap-2">
      <div className="h-1.5 flex-1 bg-muted rounded" />
      <div className="h-1.5 w-8 bg-muted rounded" />
    </div>
  </div>
);

const problems = [
  {
    title: "Missed Inquiries",
    description: "Leads come in at all hours. Without instant response, they move on to competitors.",
    widget: <MissedInquiriesWidget />,
  },
  {
    title: "Slow Follow-Ups",
    description: "Manual follow-ups are slow and inconsistent. By the time you respond, interest is gone.",
    widget: <SlowFollowUpsWidget />,
  },
  {
    title: "No Clear Picture",
    description: "Without centralized data, you're making decisions blind — and it's costing you revenue.",
    widget: <NoClearPictureWidget />,
  },
];

const RevenueDisappears = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 scroll-animate ${isInView ? "animate-reveal-up" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">The Problem</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight">
            Where Your Revenue
            <br />
            <span className="font-instrument-serif italic text-primary font-normal">Disappears</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most businesses lose leads, waste time on manual tasks, and lack the data they need to grow. Here's where things break down.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <div key={i} className="bg-background border border-border/40 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              {problem.widget}
              <h3 className="text-lg font-semibold text-foreground mt-5 mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueDisappears;
