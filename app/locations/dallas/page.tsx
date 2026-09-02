import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Dallas, Texas",
  description:
    "Certified online Quran classes for Muslim families in Dallas, Texas. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/dallas",
  },
  openGraph: {
    title: "Online Quran Classes in Dallas, Texas | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families in Dallas-Fort Worth, serving Richardson, Plano, Irving, and all DFW suburbs.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Dallas", item: "https://easequran.com/locations/dallas" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families in the Dallas-Fort Worth metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "Dallas",
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
      name: "Is online Quran learning safe for my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Parents may sit in on any class, classes may be recorded by parents, and there is no private teacher–student contact outside scheduled sessions. Female teachers are available for girls on request, and every teacher is credential-verified.",
      },
    },
    {
      "@type": "Question",
      name: "Can I find Quran classes near me in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Dallas, our online classes serve any family in the Dallas area searching for Quran classes or teachers near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families in Richardson, Plano, and Irving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve all of the Dallas-Fort Worth metroplex including Richardson, Plano, Irving, Garland, Carrollton, Frisco, McKinney, and every suburb with a Muslim family. Online classes serve the entire DFW region equally.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Ease Quran different from local DFW Islamic schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our classes are one-on-one, online, and scheduled around your life. Unlike classroom settings in local Islamic centers, your child receives the teacher's full, undivided attention every session. Progress is faster and more consistent.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Dallas families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female teacher for sisters in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many DFW families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer classes for the Somali Muslim community in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We welcome families from all Muslim backgrounds including the growing Somali community in the DFW area. Our teachers are experienced with students from diverse cultural and linguistic backgrounds.",
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
    question: "Can I find Quran classes near me in Dallas?",
    answer:
      "Yes. While we are not a physical school in Dallas, our online classes work for any family in the Dallas area searching for Quran classes, a Quran teacher, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so you get all the benefits of a class near you without any travel.",
  },
  {
    question: "Do you serve families in Richardson, Plano, and Irving?",
    answer:
      "Yes. We serve the entire Dallas-Fort Worth metroplex including Richardson, Plano, Irving, Garland, Carrollton, Frisco, McKinney, Allen, Mesquite, Grand Prairie, and every suburb across DFW. Since all classes are online via Zoom, your location anywhere in the vast DFW area is no barrier whatsoever.",
  },
  {
    question: "What makes Ease Quran different from local DFW Islamic schools?",
    answer:
      "Our classes are fully one-on-one, conducted online, and scheduled entirely around your family's life. Unlike weekend Islamic school classrooms where a teacher divides attention among many students, your child receives 100% individual focus every session. There is no commuting across the DFW metroplex, no group class dynamics, and no rigid fixed schedule that doesn't fit your week.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Dallas-area Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female teacher for sisters in Dallas?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many DFW families from the South Asian and Arab communities specifically request her for their daughters and wives, and we are proud to provide this important option. Simply indicate your preference when booking.",
  },
  {
    question: "Do you offer classes for the Somali Muslim community in Dallas?",
    answer:
      "Yes. We warmly welcome families from all Muslim backgrounds, including the growing Somali community in the Dallas-Fort Worth area. Our teachers have experience working with students from diverse cultural and linguistic backgrounds, and all instruction is conducted in clear, accessible English. Every Muslim family in DFW is welcome to join us.",
  },
];

export default function DallasPage() {
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
              <li className="text-white/80">Dallas, Texas</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving Dallas-Fort Worth
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Dallas, Texas
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across the DFW metroplex. From Richardson and Plano to Irving, Garland, and Frisco, quality Quran instruction delivered to your home, on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Dallas%20Texas"
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
              DFW's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Rapidly Growing Muslim Community in the Heart of Texas
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                The Dallas-Fort Worth metropolitan area has become one of the most dynamic and rapidly growing Muslim communities in the United States, with an estimated population of over 150,000 Muslims across the sprawling Metroplex. The DFW Muslim community is notably diverse, reflecting the region's broad appeal to immigrant and first-generation American families. The north Dallas suburbs, particularly Richardson, Plano, and Carrollton, have become home to a substantial South Asian Muslim community, with Pakistani, Indian, and Bangladeshi families establishing active Islamic centers, weekend schools, and growing community networks. Irving, positioned between Dallas and Fort Worth, has a significant Muslim presence with multiple active masjids serving Arab and South Asian communities. The DFW area also has a growing Somali Muslim community, contributing to the Metroplex's increasingly diverse Islamic landscape. The Texas Muslim landscape overall is one of the fastest-growing in the nation, reflecting the broader pattern of Muslim population growth in the Sun Belt.
              </p>
              <p>
                The challenge for DFW Muslim families is the Metroplex's notorious geography. Dallas-Fort Worth is one of the largest metropolitan areas in the United States by land area, and driving across it, even on a good day, can mean significant time on I-35, I-635, or the Dallas North Tollway. A family in Frisco wanting to attend a program at a masjid in Irving might face a 45-minute drive each way. Weekend Islamic schools are concentrated in specific suburbs and may not be convenient for families who live far from those centers. Online Quran education solves this problem completely, bringing certified instruction to every DFW household without a single mile of driving.
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
              Why Online Works for DFW Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Dallas Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Skip the DFW Highway Maze</h3>
                <p className="text-grey text-sm leading-relaxed">
                  The DFW Metroplex is enormous and the highways are consistently congested. Driving your child to an Islamic center across town after school or work is a real time cost. Online classes eliminate that entirely. Your child opens Zoom at home, and the lesson begins, right on schedule.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Faster Progress with Private Classes</h3>
                <p className="text-grey text-sm leading-relaxed">
                  In a one-on-one class, the teacher corrects every single mistake immediately and moves at your child's optimal pace. There is no waiting for slower students or being left behind by faster ones. DFW families consistently report that their children advance faster in private online lessons than they ever did in group settings.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">Welcoming All Muslim Communities</h3>
                <p className="text-grey text-sm leading-relaxed">
                  DFW's Muslim community spans South Asian, Arab, Somali, and many other backgrounds. Ease Quran is a welcoming space for every Muslim family, regardless of cultural background or linguistic heritage. All instruction is in clear English, making it accessible for families across the Metroplex's diverse Muslim community.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Dallas%20Texas" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Courses Available for DFW Families
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across the Dallas-Fort Worth Metroplex.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Dallas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Central Time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your DFW family. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for Quran Classes Near You in Dallas?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Dallas, the best
              teacher for your child may not be the closest one on the map. Because every Ease Quran
              class is live and online, Dallas families connect one-on-one with certified teachers
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
                Frequently Asked Questions. Dallas, Texas
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
        headline="Certified Quran Education Across the DFW Metroplex"
        subtext="From Richardson and Plano to Irving, Garland, and Frisco. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Dallas Texas"
      />
    </>
  );
}
