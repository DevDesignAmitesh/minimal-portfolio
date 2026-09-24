import type { BlogPost } from "@/src/data/blogs";
import { data } from "@/src/data/data";
import { MediumLogo } from "./BrandIcons";
import Card, { CardHeader } from "./Card";

const BlogsCard = ({ blogs, index, className }: { blogs: BlogPost[]; index: number; className?: string }) => (
  <Card index={index} className={`flex flex-col overflow-hidden ${className}`}>
    <a href={data.socialLinks.medium} target="_blank" rel="noopener noreferrer" className="hover:opacity-85">
      <CardHeader icon={<MediumLogo className="h-5 w-5" />} title="Read my blogs" subtitle="Medium" />
    </a>
    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
      I write about distributed systems, deploying to real servers, and building in public.
    </p>

    {/* Covers bleed off the right edge, like the reference's photo pair. */}
    <div className="no-scrollbar -mr-5 mt-5 flex gap-3 overflow-x-auto sm:-mr-6">
      {blogs.map((blog) => (
        <a
          key={blog.url}
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-[62%] shrink-0"
          title={blog.title}
        >
          <span className="block aspect-[5/4] overflow-hidden rounded-lg bg-pill">
            {blog.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={blog.imageUrl}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            ) : null}
          </span>
          <span className="mt-2 line-clamp-2 block text-xs text-muted-foreground group-hover:text-foreground">
            {blog.title}
          </span>
        </a>
      ))}
    </div>
  </Card>
);

export default BlogsCard;
