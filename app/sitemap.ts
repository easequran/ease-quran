import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "app", "blog");
  try {
    return fs
      .readdirSync(blogDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://easequran.com";
  const now = new Date().toISOString();

  const blogEntries: MetadataRoute.Sitemap = getBlogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

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
    { url: `${base}/safety`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/summer-quran-classes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
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
    { url: `${base}/locations/washington-dc`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/minneapolis`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/boston`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/miami-florida`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/seattle`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/phoenix-arizona`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/denver-colorado`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/charlotte-north-carolina`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/nashville-tennessee`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/las-vegas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/baltimore-maryland`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/st-louis-missouri`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/northern-virginia`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/milwaukee-wisconsin`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/indianapolis-indiana`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/portland-oregon`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/salt-lake-city-utah`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/new-orleans-louisiana`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/oklahoma-city`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/hartford-connecticut`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/providence-rhode-island`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/louisville-kentucky`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/des-moines-iowa`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/wichita-kansas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/omaha-nebraska`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/albuquerque-new-mexico`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/charleston-south-carolina`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/birmingham-alabama`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/jackson-mississippi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/little-rock-arkansas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/honolulu-hawaii`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/alaska`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/idaho`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/maine`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/delaware`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/west-virginia`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/vermont`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/montana`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/north-dakota`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/south-dakota`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/wyoming`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/new-hampshire`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Blog articles — auto-populated from filesystem
    ...blogEntries,
  ];
}
