import { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "https://uksteelgutters-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/shop/half-round-125`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/shop/half-round-150`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/installation-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/trade-account`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/delivery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/quote`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
