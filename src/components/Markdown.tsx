import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  content: string;
  linkBase: string;
  imageBase: string;
}

const resolveUrl = (src: string | undefined, base: string) => {
  if (!src || src.startsWith("#")) return src;
  try {
    return new URL(src, base).toString();
  } catch {
    return src;
  }
};

// Renders a GitHub README. Raw HTML is skipped (it's untrusted), and relative
// links/images are resolved against the repo so they don't point at this site.
const Markdown = ({ content, linkBase, imageBase }: MarkdownProps) => (
  <div className="prose prose-themed max-w-none prose-headings:font-medium prose-a:underline-offset-4 prose-img:rounded-lg prose-pre:ring-1 prose-pre:ring-border">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      skipHtml
      components={{
        a: ({ href, children }) => {
          const url = resolveUrl(href, linkBase);
          const external = !url?.startsWith("#");
          return (
            <a href={url} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              {children}
            </a>
          );
        },
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={resolveUrl(typeof src === "string" ? src : undefined, imageBase)}
            alt={alt ?? ""}
            loading="lazy"
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default Markdown;
