import Link from "next/link";
import { getProjects } from "@/src/data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  showAll?: boolean;
}

const Projects = async ({ showAll = false }: ProjectsProps) => {
  const allProjects = await getProjects();
  const projects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section className="py-12 md:py-16">
      <h2 className="text-2xl font-medium text-foreground md:text-3xl">
        Projects
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.repo} {...project} />
        ))}
      </div>

      {!showAll ? (
        <div className="mt-8">
          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-foreground/80 ring-1 ring-border transition-colors hover:bg-muted hover:text-foreground"
          >
            View all projects
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default Projects;
