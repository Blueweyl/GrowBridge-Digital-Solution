import { TrendingUp, Zap, Gauge, CalendarCheck } from "lucide-react";
import { stats } from "../../data/stats";
import { Reveal } from "../Reveal";

const icons = [TrendingUp, Zap, Gauge, CalendarCheck];

export function Achievements() {
  return (
    <section id="achievements" className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={s.label} direction="up" delay={i * 100}>
              <div className="bento-card group relative overflow-hidden h-full">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <div className="text-3xl font-display font-bold gradient-text mb-2">{s.stat}</div>
                <div className="text-sm font-semibold mb-1">{s.label}</div>
                <div className="text-xs text-muted-foreground">{s.detail}</div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
