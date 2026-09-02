import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in New York City",
  description:
    "Certified online Quran classes for Muslim families in New York City. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/new-york",
  },
  openGraph: {
    title: "Online Quran Classes in New York City | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families in New York City. Serving Queens, Brooklyn, the Bronx, and all NYC boroughs.",
    images: [{ url: "https://easequran.com/images/og-image.png", width: 1200, height: 630, alt: "Online Quran Classes in New York City, Ease Quran Academy" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "New York", item: "https://easequran.com/locations/new-york" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families in New York City and the greater NYC metro area.",
  areaServed: {
    "@type": "City",
    name: "New York City",
    containedInPlace: { "@type": "State", name: "New York" },
  },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Quran Courses",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Course", name: "Noorani Qaida" } },
      { "@type": "Offer", itemOffered: { "@type": "Course", name: "Quran Reading with Tajweed" } },
      { "@type": "Offer", itemOffered: { "@type": "Course", name: "Quran Memorization (Hifz)" } },
      { "@type": "Offer", itemOffered: { "@type": "Course", name: "Islamic Studies" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is online Quran learning safe for my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Parents may sit in on any class, classes may be recorded by parents, and there is no private teacher–student contact outside scheduled sessions. Female teachers are available for girls on request, and every teacher is credential-verified.",
      },
    },
    {
      "@type": "Question",
      name: "Can I find Quran classes near me in New York City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in New York City, our online classes serve any family in the New York City area searching for Quran classes or teachers near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Can my child in Queens take online Quran classes with Ease Quran?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We serve families in all NYC boroughs including Queens, Brooklyn, the Bronx, Manhattan, and Staten Island. Classes are held via Zoom from your home, so location within the city doesn't matter.",
      },
    },
    {
      "@type": "Question",
      name: "What time slots are available for New York families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible scheduling including early morning, after-school, evenings, and weekend slots to accommodate the busy schedules of New York City families. Eastern Time slots are available.",
      },
    },
    {
      "@type": "Question",
      name: "Are your teachers certified, not just volunteers from a local masjid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All Ease Quran teachers hold a Wifaq ul Madaris Al-Arabia certification, the most recognized Islamic education credential in the world. These are trained scholars, not volunteers.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female teacher available for my daughter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima, a certified Qaria e Quran, is available exclusively for sisters and children. You can request her when booking your free trial.",
      },
    },
    {
      "@type": "Question",
      name: "How does Ease Quran compare to Islamic schools in New York City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike Islamic schools, we offer fully flexible one-on-one online classes, no commuting across boroughs, no fixed in-person schedules. Your child gets personalized attention from a certified teacher at a time that works for your family.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Is online Quran learning safe for my child?",
    answer:
      "Yes. Parents are welcome to sit in on any class, classes may be recorded by parents, and there is no private teacher–student contact outside scheduled sessions. Female teachers are available for girls on request, and every teacher is credential-verified. See our Child Safety & Parent Rights Policy for full details.",
  },
  {
    question: "Can I find Quran classes near me in New York City?",
    answer:
      "Yes. While we are not a physical school in New York City, our online classes work for any family in the New York City area searching for Quran classes, a Quran teacher, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so you get all the benefits of a class near you without any travel.",
  },
  {
    question: "Can my child in Queens take online Quran classes with Ease Quran?",
    answer:
      "Absolutely. We serve families in all NYC boroughs including Queens, Brooklyn, the Bronx, Manhattan, and Staten Island. Classes are held via Zoom from your home, so location within the city doesn't matter at all, whether you're in Flushing, Jackson Heights, or Bay Ridge.",
  },
  {
    question: "What time slots are available for New York families?",
    answer:
      "We offer flexible scheduling including early morning, after-school (3–6 PM ET), evening, and weekend slots to accommodate the demanding schedules of NYC families. We know city life moves fast, we work around your timetable, not the other way around.",
  },
  {
    question: "Are your teachers certified, not just volunteers from a local masjid?",
    answer:
      "Yes. All Ease Quran teachers hold a Wifaq ul Madaris Al-Arabia certification, the most recognized Islamic education credential in the world. These are trained scholars with years of formal study, not volunteers. This is the credential NYC Muslim parents deserve.",
  },
  {
    question: "Is there a female teacher available for my daughter?",
    answer:
      "Yes. Sister Almas Fatima, a certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many NYC families request her specifically. You can request a female teacher when booking your free trial.",
  },
  {
    question: "How does Ease Quran compare to Islamic schools in New York City?",
    answer:
      "Unlike weekend Islamic schools or community programs, we offer one-on-one online classes with no commuting across boroughs, no shared classroom distractions, and no fixed in-person schedules. Your child receives personalized attention from a certified teacher at a time that fits your family's New York lifestyle.",
  },
];

export default function NewYorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li className="text-white/30">/</li>
              <li>
                <Link href="/locations" className="hover:text-gold transition-colors">Locations</Link>
              </li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">New York City</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving New York City
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in New York City
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across all five boroughs. Whether you are in Queens, Brooklyn, the Bronx, Manhattan, or Staten Island, your child can start learning Quran today from a qualified teacher, without leaving home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20New%20York"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-sm text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
            <TrustBadges dark />
          </div>
        </div>
      </section>

      <TeacherStrip />

      {/* Muslim Community Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">
              New York's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              One of the Largest Muslim Communities in America
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                New York City is home to one of the largest and most diverse Muslim communities in the entire United States, with an estimated population of over 800,000 Muslims spread across the five boroughs. The city's Muslim life is deeply woven into its cultural fabric, from the dense concentration of mosques and Islamic centers in Queens neighborhoods like Jackson Heights, Flushing, and Jamaica, to the vibrant Muslim communities of Bay Ridge and Flatbush in Brooklyn, and the growing African American Muslim presence throughout the Bronx. The greater metropolitan area includes dozens of active masjids, weekend Islamic schools, and community organizations that serve families from South Asian, Arab, West African, and African American backgrounds.
              </p>
              <p>
                Despite this rich communal infrastructure, New York City's sheer size and pace of life creates real barriers for Muslim families seeking consistent, quality Quran education for their children. Long commutes across boroughs, packed after-school schedules, and the competitive demands of New York public and private schools often leave little room for attending in-person Islamic education programs. Many New York Muslim families find that weekend madrasah slots fill quickly, qualified local teachers are hard to find and often unavailable, and the commute to a reputable Islamic center can consume an hour each way. These are exactly the challenges that Ease Quran was built to solve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online Quran Classes */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">
              Why Online Works for NYC Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why New York City Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">No More Borough-Crossing Commutes</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Getting from Queens to a masjid in Brooklyn for a 45-minute class is a two-hour round trip on the subway. Online classes eliminate that entirely. Your child sits down at home after school, opens Zoom, and the lesson begins, no train delays, no parking stress, no rush.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Fits the NYC Schedule</h3>
                <p className="text-grey text-sm leading-relaxed">
                  New York kids are busy, extracurriculars, homework, family commitments, and the competitive pace of NYC schooling leave narrow windows. We schedule Quran classes around your life, not the other way around, offering flexible slots from early morning through evening seven days a week.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Certified Teachers, Not Volunteers</h3>
                <p className="text-grey text-sm leading-relaxed">
                  In a city as competitive as New York, you expect credentials. Our teachers hold Wifaq ul Madaris Al-Arabia certifications, the gold standard of Islamic education. Every lesson is one-on-one, structured, and measurably progressive. Your child's Quran education should be held to the same standard as any other subject.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof, Pricing & CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link href="/pricing" className="block max-w-3xl mx-auto mb-12 bg-navy rounded-2xl px-6 py-4 text-center text-sm text-white hover:bg-navy/90 transition-colors">
            <span className="font-semibold">Plans from $40/month</span>
            <span className="text-white/70"> &middot; most families choose Steady at $55/month for 3 classes/week &middot; </span>
            <span className="text-gold font-semibold">first class free &rarr;</span>
          </Link>

          <WhatsAppReviewsRow heading="Real Students, Real Results" subline="We've taught Western, English-speaking students across the UK and USA." />

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-colors text-sm text-center">
              Book Free Trial Class
            </Link>
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20New%20York" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">
              Our Curriculum
            </span>
            <h2 className="heading-2 text-navy mb-6">
              Courses Available for NYC Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Whether your child is a complete beginner or ready to advance their recitation, we have a structured course for every level.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Noorani Qaida", desc: "Foundation course for beginners, learn Arabic letters and pronunciation from scratch.", href: "/courses/noorani-qaida" },
                { name: "Quran Reading with Tajweed", desc: "Correct recitation rules taught systematically for fluent, beautiful Quran reading.", href: "/courses/tajweed" },
                { name: "Quran Memorization (Hifz)", desc: "Structured Hifz program for children and adults committed to memorizing the Quran.", href: "/courses/hifz" },
                { name: "Islamic Studies", desc: "Fundamentals of faith, prayer, Islamic manners, and Seerah for young learners.", href: "/courses/islamic-studies" },
              ].map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className="group bg-offwhite hover:bg-navy rounded-xl p-6 border border-gray-100 hover:border-navy transition-all duration-200"
                >
                  <h3 className="card-title group-hover:text-gold mb-2 transition-colors">{course.name}</h3>
                  <p className="text-grey group-hover:text-white/70 text-sm leading-relaxed transition-colors">{course.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow mb-4">Simple Process</span>
              <h2 className="heading-2 text-navy mb-4">How to Get Started from New York City</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Book Your Free Trial", desc: "Fill out our quick form or WhatsApp us. Tell us your child's age, current level, and preferred schedule. We'll match you with the right teacher." },
                { step: "02", title: "Attend the Free Class", desc: "Your child joins a live one-on-one Zoom session with their teacher. No pressure, no payment required, just an hour to experience the Ease Quran method." },
                { step: "03", title: "Start Regular Classes", desc: "If you're happy, and our NYC families almost always are, we set up a recurring weekly schedule that fits your routine and your child begins their Quran journey." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="font-playfair font-bold text-navy text-lg">{item.step}</span>
                  </div>
                  <h3 className="card-title mb-3">{item.title}</h3>
                  <p className="text-grey text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Near Me */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">
              Quran Classes Near You
            </span>
            <h2 className="heading-2 text-navy mb-6">
              Looking for Quran Classes Near You in New York City?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in New York City, the best
              teacher for your child may not be the closest one on the map. Because every Ease Quran
              class is live and online, New York City families connect one-on-one with certified teachers
              without driving anywhere. You get the convenience of a teacher right in your home, with
              none of the commute, parking, or fixed group schedule of a local center.
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
              <h2 className="heading-2 text-navy">
                Frequently Asked Questions. New York City
              </h2>
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
        headline="Start Your Child's Quran Journey from New York City"
        subtext="Join Muslim families across Queens, Brooklyn, the Bronx, and beyond who trust Ease Quran for authentic, certified Quran education. Your first class is completely free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in New York"
      />
    </>
  );
}
