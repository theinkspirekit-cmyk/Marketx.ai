import { useEffect, useRef, useState } from "react";
import { Rocket, Shield, Zap, ChevronRight, Play } from "lucide-react";

interface EnterpriseHeroProps {
  onBookCallClick: () => void;
}

const EnterpriseHero = ({ onBookCallClick }: EnterpriseHeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animated AI Network Visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Nodes for the AI network
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; color: string; pulse: number }[] = [];
    const nodeCount = 15;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 4 + 3,
        color: i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#8B5CF6' : '#06B6D4',
        pulse: Math.random() * Math.PI * 2
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw glow
        const glowRadius = node.radius + Math.sin(node.pulse) * 3 + 3;
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius * 2
        );
        gradient.addColorStop(0, node.color + '40');
        gradient.addColorStop(1, node.color + '00');
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, glowRadius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw node
        ctx.beginPath();
        ctx.fillStyle = node.color;
        ctx.arc(node.x, node.y, node.radius + Math.sin(node.pulse) * 1, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const metrics = [
    { icon: Rocket, text: "[X]% Faster Deployment", color: "text-blue-400" },
    { icon: Shield, text: "SOC 2 Compliant", color: "text-green-400" },
    { icon: Zap, text: "[X]+ Pre-Built Agents", color: "text-purple-400" },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="enterprise-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-white/80">
                {/* <!-- REPLACE: Add actual recognition or remove --> */}
                Leader in Enterprise AI Orchestration
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Enterprise AI Agent Platform for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Multi-Agent Orchestration
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
              Deploy intelligent, autonomous AI agents that collaborate across complex workflows—delivering measurable ROI for Work, Service, and Process automation
            </p>

            {/* Metrics Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                >
                  <metric.icon className={`w-4 h-4 ${metric.color}`} />
                  <span className="text-sm text-white/80">{metric.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={onBookCallClick}
                className="group px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                  boxShadow: '0 8px 32px rgba(37, 99, 235, 0.4)'
                }}
              >
                Talk to an Expert
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Create Your First Agent
              </button>
            </div>

            {/* Trust Text */}
            <p className="text-sm text-white/40">
              No credit card required • Free 14-day trial
            </p>
          </div>

          {/* Right Visual - AI Network Animation */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              
              {/* Canvas for Animation */}
              <canvas
                ref={canvasRef}
                className="w-full h-full rounded-3xl"
              />

              {/* Central AI Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/30">
                  <span className="text-white font-bold text-2xl">AI</span>
                </div>
              </div>

              {/* Floating Labels */}
              <div className="absolute top-10 left-10 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10 text-xs text-white">
                Agent 1
              </div>
              <div className="absolute top-20 right-5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10 text-xs text-white">
                Agent 2
              </div>
              <div className="absolute bottom-20 left-5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10 text-xs text-white">
                Agent 3
              </div>
              <div className="absolute bottom-10 right-10 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10 text-xs text-white">
                Orchestrator
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHero;
