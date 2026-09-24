export const data = {
  name: "Amitesh Singh",
  headline: "Backend & real-time systems engineer, exploring AI agents",
  location: "Delhi, India",
  availability: "Open to full-time roles · Remote or on-site",

  about:
    "I build exchanges, real-time multiplayer systems, and AI agents. Previously founding engineer at Macro Rides.",

  email: "amiteshsingh252@gmail.com",

  socialLinks: {
    github: "https://github.com/DevDesignAmitesh",
    twitter: "https://x.com/Amitesh48256",
    linkedin: "https://www.linkedin.com/in/amitesh-singh-504b2b281/",
    medium: "https://medium.com/@amiteshsingh252",
  },

  resume: {
    downloadUrl: "/amitesh.pdf",
  },

  experience: [
    {
      company: "Macro Rides",
      companyUrl: "https://www.macrorides.in/",
      role: "Founding Full Stack Engineer",
      period: "Oct 2024 – Mar 2026",
      description:
        "Zone-based EV ride platform in Delhi: doorstep e-rickshaw pickups from metro stations at fixed fares. I was the first engineer and owned the product end to end across frontend, backend, and DevOps.",
      highlights: [
        "Architected and shipped the platform from zero to production: product, backend services, and infrastructure.",
        "Replaced a ~30-minute manual deploy with a one-push CI/CD pipeline.",
        "Ran technical hiring end to end: designed interviews, evaluated candidates, and onboarded 2–3 engineers.",
        "Owned production reliability and engineering timelines through the early-rider launch.",
      ],
    },
    {
      company: "My Design Minds",
      companyUrl: "",
      role: "Full Stack Engineer (Contract, part-time)",
      period: "Apr 2025 – Nov 2025",
      description:
        "Delhi-based platform helping MSMEs streamline design and manufacturing. I built its AI-driven product from the ground up, alongside my role at Macro Rides.",
      highlights: [
        "Led end-to-end development across frontend, backend, and DevOps for the MVP.",
        "Built the production AI inference flows that power the core product.",
        "Managed and mentored a 2-person engineering team.",
      ],
    },
  ],
};

export type Experience = (typeof data.experience)[number];
