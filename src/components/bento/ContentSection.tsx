import { ArrowUpRight, Heart, MessageCircle, Sparkles, Video } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import type { ContentHighlights } from "@/src/data/tweets";
import { data } from "@/src/data/data";
import { XLogo } from "./BrandIcons";
import BentoTweet from "./BentoTweet";

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });
const twitterHandle = `@${data.socialLinks.twitter.split("/").pop()}`;

const Stat = ({ icon, value, label }: { icon: ReactNode; value: string; label: string }) => (
  <div className="flex items-center gap-3 rounded-bento bg-card px-4 py-3.5">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-pill text-foreground">
      {icon}
    </span>
    <div className="min-w-0">
      <p className="text-lg font-medium leading-tight tracking-tight text-foreground tabular-nums">{value}</p>
      <p className="truncate text-xs text-muted-foreground">{label}</p>
    </div>
  </div>
);

// Tweets are rendered on the server (react-tweet), so there's no X embed script or iframe.
const ContentSection = ({
  highlights,
  index,
  className = "",
}: {
  highlights: ContentHighlights;
  index: number;
  className?: string;
}) => {
  const { topTweets, posts, likes, replies } = highlights;

  return (
    <section
      className={`tweet-strip bento-reveal ${className}`}
      style={{ "--i": index } as CSSProperties}
      aria-labelledby="content-heading"
    >
      <div className="mb-4 px-1">
        <h2 id="content-heading" className="text-lg leading-snug text-foreground">
          I also make content
        </h2>
        <p className="text-sm text-muted-foreground">Skits, launches and build-in-public demos from X.</p>
      </div>

      {/* Highlights */}
      <div className="mb-4 grid grid-cols-2 gap-4 lg:mb-6 lg:grid-cols-4 lg:gap-6">
        <Stat icon={<Heart className="h-4 w-4" />} value={compact.format(likes)} label="likes on these posts" />
        <Stat icon={<MessageCircle className="h-4 w-4" />} value={compact.format(replies)} label="replies & conversations" />
        <Stat icon={<Video className="h-4 w-4" />} value={String(posts)} label="skits, launches & demos" />
        <Stat icon={<Sparkles className="h-4 w-4" />} value="Every ~4 days" label="new post cadence" />
      </div>

      {/* Most liked posts */}
      <h3 className="mb-3 px-1 text-sm font-bold text-muted-foreground">Most liked</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {topTweets.map((tweet) => (
          <div key={tweet.id_str} className="h-[400px]">
            <BentoTweet tweet={tweet} />
          </div>
        ))}
      </div>

      {/* View more banner */}
      <a
        href={data.socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="content-banner group relative mt-4 flex flex-col gap-5 overflow-hidden rounded-bento bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:mt-6"
      >
        <XLogo className="pointer-events-none absolute -right-6 -bottom-10 h-44 w-44 text-foreground opacity-[0.04] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105" />
        <div className="relative flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
            <XLogo className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="text-lg font-medium leading-snug tracking-tight text-foreground">
              There&apos;s a lot more where that came from
            </p>
            <p className="text-sm text-muted-foreground">
              Follow {twitterHandle} for every skit, launch and demo as it drops.
            </p>
          </div>
        </div>
        <span className="relative inline-flex w-fit shrink-0 items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity group-hover:opacity-85">
          View more on X
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>
    </section>
  );
};

export default ContentSection;
