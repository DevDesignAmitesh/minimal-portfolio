import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { data } from "../data/data";
import React from "react";

const BlogPost = ({ slug }: { slug: string }) => {
  const blog = data.blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-12">
        <p className="text-muted-foreground">Post not found.</p>
        <Link
          href="/"
          className="text-foreground hover:text-muted-foreground transition-colors duration-200 mt-4 inline-block"
        >
          ← Back home
        </Link>
      </div>
    );
  }

  // Simple markdown-style rendering for headers and paragraphs
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.JSX.Element[] = [];
    let currentParagraph: string[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ").trim();
        if (text) {
          elements.push(
            <p
              key={elements.length}
              className="text-foreground leading-relaxed mb-4"
            >
              {text}
            </p>,
          );
        }
        currentParagraph = [];
      }
    };

    lines.forEach((line) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        flushParagraph();
        elements.push(
          <h2
            key={elements.length}
            className="text-xl font-medium text-foreground mt-8 mb-4"
          >
            {trimmed.replace("## ", "")}
          </h2>,
        );
      } else if (trimmed.startsWith("# ")) {
        flushParagraph();
        elements.push(
          <h1
            key={elements.length}
            className="text-2xl font-medium text-foreground mt-8 mb-4"
          >
            {trimmed.replace("# ", "")}
          </h1>,
        );
      } else if (trimmed.match(/^\d+\.\s\*\*.+\*\*/)) {
        // Numbered list with bold
        flushParagraph();
        const listText = trimmed.replace(/^\d+\.\s/, "").replace(/\*\*/g, "");
        const [boldPart, ...rest] = listText.split(".");
        elements.push(
          <p
            key={elements.length}
            className="text-foreground leading-relaxed mb-2 pl-4"
          >
            <span className="font-medium">{boldPart}.</span>
            {rest.join(".")}
          </p>,
        );
      } else if (trimmed === "") {
        flushParagraph();
      } else {
        currentParagraph.push(trimmed);
      }
    });

    flushParagraph();
    return elements;
  };

  return (
    <article className="py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back</span>
      </Link>

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-2">
          {blog.title}
        </h1>
        <p className="text-muted-foreground">
          {blog.date} · {blog.readTime}
        </p>
      </header>

      <div className="prose-custom">{renderContent(blog.content)}</div>
    </article>
  );
};

export default BlogPost;
