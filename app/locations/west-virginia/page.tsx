import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";

export const metadata: Metadata = {
  title: "Online Quran Classes in West Virginia",
  description:
    "Certified online Quran classes for Muslim families across West Virginia, including Charleston. Wifaq ul Madaris certified teachers.",
  alternates: {
    canonical: "https://easequran.com/locations/west-virginia",
  },
  openGraph: {
    title: "Online Quran Classes in West Virginia | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across West Virginia, including Charleston and every smaller West Virginia community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "West Virginia", item: "https://easequran.com/locations/west-virginia" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description: "Certified online Quran classes for Muslim families throughout West Virginia.",
  areaServed: { "@type": "State", name: "West Virginia" },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does this page link to Washington DC instead of a closer West Virginia city?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because for a real share of West Virginia families, DC genuinely is closer. The state's Eastern Panhandle, around Martinsburg and Charles Town, is close enough to DC to be part of its commuter belt, actually nearer to Washington than to the state's own capital, Charleston. For families in the rest of West Virginia, DC is still the nearest Metro Tier page we have.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have students in Charleston, WV already?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're actively welcoming West Virginia families right now. Rather than claim a number we can't verify, we'd invite you to be one of our first Charleston-area students with a free trial class.",
      },
    },
    {
      "@type": "Question",
      name: "West Virginia is the only state entirely inside Appalachia. Does the terrain actually matter for classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It matters for everything except online classes. West Virginia's mountains and winding roads make towns that look close on a map genuinely far apart by road, sometimes an hour or more between communities barely 20 miles apart as the crow flies. Since classes are online, none of that terrain is relevant to your child's schedule.",
      },
    },
    {
      "@type": "Question",
      name: "How much do classes cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plans start from $40 per month, and every family gets a completely free first trial class with no credit card required.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Why does this page link to Washington DC instead of a closer West Virginia city?",
    answer:
      "Because for a genuine share of West Virginia families, DC actually is closer. The state's Eastern Panhandle, around Martinsburg, Charles Town, and Harpers Ferry, sits close enough to Washington to be a real part of its commuter belt, closer to the capital than to Charleston, West Virginia's own state capital on the opposite side of the state. For families anywhere else in West Virginia, DC remains the nearest Metro Tier page we have, even if the drive is a longer one from those regions.",
  },
  {
    question: "Do you have students in Charleston, WV already?",
    answer:
      "We're actively welcoming West Virginia families right now. Rather than claim a specific number we can't verify, we'd simply invite you to be one of our first Charleston-area students and see the quality for yourself with a free trial class.",
  },
  {
    question: "West Virginia is the only state entirely inside Appalachia. Does the terrain actually matter for classes?",
    answer:
      "It matters for almost everything except online classes. West Virginia is the only state that sits entirely within the Appalachian mountain range, and the winding roads that come with that terrain mean two towns that look 20 miles apart on a map can be an hour or more apart by car. Since all classes are conducted online via Zoom, none of that mountain geography has any bearing on whether your child's lesson happens on time.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Plans start from $40 per month, and every family gets a completely free first trial class with no credit card required, so you can experience a lesson before committing to anything.",
  },
];

export default function WestVirginiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><Link href="/locations" className="hover:text-gold transition-colors">Locations</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">West Virginia</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving All of West Virginia
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in West Virginia
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families anywhere in West Virginia, from Charleston to the state's mountain communities. Free first trial class, certified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center">
                Book Free Trial Class
              </Link>
              <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20West%20Virginia" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center">
                Chat on WhatsApp
              </a>
            </div>
            <TrustBadges dark />
          </div>
        </div>
      </section>

      <TeacherStrip />

      {/* Community & Hyperlocal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving Charleston &amp; Every West Virginia Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Certified Quran Teaching, Wherever You Are in West Virginia
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                West Virginia is the only state that sits entirely inside the Appalachian mountain range, and that geography splits the state in a way most people don't expect. The Eastern Panhandle, around Martinsburg, Charles Town, and Harpers Ferry, is close enough to Washington DC to be a genuine part of its commuter belt, actually nearer to the capital than to Charleston, West Virginia's own state capital on the far side of the state. The rest of West Virginia is more remote, with winding mountain roads that make towns 20 miles apart on a map an hour or more apart by car.
              </p>
              <p>
                That's why our{" "}
                <Link href="/locations/washington-dc" className="text-gold font-semibold hover:underline">Washington, D.C. location page</Link>{" "}
                is the nearest Metro Tier community we link here, genuinely close for the Eastern Panhandle and still the closest option for the rest of the state. Wherever in West Virginia you are, our online classes reach your home directly, no mountain roads involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Our Curriculum</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">Courses for West Virginia Families</h2>
            <p className="text-grey leading-relaxed mb-6">
              From Noorani Qaida for first-time readers to Tajweed, Hifz, and Islamic Studies, every course is one-on-one and taught by a Wifaq ul Madaris certified scholar. Visit our{" "}
              <Link href="/courses" className="text-gold font-semibold hover:underline">full courses page</Link>{" "}
              to see everything available, including options for kids, adults, and reverts.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Questions</span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">Frequently Asked Questions. West Virginia</h2>
            </div>
            <FAQAccordion faqs={faqs} />
            <p className="text-center text-grey text-sm mt-6">
              Worried about safety?{" "}
              <Link href="/safety" className="text-gold font-semibold hover:underline">
                Read our Child Safety &amp; Parent Rights Policy
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline="Certified Quran Education for West Virginia Families"
        subtext="From Charleston to the smallest mountain community. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in West Virginia"
      />
    </>
  );
}
