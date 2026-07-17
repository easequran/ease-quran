import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";

export const metadata: Metadata = {
  title: "Online Quran Classes in Wyoming",
  description:
    "Certified online Quran classes for Muslim families across Wyoming, including Cheyenne. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/wyoming",
  },
  openGraph: {
    title: "Online Quran Classes in Wyoming | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Wyoming, including Cheyenne and every smaller Wyoming community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Wyoming", item: "https://easequran.com/locations/wyoming" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description: "Certified online Quran classes for Muslim families throughout Wyoming.",
  areaServed: { "@type": "State", name: "Wyoming" },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wyoming is the least populous state. Does that mean there's basically no Muslim community here?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wyoming genuinely is the least populous state in the country by Census figures, and a good number of Wyoming families have no local mosque within a reasonable drive at all. That's precisely why we built this page, not to claim a community that doesn't exist, but to make sure Wyoming families aren't left without a real option.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have students in Cheyenne already?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're actively welcoming Wyoming families right now. Rather than claim a number we can't verify, we'd invite you to be one of our first Cheyenne-area students with a free trial class.",
      },
    },
    {
      "@type": "Question",
      name: "Cheyenne is right on the Colorado border. Is Denver actually a realistic option for us?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For an occasional trip, maybe. Cheyenne sits roughly 100 miles from Denver on I-25, making it the shortest distance between any state we serve this way and its nearest Metro Tier city. Even so, a regular weekly drive isn't realistic for most families, which is exactly what online classes solve.",
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
    question: "Wyoming is the least populous state. Does that mean there's basically no Muslim community here?",
    answer:
      "Wyoming genuinely is the least populous state in the country according to Census figures, and a good number of Wyoming families have no local mosque or Islamic community within a reasonable drive at all. We say that plainly rather than invent a local scene that doesn't exist. It's exactly why this page exists in the first place, to make sure Wyoming families have a real, certified option even where a local one doesn't.",
  },
  {
    question: "Do you have students in Cheyenne already?",
    answer:
      "We're actively welcoming Wyoming families right now. Rather than claim a specific number we can't verify, we'd simply invite you to be one of our first Cheyenne-area students and see the quality for yourself with a free trial class.",
  },
  {
    question: "Cheyenne is right on the Colorado border. Is Denver actually a realistic option for us?",
    answer:
      "For an occasional trip, maybe. Cheyenne sits roughly 100 miles from Denver on I-25, which makes it the shortest distance between any state we serve this way and its nearest Metro Tier city, genuinely closer than any other state-to-metro pairing on this site. Even at that distance, a regular weekly drive for Quran classes isn't realistic for most working families, which is exactly the gap online classes close.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Plans start from $40 per month, and every family gets a completely free first trial class with no credit card required, so you can experience a lesson before committing to anything.",
  },
];

export default function WyomingPage() {
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
              <li className="text-white/80">Wyoming</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving All of Wyoming
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in Wyoming
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families anywhere in Wyoming, from Cheyenne to the state's most remote towns. Free first trial class, certified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center">
                Book Free Trial Class
              </Link>
              <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Wyoming" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center">
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
              Serving Cheyenne &amp; Every Wyoming Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Certified Quran Teaching, Wherever You Are in Wyoming
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Wyoming genuinely is the least populous state in the country by Census figures, and its Muslim community reflects that: a good number of Wyoming families have no local mosque or Islamic community within a reasonable drive at all. We're not going to invent a local scene that doesn't exist. What Wyoming does have going for it, more than any other state we serve this way, is proximity: Cheyenne sits roughly 100 miles from Denver on I-25, the shortest distance between any state-hub page on this site and its nearest Metro Tier city.
              </p>
              <p>
                Our{" "}
                <Link href="/locations/denver-colorado" className="text-gold font-semibold hover:underline">Denver location page</Link>{" "}
                is that nearest Metro Tier community, genuinely close for southeastern Wyoming families even if a weekly drive still isn't realistic. Our online classes reach you directly in Wyoming, no trip down I-25 required.
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
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">Courses for Wyoming Families</h2>
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
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">Frequently Asked Questions. Wyoming</h2>
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
        headline="Certified Quran Education for Wyoming Families"
        subtext="From Cheyenne to the most remote Wyoming town. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Wyoming"
      />
    </>
  );
}
