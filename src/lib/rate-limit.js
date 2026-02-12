import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const isUpstashConfigured =
  !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = isUpstashConfigured ? Redis.fromEnv() : null;

export const rateLimitByIp = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(10, "10 m"),
      prefix: "rl",
    })
  : null;

export const rateLimitByEmail = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "30 m"),
      prefix: "rl",
    })
  : null;

