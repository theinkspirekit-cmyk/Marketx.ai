import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: faqsRef, isInView: faqsInView } = useInView({ threshold: 0.1 });

  const faqs = [
    {
      question: "How quickly can you implement automations?",
      answer: "We work efficiently to get your automations live as quickly as possible. Simple workflows can be ready fast, while complex multi-system integrations may take longer. We'll give you an exact timeline during your strategy call."
    },
    {
      question: "What if the automation doesn't work or save time?",
      answer: "You don't pay. We offer a 30-day money-back guarantee. If the automation doesn't work as promised, we'll refund your investment and fix the issues at no cost."
    },
    {
      question: "Do you work with my existing tools?",
      answer: "Yes! We integrate with 100+ popular business tools including Google Workspace, Slack, HubSpot, Shopify, WordPress, and more."
    },
    {
      question: "How much technical knowledge do I need?",
      answer: "Zero. We handle all the technical setup and provide simple dashboards for monitoring. No technical skills are required."
    },
    {
      question: "What's the typical ROI on automation investments?",
      answer: "Most clients see significant ROI within the first month. If you're spending 10 hours/week on manual tasks, our automations typically pay for themselves many times over."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              Frequently Asked{" "}
              <span className="font-instrument-serif italic text-primary font-normal">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our automation services.
            </p>
          </div>

          <div ref={faqsRef} className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`clean-card overflow-hidden scroll-animate ${
                  faqsInView ? `animate-slide-up-fade stagger-${index + 1}` : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index
                      ? <ChevronUp className="w-5 h-5 text-primary" />
                      : <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    }
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-border mb-4" />
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
