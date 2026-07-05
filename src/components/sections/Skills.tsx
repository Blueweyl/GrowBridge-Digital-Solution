import { Workflow, Megaphone, Sparkles, ClipboardList } from "lucide-react";
import { skills } from "../../data/skills";
import { Reveal } from "../Reveal";

const icons = [Workflow, Megaphone, Sparkles, ClipboardList];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal direction="up" className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Expertise</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            What I <span className="gradient-text">Specialize In</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={skill.title} direction="up" delay={i * 100}>
                <div className="bento-card glow-border-hover transition-all h-full relative">
                  {skill.badge && (
                    <span className="absolute top-6 right-6 text-[11px] font-semibold px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/30">
                      {skill.badge}
                    </span>
                  )}
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
