import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";

export const metadata: Metadata = {
  title: "Online Quran Classes in Vermont",
  description:
    "Certified online Quran classes for Muslim families across Vermont, including Burlington. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/vermont",
  },
  openGraph: {
    title: "Online Quran Classes in Vermont | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Vermont, including Burlington and every smaller Vermont community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Vermont", item: "https://easequran.com/locations/vermont" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description: "Certified online Quran classes for Muslim families throughout Vermont.",
  areaServed: { "@type": "State", name: "Vermont" },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Burlington really closer to Boston or to Montreal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Montreal, genuinely. Burlington sits roughly 90 miles from Montreal, Canada, compared to about 220 miles from Boston. We still link Boston as the nearest Ease Quran Metro Tier page since it's the closest US city we serve, but Vermont's actual orientation is more northward than most people assume.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have students in Burlington already?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're actively welcoming Vermont families right now. Rather than claim a number we can't verify, we'd invite you to be one of our first Burlington-area students with a free trial class.",
      },
    },
    {
      "@type": "Question",
      name: "Vermont is the least populated state in New England. Does that affect what's available locally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It does. Vermont's Muslim community is small even by New England standards, and real winters across a rural state can make any local drive difficult for months at a stretch. Since every class is online, neither Vermont's small population nor its weather ever affects whether your child's lesson happens on schedule.",
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
    question: "Is Burlington really closer to Boston or to Montreal?",
    answer:
      "Montreal, genuinely, and it's not close. Burlington sits roughly 90 miles from Montreal, Canada, compared to about 220 miles from Boston, more than double the distance. We still list Boston as the nearest Ease Quran Metro Tier page since it's the closest US city we serve, but Vermont's actual day-to-day orientation, for shopping, weekend trips, even some regional culture, leans north toward Canada more than most people assume.",
  },
  {
    question: "Do you have students in Burlington already?",
    answer:
      "We're actively welcoming Vermont families right now. Rather than claim a specific number we can't verify, we'd simply invite you to be one of our first Burlington-area students and see the quality for yourself with a free trial class.",
  },
  {
    question: "Vermont is the least populated state in New England. Does that affect what's available locally?",
    answer:
      "It does. Vermont's Muslim community is small even by New England standards, concentrated mostly around Burlington, and real Vermont winters across a rural state can make any local drive difficult for months at a stretch. Since every class is conducted online via Zoom, neither Vermont's small population nor its weather ever affects whether your child's lesson happens safely and on schedule.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Plans start from $40 per month, and every family gets a completely free first trial class with no credit card required, so you can experience a lesson before committing to anything.",
  },
];

export default function VermontPage() {
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
              <li className="text-white/80">Vermont</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving All of Vermont
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Vermont
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families anywhere in Vermont, from Burlington to the state's rural towns. Free first trial class, certified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center">
                Book Free Trial Class
              </Link>
              <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Vermont" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center">
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
            <span className="eyebrow mb-4">
              Serving Burlington &amp; Every Vermont Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              Certified Quran Teaching, Wherever You Are in Vermont
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Vermont has a geographic quirk worth knowing: Burlington, its largest city, sits roughly 90 miles from Montreal, Canada, compared to about 220 miles from Boston. Vermont's day-to-day orientation genuinely leans north in a way most of New England doesn't. Vermont's Muslim community is small even by regional standards, centered mostly around Burlington, and families in the state's many rural towns can be a genuine drive from the nearest mosque, especially once a real Vermont winter sets in.
              </p>
              <p>
                Even with that northward pull, our{" "}
                <Link href="/locations/boston" className="text-gold font-semibold hover:underline">Boston location page</Link>{" "}
                remains the nearest Ease Quran Metro Tier community, since it's the closest US city we serve. Our online classes reach you directly in Vermont either way, no drive toward Boston or Montreal required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">Our Curriculum</span>
            <h2 className="heading-2 text-navy mb-6">Courses for Vermont Families</h2>
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
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="heading-2 text-navy">Frequently Asked Questions. Vermont</h2>
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
        headline="Certified Quran Education for Vermont Families"
        subtext="From Burlington to the smallest Vermont town. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Vermont"
      />
    </>
  );
}
