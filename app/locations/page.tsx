import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Online Quran Classes by City | USA Locations | Ease Quran",
  description:
    "Ease Quran Online Academy serves Muslim families across the USA. Find online Quran classes in your city — New York, Houston, Chicago, Los Angeles, and more.",
  alternates: { canonical: "https://easequran.com/locations" },
};

const cities = [
  {
    name: "New York",
    href: "/locations/new-york",
    state: "NY",
    desc: "Serving 800,000+ Muslim families across all 5 boroughs",
  },
  {
    name: "Houston",
    href: "/locations/houston",
    state: "TX",
    desc: "One of the fastest-growing Muslim communities in Texas",
  },
  {
    name: "Chicago",
    href: "/locations/chicago",
    state: "IL",
    desc: "Top 5 Muslim city in the USA — 400,000+ strong",
  },
  {
    name: "Los Angeles",
    href: "/locations/los-angeles",
    state: "CA",
    desc: "Serving a diverse Muslim community of 500,000+",
  },
  {
    name: "New Jersey",
    href: "/locations/new-jersey",
    state: "NJ",
    desc: "Paterson, Jersey City, Edison and beyond",
  },
  {
    name: "Dearborn, Michigan",
    href: "/locations/dearborn-michigan",
    state: "MI",
    desc: "Highest concentration of Arab Americans in the USA",
  },
  {
    name: "Dallas",
    href: "/locations/dallas",
    state: "TX",
    desc: "Richardson, Plano, Irving and the DFW metro",
  },
  {
    name: "Philadelphia",
    href: "/locations/philadelphia",
    state: "PA",
    desc: "Serving a rich and historic Muslim community",
  },
  {
    name: "Atlanta",
    href: "/locations/atlanta",
    state: "GA",
    desc: "One of the fastest-growing Muslim communities in the South",
  },
  {
    name: "Columbus, Ohio",
    href: "/locations/columbus-ohio",
    state: "OH",
    desc: "Home to one of the largest Somali communities in the USA",
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-36 pb-20">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs px-4 py-2 rounded-full mb-5 border border-white/20">
            <span>Available in All 50 States</span>
          </div>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
            Online Quran Classes Across the USA
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Wherever you live in America, Ease Quran brings certified, one-on-one Quran
            education to your home. Browse your city below to learn more about our
            services in your area.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl text-navy mb-3">
              Cities We Serve
            </h2>
            <p className="text-grey max-w-xl mx-auto">
              Click your city to learn about the Muslim community there and how Ease Quran
              can help your family.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-playfair font-bold text-lg text-navy group-hover:text-gold transition-colors">
                    {city.name}
                  </h3>
                  <span className="text-xs font-semibold text-grey bg-offwhite px-2 py-0.5 rounded-full">
                    {city.state}
                  </span>
                </div>
                <p className="text-grey text-sm leading-relaxed mb-3">{city.desc}</p>
                <span className="text-gold text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Quran classes →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-white rounded-2xl border border-gray-100">
            <p className="font-playfair font-bold text-xl text-navy mb-2">
              Don&apos;t see your city?
            </p>
            <p className="text-grey text-sm mb-5">
              We serve Muslim families in all 50 states. No matter where you are in
              America, you can book a free trial class online today.
            </p>
            <Link
              href="/free-trial"
              className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded-xl hover:bg-gold-dark transition-all text-sm"
            >
              Book a Free Trial Anywhere in the USA
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
