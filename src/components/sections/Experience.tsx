import { Briefcase, Award } from "lucide-react";
import { experience, expertTools } from "../../data/experience";
import { ImageWithFallback } from "../ImageWithFallback";
import { Reveal } from "../Reveal";

const icons = [Award, Briefcase];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Reveal direction="up" className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Background</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </Reveal>

        <div className="space-y-6">
          {experience.map((item, i) => {
            const Icon = icons[item.iconColor === "accent" ? 0 : 1];
            const accentClass = item.iconColor === "accent" ? "text-accent" : "text-primary";
            return (
              <Reveal key={item.title} direction="left" delay={i * 150} circuit>
                <div className="bento-card flex gap-4">
                  <Icon className={`w-6 h-6 shrink-0 mt-1 ${accentClass}`} />
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <h3 className="font-display font-bold text-lg">{item.title}</h3>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal direction="up" delay={200} className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest">Tools I'm Expert In</p>
          <div className="flex flex-wrap justify-center gap-6">
            {expertTools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center gap-2 w-16">
                {tool.logo ? (
                  <ImageWithFallback
                    src={`/images/logos/${tool.logo}`}
                    alt={tool.name}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-secondary border border-border/50 flex items-center justify-center text-xs font-semibold">
                    {tool.name.slice(0, 2)}
                  </div>
                )}
                <span className="text-[11px] text-muted-foreground text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
