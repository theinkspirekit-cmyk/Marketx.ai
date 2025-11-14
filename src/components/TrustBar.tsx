const TrustBar = () => {
  const trustPoints = [
    { icon: "✓", text: "SOC 2 Certified" },
    { icon: "✓", text: "200+ Businesses Automated" },
    { icon: "✓", text: "Average ROI: 450%" },
    { icon: "✓", text: "60-Day Money-Back Guarantee" }
  ];

  return (
    <div className="sticky top-0 z-50 bg-primary/10 border-b border-primary/20 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-3">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <span className="text-success font-bold">{point.icon}</span>
              <span className="text-foreground/90">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
