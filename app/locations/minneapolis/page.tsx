import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Minneapolis-St. Paul, Minnesota",
  description:
    "Certified online Quran classes for Muslim families in Minneapolis-St. Paul. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/minneapolis",
  },
  openGraph: {
    title: "Online Quran Classes in Minneapolis-St. Paul | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across the Twin Cities, serving Minneapolis, St. Paul, and every Somali and South Asian Muslim community in Minnesota.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Minneapolis-St. Paul", item: "https://easequran.com/locations/minneapolis" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families in the Minneapolis-St. Paul metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "Minneapolis",
    containedInPlace: { "@type": "State", name: "Minnesota" },
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
      name: "Can I find Quran classes near me in Minneapolis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Minneapolis, our online classes serve any family in the Twin Cities searching for Quran classes or teachers near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve the Somali Muslim community in the Twin Cities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Minneapolis-St. Paul is home to one of the largest Somali Muslim communities in the United States, and we are proud to serve Somali families alongside every other Muslim community in the Twin Cities.",
      },
    },
    {
      "@type": "Question",
      name: "What about Minnesota's harsh winters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online classes remove winter weather as a barrier entirely. No family needs to drive on icy roads or through snowstorms to reach a Quran class, every lesson happens safely from home.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Twin Cities families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female teacher for sisters in Minneapolis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many Twin Cities families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families in both Minneapolis and St. Paul suburbs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve the entire Twin Cities metro including St. Paul, Bloomington, Eden Prairie, Brooklyn Park, Burnsville, and every suburb with a Muslim family. Online classes serve the whole metro area equally.",
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
    question: "Can I find Quran classes near me in Minneapolis?",
    answer:
      "Yes. While we are not a physical school in Minneapolis, our online classes work for any family in the Twin Cities searching for Quran classes, a Quran teacher, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so you get all the benefits of a class near you without any travel.",
  },
  {
    question: "Do you serve the Somali Muslim community in the Twin Cities?",
    answer:
      "Yes. Minneapolis-St. Paul is home to one of the largest and most established Somali Muslim communities in the United States, concentrated around neighborhoods like Cedar-Riverside and spread throughout the metro. We are proud to serve Somali families alongside South Asian, Arab, and every other Muslim community in the Twin Cities, with teachers experienced in working with students from diverse cultural backgrounds.",
  },
  {
    question: "What about Minnesota's harsh winters?",
    answer:
      "Minnesota winters bring icy roads, heavy snow, and dangerously cold temperatures that can make any drive across town risky, especially for evening classes after Maghrib. Online classes remove winter weather as a barrier entirely. No family needs to scrape a windshield or drive on black ice to reach a Quran class, every lesson happens safely and reliably from home, all year round.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Twin Cities Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female teacher for sisters in Minneapolis?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Twin Cities families from the Somali and South Asian communities specifically request her for their daughters and wives, and we are proud to provide this important option. Simply indicate your preference when booking.",
  },
  {
    question: "Do you serve families in both Minneapolis and St. Paul suburbs?",
    answer:
      "Yes. We serve the entire Twin Cities metro area including St. Paul, Bloomington, Eden Prairie, Brooklyn Park, Burnsville, Woodbury, Maple Grove, and every suburb across Minnesota with a Muslim family. Since all classes are online via Zoom, your location anywhere in the metro is no barrier whatsoever.",
  },
];

export default function MinneapolisPage() {
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
              <li className="text-white/80">Minneapolis-St. Paul, Minnesota</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase mb-4">
              Serving the Twin Cities
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Online Quran Classes in Minneapolis-St. Paul, Minnesota
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across the Twin Cities, home to one of America's largest Somali Muslim communities. Quality Quran instruction delivered to your home, on your schedule, no matter the weather.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Minneapolis%20Minnesota"
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
              The Twin Cities' Muslim Community
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-6">
              Home to One of America's Largest Somali Muslim Communities
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                The Minneapolis-St. Paul metropolitan area, commonly known as the Twin Cities, is home to the largest Somali population in the United States, and by extension one of the largest and most vibrant Somali Muslim communities in the country. Since the 1990s, tens of thousands of Somali families have settled across Minneapolis, particularly in the Cedar-Riverside neighborhood, building mosques, businesses, and community institutions that have made the Twin Cities a genuine hub of Somali-American Muslim life. Alongside this community, the Twin Cities are home to significant South Asian, Arab, and East African Muslim populations, with active masjids and Islamic centers spread across Minneapolis, St. Paul, and the surrounding suburbs. The region's overall Muslim population is estimated at over 150,000, making it one of the most religiously significant Muslim communities in the Midwest.
              </p>
              <p>
                The challenge for Twin Cities Muslim families is Minnesota's notoriously harsh winters. From late November through March, sub-zero temperatures, snow, and icy roads make evening drives to a masjid or Islamic center genuinely difficult and sometimes unsafe, especially after Maghrib when many weekday classes would otherwise be held. Weekend Islamic schools are concentrated in specific neighborhoods and can require a significant commute for families in outer suburbs like Eden Prairie, Woodbury, or Maple Grove. Online Quran education solves this problem completely, bringing certified instruction to every Twin Cities household safely, warmly, and reliably, regardless of what the Minnesota weather is doing outside.
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
              Why Online Works for Twin Cities Families
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-10">
              Why Minneapolis-St. Paul Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">No Winter Driving, Ever</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Minnesota winters bring snow, ice, and bitter cold that make evening drives across the Twin Cities genuinely risky. Online classes eliminate that entirely. Your child opens Zoom at home, and the lesson begins, no scraping a windshield required.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Faster Progress with Private Classes</h3>
                <p className="text-grey text-sm leading-relaxed">
                  In a one-on-one class, the teacher corrects every single mistake immediately and moves at your child's optimal pace. There is no waiting for slower students or being left behind by faster ones. Twin Cities families consistently report that their children advance faster in private online lessons than they ever did in group settings.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-navy mb-3">Welcoming All Muslim Communities</h3>
                <p className="text-grey text-sm leading-relaxed">
                  The Twin Cities' Muslim community spans Somali, South Asian, Arab, and East African backgrounds. Ease Quran is a welcoming space for every Muslim family, regardless of cultural background or linguistic heritage. All instruction is in clear English, making it accessible for families across Minneapolis and St. Paul's diverse Muslim community.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Minneapolis%20Minnesota" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Courses Available for Twin Cities Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across Minneapolis and St. Paul.
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
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-navy mb-4">How to Get Started from Minneapolis-St. Paul</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Central Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your Twin Cities family. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for Quran Classes Near You in Minneapolis?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in the Twin Cities, the best
              teacher for your child may not be the closest one on the map. Because every Ease Quran
              class is live and online, Minneapolis and St. Paul families connect one-on-one with certified teachers
              without driving anywhere, even in the depths of winter. You get the convenience of a teacher right in your home, with
              none of the commute, icy parking lot, or fixed group schedule of a local center.
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
                Frequently Asked Questions. Minneapolis-St. Paul
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
        headline="Certified Quran Education Across the Twin Cities"
        subtext="From Minneapolis and St. Paul to every Twin Cities suburb. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Minneapolis Minnesota"
      />
    </>
  );
}
