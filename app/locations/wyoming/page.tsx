import type { Metadata } from "next";
import Link from "next/link";
import { startingPriceText } from "@/lib/pricing";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import NearbyLocations from "@/components/NearbyLocations";

export const metadata: Metadata = {
  title: "Online Quran Classes in Wyoming",
  description:
    "Certified online Quran classes for Muslim families across Wyoming, including Cheyenne. Qualified teachers, free trial class available.",
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

const faqs = [
  {
    question: "Which time zone are classes booked in?",
    answer: "Wyoming is on Mountain Time. Share the days and times that suit you, and every class time we confirm will be in your own time zone. When the clocks change in March and November, your class stays at the same local time.",
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

export default function WyomingPage() {
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
              <li className="text-white/80">Wyoming</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving All of Wyoming
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Wyoming
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families anywhere in Wyoming, from Cheyenne to the state's most remote towns. Free first trial class, certified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-200 text-sm text-center">
                Book Your Free Trial
              </Link>
              <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Wyoming" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200 text-sm text-center">
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
              Serving Cheyenne &amp; Every Wyoming Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              Certified Quran Teaching, Wherever You Are in Wyoming
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Wyoming genuinely is the least populous state in the country by Census figures, and its Muslim community reflects that: a good number of Wyoming families have no local mosque or Islamic community within a reasonable drive at all. We're not going to invent a local scene that doesn't exist. What Wyoming does have going for it, more than any other state we serve this way, is proximity: Cheyenne sits roughly 100 miles from Denver on I-25, the shortest distance between any state page on this site and its nearest city page.
              </p>
              <p>
                Our{" "}
                <Link href="/locations/denver-colorado" className="text-gold font-semibold hover:underline">Denver location page</Link>{" "}
                is that nearest city page, genuinely close for southeastern Wyoming families even if a weekly drive still isn't realistic. Our online classes reach you directly in Wyoming, no trip down I-25 required.
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
            <h2 className="heading-2 text-navy mb-6">Courses for Wyoming Families</h2>
            <p className="text-grey leading-relaxed mb-6">
              From Noorani Qaida for first-time readers to Tajweed, Hifz, and Islamic Studies, every course is one-on-one and taught by a qualified teacher. Visit our{" "}
              <Link href="/courses" className="text-gold font-semibold hover:underline">full courses page</Link>{" "}
              to see everything available, including options for kids, adults, and reverts.
            </p>
          </div>
        </div>
      </section>

      <NearbyLocations slug="wyoming" />

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">Questions</span>
              <h2 className="heading-2 text-navy">Frequently Asked Questions. Wyoming</h2>
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
        primaryCta="Book Your Free Trial"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Wyoming"
      />
    </>
  );
}
