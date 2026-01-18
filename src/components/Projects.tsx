import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { BarChart3, Brush, Heart, ShoppingCart, DollarSign, Command } from "lucide-react";

const Projects = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const [activeTab, setActiveTab] = useState("sales");

  const categories = [
    { id: "sales", name: "Sales", icon: BarChart3 },
    { id: "creative", name: "Creative", icon: Brush },
    { id: "healthcare", name: "Healthcare", icon: Heart },
    { id: "ecommerce", name: "E-commerce", icon: ShoppingCart },
    { id: "financial", name: "Financial", icon: DollarSign },
  ];

  const projects = {
    sales: {
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=600&fit=crop",
      company: "Orbit CRM",
      logo: "IPSUM",
      title: "Automating Lead Qualification & Follow-up",
      description: "Calisto automated the generation of onboarding documents, personalized care plans, and internal communication, ensuring speed, accuracy, and HIPAA compliance.",
      stats: [
        { value: "-60%", label: "Time spent on admin paperwork" },
        { value: "+90%", label: "Improvement in process accuracy" }
      ]
    },
    creative: {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      company: "Lumora Studio",
      logo: "LOGO",
      title: "Streamlining Creative Task Management",
      description: "We built a custom task automation system that connected client request forms with Lumora's ClickUp boards, automatically assigning tasks to the right team members based on project type.",
      stats: [
        { value: "3x", label: "Faster task turnaround" },
        { value: "+75%", label: "Team productivity improvement" }
      ]
    },
    healthcare: {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      company: "Nova Health",
      logo: "///",
      title: "Intelligent Document Generation & Routing",
      description: "Calisto implemented an AI-driven workflow to automatically qualify inbound leads, send personalized follow-up emails, and sync data with Orbit's CRM, cutting manual effort and improving response time.",
      stats: [
        { value: "+65%", label: "Faster lead response time" },
        { value: "-40%", label: "Reduction in manual data entry" }
      ]
    },
    ecommerce: {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      company: "Verta",
      logo: "∞",
      title: "AI-Powered Customer Support Automation",
      description: "Calisto deployed a smart virtual assistant for Verta's customer support, automating common inquiries, tracking orders, and triaging support tickets to the right teams, all integrated with their existing helpdesk.",
      stats: [
        { value: "+80%", label: "Of support requests handled automatically" },
        { value: "-50%", label: "Average response time" }
      ]
    },
    financial: {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      company: "Apex",
      logo: "||||",
      title: "Streamlining Internal Workflows & Reporting",
      description: "We built an automation system that connected Apex's internal tools, automating recurring tasks, monthly report generation, and internal approvals across departments.",
      stats: [
        { value: "4x", label: "Faster monthly reporting process" },
        { value: "-70%", label: "Manual task load for operations team" }
      ]
    }
  };

  const currentProject = projects[activeTab as keyof typeof projects];

  return (
    <section className="py-24 bg-gray-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 scroll-animate ${headerInView ? 'animate-reveal-up' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white mb-8">
              <Command className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground font-medium">Projects</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground">
              Automation That Delivers <span className="text-muted-foreground font-normal">Real Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built custom AI automation solutions that drive measurable results.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left - Category Tabs */}
            <div className="lg:w-48 flex-shrink-0">
              <div className="flex lg:flex-col gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                        activeTab === category.id
                          ? 'liquid-glass-container text-foreground'
                          : 'hover:bg-gray-100/50 text-muted-foreground'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right - Project Card */}
            <div className="flex-1">
              <div className="liquid-glass-container p-2 rounded-3xl">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img 
                        src={currentProject.image} 
                        alt={currentProject.company}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-1/2 p-4 lg:p-6 flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-foreground">{currentProject.company}</h3>
                        <span className="text-lg font-bold text-muted-foreground tracking-wider">{currentProject.logo}</span>
                      </div>

                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {currentProject.title}
                      </h4>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {currentProject.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="space-y-3">
                      {currentProject.stats.map((stat, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-4 p-3 rounded-xl bg-gray-50/80"
                        >
                          <span className={`text-sm font-semibold px-2 py-1 rounded-lg ${
                            stat.value.startsWith('+') || stat.value.includes('x')
                              ? 'text-primary bg-primary/10'
                              : 'text-green-600 bg-green-50'
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
