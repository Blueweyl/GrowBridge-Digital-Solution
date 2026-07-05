export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah K.",
    role: "CEO, Marketing Agency",
    quote:
      "Vincent transformed our entire operations. What used to take my team 20+ hours a week now runs on autopilot. Our revenue grew 40% in 3 months because we could finally focus on clients instead of admin work.",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Founder, SaaS Startup",
    quote:
      "The AI-powered lead scoring system Vincent built literally pays for itself every week. We went from chasing cold leads to closing warm ones — our conversion rate tripled.",
    rating: 5,
  },
  {
    name: "Elena D.",
    role: "Operations Director, Finance",
    quote:
      "We were drowning in manual data entry and invoice follow-ups. Vincent's automation suite eliminated 80% of our repetitive tasks. The ROI was immediate and measurable.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Real Estate Broker",
    quote:
      "The GoHighLevel CRM automation Vincent set up is a game-changer. Every lead gets instant follow-up, appointment reminders cut no-shows in half, and my team can handle 3x the volume.",
    rating: 5,
  },
];
