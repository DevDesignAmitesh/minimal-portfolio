import type { CSSProperties } from "react";
import { data } from "@/src/data/data";
import { XLogo } from "./BrandIcons";
import BentoTweet from "./BentoTweet";
import HorizontalScroller from "./HorizontalScroller";

// Tweets are rendered on the server (react-tweet), so there's no X embed script or iframe.
const TweetStrip = ({ ids, index, className = "" }: { ids: string[]; index: number; className?: string }) => (
  <section
    className={`tweet-strip bento-reveal ${className}`}
    style={{ "--i": index } as CSSProperties}
    aria-labelledby="tweets-heading"
  >
    <div className="mb-4 flex items-end justify-between gap-4 px-1">
      <div>
        <h2 id="tweets-heading" className="text-lg leading-snug text-foreground">
          I also make content
        </h2>
        <p className="text-sm text-muted-foreground">Skits, launches and build-in-public demos from X.</p>
      </div>
      <a
        href={data.socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-pill px-3 py-1.5 text-sm font-bold text-foreground transition-opacity hover:opacity-80"
      >
        <XLogo className="h-3.5 w-3.5" />
        Follow
      </a>
    </div>

    <HorizontalScroller label="Tweets, newest first">
      {ids.map((id) => (
        <div key={id} className="h-[400px] w-[85%] shrink-0 snap-start sm:w-[340px]">
          <BentoTweet id={id} />
        </div>
      ))}
    </HorizontalScroller>
  </section>
);

export default TweetStrip;
