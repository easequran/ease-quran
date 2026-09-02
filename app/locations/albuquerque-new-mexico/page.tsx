import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Albuquerque, New Mexico",
  description:
    "Certified online Quran classes for Muslim families in Albuquerque, New Mexico. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/albuquerque-new-mexico",
  },
  openGraph: {
    title: "Online Quran Classes in Albuquerque, New Mexico | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Albuquerque and the high desert Southwest, a small but genuine Muslim community.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Albuquerque, New Mexico", item: "https://easequran.com/locations/albuquerque-new-mexico" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families across the Albuquerque metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "Albuquerque",
    containedInPlace: { "@type": "State", name: "New Mexico" },
  },
  serviceType: "Online Quran Education",
  telephone: "+923195657389",
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
      name: "Can I find a Quran teacher near me in Albuquerque?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Albuquerque, our online Quran academy serves any family across New Mexico searching for a Quran teacher near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Is Albuquerque's Muslim community large enough for good options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Albuquerque's Muslim community is small but genuine, and options can be limited locally. Ease Quran brings the same certified, one-on-one instruction available anywhere else in the country directly into a New Mexico home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families across the wider high desert Southwest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve families throughout New Mexico, including Santa Fe and Rio Rancho. Since classes are online, distances across the high desert are never a barrier.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Albuquerque families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female Quran teacher for sisters in Albuquerque?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many Albuquerque families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Can classes work around a spread-out, car-dependent city?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Albuquerque spreads across a genuinely large area along Route 66. Since classes are online, exactly where in the city you live is never a barrier.",
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
    question: "Can I find a Quran teacher near me in Albuquerque?",
    answer:
      "Yes. While we are not a physical school in Albuquerque, our online Quran academy works for any family across New Mexico searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, wherever you are in the high desert.",
  },
  {
    question: "Is Albuquerque's Muslim community large enough for good options?",
    answer:
      "Albuquerque's Muslim community is genuinely small, made up of South Asian, Arab, and African families who have built a close community life in New Mexico's largest city, alongside a smaller network of families spread further out toward Santa Fe and beyond. Because the local pool of teachers and programs is limited, a lot of Albuquerque families end up with fewer choices than a family in a bigger metro would have. Ease Quran solves that by bringing the same certified, one-on-one instruction available to families anywhere in the country directly into a New Mexico home.",
  },
  {
    question: "Do you serve families across the wider high desert Southwest?",
    answer:
      "Yes. We serve families throughout New Mexico, including Santa Fe, Rio Rancho, and smaller towns scattered across the high desert. Since all classes are conducted online via Zoom, the real distances between New Mexico's spread-out communities are simply not a factor.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Albuquerque-area Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in Albuquerque?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Albuquerque families specifically request her for their daughters, and we are proud to offer this option. Simply mention your preference when booking your free trial.",
  },
  {
    question: "Can classes work around a spread-out, car-dependent city?",
    answer:
      "Yes. Albuquerque spreads out significantly along the old Route 66 corridor and across the mesa, and a drive from one side of the city to the other for an evening class can eat up a real chunk of time. Since all classes are conducted online via Zoom, it makes no difference which part of the city, or which New Mexico town, your family calls home.",
  },
];

export default function AlbuquerqueNewMexicoPage() {
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
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><Link href="/locations" className="hover:text-gold transition-colors">Locations</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80">Albuquerque, New Mexico</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving the High Desert Southwest
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Albuquerque, New Mexico
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Albuquerque and the high desert Southwest. A small but genuine community, matched with a full-sized certified teaching team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Albuquerque%20New%20Mexico"
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
              Albuquerque's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Small, Genuine Community Spread Across the High Desert
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Albuquerque's Muslim community is genuinely small relative to most major American metros, made up of South Asian, Arab, and African families who have built a close community as New Mexico's largest city. The wider state includes families scattered further out toward Santa Fe and other high desert towns, some with little or no local mosque nearby at all. New Mexico's unique blend of Hispanic, Native American, and immigrant cultures gives the region a distinct character, and the local Muslim community sits within that broader multicultural fabric.
              </p>
              <p>
                Albuquerque's practical challenge combines a smaller local community with the city's genuine sprawl. The metro stretches significantly along the old Route 66 corridor and up onto the mesa, and a drive across town for an evening class is a real time cost. Combine that distance with a smaller pool of local teachers and programs than a bigger city offers, and a lot of Albuquerque families end up patching together their child's Quran education inconsistently. Online Quran classes solve both, delivering a certified teacher directly to the home regardless of which part of the sprawling city or which corner of New Mexico a family lives in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">
              Why Online Works for Albuquerque Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Albuquerque Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">No Drive Across the Mesa</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Albuquerque's sprawl along Route 66 makes a cross-town evening drive a real ask. Online classes remove that entirely. Your child opens Zoom at home, wherever in the city that is.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">More Options Than Locally Available</h3>
                <p className="text-grey text-sm leading-relaxed">
                  A smaller local Muslim community means fewer nearby teachers. Online classes open up the same certified teaching pool available to families anywhere in the country.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Reaches the Whole High Desert</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Whether you're in Albuquerque, Santa Fe, or a smaller New Mexico town, the same certified teacher meets your child every week without a single mile of driving.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Albuquerque%20New%20Mexico" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="eyebrow mb-4">Our Curriculum</span>
            <h2 className="heading-2 text-navy mb-6">
              Quran Classes for Kids and Adults in Albuquerque
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across New Mexico.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Noorani Qaida", desc: "Learn Arabic letters, vowels, and Quran reading fundamentals from the very beginning, ideal for young children and first-time adult learners.", href: "/courses/noorani-qaida" },
                { name: "Quran Reading with Tajweed", desc: "Develop accurate, confident Quran recitation through systematic Tajweed instruction from beginner through advanced levels.", href: "/courses/tajweed" },
                { name: "Quran Memorization (Hifz)", desc: "Structured Hifz program for dedicated students, complete with revision cycles and milestone tracking.", href: "/courses/hifz" },
                { name: "Islamic Studies", desc: "Core Islamic knowledge including beliefs, prayer, manners, and Seerah, tailored for young American Muslims.", href: "/courses/islamic-studies" },
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Albuquerque</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Mountain Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your New Mexico family. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for a Quran Teacher Near You in Albuquerque?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Albuquerque, the
              best teacher for your child might not exist within a reasonable drive, given how spread
              out the high desert Southwest can be. Because every Ease Quran class is live and online,
              New Mexico families connect one-on-one with certified teachers without driving anywhere.
              You get the convenience of a teacher right in your home, with none of the commute,
              parking, or fixed group schedule of a local center.
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
                Frequently Asked Questions. Albuquerque, New Mexico
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
        headline="Certified Quran Education Across the High Desert Southwest"
        subtext="From Albuquerque to Santa Fe and every corner of New Mexico. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Albuquerque New Mexico"
      />
    </>
  );
}
