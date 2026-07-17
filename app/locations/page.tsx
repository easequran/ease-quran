import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Online Quran Classes by City | USA Locations",
  description:
    "Ease Quran Online Academy serves Muslim families across the USA. Find online Quran classes in your city, from New York to Los Angeles.",
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
    desc: "Top 5 Muslim city in the USA, 400,000+ strong",
  },
  {
    name: "Los Angeles",
    href: "/locations/los-angeles",
    state: "CA",
    desc: "Serving a diverse Muslim community of 500,000+",
  },
  {
    name: "Paterson",
    href: "/locations/paterson-new-jersey",
    state: "NJ",
    desc: "One of America's largest Arab American communities",
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
  {
    name: "Washington, D.C.",
    href: "/locations/washington-dc",
    state: "DC",
    desc: "Serving the diverse Muslim community across the DMV area",
  },
  {
    name: "Minneapolis-St. Paul",
    href: "/locations/minneapolis",
    state: "MN",
    desc: "Home to one of the largest Somali Muslim communities in the USA",
  },
  {
    name: "Boston",
    href: "/locations/boston",
    state: "MA",
    desc: "Serving a diverse, academic Muslim community in Greater Boston",
  },
  {
    name: "Miami",
    href: "/locations/miami-florida",
    state: "FL",
    desc: "A global, multilingual Muslim community across South Florida",
  },
  {
    name: "Seattle",
    href: "/locations/seattle",
    state: "WA",
    desc: "Serving tech-industry and East African families across the Eastside",
  },
  {
    name: "Phoenix",
    href: "/locations/phoenix-arizona",
    state: "AZ",
    desc: "Serving Muslim families across the sprawling Valley of the Sun",
  },
  {
    name: "Denver",
    href: "/locations/denver-colorado",
    state: "CO",
    desc: "Serving Muslim families across Denver and the Front Range",
  },
  {
    name: "Charlotte",
    href: "/locations/charlotte-north-carolina",
    state: "NC",
    desc: "Serving one of the fastest-growing Muslim communities in the Southeast",
  },
  {
    name: "Nashville",
    href: "/locations/nashville-tennessee",
    state: "TN",
    desc: "Home to one of America's best-known Kurdish American communities",
  },
  {
    name: "Las Vegas",
    href: "/locations/las-vegas",
    state: "NV",
    desc: "Serving families working 24-hour shift schedules across the valley",
  },
  {
    name: "Baltimore",
    href: "/locations/baltimore-maryland",
    state: "MD",
    desc: "Home to one of America's oldest African American Muslim communities",
  },
  {
    name: "St. Louis",
    href: "/locations/st-louis-missouri",
    state: "MO",
    desc: "Home to the largest Bosnian community outside Bosnia",
  },
  {
    name: "Northern Virginia",
    href: "/locations/northern-virginia",
    state: "VA",
    desc: "Serving Fairfax, Loudoun, and Arlington's Afghan and South Asian families",
  },
  {
    name: "Milwaukee",
    href: "/locations/milwaukee-wisconsin",
    state: "WI",
    desc: "Certified Quran teaching without the drive to Chicago",
  },
  {
    name: "Indianapolis",
    href: "/locations/indianapolis-indiana",
    state: "IN",
    desc: "Serving families across the Crossroads of America",
  },
  {
    name: "Portland",
    href: "/locations/portland-oregon",
    state: "OR",
    desc: "Serving a growing East African and revert Muslim community",
  },
  {
    name: "Salt Lake City",
    href: "/locations/salt-lake-city-utah",
    state: "UT",
    desc: "Serving a small but growing Muslim community along the Wasatch Front",
  },
  {
    name: "New Orleans",
    href: "/locations/new-orleans-louisiana",
    state: "LA",
    desc: "Built around hospitality-industry hours and hurricane season",
  },
  {
    name: "Oklahoma City",
    href: "/locations/oklahoma-city",
    state: "OK",
    desc: "Serving a diverse community across a sprawling Southern Plains metro",
  },
  {
    name: "Hartford",
    href: "/locations/hartford-connecticut",
    state: "CT",
    desc: "Serving families across the Insurance Capital of the World",
  },
  {
    name: "Providence",
    href: "/locations/providence-rhode-island",
    state: "RI",
    desc: "Serving families across America's smallest state",
  },
  {
    name: "Louisville",
    href: "/locations/louisville-kentucky",
    state: "KY",
    desc: "Serving families in the hometown of Muhammad Ali",
  },
  {
    name: "Des Moines",
    href: "/locations/des-moines-iowa",
    state: "IA",
    desc: "Serving Des Moines and every smaller Iowa town",
  },
  {
    name: "Wichita",
    href: "/locations/wichita-kansas",
    state: "KS",
    desc: "Serving families across the Air Capital of the World",
  },
  {
    name: "Omaha",
    href: "/locations/omaha-nebraska",
    state: "NE",
    desc: "Home to a significant Sudanese and East African community",
  },
  {
    name: "Albuquerque",
    href: "/locations/albuquerque-new-mexico",
    state: "NM",
    desc: "Serving a small, genuine community across the high desert Southwest",
  },
  {
    name: "Charleston",
    href: "/locations/charleston-south-carolina",
    state: "SC",
    desc: "Serving a small, growing community in a historic port city",
  },
  {
    name: "Birmingham",
    href: "/locations/birmingham-alabama",
    state: "AL",
    desc: "Serving families tied to Birmingham's major medical center",
  },
  {
    name: "Jackson",
    href: "/locations/jackson-mississippi",
    state: "MS",
    desc: "Certified Quran teaching without the drive to Memphis or New Orleans",
  },
  {
    name: "Little Rock",
    href: "/locations/little-rock-arkansas",
    state: "AR",
    desc: "Certified Quran teaching without the drive to Memphis or Dallas",
  },
  {
    name: "Honolulu",
    href: "/locations/honolulu-hawaii",
    state: "HI",
    desc: "Serving Hawaii families across the Hawaii-Aleutian time zone",
  },
  {
    name: "Alaska",
    href: "/locations/alaska",
    state: "AK",
    desc: "Serving Anchorage and every corner of Alaska",
  },
  {
    name: "Idaho",
    href: "/locations/idaho",
    state: "ID",
    desc: "Serving Boise and every corner of Idaho",
  },
  {
    name: "Maine",
    href: "/locations/maine",
    state: "ME",
    desc: "Serving Portland and every corner of Maine",
  },
  {
    name: "Delaware",
    href: "/locations/delaware",
    state: "DE",
    desc: "Serving Wilmington and every corner of Delaware",
  },
  {
    name: "West Virginia",
    href: "/locations/west-virginia",
    state: "WV",
    desc: "Serving Charleston and every corner of West Virginia",
  },
  {
    name: "Vermont",
    href: "/locations/vermont",
    state: "VT",
    desc: "Serving Burlington and every corner of Vermont",
  },
  {
    name: "Montana",
    href: "/locations/montana",
    state: "MT",
    desc: "Serving Billings and every corner of Montana",
  },
  {
    name: "North Dakota",
    href: "/locations/north-dakota",
    state: "ND",
    desc: "Serving Fargo and every corner of North Dakota",
  },
  {
    name: "South Dakota",
    href: "/locations/south-dakota",
    state: "SD",
    desc: "Serving Sioux Falls and every corner of South Dakota",
  },
  {
    name: "Wyoming",
    href: "/locations/wyoming",
    state: "WY",
    desc: "Serving Cheyenne and every corner of Wyoming",
  },
  {
    name: "New Hampshire",
    href: "/locations/new-hampshire",
    state: "NH",
    desc: "Serving Manchester and every corner of New Hampshire",
  },
];

/* States without a dedicated Metro page get a lightweight statewide hub instead. */
const STATE_HUB_HREFS = new Set([
  "/locations/alaska",
  "/locations/idaho",
  "/locations/maine",
  "/locations/delaware",
  "/locations/west-virginia",
  "/locations/vermont",
  "/locations/montana",
  "/locations/north-dakota",
  "/locations/south-dakota",
  "/locations/wyoming",
  "/locations/new-hampshire",
]);

const metroCities = cities
  .filter((city) => !STATE_HUB_HREFS.has(city.href))
  .sort((a, b) => a.name.localeCompare(b.name));

const stateHubCities = cities
  .filter((city) => STATE_HUB_HREFS.has(city.href))
  .sort((a, b) => a.name.localeCompare(b.name));

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

      {/* Metro Cities Grid */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl text-navy mb-3">
              Cities We Serve
            </h2>
            <p className="text-grey max-w-xl mx-auto">
              {cities.length} locations and counting. Click your city to learn about the
              Muslim community there and how Ease Quran can help your family.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {metroCities.map((city) => (
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
        </div>
      </section>

      {/* Statewide Coverage Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl text-navy mb-3">
              Statewide Coverage
            </h2>
            <p className="text-grey max-w-xl mx-auto">
              No dedicated city page yet for your state? These pages serve your entire
              state directly, with the same certified, one-on-one teaching.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {stateHubCities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="group bg-offwhite rounded-xl p-5 border border-gray-100 hover:border-gold hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="font-playfair font-bold text-base text-navy group-hover:text-gold transition-colors">
                    {city.name}
                  </h3>
                  <span className="text-xs font-semibold text-grey bg-white px-2 py-0.5 rounded-full">
                    {city.state}
                  </span>
                </div>
                <p className="text-grey text-xs leading-relaxed">{city.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-offwhite rounded-2xl border border-gray-100">
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
