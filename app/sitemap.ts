import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://easequran.com";
  const now = new Date().toISOString();

  return [
    // Homepage — highest priority
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    // Core pages
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/free-trial`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/female-quran-teachers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    // Blog articles
    { url: `${base}/blog/how-to-choose-online-quran-academy`, lastModified: "2025-01-15T00:00:00.000Z", changeFrequency: "monthly", priority: 0.7 },
    // Course pages
    { url: `${base}/courses/quran-for-kids`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/tajweed`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/hifz`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/noorani-qaida`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/arabic-language`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/courses/islamic-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/courses/quran-for-adults`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/quran-for-reverts`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Location pages
    { url: `${base}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/new-york`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/houston`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/chicago`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/los-angeles`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/new-jersey`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/dearborn-michigan`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/dallas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/philadelphia`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/atlanta`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/columbus-ohio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
