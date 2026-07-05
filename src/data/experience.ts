export interface ExperienceItem {
  title: string;
  date: string;
  description: string;
  iconColor: "primary" | "accent";
}

// TODO: replace with GrowBridge Digital Solutions' real milestones/dates.
export const experience: ExperienceItem[] = [
  {
    title: "Founded GrowBridge Digital Solutions",
    date: "2025 – Present",
    description:
      "Built as an AI automation agency delivering end-to-end workflow solutions for businesses worldwide. Specializing in GoHighLevel, n8n, Zapier, and AI integration to eliminate manual processes and drive measurable growth.",
    iconColor: "accent",
  },
  {
    title: "Expanded Client Roster",
    date: "Ongoing",
    description:
      "Grew from early pilot clients to a diverse portfolio spanning marketing agencies, SaaS startups, finance, and real estate — refining a systematic approach to automation architecture along the way.",
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
