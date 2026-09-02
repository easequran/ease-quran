import type { Metadata } from "next";
import Link from "next/link";
import { Navigation, Calendar, GraduationCap } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import TeacherStrip from "@/components/TeacherStrip";
import WhatsAppReviewsRow from "@/components/WhatsAppReviewsRow";

export const metadata: Metadata = {
  title: "Online Quran Classes in Phoenix, Arizona",
  description:
    "Certified online Quran classes for Muslim families in Phoenix, Arizona. Wifaq ul Madaris certified teachers, free trial class available.",
  alternates: {
    canonical: "https://easequran.com/locations/phoenix-arizona",
  },
  openGraph: {
    title: "Online Quran Classes in Phoenix, Arizona | Ease Quran Academy",
    description:
      "Certified online Quran classes for Muslim families across the Valley of the Sun, from Phoenix and Mesa to Scottsdale, Chandler, and Tempe.",
    images: ["/images/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.com/locations" },
    { "@type": "ListItem", position: 3, name: "Phoenix, Arizona", item: "https://easequran.com/locations/phoenix-arizona" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ease Quran Online Academy",
  url: "https://easequran.com",
  description:
    "Certified online Quran classes for Muslim families across the Phoenix metropolitan area.",
  areaServed: {
    "@type": "City",
    name: "Phoenix",
    containedInPlace: { "@type": "State", name: "Arizona" },
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
      name: "Can I find a Quran teacher near me in Phoenix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Though we are not a physical school in Phoenix, our online Quran academy serves any family across the Valley searching for a Quran teacher near them. You connect with a certified teacher over Zoom from home.",
      },
    },
    {
      "@type": "Question",
      name: "How do you avoid scheduling classes during extreme summer heat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because classes are online, the outside temperature never affects them. Whether it is 115 degrees in July or a mild winter evening, your child learns from an air-conditioned home, no drive required.",
      },
    },
    {
      "@type": "Question",
      name: "Does Arizona's lack of daylight saving time cause scheduling confusion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can for families coordinating across states, so we confirm your exact class time in Arizona's fixed time zone at booking and again before each session, keeping things simple regardless of the time of year.",
      },
    },
    {
      "@type": "Question",
      name: "Are teachers certified from recognized Islamic institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our teachers hold Wifaq ul Madaris Al-Arabia certifications, the credential of Pakistan's largest Islamic education board, globally recognized. Phoenix families can trust our teachers' qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a female Quran teacher for sisters in Phoenix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sister Almas Fatima is our certified female Quran teacher available exclusively for sisters and children. Many Phoenix families specifically request her for their daughters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve families across Mesa, Scottsdale, Chandler, and Tempe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve the entire Valley of the Sun, including Mesa, Scottsdale, Chandler, Tempe, Glendale, and Gilbert. Since classes are online, the Valley's sprawl is never a barrier.",
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
    question: "Can I find a Quran teacher near me in Phoenix?",
    answer:
      "Yes. While we are not a physical school in Phoenix, our online Quran academy works for any family across the Valley of the Sun searching for a Quran teacher, Quran classes, or a Hifz program near them. You connect one-on-one with a certified teacher over Zoom from home, so the distance between Phoenix, Mesa, and Chandler stops mattering.",
  },
  {
    question: "How do you avoid scheduling classes during extreme summer heat?",
    answer:
      "Phoenix summers routinely hit 110 to 115 degrees, and even a short walk to the car can feel brutal by late afternoon. Because every Ease Quran class happens online, that heat never touches your child's lesson. They log in from an air-conditioned living room whether it's a scorching July afternoon or a mild January evening, and the class runs exactly the same either way.",
  },
  {
    question: "Does Arizona's lack of daylight saving time cause scheduling confusion?",
    answer:
      "It can, since Arizona doesn't observe daylight saving time while most of the rest of the country does, which shifts the gap between Arizona and Eastern or Central time by an hour for part of the year. To avoid any mix-ups, we confirm your child's exact class time against Arizona's fixed schedule at booking, and again before each session, so there's never any guesswork about what time it actually is.",
  },
  {
    question: "Are teachers certified from recognized Islamic institutions?",
    answer:
      "Yes. All Ease Quran teachers hold certifications from Wifaq ul Madaris Al-Arabia, Pakistan's largest Islamic education board, globally recognized. This is not a casual credential, it represents years of rigorous academic study in Quran, Tajweed, Arabic, and Islamic sciences. Phoenix-area Muslim families can have full confidence in our teachers' qualifications.",
  },
  {
    question: "Is there a female Quran teacher for sisters in Phoenix?",
    answer:
      "Yes. Sister Almas Fatima, our certified Qaria e Quran with a B.A. in Islamic Studies, is available exclusively for sisters and children. Many Phoenix families specifically request her for their daughters, and we are proud to offer this option. Simply mention your preference when booking your free trial.",
  },
  {
    question: "Do you serve families across Mesa, Scottsdale, Chandler, and Tempe?",
    answer:
      "Yes. We serve the entire Valley of the Sun, including Mesa, Scottsdale, Chandler, Tempe, Glendale, Gilbert, and every community across greater Phoenix. Since all classes are conducted online via Zoom, the Valley's sprawling distances between suburbs are simply not a factor.",
  },
];

export default function PhoenixArizonaPage() {
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
              <li className="text-white/80">Phoenix, Arizona</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              Serving the Valley of the Sun
            </span>
            <h1 className="heading-1 text-white mb-6">
              Online Quran Classes in Phoenix, Arizona
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
              Certified, one-on-one Quran education for Muslim families across the Valley of the Sun. From Mesa and Scottsdale to Chandler, Tempe, and Glendale, quality Quran instruction delivered to your air-conditioned home, on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/free-trial"
                className="bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-all duration-200 text-sm text-center"
              >
                Book Free Trial Class
              </Link>
              <a
                href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Phoenix%20Arizona"
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
              Phoenix's Muslim Community
            </span>
            <h2 className="heading-2 text-navy mb-6">
              A Fast-Growing Muslim Community Across a Sprawling Desert Metro
            </h2>
            <div className="space-y-5 text-grey leading-relaxed">
              <p>
                Metro Phoenix has become one of the fastest-growing Muslim communities in the American Southwest, made up of South Asian, Arab, and East African families alongside a significant number of refugees resettled in Arizona over the past two decades. The Valley's Muslim population is spread across a genuinely enormous metro area, with masjids and Islamic centers dotted from downtown Phoenix out to Mesa, Chandler, Tempe, and Scottsdale, each often serving its own pocket of the community rather than the region as a whole. That sprawl is part of what defines everyday Muslim life here more than in most American cities.
              </p>
              <p>
                The Valley's specific challenge is its size combined with its climate. Phoenix summers routinely push past 110 degrees for weeks at a time, and driving across the metro, sometimes 30 or 40 minutes each way, for an evening class becomes genuinely unappealing when the pavement itself is dangerously hot. Arizona also skips daylight saving time altogether, which quietly shifts its relationship to Eastern and Central time zones for half the year and can complicate any schedule involving family or teachers elsewhere. Online Quran education sidesteps both issues at once: no drive across a scorching metro, and one confirmed class time that never depends on guessing what the rest of the country's clocks are doing.
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
              Why Online Works for Phoenix Families
            </span>
            <h2 className="heading-2 text-navy mb-10">
              Why Phoenix Families Choose Online Quran Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Navigation size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">No Drive Through the Heat</h3>
                <p className="text-grey text-sm leading-relaxed">
                  When it's 110 degrees outside, even a short drive across the Valley to a masjid feels like a lot to ask. Online classes remove that entirely. Your child stays inside, cool and comfortable, and the lesson starts right on time.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">One Confirmed Time, No Confusion</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Arizona's fixed time zone can get confusing when coordinating with family or teachers elsewhere. We confirm your child's exact class time before every session, so there's never any doubt about when class actually starts.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-gold" />
                </div>
                <h3 className="card-title mb-3">One Teacher, No Matter the Distance</h3>
                <p className="text-grey text-sm leading-relaxed">
                  Whether your family is in central Phoenix, out in Chandler, or up in Scottsdale, the Valley's sprawl no longer decides who your child's teacher can be. The same certified teacher meets your child every week, wherever you are in the metro.
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
            <a href="https://wa.me/923195657389?text=Hi%20I%20am%20interested%20in%20online%20Quran%20classes%20in%20Phoenix%20Arizona" target="_blank" rel="noopener noreferrer" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-xl hover:bg-offwhite transition-colors text-sm text-center">
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
              Quran Classes for Kids and Adults in Phoenix
            </h2>
            <p className="text-grey mb-8 leading-relaxed">
              Structured, progressive courses taught by certified scholars, designed for English-speaking Muslim families across the Valley of the Sun.
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
              <h2 className="heading-2 text-navy mb-4">How to Get Started from Phoenix</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Tell Us About Your Child", desc: "Book online or WhatsApp us. Share your child's age, current Quran level, and preferred schedule in Arizona time. We'll match you with the right certified teacher immediately." },
                { step: "02", title: "Free Trial Lesson", desc: "Your child attends a live, one-on-one Zoom class with their teacher at no cost. Experience Ease Quran's teaching style firsthand before making any commitment." },
                { step: "03", title: "Start Your Regular Classes", desc: "Love the trial? We create a consistent weekly schedule that works for your Phoenix-area family. Reliable, flexible, and always from the comfort of your home." },
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
              Looking for a Quran Teacher Near You in Phoenix?
            </h2>
            <p className="text-grey leading-relaxed">
              If you have been searching for &ldquo;Quran classes near me&rdquo; in Phoenix, the best
              teacher for your child may not be the closest one on the map, especially in a metro
              this spread out. Because every Ease Quran class is live and online, Valley families
              connect one-on-one with certified teachers without driving anywhere. You get the
              convenience of a teacher right in your home, with none of the desert commute, parking,
              or fixed group schedule of a local center.
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
                Frequently Asked Questions. Phoenix, Arizona
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
        headline="Certified Quran Education Across the Valley of the Sun"
        subtext="From Phoenix and Mesa to Scottsdale, Chandler, and Tempe. Ease Quran delivers one-on-one, certified Quran instruction to your home. Your first class is free."
        primaryCta="Book Free Trial Class"
        primaryHref="/free-trial"
        whatsappText="Hi I am interested in online Quran classes in Phoenix Arizona"
      />
    </>
  );
}
