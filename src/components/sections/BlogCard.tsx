import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/src/data/blogs";

const BlogCard = ({
  title,
  description,
  publishedAt,
  readTime,
  url,
  imageUrl,
}: BlogPost) => {
  return (
    <article className="group py-5 md:py-6">
      <div className="grid gap-5 md:grid-cols-[168px_1fr] md:items-start">
        <div className="aspect-[16/9] overflow-hidden rounded-md bg-muted md:aspect-[4/3]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt=""
              width={900}
              height={600}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          ) : null}
        </div>

        <div className="min-w-0">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-medium leading-snug text-foreground">
              {title}
            </h3>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 shrink-0 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`Open ${title} on Medium`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            {publishedAt ? <span>{publishedAt}</span> : null}
            {publishedAt && readTime ? <span aria-hidden="true">/</span> : null}
            {readTime ? <span>{readTime}</span> : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
