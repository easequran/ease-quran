import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Hartford, Connecticut",
  description:
    "Certified online Quran classes for Muslim families in Hartford, Connecticut. Wifaq ul Madaris certified teachers, free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/hartford-connecticut",
  },
  openGraph: {
    title: "Online Quran Classes in Hartford, Connecticut | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Hartford and Connecticut, built around the state's demanding insurance and finance industry.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Hartford, Connecticut", item: "https://easequran.com/locations/hartford-connecticut" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families across the Hartford metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "Hartford",
    containedInPlace: { "@type": "State", name: "Connecticut" },
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
      name: "Can I find a Quran teacher near me in Hartford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Hartford, our online Quran academy serves any family across Connecticut searching for a Quran teacher near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Can classes work around Hartford's insurance and finance industry hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hartford is known as the Insurance Capital of the World, and many parents keep demanding office schedules. Classes are booked in Eastern Time and reschedule easily around a busy week.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families across Connecticut, not just Hartford itself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve families throughout Connecticut, including New Haven, Stamford, and Bridgeport. Since classes are online, which Connecticut city you live in is never a barrier.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Hartford families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female Quran teacher for sisters in Hartford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many Hartford-area families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Can classes work around Connecticut's winter weather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. New England winters can make evening drives difficult. Since classes are online, snow and ice never affect whether your child's lesson happens on schedule.",
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
    question: "Can I find a Quran teacher near me in Hartford?",
    answer:
      "Yes. While we are not a physical school in Hartford, our online Quran academy works for any family across Connecticut searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, wherever you are in the state.",
  },
  {
    question: "Can classes work around Hartford's insurance and finance industry hours?",
    answer:
      "Yes. Hartford has been known as the Insurance Capital of the World for generations, home to major insurance and financial firms that employ a significant share of the region's Muslim professionals. These jobs often mean long office hours, tight quarterly deadlines, or travel. Classes are booked in Eastern Time and reschedule easily around a demanding corporate week.",
  },
  {
    question: "Do you serve families across Connecticut, not just Hartford itself?",
    answer:
      "Yes. Connecticut is a small, densely populated state, and Muslim families are spread across Hartford, New Haven, Stamford, Bridgeport, and many smaller towns in between. Since all classes are conducted online via Zoom, it makes no difference which Connecticut city or town your family calls home.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Hartford-area Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in Hartford?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Hartford-area families specifically request her for their daughters, and we are proud to offer this option. Simply mention your preference when booking your free trial.",
  },
  {
    question: "Can classes work around Connecticut's winter weather?",
    answer:
      "Yes. New England winters bring genuine snow and ice, and an evening drive across town can turn hazardous quickly once a storm rolls in. Since every Ease Quran class happens online, the weather outside never determines whether your child's lesson happens on time.",
  },
];

export default function HartfordConnecticutPage() {
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
              <li className="text-white/80">Hartford, Connecticut</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Hartford &amp; Connecticut
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Hartford, Connecticut
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Hartford and Connecticut, from New Haven to Stamford and Bridgeport. Built for a state defined by insurance and finance careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Hartford%20Connecticut"
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
              Hartford's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Muslim Community Shaped by the Insurance Capital of the World
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Hartford has been known as the Insurance Capital of the World for generations, home to major insurance and financial services firms that have drawn South Asian, Arab, and African Muslim professionals to the region for decades. That professional identity shapes the local Muslim community in a real way, a large share of Hartford-area Muslim parents work in corporate offices with structured but demanding hours, alongside smaller business owners and families in nearby New Haven, Stamford, and Bridgeport who round out Connecticut's broader Muslim population.
              </p>
              <p>
                Connecticut's challenge for Muslim families is a mix of corporate schedule demands and genuine New England winters. Insurance and finance careers often mean long office hours, tight quarterly deadlines, or after-hours calls, leaving little room for a fixed weekly class at a set evening time. Layer on Connecticut's real winter weather, where snow and ice can make an evening drive across town risky for weeks at a stretch, and a physical class becomes something a lot of families struggle to attend consistently. Online Quran education solves both, fitting around a demanding office job and skipping the winter commute entirely.
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
              Why Online Works for Hartford Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Hartford Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">No Winter Commute</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Connecticut winters bring real snow and ice. Online classes remove the evening drive entirely. Your child opens Zoom at home, and the lesson begins right on time.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Fits Corporate Office Hours</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Insurance and finance careers often mean long hours or after-hours calls. Classes reschedule easily around a demanding corporate schedule.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">One Teacher Across All of Connecticut</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Whether your family is in Hartford, New Haven, or Stamford, the same certified teacher meets your child every week without anyone driving across the state.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Hartford%20Connecticut" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Quran Classes for Kids and Adults in Hartford
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across Connecticut.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Hartford</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Eastern Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your Connecticut family. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for a Quran Teacher Near You in Hartford?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Hartford, the best
              teacher for your child may not be the closest one on the map, especially once a New
              England winter is a factor. Because every Ease Quran class is live and online, Connecticut
              families connect one-on-one with certified teachers without driving anywhere. You get the
              convenience of a teacher right in your home, with none of the commute, parking, or fixed
              group schedule of a local center.
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
                Frequently Asked Questions. Hartford, Connecticut
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
        headline="Certified Quran Education Across Connecticut"
        subtext="From Hartford to New Haven, Stamford, and Bridgeport. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Hartford Connecticut"
      />
    </>
  );
}
