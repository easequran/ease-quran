import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

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

const buildTime = new Date().toISOString();

function getLastModified(filePath: string): string {
  try {
    const out = execSync(`git log -1 --format=%aI -- "${filePath}"`, {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    return out || buildTime;
  } catch {
    return buildTime;
  }
}

type Entry = {
  url: string;
  file: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://easequran.com";

  const blogEntries: Entry[] = getBlogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    file: `app/blog/${slug}/page.tsx`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const entries: Entry[] = [
    // Homepage — highest priority
    { url: base, file: "app/page.tsx", changeFrequency: "weekly", priority: 1.0 },
    // Core pages
    { url: `${base}/about`, file: "app/about/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses`, file: "app/courses/page.tsx", changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/pricing`, file: "app/pricing/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/free-trial`, file: "app/free-trial/page.tsx", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, file: "app/contact/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/female-quran-teachers`, file: "app/female-quran-teachers/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy`, file: "app/privacy-policy/page.tsx", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-conditions`, file: "app/terms-conditions/page.tsx", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/safety`, file: "app/safety/page.tsx", changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/blog`, file: "app/blog/page.tsx", changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/summer-quran-classes`, file: "app/summer-quran-classes/page.tsx", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ramadan-quran-classes`, file: "app/ramadan-quran-classes/page.tsx", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/learn-quran-online`, file: "app/learn-quran-online/page.tsx", changeFrequency: "monthly", priority: 0.9 },
    // Course pages
    { url: `${base}/courses/quran-for-kids`, file: "app/courses/quran-for-kids/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/tajweed`, file: "app/courses/tajweed/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/hifz`, file: "app/courses/hifz/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/noorani-qaida`, file: "app/courses/noorani-qaida/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/arabic-language`, file: "app/courses/arabic-language/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/courses/islamic-studies`, file: "app/courses/islamic-studies/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/courses/quran-for-adults`, file: "app/courses/quran-for-adults/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/quran-for-reverts`, file: "app/courses/quran-for-reverts/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    // Location pages
    { url: `${base}/locations`, file: "app/locations/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/new-york`, file: "app/locations/new-york/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/houston`, file: "app/locations/houston/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/chicago`, file: "app/locations/chicago/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/los-angeles`, file: "app/locations/los-angeles/page.tsx", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/paterson-new-jersey`, file: "app/locations/paterson-new-jersey/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/dearborn-michigan`, file: "app/locations/dearborn-michigan/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/dallas`, file: "app/locations/dallas/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/philadelphia`, file: "app/locations/philadelphia/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/atlanta`, file: "app/locations/atlanta/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/columbus-ohio`, file: "app/locations/columbus-ohio/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/washington-dc`, file: "app/locations/washington-dc/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/minneapolis`, file: "app/locations/minneapolis/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/boston`, file: "app/locations/boston/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/miami-florida`, file: "app/locations/miami-florida/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/seattle`, file: "app/locations/seattle/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/phoenix-arizona`, file: "app/locations/phoenix-arizona/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/denver-colorado`, file: "app/locations/denver-colorado/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/charlotte-north-carolina`, file: "app/locations/charlotte-north-carolina/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/nashville-tennessee`, file: "app/locations/nashville-tennessee/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/las-vegas`, file: "app/locations/las-vegas/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/baltimore-maryland`, file: "app/locations/baltimore-maryland/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/st-louis-missouri`, file: "app/locations/st-louis-missouri/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/northern-virginia`, file: "app/locations/northern-virginia/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/milwaukee-wisconsin`, file: "app/locations/milwaukee-wisconsin/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/indianapolis-indiana`, file: "app/locations/indianapolis-indiana/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/portland-oregon`, file: "app/locations/portland-oregon/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/salt-lake-city-utah`, file: "app/locations/salt-lake-city-utah/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/new-orleans-louisiana`, file: "app/locations/new-orleans-louisiana/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/oklahoma-city`, file: "app/locations/oklahoma-city/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/hartford-connecticut`, file: "app/locations/hartford-connecticut/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/providence-rhode-island`, file: "app/locations/providence-rhode-island/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/louisville-kentucky`, file: "app/locations/louisville-kentucky/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/des-moines-iowa`, file: "app/locations/des-moines-iowa/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/wichita-kansas`, file: "app/locations/wichita-kansas/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/omaha-nebraska`, file: "app/locations/omaha-nebraska/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/albuquerque-new-mexico`, file: "app/locations/albuquerque-new-mexico/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/charleston-south-carolina`, file: "app/locations/charleston-south-carolina/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/birmingham-alabama`, file: "app/locations/birmingham-alabama/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/jackson-mississippi`, file: "app/locations/jackson-mississippi/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/little-rock-arkansas`, file: "app/locations/little-rock-arkansas/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/honolulu-hawaii`, file: "app/locations/honolulu-hawaii/page.tsx", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/alaska`, file: "app/locations/alaska/page.tsx", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/idaho`, file: "app/locations/idaho/page.tsx", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/maine`, file: "app/locations/maine/page.tsx", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/delaware`, file: "app/locations/delaware/page.tsx", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/west-virginia`, file: "app/locations/west-virginia/page.tsx", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/vermont`, file: "app/locations/vermont/page.tsx", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/montana`, file: "app/locations/montana/page.tsx", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/north-dakota`, file: "app/locations/north-dakota/page.tsx", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/south-dakota`, file: "app/locations/south-dakota/page.tsx", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/wyoming`, file: "app/locations/wyoming/page.tsx", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/locations/new-hampshire`, file: "app/locations/new-hampshire/page.tsx", changeFrequency: "monthly", priority: 0.6 },
    // Blog articles — auto-populated from filesystem
    ...blogEntries,
  ];

  return entries.map(({ url, file, changeFrequency, priority }) => ({
    url,
    lastModified: getLastModified(file),
    changeFrequency,
    priority,
  }));
}
