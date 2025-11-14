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
    <section className="py-20 bg-muted/5 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
            <span className="text-foreground">The </span>
            <span className="text-urgency">$15,000/Month Problem</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl">Most Businesses Ignore</span>
          </h2>

          <div className="bg-background/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Does this sound familiar?</h3>
            
            <div className="space-y-4 mb-8">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/20 transition-colors">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="mt-1 w-5 h-5 rounded border-2 border-urgency accent-urgency cursor-default"
                  />
                  <div className="flex-1">
                    <p className="text-foreground text-lg">{problem.task}</p>
                    <p className="text-urgency font-semibold">{problem.hours} hrs/week</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-urgency/20 border-2 border-urgency rounded-2xl p-6 text-center">
              <p className="text-muted-foreground mb-2">That's {totalHours} hours weekly =</p>
              <p className="text-5xl font-bold text-urgency mb-2">
                ${Math.round(monthlyCost).toLocaleString()}/month wasted
              </p>
              <p className="text-foreground/80">on work that could be automated</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onBookCallClick}
              className="inline-flex items-center space-x-2 btn-secondary-ref text-lg px-8 py-5 hover:scale-105 transition-all duration-300 group"
            >
              <span>Show Me How to Fix This</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemChecklist;
