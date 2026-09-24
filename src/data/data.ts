export const data = {
  name: "Amitesh Singh",
  headline: "Backend & real-time systems engineer, exploring AI agents",
  location: "Delhi, India",
  availability: "Open to full-time roles",
  email: "amiteshsingh252@gmail.com",

  socialLinks: {
    github: "https://github.com/DevDesignAmitesh",
    githubHandle: "@DevDesignAmitesh",
    twitter: "https://x.com/Amitesh48256",
    linkedin: "https://www.linkedin.com/in/amitesh-singh-504b2b281/",
    medium: "https://medium.com/@amiteshsingh252",
  },

  resume: {
    url: "/amitesh.pdf",
    updated: "Sep 2026",
  },

  // Tall card on the right. The lead's second half is emphasised.
  bio: {
    lead: "I'm a backend engineer who ships real-time systems end to end,",
    leadEmphasis: "now building autonomous AI agents.",
    paragraphs: [
      "Amitesh was the founding engineer at Macro Rides, a zone-based EV ride platform in Delhi, where he shipped the product end to end, cut deploys to a single push, and hired the engineering team.",
      "Alongside, he built an AI-driven platform for MSMEs at My Design Minds, leading a 2-person team. On the side: an exchange with an in-memory matching engine, real-time multiplayer games on raw WebSockets, and tui-typer, which has 1,000+ downloads on npm.",
      "He's currently in 100xSchool's Super 30, a live-in engineering cohort in Delhi, shipping AI agents through contests and hackathons.",
    ],
  },

  experience: [
    {
      company: "Macro Rides",
      role: "Founding Full Stack Engineer",
      period: "Oct 2024 – Mar 2026",
      summary: "First engineer at a Delhi EV ride platform. Shipped the product, one-push CI/CD, hired the team.",
    },
    {
      company: "My Design Minds",
      role: "Full Stack Engineer · Contract",
      period: "Apr 2025 – Nov 2025",
      summary: "Built an AI-driven platform for MSMEs from scratch and led a 2-person team.",
    },
  ],

  // Not a job: 100xSchool's residential cohort, so it gets its own card rather than a slot in experience.
  super30: {
    name: "Super 30",
    org: "100xSchool",
    orgUrl: "https://www.100xdevs.co.in/",
    period: "May 2026 – Present",
    tagline: "Residential engineering cohort · Delhi",
    description:
      "Harkirat Singh's 6-month, live-in program with limited seats: a hacker house where we ship AI projects through contests and hackathons.",
    builds: [
      { label: "Browser agent · AI Hackathon", href: "https://drive.google.com/file/d/1EU5WRId3RgwPABsvL_ipufQrlJtgI_yT/view" },
      { label: "RAG pipeline contest", href: "https://x.com/Amitesh48256/status/2093023490630983863" },
      { label: "Voice AI agent", href: "https://x.com/Amitesh48256/status/2097669932276412711" },
      { label: "Coding harness", href: "https://x.com/Amitesh48256/status/2062168207440626121" },
      { label: "Featured on Kirat's live stream", href: "https://x.com/Amitesh48256/status/2101726785243333057" },
    ],
  },

  // Last section: tweets (skits, launches, hackathon demos). Paste any x.com status URL; order doesn't matter,
  // they're sorted newest first by tweet ID.
  tweets: [
    "https://x.com/bhargav16exdd/status/2066528027841122537",
    "https://x.com/Amitesh48256/status/2101726785243333057",
    "https://x.com/Amitesh48256/status/2090832087884714125",
    "https://x.com/Amitesh48256/status/2097669932276412711",
    "https://x.com/Amitesh48256/status/2093023490630983863",
    "https://x.com/Amitesh48256/status/2091465513734189532",
    "https://x.com/Amitesh48256/status/2082910095235764403",
    "https://x.com/Amitesh48256/status/2062168207440626121",
  ],
};

export type Experience = (typeof data.experience)[number];
