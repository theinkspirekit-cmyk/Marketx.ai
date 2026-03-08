import { useInView } from "@/hooks/useInView";

const MissedInquiriesWidget = () => (
  <div className="bg-[#f5f5f0] rounded-2xl p-6 flex items-center justify-center" style={{ minHeight: 180 }}>
    <div className="w-full max-w-[220px] space-y-3">
      {/* Row 1 - with MISSED badge */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="h-2.5 w-24 bg-red-300 rounded-full" />
        <span className="ml-auto text-[9px] font-bold bg-red-400 text-white px-2 py-0.5 rounded">MISSED</span>
      </div>
      {/* Row 2 */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="h-2.5 w-28 bg-[#d6d6c8] rounded-full" />
      </div>
      {/* Row 3 */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="h-2.5 w-20 bg-[#d6d6c8] rounded-full" />
      </div>
    </div>
  </div>
);

const SlowFollowUpsWidget = () => (
  <div className="bg-[#f5f5f0] rounded-2xl p-6 flex flex-col items-center justify-center" style={{ minHeight: 180 }}>
    <div className="w-full max-w-[240px]">
      {/* Top bar area */}
      <div className="flex items-center gap-2 mb-2">
        <div className="h-2.5 w-20 bg-[#d6d6c8] rounded-full" />
        <div className="flex-1" />
        <div className="w-5 h-5 rounded-full border-2 border-red-400 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-red-400" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-3 w-full bg-[#e0e0d6] rounded-full overflow-hidden mb-1.5">
        <div className="h-full w-full rounded-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-500" />
      </div>
      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground tracking-wider mb-4">
        <span>5 MIN</span>
        <span>48 HOURS LATER</span>
      </div>
      {/* LEAD IS COLD badge */}
      <div className="bg-red-100 border border-red-300 rounded-lg px-4 py-2 text-center">
        <span className="text-[11px] font-bold text-red-500 tracking-wider">LEAD IS COLD</span>
      </div>
    </div>
  </div>
);

const NoClearPictureWidget = () => (
  <div className="bg-[#f5f5f0] rounded-2xl p-6 flex items-center justify-center" style={{ minHeight: 180 }}>
    <div className="w-full max-w-[260px]">
      {/* Mock dashboard grid */}
      <div className="flex gap-3">
        {/* Left column - list items */}
        <div className="flex-1 space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-sm bg-[#d6d6c8]" />
              <div className="h-2 flex-1 bg-[#d6d6c8] rounded-full" />
            </div>
          ))}
        </div>
        {/* Right column - chart mockup */}
        <div className="flex-1 relative">
          <div className="grid grid-cols-3 gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={`h-6 rounded-sm ${i === 2 || i === 4 ? 'bg-green-200' : i === 1 ? 'bg-red-200' : 'bg-[#e0e0d6]'}`} />
            ))}
          </div>
          {/* Overlay dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#c0c0b0] bg-[#f5f5f0]" />
          {/* Red dot indicator */}
          <div className="absolute top-2 right-0 w-2 h-2 rounded-full bg-red-400" />
        </div>
      </div>
    </div>
  </div>
);

const problems = [
  {
    title: "Missed Inquiries",
    description: "Leads come in through WhatsApp, email, phone, and your website—but your team can't respond fast enough. By the time they do, prospects have moved on.",
    widget: <MissedInquiriesWidget />,
  },
  {
    title: "Slow Follow-Ups",
    description: "Your team is busy. Follow-ups get delayed. Hot leads go cold. Studies show responding within 5 minutes is 21x more effective—but that rarely happens.",
    widget: <SlowFollowUpsWidget />,
  },
  {
    title: "No Clear Picture",
    description: "You don't know which leads are hot, which went cold, or why deals fall through. Without visibility, you can't fix what's broken.",
    widget: <NoClearPictureWidget />,
  },
];

const RevenueDisappears = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div
          ref={ref}
          className={`mb-14 scroll-animate ${isInView ? "animate-reveal-up" : ""}`}
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs text-primary font-semibold uppercase tracking-[0.2em]">The Problem</span>
          </div>

          {/* Heading - left aligned, large */}
          <h2 className="text-4xl md:text-[48px] font-bold leading-[1.1] mb-0" style={{ lineHeight: '66px', fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
            <span style={{ color: 'rgb(0, 0, 0)' }}>Where Your Revenue</span>
          </h2>
          <h2 className="text-4xl md:text-[48px] font-bold leading-[1.1] mb-6" style={{ lineHeight: '66px', fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
            <span style={{ color: 'rgb(137, 137, 137)' }}>Disappears</span>
          </h2>

          {/* Subtitle - left aligned */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Every unanswered inquiry is money walking out the door. Every
            forgotten follow-up is a deal that closes with your competitor instead of
            you.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <div key={i} className="bg-background border border-border/50 rounded-2xl overflow-hidden">
              {/* Widget area */}
              <div className="p-4">
                {problem.widget}
              </div>
              {/* Text area */}
              <div className="px-6 pb-6 pt-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueDisappears;
