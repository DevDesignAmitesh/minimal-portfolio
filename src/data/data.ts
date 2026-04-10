export const data = {
  name: "Amitesh Singh",
  title: "Full-Stack Developer",

  tagline:
    "I am a full-stack developer who loves working with motivated teams and building systems from first principles before scaling them.",

  about:
    "I focus on building reliable, scalable systems across the stack. I value clarity over cleverness, and simplicity over complexity. When I'm not writing code, I'm probably reading about distributed systems, thinking about product design, or taking long walks.",

  socialLinks: {
    github: "https://github.com/devDesignAmitesh/",
    twitter: "https://x.com/Amitesh48256",
    linkedin: "https://www.linkedin.com/in/amitesh-singh-504b2b281/",
    email: "mailto:amiteshsingh252@gmail.com",
  },

  techStack: [
    "TypeScript",
    "Bun",
    "Next.js",
    "Tailwind CSS",
    "WebSockets",
    "Docker",
    "Redis",
    "AWS",
    "Postgres",
  ],

  resume: {
    imageUrl: "/resume.jpg",
    downloadUrl: "/resume.pdf",
  },

  experience: [
    {
      company: "Macro Rides",
      role: "Founding Full Stack Engineer",
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
      name: "QuickDuel",
      description:
        "Built a realtime multiplayer maths game where two users can connect, send friend requests, and compete live in quick calculation rounds. Players race to solve as many problems as possible within one minute, with synchronized gameplay, scoring, and matchmaking across the platform.",
      link: "https://games.amitesh.work/",
      techStack: [
        "TypeScript",
        "Bun",
        "Next.js",
        "Tailwind CSS",
        "WebSockets",
        "Docker",
        "Redis",
        "AWS",
        "Postgres",
        "CI/CD",
        "Nginx",
      ],
    },
    {
      name: "SketchSprint",
      description:
        "Developed an interactive multiplayer game where players draw prompts and compete by guessing words in real time. Implementing core gameplay mechanics, scoring logic, and a responsive UI using a modern, scalable frontend stack, with real-time state synchronization.",
      link: "https://skribbl.amitesh.work/",
      techStack: [
        "TypeScript",
        "Bun",
        "Next.js",
        "Tailwind CSS",
        "WebSockets",
        "Docker",
        "AWS",
        "CI/CD",
        "Nginx",
      ],
    },
    {
      name: "CanvasDraft",
      description:
        "Built the UI for a whiteboarding platform inspired by Excalidraw, focused on a clean drawing experience and responsive interactions. The project centers on frontend polish, layout, and canvas-based editing rather than multiplayer or backend collaboration features.",
      link: "https://excalidraw.amitesh.work/",
      techStack: [
        "TypeScript",
        "Bun",
        "Next.js",
        "Tailwind CSS",
        "Canvas API",
      ],
    },
  ],
};

export type Experience = (typeof data.experience)[number];
export type Project = (typeof data.projects)[number];
