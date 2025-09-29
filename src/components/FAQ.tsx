import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can you implement automations?",
      answer: "Most automations are live within 48 hours. Simple workflows like email sequences can be ready in 24 hours, while complex multi-system integrations may take up to a week. We'll give you an exact timeline during your strategy call."
    },
    {
      question: "What if the automation doesn't work or save time?",
      answer: "You don't pay. We offer a 30-day money-back guarantee. If the automation doesn't work as promised or doesn't save you the expected time, we'll refund your investment and fix the issues at no cost."
    },
    {
      question: "Do you work with my existing tools?",
      answer: "Yes! We integrate with 100+ popular business tools including Google Workspace, Slack, HubSpot, Shopify, WordPress, and more. If we can't integrate with your specific tool, we'll find an alternative solution."
    },
    {
      question: "How much technical knowledge do I need?",
      answer: "Zero. We handle all the technical setup and provide simple dashboards for monitoring. You'll get training on how to use your new automations, but no technical skills are required to operate them."
    },
    {
      question: "What's the typical ROI on automation investments?",
      answer: "Most clients see 300-500% ROI within the first month. If you're spending 10 hours/week on manual tasks worth $50/hour, that's $2,000/month in opportunity cost. Our automations typically cost a fraction of that."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Frequently Asked</span>
              <br />
              <span className="text-muted-foreground">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our automation services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover-glow transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-border mb-4"></div>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Book a free 15-minute call and we'll answer all your questions about automation.
              </p>
              <div className="inline-flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
                <span className="font-semibold">Usually available within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;