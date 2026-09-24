import {
  enrichTweet,
  TweetActions,
  TweetBody,
  TweetContainer,
  TweetHeader,
  TweetInfo,
  TweetMedia,
  TweetNotFound,
} from "react-tweet";
import { getTweet } from "react-tweet/api";

// react-tweet's default <Tweet> sizes itself to its content, so cards in the strip end up
// different heights. This composes the same parts into a fixed-height card: text is clamped,
// media gets a fixed box, and date/likes are pinned to the bottom (see .bento-tweet in globals.css).
const BentoTweet = async ({ id }: { id: string }) => {
  const tweet = await getTweet(id, { next: { revalidate: 21600 } }).catch(() => undefined);

  if (!tweet) {
    return (
      <div className="bento-tweet h-full">
        <TweetNotFound />
      </div>
    );
  }

  const enriched = enrichTweet(tweet);

  return (
    <TweetContainer className="bento-tweet">
      <TweetHeader tweet={enriched} />
      <div className="bento-tweet-body">
        <TweetBody tweet={enriched} />
      </div>
      {enriched.mediaDetails?.length ? (
        <div className="bento-tweet-media">
          <TweetMedia tweet={enriched} />
        </div>
      ) : null}
      <div className="bento-tweet-footer">
        <TweetInfo tweet={enriched} />
        <TweetActions tweet={enriched} />
      </div>
    </TweetContainer>
  );
};

export default BentoTweet;
