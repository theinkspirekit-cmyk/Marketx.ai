import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Github, Mail } from "lucide-react";

const EnterpriseFooter = () => {
  const footerLinks = {
    solutions: [
      { name: "AI for Work", href: "/ai-for-work" },
      { name: "AI for Service", href: "/ai-for-service" },
      { name: "AI for Process", href: "/ai-for-process" },
      { name: "Platform Overview", href: "/platform" },
      { name: "Integrations", href: "/integrations" },
      { name: "Pricing", href: "/pricing" },
      { name: "Enterprise", href: "/enterprise" }
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Customer Stories", href: "/customer-stories" },
      { name: "Blog", href: "/blog" },
      { name: "Whitepapers", href: "/resources" },
      { name: "Webinars", href: "/resources" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Partners", href: "/partners" },
      { name: "Contact Us", href: "/contact" },
      { name: "Security", href: "/security" }
    ]
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="enterprise-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-white font-bold text-xl">AgentOrch</span>
            </div>
            <p className="text-white/50 text-sm mb-6 max-w-sm">Enterprise AI Agent Orchestration Platform. Deploy intelligent, autonomous AI agents at scale.</p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"><Github className="w-5 h-5" /></a>
            </div>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-500" />
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium">Subscribe</button>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}><Link to={link.href} className="text-white/50 text-sm hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}><Link to={link.href} className="text-white/50 text-sm hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}><Link to={link.href} className="text-white/50 text-sm hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2026 AgentOrch. All rights reserved.</p>
          <div className="flex gap-6 text-white/40 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnterpriseFooter;
