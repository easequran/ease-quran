import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations } from "@/lib/locations";

interface CourseLocationLink {
  slug: string;
  reason: string;
}

interface CourseLocationsProps {
  heading: string;
  intro: string;
  links: CourseLocationLink[];
}

// Connects a course page to the location pages where that course solves a
// specific local problem. Sits on white directly after the course FAQ.
export default function CourseLocations({ heading, intro, links }: CourseLocationsProps) {
  const valid = links.filter((l) => locations[l.slug]);
  if (valid.length === 0) return null;

  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto border-t border-gray-100 pt-12">
          <span className="eyebrow mb-4">Across the US</span>
          <h2 className="heading-3 text-navy mb-3">{heading}</h2>
          <p className="text-grey leading-relaxed mb-6">{intro}</p>
          <ul className="space-y-3">
            {valid.map(({ slug, reason }) => (
              <li key={slug} className="flex gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-1" aria-hidden="true" />
                <p className="text-grey text-sm leading-relaxed">
                  <Link href={`/locations/${slug}`} className="font-semibold text-navy hover:text-gold transition-colors underline decoration-gold/40 underline-offset-2">
                    Quran classes in {locations[slug].name}
                  </Link>
                  {": "}
                  {reason}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-grey mt-6">
            <Link href="/locations" className="text-gold font-semibold hover:underline">
              Find your city or state
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
