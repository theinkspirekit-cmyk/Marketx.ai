import { BookOpen, ArrowRight, Clock } from "lucide-react";

const Resources = () => {
  const articles = [
    {
      title: "Top 5 Business Tasks to Automate in 2025",
      excerpt: "Discover which repetitive tasks are costing you the most time and how AI automation can eliminate them completely.",
      readTime: "5 min read",
      category: "Automation Guide",
      link: "#",
    },
    {
      title: "How AI Automation Saves Agencies 10+ Hours Weekly",
      excerpt: "Real case studies from marketing agencies that transformed their workflow with intelligent automation solutions.",
      readTime: "7 min read",
      category: "Case Study",
      link: "#",
    },
    {
      title: "Lead Generation Automation: Complete Guide for Small Businesses",
      excerpt: "Step-by-step guide to setting up automated lead capture, qualification, and nurturing systems that work 24/7.",
      readTime: "10 min read",
      category: "Lead Gen",
      link: "#",
    },
    {
      title: "E-commerce Automation: From Inventory to Customer Service",
      excerpt: "Learn how online stores are scaling operations without hiring more staff through smart automation workflows.",
      readTime: "8 min read",
      category: "E-commerce",
      link: "#",
    },
    {
      title: "ROI Calculator: Is Business Automation Worth It?",
      excerpt: "Calculate your potential time and cost savings with our free automation ROI calculator and decision framework.",
      readTime: "4 min read",
      category: "ROI Analysis",
      link: "#",
    },
    {
      title: "Custom AI Workflows vs Pre-Built Automation Tools",
      excerpt: "Understanding when to use off-the-shelf solutions versus custom AI workflows tailored to your specific business needs.",
      readTime: "6 min read",
      category: "Strategy",
      link: "#",
    },
  ];

  return (
    <section id="resources" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Knowledge Center</span>
            <br />
            <span className="text-muted-foreground">Learn About Business Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore guides, case studies, and best practices for implementing AI automation in your business workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <article
              key={index}
              className="glass-card p-6 hover-glow transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {article.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
              </div>
              
              <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Article
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want personalized automation advice for your business?
          </p>
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary-ref"
          >
            Schedule Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
