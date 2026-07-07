export interface PortfolioProject {
  title: string;
  description: string;
  techTags: string[];
  liveUrl: string;
  githubUrl: string;
  impact?: string;
}

export const featuredProjects: PortfolioProject[] = [
  {
    title: "Centralized Exchange",
    description:
      "Real-time exchange platform featuring a price-time priority matching engine, live order books, trade execution, and market data streaming.",
    techTags: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Docker"
    ],
    liveUrl: "https://exchange.amitesh.work/",
    githubUrl: "http://github.com/devDesignAmitesh/cex",
    impact:
      "Real-time matching and market streaming focused on low-latency order execution.",
  },
  {
    title: "Multiplayer Maths Games",
    description:
      "Real-time multiplayer math game with sub-100ms synchronized gameplay using WebSockets and Redis.",
    techTags: ["WebSockets", "Redis", "Next.js", "PostgreSQL"],
    liveUrl: "https://games.amitesh.work/",
    githubUrl: "https://github.com/devDesignAmitesh/games",
    impact: "Low-latency synchronized gameplay with sub-100ms round-trip sync.",
  },
  // {
  //   title: "DocQuery",
  //   description:
  //     "RAG-based PDF chat system enabling natural language queries over documents using vector search and LLMs.",
  //   techTags: ["RAG", "Vector DB", "OpenAI", "React"],
  //   liveUrl: "https://pdf-chat.amitesh.work/",
  //   githubUrl: "https://github.com/devDesignAmitesh/pdf-rag",
  // },
  {
    title: "Multiplayer Draw And Guess Game",
    description:
      "Real-time multiplayer draw-and-guess game with synchronized gameplay and interactive canvas rendering.",
    techTags: ["WebSockets", "Canvas API", "Next.js"],
    liveUrl: "https://skribbl.amitesh.work/",
    githubUrl: "https://github.com/DevDesignAmitesh/skribbl",
    impact: "Real-time synchronized gameplay with responsive canvas rendering.",
  },
];

export const allProjects: PortfolioProject[] = [
  ...featuredProjects,
  {
    title: "Terminal Based, Realtime Typing Game",
    description:
      "Terminal typing race game for creating rooms, sharing codes, and competing with live multiplayer progress updates.",
    techTags: ["TypeScript", "Ink", "WebSockets", "React"],
    liveUrl: "https://typer.amitesh.work/",
    githubUrl: "https://github.com/DevDesignAmitesh/tui-type-racing",
    impact: "Lightweight terminal-first multiplayer experience with live room sync.",
  },
  {
    title: "Event Booking Platform Landing Page",
    description:
      "Built the frontend for an event booking platform with polished interactions, responsive layouts, and motion-driven sections designed to make event discovery and booking feel smooth and modern.",
    techTags: ["Next.js", "Tailwind CSS", "Motion"],
    liveUrl: "https://sphere-site.vercel.app/",
    githubUrl: "https://github.com/DevDesignAmitesh/sphere-landing",
    impact: "High-quality, responsive marketing site focused on conversion and UX polish.",
  },
  {
    title: "Drawing Canvas",
    description:
      "Built the UI for a whiteboarding platform inspired by Excalidraw, focused on a clean drawing experience and responsive interactions. The project centers on frontend polish, layout, and canvas-based editing rather than multiplayer or backend collaboration features.",
    techTags: [
      "TypeScript",
      "Bun",
      "Next.js",
      "Tailwind CSS",
      "Canvas API",
    ],
    liveUrl: "https://excalidraw.amitesh.work/",
    githubUrl: "https://github.com/DevDesignAmitesh/excalidraw-clone-real",
    impact: "Canvas-focused UI delivering a clean, responsive drawing experience.",
  },
];
