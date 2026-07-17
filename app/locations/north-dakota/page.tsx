import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";

export const metadata: Metadata = {
  title: "Online Quran Classes in North Dakota",
  description:
    "Certified online Quran classes for Muslim families across North Dakota, including Fargo. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/north-dakota",
  },
  openGraph: {
    title: "Online Quran Classes in North Dakota | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across North Dakota, including Fargo and every smaller North Dakota community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "North Dakota", item: "https://easequran.com/locations/north-dakota" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description: "Certified online Quran classes for Muslim families throughout North Dakota.",
  areaServed: { "@type": "State", name: "North Dakota" },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "I heard western North Dakota got much more diverse during the oil boom. Is that still relevant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's part of the state's real economic history. The Bakken oil boom brought a wave of workers from across the country and beyond to towns like Williston in western North Dakota, a well-documented shift that changed the region's makeup. That diversity is part of why online Quran classes make sense here, families relocated for work don't always land near an established Islamic community.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have students in Fargo already?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're actively welcoming North Dakota families right now. Rather than claim a number we can't verify, we'd invite you to be one of our first Fargo-area students with a free trial class.",
      },
    },
    {
      "@type": "Question",
      name: "Is Minneapolis really the closest bigger city for North Dakota families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For eastern North Dakota, yes. Fargo sits on the I-94 corridor roughly 240 miles from Minneapolis-St. Paul, a genuine and well-traveled connection for this part of the state. Families further west, near the oil patch, are considerably further from any Metro Tier city we serve, which is exactly where online classes matter most.",
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
    question: "I heard western North Dakota got much more diverse during the oil boom. Is that still relevant?",
    answer:
      "It's part of the state's real, well-documented economic history. The Bakken oil boom of the 2000s and 2010s brought a wave of workers from across the country and internationally to towns like Williston in western North Dakota, a genuine shift that changed the region's makeup in ways that predate most people's mental picture of the state. That history is part of why online Quran classes make practical sense here: families who relocated for oil-industry work don't always land anywhere near an established Islamic community, no matter how the town's overall population has grown.",
  },
  {
    question: "Do you have students in Fargo already?",
    answer:
      "We're actively welcoming North Dakota families right now. Rather than claim a specific number we can't verify, we'd simply invite you to be one of our first Fargo-area students and see the quality for yourself with a free trial class.",
  },
  {
    question: "Is Minneapolis really the closest bigger city for North Dakota families?",
    answer:
      "For eastern North Dakota, genuinely yes. Fargo sits on the I-94 corridor roughly 240 miles from Minneapolis-St. Paul, a real and commonly traveled connection for this part of the state, closer than any other Metro Tier city we serve. Families further west, near the Bakken oil patch, are considerably more remote from any of our city pages, which is exactly the gap online classes are built to close.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Plans start from $40 per month, and every family gets a completely free first trial class with no credit card required, so you can experience a lesson before committing to anything.",
  },
];

export default function NorthDakotaPage() {
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
              <li className="text-white/80">North Dakota</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving All of North Dakota
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in North Dakota
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families anywhere in North Dakota, from Fargo to the state's smallest towns. Free first trial class, certified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center">
                Book Free Trial Class
              </Link>
              <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20North%20Dakota" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center">
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
              Serving Fargo &amp; Every North Dakota Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Certified Quran Teaching, Wherever You Are in North Dakota
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                North Dakota's Muslim community centers mostly around Fargo, but the state's more distinctive story is out west. The Bakken oil boom of the 2000s and 2010s brought a genuine, well-documented wave of workers to towns like Williston, reshaping the region's population in ways that predate most people's picture of North Dakota. Families who relocated for that work, along with those in Fargo and everywhere in between, are spread across a large, sparsely populated state where a real North Dakota winter can make any local drive genuinely difficult.
              </p>
              <p>
                Eastern North Dakota, along the I-94 corridor, sits closest to our{" "}
                <Link href="/locations/minneapolis" className="text-gold font-semibold hover:underline">Minneapolis-St. Paul location page</Link>, our nearest Metro Tier community, roughly 240 miles from Fargo. Families further west, near the oil patch, are considerably more remote from any city we serve, which is exactly where online classes matter most.
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
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">Courses for North Dakota Families</h2>
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
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">Frequently Asked Questions. North Dakota</h2>
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
        headline="Certified Quran Education for North Dakota Families"
        subtext="From Fargo to the smallest North Dakota town. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in North Dakota"
      />
    </>
  );
}
