import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "@/src/components/Markdown";
import ProjectVideo from "@/src/components/ProjectVideo";
import TechStackList from "@/src/components/TechStackList";
import { getReadme, repoBlobBase, repoRawBase } from "@/src/data/github";
import { getProject, projects } from "@/src/data/projects";

export const revalidate = 21600;

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => projects.map(({ repo }) => ({ slug: repo }));

export const generateMetadata = async ({ params }: ProjectPageProps) => {
  const project = await getProject((await params).slug);
  return project ? { title: project.title, description: project.description } : {};
};

// The README's own "# Title" would repeat the page heading, so drop a leading H1.
const stripLeadingH1 = (markdown: string) => markdown.replace(/^\s*#\s[^\n]*\n/, "");

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject((await params).slug);
  if (!project) notFound();

  const { repo, title, description, techTags, liveUrl, githubUrl, video, poster } = project;
  const readme = await getReadme(repo);

  return (
    <article className="py-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        All projects
      </Link>

      <h1 className="mt-6 text-3xl font-medium text-foreground md:text-4xl">{title}</h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            Live
          </a>
        ) : null}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border transition-colors hover:bg-muted"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          Code
        </a>
      </div>

      <TechStackList items={techTags} className="mt-6" />

      {video ? (
        <div className="mt-8">
          <ProjectVideo title={title} video={video} poster={poster} />
        </div>
      ) : null}

      <div className="mt-10 border-t border-border pt-8">
        {readme ? (
          <Markdown content={stripLeadingH1(readme)} linkBase={repoBlobBase(repo)} imageBase={repoRawBase(repo)} />
        ) : (
          <p className="text-sm text-muted-foreground">
            Full write-up coming soon. See the{" "}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              repository on GitHub
            </a>
            .
          </p>
        )}
      </div>
    </article>
  );
}
