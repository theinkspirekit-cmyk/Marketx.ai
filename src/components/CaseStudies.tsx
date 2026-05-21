import { useInView } from "@/hooks/useInView";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    slug: "outbound-sales-system",
    tag: "Outbound Sales System",
    client: "Growzzy Media — 8-person marketing agency, Delhi",
    built:
      "Multi-agent outbound system using Apify, Jina AI, Airtable, and Instantly. Automated lead sourcing, personalized email copywriting, and follow-up sequencing.",
    result: "Replaced a fully manual outreach process.",
  },
  {
    slug: "voice-agent",
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground tracking-tight">
            What we've <span className="text-foreground/50">built.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <Link
              to={`/case-studies/${c.slug}`}
              key={c.slug}
              className="group relative rounded-2xl p-8 flex flex-col overflow-hidden border border-white/15 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.22),inset_0_-1px_1px_0_rgba(255,255,255,0.06),0_20px_60px_-20px_rgba(0,0,0,0.6)] hover:border-white/25 hover:bg-white/[0.05] transition-all"
            >
              {/* top edge highlight */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
              {/* refractive sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.04) 100%)",
                }}
              />
              <div className="relative flex items-start justify-between mb-6">
                <span className="inline-block w-fit text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/70 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                  {c.tag}
                </span>
                <ArrowUpRight className="w-5 h-5 text-foreground/50 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="relative text-foreground font-semibold mb-5">{c.client}</p>
              <div className="relative space-y-4 text-sm">
                <div>
                  <p className="text-foreground/40 text-xs uppercase tracking-wider mb-1.5">What we built</p>
                  <p className="text-foreground/70 leading-relaxed">{c.built}</p>
                </div>
                <div>
                  <p className="text-foreground/40 text-xs uppercase tracking-wider mb-1.5">Result</p>
                  <p className="text-foreground/70 leading-relaxed">{c.result}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
