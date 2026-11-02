// Site-wide view counter stored in Upstash Redis (free tier), talked to over its REST API.
// Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in the deploy env (Vercel's Upstash
// integration sets KV_REST_API_URL / KV_REST_API_TOKEN, which also work). Without them the
// counter reports null and the badge stays hidden.
const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
const key = "portfolio:views";

export const dynamic = "force-dynamic";

const redis = async (command: "get" | "incr"): Promise<number | null> => {
  if (!url || !token) return null;
  try {
    const response = await fetch(`${url}/${command}/${key}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!response.ok) return null;
    const { result } = await response.json();
    return result === null ? 0 : Number(result);
  } catch {
    return null;
  }
};

export const GET = async () => Response.json({ views: await redis("get") });

export const POST = async () => Response.json({ views: await redis("incr") });
