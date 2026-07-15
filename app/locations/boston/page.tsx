import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Boston, Massachusetts",
  description:
    "Certified online Quran classes for Muslim families in Boston. Serving Cambridge, Quincy, Malden, Everett, and all Greater Boston suburbs. Wifaq ul Madaris certified teachers, free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/boston",
  },
  openGraph: {
    title: "Online Quran Classes in Boston, Massachusetts | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families in Greater Boston, serving Cambridge, Quincy, Malden, and every New England suburb.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Boston", item: "https://easequran.com/locations/boston" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families in the Greater Boston metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "Boston",
    containedInPlace: { "@type": "State", name: "Massachusetts" },
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
      name: "Can I find Quran classes near me in Boston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Boston, our online classes serve any family in Greater Boston searching for Quran classes or teachers near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families in Cambridge, Quincy, and Malden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve the entire Greater Boston area including Cambridge, Quincy, Malden, Everett, Somerville, Brookline, and every New England suburb with a Muslim family. Online classes serve the whole region equally.",
      },
    },
    {
      "@type": "Question",
      name: "Can classes work around a busy academic and work schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Boston's many university and hospital-affiliated families often keep demanding schedules. Our online classes are fully flexible and can be booked around academic terms, rotating shifts, and busy weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Boston families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female teacher for sisters in Boston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many Greater Boston families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international student and visiting scholar families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Boston's large international student and visiting scholar population means many Muslim families are here temporarily. Our fully online model travels with you, whether you are in Boston for a semester or for good.",
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
    question: "Can I find Quran classes near me in Boston?",
    answer:
      "Yes. While we are not a physical school in Boston, our online classes work for any family in Greater Boston searching for Quran classes, a Quran teacher, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so you get all the benefits of a class near you without any travel.",
  },
  {
    question: "Do you serve families in Cambridge, Quincy, and Malden?",
    answer:
      "Yes. We serve the entire Greater Boston area including Cambridge, Quincy, Malden, Everett, Somerville, Brookline, Roxbury, Revere, and every New England suburb across Massachusetts with a Muslim family. Since all classes are online via Zoom, your location anywhere in Greater Boston is no barrier whatsoever.",
  },
  {
    question: "Can classes work around a busy academic and work schedule?",
    answer:
      "Yes. Boston is home to dozens of universities, teaching hospitals, and research institutions, and many Muslim families here keep demanding academic terms, rotating clinical shifts, or research deadlines. Our online classes are fully flexible, rescheduled easily, and can be booked around exam periods, hospital rotations, or a busy work week, so Quran learning never gets pushed aside.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Boston-area Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female teacher for sisters in Boston?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Greater Boston families from the South Asian and Arab communities specifically request her for their daughters and wives, and we are proud to provide this important option. Simply indicate your preference when booking.",
  },
  {
    question: "Do you work with international student and visiting scholar families?",
    answer:
      "Yes. Boston's universities and research institutions draw a large international student and visiting scholar population, meaning many Muslim families are here for a semester, a fellowship, or a few years before moving on. Our fully online model travels with you wherever you go next, so your child's Quran education never has to restart because of a move.",
  },
];

export default function BostonPage() {
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
              <li className="text-white/80">Boston, Massachusetts</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving Greater Boston
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in Boston, Massachusetts
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Greater Boston. From Cambridge and Somerville to Quincy, Malden, and Everett, quality Quran instruction delivered to your home, on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Boston%20Massachusetts"
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
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Greater Boston's Muslim Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              A Diverse, Academic Muslim Community in New England's Hub
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Greater Boston is home to a well-established and rapidly growing Muslim community of well over 100,000, anchored by the Islamic Society of Boston Cultural Center in Roxbury, the largest mosque in New England. The community is remarkably diverse, reflecting Boston's role as a global hub for higher education, medicine, and research, with sizable South Asian, Arab, and African Muslim populations alongside a steady stream of international students and visiting scholars from around the Muslim world. Cambridge and Somerville host large numbers of Muslim graduate students and academics, while Quincy, Malden, and Everett have become home to established, multigenerational Muslim families, many from South Asian and North African backgrounds. Boston's Muslim community is also notably young and highly educated, shaped by the region's concentration of universities and teaching hospitals.
              </p>
              <p>
                The challenge for Greater Boston Muslim families is the region's dense traffic and demanding academic and professional schedules. Roads like I-93, the Mass Pike, and Storrow Drive are notoriously congested, and a family in Quincy wanting to reach an Islamic center in Cambridge can face a lengthy, unpredictable commute. Many parents and older students also juggle rotating hospital shifts, research deadlines, or full academic course loads that make fixed weekly classroom schedules difficult to commit to. Online Quran education solves this problem completely, bringing certified instruction to every Greater Boston household on a schedule that bends around your life, not the other way around.
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
              Why Online Works for Boston Families
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-10">
              Why Boston Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Skip Boston's Notorious Traffic</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Greater Boston's roads are consistently congested, and driving your child to an Islamic center across town after school or work is a real time cost. Online classes eliminate that entirely. Your child opens Zoom at home, and the lesson begins, right on schedule.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Fits Around Academic and Shift Schedules</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Boston's university and hospital-affiliated families often juggle unpredictable schedules. Our classes are easy to reschedule and flex around exam periods, clinical rotations, or a demanding work week, so Quran learning stays consistent.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Welcoming All Muslim Communities</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Greater Boston's Muslim community spans South Asian, Arab, African, and international student backgrounds. Ease Quran is a welcoming space for every Muslim family, regardless of cultural background or how long you plan to stay in the area. All instruction is in clear English.
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
            <span className="text-white/70"> &middot; most families choose $79/month for 12 classes &middot; </span>
            <span className="text-gold font-semibold">first class free &rarr;</span>
          </Link>

          <WhatsAppReviewsRow heading="Real Students, Real Results" subline="We've taught Western, English-speaking students across the UK and USA." />

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-trial" className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-colors text-sm text-center">
              Book Free Trial Class
            </Link>
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Boston%20Massachusetts" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Our Curriculum</span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Courses Available for Boston Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across Greater Boston.
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
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">How to Get Started from Boston</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Eastern Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your Boston-area family. Reliable, flexible, and always from the comfort of your home." },
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

      {/* Near Me */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Quran Classes Near You
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Looking for Quran Classes Near You in Boston?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Boston, the best
              teacher for your child may not be the closest one on the map. Because every Ease Quran
              class is live and online, Greater Boston families connect one-on-one with certified teachers
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
              <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">Questions</span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy">
                Frequently Asked Questions. Boston, Massachusetts
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
        headline="Certified Quran Education Across Greater Boston"
        subtext="From Cambridge and Somerville to Quincy, Malden, and Everett. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Boston Massachusetts"
      />
    </>
  );
}
