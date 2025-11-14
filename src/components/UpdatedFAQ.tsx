import { useState } from "react";
import { ChevronDown } from "lucide-react";

const UpdatedFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What if I don't have a tech team?",
      answer: "That's exactly why we exist. We handle everything from strategy to implementation to maintenance. You don't need any technical knowledge."
    },
    {
      question: "How long until I see results?",
      answer: "Most clients save 10+ hours in the first week. Full ROI is typically achieved within 60-90 days."
    },
    {
      question: "What if something breaks?",
      answer: "We provide 6 months of maintenance included, plus 24-hour support response time. We fix any issues at no additional cost."
    },
    {
      question: "How much does this cost?",
      answer: "Investment ranges from $3,500 to $12,000 depending on complexity. Average ROI is 450%, meaning you save $4.50 for every $1 invested."
    },
    {
      question: "Will this work for my specific industry?",
      answer: "We've automated workflows for 40+ industries including professional services, e-commerce, real estate, healthcare, and more. Schedule a free audit to discuss your specific needs."
    },
    {
      question: "Do I need to change my current tools?",
      answer: "No. We integrate with your existing software (CRM, email, accounting, etc.). We adapt to your workflow, not the other way around."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Everything you need to know about our automation services
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatedFAQ;
