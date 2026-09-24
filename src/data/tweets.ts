import { data } from "./data";

const tweetId = (url: string) => url.match(/\/status\/(\d+)/)?.[1];

// Tweet IDs are Twitter "snowflakes": the high bits are the post timestamp, so
// sorting IDs numerically sorts tweets by date without fetching anything.
export const getTweetIdsNewestFirst = () =>
  data.tweets
    .map(tweetId)
    .filter((id): id is string => Boolean(id))
    .sort((a, b) => (BigInt(b) > BigInt(a) ? 1 : -1));
