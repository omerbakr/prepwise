export const NAV_LINKS = [
  { href: "#why-us", name: "Why us" },
  { href: "#reviews", name: "Reviews" },
  { href: "#pricing", name: "Pricing" },
  { href: "#faq", name: "FAQs" },
] as const;

export const PAIN_POINTS = [
  {
    icon: "AlarmClockPlus",
    text: 'Spending hours trying to "trick" the AI into giving you what you want.',
  },
  {
    icon: "CircleHelp",
    text: "Your AI-generated content sounds robotic and lacks strategic depth.",
  },
  {
    icon: "Meh",
    text: "Worrying that your skills are becoming obsolete in the age of AI.",
  },
  {
    icon: "Frown",
    text: "Do you have a growing fear of being left behind?",
  },
  {
    icon: "Sparkles",
    text: "Are you overwhelmed by the sheer number of AI tools?",
  },
  {
    icon: "MonitorSmartphone",
    text: "Do you waste hours rewriting and tweaking prompts?",
  },
] as const;

export const TARGET_DATE = new Date("2026-08-01T00:00:00Z"); // UTC

export const PROMPT_PHRASES = [
  "Pls help.",
  "Teach me this PDF.",
  "Make no mistakes.",
  "Explain this like I’m 5.",
] as const;
