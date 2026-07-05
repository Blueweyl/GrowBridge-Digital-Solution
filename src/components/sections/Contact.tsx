import { Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { useCalendly } from "../../lib/useCalendly";

export function Contact() {
  const bookCall = useCalendly();

  return (
    <section className="px-6 py-24 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto">
        <div
          className="relative rounded-2xl border border-primary/20 p-10 sm:p-16 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(220 18% 8%) 0%, hsl(199 89% 48% / 0.08) 50%, hsl(220 18% 8%) 100%)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/8 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[150px] bg-accent/5 rounded-full blur-[80px]" />
          </div>
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(hsl(199 89% 48%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 48%) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <Reveal direction="scale" className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Limited Availability
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight font-display">
              Ready to <span className="gradient-text">Automate</span> Your Business?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a free 30-minute automation audit. We'll show you exactly which workflows to
              automate first for maximum ROI — no obligation, just actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={bookCall}
                className="inline-flex items-center justify-center text-lg px-10 py-7 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
              >
                Book Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <a
                href="mailto:contact@growbridgedigital.com"
                className="inline-flex items-center justify-center text-base px-8 py-7 rounded-xl border border-border hover:border-primary/60 hover:bg-primary/5 transition-colors font-semibold"
              >
                Or Email Us Directly
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              ✓ No commitment &nbsp;·&nbsp; ✓ 100% free &nbsp;·&nbsp; ✓ Actionable roadmap included
            </p>
          </Reveal>
          <div className="absolute inset-0 rounded-2xl border border-primary/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
