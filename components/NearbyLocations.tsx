import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations, nearby } from "@/lib/locations";

interface NearbyLocationsProps {
  slug: string;
}

// Links a location page to the covered cities/states around it. Rendered on
// the same off-white background as the section before it on every location
// page, so it reads as a continuation of the "near you" content.
export default function NearbyLocations({ slug }: NearbyLocationsProps) {
  const current = locations[slug];
  const neighbors = (nearby[slug] ?? []).filter((s) => locations[s]);
  if (!current || neighbors.length === 0) return null;

  const heading =
    current.kind === "state"
      ? `Online Quran Classes in States Near ${current.short}`
      : `Online Quran Classes Near ${current.short}`;

  return (
    <section className="bg-offwhite pb-16 md:pb-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto border-t border-gray-200 pt-12">
          <span className="eyebrow mb-4">Nearby Areas</span>
          <h2 className="heading-3 text-navy mb-3">{heading}</h2>
          <p className="text-grey leading-relaxed mb-8 max-w-2xl">
            Have family nearby, or moving within the region? Classes work the same way
            wherever you live, and each of these pages covers the local community and the
            questions families there ask us most.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighbors.map((s) => {
              const loc = locations[s];
              return (
                <li key={s}>
                  <Link
                    href={`/locations/${s}`}
                    className="group flex h-full gap-3 bg-white rounded-xl p-5 border border-gray-100 hover:border-gold/50 hover:shadow-md transition-all"
                  >
                    <MapPin size={18} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold text-navy group-hover:text-gold transition-colors mb-1">
                        Quran classes in {loc.name}
                      </span>
                      <span className="block text-grey text-sm leading-relaxed">{loc.summary}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-sm text-grey mt-6">
            Somewhere else?{" "}
            <Link href="/locations" className="text-gold font-semibold hover:underline">
              See every city and state we serve
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
