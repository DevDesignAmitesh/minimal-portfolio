import { getTweet, type Tweet } from "react-tweet/api";
import { data } from "./data";

const tweetId = (url: string) => url.match(/\/status\/(\d+)/)?.[1];

const handle = data.socialLinks.twitter.split("/").pop()?.toLowerCase();

// Tweet IDs are Twitter "snowflakes": the high bits are the post timestamp, so
// sorting IDs numerically sorts tweets by date without fetching anything.
export const getTweetIdsNewestFirst = () =>
  data.tweets
    .map(tweetId)
    .filter((id): id is string => Boolean(id))
    .sort((a, b) => (BigInt(b) > BigInt(a) ? 1 : -1));

export interface ContentHighlights {
  topTweets: Tweet[];
  posts: number;
  likes: number;
  replies: number;
}

// Fetches every listed tweet (cached alongside the page), ranks them by likes, and sums the
// stats. Totals only count my own posts, so a friend's tweet I'm featured in doesn't inflate them.
export const getContentHighlights = async (top = 4): Promise<ContentHighlights> => {
  const tweets = (
    await Promise.all(
      getTweetIdsNewestFirst().map((id) =>
        getTweet(id, { next: { revalidate: 21600 } }).catch(() => undefined),
      ),
    )
  ).filter((tweet): tweet is Tweet => Boolean(tweet));

  const mine = tweets.filter((tweet) => tweet.user.screen_name.toLowerCase() === handle);

  return {
    topTweets: [...tweets].sort((a, b) => b.favorite_count - a.favorite_count).slice(0, top),
    posts: data.tweets.length,
    likes: mine.reduce((sum, tweet) => sum + tweet.favorite_count, 0),
    replies: mine.reduce((sum, tweet) => sum + (tweet.conversation_count ?? 0), 0),
  };
};
