export const data = {
  name: "Amitesh Singh",
  headline: "Backend engineer building real-time systems, and creating content about it",
  location: "Delhi, India",
  availability: "Founding Engineer at Macro Rides",
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
    updated: "Nov 2026",
  },

  // Tall card on the right. The lead's second half is emphasised; **text** in a paragraph is highlighted.
  bio: {
    lead: "I'm a backend engineer who ships real-time systems end to end,",
    leadEmphasis: "and I love creating content about what I build.",
    paragraphs: [
      "I'm the **founding engineer at Macro Rides**, an EV ride platform in Delhi. I shipped the product end to end and hired the team.",
      "I post skits and build-in-public demos on X, and I've built a **personal brand** there.",
      "Currently in **Super 30**, 100xSchool's 6-month engineering bootcamp.",
    ],
  },

  experience: [
    {
      company: "Macro Rides",
      role: "Founding Full Stack Engineer",
      period: "Oct 2024 – Present",
      summary: "First engineer at a Delhi EV ride platform. Shipped the product, one-push CI/CD, hired the team.",
    },
    {
      company: "My Design Minds",
      role: "Full Stack Engineer · Contract",
      period: "Apr 2025 – Nov 2025",
      summary: "Built an AI-driven platform for MSMEs from scratch and led a 2-person team.",
    },
  ],

  // Last section: tweets (skits, launches, hackathon demos). Paste any x.com status URL; order doesn't matter,
  // they're sorted newest first by tweet ID.
  tweets: [
    "https://x.com/Amitesh48256/status/2116147343615811719",
    "https://x.com/Amitesh48256/status/2114704842161840238",
    "https://x.com/Amitesh48256/status/2113986805141999690",
    "https://x.com/Amitesh48256/status/2113250944561652156",
    "https://x.com/Amitesh48256/status/2111814799546060980",
    "https://x.com/Amitesh48256/status/2107469984477986818",
    "https://x.com/bhargav16exdd/status/2066528027841122537",
    "https://x.com/Amitesh48256/status/2101726785243333057",
    "https://x.com/Amitesh48256/status/2090832087884714125",
    "https://x.com/Amitesh48256/status/2097669932276412711",
    "https://x.com/Amitesh48256/status/2089757991537115295",
    "https://x.com/Amitesh48256/status/2093023490630983863",
    "https://x.com/Amitesh48256/status/2091465513734189532",
    "https://x.com/Amitesh48256/status/2082910095235764403",
    "https://x.com/Amitesh48256/status/2062168207440626121",
  ],
};

export type Experience = (typeof data.experience)[number];
