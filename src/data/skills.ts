export interface Skill {
  title: string;
  tools: string[];
  description: string;
  badge?: string;
}

export const skills: Skill[] = [
  {
    title: "Automation & Integration",
    tools: ["Zapier", "Make.com", "n8n", "Google Apps Script"],
    description:
      "End-to-end workflow automation that eliminates repetitive tasks and connects your entire tech stack.",
  },
  {
    title: "CRM & Marketing",
    tools: ["GoHighLevel", "HubSpot", "Pipedrive"],
    description:
      "GoHighLevel Masterclass certified. Full-funnel CRM setup with automated nurture sequences.",
    badge: "Certified",
  },
  {
    title: "AI Productivity",
    tools: ["Microsoft Copilot", "Google Gemini AI", "OpenAI"],
    description:
      "Leveraging cutting-edge AI to build intelligent assistants and automate decision-making processes.",
  },
  {
    title: "Project Management",
    tools: ["Notion", "Airtable", "Monday.com", "Asana"],
    description:
      "Structured project systems with automated reporting, task assignment, and deadline tracking.",
  },
];
