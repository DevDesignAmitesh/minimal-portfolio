import { ArrowUpRight, Github, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ResolvedProject } from "@/src/data/projects";
import { repoPreviewImage } from "@/src/data/github";
import { isVideoFile } from "../ProjectVideo";

const actionClassName =
  "relative z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-border transition-colors duration-200 hover:bg-muted";

// A short, silent, looping preview for file videos; embeds (Drive/YouTube) play on the project page.
const CardMedia = ({ repo, title, video, poster }: ResolvedProject) => {
  if (video && isVideoFile(video)) {
    return (
      <video
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        aria-label={`${title} preview`}
      />
    );
  }

  return (
    <>
      <Image
        src={poster ?? repoPreviewImage(repo)}
        alt={`${title} preview`}
        fill
        sizes="(min-width: 768px) 360px, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      {video ? (
        <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground ring-1 ring-border">
          <Play className="h-3 w-3" aria-hidden="true" />
          Demo
        </span>
      ) : null}
    </>
  );
};

const ProjectCard = (project: ResolvedProject) => {
  const { repo, title, description, techTags, liveUrl, githubUrl } = project;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-border transition-shadow hover:ring-foreground/30">
      <div className="relative aspect-video overflow-hidden border-b border-border bg-muted">
        <CardMedia {...project} />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-medium text-foreground">
          {/* Stretched link: the whole card opens the project page. */}
          <Link href={`/projects/${repo}`} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <p className="mt-3 text-xs text-muted-foreground/90">
          {techTags.slice(0, 4).join(" · ")}
        </p>

        <div className="mt-auto flex gap-2 pt-4">
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={`${actionClassName} text-foreground`}>
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              Live
            </a>
          ) : null}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${actionClassName} text-foreground/80`}>
            <Github className="h-3 w-3" aria-hidden="true" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
