export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  accent: "primary" | "accent";
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "I analyze your current workflows, identify bottlenecks, and map out every manual process that's costing you time and money.",
    accent: "primary",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "I design a custom automation blueprint tailored to your tech stack — selecting the right tools and building scalable logic flows.",
    accent: "primary",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description:
      "I build, test, and deploy your automations with error handling, fallback logic, and monitoring — production-ready from day one.",
    accent: "accent",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description:
      "I monitor performance, optimize bottlenecks, and scale your systems as your business grows — continuous improvement built in.",
    accent: "primary",
  },
];
