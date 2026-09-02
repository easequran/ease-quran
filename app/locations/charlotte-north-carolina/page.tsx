import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Charlotte, North Carolina",
  description:
    "Certified online Quran classes for Muslim families in Charlotte, North Carolina. Wifaq ul Madaris certified teachers, free trial available.",
  alternates: {
    canonical: "https://easequran.com/locations/charlotte-north-carolina",
  },
  openGraph: {
    title: "Online Quran Classes in Charlotte, North Carolina | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across Charlotte and the surrounding suburbs, built around a demanding, fast-growing city.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Charlotte, North Carolina", item: "https://easequran.com/locations/charlotte-north-carolina" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families across the Charlotte metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "Charlotte",
    containedInPlace: { "@type": "State", name: "North Carolina" },
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
      name: "Can I find a Quran teacher near me in Charlotte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Charlotte, our online Quran academy serves any family across the metro searching for a Quran teacher near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Can classes work around Charlotte's banking and finance industry hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Charlotte is a major banking hub, and many parents keep demanding, early-start schedules. Classes are easy to reschedule around a long work week in Eastern Time.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Muslim community in Charlotte well established?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Charlotte's Muslim community has grown quickly as the city itself has grown, drawing South Asian, Arab, and African families relocating for work. We are proud to serve this newer, fast-growing community.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Charlotte families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female Quran teacher for sisters in Charlotte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many Charlotte families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families in the wider Charlotte metro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve families throughout Mecklenburg County and the surrounding suburbs. Since classes are online, exactly which Charlotte-area suburb you live in is never a barrier.",
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
    question: "Can I find a Quran teacher near me in Charlotte?",
    answer:
      "Yes. While we are not a physical school in Charlotte, our online Quran academy works for any family across the metro searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, no matter which side of the city you're on.",
  },
  {
    question: "Can classes work around Charlotte's banking and finance industry hours?",
    answer:
      "Yes. Charlotte is one of the country's biggest banking hubs, and a large share of the city's Muslim parents work in finance, often with early starts, late closes, or demanding quarterly deadlines. A fixed weekly class at a set time rarely survives that kind of schedule. Online classes reschedule easily around a long work week, and we run everything in Eastern Time to keep it simple.",
  },
  {
    question: "Is the Muslim community in Charlotte well established?",
    answer:
      "Charlotte's Muslim community is one of the fastest-growing in the Southeast, expanding alongside the city itself as South Asian, Arab, and African families relocate here for work in banking, healthcare, and the broader economy. It is a newer community compared to some older East Coast cities, still building out its mosques and institutions, and we are glad to be a resource for families settling in and looking for consistent Islamic education for their children.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Charlotte-area Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in Charlotte?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Charlotte families specifically request her for their daughters, and we are proud to offer this option. Simply mention your preference when booking your free trial.",
  },
  {
    question: "Do you serve families in the wider Charlotte metro?",
    answer:
      "Yes. We serve families throughout Mecklenburg County and the surrounding suburbs, including areas commonly associated with newer Muslim households relocating for work. Since all classes are conducted online via Zoom, exactly which Charlotte-area suburb you call home makes no difference at all.",
  },
];

export default function CharlotteNorthCarolinaPage() {
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
              <li className="text-white/80">Charlotte, North Carolina</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Greater Charlotte
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Charlotte, North Carolina
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across Charlotte and Mecklenburg County. Built for a city growing faster than almost anywhere else in the country, on a schedule that fits demanding careers in banking, healthcare, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Charlotte%20North%20Carolina"
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
              Charlotte's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Young, Fast-Growing Community in One of America's Fastest-Growing Cities
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Charlotte has been one of the fastest-growing cities in the country for years, and its Muslim community has grown right alongside it. South Asian, Arab, and African families have relocated here in large numbers, drawn by jobs in Charlotte's major banking and finance sector as well as healthcare and logistics. Compared to older East Coast Muslim communities in cities like Philadelphia or New York, Charlotte's is newer and still building out its network of mosques and Islamic centers, which means many families are navigating limited local options even as the community itself keeps expanding.
              </p>
              <p>
                The specific challenge for Charlotte's Muslim families is the pace of the city itself. Banking and finance jobs often come with early starts, long hours, and demanding quarterly deadlines, and a rapidly growing population means traffic on I-77 and I-485 keeps getting worse every year. A newer Muslim family that just relocated for work may not yet know where the nearest weekend Islamic school even is. Online Quran classes remove both problems. No commute across a fast-growing, increasingly congested city, and no need to already have your local network figured out before your child can start learning.
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
              Why Online Works for Charlotte Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Charlotte Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Skip Charlotte's Growing Traffic</h3>
                <p className="text-grey text-sm leading-relaxed">
                  As Charlotte's population booms, so does congestion on I-77 and I-485. Online classes remove the drive entirely. Your child opens Zoom at home, and the lesson begins right on schedule.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Built for Banking Hours</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Charlotte's banking and finance professionals often work early starts and long days. Our classes flex around demanding careers, so Quran learning doesn't lose out to a hard week at the office.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">No Local Network Required</h3>
                <p className="text-grey text-sm leading-relaxed">
                  If you just moved to Charlotte for work and haven't found your local masjid yet, that's fine. Online classes start the same day regardless of how new you are to the city.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Charlotte%20North%20Carolina" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Quran Classes for Kids and Adults in Charlotte
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across Charlotte and Mecklenburg County.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Charlotte</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Eastern Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your Charlotte-area family. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for a Quran Teacher Near You in Charlotte?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Charlotte, the best
              teacher for your child may not be the closest one on the map, especially if you are new
              to the city. Because every Ease Quran class is live and online, Charlotte families
              connect one-on-one with certified teachers without driving anywhere. You get the
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
                Frequently Asked Questions. Charlotte, North Carolina
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
        headline="Certified Quran Education Across Charlotte and Mecklenburg County"
        subtext="From Uptown to every corner of the Charlotte metro. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Charlotte North Carolina"
      />
    </>
  );
}
