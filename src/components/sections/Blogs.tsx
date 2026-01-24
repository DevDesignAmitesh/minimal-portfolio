import { data } from "@/src/data/data";
import Link from "next/link";

const Blogs = () => {
  const { blogs } = data;

  if (blogs.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-medium text-foreground mb-8">Writing</h2>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="block group"
          >
            <article>
              <h3 className="text-lg text-foreground group-hover:text-muted-foreground transition-colors duration-200">
                {blog.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {blog.date} · {blog.readTime}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
