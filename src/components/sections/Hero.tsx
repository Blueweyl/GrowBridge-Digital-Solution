import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { ImageWithFallback } from "../ImageWithFallback";
import { BioModal } from "../BioModal";

function DataStreamParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40 animate-data-stream"
          style={{
            top: `${15 + i * 14}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [bioOpen, setBioOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
      <DataStreamParticles />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <Reveal direction="scale" delay={0}>
          <div className="mb-6">
            <ImageWithFallback
              src="/images/profile/logo-vf.png"
              alt="GrowBridge Digital Solutions logo"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto animate-float rounded-full object-cover drop-shadow-[0_0_15px_rgba(14,165,233,0.4)]"
            />
          </div>
        </Reveal>

        <Reveal direction="blur" delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            AI Automation Agency
          </div>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6 font-display">
            Save Time, Reduce Costs,{" "}
            <span className="gradient-text">and Scale Faster</span> with AI-Powered Workflows.
          </h1>
        </Reveal>

        <Reveal direction="blur" delay={350}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            <button
              onClick={() => setBioOpen(true)}
              className="text-foreground font-semibold hover:text-primary transition-colors cursor-pointer underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
            >
              GrowBridge Digital Solutions
            </button>{" "}
            | AI Automation Agency & GoHighLevel Experts. We build reliable, scalable systems that
            let your team focus on growth.
          </p>
        </Reveal>

        <Reveal direction="up" delay={500}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@growbridgedigital.com"
              className="inline-flex items-center justify-center text-base px-8 py-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              Book Your Free Automation Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center text-base px-8 py-6 rounded-xl border border-border hover:border-primary/60 hover:bg-primary/5 transition-colors font-semibold"
            >
              View Our Work
            </a>
          </div>
        </Reveal>
      </div>

      <BioModal open={bioOpen} onClose={() => setBioOpen(false)} />
    </section>
  );
}
