import { useInView } from "@/hooks/useInView";

const cases = [
  {
    tag: "Outbound Sales System",
    client: "Growzzy Media — 8-person marketing agency, Delhi",
    built:
      "Multi-agent outbound system using Apify, Jina AI, Airtable, and Instantly. Automated lead sourcing, personalized email copywriting, and follow-up sequencing.",
    result: "Replaced a fully manual outreach process.",
  },
  {
    tag: "Voice Agent",
    client: "Hotel Client (Aria)",
    built:
      "AI voice agent built on Retell AI handling inbound hotel inquiries — room availability, bookings, FAQs — without front desk involvement.",
    result: "24/7 guest handling with zero human intervention on routine calls.",
  },
];

const CaseStudies = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div ref={ref} className={`mb-16 scroll-animate ${isInView ? "animate-reveal-up" : ""}`}>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs text-foreground/70 font-semibold uppercase tracking-[0.25em]">
              Proof of Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground tracking-tight">
            What we've <span className="text-foreground/50">built.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <div
              key={c.tag}
              className="rounded-2xl bg-[#141414] border border-white/10 p-8 hover:border-white/20 transition-colors flex flex-col"
            >
              <span className="inline-block w-fit text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                {c.tag}
              </span>
              <p className="text-foreground font-semibold mb-5">{c.client}</p>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-foreground/40 text-xs uppercase tracking-wider mb-1.5">What we built</p>
                  <p className="text-foreground/70 leading-relaxed">{c.built}</p>
                </div>
                <div>
                  <p className="text-foreground/40 text-xs uppercase tracking-wider mb-1.5">Result</p>
                  <p className="text-foreground/70 leading-relaxed">{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
