export const NAV_LINKS = [
  { href: "#why-us", name: "Why us" },
  { href: "#reviews", name: "Reviews" },
  { href: "#pricing", name: "Pricing" },
  { href: "#faq", name: "FAQs" },
] as const;

export const PAIN_POINTS = [
  {
    id: "rereading",
    icon: "/icons/clock.svg",
    text: "Wasting hours rereading the same pages without actually retaining anything.",
  },
  {
    id: "vague-answers",
    icon: "/icons/question-mark.svg",
    text: "Asking AI questions about your material and getting vague, unhelpful answers.",
  },
  {
    id: "stuck",
    icon: "/icons/meh.svg",
    text: "Feeling stuck because you don't know the right questions to ask.",
  },
  {
    id: "motivation",
    icon: "/icons/meh.svg",
    text: "Losing motivation when study sessions feel aimless and unproductive.",
  },
  {
    id: "tool-juggling",
    icon: "/icons/angry.svg",
    text: "Getting frustrated copying text between AI tools just to make sense of a PDF.",
  },
  {
    id: "prompt-rewriting",
    icon: "/icons/keyboard.svg",
    text: "Rewriting the same prompts over and over, never getting the depth you need.",
  },
] as const;

export const TARGET_DATE = new Date("2026-08-01T00:00:00Z"); // UTC

export const PROMPT_PHRASES = [
  "Pls help.",
  "Teach me this PDF.",
  "Make no mistakes.",
  "Explain this like I’m 5.",
] as const;

export const PROFILES = [
  { role: "Medical Student", image: "/images/profile-1.avif" },
  { role: "Law Student", image: "/images/profile-2.avif" },
  { role: "PhD Researcher", image: "/images/GvIIYiCvs1fSYrsqT9kkYqRv4Y.avif" },
] as const;

export const KEY_FEATURES = [
  {
    label: "STUDY PLANNER",
    text: "Personalized study schedules built around your deadlines, exams, and goals.",
    icon: "/icons/calendar.svg",
  },
  {
    label: "ANY SUBJECT",
    text: "From medicine to law to engineering, master any field straight from your PDFs.",
    icon: "/icons/case.svg",
  },
  {
    label: "1:1 AI TUTORING",
    text: "Ask questions, get clear explanations, and learn like you have a private tutor.",
    icon: "/icons/pair.svg",
  },
] as const;
