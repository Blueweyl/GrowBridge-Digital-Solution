import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { projects, categories } from "../../data/projects";
import { ImageWithFallback } from "../ImageWithFallback";
import { Reveal } from "../Reveal";

export function Projects() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [focused, setFocused] = useState(false);

  const filtered = category === "All" ? projects : projects.filter((p) => p.category === category);
  const current = filtered[index];

  const selectCategory = useCallback((c: string) => {
    setCategory(c);
    setIndex(0);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? filtered.length - 1 : i - 1));
  }, [filtered.length]);

  const next = useCallback(() => {
    setIndex((i) => (i >= filtered.length - 1 ? 0 : i + 1));
  }, [filtered.length]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          prev();
          setFocused(true);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          next();
          setFocused(true);
        }
      }
    };
    const onClick = () => setFocused(false);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("click", onClick);
    };
  }, [prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev();
    }
    touchStart.current = null;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      tabIndex={-1}
      className={`px-6 py-24 transition-all duration-300 ${
        focused ? "ring-2 ring-primary/40 ring-offset-2 ring-offset-background rounded-xl" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <Reveal direction="up" className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {projects.length} automation workflows built across GoHighLevel, n8n, Zapier, and Make.com
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => selectCategory(c)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300 min-h-[44px] ${
                category === c
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_-3px_hsl(199_89%_48%/0.4)]"
                  : "bg-secondary text-secondary-foreground border-border/50 hover:border-primary/30"
              }`}
            >
              {c}
              {c !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({projects.filter((p) => p.category === c).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {current && (
          <div className="relative px-8 sm:px-12" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <button
              onClick={prev}
              aria-label="Previous project"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-secondary/80 backdrop-blur border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-secondary/80 backdrop-blur border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div key={current.title} className="bento-card glow-border-hover mx-auto animate-fade-in">
              <div className="flex flex-col lg:flex-row gap-6">
                <div
                  className="relative rounded-lg overflow-hidden border border-border/50 cursor-pointer group/img lg:w-1/2 shrink-0"
                  onClick={() => setLightbox(`/images/projects/${current.image}`)}
                >
                  <ImageWithFallback
                    src={`/images/projects/${current.image}`}
                    alt={current.title}
                    className="w-full h-56 sm:h-64 lg:h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-sm font-medium text-foreground">Click to expand</span>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight">{current.title}</h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                  </div>

                  <div className="space-y-3 flex-1">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-destructive">
                        Problem
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">{current.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Solution
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">{current.solution}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Result
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">{current.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border/30">
                    {current.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 mt-6">
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">{index + 1}</span> / {filtered.length}
              </span>
              <div className="flex justify-center gap-1.5 flex-wrap max-w-md">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to project ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === index ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 group flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/90 backdrop-blur border border-border/60 hover:bg-destructive/20 hover:border-destructive/50 transition-all duration-300 min-h-[44px]"
          >
            <X className="w-5 h-5 text-foreground group-hover:text-destructive transition-colors" />
            <span className="text-sm font-medium text-foreground group-hover:text-destructive transition-colors hidden sm:inline">
              Close
            </span>
          </button>
          <img
            src={lightbox}
            alt="Project screenshot"
            className="max-w-full max-h-[85vh] rounded-xl border border-border/50 shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
