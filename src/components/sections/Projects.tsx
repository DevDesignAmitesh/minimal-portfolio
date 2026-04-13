"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { allProjects, featuredProjects } from "@/src/data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";
  const showViewAllProjects = pathname !== "/projects";
  const projects = isProjectsPage ? allProjects : featuredProjects;

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-medium text-foreground md:text-3xl">
          Projects
        </h2>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Selected work focused on real-time systems and backend architecture
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {showViewAllProjects ? (
        <div className="mt-8">
          <Link
            href="/projects"
            className="inline-flex w-full text-center items-center justify-center rounded-full border border-transparent px-5 py-2.5 text-sm font-medium text-foreground/80"
          >
            View All Projects
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default Projects;
