import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

function getRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

function hasVisitedCookie(req: VercelRequest): boolean {
  if (req.cookies && req.cookies.vk_visited === '1') {
    return true;
  }
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return false;
  return /(?:^|;\s*)vk_visited=1(?:;|$)/.test(cookieHeader);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Prevent CDN/browser caching so count is always live
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST', 'OPTIONS']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const redis = getRedisClient();

  if (!redis) {
    return res.status(503).json({
      error: 'Upstash Redis credentials are not configured. Please set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.',
    });
  }

  const INITIAL_BASELINE = parseInt(process.env.INITIAL_VISITOR_COUNT || '52', 10);
  const alreadyVisited = hasVisitedCookie(req);

  try {
    if (alreadyVisited) {
      // Repeat visit within 24 hours: do not increment, just fetch current count
      const current = await redis.get<number | string>('portfolio:visitor_count');
      const count = current != null ? Number(current) : INITIAL_BASELINE;
      return res.status(200).json({ count });
    }

    // Basic abuse rate limiting per IP against spamming without cookies (max 10 new-visitor increments per minute per IP)
    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket?.remoteAddress;
    if (clientIp) {
      const rateLimitKey = `portfolio:rate:${clientIp}`;
      const attempts = await redis.incr(rateLimitKey);
      if (attempts === 1) {
        await redis.expire(rateLimitKey, 60);
      }
      if (attempts > 10) {
        // High frequency without cookies: return current count without incrementing
        const current = await redis.get<number | string>('portfolio:visitor_count');
        const count = current != null ? Number(current) : INITIAL_BASELINE;
        return res.status(200).json({ count });
      }
    }

    // Safe atomic initialization & increment under concurrency using Redis Lua script
    // If the key does not exist, initialize it to INITIAL_BASELINE (52), then atomically INCR it (-> 53).
    // If the key exists (e.g. 53), simply atomically INCR it (-> 54).
    const atomicIncrementScript = `
      local exists = redis.call('EXISTS', KEYS[1])
      if exists == 0 then
        redis.call('SET', KEYS[1], ARGV[1])
      end
      return redis.call('INCR', KEYS[1])
    `;

    const newCount = (await redis.eval(
      atomicIncrementScript,
      ['portfolio:visitor_count'],
      [INITIAL_BASELINE]
    )) as number;

    // Set 24-hour HTTP-only cookie to prevent duplicate increments from this visitor
    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
    const cookieFlags = [
      'vk_visited=1',
      'Path=/',
      'Max-Age=86400',
      'HttpOnly',
      'SameSite=Lax',
      ...(isProduction ? ['Secure'] : []),
    ].join('; ');

    res.setHeader('Set-Cookie', cookieFlags);
    return res.status(200).json({ count: Number(newCount) });
  } catch (error) {
    console.error('Visitor counter error:', error);
    return res.status(500).json({ error: 'Failed to process visitor count' });
  }
}
