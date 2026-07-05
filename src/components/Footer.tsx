import { Mail, Globe, ExternalLink, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Reveal } from "./Reveal";

const navLinks = [
  { label: "Skills", href: "skills" },
  { label: "Achievements", href: "achievements" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
];

const services = ["CRM Automation", "AI Workflow Design", "Lead Nurture Systems", "GoHighLevel Setup"];

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <ImageWithFallback
                    src="/images/profile/logo-vf.png"
                    alt="GrowBridge Digital Solutions logo"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-display font-bold text-lg">GrowBridge Digital Solutions</p>
                    <p className="text-xs text-muted-foreground">AI Automation Agency</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Building reliable, scalable automation systems that save businesses time and
                  accelerate growth.
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Globe className="w-3 h-3" />
                  Available Worldwide · Remote
                </div>
              </div>

              <div>
                <p className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-4">
                  Navigation
                </p>
                <ul className="space-y-2.5">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-4">
                  Services
                </p>
                <ul className="space-y-2.5">
                  {services.map((s) => (
                    <li key={s} className="text-sm text-muted-foreground">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-4">
                  Connect
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:contact@growbridgedigital.com"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-secondary border border-border/50 group-hover:border-primary/30 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    contact@growbridgedigital.com
                  </a>
                  <button
                    onClick={() => scrollTo("projects")}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-secondary border border-border/50 group-hover:border-primary/30 transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    Portfolio
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} GrowBridge Digital Solutions. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Built with precision · Powered by automation</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
