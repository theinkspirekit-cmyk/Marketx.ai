import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";

const studies: Record<
  string,
  {
    tag: string;
    title: string;
    client: string;
    overview: string;
    challenge: string;
    solution: string[];
    stack: string[];
    outcome: string;
  }
> = {
  "outbound-sales-system": {
    tag: "Outbound Sales System",
    title: "Multi-agent outbound for a Delhi marketing agency",
    client: "Growzzy Media — 8-person marketing agency, Delhi",
    overview:
      "Growzzy's small team was burning hours every week on manual prospecting, copywriting, and follow-ups. We replaced the entire outbound motion with a multi-agent system that sources, writes, sends, and follows up — without anyone touching a spreadsheet.",
    challenge:
      "Lead research, list building, copywriting, sequencing, and reply triage were all manual. The team had limited bandwidth and outreach quality dropped whenever they got busy with client work.",
    solution: [
      "Agent 1 sources targeted leads via Apify scrapers with custom filters per ICP.",
      "Agent 2 enriches each lead using Jina AI to pull live context from their site and recent posts.",
      "Agent 3 writes a personalized first-touch email grounded in that context.",
      "Airtable holds the full pipeline state with human-in-the-loop approval gates.",
      "Instantly handles sending, warmup, and sequencing with automatic follow-ups.",
    ],
    stack: ["Apify", "Jina AI", "Airtable", "Instantly", "OpenAI"],
    outcome:
      "A fully manual outreach process was replaced end-to-end. The team now reviews and approves — they no longer build, write, or send.",
  },
  "voice-agent": {
    tag: "Voice Agent",
    title: "24/7 AI voice agent for a hotel front desk",
    client: "Hotel Client (Aria)",
    overview:
      "Aria's front desk was overwhelmed with routine calls — room availability, booking changes, and FAQs — pulling staff away from in-person guests. We deployed a voice agent that handles inbound calls around the clock.",
    challenge:
      "After-hours calls were missed. During the day, repetitive questions consumed front-desk bandwidth and slowed down guest check-in.",
    solution: [
      "Built on Retell AI with a custom prompt graph tuned to hospitality flows.",
      "Connected directly to the PMS for live availability and reservation lookups.",
      "Knowledge base of hotel policies, amenities, and local FAQs.",
      "Graceful handoff to a human when the request falls outside the agent's scope.",
    ],
    stack: ["Retell AI", "PMS Integration", "Twilio", "OpenAI"],
    outcome:
      "24/7 guest handling with zero human intervention on routine calls. Front desk staff are free to focus on in-person guests.",
  },
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [showCal, setShowCal] = useState(false);
  const study = slug ? studies[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-foreground">
        <div className="text-center">
          <p className="mb-6 text-foreground/70">Case study not found.</p>
          <Link to="/" className="px-5 py-2.5 rounded-full bg-white text-black font-semibold">
            Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-geist">
      <Header onBookCallClick={() => setShowCal(true)} />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            {study.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-foreground mb-6">
            {study.title}
          </h1>
          <p className="text-foreground/60 mb-12">{study.client}</p>

          <div className="space-y-12 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/40 mb-3">Overview</h2>
              <p>{study.overview}</p>
            </section>
            <section>
              <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/40 mb-3">The challenge</h2>
              <p>{study.challenge}</p>
            </section>
            <section>
              <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/40 mb-3">What we built</h2>
              <ul className="space-y-3">
                {study.solution.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full bg-white shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/40 mb-3">Stack</h2>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/40 mb-3">Outcome</h2>
              <p>{study.outcome}</p>
            </section>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-foreground/70">Want something similar built for your operation?</p>
            <button
              onClick={() => setShowCal(true)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all"
            >
              Book a Free Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <CalendlyModal isOpen={showCal} onClose={() => setShowCal(false)} />
    </div>
  );
};

export default CaseStudyDetail;

export const caseStudySlugs = Object.keys(studies);
