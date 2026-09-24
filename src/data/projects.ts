import { getRepoDescriptions, repoUrl } from "./github";

// Descriptions and project pages come from GitHub (repo description + README).
// Only what GitHub doesn't know lives here. Order = display order; the homepage shows the first 3.
export interface PortfolioProject {
  repo: string; // GitHub repo name, also the URL slug: /projects/<repo>
  title: string;
  description: string; // fallback when the repo has no GitHub description
  techTags: string[];
  liveUrl?: string;
  // A file in /public (".mp4" / ".webm") or an embed URL (YouTube, Loom, Google Drive "/preview").
  video?: string;
  poster?: string;
}

export const projects: PortfolioProject[] = [
  {
    repo: "cex",
    title: "Centralized Exchange",
    description:
      "Crypto exchange with an in-memory order-matching engine, Redis-based async architecture, and real-time WebSocket market data.",
    techTags: ["TypeScript", "Bun", "Redis", "PostgreSQL", "WebSockets", "Docker"],
    liveUrl: "https://exchange.amitesh.work/",
  },
  {
    repo: "browser-agent",
    title: "Browser Agent",
    description:
      "Autonomous AI agent that completes natural-language tasks on live websites: plans, observes the page, clicks, types and scrolls.",
    techTags: ["TypeScript", "Playwright", "OpenAI API", "Express", "PostgreSQL"],
    video: "https://drive.google.com/file/d/1EU5WRId3RgwPABsvL_ipufQrlJtgI_yT/preview",
  },
  {
    repo: "quickduel",
    title: "QuickDuel",
    description:
      "Real-time multiplayer maths game with Redis matchmaking, BullMQ workers, and server-authoritative WebSocket state.",
    techTags: ["WebSockets", "Redis", "BullMQ", "PostgreSQL", "Next.js"],
    liveUrl: "https://games.amitesh.work/",
  },
  {
    repo: "ai-agent-cli",
    title: "AI Agent CLI",
    description:
      "A mini Claude Code: terminal coding agent with tool calling, approval gates, persistent memory, and a sandboxed workspace.",
    techTags: ["TypeScript", "Bun", "OpenAI API", "Gemini API", "E2B"],
  },
  {
    repo: "screensy",
    title: "Screensy",
    description:
      "Browser-based screen recorder compositing screen, face cam and wallpaper client-side. Video is never uploaded.",
    techTags: ["TypeScript", "Next.js", "Canvas API", "Express", "PostgreSQL"],
    liveUrl: "https://screensy.amitesh.work/",
  },
  {
    repo: "tui-typer",
    title: "tui-typer",
    description:
      "Multiplayer typing race in your terminal, published on npm with 1,000+ downloads.",
    techTags: ["TypeScript", "React", "Ink", "WebSockets"],
    liveUrl: "https://www.npmjs.com/package/tui-typer",
  },
  {
    repo: "sketchsprint",
    title: "SketchSprint",
    description:
      "Real-time multiplayer draw-and-guess game built on raw WebSockets. No Socket.IO, no game framework.",
    techTags: ["TypeScript", "WebSockets", "Canvas API", "Next.js", "Docker"],
    liveUrl: "https://skribbl.amitesh.work/",
  },
  {
    repo: "canvasdraft",
    title: "CanvasDraft",
    description: "Excalidraw-inspired whiteboard focused on a clean, responsive canvas editing experience.",
    techTags: ["TypeScript", "Next.js", "Canvas API"],
    liveUrl: "https://excalidraw.amitesh.work/",
  },
  {
    repo: "sphere-landing",
    title: "Sphere Events",
    description: "Motion-driven landing page for an event booking platform.",
    techTags: ["Next.js", "Tailwind CSS", "Motion"],
    liveUrl: "https://sphere-site.vercel.app/",
  },
];

export type ResolvedProject = PortfolioProject & { githubUrl: string };

export const getProjects = async (): Promise<ResolvedProject[]> => {
  const descriptions = await getRepoDescriptions();

  return projects.map((project) => ({
    ...project,
    description: descriptions.get(project.repo.toLowerCase()) ?? project.description,
    githubUrl: repoUrl(project.repo),
  }));
};

export const getProject = async (repo: string) =>
  (await getProjects()).find((project) => project.repo === repo);
