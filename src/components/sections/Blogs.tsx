import Link from "next/link";
import { getMediumBlogs } from "@/src/data/blogs";
import BlogCard from "./BlogCard";

interface BlogsProps {
  showAll?: boolean;
}

const Blogs = async ({ showAll = false }: BlogsProps) => {
  const allBlogs = await getMediumBlogs();
  const blogs = showAll ? allBlogs : allBlogs.slice(0, 3);

  return (
    <section id="blogs" className="py-12 md:py-16">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-medium text-foreground md:text-3xl">
          Blogs
        </h2>
      </div>

      {blogs.length > 0 ? (
        <div className="mt-8 space-y-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.url + blog.title} {...blog} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-sm text-muted-foreground">
          No Medium posts found right now.
        </p>
      )}

      {!showAll && blogs.length > 0 ? (
        <div className="mt-8">
          <Link
            href="/blogs"
            className="inline-flex w-full items-center justify-center rounded-full border border-transparent px-5 py-2.5 text-center text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            View All Blogs
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default Blogs;
