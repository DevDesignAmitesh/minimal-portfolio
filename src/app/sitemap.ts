import type { MetadataRoute } from "next";
import { projects } from "@/src/data/projects";

const baseUrl = "https://www.amitesh.work";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/experience",
    "/projects",
    ...projects.map(({ repo }) => `/projects/${repo}`),
    "/blogs",
    "/resume",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
