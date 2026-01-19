import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { BarChart3, Brush, Heart, ShoppingCart, DollarSign, Command } from "lucide-react";

const Projects = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const [activeTab, setActiveTab] = useState("sales");

  const categories = [
    { id: "sales", name: "Sales", icon: BarChart3, iconColor: "text-blue-500" },
    { id: "creative", name: "Creative", icon: Brush, iconColor: "text-orange-500" },
    { id: "healthcare", name: "Healthcare", icon: Heart, iconColor: "text-pink-500" },
    { id: "ecommerce", name: "E-commerce", icon: ShoppingCart, iconColor: "text-green-500" },
    { id: "financial", name: "Financial", icon: DollarSign, iconColor: "text-purple-500" },
  ];

  const projects = {
    sales: {
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=600&fit=crop",
      company: "Orbit CRM",
      logo: "IPSUM",
      title: "Automating Lead Qualification & Follow-up",
      description: "Calisto automated the generation of onboarding documents, personalized care plans, and internal communication, ensuring speed, accuracy, and HIPAA compliance.",
      stats: [
        { value: "-60%", label: "Time spent on admin paperwork", type: "decrease" },
        { value: "+90%", label: "Improvement in process accuracy", type: "increase" }
      ]
    },
    creative: {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      company: "Lumora Studio",
      logo: "LOGO",
      title: "Streamlining Creative Task Management",
      description: "We built a custom task automation system that connected client request forms with Lumora's ClickUp boards, automatically assigning tasks to the right team members based on project type.",
      stats: [
        { value: "3x", label: "Faster task turnaround", type: "increase" },
        { value: "+75%", label: "Team productivity improvement", type: "increase" }
      ]
    },
    healthcare: {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      company: "Nova Health",
      logo: "///",
      title: "Intelligent Document Generation & Routing",
      description: "Calisto implemented an AI-driven workflow to automatically qualify inbound leads, send personalized follow-up emails, and sync data with Orbit's CRM, cutting manual effort and improving response time.",
      stats: [
        { value: "+65%", label: "Faster lead response time", type: "increase" },
        { value: "-40%", label: "Reduction in manual data entry", type: "decrease" }
      ]
    },
    ecommerce: {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      company: "Verta",
      logo: "∞",
      title: "AI-Powered Customer Support Automation",
      description: "Calisto deployed a smart virtual assistant for Verta's customer support, automating common inquiries, tracking orders, and triaging support tickets to the right teams, all integrated with their existing helpdesk.",
      stats: [
        { value: "+80%", label: "Of support requests handled automatically", type: "increase" },
        { value: "-50%", label: "Average response time", type: "decrease" }
      ]
    },
    financial: {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      company: "Apex",
      logo: "||||",
      title: "Streamlining Internal Workflows & Reporting",
      description: "We built an automation system that connected Apex's internal tools, automating recurring tasks, monthly report generation, and internal approvals across departments.",
      stats: [
        { value: "4x", label: "Faster monthly reporting process", type: "increase" },
        { value: "-70%", label: "Manual task load for operations team", type: "decrease" }
      ]
    }
  };

  const currentProject = projects[activeTab as keyof typeof projects];

  return (
    <section className="py-24 bg-[#f5f6f8]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-white mb-8">
              <Command className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground font-medium">Projects</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground">
              Automation That Delivers <span className="font-instrument-serif italic text-muted-foreground font-normal">Real Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built custom AI automation solutions that drive measurable results.
            </p>
          </div>

          {/* Main Content - Layout matching reference exactly */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left - Category Tabs */}
            <div className="lg:w-52 flex-shrink-0">
              <div className="flex lg:flex-col gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-left transition-all duration-300 w-full ${
                        activeTab === category.id
                          ? 'bg-white shadow-sm border border-border/30'
                          : 'hover:bg-white/50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activeTab === category.id ? 'bg-gray-100' : 'bg-gray-50'
                      }`}>
                        <Icon className={`w-4 h-4 ${category.iconColor}`} />
                      </div>
                      <span className={`font-medium text-sm ${
                        activeTab === category.id ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {category.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right - Project Card */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl p-3 shadow-sm border border-border/20">
                <div className="flex flex-col lg:flex-row gap-0">
                  {/* Project Image */}
                  <div className="lg:w-[45%]">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img 
                        src={currentProject.image} 
                        alt={currentProject.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-[55%] p-6 lg:p-8 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="text-xl font-semibold text-foreground">{currentProject.company}</h3>
                      <span className="text-base font-bold text-muted-foreground/50 tracking-widest">{currentProject.logo}</span>
                    </div>

                    <h4 className="text-base font-semibold text-foreground mb-3">
                      {currentProject.title}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                      {currentProject.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-3 mt-auto">
                      {currentProject.stats.map((stat, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-4 p-3.5 rounded-xl bg-gray-50/80 border border-border/20"
                        >
                          <span className={`text-sm font-semibold px-3 py-1.5 rounded-lg ${
                            stat.type === 'increase'
                              ? 'text-primary bg-primary/10'
                              : 'text-emerald-600 bg-emerald-50'
                          }`}>
                            {stat.value}
                          </span>
                          <span className="text-sm text-muted-foreground">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;