import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { Reveal } from "../Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const animating = useRef(false);

  const go = useCallback((delta: number) => {
    if (animating.current) return;
    animating.current = true;
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
    setTimeout(() => {
      animating.current = false;
    }, 500);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-accent/3 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Reveal direction="blur" className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="bento-card glow-border p-8 sm:p-12 text-center relative overflow-hidden">
            <Quote className="w-12 h-12 text-primary/10 mx-auto mb-6" />
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p
              key={index}
              className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 max-w-3xl mx-auto animate-fade-in italic"
            >
              "{current.quote}"
            </p>
            <div key={`author-${index}`} className="animate-fade-in">
              <p className="font-display font-bold text-lg">{current.name}</p>
              <p className="text-sm text-muted-foreground">{current.role}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="p-2 rounded-full bg-secondary border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (animating.current) return;
                    animating.current = true;
                    setIndex(i);
                    setTimeout(() => {
                      animating.current = false;
                    }, 500);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 h-2.5 bg-primary shadow-[0_0_10px_hsl(199_89%_48%/0.4)]"
                      : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="p-2 rounded-full bg-secondary border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
