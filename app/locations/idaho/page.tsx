import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";

export const metadata: Metadata = {
  title: "Online Quran Classes in Idaho",
  description:
    "Certified online Quran classes for Muslim families across Idaho, including Boise. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/idaho",
  },
  openGraph: {
    title: "Online Quran Classes in Idaho | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Idaho, including Boise and every smaller Idaho community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Idaho", item: "https://easequran.com/locations/idaho" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description: "Certified online Quran classes for Muslim families throughout Idaho.",
  areaServed: { "@type": "State", name: "Idaho" },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Idaho spans two time zones. How do you handle that?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carefully. Idaho is genuinely split down the middle: the northern panhandle around Coeur d'Alene runs on Pacific Time, while Boise and the rest of the state run on Mountain Time, a full hour apart within one state. We confirm your child's exact class time against whichever zone your town actually uses at booking, so there's never any confusion.",
      },
    },
    {
      "@type": "Question",
      name: "Is Boise's Muslim community big enough to have real options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's genuinely small, concentrated mostly around Boise, with families scattered much further out across the rest of the state. Rather than claim a specific number of students we can't verify, we'd invite you to be one of our first Boise-area families and judge the quality for yourself with a free trial.",
      },
    },
    {
      "@type": "Question",
      name: "I'm not near Boise. Would Salt Lake City actually be closer for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Possibly, depending where in Idaho you are. Our Salt Lake City location page covers the nearest Metro Tier community for southern Idaho families, though northern Idaho, in the Pacific Time panhandle, sits closer to Seattle than to Salt Lake City. Either way, our online classes reach your Idaho home directly, so the comparison is really just for context.",
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
    question: "Idaho spans two time zones. How do you handle that?",
    answer:
      "Carefully, and it's a genuinely fair question. Idaho is one of the few states actually split by a time zone line: the northern panhandle around Coeur d'Alene runs on Pacific Time, while Boise and the rest of the state run on Mountain Time, a full hour apart within one state's borders. We confirm your child's exact class time against whichever zone your town actually uses, both at booking and again before each session, so there's never any confusion about when class starts.",
  },
  {
    question: "Is Boise's Muslim community big enough to have real options?",
    answer:
      "It's genuinely small, concentrated mostly around Boise, with families scattered much further out across the rest of the state and fewer local teachers or programs to choose from than a bigger city offers. Rather than claim a specific number of students we can't verify, we'd simply invite you to be one of our first Boise-area families and see the quality for yourself with a free trial class.",
  },
  {
    question: "I'm not near Boise. Would Salt Lake City actually be closer for me?",
    answer:
      "Possibly, depending on where in Idaho you live. Our Salt Lake City location page covers the nearest Metro Tier community for most of southern Idaho, but if you're in the northern panhandle on Pacific Time, you're honestly sitting closer to Seattle than to Salt Lake City. Either way, our online classes reach your Idaho home directly over Zoom, so the comparison is mostly just useful context, not a decision you need to make.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Plans start from $40 per month, and every family gets a completely free first trial class with no credit card required, so you can experience a lesson before committing to anything.",
  },
];

export default function IdahoPage() {
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
              <li className="text-white/80">Idaho</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving All of Idaho
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Idaho
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families anywhere in Idaho, from Boise to the state's smaller towns. Free first trial class, certified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center">
                Book Free Trial Class
              </Link>
              <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Idaho" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center">
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
              Serving Boise &amp; Every Idaho Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              Certified Quran Teaching, Wherever You Are in Idaho
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Idaho has a genuine geographic quirk that shapes daily life here more than people expect: the state is split across two time zones. The northern panhandle, around Coeur d'Alene and Sandpoint, runs on Pacific Time, while Boise and the rest of the state run on Mountain Time, a full hour apart within one state's borders. Idaho's Muslim community is genuinely small and concentrated mostly around Boise, with families in the panhandle and other outlying areas often further from a mosque than the map distance alone suggests, once that time-zone split is factored into any shared community event or class schedule.
              </p>
              <p>
                Depending where you are in Idaho, our{" "}
                <Link href="/locations/salt-lake-city-utah" className="text-gold font-semibold hover:underline">Salt Lake City location page</Link>{" "}
                covers the nearest Metro Tier community for most of southern Idaho, though families in the Pacific Time panhandle are honestly sitting closer to Seattle. Either way, our online classes reach your Idaho home directly, on whichever time zone your town actually uses.
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
            <h2 className="heading-2 text-navy mb-6">Courses for Idaho Families</h2>
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
              <h2 className="heading-2 text-navy">Frequently Asked Questions. Idaho</h2>
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
        headline="Certified Quran Education for Idaho Families"
        subtext="From Boise to the smallest Idaho town. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Idaho"
      />
    </>
  );
}
