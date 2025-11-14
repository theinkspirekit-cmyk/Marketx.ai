import { ArrowRight } from "lucide-react";

interface ProblemChecklistProps {
  onBookCallClick: () => void;
}

const ProblemChecklist = ({ onBookCallClick }: ProblemChecklistProps) => {
  const problems = [
    { task: "Manual data entry between systems", hours: 6 },
    { task: "Following up with leads manually", hours: 8 },
    { task: "Copy-pasting customer information", hours: 4 },
    { task: "Creating reports by hand", hours: 3 },
    { task: "Social media posting manually", hours: 5 }
  ];

  const totalHours = problems.reduce((sum, p) => sum + p.hours, 0);
  const monthlyCost = totalHours * 50 * 4.33;

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
            <span className="text-gray-900">The </span>
            <span className="text-urgency">$15,000/Month Problem</span>
            <br />
            <span className="text-gray-600 text-3xl md:text-4xl">Most Businesses Ignore</span>
          </h2>

          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 mb-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Does this sound familiar?</h3>
            
            <div className="space-y-4 mb-8">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start justify-between gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex items-start gap-4 flex-1">
                    <input
                      type="checkbox"
                      checked
                      readOnly
                      className="mt-1 w-6 h-6 rounded border-2 border-urgency accent-urgency cursor-default"
                    />
                    <p className="text-gray-900 text-lg font-medium">{problem.task}</p>
                  </div>
                  <span className="bg-urgency/10 text-urgency font-bold px-3 py-1 rounded-full text-sm whitespace-nowrap">{problem.hours} hrs/week</span>
                </div>
              ))}
            </div>

            <div className="bg-white border-[3px] border-urgency rounded-2xl p-6 text-center">
              <p className="text-gray-700 mb-2 text-lg">That's {totalHours} hours weekly =</p>
              <p className="text-6xl font-bold text-urgency mb-2">
                ${Math.round(monthlyCost).toLocaleString()}
              </p>
              <p className="text-gray-700 text-lg">per month wasted on work that could be automated</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onBookCallClick}
              className="inline-flex items-center space-x-2 btn-secondary-ref text-lg px-8 py-5 hover:scale-105 transition-all duration-300 group"
            >
              <span>Show Me How to Eliminate This</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemChecklist;
