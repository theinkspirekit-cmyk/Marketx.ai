import { Award, Users, Zap, ChevronRight } from "lucide-react";

const TrustBanner = () => {
  const trustItems = [
    {
      icon: Award,
      text: "Named Leader in [Analyst Report] 2025",
      badge: "LEADER"
    },
    {
      icon: Users,
      text: "Trusted by [X]+ Enterprise Customers",
      badge: "TRUSTED"
    },
    {
      icon: Zap,
      text: "Processing [X]M+ AI Agent Tasks Monthly",
      badge: "SCALE"
    }
  ];

  return (
    <>
      {/* <!-- REPLACE: Add your real analyst recognition here or remove this section --> */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
        
        <div className="relative py-3">
          <div className="flex animate-trust-slide" style={{ width: '200%' }}>
            {/* Double the items for seamless loop */}
            {[...trustItems, ...trustItems].map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-3 px-8 whitespace-nowrap"
                style={{ width: `${100 / trustItems.length}%` }}
              >
                <span className="px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded">
                  {item.badge}
                </span>
                <item.icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-white/80 font-medium">
                  {item.text}
                </span>
                <button className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustBanner;
