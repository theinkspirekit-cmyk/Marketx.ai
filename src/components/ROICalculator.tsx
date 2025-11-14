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

      <div className="bg-white/10 border-2 border-urgency rounded-2xl p-6 text-center animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]">
        <p className="text-foreground/90 mb-2 flex items-center justify-center gap-2">
          <span className="text-2xl">⚠️</span>
          <span>You're currently wasting</span>
        </p>
        <p className="text-[2.5rem] font-bold mb-2 bg-gradient-to-r from-urgency via-orange-500 to-urgency bg-clip-text text-transparent">
          ${monthlyWaste.toLocaleString()}
        </p>
        <p className="text-foreground/90">per month on work that could be automated</p>
      </div>

      <p className="text-sm text-muted-foreground text-center mt-4">
        Calculation: {hours[0]} hours × ${hourlyRate}/hr × {weeksPerMonth} weeks
      </p>
    </div>
  );
};

export default ROICalculator;
