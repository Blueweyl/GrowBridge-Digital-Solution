import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { useCalendly } from "../lib/useCalendly";

const navItems = [
  { label: "Home", href: "hero" },
  { label: "Skills", href: "skills" },
  { label: "Process", href: "process" },
  { label: "Projects", href: "projects" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Experience", href: "experience" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const bookCall = useCalendly();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 shrink-0">
          <ImageWithFallback
            src="/images/profile/logo-vf.png"
            alt="GrowBridge Digital Solutions logo"
            className="w-8 h-8 rounded-md object-cover"
          />
          <span className="font-display font-semibold text-sm hidden sm:inline">GrowBridge Digital Solutions</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={bookCall}
          className="hidden md:inline-flex text-sm font-semibold px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Book a Call
        </button>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/50 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
