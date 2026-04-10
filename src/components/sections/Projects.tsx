import { ArrowUpRight } from "lucide-react";
import { data } from "@/src/data/data";
import TechStackList from "../TechStackList";

const Projects = () => {
  const { projects } = data;

  if (projects.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-medium text-foreground mb-8">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <article key={index}>
            <div className="flex items-start gap-2">
              <h3 className="text-foreground font-medium">{project.name}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 shrink-0"
                  aria-label={`View ${project.name}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-1">
              {project.description}
            </p>
            <TechStackList items={project.techStack} className="mt-4" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
