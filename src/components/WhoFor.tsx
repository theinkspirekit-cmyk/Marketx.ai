import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

const bullets = [
  "Founders running ops-heavy businesses who are doing work a system should be doing",
  "Agencies that have outgrown manual outreach, reporting, and client management",
  "Businesses that have tried tools and found they still need someone to run them",
];

const WhoFor = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="who-for" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div ref={ref} className={`scroll-animate ${isInView ? "animate-reveal-up" : ""}`}>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs text-foreground/70 font-semibold uppercase tracking-[0.25em]">
              Who We Work With
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground tracking-tight mb-10">
            This is not for <span className="text-foreground/50">everyone.</span>
          </h2>

          <p className="text-lg text-foreground/60 mb-8">We work best with:</p>

          <ul className="space-y-4 mb-10">
            {bullets.map((b) => (
              <li key={b} className="flex gap-4 items-start">
                <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0 text-foreground" />
                <span className="text-base md:text-lg text-foreground/80 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <p className="text-base md:text-lg text-foreground/60 leading-relaxed border-t border-white/10 pt-8">
            We don't sell software. We build and deploy the infrastructure ourselves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoFor;
