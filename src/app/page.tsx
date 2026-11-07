import { FileText, Github } from "lucide-react";
import BioCard from "../components/bento/BioCard";
import BlogsCard from "../components/bento/BlogsCard";
import Card, { CardHeader } from "../components/bento/Card";
import { ContactCard, SocialTiles } from "../components/bento/ContactRow";
import ExperienceCard from "../components/bento/ExperienceCard";
import HeroCard from "../components/bento/HeroCard";
import { FeaturedProjectCard, ProjectsListCard } from "../components/bento/ProjectCards";
import SiteFooter from "../components/bento/SiteFooter";
import ContentSection from "../components/bento/ContentSection";
import { getHomepageBlogs, getMediumBlogs } from "../data/blogs";
import { data } from "../data/data";
import { getProjects } from "../data/projects";
import { getContentHighlights } from "../data/tweets";

export const revalidate = 21600;

// Grid (lg, 3 columns), in DOM order so auto-placement builds the bento:
//   hero (2) | bio (tall)          featured (2)        | projects list (tall)
//   github | resume | ↑            experience | blogs  | ↑
//   content (3)                    contact (2) | linkedin + x
// Tweets sit high on purpose: the content work is part of the pitch, not an afterthought.
export default async function Page() {
  const [projects, blogs, highlights] = await Promise.all([getProjects(), getMediumBlogs(), getContentHighlights(4)]);
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const blogCovers = getHomepageBlogs(blogs, 3);

  return (
    <>
    <main className="mx-auto grid max-w-[1192px] grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:py-8 lg:grid-cols-3 lg:gap-6 xl:px-0">
      <HeroCard index={0} className="sm:col-span-2" />
      <BioCard index={1} className="sm:col-span-2 lg:col-span-1 lg:row-span-2" />

      <Card index={2} href={data.socialLinks.github}>
        <CardHeader icon={<Github className="h-5 w-5" />} title="This is my GitHub" subtitle={data.socialLinks.githubHandle} />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Exchanges, real-time games, and AI agents. READMEs with architecture for each.
        </p>
      </Card>
      <Card index={3} href={data.resume.url}>
        <CardHeader icon={<FileText className="h-5 w-5" />} title="This is my Resume" subtitle={`PDF · updated ${data.resume.updated}`} />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          One page: founding engineer, backend and real-time systems, AI agents.
        </p>
      </Card>

      <ContentSection index={4} highlights={highlights} className="sm:col-span-2 lg:col-span-3" />

      {featured ? <FeaturedProjectCard index={5} project={featured} className="sm:col-span-2" /> : null}
      <ProjectsListCard index={6} projects={projects} className="sm:col-span-2 lg:col-span-1 lg:row-span-2" />
      <ExperienceCard index={7} />
      <BlogsCard index={8} blogs={blogCovers} />

      <ContactCard index={9} className="sm:col-span-2" />
      <SocialTiles index={10} className="sm:col-span-2 lg:col-span-1" />

      <footer className="pt-2 pb-4 text-center text-xs leading-relaxed text-subtle sm:col-span-2 lg:col-span-3">
        Bento layout lovingly borrowed from{" "}
        <a
          href="https://anshmehra.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Ansh Mehra
        </a>
        . I handled the WebSockets, he&apos;d already handled the aesthetics. Thanks, Ansh.
      </footer>
    </main>
    <SiteFooter />
    </>
  );
}
