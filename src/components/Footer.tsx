import { Mail, Linkedin } from "lucide-react";
import logo from "@/assets/markitx-logo.png";

const Footer = () => {
  return (
    <footer className="py-14 border-t border-white/10 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="MARKITX" className="h-6 w-auto" />
              <span className="font-bold tracking-[0.2em] text-foreground text-sm">MARKITX</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Building AI infrastructure for businesses.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:markitx.ai@gmail.com"
              className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              markitx.ai@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/dheekshit-datta/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/50 text-xs">© 2025 MARKITX</p>
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
