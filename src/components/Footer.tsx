import { Linkedin, Mail, ExternalLink } from "lucide-react";
import logo from "@/assets/energy-of-now-logo.png";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why Me", href: "#why-me" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-12 grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <img src={logo} alt="Energy of Now" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Transforming knowledge into intelligent AI agents that understand your business.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Partner */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="mailto:damien@energyofnow.com"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://multipleai.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Partner: MultipleAI
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Energy of Now. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Bespoke AI Applications • Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
