import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale" | "blur";

const variants: Record<Direction, { hidden: string; visible: string }> = {
  up: { hidden: "opacity-0 translate-y-10", visible: "opacity-100 translate-y-0" },
  left: { hidden: "opacity-0 -translate-x-10", visible: "opacity-100 translate-x-0" },
  right: { hidden: "opacity-0 translate-x-10", visible: "opacity-100 translate-x-0" },
  scale: { hidden: "opacity-0 scale-90", visible: "opacity-100 scale-100" },
  blur: { hidden: "opacity-0 blur-sm translate-y-6", visible: "opacity-100 blur-0 translate-y-0" },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  circuit?: boolean;
}

export function Reveal({ children, className = "", delay = 0, direction = "up", circuit = false }: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variant = variants[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? variant.visible : variant.hidden} ${className} ${circuit ? "relative" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {circuit && (
        <div
          className={`absolute -left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/0 via-primary to-primary/0 transition-all duration-1000 ${
            visible ? "opacity-60 scale-y-100" : "opacity-0 scale-y-0"
          }`}
          style={{ transitionDelay: `${delay + 200}ms`, transformOrigin: "top" }}
        />
      )}
      {children}
    </div>
  );
}
