import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });

  const faqs = [
    {
      question: "How long until my system is live?",
      answer: "Most automations are live within 48 hours. Simple workflows like email sequences can be ready in 24 hours, while complex multi-system integrations may take up to a week. We'll give you an exact timeline during your strategy call."
    },
    {
      question: "Will this work with the tools I already use?",
      answer: "Yes! We integrate with 100+ popular business tools including Google Workspace, Slack, HubSpot, Shopify, WordPress, and more. If we can't integrate with your specific tool, we'll find an alternative solution."
    },
    {
      question: "What does this cost?",
      answer: "Our pricing depends on the complexity and scope of your automation needs. We offer packages starting from simple single-workflow automations to full business process overhauls. Book a free call to get a custom quote."
    },
    {
      question: "What if my business is different?",
      answer: "Every automation we build is custom-tailored to your specific business processes. We've worked across dozens of industries and can adapt our solutions to fit your unique workflows and requirements."
    },
    {
      question: "Do I or my team need to be technical?",
      answer: "Zero technical knowledge required. We handle all the setup and provide simple dashboards for monitoring. You'll get training on how to use your new automations, but no technical skills are needed to operate them."
    },
    {
      question: "How do I know this will actually work?",
      answer: "We offer a 30-day money-back guarantee. If the automation doesn't work as promised or doesn't save you the expected time, we'll refund your investment and fix the issues at no cost."
    }
  ];

  return (
    <section id="faq" className="py-20 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div 
            ref={headerRef}
            className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
              Frequently Asked
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-muted-foreground">
              Questions
            </h2>
          </div>

          <div className="divide-y divide-black/10">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 text-left flex items-center justify-between group transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0 text-muted-foreground">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-60 pb-6' : 'max-h-0'
                }`}>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
