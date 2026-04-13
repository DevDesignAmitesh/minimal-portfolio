import { ArrowUpRight, Github } from "lucide-react";
import TechStackList from "../TechStackList";

interface ProjectCardProps {
  title: string;
  description: string;
  techTags: string[];
  liveUrl: string;
  githubUrl: string;
}

const actionClassName =
  "inline-flex items-center justify-center gap-1.5 rounded-full border border-transparent px-3 py-1.5 text-sm font-medium";

const ProjectCard = ({
  title,
  description,
  techTags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <article className="group py-5 md:py-6">
      <div className="flex min-h-full flex-col gap-6 md:flex-row md:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-medium text-foreground">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>

          <TechStackList items={techTags} className="mt-5" />
        </div>

        <div className="flex shrink-0 flex-wrap items-end gap-2 md:max-w-[13rem] md:self-end md:justify-end">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${actionClassName} text-foreground hover:opacity-65`}
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${actionClassName} text-foreground/80 hover:text-foreground`}
          >
            <Github className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
