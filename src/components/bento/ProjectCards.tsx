import { Github } from "lucide-react";
import Image from "next/image";
import type { ResolvedProject } from "@/src/data/projects";
import Card from "./Card";

const isVideoFile = (src: string) => /\.(mp4|webm)(\?.*)?$/i.test(src);

export const FeaturedProjectCard = ({
  project,
  index,
  className,
}: {
  project: ResolvedProject;
  index: number;
  className?: string;
}) => {
  const { title, description, image, video, liveUrl, githubUrl, highlight, techTags } = project;

  // Wide card: the pitch on the left, the product on the right (stacked on small screens).
  return (
    <Card index={index} className={`grid items-center gap-6 sm:grid-cols-[1fr_1.15fr] ${className}`}>
      <div className="flex h-full flex-col">
        <p className="text-sm text-subtle">Featured project</p>
        <h2 className="mt-1 text-2xl leading-tight tracking-[-0.03em] text-foreground">{title}</h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        {highlight ? (
          <p className="mt-4 flex items-start gap-2 text-sm text-foreground">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
            {highlight}
          </p>
        ) : null}
        <p className="mt-2 text-xs text-subtle">{techTags.slice(0, 3).join(", ")}</p>

        <div className="mt-5 flex gap-2 sm:mt-auto sm:pt-5">
          <a
            href={liveUrl ?? githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-[10px] bg-primary py-2 text-center text-sm font-bold text-primary-foreground transition-opacity hover:opacity-85"
          >
            Try {title}
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-10 items-center justify-center rounded-[10px] bg-pill text-foreground transition-opacity hover:opacity-80"
            aria-label={`${title} source code`}
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-rose-200 via-orange-100 to-violet-200 p-3 dark:from-rose-300/80 dark:via-orange-200/70 dark:to-violet-300/80">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-black shadow-lg">
          {video && isVideoFile(video) ? (
            <video
              src={video}
              poster={image}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              aria-label={`${title} demo`}
            />
          ) : (
            <Image src={image} alt={`${title} screenshot`} fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover object-top" />
          )}
        </div>
      </div>
    </Card>
  );
};

export const ProjectsListCard = ({
  projects,
  index,
  className,
}: {
  projects: ResolvedProject[];
  index: number;
  className?: string;
}) => (
  <Card index={index} dashed className={`flex flex-col ${className}`}>
    <h2 className="text-lg leading-snug text-foreground">Things I&apos;ve built</h2>
    <p className="text-sm text-muted-foreground">Open source, all of it.</p>

    {/* h-0 + grow lets the list fill whatever height the grid row gives it (scrolling if it runs
        out); justify-between spreads the items across that height on large screens. */}
    <ul className="no-scrollbar mt-4 flex max-h-[26rem] flex-col gap-2 overflow-y-auto lg:h-0 lg:max-h-none lg:grow lg:justify-between">
      {projects.map((project) => (
        <li key={project.repo}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 overflow-hidden rounded-[10px] bg-background transition-colors hover:bg-pill dark:bg-card"
          >
            <span className="relative h-16 w-[124px] shrink-0 bg-pill">
              <Image src={project.image} alt="" fill sizes="124px" className="object-cover object-top" />
            </span>
            <span className="min-w-0 py-2 pr-3">
              <span className="block truncate text-sm font-medium text-foreground">{project.title}</span>
              <span className="block truncate text-xs text-muted-foreground">
                {project.techTags.slice(0, 3).join(" · ")}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  </Card>
);
