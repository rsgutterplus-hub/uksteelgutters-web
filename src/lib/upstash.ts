// Upstash Redis REST API — no npm package needed
// Requires env vars: UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN

async function command(cmd: unknown[]): Promise<{ result: unknown }> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) throw new Error("Upstash env vars not set");
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmd),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Upstash error: ${res.status}`);
  return res.json() as Promise<{ result: unknown }>;
}

export async function kvGet<T>(key: string): Promise<T | null> {
  const { result } = await command(["GET", key]);
  if (!result || typeof result !== "string") return null;
  try { return JSON.parse(result) as T; } catch { return null; }
}

export async function kvSet(key: string, value: unknown): Promise<void> {
  await command(["SET", key, JSON.stringify(value)]);
}
