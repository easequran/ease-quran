import { MetadataRoute } from "next";

const BASE_URL = "https://easequran.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/courses", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/free-trial", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/female-quran-teachers", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const coursePages = [
    "/courses/quran-for-kids",
    "/courses/tajweed",
    "/courses/hifz",
    "/courses/noorani-qaida",
    "/courses/arabic-language",
    "/courses/islamic-studies",
    "/courses/quran-for-adults",
    "/courses/quran-for-reverts",
  ];

  const locationPages = [
    "/locations/new-york",
    "/locations/houston",
    "/locations/chicago",
    "/locations/los-angeles",
    "/locations/new-jersey",
    "/locations/dearborn-michigan",
    "/locations/dallas",
    "/locations/philadelphia",
    "/locations/atlanta",
    "/locations/columbus-ohio",
  ];

  const blogSlugs = [
    "/blog/how-to-choose-online-quran-academy",
    "/blog/what-is-wifaq-ul-madaris",
    "/blog/tajweed-rules-for-beginners",
    "/blog/hifz-tips-for-muslim-kids-in-america",
    "/blog/female-quran-teacher-online-usa",
    "/blog/noorani-qaida-for-kids",
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${BASE_URL}${p.url}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...coursePages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...locationPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogSlugs.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
