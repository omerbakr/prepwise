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
  { role: "PhD Researcher", image: "/images/profile-3.avif" },
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

export const STATS = [
  {
    label: "10+ Hours Saved Weekly",
    text: "Reclaim a full workday each week with focused, AI-guided study sessions.",
    icon: "/icons/clock.svg",
  },
  {
    label: "3x Faster Learning",
    text: "Grasp complex concepts in a fraction of the time it takes to reread your notes.",
    icon: "/icons/acceleration.svg",
  },
  {
    label: "4.9/5 Student Rating",
    text: "Consistently rated “Excellent” by students across every field of study.",
    icon: "/icons/star.svg",
  },
  {
    label: "50K+ PDFs Decoded",
    text: "From textbooks to research papers, every page turned into clear, simple answers.",
    icon: "/icons/file.svg",
  },
  {
    label: "Free to Get Started",
    text: "Sign up free, upload your first PDF, and start learning in under a minute.",
    icon: "/icons/gift.svg",
  },
  {
    label: "Any Subject, Any Level",
    text: "From medicine to law to engineering, master any field straight from your notes.",
    icon: "/icons/folder.svg",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sofia Martinez",
    image: "/images/profile-1.avif",
    role: "Engineering Student",
    beforeText:
      "My study sessions felt aimless—I'd open a lecture PDF and have no idea where to start.",
    afterText:
      "The personalized study plan keeps me on track and I walk into every exam knowing I covered what matters.",
  },
  {
    name: "Amara Okafor",
    image: "/images/profile-2.avif",
    role: "Law Student",
    beforeText:
      "Case law PDFs were a nightmare—hundreds of pages and I never knew what was actually testable.",
    afterText:
      "Now I upload a ruling and get the key holdings, reasoning, and likely exam angles in minutes.",
  },
  {
    name: "Daniel Chen",
    image: "/images/profile-3.avif",
    role: "PhD Researcher",
    beforeText:
      "I was drowning in research papers, juggling four AI tools just to understand a single methodology.",
    afterText:
      "One place, one PDF, one conversation—Prepwise explains dense papers clearly and cites the exact page.",
  },
  {
    name: "Ruben Gouse",
    image: "/images/profile-4.avif",
    role: "Medical Student",
    beforeText:
      "I spent entire weekends rereading the same anatomy chapters and still froze up during exams.",
    afterText:
      "Prepwise turns my textbooks into quick Q&A sessions—I retain more in an hour than I used to in a day.",
  },
] as const;

export const FAQS = [
  {
    question: "What is Prepwise?",
    answer:
      "Prepwise is an AI tutor that turns your PDFs into personalized study sessions, explanations, and Q&A — so you learn faster without rereading.",
  },
  {
    question: "Which subjects does it support?",
    answer:
      "Any subject. Students use Prepwise for medicine, law, engineering, research papers, and everything in between.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. You can sign up for free and upload your first PDF in under a minute — no credit card required.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "Prepwise is built for learning from your own documents. It keeps context across your materials, cites the exact page, and builds a study plan around your deadlines.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings — no questions asked.",
  },
] as const;

export const SUBSCRIPTION_PLANS = [
  {
    tier: "Basic",
    price: "$9",
    description:
      "Start learning smarter with AI-powered PDF tutoring essentials.",
    features: [
      "Upload up to 10 PDFs per month",
      "AI-generated summaries and explanations",
      "Basic Q&A with your documents",
      "Email support",
    ],
  },
  {
    tier: "Pro",
    price: "$24",
    description:
      "Unlock the full Prepwise experience for serious learners and researchers.",
    features: [
      "Unlimited PDF uploads",
      "Advanced 1:1 AI tutoring sessions",
      "Personalized study plans and schedules",
      "Priority support",
    ],
  },
] as const;

export const FOOTER_LINKS = [
  { href: "#why-us", name: "Curriculum" },
  { href: "#pricing", name: "Pricing" },
  { href: "#reviews", name: "Testimonials" },
  { href: "#faq", name: "FAQs" },
  { href: "mailto:help@prepwise.com", name: "Contact us" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { href: "/terms", name: "Terms of Service" },
  { href: "/privacy", name: "Privacy Policy" },
] as const;

export const FOOTER_CONTACTS = [
  { email: "help@prepwise.com", caption: "For all your questions" },
  { email: "press@prepwise.com", caption: "For all media inquiries" },
] as const;

export const FOOTER_PHONE = {
  number: "+1 (464) 731-0235",
  hours: ["9am-8pm ET, Mon-Thu", "9am-6pm ET, Fri-Sun"],
} as const;

export const FOOTER_ADDRESS = [
  "1509 Capitol Street",
  "Suit #1092B, Kansas",
  "MS 10921",
] as const;

export const SOCIAL_LINKS = [
  {
    name: "YouTube",
    href: "https://youtube.com",
    path: "M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5C.1 8.4.1 12 .1 12s0 3.6.4 5.5a3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1c.4-1.9.4-5.5.4-5.5s0-3.6-.4-5.5ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z",
  },
  {
    name: "X",
    href: "https://x.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.86 5.86 0 0 0 1.38 2.13 5.86 5.86 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z",
  },
] as const;
