import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";

export const metadata: Metadata = {
  title: "Online Quran Classes in Maine",
  description:
    "Certified online Quran classes for Muslim families across Maine, including Portland. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/maine",
  },
  openGraph: {
    title: "Online Quran Classes in Maine | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Maine, including Portland and every smaller Maine community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Maine", item: "https://easequran.com/locations/maine" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description: "Certified online Quran classes for Muslim families throughout Maine.",
  areaServed: { "@type": "State", name: "Maine" },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "I heard Lewiston has a large Somali community. Do you serve those families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lewiston is nationally known for its Somali immigrant community, well documented since families began settling there in the early 2000s, and it's one of the more established Muslim communities in Maine. We're glad to serve Lewiston families alongside every other Muslim household across the state.",
      },
    },
    {
      "@type": "Question",
      name: "Portland, Maine is small. Are there really enough local options there?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Options are genuinely limited. Portland has Maine's largest city and a modest Muslim community, but nothing like the depth of resources a family in a major metro takes for granted. Rather than claim a specific number of students we can't verify, we'd invite you to be one of our first Portland-area families and judge the quality for yourself with a free trial.",
      },
    },
    {
      "@type": "Question",
      name: "Can classes handle Maine's rural distances and real winters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Maine is the most rural state in New England, and a family outside Portland or Lewiston can be a genuine drive from the nearest mosque even before winter weather is a factor. Since every class is online, distance and snow never affect whether your child's lesson happens on schedule.",
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
    question: "I heard Lewiston has a large Somali community. Do you serve those families?",
    answer:
      "Yes. Lewiston is nationally known for its Somali immigrant community, well documented in national media since families began settling there in the early 2000s, and it has become one of the more established Muslim communities anywhere in Maine. We're glad to serve Lewiston families with the same certified, one-on-one instruction as every other Muslim household across the state, in clear English.",
  },
  {
    question: "Portland, Maine is small. Are there really enough local options there?",
    answer:
      "Honestly, options are limited. Portland has Maine's largest city and a modest, real Muslim community, but nothing close to the depth of teachers and programs a family in a major metro takes for granted. Rather than claim a specific number of students we can't verify, we'd simply invite you to be one of our first Portland-area families and see the quality for yourself with a free trial class.",
  },
  {
    question: "Can classes handle Maine's rural distances and real winters?",
    answer:
      "Yes. Maine is the most rural state in New England, and a family well outside Portland or Lewiston can be a genuine drive from the nearest mosque even before a New England winter is part of the equation. Since every class is conducted online via Zoom, neither distance nor snow ever affects whether your child's lesson happens safely and on schedule.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Plans start from $40 per month, and every family gets a completely free first trial class with no credit card required, so you can experience a lesson before committing to anything.",
  },
];

export default function MainePage() {
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
              <li className="text-white/80">Maine</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving All of Maine
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in Maine
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families anywhere in Maine, from Portland to the state's rural towns. Free first trial class, certified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center">
                Book Free Trial Class
              </Link>
              <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Maine" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center">
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
              Serving Portland &amp; Every Maine Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Certified Quran Teaching, Wherever You Are in Maine
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Maine's Muslim community centers around two very different stories. Portland is the state's largest city and home to its main mosque, but the more nationally notable community is in Lewiston, well documented in national media for the Somali families who began settling there in the early 2000s and built a real, lasting community from it. Beyond these two cities, Maine is the most rural state in New England, and a family in a smaller town can be a genuine drive from either community, especially once a real Maine winter is part of the equation.
              </p>
              <p>
                Many Maine families are also within reach of our{" "}
                <Link href="/locations/boston" className="text-gold font-semibold hover:underline">Boston location page</Link>, our nearest Metro Tier community, though our online classes reach you directly in Maine, whether you're in Portland, Lewiston, or a smaller town in between.
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
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">Courses for Maine Families</h2>
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
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">Frequently Asked Questions. Maine</h2>
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
        headline="Certified Quran Education for Maine Families"
        subtext="From Portland to the smallest Maine town. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Maine"
      />
    </>
  );
}
