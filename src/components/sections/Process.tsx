import { Search, Blocks, Rocket, TrendingUp } from "lucide-react";
import { processSteps } from "../../data/services";
import { Reveal } from "../Reveal";

const icons = [Search, Blocks, Rocket, TrendingUp];

export function Process() {
  return (
    <section id="process" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal direction="up" className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">How I Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            My <span className="gradient-text">Process</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => {
            const Icon = icons[i % icons.length];
            const accentClass = step.accent === "accent" ? "text-accent" : "text-primary";
            return (
              <Reveal key={step.number} direction="up" delay={i * 120}>
                <div className="bento-card h-full relative overflow-hidden">
                  <span className={`text-5xl font-display font-bold opacity-10 absolute top-4 right-4 ${accentClass}`}>
                    {step.number}
                  </span>
                  <Icon className={`w-8 h-8 mb-4 ${accentClass}`} />
                  <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
