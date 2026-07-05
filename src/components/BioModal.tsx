import { X } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface BioModalProps {
  open: boolean;
  onClose: () => void;
}

export function BioModal({ open, onClose }: BioModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm px-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-sm w-full bento-card glow-border text-center animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <ImageWithFallback
          src="/images/profile/logo-vf.png"
          alt="GrowBridge Digital Solutions"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-primary/40"
        />

        <h3 className="font-display font-bold text-lg mb-1">GrowBridge Digital Solutions</h3>
        <p className="text-primary text-sm font-medium mb-4">AI Automation Agency & GoHighLevel Experts</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          We help businesses save time and scale faster by building AI-powered automation workflows.
          Specialized in GoHighLevel, n8n, Zapier, and Make.com — turning complex processes into
          seamless systems.
        </p>

        <div className="flex justify-center gap-3">
          <a
            href="mailto:contact@growbridgedigital.com"
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
