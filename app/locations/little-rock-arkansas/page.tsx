import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Little Rock, Arkansas",
  description:
    "Certified online Quran classes for Muslim families in Little Rock, Arkansas. Wifaq ul Madaris certified teachers, free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/little-rock-arkansas",
  },
  openGraph: {
    title: "Online Quran Classes in Little Rock, Arkansas | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Little Rock and Arkansas, without the long drive to Memphis or Dallas for Islamic education.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Little Rock, Arkansas", item: "https://easequran.com/locations/little-rock-arkansas" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families across the Little Rock metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "Little Rock",
    containedInPlace: { "@type": "State", name: "Arkansas" },
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
      name: "Can I find a Quran teacher near me in Little Rock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Little Rock, our online Quran academy serves any family across Arkansas searching for a Quran teacher near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do families here really drive to Memphis or Dallas for Islamic education?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For some structured programs, yes, that has been the reality for a number of Arkansas families. Ease Quran offers a practical weekly alternative that doesn't require a multi-hour trip out of state.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families throughout Arkansas, not just Little Rock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve families across the entire state, since online classes reach a small Arkansas town exactly as easily as they reach Little Rock itself.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Arkansas families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female Quran teacher for sisters in Little Rock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many Arkansas families specifically request her for their daughters.",
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
    question: "Can I find a Quran teacher near me in Little Rock?",
    answer:
      "Yes. While we are not a physical school in Little Rock, our online Quran academy works for any family across Arkansas searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, no matter where in the state you are.",
  },
  {
    question: "Do families here really drive to Memphis or Dallas for Islamic education?",
    answer:
      "For certain structured programs, yes, this has genuinely been the situation for some Arkansas families, since Little Rock's Muslim community, while real and active, is smaller than what's available in Memphis or Dallas a few hours away. A multi-hour round trip is not a sustainable weekly routine for most working families. Ease Quran offers a practical, honest alternative, certified one-on-one instruction delivered to your home every week without the drive out of state.",
  },
  {
    question: "Do you serve families throughout Arkansas, not just Little Rock?",
    answer:
      "Yes. Arkansas is a largely rural state, and many Muslim families live well outside Little Rock with little to no local Islamic education infrastructure nearby. Since all classes are conducted online via Zoom, a family in a small Arkansas town gets the exact same access to a certified teacher as a family living in Little Rock itself.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Arkansas families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in Little Rock?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Arkansas families specifically request her for their daughters, and we are proud to offer this option. Simply mention your preference when booking your free trial.",
  },
];

export default function LittleRockArkansasPage() {
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
              <li className="text-white/80">Little Rock, Arkansas</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Little Rock &amp; All of Arkansas
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Little Rock, Arkansas
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Little Rock and Arkansas, without the long drive to Memphis or Dallas. Quality Quran instruction delivered to your home, on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Little%20Rock%20Arkansas"
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
              Little Rock's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Real Community, Honest About Its Limits
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Little Rock is home to Arkansas's main Muslim community, a genuine but modest group of South Asian, Arab, and African families anchored around the state capital, with families further out across the Arkansas Delta and beyond having even fewer local options. We'd rather be straightforward about this than oversell it: Arkansas's Muslim community is one of the smaller ones in the country, and Little Rock, while it has real mosques and real community life, doesn't have the depth of institutions that a family in Memphis, Dallas, or a larger metro can rely on.
              </p>
              <p>
                That gap has led a number of Arkansas families to consider driving to Memphis or Dallas, both a few hours away, for more structured Islamic education programs. For most working families, that kind of multi-hour round trip simply isn't sustainable on a weekly basis. Online Quran education offers a genuinely practical alternative here, not a lesser option compared to a physical school, but a consistent, certified teacher every week without the drive out of state.
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
              Why Online Works for Little Rock Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Little Rock and Arkansas Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">No Drive to Memphis or Dallas</h3>
                <p className="text-grey text-sm leading-relaxed">
                  If a structured program has meant a multi-hour trip out of state, online classes close that gap completely. Your child opens Zoom at home, anywhere in Arkansas.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Consistent Every Week</h3>
                <p className="text-grey text-sm leading-relaxed">
                  An occasional out-of-state visit can't match weekly instruction. Online classes give your child a consistent, certified teacher every single week.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">The Same Quality, Right at Home</h3>
                <p className="text-grey text-sm leading-relaxed">
                  You shouldn't need a bigger city nearby to get certified, one-on-one Quran instruction. Ease Quran brings the same quality of teaching to Arkansas families anywhere else gets.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Little%20Rock%20Arkansas" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Quran Classes for Kids and Adults in Little Rock
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across Arkansas.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Little Rock</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Central Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your Arkansas family. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for a Quran Teacher Near You in Little Rock?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Little Rock or
              anywhere in Arkansas, we understand the local options can be limited. Because every Ease
              Quran class is live and online, Arkansas families connect one-on-one with certified
              teachers without driving anywhere. You get the convenience of a teacher right in your
              home, with none of the out-of-state trip, parking, or fixed group schedule of a distant
              center.
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
                Frequently Asked Questions. Little Rock, Arkansas
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
        headline="Certified Quran Education Across Little Rock and All of Arkansas"
        subtext="No drive to Memphis or Dallas required. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Little Rock Arkansas"
      />
    </>
  );
}
