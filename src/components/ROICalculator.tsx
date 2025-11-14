import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const ROICalculator = () => {
  const [hours, setHours] = useState([20]);
  const hourlyRate = 50;
  const weeksPerMonth = 4.33;
  const monthlyWaste = Math.round(hours[0] * hourlyRate * weeksPerMonth);

  return (
    <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto mb-8">
      <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
        Calculate Your Monthly Waste
      </h3>
      
      <div className="mb-6">
        <label className="block text-foreground/90 mb-4 text-lg">
          Hours spent on manual tasks weekly: <span className="font-bold text-primary">{hours[0]} hours</span>
        </label>
        <Slider
          value={hours}
          onValueChange={setHours}
          min={5}
          max={40}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <span>5 hrs</span>
          <span>40 hrs</span>
        </div>
      </div>

      <div className="bg-urgency/20 border-2 border-urgency rounded-2xl p-6 text-center">
        <p className="text-muted-foreground mb-2">You're currently wasting</p>
        <p className="text-5xl font-bold text-urgency mb-2">
          ${monthlyWaste.toLocaleString()}
        </p>
        <p className="text-foreground/80">per month on work that could be automated</p>
      </div>

      <p className="text-sm text-muted-foreground text-center mt-4">
        Calculation: {hours[0]} hours × ${hourlyRate}/hr × {weeksPerMonth} weeks
      </p>
    </div>
  );
};

export default ROICalculator;
