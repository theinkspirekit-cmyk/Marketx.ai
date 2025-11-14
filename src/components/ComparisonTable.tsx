import { X, Check, ArrowRight } from "lucide-react";

const ComparisonTable = () => {
  const comparisons = [
    { old: "4 hours daily on admin", new: "15 minutes daily" },
    { old: "Leads wait 2-24 hours", new: "60-second response" },
    { old: "Manual data entry errors", new: "99.9% accuracy" },
    { old: "Work stops when you sleep", new: "24/7 operation" },
    { old: "Need to hire more staff", new: "Scale without hiring" },
    { old: "Monthly cost: $5,600", new: "Monthly cost: $400" }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            <span className="text-foreground">Old Way </span>
            <span className="text-muted-foreground">vs </span>
            <span className="gradient-text">New Way</span>
          </h2>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-12">
            {/* Old Way Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-urgency mb-6 text-center md:text-left">WITHOUT AUTOMATION</h3>
              {comparisons.map((item, index) => (
                <div key={index} className="glass-card p-4 rounded-xl border-l-4 border-urgency">
                  <div className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-urgency flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{item.old}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow Column */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="bg-primary/20 rounded-full p-6">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-semibold text-primary mt-4 text-center max-w-[120px]">
                We handle the transformation
              </p>
            </div>

            {/* New Way Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-success mb-6 text-center md:text-left">WITH OUR AUTOMATION</h3>
              {comparisons.map((item, index) => (
                <div key={index} className="glass-card p-4 rounded-xl border-l-4 border-success bg-success/5">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{item.new}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="md:hidden flex justify-center mb-8">
            <div className="bg-primary/20 rounded-full p-4">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
