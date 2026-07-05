export interface ExperienceItem {
  title: string;
  date: string;
  description: string;
  iconColor: "primary" | "accent";
}

export const experience: ExperienceItem[] = [
  {
    title: "Automation & Systems VA",
    date: "2025 – Present",
    description:
      "Freelance AI Automation Specialist building end-to-end workflow solutions for businesses worldwide. Specializing in GoHighLevel, n8n, Zapier, and AI integration to eliminate manual processes and drive measurable growth.",
    iconColor: "accent",
  },
  {
    title: "Leadership Role — ROHM Philippines",
    date: "Previous",
    description:
      "Demonstrated leadership in a high-performance manufacturing environment. Developed operational efficiencies and team coordination skills that now inform my systematic approach to automation architecture.",
    iconColor: "primary",
  },
];

export interface ExpertTool {
  name: string;
  logo?: string;
}

export const expertTools: ExpertTool[] = [
  { name: "GoHighLevel" },
  { name: "Zapier", logo: "zapier.png" },
  { name: "Make.com", logo: "make.png" },
  { name: "n8n" },
  { name: "HubSpot" },
  { name: "OpenAI" },
  { name: "Google Gemini", logo: "gemini.png" },
  { name: "Notion", logo: "notion.png" },
  { name: "Airtable", logo: "airtable.png" },
  { name: "Asana" },
];
