import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";

export const metadata: Metadata = {
  title: "Online Quran Classes in Delaware",
  description:
    "Certified online Quran classes for Muslim families across Delaware, including Wilmington. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/delaware",
  },
  openGraph: {
    title: "Online Quran Classes in Delaware | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Delaware, including Wilmington and every smaller Delaware community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Delaware", item: "https://easequran.com/locations/delaware" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description: "Certified online Quran classes for Muslim families throughout Delaware.",
  areaServed: { "@type": "State", name: "Delaware" },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Isn't Wilmington basically part of Philadelphia? Why is Delaware its own page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fair question. Wilmington sits right on the Amtrak Northeast Corridor between Philadelphia and Baltimore, and a lot of Delaware families genuinely live inside the Philadelphia media and commuter market. We keep Delaware separate because the state itself, all the way down through Dover and Sussex County, deserves its own honest page rather than being folded into a city it only partly overlaps with.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have students in Wilmington already?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're actively welcoming Delaware families right now. Rather than claim a number we can't verify, we'd invite you to be one of our first Wilmington-area students with a free trial class.",
      },
    },
    {
      "@type": "Question",
      name: "I'm in Dover or Sussex County, much further south than Wilmington. Does that matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not for us. Delaware is the second-smallest state in the country, but Dover and Sussex County are still a real drive from Wilmington's Islamic community. Since classes are online, that internal distance disappears completely, families anywhere in Delaware get the exact same certified teacher.",
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
    question: "Isn't Wilmington basically part of Philadelphia? Why is Delaware its own page?",
    answer:
      "Fair question. Wilmington sits right on the Amtrak Northeast Corridor between Philadelphia and Baltimore, and a genuine share of Delaware families live inside the greater Philadelphia media and commuter market, close enough that the line between the two barely matters day to day. We still give Delaware its own honest page because the rest of the state, all the way down through Dover and Sussex County, is genuinely distinct from Philadelphia and deserves to be treated that way rather than folded into a bigger city's page.",
  },
  {
    question: "Do you have students in Wilmington already?",
    answer:
      "We're actively welcoming Delaware families right now. Rather than claim a specific number we can't verify, we'd simply invite you to be one of our first Wilmington-area students and see the quality for yourself with a free trial class.",
  },
  {
    question: "I'm in Dover or Sussex County, much further south than Wilmington. Does that matter?",
    answer:
      "Not for us, though it matters for almost everything else. Delaware is the second-smallest state in the country, but Dover and especially Sussex County are still a real drive from Wilmington's Islamic community, more rural and considerably further from the Philadelphia corridor than the state's small size suggests on a map. Since all classes are conducted online via Zoom, that internal distance disappears completely, families anywhere in Delaware get exactly the same certified teacher.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Plans start from $40 per month, and every family gets a completely free first trial class with no credit card required, so you can experience a lesson before committing to anything.",
  },
];

export default function DelawarePage() {
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
              <li className="text-white/80">Delaware</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving All of Delaware
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in Delaware
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families anywhere in Delaware, from Wilmington to Dover and beyond. Free first trial class, certified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center">
                Book Free Trial Class
              </Link>
              <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Delaware" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center">
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
              Serving Wilmington &amp; Every Delaware Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Certified Quran Teaching, Wherever You Are in Delaware
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Delaware's Muslim community is concentrated mostly around Wilmington, which sits directly on the Amtrak Northeast Corridor between Philadelphia and Baltimore and functions, for a lot of practical purposes, as part of greater Philadelphia. That overlap is real, but it's not the whole state. Dover and Sussex County, further south, are more rural and genuinely distant from that corridor, and families there have far less nearby than the state's small size on a map would suggest.
              </p>
              <p>
                Given Wilmington's location, many Delaware families are also close to our{" "}
                <Link href="/locations/philadelphia" className="text-gold font-semibold hover:underline">Philadelphia location page</Link>, our nearest Metro Tier community, though our online classes reach you directly anywhere in Delaware, from Wilmington to Sussex County.
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
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">Courses for Delaware Families</h2>
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
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">Frequently Asked Questions. Delaware</h2>
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
        headline="Certified Quran Education for Delaware Families"
        subtext="From Wilmington to Dover and every Delaware community. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Delaware"
      />
    </>
  );
}
