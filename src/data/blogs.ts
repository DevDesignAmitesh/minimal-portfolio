export interface BlogPost {
  title: string;
  description: string;
  publishedAt: string;
  readTime?: string;
  url: string;
  imageUrl: string;
}

const mediumFeedUrls = [
  "https://medium.com/feed/@amiteshsingh252",
  "https://amitech.medium.com/feed",
];

const decodeHtml = (value: string) =>
  value
    .replaceAll("<![CDATA[", "")
    .replaceAll("]]>", "")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");

const stripHtml = (value: string) =>
  decodeHtml(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getTagValue = (item: string, tag: string) => {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return match ? decodeHtml(match[1]).trim() : "";
};

const getFirstImage = (content: string) => {
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? decodeHtml(match[1]) : "";
};

const formatDate = (value: string) => {
  if (!value) return "";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
};

const estimateReadTime = (text: string) => {
  const words = text.split(/\s+/).filter(Boolean).length;
  if (!words) return undefined;

  return `${Math.max(1, Math.ceil(words / 220))} min read`;
};

const parseMediumFeed = (xml: string): BlogPost[] => {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  return items
    .map((item) => {
      const title = getTagValue(item, "title");
      const url = getTagValue(item, "link");
      const rawContent =
        getTagValue(item, "content:encoded") || getTagValue(item, "description");
      const contentText = stripHtml(rawContent);
      const description = contentText.slice(0, 170).trim();

      return {
        title,
        description: description ? `${description}${contentText.length > 170 ? "..." : ""}` : "",
        publishedAt: formatDate(getTagValue(item, "pubDate")),
        readTime: estimateReadTime(contentText),
        url,
        imageUrl: getFirstImage(rawContent),
      };
    })
    .filter((blog) => blog.title && blog.url);
};

export const getMediumBlogs = async () => {
  for (const feedUrl of mediumFeedUrls) {
    try {
      const response = await fetch(feedUrl, {
        next: { revalidate: 60 * 60 * 6 },
      });

      if (!response.ok) {
        continue;
      }

      const blogs = parseMediumFeed(await response.text());

      if (blogs.length > 0) {
        return blogs;
      }
    } catch {
      continue;
    }
  }

  return [];
};
