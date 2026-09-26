import type { Metadata } from "next";
import Link from "next/link";
import { startingPriceText } from "@/lib/pricing";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import NearbyLocations from "@/components/NearbyLocations";

export const metadata: Metadata = {
  title: "Online Quran Classes in North Dakota",
  description:
    "Certified online Quran classes for Muslim families across North Dakota, including Fargo. Qualified teachers, free trial class available.",
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

const faqs = [
  {
    question: "Which time zone are classes booked in?",
    answer: "Most of North Dakota is on Central Time, and the southwest corner is on Mountain Time, so let us know which applies to you. Share the days and times that suit you, and every class time we confirm will be in your own time zone. When the clocks change in March and November, your class stays at the same local time.",
  },
  {
    question: "Can my daughter have a female teacher?",
    answer: "Yes. Ask for a female teacher when you book the free trial, and we can arrange one at most times. The trial and every regular class are then taught by a female teacher.",
  },
  {
    question: "What happens in the free trial class?",
    answer:
      "The trial is a 30-minute one-on-one class on Zoom. The teacher checks the student's current level, teaches a short lesson at that level, recommends a course and how many classes a week, and answers your questions. Parents are welcome to sit in. There is no obligation to continue.",
  },
  {
    question: "How much do classes cost?",
    answer: `${startingPriceText}, and every student's first class is free. Sibling and prepay discounts are on our pricing page.`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function NorthDakotaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
            <span className="eyebrow mb-4">
              Serving All of North Dakota
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in North Dakota
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families anywhere in North Dakota, from Fargo to the state's smallest towns. Free first trial class, certified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm text-center">
                Book Your Free Trial
              </Link>
              <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20North%20Dakota" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200 text-sm text-center">
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
              Serving Fargo &amp; Every North Dakota Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              Certified Quran Teaching, Wherever You Are in North Dakota
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                North Dakota's Muslim community centers mostly around Fargo, but the state's more distinctive story is out west. The Bakken oil boom of the 2000s and 2010s brought a genuine, well-documented wave of workers to towns like Williston, reshaping the region's population in ways that predate most people's picture of North Dakota. Families who relocated for that work, along with those in Fargo and everywhere in between, are spread across a large, sparsely populated state where a real North Dakota winter can make any local drive genuinely difficult.
              </p>
              <p>
                Eastern North Dakota, along the I-94 corridor, sits closest to our{" "}
                <Link href="/locations/minneapolis" className="text-gold font-semibold hover:underline">Minneapolis-St. Paul location page</Link>, our nearest city page, roughly 240 miles from Fargo. Families further west, near the oil patch, are considerably more remote from any city we serve, which is exactly where online classes matter most.
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
            <h2 className="heading-2 text-navy mb-6">Courses for North Dakota Families</h2>
            <p className="text-grey leading-relaxed mb-6">
              From Noorani Qaida for first-time readers to Tajweed, Hifz, and Islamic Studies, every course is one-on-one and taught by a qualified teacher. Visit our{" "}
              <Link href="/courses" className="text-gold font-semibold hover:underline">full courses page</Link>{" "}
              to see everything available, including options for kids, adults, and reverts.
            </p>
          </div>
        </div>
      </section>

      <NearbyLocations slug="north-dakota" />

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="heading-2 text-navy">Frequently Asked Questions. North Dakota</h2>
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
        primaryCta="Book Your Free Trial"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in North Dakota"
      />
    </>
  );
}
