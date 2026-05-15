import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Online Quran Classes in Houston, Texas | Ease Quran Academy",
  description:
    "Certified online Quran classes for Muslim families in Houston, TX. Serving Sugar Land, Katy, Memorial, and all Houston suburbs. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/houston",
  },
  openGraph: {
    title: "Online Quran Classes in Houston, Texas | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families in Houston, TX. Serving Sugar Land, Katy, Memorial, and all Houston suburbs.",
    images: ["/images/og-image.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families in Houston, Texas and surrounding suburbs.",
  areaServed: {
    "@type": "City",
    name: "Houston",
    containedInPlace: { "@type": "State", name: "Texas" },
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
      name: "Do you serve families in Sugar Land and Katy, not just central Houston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we serve the entire Houston metropolitan area including Sugar Land, Katy, the Woodlands, Pearland, and all surrounding suburbs. Since classes are online, your exact location in Greater Houston doesn't matter.",
      },
    },
    {
      "@type": "Question",
      name: "What time slots work for Houston families in Central Time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible CST scheduling including after-school slots (3–7 PM CT), evenings, and weekend morning/afternoon options to accommodate Houston families' varied schedules.",
      },
    },
    {
      "@type": "Question",
      name: "Are your Quran teachers formally certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All our teachers hold certifications from Wifaq ul Madaris Al-Arabia — the most prestigious Islamic education board in the world. Your child learns from real scholars.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female teacher for my daughter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Sister Almas Fatima — a certified Qaria e Quran — is available for sisters and children. Many Houston families prefer this option for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from the Islamic schools in the Houston area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike weekend Islamic schools, our classes are one-on-one, online, and fully flexible. No driving across Houston's sprawling highway system — just open Zoom and start learning.",
      },
    },
  ],
};

const faqs = [
  {
    question: "Do you serve families in Sugar Land and Katy, not just central Houston?",
    answer:
      "Yes — we serve the entire Houston metropolitan area including Sugar Land, Katy, the Woodlands, Pearland, Missouri City, Stafford, and all surrounding suburbs. Since classes are conducted online via Zoom, your exact location in Greater Houston doesn't matter at all. Houston families from Katy all the way to Pasadena can join without any issue.",
  },
  {
    question: "What time slots work for Houston families in Central Time?",
    answer:
      "We offer flexible CST scheduling including after-school slots (3–7 PM CT), evening sessions, and weekend morning and afternoon options. We're well aware of how Houston families' schedules vary — especially with long commutes on I-10 or the Beltway — so we do our best to find a slot that works for your household.",
  },
  {
    question: "Are your Quran teachers formally certified?",
    answer:
      "Absolutely. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia — the most prestigious Islamic education board in the world, whose graduates are recognized by Islamic scholars and institutions globally. Houston Muslim families deserve that standard of credential.",
  },
  {
    question: "Is there a female teacher for my daughter?",
    answer:
      "Yes. Sister Almas Fatima — a certified Qaria e Quran with a B.A. in Islamic Studies — is available exclusively for sisters and children. Many Houston families, particularly from the South Asian and Arab communities, specifically request a female teacher for their daughters. You can make this request when booking your free trial.",
  },
  {
    question: "How is this different from Islamic schools in the Houston area?",
    answer:
      "Unlike weekend Islamic schools or community madrasahs, our classes are fully one-on-one, conducted online, and scheduled entirely around your life. There is no driving across Houston's sprawling highway system, no shared classroom with 20 other children, and no fixed rigid schedule. Your child gets personalized attention from a certified scholar at a time that works for your family.",
  },
];

export default function HoustonPage() {
  return (
    <>
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
              <li className="text-white/80">Houston, Texas</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving Greater Houston
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in Houston, Texas
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Live, one-on-one Quran education for Muslim families across Greater Houston — from Katy and Sugar Land to the Woodlands and Pearland. Certified teachers, flexible scheduling, and a free first class to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Houston%20Texas"
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

      {/* Muslim Community Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Houston's Muslim Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Houston — A Growing Hub of American Muslim Life
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Houston, Texas is home to one of the fastest-growing Muslim communities in the United States, with an estimated population exceeding 100,000 Muslims spread across the city and its sprawling suburbs. The community is remarkably diverse — drawing from large South Asian (Pakistani, Indian, Bangladeshi) populations concentrated in the southwest and Sugar Land corridor, Arab communities particularly in the Memorial and Katy areas, and a longstanding African American Muslim presence throughout the city. Greater Houston boasts dozens of active Islamic centers, full-time and weekend Islamic schools, and a robust network of halal businesses, reflecting how deeply the Muslim community has established itself in the Bayou City. Communities in Sugar Land, Katy, Stafford, and Pearland have all seen significant Islamic infrastructure develop in recent years.
              </p>
              <p>
                Yet for all its communal richness, Houston presents a unique challenge for Muslim families seeking regular Quran education: the city's geography. Houston is famously spread out — covering over 600 square miles — and its car-dependent culture means that driving a child to an Islamic center across town can easily consume 30 to 60 minutes each way, particularly during rush hour on I-10, the Beltway, or Highway 59. For working parents, this commute burden often makes consistent attendance at weekend or weekday Islamic programs simply impractical. Many Houston Muslim families rely on Ease Quran's online model precisely because it removes the commute entirely, delivering certified Quran instruction to their child's home — wherever in Greater Houston that may be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Why Online Works for Houston
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-10">
              Why Houston Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Skip Houston's Highway Traffic</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Houston has some of the worst traffic in the country. Driving your child to an Islamic center across Sugar Land or through the Beltway during the evening rush is a significant time cost. Online classes bring the teacher to your living room — no traffic, no parking, no stress.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">🌡️</div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">No Fighting Houston Heat or Weather</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Houston summers are brutal and storm season is unpredictable. Online classes mean your child never misses a lesson due to extreme heat, flooding, or severe weather warnings — a real benefit in a city that regularly deals with tropical weather disruptions.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">🤲</div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">One-on-One Attention, Always</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Community classes and weekend Islamic schools often have 15–25 students per teacher. At Ease Quran, your child is always the only student in the room. This personalized focus accelerates progress dramatically — Houston families regularly report that their children advance faster than they did in group settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Our Curriculum</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Courses Available for Houston Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              From complete beginners to advanced students, every Ease Quran course is designed for the Western, English-speaking Muslim family.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Noorani Qaida", desc: "The right starting point for any beginner — learn Arabic letters, vowels, and basic joining rules with patience and care.", href: "/courses/noorani-qaida" },
                { name: "Quran Reading with Tajweed", desc: "Master the rules of Tajweed and develop fluent, accurate Quran recitation under expert guidance.", href: "/courses/tajweed" },
                { name: "Quran Memorization (Hifz)", desc: "A structured, supportive Hifz program for students committed to memorizing the entire Quran.", href: "/courses/hifz" },
                { name: "Islamic Studies", desc: "Core Islamic knowledge including prayer, Islamic manners, beliefs, and Seerah for young Muslim learners.", href: "/courses/islamic-studies" },
              ].map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className="group bg-offwhite hover:bg-navy rounded-xl p-6 border border-gray-100 hover:border-navy transition-all duration-200"
                >
                  <h3 className="font-playfair font-bold text-lg text-navy group-hover:text-gold mb-2 transition-colors">{course.name}</h3>
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
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Simple Process</span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">How to Get Started from Houston</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Book Your Free Trial", desc: "WhatsApp us or fill out our quick online form. Share your child's level, age, and schedule preferences. We'll match you with the ideal teacher in minutes." },
                { step: "02", title: "Join the Free Class on Zoom", desc: "Your child attends a live, one-on-one Zoom session with their teacher. No payment required. Just experience the class and see how your child responds." },
                { step: "03", title: "Begin Regular Lessons", desc: "Happy with the trial? We'll set up a weekly schedule that works for your Houston family — consistent, reliable, and entirely from the comfort of your home." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="font-playfair font-bold text-navy text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-navy mb-3">{item.title}</h3>
                  <p className="text-grey text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-6">Family Testimonial</span>
            <blockquote className="font-playfair text-xl md:text-2xl text-white leading-relaxed italic mb-8">
              "We live in Katy and my husband and I both commute into downtown Houston. There was simply no way we could drive our kids to the masjid three times a week. Ease Quran changed everything — both our children now have consistent Quran education without us leaving the house. Their teacher is phenomenal and clearly very knowledgeable."
            </blockquote>
            <footer className="text-white/60 font-semibold">
              — Fatima A., Muslim mother in Katy, Texas
            </footer>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Questions</span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">
                Frequently Asked Questions — Houston, Texas
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Start Quran Classes for Your Houston Family Today"
        subtext="No commute, no traffic, no compromises. Certified Quran education delivered to your home in Sugar Land, Katy, Pearland, the Woodlands, or anywhere in Greater Houston."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
      />
    </>
  );
}
