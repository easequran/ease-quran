import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Miami, Florida",
  description:
    "Certified online Quran classes for Muslim families in Miami and South Florida. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/miami-florida",
  },
  openGraph: {
    title: "Online Quran Classes in Miami, Florida | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Miami and South Florida, from Doral and Hialeah to Kendall and Pembroke Pines.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Miami, Florida", item: "https://easequran.com/locations/miami-florida" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families across the Miami metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "Miami",
    containedInPlace: { "@type": "State", name: "Florida" },
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
      name: "Can I find a Quran teacher near me in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Miami, our online Quran academy serves any family in Miami-Dade and Broward searching for a Quran teacher or classes near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve the Latino and Hispanic Muslim community in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. South Florida is home to a growing number of Latino and Hispanic Muslim families, and we welcome them alongside every other background. All instruction is in clear English, which works well for multilingual Miami households.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to classes during hurricane season?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We simply reschedule around a storm. Because classes are online, a hurricane watch or a brief power outage does not mean losing a semester, just picking your lesson back up once things are safe and connected again.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Miami families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female Quran teacher for sisters in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many Miami families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with snowbird families who split time between Miami and elsewhere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Since every class happens over Zoom, your child keeps the same teacher and the same weekly schedule whether you are in Miami for the winter or somewhere else for the summer.",
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
    question: "Can I find a Quran teacher near me in Miami?",
    answer:
      "Yes. While we are not a physical school in Miami, our online Quran academy works for any family in Miami-Dade or Broward searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so you get all the benefits of a class near you without any drive on I-95 or the Palmetto.",
  },
  {
    question: "Do you serve the Latino and Hispanic Muslim community in Miami?",
    answer:
      "Yes. South Florida has a growing and well-documented number of Latino and Hispanic Muslims, many of whom came to Islam later in life, alongside long-established South Asian, Arab, and Haitian Muslim communities across Doral, Hialeah, and greater Miami. We welcome every family equally, and since all instruction is in clear, simple English, it works well for households where Spanish, Urdu, Arabic, or Creole might also be spoken at home.",
  },
  {
    question: "What happens to classes during hurricane season?",
    answer:
      "Hurricane season runs roughly June through November in South Florida, and even a storm that never makes landfall can shut down schools and cancel a week of in-person plans. Online classes handle this far better. If a storm is approaching, we simply reschedule your child's lesson, and once the weather clears and the power and internet are back, class picks right back up. No building to reopen, no semester lost.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Miami-area Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in Miami?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Miami families specifically request her for their daughters, and we are proud to offer this option. Simply mention your preference when booking your free trial.",
  },
  {
    question: "Do you work with snowbird families who split time between Miami and elsewhere?",
    answer:
      "Yes. South Florida has a large seasonal population that spends part of the year in Miami and part somewhere else, and a fixed weekly class at a physical location rarely survives that kind of move. Because every Ease Quran lesson happens over Zoom, your child keeps the exact same teacher and the exact same weekly rhythm no matter which home you're calling in from.",
  },
];

export default function MiamiFloridaPage() {
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
              <li className="text-white/80">Miami, Florida</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Miami &amp; South Florida
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Miami, Florida
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Miami-Dade and Broward. From Doral and Hialeah to Kendall and Pembroke Pines, quality Quran instruction delivered to your home on Eastern Time, whatever the weather is doing outside.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Miami%20Florida"
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
              Miami's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Global, Multilingual Muslim Community at the Gateway to the Americas
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                South Florida's Muslim community reflects the region's identity as a crossroads between the United States, the Caribbean, and Latin America. Families here trace their roots to South Asia, the Arab world, and Haiti, alongside a growing number of Latino and Hispanic Muslims who have found Islam through the region's large Spanish-speaking population, a trend especially visible around Doral and Hialeah. Mosques and Islamic centers across Miami-Dade and Broward serve this genuine mix of backgrounds, and English tends to work as the shared language even in homes where Spanish, Urdu, Arabic, or Haitian Creole is also spoken. It's one of the things that sets Miami apart: a Cuban-American revert, a Pakistani engineer, and a Lebanese small business owner might all be raising kids on the same street, each looking for a Quran teacher their child can actually understand and relate to.
              </p>
              <p>
                South Florida's real obstacle isn't distance so much as disruption. Hurricane season runs from June through November, and even a storm that never makes direct landfall is often enough to close schools and cancel a week of in-person plans. Add in the region's dense, unpredictable traffic on I-95 and the Palmetto Expressway, plus a large seasonal population that splits the year between Miami and a home up north, and a fixed weekly class at one physical location becomes genuinely hard to count on. Online Quran education solves this cleanly. A storm outside doesn't cancel a lesson happening over Zoom, and a family that spends winters in Miami and summers elsewhere never has to restart their child's progress with a brand new teacher.
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
              Why Online Works for Miami Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Miami Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Built Around Hurricane Season</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Storm warnings and closed schools during hurricane season don't have to interrupt your child's Quran education. Online classes reschedule easily around a storm, and once the power and internet are back, class picks right back up, no lost semester.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Travels With Snowbird Families</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Plenty of Miami families split the year between South Florida and a home elsewhere. Since every class happens over Zoom, your child keeps the same teacher and the same weekly rhythm no matter which home you're calling in from.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Welcoming Every Background</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Miami's Muslim community includes South Asian, Arab, Haitian, and a growing number of Latino and Hispanic families who came to Islam later in life. Ease Quran teaches every student in clear, simple English, whatever language is spoken at home.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Miami%20Florida" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Quran Classes for Kids and Adults in Miami
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across Miami-Dade and Broward.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Miami</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Eastern Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your Miami-area family. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for a Quran Academy Near You in Miami?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Miami, the best
              teacher for your child may not be the closest one on the map. Because every Ease Quran
              class is live and online, Miami-Dade and Broward families connect one-on-one with certified teachers
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
                Frequently Asked Questions. Miami, Florida
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
        headline="Certified Quran Education Across Miami and South Florida"
        subtext="From Doral and Hialeah to Kendall and Pembroke Pines. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Miami Florida"
      />
    </>
  );
}
