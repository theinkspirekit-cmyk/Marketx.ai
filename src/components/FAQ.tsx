import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    question: "What kinds of businesses do you work with?",
    answer:
      "Primarily agencies, B2B operators, and founders running ops-heavy businesses. If your team is doing repetitive work that could be systemized, we can likely help.",
  },
  {
    question: "How long does it take to build and deploy?",
    answer:
      "Depends on complexity. A single automated workflow can be live in under a week. A full multi-agent system typically takes 2-4 weeks from scoping to deployment.",
  },
  {
    question: "Do we need technical people on our side?",
    answer:
      "No. We handle the entire build and deployment. You tell us how your business runs — we engineer the system around it.",
  },
  {
    question: "What does this cost?",
    answer:
      "We scope every engagement individually. Book a call and we'll tell you exactly what makes sense for your operation and what it costs.",
  },
  {
    question: "What if something breaks after you deploy?",
    answer:
      "We don't hand you a tool and leave. We stay involved to ensure the system runs correctly and improve it as your operation evolves.",
  },
  {
    question: "How is this different from hiring a VA or using Zapier?",
    answer:
      "A VA is still a human doing manual work. Zapier is a tool you still have to run. We build infrastructure that operates autonomously — no one needs to manage it day to day.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div ref={ref} className={`mb-14 scroll-animate ${isInView ? "animate-reveal-up" : ""}`}>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs text-foreground/70 font-semibold uppercase tracking-[0.25em]">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground tracking-tight">
            Questions, <span className="text-foreground/50">answered.</span>
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 text-left flex items-center justify-between gap-4"
              >
                <h3 className="text-base md:text-lg font-semibold text-foreground">{faq.question}</h3>
                <div className="flex-shrink-0 text-foreground/60">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-60 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-foreground/60 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
