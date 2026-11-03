// Site-wide view counter stored in Upstash Redis (free tier), talked to over its REST API.
// Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in the deploy env (Vercel's Upstash
// integration sets KV_REST_API_URL / KV_REST_API_TOKEN, which also work). Without them the
// counter reports null and the badge stays hidden.
const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
const key = "portfolio:views";

// Each IP counts at most once per window. Only a salted SHA-256 of the IP is kept, and Redis
// deletes it when the window ends, so no raw IPs are ever stored.
const windowSeconds = 60 * 60 * 24;

export const dynamic = "force-dynamic";

// Runs one Redis command, e.g. ["INCR", key]. Returns null if Redis isn't configured or fails.
const redis = async (command: (string | number)[]): Promise<unknown> => {
  if (!url || !token) return null;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(command),
      cache: "no-store",
    });
    if (!response.ok) return null;
    const { result } = await response.json();
    return result;
  } catch {
    return null;
  }
};

const toViews = (result: unknown) => (result === null ? null : Number(result ?? 0));

// The secret token doubles as the salt, so the hashes can't be reversed by hashing every IPv4 address.
const hashIp = async (ip: string) => {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${token}:${ip}`));
  return Buffer.from(digest).toString("hex");
};

// Vercel puts the visitor's IP in x-real-ip / x-forwarded-for (first entry is the client).
const clientIp = (request: Request) =>
  request.headers.get("x-real-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;

export const GET = async () => Response.json({ views: toViews(await redis(["GET", key])) });

export const POST = async (request: Request) => {
  const ip = clientIp(request);
  if (ip && url && token) {
    // SET NX succeeds only for the first visit from this IP in the window.
    const firstVisit = await redis(["SET", `${key}:seen:${await hashIp(ip)}`, 1, "NX", "EX", windowSeconds]);
    if (firstVisit !== "OK") return Response.json({ views: toViews(await redis(["GET", key])) });
  }
  return Response.json({ views: toViews(await redis(["INCR", key])) });
};
