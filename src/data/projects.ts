import { data } from "./data";

export interface PortfolioProject {
  title: string;
  description: string;
  techTags: string[];
  liveUrl: string;
  githubUrl: string;
}

export const featuredProjects: PortfolioProject[] = [
  {
    title: "QuickDuel",
    description:
      "Real-time multiplayer math game with sub-100ms synchronized gameplay using WebSockets and Redis.",
    techTags: ["WebSockets", "Redis", "Next.js", "PostgreSQL"],
    liveUrl: "https://games.amitesh.work/",
    githubUrl: data.socialLinks.github,
  },
  {
    title: "DocQuery",
    description:
      "RAG-based PDF chat system enabling natural language queries over documents using vector search and LLMs.",
    techTags: ["RAG", "Vector DB", "OpenAI", "React"],
    liveUrl: "https://pdf-chat.amitesh.work/",
    githubUrl: data.socialLinks.github,
  },
  {
    title: "SketchSprint",
    description:
      "Real-time multiplayer draw-and-guess game with synchronized gameplay and interactive canvas rendering.",
    techTags: ["WebSockets", "Canvas API", "Next.js"],
    liveUrl: "https://skribbl.amitesh.work/",
    githubUrl: data.socialLinks.github,
  },
];

export const allProjects: PortfolioProject[] = [
  ...featuredProjects,
  {
    title: "Sphere Events",
    description:
      "Built the frontend for an event booking platform with polished interactions, responsive layouts, and motion-driven sections designed to make event discovery and booking feel smooth and modern.",
    techTags: ["Next.js", "Tailwind CSS", "Motion"],
    liveUrl: "https://sphere-site.vercel.app/",
    githubUrl: data.socialLinks.github,
  },
  {
    title: "CanvasDraft",
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
    githubUrl: data.socialLinks.github,
  },
];
