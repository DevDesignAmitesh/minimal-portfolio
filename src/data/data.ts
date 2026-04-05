export const data = {
  name: "Amitesh Singh",
  title: "Full-Stack Developer",

  tagline:
    "I am a full-stack developer who loves working with motivated teams and building systems from first principles before scaling them.",

  about:
    "I focus on building reliable, scalable systems across the stack. I value clarity over cleverness, and simplicity over complexity. When I'm not writing code, I'm probably reading about distributed systems, thinking about product design, or taking long walks.",

  inspirations: [
    {
      name: "sargampoudel",
      url: "https://www.sarg.am/",
    },
    {
      name: "kshvbgde",
      url: "https://www.kshv.me/",
    },
  ],

  socialLinks: {
    github: "https://github.com/devDesignAmitesh/",
    twitter: "https://x.com/Amitesh48256",
    linkedin: "https://www.linkedin.com/in/amitesh-singh-504b2b281/",
    email: "mailto:amiteshsingh252@gmail.com",
  },

  resume: {
    imageUrl: "/resume.jpg",
    downloadUrl: "/resume.pdf",
  },

  experience: [
    {
      company: "Macro Rides",
      role: "Founding Engineer",
      period: "Oct 2024 – Mar 2026",
      description:
        "Joined as a Founding Engineer and played a key role in building the product from the ground up, owning frontend, backend, and DevOps initiatives. Led technical hiring efforts, conducted interviews, and managed project timelines while implementing a modern, scalable technology stack.",
    },
    {
      company: "My Design Minds",
      role: "Full Stack Developer",
      period: "Apr 2025 – Nov 2025",
      description:
        "Built an AI-driven platform from the ground up, leading end-to-end development across frontend, backend, and DevOps. Managed and mentored a two-member engineering team while implementing a modern, scalable technology stack.",
    },
  ],

  projects: [
    {
      name: "Multiplayer Draw & Guess Game",
      description:
        "Developed an interactive multiplayer game where players draw prompts and compete by guessing words in real time. Implementing core gameplay mechanics, scoring logic, and a responsive UI using a modern, scalable frontend stack, with real-time state synchronization.",
      link: "https://notskribbl.xyz/",
    },
    {
      name: "Multiplayer Brainstorming Platform",
      description:
        "Built a collaborative whiteboarding platform inspired by Excalidraw, enabling teams to brainstorm visually and efficiently. Developed the complete frontend with a strong focus on performance, scalability, and user experience. Currently extending the platform with real-time collaboration using WebSockets and an event-driven backend.",
      link: "https://excalidraw.amitesh.work/",
    },
  ],
};

export type Experience = (typeof data.experience)[number];
export type Project = (typeof data.projects)[number];
